import React, { useState } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { MapPin, Briefcase, Clock, CheckCircle2, ArrowRight, ArrowLeft } from 'lucide-react';
import { SEO } from '../components/common/SEO';
import { Breadcrumb } from '../components/common/Breadcrumb';
import { Input } from '../components/common/Input';
import { Textarea } from '../components/common/Textarea';
import { Button } from '../components/common/Button';
import { JOBS_DATA } from '../data/jobs';
import { 
  validateName, 
  validatePhone, 
  validateEmail, 
  filterNameInput, 
  filterPhoneInput 
} from '../utils/validation';

export const CareerDetailPage = () => {
  const { slug } = useParams();
  const job = JOBS_DATA.find((j) => j.slug === slug);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    linkedin: '',
    portfolio: '',
    coverNote: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!job) {
    return <Navigate to="/careers" replace />;
  }

  const handleNameChange = (e) => {
    const sanitized = filterNameInput(e.target.value);
    setFormData(prev => ({ ...prev, name: sanitized }));
    if (errors.name) {
      setErrors(prev => ({ ...prev, name: validateName(sanitized) }));
    }
  };

  const handlePhoneChange = (e) => {
    const sanitized = filterPhoneInput(e.target.value);
    setFormData(prev => ({ ...prev, phone: sanitized }));
    if (errors.phone) {
      setErrors(prev => ({ ...prev, phone: validatePhone(sanitized) }));
    }
  };

  const handleEmailChange = (e) => {
    const val = e.target.value;
    setFormData(prev => ({ ...prev, email: val }));
    if (errors.email) {
      setErrors(prev => ({ ...prev, email: validateEmail(val) }));
    }
  };

  const validate = () => {
    const errs = {};
    const nameErr = validateName(formData.name);
    if (nameErr) errs.name = nameErr;

    const phoneErr = validatePhone(formData.phone);
    if (phoneErr) errs.phone = phoneErr;

    const emailErr = validateEmail(formData.email);
    if (emailErr) errs.email = emailErr;

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    try {
      await api.applyCareer({
        jobSlug: slug,
        jobTitle: job.title,
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        linkedin: formData.linkedin,
        portfolio: formData.portfolio,
        coverNote: formData.coverNote,
      });

      api.createLead({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        service: `Career: ${job.title}`,
        source: 'career-page',
        message: `LinkedIn: ${formData.linkedin} | Note: ${formData.coverNote}`,
      }).catch(() => {});

      setIsSubmitting(false);
      setIsSubmitted(true);
    } catch (err) {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }
  };

  return (
    <>
      <SEO
        title={`${job.title} | Careers at Tepito`}
        description={job.summary}
      />

      <main className="pt-32 sm:pt-40 pb-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <Breadcrumb
            items={[
              { label: 'Careers', to: '/careers' },
              { label: job.title }
            ]}
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left: Job Details */}
            <div className="lg:col-span-7 space-y-10">
              <div className="space-y-4">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider px-3 py-1 bg-accent/25 text-primary rounded-full">
                    {job.department}
                  </span>
                  <span className="text-xs font-mono text-muted flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{job.location}</span>
                  </span>
                  <span className="text-xs font-mono text-muted flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{job.type}</span>
                  </span>
                </div>

                <h1 className="font-display font-black text-3xl sm:text-5xl text-primary tracking-tight">
                  {job.title}
                </h1>

                <p className="font-mono text-sm text-primary font-bold">
                  Compensation: {job.salary} • Experience: {job.experience}
                </p>

                <p className="text-base text-muted leading-relaxed pt-2">
                  {job.summary}
                </p>
              </div>

              {/* Responsibilities */}
              <div className="space-y-4 border-t border-border pt-8">
                <h3 className="font-display font-extrabold text-xl text-primary tracking-tight uppercase">
                  Key Responsibilities
                </h3>
                <ul className="space-y-3">
                  {job.responsibilities.map((r, i) => (
                    <li key={i} className="text-sm text-muted leading-relaxed flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent-dark mt-2 flex-shrink-0" />
                      <span>{r}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Requirements */}
              <div className="space-y-4 border-t border-border pt-8">
                <h3 className="font-display font-extrabold text-xl text-primary tracking-tight uppercase">
                  What We Look For
                </h3>
                <ul className="space-y-3">
                  {job.requirements.map((req, i) => (
                    <li key={i} className="text-sm text-muted leading-relaxed flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent-dark mt-2 flex-shrink-0" />
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right: Application Card */}
            <div className="lg:col-span-5 bg-white rounded-3xl p-8 sm:p-10 border border-border shadow-elevated sticky top-28">
              {isSubmitted ? (
                <div className="text-center py-8 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-accent/30 text-primary flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-display font-black text-2xl text-primary">
                    Application Submitted!
                  </h3>
                  <p className="text-xs text-muted max-w-xs mx-auto leading-relaxed">
                    Thank you for applying for <strong>{job.title}</strong>. Our engineering and talent squad reviews applications weekly.
                  </p>
                  <Button
                    variant="secondary"
                    size="sm"
                    onClick={() => setIsSubmitted(false)}
                  >
                    Submit Another Profile
                  </Button>
                </div>
              ) : (
                <div>
                  <div className="mb-6 pb-4 border-b border-border">
                    <h3 className="font-display font-extrabold text-xl text-primary tracking-tight">
                      Apply For This Role
                    </h3>
                    <p className="text-xs text-muted mt-1">
                      Direct review by the founding team.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <Input
                      label="Full Legal Name *"
                      placeholder="e.g. Priya Sharma"
                      required
                      value={formData.name}
                      onChange={handleNameChange}
                      error={errors.name}
                    />

                    <Input
                      label="Email Address *"
                      placeholder="priya@example.com"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleEmailChange}
                      error={errors.email}
                    />

                    <Input
                      label="Contact Phone (10 digits) *"
                      placeholder="e.g. 9876543210"
                      type="tel"
                      maxLength={10}
                      required
                      value={formData.phone}
                      onChange={handlePhoneChange}
                      error={errors.phone}
                    />

                    <Input
                      label="LinkedIn or GitHub Profile"
                      placeholder="https://linkedin.com/in/..."
                      value={formData.linkedin}
                      onChange={(e) => setFormData({ ...formData, linkedin: e.target.value })}
                    />

                    <Textarea
                      label="Why Tepito? (Brief Note)"
                      placeholder="What excites you about our vision or technology stack?"
                      rows={3}
                      value={formData.coverNote}
                      onChange={(e) => setFormData({ ...formData, coverNote: e.target.value })}
                    />

                    <div className="pt-2">
                      <Button
                        type="submit"
                        variant="primary"
                        fullWidth
                        size="lg"
                        arrow
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? 'Submitting Application...' : 'Send Application'}
                      </Button>
                    </div>
                  </form>
                </div>
              )}
            </div>

          </div>

        </div>
      </main>
    </>
  );
};
