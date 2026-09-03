import React, { useState, useEffect } from 'react';
import { Upload, Link as LinkIcon, Image as ImageIcon, Check, Trash2, Loader2, Sparkles } from 'lucide-react';
import { api } from '../../services/api';

export const ImageUploadPicker = ({
  label = 'Image',
  value = '',
  currentImage = '',
  onChange,
  onImageSelect,
  onSelect,
  folder = 'general',
}) => {
  const effectiveValue = value || currentImage || '';
  const effectiveOnChange = onChange || onImageSelect || onSelect || (() => {});
  const [activeMode, setActiveMode] = useState('upload'); // 'upload' | 'url' | 'library'
  const [isUploading, setIsUploading] = useState(false);
  const [libraryImages, setLibraryImages] = useState([]);
  const [isLoadingLibrary, setIsLoadingLibrary] = useState(false);
  const [urlInput, setUrlInput] = useState(effectiveValue);

  useEffect(() => {
    setUrlInput(effectiveValue);
  }, [effectiveValue]);

  const loadLibrary = async () => {
    setIsLoadingLibrary(true);
    try {
      const res = await api.getMediaList();
      if (res.success) {
        setLibraryImages(res.data);
      }
    } catch (err) {
      console.warn('Failed to load media library:', err.message);
    } finally {
      setIsLoadingLibrary(false);
    }
  };

  const handleFileUpload = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const formData = new FormData();
    formData.append('file', file);
    formData.append('folder', folder);
    formData.append('title', file.name);

    setIsUploading(true);
    try {
      const token = localStorage.getItem('tepito_auth_token');
      const response = await fetch('http://localhost:5000/api/media/upload', {
        method: 'POST',
        headers: {
          ...(token ? { Authorization: `Bearer ${token}` } : {}),
        },
        body: formData,
      });

      const data = await response.json();
      if (response.ok && data.data?.url) {
        effectiveOnChange(data.data.url);
        setUrlInput(data.data.url);
      } else {
        alert(data.message || 'Image upload failed');
      }
    } catch (err) {
      alert('Upload error: ' + err.message);
    } finally {
      setIsUploading(false);
    }
  };

  const handleUrlApply = () => {
    effectiveOnChange(urlInput);
  };

  return (
    <div className="space-y-2">
      {label && (
        <div className="flex items-center justify-between">
          <label className="text-xs font-mono font-bold uppercase tracking-wider text-[#444444]">
            {label}
          </label>
          <div className="flex items-center gap-1 bg-[#F6F4F1] p-1 rounded-xl border border-[#E5E1DD]">
            <button
              type="button"
              onClick={() => setActiveMode('upload')}
              className={`px-2.5 py-1 rounded-lg text-[11px] font-bold transition-all ${
                activeMode === 'upload' ? 'bg-[#111111] text-white shadow-xs' : 'text-[#666666] hover:text-[#111111]'
              }`}
            >
              Upload File
            </button>
            <button
              type="button"
              onClick={() => setActiveMode('url')}
              className={`px-2.5 py-1 rounded-lg text-[11px] font-bold transition-all ${
                activeMode === 'url' ? 'bg-[#111111] text-white shadow-xs' : 'text-[#666666] hover:text-[#111111]'
              }`}
            >
              Image URL
            </button>
            <button
              type="button"
              onClick={() => {
                setActiveMode('library');
                loadLibrary();
              }}
              className={`px-2.5 py-1 rounded-lg text-[11px] font-bold transition-all ${
                activeMode === 'library' ? 'bg-[#111111] text-white shadow-xs' : 'text-[#666666] hover:text-[#111111]'
              }`}
            >
              Media Gallery
            </button>
          </div>
        </div>
      )}

      {/* MODE 1: FILE UPLOAD (Device / Gallery) */}
      {activeMode === 'upload' && (
        <div className="p-4 rounded-2xl bg-[#FBF9F7] border border-dashed border-[#D92C1C]/40 flex flex-col sm:flex-row items-center gap-4">
          <label className="flex-1 w-full flex flex-col items-center justify-center p-4 border border-[#E5E1DD] bg-white rounded-xl cursor-pointer hover:border-[#D92C1C] transition-colors">
            <input
              type="file"
              accept="image/*"
              onChange={handleFileUpload}
              className="hidden"
              disabled={isUploading}
            />
            {isUploading ? (
              <div className="flex items-center gap-2 text-xs font-bold text-[#D92C1C]">
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Uploading Image to Server...</span>
              </div>
            ) : (
              <div className="flex flex-col items-center gap-1.5 text-center">
                <Upload className="w-5 h-5 text-[#D92C1C]" />
                <span className="text-xs font-bold text-[#111111]">
                  Click to choose file from Device / Gallery
                </span>
                <span className="text-[10px] text-[#888888] font-mono">
                  PNG, JPG, WebP, SVG up to 10MB
                </span>
              </div>
            )}
          </label>

          {effectiveValue && (
            <div className="relative w-24 h-24 rounded-2xl overflow-hidden border border-[#E5E1DD] bg-white flex-shrink-0 shadow-xs group">
              <img src={effectiveValue} alt="Preview" className="w-full h-full object-cover" />
              <button
                type="button"
                onClick={() => effectiveOnChange('')}
                className="absolute inset-0 bg-black/60 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
                title="Remove image"
              >
                <Trash2 className="w-4 h-4 text-red-400" />
              </button>
            </div>
          )}
        </div>
      )}

      {/* MODE 2: PASTE IMAGE URL */}
      {activeMode === 'url' && (
        <div className="p-4 rounded-2xl bg-[#FBF9F7] border border-[#E5E1DD] space-y-3">
          <div className="flex items-center gap-2">
            <input
              type="url"
              placeholder="https://images.unsplash.com/..."
              value={urlInput}
              onChange={(e) => setUrlInput(e.target.value)}
              className="flex-1 px-4 py-2.5 rounded-xl bg-white border border-[#E5E1DD] text-xs outline-none focus:border-[#D92C1C]"
            />
            <button
              type="button"
              onClick={handleUrlApply}
              className="px-4 py-2.5 rounded-xl bg-[#111111] hover:bg-black text-white text-xs font-bold uppercase transition-colors cursor-pointer"
            >
              Apply
            </button>
          </div>

          {effectiveValue && (
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 rounded-xl overflow-hidden border border-[#E5E1DD] bg-white flex-shrink-0">
                <img src={effectiveValue} alt="URL Preview" className="w-full h-full object-cover" />
              </div>
              <span className="text-[11px] text-emerald-700 font-bold flex items-center gap-1">
                <Check className="w-3.5 h-3.5" /> URL image active
              </span>
            </div>
          )}
        </div>
      )}

      {/* MODE 3: SELECT FROM MEDIA LIBRARY */}
      {activeMode === 'library' && (
        <div className="p-4 rounded-2xl bg-[#FBF9F7] border border-[#E5E1DD] space-y-3">
          <div className="flex items-center justify-between text-xs">
            <span className="font-bold text-[#666666]">
              Choose from previously uploaded media:
            </span>
            <button
              type="button"
              onClick={loadLibrary}
              className="text-[11px] font-bold text-[#D92C1C] hover:underline cursor-pointer"
            >
              Refresh Library ↻
            </button>
          </div>

          {isLoadingLibrary ? (
            <div className="py-8 text-center text-xs text-[#666666] flex items-center justify-center gap-2">
              <Loader2 className="w-4 h-4 animate-spin text-[#D92C1C]" />
              <span>Loading Media Gallery...</span>
            </div>
          ) : libraryImages.length === 0 ? (
            <div className="py-6 text-center text-xs text-[#888888] italic">
              No images in gallery yet. Upload a file above to add to your library!
            </div>
          ) : (
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2.5 max-h-48 overflow-y-auto p-1">
              {libraryImages.map((img) => {
                const isSelected = effectiveValue === img.url;
                return (
                  <button
                    key={img._id}
                    type="button"
                    onClick={() => {
                      effectiveOnChange(img.url);
                      setUrlInput(img.url);
                    }}
                    className={`relative rounded-xl overflow-hidden aspect-square border-2 transition-all cursor-pointer group ${
                      isSelected
                        ? 'border-[#D92C1C] shadow-md ring-2 ring-[#D92C1C]/30 scale-95'
                        : 'border-[#E5E1DD] hover:border-[#111111]'
                    }`}
                  >
                    <img src={img.url} alt={img.title} className="w-full h-full object-cover" />
                    {isSelected && (
                      <div className="absolute inset-0 bg-[#D92C1C]/30 flex items-center justify-center">
                        <Check className="w-5 h-5 text-white stroke-[3]" />
                      </div>
                    )}
                  </button>
                );
              })}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
