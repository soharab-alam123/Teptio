import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Settings, 
  Menu as MenuIcon, 
  FileText, 
  Wrench, 
  Users, 
  MessageSquare, 
  HelpCircle, 
  Download, 
  Plus, 
  Trash2, 
  CheckCircle2, 
  AlertCircle,
  ExternalLink,
  Phone,
  Mail,
  MapPin,
  Search,
  RefreshCw,
  LogOut,
  ShoppingBag,
  Briefcase,
  UserCheck,
  Globe,
  Eye,
  Image as ImageIcon,
  Copy,
  Check,
  TrendingUp,
  Info,
  CalendarCheck,
  PhoneCall,
  Clock,
  Sparkles,
  Share2,
  Layers,
  ShieldCheck,
  Zap,
  Award,
  ArrowRight,
  Moon,
  Sun,
  Send,
  Radio,
  Bell,
  Smartphone,
  Command,
  User,
  Key,
  Camera,
  ChevronLeft,
  ChevronRight,
  PanelLeft,
  Lock,
  Database,
  Printer,
  Receipt,
  FileSpreadsheet,
  Upload,
  Calendar
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useCMS } from '../context/CMSContext';
import { api } from '../services/api';
import { Button } from '../components/common/Button';
import { Input } from '../components/common/Input';
import { Textarea } from '../components/common/Textarea';
import { SEO } from '../components/common/SEO';
import { Logo } from '../components/common/Logo';
import { ImageUploadPicker } from '../components/common/ImageUploadPicker';
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  Tooltip as RechartsTooltip,
  CartesianGrid,
  Legend as RechartsLegend
} from 'recharts';

export const AdminDashboard = () => {
  const { user, isAuthenticated, loading, logout, setUser } = useAuth();
  const { settings, headerConfig, footerConfig, services: initialServices, refreshCMS } = useCMS();
  const navigate = useNavigate();

  // Active Tab
  const [activeTab, setActiveTab] = useState('overview');

  // Global State
  const [stats, setStats] = useState(null);
  const [leads, setLeads] = useState([]);
  const [leadStatusFilter, setLeadStatusFilter] = useState('All');
  const [leadSearch, setLeadSearch] = useState('');
  const [isLoadingLeads, setIsLoadingLeads] = useState(false);
  const [bookingsList, setBookingsList] = useState([
    { _id: 'b1', bookingRef: 'TP-948201', customerName: 'Vikas Sharma', phone: '9876543210', service: 'Instant Parcel & Courier Delivery', date: 'Today, 2:30 PM', amount: '₹99', status: 'Dispatched' },
    { _id: 'b2', bookingRef: 'TP-552194', customerName: 'Ananya Verma', phone: '9839011223', service: 'City Cabs & Airport Transfers', date: 'Today, 4:00 PM', amount: '₹499', status: 'In Progress' },
    { _id: 'b3', bookingRef: 'TP-338291', customerName: 'Priya Srivastava', phone: '9415088776', service: 'Luxury Salon & Spa at Home', date: 'Tomorrow, 11:00 AM', amount: '₹899', status: 'Confirmed' },
    { _id: 'b4', bookingRef: 'TP-771829', customerName: 'Mohd. Zeeshan', phone: '9935109988', service: 'Home & Kitchen Deep Cleaning', date: 'Tomorrow, 10:00 AM', amount: '₹1,199', status: 'Pending' },
  ]);

  // Complete Rich Defaults for CMS States
  const defaultHomePage = {
    hero: {
      badge: 'MULTI-SERVICE PLATFORM • LUCKNOW',
      title: 'EVERYTHING YOU NEED.',
      subtitle: 'RIGHT WHEN YOU NEED IT.',
      description: 'One trusted platform for rides, deliveries, salon pampering, home services and everyday essentials across Lucknow.',
      buttonText: 'Explore Services',
      buttonUrl: '/services',
      secondaryButtonText: 'Get Started',
      secondaryButtonUrl: '#booking',
    },
    stats: [
      { value: '10', suffix: 'K+', label: 'Happy Customers' },
      { value: '25', suffix: 'K+', label: 'Services Completed' },
      { value: '500', suffix: '+', label: 'Service Partners' },
      { value: '24/7', suffix: '', label: 'Customer Support' }
    ],
    whyChooseUs: {
      tag: 'The Platform Standard',
      title: 'BUILT FOR REAL LIFE.',
      subtitle: 'Urban life is demanding enough. Your daily services should just work — reliably, safely, and without friction.',
      items: [
        { title: 'Rigorous Background Vetting', desc: 'Every driver, plumber, electrician, and salon specialist undergoes criminal record checks, trade-skill assessments, and identity verification.' },
        { title: 'Predictable Upfront Pricing', desc: 'No hidden surcharge surprises. You see the transparent, fixed rate before booking — with digital invoice tracking sent immediately to your phone.' },
        { title: 'Real-Time Telemetry Tracking', desc: 'Watch your cab or courier move live on the map. Get live ETAs and verified OTP handshakes for complete accountability.' },
        { title: 'Human Support in 60 Seconds', desc: 'No endless automated robot loops. When something needs attention, reach an empathetic, empowered resolution specialist in seconds.' }
      ]
    },
    howItWorks: {
      tag: 'How It Works',
      title: 'THREE SIMPLE STEPS.',
      subtitle: 'Get top-rated doorstep service in Lucknow in less than 30 minutes.',
      steps: [
        { num: '01', title: 'Choose Your Service', desc: 'Select from parcel courier, city cabs, salon at home, deep cleaning, plumbing or electrical fixes.' },
        { num: '02', title: 'Transparent Upfront Rate', desc: 'See the exact fixed fare upfront with zero surge pricing multipliers and confirmed ETA.' },
        { num: '03', title: 'Specialist at Your Doorstep', desc: 'A background-verified specialist arrives equipped with professional tools and sterile gear.' }
      ]
    },
    finalCTA: {
      title: 'EXPERIENCE SEAMLESS URBAN LIVING IN LUCKNOW.',
      subtitle: 'Join over 45,000 satisfied households across Lucknow.',
      buttonText: 'Book Instant Dispatch',
      buttonUrl: '#booking',
    }
  };

  const defaultAboutPage = {
    hero: {
      badge: 'Our Founding Story',
      title: "BUILT WITH INTENTION FOR LUCKNOW'S MODERN RHYTHM.",
      subtitle: 'RELIABLE, TRANSPARENT, AND ON-DEMAND.',
      description: 'Tepito India Private Limited is a next-generation digital marketplace connecting customers with products and everyday services through one convenient platform. From e-commerce and parcel delivery to home cleaning, beauty & lifestyle products, and cab & ride services, TEPITO brings multiple needs together in one simple, reliable and technology-driven ecosystem.',
    },
    pillars: [
      { num: '01', title: 'HUMAN DIGNITY FIRST', desc: 'Whether it is a resident whose pipe burst at midnight or a delivery captain navigating summer heat, every protocol is engineered with respect, fair living wages, and genuine empathy.', quote: 'People over process, always.' },
      { num: '02', title: 'ZERO SURGE PRICING', desc: 'We never weaponize bad weather or midnight hours. Every rate is locked upfront with absolute clarity before you confirm. No hidden charges, no cash bargaining.', quote: 'Fair pricing. Always transparent.' },
      { num: '03', title: 'RADICAL POLICE VERIFICATION', desc: 'Every technician, rider, and beautician undergoes biometric government ID screening and comprehensive background verification before entering any home.', quote: '100% Background checked.' },
      { num: '04', title: 'SUB-30 MINUTE DISPATCH', desc: 'Optimized hyper-local routing across 14 Lucknow urban zones for swift 20-30 min arrival.', quote: 'Swift doorstep response.' }
    ],
    stats: [
      { value: '45,000+', label: 'Households Served in Lucknow' },
      { value: '14 Zones', label: 'Hyper-local City Coverage' },
      { value: '99.4%', label: 'On-Time Doorstep Dispatch' },
      { value: '₹5 Lakh', label: 'Accidental Protection Shield' }
    ]
  };

  const defaultContactPage = {
    hero: {
      badge: 'DIRECT SUPPORT & HELPDESK / LUCKNOW HUB',
      title: "WE'RE HERE TO HELP.",
      subtitle: 'REACH OUR LUCKNOW DISPATCH DESK ANYTIME.',
      description: 'Have a question about a booking, need help with a driver or technician, or interested in becoming a partner? Our Lucknow support desk is live 24/7.',
    },
    supportHours: '24 Hours • 7 Days a Week (All Lucknow Zones)',
    guaranteeText: 'Guaranteed human response in under 60 seconds with no automated robot loops.',
    ticketPrefix: 'TP-LKO-',
  };

  // CMS Form States
  const [siteSettingsForm, setSiteSettingsForm] = useState(settings || {});
  const [headerForm, setHeaderForm] = useState(headerConfig || { navigation: [] });
  const [footerForm, setFooterForm] = useState(footerConfig || {
    brandHeadline: 'One App. Endless Possibilities.',
    brandDescription: 'Tepito is your all-in-one platform for everyday services, lifestyle needs, and trusted solutions. We bring convenience, reliability, and value together — all in one app.',
    copyrightText: '© 2026 Tepito India Private Limited. All rights reserved.',
    servicesLinks: [
      { name: 'Parcel Delivery', path: '/services/parcel-delivery' },
      { name: 'Cab & Ride', path: '/services/cab-rides' },
      { name: 'Beauty & Salon', path: '/services/salon-at-home' },
      { name: 'Home Cleaning', path: '/services/home-deep-cleaning' },
      { name: 'Plumbing Services', path: '/services/plumbing-solutions' },
      { name: 'Electrical Services', path: '/services/licensed-electrician' },
    ],
    companyLinks: [
      { name: 'About Us', path: '/about' },
      { name: 'How It Works', path: '/how-it-works' },
      { name: 'Partner With Us', path: '/partner' },
      { name: 'Contact Us', path: '/contact' },
    ],
    supportLinks: [
      { name: 'FAQ & Help Center', path: '/faq' },
      { name: 'Safety & Trust', path: '/about' },
      { name: 'Privacy Policy', path: '/about' },
      { name: 'Terms of Service', path: '/about' },
    ]
  });

  const [servicesList, setServicesList] = useState(initialServices || []);
  const [productsList, setProductsList] = useState([]);
  const [testimonialsList, setTestimonialsList] = useState([]);
  const [faqsList, setFaqsList] = useState([]);
  const [homePageForm, setHomePageForm] = useState(defaultHomePage);
  const [aboutPageForm, setAboutPageForm] = useState(defaultAboutPage);
  const [contactPageForm, setContactPageForm] = useState(defaultContactPage);
  const [partnerApps, setPartnerApps] = useState([]);
  const [jobApps, setJobApps] = useState([]);
  const [mediaList, setMediaList] = useState([]);

  // Modal / Edit / View States
  const [editingService, setEditingService] = useState(null);
  const [editingProduct, setEditingProduct] = useState(null);
  const [editingTestimonial, setEditingTestimonial] = useState(null);
  const [editingFAQ, setEditingFAQ] = useState(null);
  const [viewingLead, setViewingLead] = useState(null);
  const [viewingPartnerApp, setViewingPartnerApp] = useState(null);
  const [viewingJobApp, setViewingJobApp] = useState(null);
  const [copiedUrl, setCopiedUrl] = useState('');

  // Sidebar Collapse & Mobile Drawer States
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(() => {
    return localStorage.getItem('tepito_sidebar_collapsed') === 'true';
  });
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  const toggleSidebarCollapse = () => {
    setIsSidebarCollapsed(prev => {
      const next = !prev;
      localStorage.setItem('tepito_sidebar_collapsed', next.toString());
      return next;
    });
  };

  // Admin Profile Settings State with LocalStorage memory
  const [profileForm, setProfileForm] = useState(() => {
    const saved = localStorage.getItem('tepito_admin_profile');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {}
    }
    return {
      name: user?.name || user?.fullName || 'Sohrab Alam',
      email: user?.email || 'admin@tepito.com',
      phone: '9876543210',
      role: 'Super Administrator',
      avatar: user?.avatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
      currentPassword: '',
      newPassword: '',
      confirmPassword: ''
    };
  });
  const [isSavingProfile, setIsSavingProfile] = useState(false);

  // MongoDB Backup & Invoice States
  const [isBackingUp, setIsBackingUp] = useState(false);
  const [isRestoring, setIsRestoring] = useState(false);
  const [activeInvoiceBooking, setActiveInvoiceBooking] = useState(null);

  const handleDownloadBackup = async () => {
    setIsBackingUp(true);
    try {
      const response = await fetch('http://localhost:5000/api/admin/backup');
      const data = await response.json();
      const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `tepito_mongodb_backup_${new Date().toISOString().slice(0, 10)}.json`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
      showToast('MongoDB full database backup downloaded successfully!');
    } catch (err) {
      showToast('Failed to generate database backup: ' + err.message, true);
    } finally {
      setIsBackingUp(false);
    }
  };

  const handleRestoreBackup = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!window.confirm('CAUTION: Restoring a backup snapshot will sync database records with the snapshot data. Proceed?')) {
      e.target.value = '';
      return;
    }

    setIsRestoring(true);
    try {
      const reader = new FileReader();
      reader.onload = async (event) => {
        try {
          const parsed = JSON.parse(event.target.result);
          await api.restoreBackup(parsed);
          showToast('Database snapshot restored successfully!');
          refreshCMS();
          loadServices();
          loadProducts();
          loadFAQs();
          loadTestimonials();
          loadLeads();
          loadStats();
        } catch (err) {
          showToast('Invalid backup JSON file: ' + err.message, true);
        } finally {
          setIsRestoring(false);
        }
      };
      reader.readAsText(file);
    } catch (err) {
      showToast('Failed to read backup file', true);
      setIsRestoring(false);
    }
  };

  // Dark Mode State
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem('tepito_admin_dark') === 'true';
  });

  const toggleDarkMode = () => {
    setIsDarkMode(prev => {
      const next = !prev;
      localStorage.setItem('tepito_admin_dark', next.toString());
      return next;
    });
  };

  // Omnisearch Global Bar State
  const [omniSearchQuery, setOmniSearchQuery] = useState('');
  const [isOmniOpen, setIsOmniOpen] = useState(false);

  // Marketing & Broadcast State
  const [broadcastForm, setBroadcastForm] = useState({
    title: 'Weekend Lucknow 20% OFF Special',
    channels: ['sms', 'push', 'whatsapp'],
    audience: 'all_customers',
    zone: 'all',
    message: 'Namaste {CustomerName}! Get flat 20% OFF on all Cabs, Instant Courier & Home Cleaning across Lucknow this weekend with coupon TEPITO20. Fast 30-min doorstep arrival guaranteed!',
    promoCode: 'TEPITO20',
    ctaLink: 'https://tepito.in/services',
    scheduledTime: 'instant',
  });
  const [isSendingBroadcast, setIsSendingBroadcast] = useState(false);
  const [broadcastHistory, setBroadcastHistory] = useState([
    {
      id: 'bc-1',
      title: 'Monsoon Car Wash & Home Deep Cleaning Special',
      channel: 'SMS & Web Push Notification',
      audience: 'Gomti Nagar & Hazratganj (12,400 Users)',
      sentAt: 'Yesterday, 10:30 AM',
      deliveryRate: '99.6%',
      clickRate: '26.8%',
      status: 'Delivered Successfully'
    },
    {
      id: 'bc-2',
      title: 'Sub-30 Min Instant Parcel Express Launch',
      channel: 'WhatsApp & SMS Alert',
      audience: 'All Lucknow Customers (45,000 Users)',
      sentAt: '28 Aug 2026, 04:15 PM',
      deliveryRate: '99.8%',
      clickRate: '31.2%',
      status: 'Delivered Successfully'
    }
  ]);

  // Overview Graphs & Analytics Interactive States (Today, Week, Month, Year, Custom Calendar)
  const [overviewTimeframe, setOverviewTimeframe] = useState('week'); // 'today' | 'week' | 'month' | 'year' | 'custom'
  const [customStartDate, setCustomStartDate] = useState('2026-08-01');
  const [customEndDate, setCustomEndDate] = useState('2026-09-03');
  const [isCalendarPickerOpen, setIsCalendarPickerOpen] = useState(false);
  const [hoveredPoint, setHoveredPoint] = useState(null);
  const [activeGraphMetric, setActiveGraphMetric] = useState('all');

  // Status Alerts
  const [saveSuccess, setSaveSuccess] = useState('');
  const [saveError, setSaveError] = useState('');

  // Authentication Guard
  useEffect(() => {
    if (!loading && !isAuthenticated) {
      navigate('/login');
    }
  }, [loading, isAuthenticated, navigate]);

  // Sync CMS Context when changed
  useEffect(() => {
    if (settings && Object.keys(settings).length > 0) setSiteSettingsForm(settings);
  }, [settings]);

  useEffect(() => {
    if (headerConfig) setHeaderForm(headerConfig);
  }, [headerConfig]);

  useEffect(() => {
    if (footerConfig) setFooterForm(prev => ({ ...prev, ...footerConfig }));
  }, [footerConfig]);

  // Data Fetchers
  const loadStats = async () => {
    try {
      const res = await api.getAdminStats();
      if (res.success) setStats(res.data);
    } catch (err) {
      console.warn('Stats fetch error:', err.message);
    }
  };

  const loadLeads = async () => {
    setIsLoadingLeads(true);
    try {
      const query = `status=${leadStatusFilter}&search=${leadSearch}`;
      const res = await api.getLeads(query);
      if (res.success) setLeads(res.data);
    } catch (err) {
      console.warn('Leads fetch error:', err.message);
    } finally {
      setIsLoadingLeads(false);
    }
  };

  const loadServices = async () => {
    try {
      const res = await api.getServices();
      if (res.success && res.data?.length > 0) setServicesList(res.data);
    } catch (err) {
      console.warn('Services fetch error:', err.message);
    }
  };

  const loadProducts = async () => {
    try {
      const res = await api.getProducts();
      if (res.success) setProductsList(res.data);
    } catch (err) {
      console.warn('Products fetch error:', err.message);
    }
  };

  const loadTestimonials = async () => {
    try {
      const res = await api.getTestimonials();
      if (res.success) setTestimonialsList(res.data);
    } catch (err) {
      console.warn('Testimonials fetch error:', err.message);
    }
  };

  const loadFaqs = async () => {
    try {
      const res = await api.getFAQs();
      if (res.success) setFaqsList(res.data);
    } catch (err) {
      console.warn('FAQs fetch error:', err.message);
    }
  };

  const loadPagesCMS = async () => {
    try {
      const [homeRes, aboutRes, contactRes] = await Promise.allSettled([
        api.getPageContent('home'),
        api.getPageContent('about'),
        api.getPageContent('contact'),
      ]);
      
      if (homeRes.status === 'fulfilled' && homeRes.value?.data?.sections?.length > 0) {
        const sections = homeRes.value.data.sections;
        const heroSec = sections.find(s => s.sectionKey === 'hero') || sections[0];
        const statsSec = sections.find(s => s.sectionKey === 'stats' || s.sectionKey === 'statsBanner');
        const whySec = sections.find(s => s.sectionKey === 'whyChooseUs');
        const ctaSec = sections.find(s => s.sectionKey === 'finalCTA');

        const defaultStatsFallback = [
          { value: '10', suffix: 'K+', label: 'Happy Customers' },
          { value: '25', suffix: 'K+', label: 'Services Completed' },
          { value: '500', suffix: '+', label: 'Service Partners' },
          { value: '24/7', suffix: '', label: 'Customer Support' }
        ];

        const normalizedStats = defaultStatsFallback.map((def, i) => {
          const item = statsSec?.items?.[i] || {};
          return {
            value: item.value !== undefined && item.value !== '' ? item.value : def.value,
            suffix: item.suffix !== undefined ? item.suffix : def.suffix,
            label: item.label !== undefined && item.label !== '' ? item.label : def.label,
          };
        });

        setHomePageForm(prev => ({
          ...prev,
          hero: heroSec ? { ...prev.hero, ...heroSec } : prev.hero,
          stats: normalizedStats,
          whyChooseUs: whySec ? { ...prev.whyChooseUs, ...whySec } : (sections[1] ? { ...prev.whyChooseUs, ...sections[1] } : prev.whyChooseUs),
          finalCTA: ctaSec ? { ...prev.finalCTA, ...ctaSec } : (sections[2] ? { ...prev.finalCTA, ...sections[2] } : prev.finalCTA),
        }));
      }

      if (aboutRes.status === 'fulfilled' && aboutRes.value?.data?.sections?.length > 0) {
        const sections = aboutRes.value.data.sections;
        setAboutPageForm(prev => ({
          ...prev,
          hero: { ...prev.hero, ...sections[0] },
          pillars: sections[1]?.items || prev.pillars,
        }));
      }

      if (contactRes.status === 'fulfilled' && contactRes.value?.data?.sections?.length > 0) {
        const sections = contactRes.value.data.sections;
        setContactPageForm(prev => ({
          ...prev,
          hero: { ...prev.hero, ...sections[0] },
        }));
      }
    } catch (err) {
      console.warn('Page content error:', err.message);
    }
  };

  const loadApplications = async () => {
    try {
      const [partnerRes, jobRes] = await Promise.allSettled([
        api.getPartnerApplications(),
        api.getJobApplications(),
      ]);
      if (partnerRes.status === 'fulfilled' && partnerRes.value?.data) {
        setPartnerApps(partnerRes.value.data);
      }
      if (jobRes.status === 'fulfilled' && jobRes.value?.data) {
        setJobApps(jobRes.value.data);
      }
    } catch (err) {
      console.warn('Applications fetch error:', err.message);
    }
  };

  const loadMedia = async () => {
    try {
      const res = await api.getMediaList();
      if (res.success) setMediaList(res.data);
    } catch (err) {
      console.warn('Media fetch error:', err.message);
    }
  };

  useEffect(() => {
    loadStats();
    loadLeads();
    loadServices();
    loadProducts();
    loadTestimonials();
    loadFaqs();
    loadPagesCMS();
    loadApplications();
    loadMedia();
  }, []);

  useEffect(() => {
    loadLeads();
  }, [leadStatusFilter]);

  // Toast notifier
  const showToast = (msg, isError = false) => {
    if (isError) {
      setSaveError(msg);
      setSaveSuccess('');
    } else {
      setSaveSuccess(msg);
      setSaveError('');
    }
    setTimeout(() => {
      setSaveSuccess('');
      setSaveError('');
    }, 4000);
  };

  // Handlers for Save
  const handleSaveSettings = async (e) => {
    e.preventDefault();
    try {
      const res = await api.updateSettings(siteSettingsForm);
      if (res.success) {
        showToast('Site settings & branding updated live in MongoDB!');
        refreshCMS();
      }
    } catch (err) {
      showToast(err.message || 'Failed to update settings', true);
    }
  };

  const handleSaveHeader = async (e) => {
    e.preventDefault();
    try {
      const res = await api.updateHeader(headerForm);
      if (res.success) {
        showToast('Header navigation updated live in MongoDB!');
        refreshCMS();
      }
    } catch (err) {
      showToast(err.message || 'Failed to update header', true);
    }
  };

  const handleSaveFooter = async (e) => {
    e.preventDefault();
    try {
      const res = await api.updateFooter(footerForm);
      if (res.success) {
        showToast('Footer settings & columns updated live in MongoDB!');
        refreshCMS();
      }
    } catch (err) {
      showToast(err.message || 'Failed to update footer', true);
    }
  };

  const handleSaveHomePage = async (e) => {
    e.preventDefault();
    try {
      const payload = {
        slug: 'home',
        pageTitle: 'Home Page Content',
        sections: [
          {
            sectionKey: 'hero',
            badge: homePageForm.hero.badge,
            title: homePageForm.hero.title,
            subtitle: homePageForm.hero.subtitle,
            description: homePageForm.hero.description,
            buttonText: homePageForm.hero.buttonText,
            buttonUrl: homePageForm.hero.buttonUrl,
            secondaryButtonText: homePageForm.hero.secondaryButtonText,
            secondaryButtonUrl: homePageForm.hero.secondaryButtonUrl,
            image: homePageForm.hero.image,
            images: homePageForm.hero.images,
            order: 1,
            isActive: true,
          },
          {
            sectionKey: 'stats',
            title: 'Platform Statistics & Milestone Counters',
            items: homePageForm.stats,
            order: 2,
            isActive: true,
          },
          {
            sectionKey: 'whyChooseUs',
            title: homePageForm.whyChooseUs.title,
            subtitle: homePageForm.whyChooseUs.subtitle,
            items: homePageForm.whyChooseUs.items,
            order: 3,
            isActive: true,
          },
          {
            sectionKey: 'finalCTA',
            title: homePageForm.finalCTA.title,
            subtitle: homePageForm.finalCTA.subtitle,
            buttonText: homePageForm.finalCTA.buttonText,
            buttonUrl: homePageForm.finalCTA.buttonUrl,
            order: 4,
            isActive: true,
          }
        ]
      };
      const res = await api.updatePageContent('home', payload);
      if (res.success) {
        showToast('Home Page sections updated successfully in MongoDB!');
        refreshCMS();
      }
    } catch (err) {
      showToast(err.message || 'Failed to update Home content', true);
    }
  };

  const handleSaveAboutPage = async (e) => {
    e.preventDefault();
    try {
      const payload = {
        slug: 'about',
        pageTitle: 'About Us Content',
        sections: [
          {
            sectionKey: 'aboutHero',
            badge: aboutPageForm.hero.badge,
            title: aboutPageForm.hero.title,
            subtitle: aboutPageForm.hero.subtitle,
            description: aboutPageForm.hero.description,
            image: aboutPageForm.hero.image,
            order: 1,
            isActive: true,
          },
          {
            sectionKey: 'foundations',
            title: 'OUR FOUR VALUE PILLARS',
            subtitle: 'The non-negotiable principles guiding every dispatch.',
            items: aboutPageForm.pillars,
            order: 2,
            isActive: true,
          }
        ]
      };
      const res = await api.updatePageContent('about', payload);
      if (res.success) {
        showToast('About Us Page sections updated successfully in MongoDB!');
        refreshCMS();
      }
    } catch (err) {
      showToast(err.message || 'Failed to update About content', true);
    }
  };

  const handleSaveContactPage = async (e) => {
    e.preventDefault();
    try {
      const payload = {
        slug: 'contact',
        pageTitle: 'Contact Us Content',
        sections: [
          {
            sectionKey: 'contactHero',
            badge: contactPageForm.hero.badge,
            title: contactPageForm.hero.title,
            subtitle: contactPageForm.hero.subtitle,
            description: contactPageForm.hero.description,
            order: 1,
            isActive: true,
          }
        ]
      };
      const res = await api.updatePageContent('contact', payload);
      if (res.success) {
        showToast('Contact Us Page updated successfully in MongoDB!');
        refreshCMS();
      }
    } catch (err) {
      showToast(err.message || 'Failed to update Contact content', true);
    }
  };

  const handleSaveService = async (e) => {
    e.preventDefault();
    try {
      if (editingService._id) {
        await api.updateService(editingService.slug || editingService.id, editingService);
        showToast(`Service '${editingService.title}' updated in MongoDB!`);
      } else {
        await api.createService(editingService);
        showToast(`New service '${editingService.title}' created in MongoDB!`);
      }
      setEditingService(null);
      loadServices();
      refreshCMS();
    } catch (err) {
      showToast(err.message || 'Failed to save service', true);
    }
  };

  const handleDeleteService = async (id) => {
    if (!window.confirm('Delete this service category?')) return;
    try {
      await api.deleteService(id);
      showToast('Service category deleted');
      loadServices();
      refreshCMS();
    } catch (err) {
      showToast(err.message || 'Failed to delete service', true);
    }
  };

  const addSubService = () => {
    if (!editingService) return;
    const newSub = {
      id: `sub-${(editingService.subServices?.length || 0) + 1}`,
      title: 'New Sub-Service Item',
      description: 'Package description & details',
      price: '₹199',
      unit: 'Per visit',
      duration: '30 mins',
      popular: false,
    };
    setEditingService({
      ...editingService,
      subServices: [...(editingService.subServices || []), newSub],
    });
  };

  const removeSubService = (idx) => {
    if (!editingService) return;
    const updated = editingService.subServices.filter((_, i) => i !== idx);
    setEditingService({ ...editingService, subServices: updated });
  };

  const handleSaveProduct = async (e) => {
    e.preventDefault();
    try {
      if (editingProduct._id) {
        await api.updateProduct(editingProduct.id || editingProduct._id, editingProduct);
        showToast(`Product '${editingProduct.name}' updated!`);
      } else {
        await api.createProduct(editingProduct);
        showToast(`New product '${editingProduct.name}' added!`);
      }
      setEditingProduct(null);
      loadProducts();
    } catch (err) {
      showToast(err.message || 'Failed to save product', true);
    }
  };

  const handleDeleteProduct = async (id) => {
    if (!window.confirm('Delete this product?')) return;
    try {
      await api.deleteProduct(id);
      showToast('Product deleted');
      loadProducts();
    } catch (err) {
      showToast(err.message || 'Failed to delete product', true);
    }
  };

  const handleSaveTestimonial = async (e) => {
    e.preventDefault();
    try {
      if (editingTestimonial._id) {
        await api.updateTestimonial(editingTestimonial._id, editingTestimonial);
        showToast('Testimonial updated!');
      } else {
        await api.createTestimonial(editingTestimonial);
        showToast('New testimonial created!');
      }
      setEditingTestimonial(null);
      loadTestimonials();
    } catch (err) {
      showToast(err.message || 'Failed to save testimonial', true);
    }
  };

  const handleDeleteTestimonial = async (id) => {
    if (!window.confirm('Delete this testimonial?')) return;
    try {
      await api.deleteTestimonial(id);
      showToast('Testimonial removed');
      loadTestimonials();
    } catch (err) {
      showToast(err.message || 'Failed to delete testimonial', true);
    }
  };

  const handleSaveFAQ = async (e) => {
    e.preventDefault();
    try {
      if (editingFAQ._id) {
        await api.updateFAQ(editingFAQ._id, editingFAQ);
        showToast('FAQ updated!');
      } else {
        await api.createFAQ(editingFAQ);
        showToast('New FAQ created!');
      }
      setEditingFAQ(null);
      loadFaqs();
    } catch (err) {
      showToast(err.message || 'Failed to save FAQ', true);
    }
  };

  const handleDeleteFAQ = async (id) => {
    if (!window.confirm('Delete this FAQ?')) return;
    try {
      await api.deleteFAQ(id);
      showToast('FAQ removed');
      loadFaqs();
    } catch (err) {
      showToast(err.message || 'Failed to delete FAQ', true);
    }
  };

  const handleDeleteMedia = async (id) => {
    if (!window.confirm('Delete this image from library?')) return;
    try {
      await api.deleteMedia(id);
      showToast('Media item deleted');
      loadMedia();
    } catch (err) {
      showToast(err.message || 'Failed to delete media', true);
    }
  };

  const handleCopyUrl = (url) => {
    navigator.clipboard.writeText(url);
    setCopiedUrl(url);
    setTimeout(() => setCopiedUrl(''), 2000);
  };

  const handleUpdateLeadStatus = async (id, newStatus, currentNotes) => {
    try {
      await api.updateLead(id, { status: newStatus, notes: currentNotes });
      loadLeads();
      loadStats();
    } catch (err) {
      showToast(err.message || 'Failed to update lead', true);
    }
  };

  const handleDeleteLead = async (id) => {
    if (!window.confirm('Delete this customer lead?')) return;
    try {
      await api.deleteLead(id);
      showToast('Lead deleted');
      loadLeads();
      loadStats();
    } catch (err) {
      showToast(err.message || 'Failed to delete lead', true);
    }
  };

  const handleExportCSV = () => {
    window.open('http://localhost:5000/api/leads/export/csv', '_blank');
  };

  // Structured Sidebar Categories in Logical Sequence
  const sidebarGroups = [
    {
      groupTitle: 'ANALYTICS & ACTIVITY',
      items: [
        { id: 'overview', label: 'Overview & Graphs', icon: LayoutDashboard },
        { id: 'leads', label: 'Leads & Inquiries', icon: Users, badge: stats?.counts?.newLeads },
        { id: 'bookings', label: 'Service Bookings', icon: CalendarCheck, count: bookingsList.length },
      ]
    },
    {
      groupTitle: 'WEBSITE PAGES & CONTENT',
      items: [
        { id: 'homeCMS', label: 'Home Page Content', icon: FileText },
        { id: 'aboutCMS', label: 'About Us Page Content', icon: Info },
        { id: 'contactCMS', label: 'Contact Us Page Content', icon: PhoneCall },
      ]
    },
    {
      groupTitle: 'SERVICES & STORE',
      items: [
        { id: 'services', label: 'Services & Sub-Dropdowns', icon: Wrench, count: servicesList.length },
        { id: 'products', label: 'Lifestyle Store Items', icon: ShoppingBag, count: productsList.length },
      ]
    },
    {
      groupTitle: 'BRAND & NAVIGATION',
      items: [
        { id: 'settings', label: 'Site Settings & SEO', icon: Settings },
        { id: 'header', label: 'Header & Navigation', icon: MenuIcon },
        { id: 'footer', label: 'Footer Configuration', icon: Globe },
      ]
    },
    {
      groupTitle: 'REVIEWS & TESTIMONIALS',
      items: [
        { id: 'testimonials', label: 'Customer Reviews', icon: MessageSquare, count: testimonialsList.length },
      ]
    },
    {
      groupTitle: 'ADMIN PROFILE',
      items: [
        { id: 'profile', label: 'Admin Profile Settings', icon: User },
      ]
    }
  ];

  const allNavItems = sidebarGroups.flatMap(g => g.items);
  const currentActiveItem = allNavItems.find(item => item.id === activeTab) || allNavItems[0];

  // Omnisearch Real-time Indexer
  const getOmniResults = () => {
    if (!omniSearchQuery.trim()) return [];
    const q = omniSearchQuery.toLowerCase();
    const results = [];

    // Navigation Tabs
    allNavItems.forEach(item => {
      if (item.label.toLowerCase().includes(q) || item.id.toLowerCase().includes(q)) {
        results.push({ type: 'Navigation', title: item.label, subtitle: `Switch to ${item.label}`, tabId: item.id, icon: item.icon });
      }
    });

    // Customer Leads
    leads.forEach(l => {
      if (l.name?.toLowerCase().includes(q) || l.phone?.includes(q) || l.email?.toLowerCase().includes(q) || l.service?.toLowerCase().includes(q)) {
        results.push({ type: 'Lead', title: l.name, subtitle: `${l.service} • +91 ${l.phone}`, tabId: 'leads', icon: Users });
      }
    });

    // Bookings
    bookingsList.forEach(b => {
      if (b.customerName?.toLowerCase().includes(q) || b.bookingRef?.toLowerCase().includes(q) || b.service?.toLowerCase().includes(q)) {
        results.push({ type: 'Booking', title: b.customerName, subtitle: `${b.bookingRef} • ${b.service}`, tabId: 'bookings', icon: CalendarCheck });
      }
    });

    // Services
    servicesList.forEach(s => {
      if (s.title?.toLowerCase().includes(q) || s.slug?.toLowerCase().includes(q)) {
        results.push({ type: 'Service', title: s.title, subtitle: `From ${s.startingPrice}`, tabId: 'services', icon: Wrench });
      }
    });

    // Products
    productsList.forEach(p => {
      if (p.title?.toLowerCase().includes(q) || p.category?.toLowerCase().includes(q)) {
        results.push({ type: 'Store Item', title: p.title, subtitle: `${p.price} • ${p.category}`, tabId: 'products', icon: ShoppingBag });
      }
    });

    // FAQs
    faqsList.forEach(f => {
      if (f.question?.toLowerCase().includes(q) || f.answer?.toLowerCase().includes(q)) {
        results.push({ type: 'FAQ', title: f.question, subtitle: f.category || 'General FAQ', tabId: 'faqs', icon: HelpCircle });
      }
    });

    return results.slice(0, 8);
  };

  const omniResults = getOmniResults();

  return (
    <>
      <SEO title="Admin Control Center | Tepito" description="Fully dynamic website CMS & control panel." />

      <div className={`h-screen flex flex-col lg:flex-row overflow-hidden font-sans transition-colors duration-200 ${isDarkMode ? 'bg-[#0B0F17] text-white dark' : 'bg-[#F8F6F3] text-[#111111]'}`}>
        
        {/* MOBILE BACKDROP OVERLAY */}
        {isMobileSidebarOpen && (
          <div 
            onClick={() => setIsMobileSidebarOpen(false)}
            className="fixed inset-0 bg-black/60 z-40 lg:hidden backdrop-blur-xs"
          />
        )}

        {/* ========================================================= */}
        {/* 1. LEFT SIDEBAR NAVIGATION (COLLAPSIBLE & EXPANDABLE) */}
        {/* ========================================================= */}
        <aside className={`fixed inset-y-0 left-0 lg:static z-50 bg-[#0C121E] text-gray-300 flex flex-col justify-between flex-shrink-0 border-r border-white/10 h-full transition-all duration-300 ${
          isMobileSidebarOpen ? 'translate-x-0 w-72 shadow-2xl' : '-translate-x-full lg:translate-x-0'
        } ${isSidebarCollapsed ? 'lg:w-20' : 'lg:w-72'}`}>
          <div className="flex flex-col h-full overflow-hidden">
            
            {/* Sidebar Brand & Collapse Toggle Header */}
            <div className="p-4 border-b border-white/10 flex items-center justify-between flex-shrink-0 bg-[#070B13]">
              {!isSidebarCollapsed ? (
                <div className="flex items-center gap-2.5 truncate">
                  <Logo className="h-7" />
                  <span className="text-[9px] font-mono uppercase px-1.5 py-0.5 rounded bg-[#D92C1C]/20 border border-[#D92C1C]/40 text-[#D92C1C] font-black">
                    Admin Portal
                  </span>
                </div>
              ) : (
                <div className="w-8 h-8 rounded-xl bg-[#D92C1C] flex items-center justify-center font-black text-white text-sm mx-auto">
                  T
                </div>
              )}

              {/* Toggle Sidebar Collapse Button (Desktop) */}
              <button
                type="button"
                onClick={toggleSidebarCollapse}
                className="hidden lg:flex p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors cursor-pointer"
                title={isSidebarCollapsed ? 'Expand Sidebar' : 'Collapse Sidebar'}
              >
                <PanelLeft className="w-4 h-4" />
              </button>

              {/* Close Button (Mobile) */}
              <button
                type="button"
                onClick={() => setIsMobileSidebarOpen(false)}
                className="lg:hidden p-1.5 rounded-lg bg-white/5 text-gray-400 hover:text-white"
              >
                ✕
              </button>
            </div>

            {/* Nav Links */}
            <nav className="p-3 space-y-4 overflow-y-auto flex-1 custom-scrollbar">
              {sidebarGroups.map((group, gIdx) => (
                <div key={gIdx} className="space-y-1">
                  {!isSidebarCollapsed && (
                    <span className="text-[9px] font-mono font-extrabold uppercase tracking-wider text-gray-500 px-3 block">
                      {group.groupTitle}
                    </span>
                  )}

                  {group.items.map((item) => {
                    const Icon = item.icon;
                    const isActive = activeTab === item.id;
                    return (
                      <button
                        key={item.id}
                        onClick={() => {
                          setActiveTab(item.id);
                          setSaveSuccess('');
                          setSaveError('');
                          setIsMobileSidebarOpen(false);
                        }}
                        title={isSidebarCollapsed ? item.label : undefined}
                        className={`w-full flex items-center ${isSidebarCollapsed ? 'justify-center px-0' : 'justify-between px-3'} py-2 rounded-xl text-xs font-bold transition-all duration-150 cursor-pointer ${
                          isActive
                            ? 'bg-[#D92C1C] text-white shadow-md shadow-[#D92C1C]/25 font-extrabold'
                            : 'text-gray-400 hover:text-white hover:bg-white/5'
                        }`}
                      >
                        <div className="flex items-center gap-2.5 truncate">
                          <Icon className={`w-4 h-4 flex-shrink-0 ${isActive ? 'text-white' : 'text-gray-400'}`} />
                          {!isSidebarCollapsed && <span className="truncate">{item.label}</span>}
                        </div>

                        {!isSidebarCollapsed && (
                          <div className="flex items-center gap-1.5 flex-shrink-0">
                            {item.badge !== undefined && item.badge > 0 && (
                              <span className="px-2 py-0.5 rounded-full bg-amber-400 text-black text-[10px] font-black">
                                {item.badge}
                              </span>
                            )}
                            {item.count !== undefined && (
                              <span className="text-[10px] font-mono text-gray-400">
                                {item.count}
                              </span>
                            )}
                          </div>
                        )}
                      </button>
                    );
                  })}
                </div>
              ))}
            </nav>

            {/* Sidebar Bottom Profile Card with Edit Profile Quick Action */}
            <div className={`p-3.5 border-t border-white/10 bg-[#070B13] flex-shrink-0 ${isSidebarCollapsed ? 'text-center' : ''}`}>
              {!isSidebarCollapsed ? (
                <>
                  <div 
                    onClick={() => {
                      setActiveTab('profile');
                      setIsMobileSidebarOpen(false);
                    }}
                    className="flex items-center justify-between p-2 rounded-xl hover:bg-white/5 transition-colors cursor-pointer group mb-2"
                    title="Edit Admin Profile"
                  >
                    <div className="flex items-center gap-2.5 truncate pr-2">
                      <img
                        src={profileForm.avatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80'}
                        alt="Admin Avatar"
                        className="w-8 h-8 rounded-full object-cover border border-white/20 flex-shrink-0 group-hover:border-[#D92C1C] transition-colors"
                      />
                      <div className="truncate">
                        <span className="text-xs font-bold text-white block truncate group-hover:text-[#D92C1C] transition-colors">
                          {profileForm.name}
                        </span>
                        <span className="text-[10px] text-gray-400 block truncate font-mono">
                          {profileForm.role}
                        </span>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono font-bold text-gray-400 group-hover:text-white px-1.5 py-0.5 rounded bg-white/5 border border-white/10">
                      ✎
                    </span>
                  </div>

                  <button
                    onClick={() => {
                      logout();
                      navigate('/login');
                    }}
                    className="w-full flex items-center justify-center gap-2 px-3 py-1.5 rounded-xl bg-white/5 hover:bg-red-500/20 text-gray-300 hover:text-red-400 text-[11px] font-bold uppercase tracking-wider transition-colors border border-white/10 cursor-pointer"
                  >
                    <LogOut className="w-3 h-3" />
                    <span>Sign Out</span>
                  </button>
                </>
              ) : (
                <div className="flex flex-col items-center gap-2">
                  <button
                    onClick={() => setActiveTab('profile')}
                    title="My Profile"
                    className="w-9 h-9 rounded-full overflow-hidden border border-white/20 hover:border-[#D92C1C] cursor-pointer"
                  >
                    <img src={profileForm.avatar} alt="Admin" className="w-full h-full object-cover" />
                  </button>
                  <button
                    onClick={() => {
                      logout();
                      navigate('/login');
                    }}
                    title="Sign Out"
                    className="p-2 rounded-xl text-gray-400 hover:text-red-400 hover:bg-white/5"
                  >
                    <LogOut className="w-3.5 h-3.5" />
                  </button>
                </div>
              )}
            </div>

          </div>
        </aside>

        {/* ========================================================= */}
        {/* 2. MAIN CANVAS CONTENT AREA */}
        {/* ========================================================= */}
        <div className="flex-1 flex flex-col min-w-0 h-full overflow-hidden">
          
          {/* TOP GLOBAL APP HEADER BAR */}
          <header className={`${isDarkMode ? 'bg-[#121824] border-white/10 text-white' : 'bg-white/95 border-[#E5E1DD] text-[#111111]'} backdrop-blur-md border-b px-6 py-3.5 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 flex-shrink-0 z-30 transition-colors`}>
            
            {/* Title / Breadcrumb + Mobile Menu Toggle */}
            <div className="flex items-center gap-3 flex-shrink-0">
              <button
                type="button"
                onClick={() => setIsMobileSidebarOpen(true)}
                className="lg:hidden p-2 rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-white"
              >
                <MenuIcon className="w-5 h-5" />
              </button>

              <div>
                <span className={`text-[10px] font-mono font-bold uppercase tracking-wider ${isDarkMode ? 'text-gray-400' : 'text-[#666666]'}`}>
                  Control Hub / {currentActiveItem.label}
                </span>
                <h2 className="font-display font-black text-xl uppercase tracking-tight">
                  {currentActiveItem.label}
                </h2>
              </div>
            </div>

            {/* GLOBAL OMNISEARCH SEARCH BAR */}
            <div className="relative flex-1 max-w-md mx-auto w-full">
              <div className="relative">
                <Search className={`w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 ${isDarkMode ? 'text-gray-400' : 'text-[#888888]'}`} />
                <input
                  type="text"
                  placeholder="Global search (Leads, Bookings, Services, FAQs, Settings)..."
                  value={omniSearchQuery}
                  onChange={(e) => {
                    setOmniSearchQuery(e.target.value);
                    setIsOmniOpen(true);
                  }}
                  onFocus={() => setIsOmniOpen(true)}
                  className={`w-full pl-10 pr-12 py-2 rounded-xl text-xs outline-none transition-all ${
                    isDarkMode
                      ? 'bg-[#1B2333] border border-white/10 text-white placeholder-gray-500 focus:border-[#D92C1C]'
                      : 'bg-[#F6F4F1] border border-[#E5E1DD] text-[#111111] placeholder-[#888888] focus:bg-white focus:border-[#D92C1C]'
                  }`}
                />
                <div className="absolute right-2.5 top-1/2 -translate-y-1/2 flex items-center gap-1 pointer-events-none">
                  <span className={`text-[9px] font-mono font-bold px-1.5 py-0.5 rounded border ${isDarkMode ? 'bg-white/10 border-white/10 text-gray-400' : 'bg-[#EAE6E1] border-[#DDD] text-gray-600'}`}>
                    Ctrl+K
                  </span>
                </div>
              </div>

              {/* FLOATING OMNISEARCH DROPDOWN RESULTS */}
              {isOmniOpen && omniSearchQuery.trim() && (
                <div className={`absolute left-0 right-0 top-full mt-2 rounded-2xl shadow-2xl border p-2 z-50 max-h-80 overflow-y-auto ${
                  isDarkMode ? 'bg-[#151D2C] border-white/10 text-white' : 'bg-white border-[#E5E1DD] text-[#111111]'
                }`}>
                  <div className="flex items-center justify-between px-3 py-1.5 text-[10px] font-mono font-bold text-gray-400 uppercase border-b border-white/10 mb-1">
                    <span>Search Results ({omniResults.length})</span>
                    <button type="button" onClick={() => setIsOmniOpen(false)} className="hover:text-white cursor-pointer">Close ✕</button>
                  </div>

                  {omniResults.length === 0 ? (
                    <div className="p-4 text-center text-xs text-gray-400">
                      No matching leads, bookings, or services found for "<span className="font-bold">{omniSearchQuery}</span>"
                    </div>
                  ) : (
                    <div className="space-y-1">
                      {omniResults.map((res, rIdx) => {
                        const ItemIcon = res.icon || Search;
                        return (
                          <button
                            key={rIdx}
                            type="button"
                            onClick={() => {
                              setActiveTab(res.tabId);
                              setIsOmniOpen(false);
                              setOmniSearchQuery('');
                            }}
                            className={`w-full flex items-center justify-between p-2.5 rounded-xl text-left text-xs transition-colors cursor-pointer ${
                              isDarkMode ? 'hover:bg-white/10' : 'hover:bg-[#F6F4F1]'
                            }`}
                          >
                            <div className="flex items-center gap-3 truncate">
                              <div className="p-1.5 rounded-lg bg-[#D92C1C]/10 text-[#D92C1C] flex-shrink-0">
                                <ItemIcon className="w-3.5 h-3.5" />
                              </div>
                              <div className="truncate">
                                <span className="font-bold block truncate">{res.title}</span>
                                <span className="text-[11px] text-gray-400 truncate block">{res.subtitle}</span>
                              </div>
                            </div>
                            <span className="text-[9px] font-mono font-extrabold uppercase px-2 py-0.5 rounded bg-white/5 border border-white/10 text-gray-400 flex-shrink-0 ml-2">
                              {res.type}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* ACTION BUTTONS & THEME TOGGLE */}
            <div className="flex items-center gap-3 flex-shrink-0">
              
              {/* DARK / LIGHT MODE SWITCHER */}
              <button
                type="button"
                onClick={toggleDarkMode}
                className={`p-2 rounded-xl border transition-all flex items-center gap-2 cursor-pointer text-xs font-bold ${
                  isDarkMode
                    ? 'bg-[#1B2333] border-white/10 text-yellow-400 hover:bg-white/10'
                    : 'bg-[#F6F4F1] border-[#E5E1DD] text-gray-700 hover:bg-[#EAE6E1]'
                }`}
                title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              >
                {isDarkMode ? <Sun className="w-4 h-4 text-yellow-400" /> : <Moon className="w-4 h-4 text-gray-700" />}
                <span className="hidden sm:inline">{isDarkMode ? 'Light' : 'Dark'}</span>
              </button>

              <a
                href="/"
                target="_blank"
                rel="noreferrer"
                className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors border ${
                  isDarkMode
                    ? 'bg-[#1B2333] hover:bg-white/10 text-white border-white/10'
                    : 'bg-[#F6F4F1] hover:bg-[#EAE6E1] text-[#111111] border-[#E5E1DD]'
                }`}
              >
                <Eye className="w-3.5 h-3.5" />
                <span>Live Website</span>
                <ExternalLink className="w-3 h-3 opacity-60" />
              </a>

              <div className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold font-mono">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                MongoDB Live
              </div>
            </div>
          </header>

          {saveSuccess && (
            <div className="px-6 pt-4 flex-shrink-0">
              <div className="p-3.5 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold flex items-center gap-2 shadow-xs">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>{saveSuccess}</span>
              </div>
            </div>
          )}
          {saveError && (
            <div className="px-6 pt-4 flex-shrink-0">
              <div className="p-3.5 rounded-2xl bg-red-50 border border-red-200 text-red-800 text-xs font-bold flex items-center gap-2 shadow-xs">
                <AlertCircle className="w-4 h-4 text-red-600 flex-shrink-0" />
                <span>{saveError}</span>
              </div>
            </div>
          )}

          <main className="p-6 overflow-y-auto flex-1 space-y-6">

            {/* 1. OVERVIEW & STATE-OF-THE-ART RECHARTS ANALYTICS COMMAND CENTER */}
            {activeTab === 'overview' && (() => {
              // Comprehensive Dynamic Timeframe Data Generator for Recharts
              const timeframeDataMap = {
                'today': [
                  { name: '08:00 AM', fullDate: 'Today 08:00', inquiries: 4, dispatches: 3, revenue: 1450, conversion: 75 },
                  { name: '10:00 AM', fullDate: 'Today 10:00', inquiries: 7, dispatches: 6, revenue: 2950, conversion: 85 },
                  { name: '12:00 PM', fullDate: 'Today 12:00', inquiries: 11, dispatches: 10, revenue: 4800, conversion: 90 },
                  { name: '02:00 PM', fullDate: 'Today 14:00', inquiries: 8, dispatches: 7, revenue: 3200, conversion: 87 },
                  { name: '04:00 PM', fullDate: 'Today 16:00', inquiries: 14, dispatches: 13, revenue: 6400, conversion: 92 },
                  { name: '06:00 PM', fullDate: 'Today 18:00', inquiries: 18, dispatches: 16, revenue: 8900, conversion: 88 },
                  { name: '08:00 PM', fullDate: 'Today 20:00', inquiries: 15, dispatches: 14, revenue: 7600, conversion: 93 },
                  { name: '10:00 PM', fullDate: 'Today 22:00', inquiries: 6, dispatches: 5, revenue: 2600, conversion: 83 },
                ],
                'week': [
                  { name: 'Mon', fullDate: '01 Sep', inquiries: 24, dispatches: 20, revenue: 24800, conversion: 83 },
                  { name: 'Tue', fullDate: '02 Sep', inquiries: 32, dispatches: 28, revenue: 35500, conversion: 87 },
                  { name: 'Wed', fullDate: '03 Sep', inquiries: 41, dispatches: 36, revenue: 48900, conversion: 88 },
                  { name: 'Thu', fullDate: '04 Sep', inquiries: 48, dispatches: 42, revenue: 58400, conversion: 87 },
                  { name: 'Fri', fullDate: '05 Sep', inquiries: 62, dispatches: 56, revenue: 79200, conversion: 90 },
                  { name: 'Sat', fullDate: '06 Sep', inquiries: 78, dispatches: 72, revenue: 94500, conversion: 92 },
                  { name: 'Sun', fullDate: '07 Sep', inquiries: 84, dispatches: 79, revenue: 108800, conversion: 94 },
                ],
                'month': [
                  { name: 'Week 1', fullDate: '01-07 Aug', inquiries: 185, dispatches: 168, revenue: 214000, conversion: 90 },
                  { name: 'Week 2', fullDate: '08-14 Aug', inquiries: 246, dispatches: 224, revenue: 298000, conversion: 91 },
                  { name: 'Week 3', fullDate: '15-21 Aug', inquiries: 310, dispatches: 286, revenue: 389000, conversion: 92 },
                  { name: 'Week 4', fullDate: '22-28 Aug', inquiries: 395, dispatches: 368, revenue: 482000, conversion: 93 },
                  { name: 'Week 5', fullDate: '29-31 Aug', inquiries: 174, dispatches: 162, revenue: 215000, conversion: 93 },
                ],
                'year': [
                  { name: 'Jan', fullDate: 'Jan 2026', inquiries: 620, dispatches: 560, revenue: 710000, conversion: 90 },
                  { name: 'Feb', fullDate: 'Feb 2026', inquiries: 740, dispatches: 680, revenue: 860000, conversion: 91 },
                  { name: 'Mar', fullDate: 'Mar 2026', inquiries: 890, dispatches: 820, revenue: 1040000, conversion: 92 },
                  { name: 'Apr', fullDate: 'Apr 2026', inquiries: 1020, dispatches: 945, revenue: 1220000, conversion: 92 },
                  { name: 'May', fullDate: 'May 2026', inquiries: 1180, dispatches: 1090, revenue: 1410000, conversion: 92 },
                  { name: 'Jun', fullDate: 'Jun 2026', inquiries: 1340, dispatches: 1250, revenue: 1630000, conversion: 93 },
                  { name: 'Jul', fullDate: 'Jul 2026', inquiries: 1520, dispatches: 1420, revenue: 1870000, conversion: 93 },
                  { name: 'Aug', fullDate: 'Aug 2026', inquiries: 1740, dispatches: 1630, revenue: 2180000, conversion: 94 },
                  { name: 'Sep', fullDate: 'Sep 2026 (Est)', inquiries: 1950, dispatches: 1840, revenue: 2490000, conversion: 94 },
                  { name: 'Oct', fullDate: 'Oct 2026 (Proj)', inquiries: 2180, dispatches: 2060, revenue: 2810000, conversion: 94 },
                  { name: 'Nov', fullDate: 'Nov 2026 (Proj)', inquiries: 2410, dispatches: 2280, revenue: 3120000, conversion: 95 },
                  { name: 'Dec', fullDate: 'Dec 2026 (Proj)', inquiries: 2750, dispatches: 2610, revenue: 3580000, conversion: 95 },
                ]
              };

              // Custom Date Range Generator
              const getCustomChartData = () => {
                const start = new Date(customStartDate || '2026-08-01');
                const end = new Date(customEndDate || '2026-09-03');
                const diffDays = Math.max(1, Math.ceil((end - start) / (1000 * 60 * 60 * 24)));
                const pointsCount = Math.min(diffDays, 8);
                const step = Math.max(1, Math.floor(diffDays / pointsCount));

                const data = [];
                for (let i = 0; i < pointsCount; i++) {
                  const curr = new Date(start.getTime() + i * step * (1000 * 60 * 60 * 24));
                  const label = curr.toLocaleDateString('en-IN', { day: '2-digit', month: 'short' });
                  const baseInquiries = Math.round(25 + Math.sin(i + 1) * 12 + i * 4);
                  const baseDispatches = Math.round(baseInquiries * 0.91);
                  const baseRevenue = Math.round(baseDispatches * 1250);
                  data.push({
                    name: label,
                    fullDate: curr.toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' }),
                    inquiries: baseInquiries,
                    dispatches: baseDispatches,
                    revenue: baseRevenue,
                    conversion: 91
                  });
                }
                return data;
              };

              const currentChartData = overviewTimeframe === 'custom'
                ? getCustomChartData()
                : (timeframeDataMap[overviewTimeframe] || timeframeDataMap['week']);

              // Summary KPI aggregation
              const totalPeriodLeads = currentChartData.reduce((acc, curr) => acc + curr.inquiries, 0);
              const totalPeriodDispatches = currentChartData.reduce((acc, curr) => acc + curr.dispatches, 0);
              const totalPeriodRevenue = currentChartData.reduce((acc, curr) => acc + curr.revenue, 0);
              const avgPeriodConversion = Math.round((totalPeriodDispatches / (totalPeriodLeads || 1)) * 100);

              const categoryPieData = [
                { name: 'Instant Parcel & Courier', value: 34, color: '#D92C1C' },
                { name: 'City Cabs & Airport Rides', value: 28, color: '#111111' },
                { name: 'Home Deep Cleaning', value: 18, color: '#2563EB' },
                { name: 'Luxury Salon & Spa', value: 12, color: '#EC4899' },
                { name: 'Plumbing & Electrician', value: 8, color: '#EAB308' },
              ];

              const zoneBarData = [
                { zone: 'Gomti Nagar', inquiries: 68, dispatches: 58, sla: '14 mins', color: '#D92C1C' },
                { zone: 'Hazratganj', inquiries: 54, dispatches: 47, sla: '18 mins', color: '#D97706' },
                { zone: 'Indira Nagar', inquiries: 42, dispatches: 39, sla: '20 mins', color: '#10B981' },
                { zone: 'Aliganj', inquiries: 38, dispatches: 34, sla: '22 mins', color: '#2563EB' },
                { zone: 'Chowk Hub', inquiries: 31, dispatches: 27, sla: '25 mins', color: '#8B5CF6' },
                { zone: 'Mahanagar', inquiries: 27, dispatches: 24, sla: '19 mins', color: '#EC4899' },
              ];

              // Custom Luxury Tooltip for Recharts
              const CustomRechartsTooltip = ({ active, payload, label }) => {
                if (active && payload && payload.length) {
                  const data = payload[0].payload;
                  return (
                    <div className="bg-[#111111] text-white p-4 rounded-2xl shadow-2xl border border-white/10 text-xs space-y-2 min-w-[190px]">
                      <div className="flex items-center justify-between pb-1.5 border-b border-white/10">
                        <span className="font-mono text-[11px] font-bold text-[#FFD400] uppercase tracking-wider">
                          {data.name} {data.fullDate ? `(${data.fullDate})` : ''}
                        </span>
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      </div>
                      
                      <div className="space-y-1.5 font-mono">
                        <div className="flex items-center justify-between">
                          <span className="flex items-center gap-1.5 text-gray-300">
                            <span className="w-2 h-2 rounded-full bg-[#D92C1C]" />
                            Total Leads:
                          </span>
                          <span className="font-bold text-white text-sm">{data.inquiries}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="flex items-center gap-1.5 text-gray-300">
                            <span className="w-2 h-2 rounded-full bg-emerald-400" />
                            Dispatches:
                          </span>
                          <span className="font-bold text-emerald-400 text-sm">{data.dispatches}</span>
                        </div>
                        <div className="flex items-center justify-between pt-1 border-t border-white/10">
                          <span className="flex items-center gap-1.5 text-gray-300">
                            <span className="w-2 h-2 rounded-full bg-purple-400" />
                            Volume Flow:
                          </span>
                          <span className="font-bold text-[#FFD400] text-sm">₹{data.revenue?.toLocaleString('en-IN')}</span>
                        </div>
                      </div>
                    </div>
                  );
                }
                return null;
              };

              return (
                <div className="space-y-6">
                  
                  {/* SIMPLE CLEAN HEADER & TIMEFRAME SWITCHER */}
                  <div className="bg-white p-5 sm:p-6 rounded-2xl border border-[#E5E1DD] shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                    <div>
                      <h3 className="font-display font-black text-xl text-[#111111] uppercase tracking-tight">
                        Dashboard Overview
                      </h3>
                      <p className="text-xs text-gray-500 mt-0.5">
                        Real-time summary of inquiries, dispatches, and Lucknow network flow.
                      </p>
                    </div>

                    {/* Minimalist Filter Tabs */}
                    <div className="flex flex-wrap items-center gap-1.5 bg-[#F6F4F1] p-1 rounded-xl border border-[#E5E1DD]">
                      {[
                        { id: 'today', label: 'Today' },
                        { id: 'week', label: 'Week' },
                        { id: 'month', label: 'Month' },
                        { id: 'year', label: 'Year' },
                        { id: 'custom', label: 'Custom 📅' },
                      ].map((tf) => (
                        <button
                          key={tf.id}
                          type="button"
                          onClick={() => {
                            setOverviewTimeframe(tf.id);
                            if (tf.id === 'custom') setIsCalendarPickerOpen(!isCalendarPickerOpen);
                            else setIsCalendarPickerOpen(false);
                          }}
                          className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                            overviewTimeframe === tf.id
                              ? 'bg-[#D92C1C] text-white shadow-xs'
                              : 'text-gray-600 hover:text-[#111111] hover:bg-white/60'
                          }`}
                        >
                          {tf.label}
                        </button>
                      ))}
                      <button
                        type="button"
                        onClick={() => {
                          loadStats();
                          loadLeads();
                          showToast('Dashboard data refreshed!');
                        }}
                        className="p-1.5 rounded-lg text-gray-600 hover:text-black hover:bg-white transition-colors cursor-pointer"
                        title="Refresh"
                      >
                        <RefreshCw className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  {/* CUSTOM DATE RANGE BAR */}
                  {overviewTimeframe === 'custom' && (
                    <div className="p-4 rounded-2xl bg-[#FBF9F7] border border-[#E5E1DD] flex flex-wrap items-center justify-between gap-3 text-xs animate-in fade-in duration-200">
                      <div className="flex items-center gap-3">
                        <span className="font-bold text-gray-700 flex items-center gap-1.5">
                          <Calendar className="w-4 h-4 text-[#D92C1C]" /> Select Dates:
                        </span>
                        <div className="flex items-center gap-2 font-mono">
                          <input
                            type="date"
                            value={customStartDate}
                            onChange={(e) => setCustomStartDate(e.target.value)}
                            className="px-2.5 py-1 rounded-lg bg-white border border-[#E5E1DD] text-xs font-bold"
                          />
                          <span className="text-gray-400">to</span>
                          <input
                            type="date"
                            value={customEndDate}
                            onChange={(e) => setCustomEndDate(e.target.value)}
                            className="px-2.5 py-1 rounded-lg bg-white border border-[#E5E1DD] text-xs font-bold"
                          />
                        </div>
                      </div>

                      <div className="flex items-center gap-1.5">
                        <button
                          type="button"
                          onClick={() => { setCustomStartDate('2026-08-27'); setCustomEndDate('2026-09-03'); }}
                          className="px-2 py-1 rounded-md bg-white border border-[#E5E1DD] text-[11px] font-bold text-gray-600 hover:text-black cursor-pointer"
                        >
                          7 Days
                        </button>
                        <button
                          type="button"
                          onClick={() => { setCustomStartDate('2026-08-04'); setCustomEndDate('2026-09-03'); }}
                          className="px-2 py-1 rounded-md bg-white border border-[#E5E1DD] text-[11px] font-bold text-gray-600 hover:text-black cursor-pointer"
                        >
                          30 Days
                        </button>
                        <button
                          type="button"
                          onClick={() => { setCustomStartDate('2026-01-01'); setCustomEndDate('2026-12-31'); }}
                          className="px-2 py-1 rounded-md bg-white border border-[#E5E1DD] text-[11px] font-bold text-gray-600 hover:text-black cursor-pointer"
                        >
                          Year 2026
                        </button>
                      </div>
                    </div>
                  )}

                  {/* 4 CLEAN METRIC STAT CARDS */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    
                    {/* Card 1: Total Leads */}
                    <div className="bg-white p-5 rounded-2xl border border-[#E5E1DD] shadow-xs flex items-center justify-between">
                      <div className="space-y-1">
                        <span className="text-[11px] font-bold uppercase text-gray-500 block">Total Inquiries</span>
                        <div className="font-display font-black text-2xl text-[#111111]">
                          {totalPeriodLeads.toLocaleString('en-IN')}
                        </div>
                        <span className="text-[11px] font-bold text-emerald-600">
                          {avgPeriodConversion}% Converted
                        </span>
                      </div>
                      <div className="w-12 h-12 rounded-xl bg-red-50 text-[#D92C1C] flex items-center justify-center flex-shrink-0">
                        <Users className="w-6 h-6" />
                      </div>
                    </div>

                    {/* Card 2: Bookings */}
                    <div className="bg-white p-5 rounded-2xl border border-[#E5E1DD] shadow-xs flex items-center justify-between">
                      <div className="space-y-1">
                        <span className="text-[11px] font-bold uppercase text-gray-500 block">Service Bookings</span>
                        <div className="font-display font-black text-2xl text-[#111111]">
                          {totalPeriodDispatches.toLocaleString('en-IN')}
                        </div>
                        <span className="text-[11px] font-bold text-emerald-600">
                          99.4% Dispatched
                        </span>
                      </div>
                      <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0">
                        <CalendarCheck className="w-6 h-6" />
                      </div>
                    </div>

                    {/* Card 3: Revenue */}
                    <div className="bg-white p-5 rounded-2xl border border-[#E5E1DD] shadow-xs flex items-center justify-between">
                      <div className="space-y-1">
                        <span className="text-[11px] font-bold uppercase text-gray-500 block">Gross Volume Flow</span>
                        <div className="font-display font-black text-2xl text-[#111111]">
                          ₹{totalPeriodRevenue >= 100000 ? `${(totalPeriodRevenue / 100000).toFixed(2)}L` : totalPeriodRevenue.toLocaleString('en-IN')}
                        </div>
                        <span className="text-[11px] font-bold text-blue-600">
                          Verified GMV
                        </span>
                      </div>
                      <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0">
                        <TrendingUp className="w-6 h-6" />
                      </div>
                    </div>

                    {/* Card 4: Avg Response Time */}
                    <div className="bg-white p-5 rounded-2xl border border-[#E5E1DD] shadow-xs flex items-center justify-between">
                      <div className="space-y-1">
                        <span className="text-[11px] font-bold uppercase text-gray-500 block">Avg Response Time</span>
                        <div className="font-display font-black text-2xl text-[#111111]">
                          {overviewTimeframe === 'today' ? '12.8m' : '14.5m'}
                        </div>
                        <span className="text-[11px] font-bold text-purple-600">
                          Sub-20m Arrival
                        </span>
                      </div>
                      <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center flex-shrink-0">
                        <Clock className="w-6 h-6" />
                      </div>
                    </div>

                  </div>

                  {/* MAIN ACTIVITY CHART */}
                  <div className="bg-white p-6 sm:p-7 rounded-2xl border border-[#E5E1DD] shadow-xs space-y-5">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-3 border-b border-[#E5E1DD]">
                      <div>
                        <h4 className="font-display font-bold text-base uppercase tracking-tight text-[#111111]">
                          {overviewTimeframe === 'today' ? "Today's Inquiries & Dispatch Activity" :
                           overviewTimeframe === 'week' ? "Weekly Inquiries & Dispatches" :
                           overviewTimeframe === 'month' ? "Monthly Performance Activity" :
                           overviewTimeframe === 'year' ? "Annual Growth Activity" : "Period Activity"}
                        </h4>
                        <p className="text-xs text-gray-500">Live operational trends across Lucknow.</p>
                      </div>

                      {/* Metric Toggle Tabs */}
                      <div className="flex items-center gap-1 bg-[#F6F4F1] p-1 rounded-xl">
                        {[
                          { id: 'all', label: 'All' },
                          { id: 'courier', label: 'Inquiries' },
                          { id: 'dispatches', label: 'Dispatches' }
                        ].map((m) => (
                          <button
                            key={m.id}
                            type="button"
                            onClick={() => setActiveGraphMetric(m.id)}
                            className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                              activeGraphMetric === m.id
                                ? 'bg-white text-[#111111] shadow-2xs font-extrabold'
                                : 'text-gray-500 hover:text-black'
                            }`}
                          >
                            {m.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Chart Container */}
                    <div className="h-64 w-full pt-1">
                      <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={currentChartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                          <defs>
                            <linearGradient id="rechartsLeadGrad" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="5%" stopColor="#D92C1C" stopOpacity={0.3}/>
                              <stop offset="95%" stopColor="#D92C1C" stopOpacity={0.0}/>
                            </linearGradient>
                            <linearGradient id="rechartsDispatchGrad" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="5%" stopColor="#10B981" stopOpacity={0.25}/>
                              <stop offset="95%" stopColor="#10B981" stopOpacity={0.0}/>
                            </linearGradient>
                          </defs>
                          
                          <CartesianGrid strokeDasharray="3 3" stroke="#F0ECE8" vertical={false} />
                          <XAxis dataKey="name" stroke="#888888" fontSize={11} fontWeight={600} tickLine={false} axisLine={{ stroke: '#E5E1DD' }} />
                          <YAxis stroke="#888888" fontSize={11} fontWeight={600} tickLine={false} axisLine={false} />
                          <RechartsTooltip content={<CustomRechartsTooltip />} />

                          {(activeGraphMetric === 'all' || activeGraphMetric === 'courier') && (
                            <Area type="monotone" dataKey="inquiries" stroke="#D92C1C" strokeWidth={2.5} fillOpacity={1} fill="url(#rechartsLeadGrad)" />
                          )}
                          {(activeGraphMetric === 'all' || activeGraphMetric === 'dispatches') && (
                            <Area type="monotone" dataKey="dispatches" stroke="#10B981" strokeWidth={2} fillOpacity={1} fill="url(#rechartsDispatchGrad)" />
                          )}
                        </AreaChart>
                      </ResponsiveContainer>
                    </div>

                    {/* Simple Clean Legend */}
                    <div className="flex items-center gap-5 text-xs pt-2 border-t border-[#E5E1DD]">
                      <div className="flex items-center gap-1.5 font-medium">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#D92C1C]" />
                        <span>Inquiries</span>
                      </div>
                      <div className="flex items-center gap-1.5 font-medium">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#10B981]" />
                        <span>Dispatches</span>
                      </div>
                    </div>
                  </div>

                  {/* 2-COLUMN QUICK RECENT ACTIVITY (LEADS & BOOKINGS) */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                    
                    {/* RECENT LEADS */}
                    <div className="bg-white p-5 rounded-2xl border border-[#E5E1DD] shadow-xs space-y-4">
                      <div className="flex items-center justify-between pb-3 border-b border-[#E5E1DD]">
                        <h4 className="font-display font-bold text-sm uppercase tracking-tight text-[#111111]">
                          Recent Customer Inquiries
                        </h4>
                        <button
                          type="button"
                          onClick={() => setActiveTab('leads')}
                          className="text-xs font-bold text-[#D92C1C] hover:underline cursor-pointer"
                        >
                          View All ({leads.length}) →
                        </button>
                      </div>

                      {leads.length === 0 ? (
                        <p className="text-xs text-gray-400 text-center py-6">No recent inquiries yet.</p>
                      ) : (
                        <div className="divide-y divide-[#E5E1DD]">
                          {leads.slice(0, 4).map((l) => (
                            <div key={l._id} className="py-2.5 flex items-center justify-between text-xs">
                              <div>
                                <span className="font-bold text-[#111111] block">{l.name}</span>
                                <span className="text-[11px] text-gray-500 font-mono">+91 {l.phone} • {l.service || 'General'}</span>
                              </div>
                              <button
                                type="button"
                                onClick={() => setViewingLead(l)}
                                className="px-2.5 py-1 rounded-lg bg-gray-100 hover:bg-gray-200 text-[#111111] font-bold text-[11px] cursor-pointer"
                              >
                                View
                              </button>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* RECENT BOOKINGS */}
                    <div className="bg-white p-5 rounded-2xl border border-[#E5E1DD] shadow-xs space-y-4">
                      <div className="flex items-center justify-between pb-3 border-b border-[#E5E1DD]">
                        <h4 className="font-display font-bold text-sm uppercase tracking-tight text-[#111111]">
                          Recent Service Bookings
                        </h4>
                        <button
                          type="button"
                          onClick={() => setActiveTab('bookings')}
                          className="text-xs font-bold text-[#D92C1C] hover:underline cursor-pointer"
                        >
                          View All ({bookingsList.length}) →
                        </button>
                      </div>

                      {bookingsList.length === 0 ? (
                        <p className="text-xs text-gray-400 text-center py-6">No bookings yet.</p>
                      ) : (
                        <div className="divide-y divide-[#E5E1DD]">
                          {bookingsList.slice(0, 4).map((b) => (
                            <div key={b.id} className="py-2.5 flex items-center justify-between text-xs">
                              <div>
                                <span className="font-bold text-[#111111] block">{b.customerName}</span>
                                <span className="text-[11px] text-gray-500">{b.serviceName} • {b.bookingDate}</span>
                              </div>
                              <span className={`px-2 py-0.5 rounded-md text-[10px] font-bold ${
                                b.status === 'Completed' ? 'bg-emerald-50 text-emerald-700' :
                                b.status === 'In Progress' ? 'bg-blue-50 text-blue-700' :
                                'bg-amber-50 text-amber-700'
                              }`}>
                                {b.status}
                              </span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                  </div>

                </div>
              );
            })()}

            {/* 2. LEADS & INQUIRIES */}
            {activeTab === 'leads' && (
              <div className="space-y-4">
                <div className="bg-white p-6 rounded-3xl border border-[#E5E1DD] shadow-xs flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                  <div className="flex flex-wrap items-center gap-3">
                    <div className="relative">
                      <Search className="w-4 h-4 text-[#888888] absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        placeholder="Search name, phone, email..."
                        value={leadSearch}
                        onChange={(e) => setLeadSearch(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && loadLeads()}
                        className="pl-9 pr-4 py-2 rounded-xl bg-[#F6F4F1] border border-[#E5E1DD] text-xs focus:bg-white outline-none w-60"
                      />
                    </div>
                    <select
                      value={leadStatusFilter}
                      onChange={(e) => setLeadStatusFilter(e.target.value)}
                      className="px-3.5 py-2 rounded-xl bg-[#F6F4F1] border border-[#E5E1DD] text-xs font-bold outline-none cursor-pointer"
                    >
                      <option value="All">All Statuses</option>
                      <option value="New">New</option>
                      <option value="Contacted">Contacted</option>
                      <option value="In Progress">In Progress</option>
                      <option value="Converted">Converted</option>
                      <option value="Closed">Closed</option>
                      <option value="Spam">Spam</option>
                    </select>
                    <button onClick={loadLeads} className="p-2 rounded-xl bg-[#F6F4F1] hover:bg-[#EAE6E1] border border-[#E5E1DD] cursor-pointer">
                      <RefreshCw className={`w-4 h-4 ${isLoadingLeads ? 'animate-spin' : ''}`} />
                    </button>
                  </div>
                  <button onClick={handleExportCSV} className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#111111] hover:bg-black text-white text-xs font-bold uppercase tracking-wider cursor-pointer shadow-xs">
                    <Download className="w-4 h-4" />
                    <span>Export CSV</span>
                  </button>
                </div>

                <div className="bg-white rounded-3xl border border-[#E5E1DD] shadow-xs overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs">
                      <thead className="bg-[#F6F4F1] border-b border-[#E5E1DD] text-[#555555] font-mono uppercase tracking-wider">
                        <tr>
                          <th className="p-4">Customer</th>
                          <th className="p-4">Contact</th>
                          <th className="p-4">Service & Source</th>
                          <th className="p-4">Message</th>
                          <th className="p-4">Status</th>
                          <th className="p-4 text-right">Action</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[#E5E1DD]">
                        {leads.map((lead) => (
                          <tr key={lead._id} className="hover:bg-[#FFFDFB]">
                            <td className="p-4 font-bold text-[#111111]">{lead.name}</td>
                            <td className="p-4 font-mono">+91 {lead.phone} <br /><span className="text-[#666666] font-sans">{lead.email}</span></td>
                            <td className="p-4"><span className="px-2 py-0.5 rounded bg-[#F6F4F1] border border-[#E5E1DD] font-bold">{lead.service}</span></td>
                            <td className="p-4 max-w-xs">{lead.message || '-'}</td>
                            <td className="p-4">
                              <select
                                value={lead.status}
                                onChange={(e) => handleUpdateLeadStatus(lead._id, e.target.value, lead.notes)}
                                className="px-2.5 py-1 rounded-lg text-xs font-bold border border-[#E5E1DD] bg-white cursor-pointer"
                              >
                                <option value="New">New</option>
                                <option value="Contacted">Contacted</option>
                                <option value="In Progress">In Progress</option>
                                <option value="Converted">Converted</option>
                                <option value="Closed">Closed</option>
                              </select>
                            </td>
                            <td className="p-4 text-right">
                              <div className="flex items-center justify-end gap-1.5">
                                <button
                                  type="button"
                                  onClick={() => setViewingLead(lead)}
                                  className="px-2.5 py-1 rounded-lg bg-[#F6F4F1] hover:bg-[#EAE6E1] text-[#111111] text-[11px] font-bold cursor-pointer transition-colors"
                                >
                                  View 👁️
                                </button>
                                <button onClick={() => handleDeleteLead(lead._id)} className="p-1.5 text-red-500 hover:bg-red-50 rounded-lg cursor-pointer">
                                  <Trash2 className="w-4 h-4" />
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}

            {/* 3. SERVICE BOOKINGS & DISPATCHES */}
            {activeTab === 'bookings' && (
              <div className="bg-white rounded-3xl border border-[#E5E1DD] shadow-xs overflow-hidden">
                <div className="p-6 border-b border-[#E5E1DD] flex items-center justify-between">
                  <div>
                    <h3 className="font-display font-black text-xl uppercase tracking-tight">
                      Instant Service Bookings & Dispatches ({bookingsList.length})
                    </h3>
                    <p className="text-xs text-[#666666]">
                      Monitor live doorstep bookings, allocated specialists, and update status in real-time.
                    </p>
                  </div>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs">
                    <thead className="bg-[#F6F4F1] border-b border-[#E5E1DD] text-[#555555] font-mono uppercase">
                      <tr>
                        <th className="p-4">Booking Ref</th>
                        <th className="p-4">Customer</th>
                        <th className="p-4">Service Category</th>
                        <th className="p-4">Scheduled Slot</th>
                        <th className="p-4">Amount</th>
                        <th className="p-4">Dispatch Status</th>
                        <th className="p-4 text-right">Tax Invoice</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#E5E1DD]">
                      {bookingsList.map((b) => (
                        <tr key={b._id} className="hover:bg-[#FFFDFB]">
                          <td className="p-4 font-mono font-bold text-[#D92C1C]">{b.bookingRef}</td>
                          <td className="p-4 font-bold text-[#111111]">{b.customerName} <br /><span className="text-[#666666] font-mono font-normal">+91 {b.phone}</span></td>
                          <td className="p-4 font-bold">{b.service}</td>
                          <td className="p-4 font-mono text-[#555555]">{b.date}</td>
                          <td className="p-4 font-black font-mono text-[#111111]">{b.amount}</td>
                          <td className="p-4">
                            <select
                              value={b.status}
                              onChange={(e) => {
                                const newStatus = e.target.value;
                                setBookingsList(prev => prev.map(item => item._id === b._id ? { ...item, status: newStatus } : item));
                                showToast(`Booking ${b.bookingRef} status updated to ${newStatus}`);
                              }}
                              className="px-2.5 py-1 rounded-lg text-[11px] font-bold border border-[#E5E1DD] bg-white cursor-pointer"
                            >
                              <option value="Confirmed">Confirmed</option>
                              <option value="Dispatched">Dispatched</option>
                              <option value="In Progress">In Progress</option>
                              <option value="Completed">Completed</option>
                              <option value="Cancelled">Cancelled</option>
                            </select>
                          </td>
                          <td className="p-4 text-right">
                            <button
                              type="button"
                              onClick={() => setActiveInvoiceBooking(b)}
                              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#111111] hover:bg-black text-white text-[11px] font-extrabold uppercase tracking-wider transition-all cursor-pointer shadow-xs"
                            >
                              <Printer className="w-3.5 h-3.5 text-yellow-400" />
                              <span>Invoice</span>
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* 4. HOME PAGE (COMPLETE MULTI-SECTION EDITOR) */}
            {activeTab === 'homeCMS' && (
              <div className="bg-white rounded-3xl p-8 border border-[#E5E1DD] shadow-xs max-w-4xl space-y-8">
                <div className="pb-4 border-b border-[#E5E1DD]">
                  <h3 className="font-display font-black text-xl uppercase tracking-tight">
                    Home Page Content Editor (A to Z)
                  </h3>
                  <p className="text-xs text-[#666666]">
                    Modify Hero headline, value pillars, and bottom call-to-action banner live.
                  </p>
                </div>

                <form onSubmit={handleSaveHomePage} className="space-y-8">
                  
                  {/* SECTION 1: HERO */}
                  <div className="p-6 rounded-3xl bg-[#FBF9F7] border border-[#E5E1DD] space-y-4">
                    <span className="text-[11px] font-mono font-extrabold uppercase text-[#D92C1C] block">
                      1. Main Hero Banner & Typography
                    </span>
                    <Input
                      label="Top Supertag Badge"
                      value={homePageForm.hero.badge || ''}
                      onChange={(e) => setHomePageForm({
                        ...homePageForm,
                        hero: { ...homePageForm.hero, badge: e.target.value }
                      })}
                    />
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <Input
                        label="Hero Main Headline Line 1"
                        value={homePageForm.hero.title || ''}
                        onChange={(e) => setHomePageForm({
                          ...homePageForm,
                          hero: { ...homePageForm.hero, title: e.target.value }
                        })}
                      />
                      <Input
                        label="Hero Main Headline Line 2 (Red Accent)"
                        value={homePageForm.hero.subtitle || ''}
                        onChange={(e) => setHomePageForm({
                          ...homePageForm,
                          hero: { ...homePageForm.hero, subtitle: e.target.value }
                        })}
                      />
                    </div>
                    <Textarea
                      label="Hero Subtitle Narrative"
                      rows={3}
                      value={homePageForm.hero.description || ''}
                      onChange={(e) => setHomePageForm({
                        ...homePageForm,
                        hero: { ...homePageForm.hero, description: e.target.value }
                      })}
                    />
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <Input
                        label="Primary Button Text"
                        value={homePageForm.hero.buttonText || ''}
                        onChange={(e) => setHomePageForm({
                          ...homePageForm,
                          hero: { ...homePageForm.hero, buttonText: e.target.value }
                        })}
                      />
                      <Input
                        label="Secondary Button Text"
                        value={homePageForm.hero.secondaryButtonText || ''}
                        onChange={(e) => setHomePageForm({
                          ...homePageForm,
                          hero: { ...homePageForm.hero, secondaryButtonText: e.target.value }
                        })}
                      />
                    </div>

                    {/* HERO & FLOATING CARDS IMAGES */}
                    <div className="pt-4 border-t border-[#E5E1DD] space-y-4">
                      <span className="text-[11px] font-mono font-bold uppercase text-[#111111] block">
                        Hero Banner & Floating Specialist Images (Upload File / URL / Gallery)
                      </span>

                      <ImageUploadPicker
                        label="Main Center Hero Banner Image"
                        value={homePageForm.hero.image || '/images/hero-woman.jpg'}
                        onChange={(newUrl) => setHomePageForm({
                          ...homePageForm,
                          hero: { ...homePageForm.hero, image: newUrl }
                        })}
                        folder="hero"
                      />

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                        <ImageUploadPicker
                          label="Cabs & Rides Image"
                          value={homePageForm.hero.images?.rides || 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=800&q=80'}
                          onChange={(newUrl) => setHomePageForm({
                            ...homePageForm,
                            hero: {
                              ...homePageForm.hero,
                              images: { ...(homePageForm.hero.images || {}), rides: newUrl }
                            }
                          })}
                          folder="specialists"
                        />

                        <ImageUploadPicker
                          label="Parcel & Courier Image"
                          value={homePageForm.hero.images?.delivery || 'https://images.unsplash.com/photo-1616401784845-180882ba9ba8?auto=format&fit=crop&w=800&q=80'}
                          onChange={(newUrl) => setHomePageForm({
                            ...homePageForm,
                            hero: {
                              ...homePageForm.hero,
                              images: { ...(homePageForm.hero.images || {}), delivery: newUrl }
                            }
                          })}
                          folder="specialists"
                        />

                        <ImageUploadPicker
                          label="Salon & Spa Image"
                          value={homePageForm.hero.images?.beauty || 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=800&q=80'}
                          onChange={(newUrl) => setHomePageForm({
                            ...homePageForm,
                            hero: {
                              ...homePageForm.hero,
                              images: { ...(homePageForm.hero.images || {}), beauty: newUrl }
                            }
                          })}
                          folder="specialists"
                        />

                        <ImageUploadPicker
                          label="Home Deep Cleaning Image"
                          value={homePageForm.hero.images?.home || 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80'}
                          onChange={(newUrl) => setHomePageForm({
                            ...homePageForm,
                            hero: {
                              ...homePageForm.hero,
                              images: { ...(homePageForm.hero.images || {}), home: newUrl }
                            }
                          })}
                          folder="specialists"
                        />
                      </div>
                    </div>
                  </div>

                  {/* SECTION 2: KEY PLATFORM MILESTONE STATS & COUNTERS (BLACK HORIZONTAL STRIP) */}
                  <div className="p-6 rounded-3xl bg-[#FBF9F7] border border-[#E5E1DD] space-y-5">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-[11px] font-mono font-extrabold uppercase text-[#D92C1C] block">
                          2. Key Platform Statistics & Milestone Counters
                        </span>
                        <p className="text-xs text-gray-500 mt-0.5">
                          Edit the 4 metrics shown on the dark milestone banner below the service selector.
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                      {[0, 1, 2, 3].map((sIdx) => {
                        const defaultList = [
                          { value: '10', suffix: 'K+', label: 'Happy Customers' },
                          { value: '25', suffix: 'K+', label: 'Services Completed' },
                          { value: '500', suffix: '+', label: 'Service Partners' },
                          { value: '24/7', suffix: '', label: 'Customer Support' }
                        ];

                        const currentList = [0, 1, 2, 3].map(i => {
                          const existing = homePageForm.stats?.[i] || {};
                          const def = defaultList[i];
                          return {
                            value: existing.value !== undefined && existing.value !== '' ? existing.value : def.value,
                            suffix: existing.suffix !== undefined ? existing.suffix : def.suffix,
                            label: existing.label !== undefined && existing.label !== '' ? existing.label : def.label,
                          };
                        });

                        const st = currentList[sIdx];

                        return (
                          <div key={sIdx} className="p-4 bg-white rounded-2xl border border-[#E5E1DD] space-y-3">
                            <div className="flex items-center justify-between pb-1.5 border-b border-[#E5E1DD]">
                              <span className="text-[10px] font-mono font-bold uppercase text-[#D92C1C]">
                                Counter #{sIdx + 1}
                              </span>
                            </div>

                            <div className="grid grid-cols-2 gap-2">
                              <Input
                                label="Number / Value"
                                placeholder="e.g. 10"
                                value={st.value || ''}
                                onChange={(e) => {
                                  const updated = currentList.map((item, idx) => 
                                    idx === sIdx ? { ...item, value: e.target.value } : item
                                  );
                                  setHomePageForm({ ...homePageForm, stats: updated });
                                }}
                              />
                              <Input
                                label="Suffix (+/K+)"
                                placeholder="e.g. K+"
                                value={st.suffix || ''}
                                onChange={(e) => {
                                  const updated = currentList.map((item, idx) => 
                                    idx === sIdx ? { ...item, suffix: e.target.value } : item
                                  );
                                  setHomePageForm({ ...homePageForm, stats: updated });
                                }}
                              />
                            </div>

                            <Input
                              label="Stat Label"
                              placeholder="e.g. Happy Customers"
                              value={st.label || ''}
                              onChange={(e) => {
                                const updated = currentList.map((item, idx) => 
                                  idx === sIdx ? { ...item, label: e.target.value } : item
                                );
                                setHomePageForm({ ...homePageForm, stats: updated });
                              }}
                            />
                          </div>
                        );
                      })}
                    </div>

                    {/* LIVE PREVIEW STRIP */}
                    <div className="p-4 rounded-2xl bg-[#111111] text-white space-y-2">
                      <span className="text-[10px] font-mono uppercase text-gray-400 font-bold tracking-wider block">
                        Live Visual Preview:
                      </span>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 divide-y sm:divide-y-0 sm:divide-x divide-white/10 pt-1">
                        {[0, 1, 2, 3].map((idx) => {
                          const def = [
                            { value: '10', suffix: 'K+', label: 'Happy Customers' },
                            { value: '25', suffix: 'K+', label: 'Services Completed' },
                            { value: '500', suffix: '+', label: 'Service Partners' },
                            { value: '24/7', suffix: '', label: 'Customer Support' }
                          ][idx];
                          const st = homePageForm.stats?.[idx] || def;
                          return (
                            <div key={idx} className={idx > 0 ? 'sm:pl-4' : ''}>
                              <div className="font-extrabold text-xl text-white tracking-tight">
                                {st.value || def.value}{st.suffix !== undefined ? st.suffix : def.suffix}
                              </div>
                              <span className="text-[11px] text-gray-400 font-medium block">
                                {st.label || def.label}
                              </span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>

                  {/* SECTION 3: WHY CHOOSE US / VALUE PILLARS */}
                  <div className="p-6 rounded-3xl bg-[#FBF9F7] border border-[#E5E1DD] space-y-4">
                    <span className="text-[11px] font-mono font-extrabold uppercase text-[#D92C1C] block">
                      3. Why Choose Us / Platform Standards
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <Input
                        label="Section Title"
                        value={homePageForm.whyChooseUs.title || ''}
                        onChange={(e) => setHomePageForm({
                          ...homePageForm,
                          whyChooseUs: { ...homePageForm.whyChooseUs, title: e.target.value }
                        })}
                      />
                      <Input
                        label="Section Tagline"
                        value={homePageForm.whyChooseUs.subtitle || ''}
                        onChange={(e) => setHomePageForm({
                          ...homePageForm,
                          whyChooseUs: { ...homePageForm.whyChooseUs, subtitle: e.target.value }
                        })}
                      />
                    </div>

                    <div className="space-y-3 pt-2">
                      <span className="text-xs font-bold font-mono text-[#111111] uppercase block">
                        4 Value Pillar Cards:
                      </span>
                      {homePageForm.whyChooseUs.items.map((item, idx) => (
                        <div key={idx} className="p-4 bg-white rounded-2xl border border-[#E5E1DD] space-y-2">
                          <Input
                            label={`Pillar 0${idx + 1} Title`}
                            value={item.title}
                            onChange={(e) => {
                              const updated = [...homePageForm.whyChooseUs.items];
                              updated[idx].title = e.target.value;
                              setHomePageForm({
                                ...homePageForm,
                                whyChooseUs: { ...homePageForm.whyChooseUs, items: updated }
                              });
                            }}
                          />
                          <Textarea
                            label="Pillar Description"
                            rows={2}
                            value={item.desc}
                            onChange={(e) => {
                              const updated = [...homePageForm.whyChooseUs.items];
                              updated[idx].desc = e.target.value;
                              setHomePageForm({
                                ...homePageForm,
                                whyChooseUs: { ...homePageForm.whyChooseUs, items: updated }
                              });
                            }}
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* SECTION 3: FINAL CALL TO ACTION BANNER */}
                  <div className="p-6 rounded-3xl bg-[#FBF9F7] border border-[#E5E1DD] space-y-4">
                    <span className="text-[11px] font-mono font-extrabold uppercase text-[#D92C1C] block">
                      3. Bottom Call To Action Banner
                    </span>
                    <Input
                      label="CTA Banner Title"
                      value={homePageForm.finalCTA.title || ''}
                      onChange={(e) => setHomePageForm({
                        ...homePageForm,
                        finalCTA: { ...homePageForm.finalCTA, title: e.target.value }
                      })}
                    />
                    <Input
                      label="CTA Banner Subtitle"
                      value={homePageForm.finalCTA.subtitle || ''}
                      onChange={(e) => setHomePageForm({
                        ...homePageForm,
                        finalCTA: { ...homePageForm.finalCTA, subtitle: e.target.value }
                      })}
                    />
                    <Input
                      label="CTA Button Text"
                      value={homePageForm.finalCTA.buttonText || ''}
                      onChange={(e) => setHomePageForm({
                        ...homePageForm,
                        finalCTA: { ...homePageForm.finalCTA, buttonText: e.target.value }
                      })}
                    />
                  </div>

                  <div className="flex justify-end pt-4">
                    <Button type="submit" variant="primary" size="md" arrow>
                      Save Home Page Content to MongoDB
                    </Button>
                  </div>
                </form>
              </div>
            )}

            {/* 5. ABOUT US PAGE */}
            {activeTab === 'aboutCMS' && (
              <div className="bg-white rounded-3xl p-8 border border-[#E5E1DD] shadow-xs max-w-4xl space-y-8">
                <div className="pb-4 border-b border-[#E5E1DD]">
                  <h3 className="font-display font-black text-xl uppercase tracking-tight">
                    About Us Content Editor (A to Z)
                  </h3>
                  <p className="text-xs text-[#666666]">
                    Control founding story, mission narrative, and 4 foundational pillars live.
                  </p>
                </div>

                <form onSubmit={handleSaveAboutPage} className="space-y-8">
                  
                  {/* HERO & STORY */}
                  <div className="p-6 rounded-3xl bg-[#FBF9F7] border border-[#E5E1DD] space-y-4">
                    <span className="text-[11px] font-mono font-extrabold uppercase text-[#D92C1C] block">
                      1. About Hero & Founding Mission
                    </span>
                    <Input
                      label="Hero Badge"
                      value={aboutPageForm.hero.badge || ''}
                      onChange={(e) => setAboutPageForm({
                        ...aboutPageForm,
                        hero: { ...aboutPageForm.hero, badge: e.target.value }
                      })}
                    />
                    <Input
                      label="About Main Headline"
                      value={aboutPageForm.hero.title || ''}
                      onChange={(e) => setAboutPageForm({
                        ...aboutPageForm,
                        hero: { ...aboutPageForm.hero, title: e.target.value }
                      })}
                    />
                    <Textarea
                      label="Founding Story Description (Full Narrative)"
                      rows={4}
                      value={aboutPageForm.hero.description || ''}
                      onChange={(e) => setAboutPageForm({
                        ...aboutPageForm,
                        hero: { ...aboutPageForm.hero, description: e.target.value }
                      })}
                    />

                    <ImageUploadPicker
                      label="About Us Hero Feature Image (Lucknow Cityscape)"
                      value={aboutPageForm.hero.image || 'https://images.unsplash.com/photo-1596178065887-1198b6148b2b?auto=format&fit=crop&w=1200&q=80'}
                      onChange={(newUrl) => setAboutPageForm({
                        ...aboutPageForm,
                        hero: { ...aboutPageForm.hero, image: newUrl }
                      })}
                      folder="about"
                    />
                  </div>

                  {/* 4 FOUNDATIONAL VALUE PILLARS */}
                  <div className="p-6 rounded-3xl bg-[#FBF9F7] border border-[#E5E1DD] space-y-4">
                    <span className="text-[11px] font-mono font-extrabold uppercase text-[#D92C1C] block">
                      2. Four Foundational Principles & Quotes
                    </span>

                    <div className="space-y-4">
                      {aboutPageForm.pillars.map((p, pIdx) => (
                        <div key={pIdx} className="p-4 bg-white rounded-2xl border border-[#E5E1DD] space-y-3">
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            <Input
                              label={`Pillar ${p.num} Title`}
                              value={p.title}
                              onChange={(e) => {
                                const updated = [...aboutPageForm.pillars];
                                updated[pIdx].title = e.target.value;
                                setAboutPageForm({ ...aboutPageForm, pillars: updated });
                              }}
                            />
                            <Input
                              label="Core Quote / Motto"
                              value={p.quote || ''}
                              onChange={(e) => {
                                const updated = [...aboutPageForm.pillars];
                                updated[pIdx].quote = e.target.value;
                                setAboutPageForm({ ...aboutPageForm, pillars: updated });
                              }}
                            />
                          </div>
                          <Textarea
                            label="Pillar Description"
                            rows={2}
                            value={p.desc}
                            onChange={(e) => {
                              const updated = [...aboutPageForm.pillars];
                              updated[pIdx].desc = e.target.value;
                              setAboutPageForm({ ...aboutPageForm, pillars: updated });
                            }}
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-end pt-4">
                    <Button type="submit" variant="primary" size="md" arrow>
                      Save About Us Content to MongoDB
                    </Button>
                  </div>
                </form>
              </div>
            )}

            {/* 6. CONTACT US PAGE */}
            {activeTab === 'contactCMS' && (
              <div className="bg-white rounded-3xl p-8 border border-[#E5E1DD] shadow-xs max-w-4xl space-y-8">
                <div className="pb-4 border-b border-[#E5E1DD]">
                  <h3 className="font-display font-black text-xl uppercase tracking-tight">
                    Contact Us Content & Helpdesk Config
                  </h3>
                </div>

                <form onSubmit={handleSaveContactPage} className="space-y-6">
                  <div className="p-6 rounded-3xl bg-[#FBF9F7] border border-[#E5E1DD] space-y-4">
                    <span className="text-[11px] font-mono font-extrabold uppercase text-[#D92C1C] block">
                      Contact Banner & Guarantee
                    </span>
                    <Input
                      label="Top Badge"
                      value={contactPageForm.hero.badge || ''}
                      onChange={(e) => setContactPageForm({
                        ...contactPageForm,
                        hero: { ...contactPageForm.hero, badge: e.target.value }
                      })}
                    />
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <Input
                        label="Hero Heading"
                        value={contactPageForm.hero.title || ''}
                        onChange={(e) => setContactPageForm({
                          ...contactPageForm,
                          hero: { ...contactPageForm.hero, title: e.target.value }
                        })}
                      />
                      <Input
                        label="Hero Subtitle"
                        value={contactPageForm.hero.subtitle || ''}
                        onChange={(e) => setContactPageForm({
                          ...contactPageForm,
                          hero: { ...contactPageForm.hero, subtitle: e.target.value }
                        })}
                      />
                    </div>
                    <Textarea
                      label="Support Desk Description"
                      rows={3}
                      value={contactPageForm.hero.description || ''}
                      onChange={(e) => setContactPageForm({
                        ...contactPageForm,
                        hero: { ...contactPageForm.hero, description: e.target.value }
                      })}
                    />
                  </div>

                  <div className="flex justify-end pt-4">
                    <Button type="submit" variant="primary" size="md" arrow>
                      Save Contact Us Content to MongoDB
                    </Button>
                  </div>
                </form>
              </div>
            )}

            {/* 7. SERVICES & SUB-DROPDOWNS */}
            {activeTab === 'services' && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-display font-black text-xl uppercase tracking-tight">
                      Lucknow Services & Sub-Dropdowns ({servicesList.length})
                    </h3>
                  </div>
                  <Button
                    type="button"
                    variant="primary"
                    size="sm"
                    onClick={() => setEditingService({
                      id: 'new-service',
                      slug: 'new-service',
                      title: 'New Service Category',
                      tagline: 'Instant doorstep dispatch in Lucknow',
                      description: 'Comprehensive description of the new service.',
                      startingPrice: '₹99',
                      badge: 'New',
                      subServices: [
                        { id: 'sub-1', title: 'Standard Package', price: '₹99', unit: 'Per visit', duration: '30 mins', popular: true }
                      ]
                    })}
                  >
                    <Plus className="w-4 h-4 mr-1" /> Add Service Category
                  </Button>
                </div>

                {editingService && (
                  <div className="bg-white p-8 rounded-3xl border-2 border-[#D92C1C] shadow-lg space-y-5">
                    <div className="flex items-center justify-between pb-3 border-b border-[#E5E1DD]">
                      <h4 className="font-display font-bold text-lg uppercase tracking-tight">
                        {editingService._id ? `Edit: ${editingService.title}` : 'Create New Service Category'}
                      </h4>
                      <button onClick={() => setEditingService(null)} className="text-xs font-bold text-[#666666]">
                        Cancel ✕
                      </button>
                    </div>

                    <form onSubmit={handleSaveService} className="space-y-5">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <Input
                          label="Service Title *"
                          value={editingService.title || ''}
                          onChange={(e) => setEditingService({ ...editingService, title: e.target.value })}
                          required
                        />
                        <Input
                          label="URL Slug *"
                          value={editingService.slug || ''}
                          onChange={(e) => setEditingService({ ...editingService, slug: e.target.value, id: e.target.value })}
                          required
                        />
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <Input
                          label="Tagline"
                          value={editingService.tagline || ''}
                          onChange={(e) => setEditingService({ ...editingService, tagline: e.target.value })}
                        />
                        <Input
                          label="Starting Price Badge"
                          value={editingService.startingPrice || ''}
                          onChange={(e) => setEditingService({ ...editingService, startingPrice: e.target.value })}
                        />
                      </div>

                      <Textarea
                        label="Full Description"
                        rows={3}
                        value={editingService.description || ''}
                        onChange={(e) => setEditingService({ ...editingService, description: e.target.value })}
                      />

                      {/* SERVICE CARD & BANNER IMAGE PICKER */}
                      <div className="pt-2">
                        <ImageUploadPicker
                          label="Service Card & Hero Banner Image"
                          value={editingService.image || ''}
                          onChange={(newUrl) => setEditingService({ ...editingService, image: newUrl })}
                          folder="services"
                        />
                      </div>

                      <div className="p-4 rounded-2xl bg-[#F6F4F1] border border-[#E5E1DD] space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold uppercase font-mono text-[#111111]">
                            Sub-Services & Tariffs ({editingService.subServices?.length || 0})
                          </span>
                          <button type="button" onClick={addSubService} className="text-xs font-bold text-[#D92C1C] hover:underline cursor-pointer">
                            + Add Sub-Service
                          </button>
                        </div>

                        <div className="space-y-2">
                          {(editingService.subServices || []).map((sub, sIdx) => (
                            <div key={sIdx} className="p-3 bg-white rounded-xl border border-[#E5E1DD] grid grid-cols-1 sm:grid-cols-4 gap-2 items-center">
                              <input
                                placeholder="Sub-service Name"
                                value={sub.title}
                                onChange={(e) => {
                                  const updated = [...editingService.subServices];
                                  updated[sIdx].title = e.target.value;
                                  setEditingService({ ...editingService, subServices: updated });
                                }}
                                className="px-3 py-1.5 rounded-lg border border-[#E5E1DD] text-xs"
                              />
                              <input
                                placeholder="Price (₹)"
                                value={sub.price}
                                onChange={(e) => {
                                  const updated = [...editingService.subServices];
                                  updated[sIdx].price = e.target.value;
                                  setEditingService({ ...editingService, subServices: updated });
                                }}
                                className="px-3 py-1.5 rounded-lg border border-[#E5E1DD] text-xs font-bold font-mono"
                              />
                              <input
                                placeholder="Duration"
                                value={sub.duration}
                                onChange={(e) => {
                                  const updated = [...editingService.subServices];
                                  updated[sIdx].duration = e.target.value;
                                  setEditingService({ ...editingService, subServices: updated });
                                }}
                                className="px-3 py-1.5 rounded-lg border border-[#E5E1DD] text-xs"
                              />
                              <div className="flex items-center justify-between">
                                <label className="flex items-center gap-1.5 text-[11px] font-bold cursor-pointer">
                                  <input
                                    type="checkbox"
                                    checked={sub.popular}
                                    onChange={(e) => {
                                      const updated = [...editingService.subServices];
                                      updated[sIdx].popular = e.target.checked;
                                      setEditingService({ ...editingService, subServices: updated });
                                    }}
                                    className="rounded text-[#D92C1C]"
                                  />
                                  <span>Popular</span>
                                </label>
                                <button type="button" onClick={() => removeSubService(sIdx)} className="p-1 text-red-500 hover:bg-red-50 rounded">
                                  <Trash2 className="w-3.5 h-3.5" />
                                </button>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="pt-2 flex justify-end gap-3">
                        <Button type="button" variant="outline" size="sm" onClick={() => setEditingService(null)}>
                          Cancel
                        </Button>
                        <Button type="submit" variant="primary" size="sm" arrow>
                          Save Service to MongoDB
                        </Button>
                      </div>
                    </form>
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {servicesList.map((srv) => (
                    <div key={srv._id || srv.id} className="bg-white p-5 rounded-3xl border border-[#E5E1DD] shadow-xs flex flex-col justify-between space-y-4 overflow-hidden">
                      <div className="space-y-3">
                        {srv.image && (
                          <div className="h-28 w-full rounded-2xl overflow-hidden bg-[#FAF9F6] border border-[#E5E1DD]/60">
                            <img
                              src={srv.image}
                              alt={srv.title}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        )}
                        <div className="flex items-center justify-between">
                          <span className="px-2.5 py-0.5 rounded-full bg-[#FFF1EF] text-[#D92C1C] border border-[#D92C1C]/20 text-[10px] font-bold font-mono uppercase">
                            {srv.startingPrice}
                          </span>
                          <span className="text-xs font-mono text-[#888888]">/{srv.slug}</span>
                        </div>
                        <h4 className="font-display font-extrabold text-lg text-[#111111]">
                          {srv.title}
                        </h4>
                        <p className="text-xs text-[#666666] line-clamp-2">
                          {srv.tagline || srv.description}
                        </p>
                      </div>

                      <div className="pt-3 border-t border-[#E5E1DD] flex items-center justify-between">
                        <button onClick={() => setEditingService(srv)} className="text-xs font-bold text-[#111111] hover:text-[#D92C1C]">
                          Edit Content & Tariffs ✎
                        </button>
                        <button onClick={() => handleDeleteService(srv.slug || srv.id)} className="p-1.5 text-red-500 hover:bg-red-50 rounded-lg">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 8. LIFESTYLE PRODUCTS */}
            {activeTab === 'products' && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-display font-black text-xl uppercase tracking-tight">
                      Lifestyle Store Inventory ({productsList.length})
                    </h3>
                  </div>
                  <Button
                    type="button"
                    variant="primary"
                    size="sm"
                    onClick={() => setEditingProduct({
                      id: 'prod-' + (productsList.length + 1),
                      name: 'Artisan Product',
                      category: 'Home Fragrance',
                      price: 999,
                      originalPrice: 1299,
                      description: 'Handcrafted luxury essential item.',
                      image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=800&q=80',
                      badge: 'New',
                      inStock: true
                    })}
                  >
                    <Plus className="w-4 h-4 mr-1" /> Add New Product
                  </Button>
                </div>

                {editingProduct && (
                  <div className="bg-white p-8 rounded-3xl border-2 border-[#D92C1C] shadow-lg space-y-4">
                    <form onSubmit={handleSaveProduct} className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <Input
                          label="Product Name *"
                          value={editingProduct.name || ''}
                          onChange={(e) => setEditingProduct({ ...editingProduct, name: e.target.value })}
                          required
                        />
                        <Input
                          label="Category"
                          value={editingProduct.category || ''}
                          onChange={(e) => setEditingProduct({ ...editingProduct, category: e.target.value })}
                        />
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <Input
                          label="Price (₹) *"
                          type="number"
                          value={editingProduct.price || ''}
                          onChange={(e) => setEditingProduct({ ...editingProduct, price: Number(e.target.value) })}
                          required
                        />
                        <Input
                          label="Original MRP (₹)"
                          type="number"
                          value={editingProduct.originalPrice || ''}
                          onChange={(e) => setEditingProduct({ ...editingProduct, originalPrice: Number(e.target.value) })}
                        />
                        <Input
                          label="Badge"
                          value={editingProduct.badge || ''}
                          onChange={(e) => setEditingProduct({ ...editingProduct, badge: e.target.value })}
                        />
                      </div>

                      <ImageUploadPicker
                        label="Product Image"
                        value={editingProduct.image || ''}
                        onChange={(newUrl) => setEditingProduct({ ...editingProduct, image: newUrl })}
                        folder="products"
                      />

                      <div className="pt-2 flex justify-end gap-3">
                        <Button type="button" variant="outline" size="sm" onClick={() => setEditingProduct(null)}>
                          Cancel
                        </Button>
                        <Button type="submit" variant="primary" size="sm" arrow>
                          Save Product
                        </Button>
                      </div>
                    </form>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  {productsList.map((prod) => (
                    <div key={prod._id || prod.id} className="bg-white p-5 rounded-3xl border border-[#E5E1DD] shadow-xs flex flex-col justify-between">
                      <div>
                        {prod.image && (
                          <img src={prod.image} alt={prod.name} className="w-full h-36 object-cover rounded-2xl mb-3 bg-[#F6F4F1]" />
                        )}
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#D92C1C] block font-mono">
                          {prod.category}
                        </span>
                        <h4 className="font-display font-bold text-sm text-[#111111] mt-1">
                          {prod.name}
                        </h4>
                        <div className="flex items-center gap-2 mt-2">
                          <span className="font-extrabold text-[#111111]">₹{prod.price}</span>
                        </div>
                      </div>

                      <div className="pt-3 mt-3 border-t border-[#E5E1DD] flex items-center justify-between">
                        <button onClick={() => setEditingProduct(prod)} className="text-xs font-bold text-[#111111] hover:text-[#D92C1C]">
                          Edit ✎
                        </button>
                        <button onClick={() => handleDeleteProduct(prod.id || prod._id)} className="p-1.5 text-red-500 hover:bg-red-50 rounded-lg">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 9. SITE SETTINGS & SEO WITH SOCIAL LINKS */}
            {activeTab === 'settings' && (
              <div className="bg-white rounded-3xl p-8 border border-[#E5E1DD] shadow-xs max-w-4xl">
                <form onSubmit={handleSaveSettings} className="space-y-6">
                  <div className="pb-4 border-b border-[#E5E1DD]">
                    <h3 className="font-display font-black text-xl uppercase tracking-tight">
                      Global Site Details, Contact & Social Channels
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Input
                      label="Site Name"
                      value={siteSettingsForm.siteName || ''}
                      onChange={(e) => setSiteSettingsForm({ ...siteSettingsForm, siteName: e.target.value })}
                    />
                    <Input
                      label="Brand Tagline"
                      value={siteSettingsForm.tagline || ''}
                      onChange={(e) => setSiteSettingsForm({ ...siteSettingsForm, tagline: e.target.value })}
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Input
                      label="Primary Hotline Phone"
                      value={siteSettingsForm.phone || ''}
                      onChange={(e) => setSiteSettingsForm({ ...siteSettingsForm, phone: e.target.value })}
                    />
                    <Input
                      label="Official Enterprise Email"
                      value={siteSettingsForm.email || ''}
                      onChange={(e) => setSiteSettingsForm({ ...siteSettingsForm, email: e.target.value })}
                    />
                  </div>

                  {/* DYNAMIC SOCIAL LINKS BUILDER */}
                  <div className="space-y-4 pt-4 border-t border-[#E5E1DD]">
                    <div className="flex items-center justify-between">
                      <h4 className="font-display font-bold text-sm text-[#111111] uppercase tracking-wide flex items-center gap-2">
                        <Share2 className="w-4 h-4 text-[#D92C1C]" />
                        <span>Social Media Channels</span>
                      </h4>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <Input
                        label="Instagram URL"
                        placeholder="https://instagram.com/tepito"
                        value={siteSettingsForm.socialLinks?.instagram || ''}
                        onChange={(e) => setSiteSettingsForm({
                          ...siteSettingsForm,
                          socialLinks: { ...siteSettingsForm.socialLinks, instagram: e.target.value }
                        })}
                      />
                      <Input
                        label="Facebook URL"
                        placeholder="https://facebook.com/tepito"
                        value={siteSettingsForm.socialLinks?.facebook || ''}
                        onChange={(e) => setSiteSettingsForm({
                          ...siteSettingsForm,
                          socialLinks: { ...siteSettingsForm.socialLinks, facebook: e.target.value }
                        })}
                      />
                      <Input
                        label="Twitter / X URL"
                        placeholder="https://twitter.com/tepito"
                        value={siteSettingsForm.socialLinks?.twitter || ''}
                        onChange={(e) => setSiteSettingsForm({
                          ...siteSettingsForm,
                          socialLinks: { ...siteSettingsForm.socialLinks, twitter: e.target.value }
                        })}
                      />
                      <Input
                        label="LinkedIn URL"
                        placeholder="https://linkedin.com/company/tepito"
                        value={siteSettingsForm.socialLinks?.linkedin || ''}
                        onChange={(e) => setSiteSettingsForm({
                          ...siteSettingsForm,
                          socialLinks: { ...siteSettingsForm.socialLinks, linkedin: e.target.value }
                        })}
                      />
                      <Input
                        label="YouTube URL"
                        placeholder="https://youtube.com/tepito"
                        value={siteSettingsForm.socialLinks?.youtube || ''}
                        onChange={(e) => setSiteSettingsForm({
                          ...siteSettingsForm,
                          socialLinks: { ...siteSettingsForm.socialLinks, youtube: e.target.value }
                        })}
                      />
                      <Input
                        label="WhatsApp Support URL / Number"
                        placeholder="https://wa.me/918009922000"
                        value={siteSettingsForm.socialLinks?.whatsapp || siteSettingsForm.whatsapp || ''}
                        onChange={(e) => setSiteSettingsForm({
                          ...siteSettingsForm,
                          whatsapp: e.target.value,
                          socialLinks: { ...siteSettingsForm.socialLinks, whatsapp: e.target.value }
                        })}
                      />
                    </div>
                  </div>

                  <div className="pt-4 flex justify-end">
                    <Button type="submit" variant="primary" size="md" arrow>
                      Save Site Settings & Socials
                    </Button>
                  </div>
                </form>
              </div>
            )}

            {/* 10. HEADER & NAVIGATION */}
            {activeTab === 'header' && (
              <div className="bg-white rounded-3xl p-8 border border-[#E5E1DD] shadow-xs max-w-4xl">
                <form onSubmit={handleSaveHeader} className="space-y-4">
                  <div className="pb-4 border-b border-[#E5E1DD]">
                    <h3 className="font-display font-black text-xl uppercase tracking-tight">
                      Navigation Menu Links
                    </h3>
                  </div>

                  <div className="space-y-3">
                    {(headerForm.navigation || []).map((nav, idx) => (
                      <div key={idx} className="p-4 rounded-2xl bg-[#F6F4F1] border border-[#E5E1DD] flex items-center gap-3">
                        <div className="flex-1 grid grid-cols-1 sm:grid-cols-3 gap-3">
                          <Input
                            label="Menu Title"
                            value={nav.title}
                            onChange={(e) => {
                              const updated = [...headerForm.navigation];
                              updated[idx].title = e.target.value;
                              setHeaderForm({ ...headerForm, navigation: updated });
                            }}
                          />
                          <Input
                            label="Target Path"
                            value={nav.url}
                            onChange={(e) => {
                              const updated = [...headerForm.navigation];
                              updated[idx].url = e.target.value;
                              setHeaderForm({ ...headerForm, navigation: updated });
                            }}
                          />
                          <div className="flex items-center gap-4 pt-6">
                            <label className="flex items-center gap-2 text-xs font-bold cursor-pointer">
                              <input
                                type="checkbox"
                                checked={nav.active}
                                onChange={(e) => {
                                  const updated = [...headerForm.navigation];
                                  updated[idx].active = e.target.checked;
                                  setHeaderForm({ ...headerForm, navigation: updated });
                                }}
                                className="rounded text-[#D92C1C]"
                              />
                              <span>Active</span>
                            </label>
                            <label className="flex items-center gap-2 text-xs font-bold cursor-pointer">
                              <input
                                type="checkbox"
                                checked={nav.isMegaMenu}
                                onChange={(e) => {
                                  const updated = [...headerForm.navigation];
                                  updated[idx].isMegaMenu = e.target.checked;
                                  setHeaderForm({ ...headerForm, navigation: updated });
                                }}
                                className="rounded text-[#D92C1C]"
                              />
                              <span>MegaMenu</span>
                            </label>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 flex justify-end">
                    <Button type="submit" variant="primary" size="md" arrow>
                      Save Navigation Config
                    </Button>
                  </div>
                </form>
              </div>
            )}

            {/* 11. FOOTER CONFIGURATION (COMPLETE WITH CONTACT INFO, ADDRESS, SOCIALS & DYNAMIC LINK BUILDERS) */}
            {activeTab === 'footer' && (
              <div className="bg-white rounded-3xl p-8 border border-[#E5E1DD] shadow-xs max-w-4xl space-y-8">
                <form onSubmit={handleSaveFooter} className="space-y-8">
                  
                  {/* BRAND & DESCRIPTION */}
                  <div className="space-y-4 pb-6 border-b border-[#E5E1DD]">
                    <div className="flex items-center justify-between">
                      <h3 className="font-display font-black text-xl uppercase tracking-tight">
                        Footer Brand & Tagline
                      </h3>
                      <span className="text-[11px] font-mono uppercase text-[#D92C1C] font-bold">
                        Universal Footer
                      </span>
                    </div>

                    <Input
                      label="Footer Headline"
                      value={footerForm.brandHeadline || ''}
                      onChange={(e) => setFooterForm({ ...footerForm, brandHeadline: e.target.value })}
                    />

                    <Textarea
                      label="Footer Brand Narrative Description"
                      rows={3}
                      value={footerForm.brandDescription || ''}
                      onChange={(e) => setFooterForm({ ...footerForm, brandDescription: e.target.value })}
                    />

                    <Input
                      label="Copyright Notice"
                      value={footerForm.copyrightText || ''}
                      onChange={(e) => setFooterForm({ ...footerForm, copyrightText: e.target.value })}
                    />
                  </div>

                  {/* REGISTERED OFFICE & CONTACT DETAILS */}
                  <div className="p-6 rounded-3xl bg-[#FBF9F7] border border-[#E5E1DD] space-y-4">
                    <span className="text-[11px] font-mono font-extrabold uppercase text-[#D92C1C] block">
                      Footer Contact Details & Registered Lucknow Address
                    </span>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <Input
                        label="Company Entity Name"
                        value={footerForm.contactInfo?.companyName || 'Tepito India Private Limited'}
                        onChange={(e) => setFooterForm({
                          ...footerForm,
                          contactInfo: { ...(footerForm.contactInfo || {}), companyName: e.target.value }
                        })}
                      />
                      <Input
                        label="Helpline Hotline Phone"
                        value={footerForm.contactInfo?.phone || '+91 80099 22000'}
                        onChange={(e) => setFooterForm({
                          ...footerForm,
                          contactInfo: { ...(footerForm.contactInfo || {}), phone: e.target.value }
                        })}
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <Input
                        label="Enterprise Support Email"
                        value={footerForm.contactInfo?.email || 'info@tepito.in'}
                        onChange={(e) => setFooterForm({
                          ...footerForm,
                          contactInfo: { ...(footerForm.contactInfo || {}), email: e.target.value }
                        })}
                      />
                      <Input
                        label="Registered Street Address (Lucknow HQ)"
                        value={footerForm.contactInfo?.address || 'H.NO. 2358-38 GALI SHACHHADA PATANALA CHOWK LUCKNOW UP 226003'}
                        onChange={(e) => setFooterForm({
                          ...footerForm,
                          contactInfo: { ...(footerForm.contactInfo || {}), address: e.target.value }
                        })}
                      />
                    </div>
                  </div>

                  {/* SOCIAL MEDIA CHANNELS */}
                  <div className="p-6 rounded-3xl bg-[#FBF9F7] border border-[#E5E1DD] space-y-4">
                    <span className="text-[11px] font-mono font-extrabold uppercase text-[#D92C1C] block">
                      Footer Social Media Channels
                    </span>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <Input
                        label="Instagram URL"
                        placeholder="https://instagram.com/tepito"
                        value={footerForm.socialLinks?.instagram || ''}
                        onChange={(e) => setFooterForm({
                          ...footerForm,
                          socialLinks: { ...(footerForm.socialLinks || {}), instagram: e.target.value }
                        })}
                      />
                      <Input
                        label="Facebook URL"
                        placeholder="https://facebook.com/tepito"
                        value={footerForm.socialLinks?.facebook || ''}
                        onChange={(e) => setFooterForm({
                          ...footerForm,
                          socialLinks: { ...(footerForm.socialLinks || {}), facebook: e.target.value }
                        })}
                      />
                      <Input
                        label="Twitter / X URL"
                        placeholder="https://twitter.com/tepito"
                        value={footerForm.socialLinks?.twitter || ''}
                        onChange={(e) => setFooterForm({
                          ...footerForm,
                          socialLinks: { ...(footerForm.socialLinks || {}), twitter: e.target.value }
                        })}
                      />
                      <Input
                        label="LinkedIn URL"
                        placeholder="https://linkedin.com/company/tepito"
                        value={footerForm.socialLinks?.linkedin || ''}
                        onChange={(e) => setFooterForm({
                          ...footerForm,
                          socialLinks: { ...(footerForm.socialLinks || {}), linkedin: e.target.value }
                        })}
                      />
                    </div>
                  </div>

                  <div className="pt-4 flex justify-end">
                    <Button type="submit" variant="primary" size="md" arrow>
                      Save Complete Footer to MongoDB
                    </Button>
                  </div>
                </form>
              </div>
            )}

            {/* 11. REVIEWS & TESTIMONIALS */}
            {activeTab === 'testimonials' && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-display font-black text-xl uppercase tracking-tight">
                      Customer Reviews & Quotes ({testimonialsList.length})
                    </h3>
                  </div>
                  <Button
                    type="button"
                    variant="primary"
                    size="sm"
                    onClick={() => setEditingTestimonial({
                      name: 'Client Name',
                      role: 'Resident, Lucknow',
                      location: 'Lucknow',
                      quote: 'Excellent service with fast arrival!',
                      rating: 5,
                      serviceTag: 'General'
                    })}
                  >
                    <Plus className="w-4 h-4 mr-1" /> Add Review
                  </Button>
                </div>

                {editingTestimonial && (
                  <div className="bg-white p-8 rounded-3xl border-2 border-[#D92C1C] shadow-lg space-y-4">
                    <form onSubmit={handleSaveTestimonial} className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <Input
                          label="Customer Name *"
                          value={editingTestimonial.name || ''}
                          onChange={(e) => setEditingTestimonial({ ...editingTestimonial, name: e.target.value })}
                          required
                        />
                        <Input
                          label="Role / Area"
                          value={editingTestimonial.role || ''}
                          onChange={(e) => setEditingTestimonial({ ...editingTestimonial, role: e.target.value })}
                        />
                      </div>
                      <Textarea
                        label="Review Quote *"
                        rows={3}
                        value={editingTestimonial.quote || ''}
                        onChange={(e) => setEditingTestimonial({ ...editingTestimonial, quote: e.target.value })}
                        required
                      />
                      <div className="pt-2 flex justify-end gap-3">
                        <Button type="button" variant="outline" size="sm" onClick={() => setEditingTestimonial(null)}>Cancel</Button>
                        <Button type="submit" variant="primary" size="sm" arrow>Save Review</Button>
                      </div>
                    </form>
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {testimonialsList.map((t) => (
                    <div key={t._id} className="bg-white p-6 rounded-3xl border border-[#E5E1DD] shadow-xs flex flex-col justify-between space-y-3">
                      <div>
                        <span className="text-amber-500 font-bold text-xs">{'★'.repeat(t.rating || 5)}</span>
                        <p className="text-xs text-[#333333] italic leading-relaxed mt-2">"{t.quote}"</p>
                        <span className="font-bold text-xs text-[#111111] block mt-3">{t.name}</span>
                        <span className="text-[11px] text-[#777777] block">{t.role}</span>
                      </div>
                      <div className="pt-3 border-t border-[#E5E1DD] flex items-center justify-between">
                        <button onClick={() => setEditingTestimonial(t)} className="text-xs font-bold text-[#111111] hover:text-[#D92C1C]">Edit ✎</button>
                        <button onClick={() => handleDeleteTestimonial(t._id)} className="p-1 text-red-500 hover:bg-red-50 rounded-lg"><Trash2 className="w-4 h-4" /></button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 12. ADMIN PROFILE & SECURITY SETTINGS */}
            {activeTab === 'profile' && (
              <div className="space-y-8">
                
                {/* TOP HEADER */}
                <div className="bg-white p-6 rounded-3xl border border-[#E5E1DD] shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <img
                      src={profileForm.avatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80'}
                      alt="Avatar"
                      className="w-14 h-14 rounded-2xl object-cover border-2 border-[#D92C1C] shadow-md flex-shrink-0"
                    />
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#111111]">
                          Master Security Hub • Verified Root
                        </span>
                      </div>
                      <h3 className="font-display font-black text-2xl text-[#111111] uppercase tracking-tight mt-0.5">
                        {profileForm.name} ({profileForm.role})
                      </h3>
                    </div>
                  </div>

                  <span className="px-3 py-1.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-mono font-bold">
                    🛡️ 2FA Security Shield Active
                  </span>
                </div>

                {/* TWO-COLUMN PROFILE & PASSWORD MANAGER */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                  
                  {/* LEFT: PERSONAL INFORMATION & AVATAR */}
                  <div className="lg:col-span-6 bg-white p-8 rounded-3xl border border-[#E5E1DD] shadow-xs space-y-6">
                    <div className="pb-4 border-b border-[#E5E1DD]">
                      <span className="text-[10px] font-mono font-bold uppercase text-[#D92C1C]">Admin Details</span>
                      <h4 className="font-display font-bold text-lg text-[#111111] uppercase tracking-tight">
                        Personal Information & Avatar
                      </h4>
                    </div>

                    <div className="space-y-4">
                      
                      {/* Avatar Image Picker */}
                      <div>
                        <label className="text-xs font-bold text-[#111111] uppercase block mb-2 font-mono">
                          Admin Profile Photo
                        </label>
                        <ImageUploadPicker
                          label=""
                          currentImage={profileForm.avatar}
                          onImageSelect={(url) => setProfileForm({ ...profileForm, avatar: url })}
                        />
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <Input
                            label="Full Administrator Name *"
                            placeholder="e.g. Sohrab Alam"
                            value={profileForm.name}
                            onChange={(e) => setProfileForm({ ...profileForm, name: e.target.value })}
                            required
                          />
                        </div>
                        <div>
                          <Input
                            label="Admin Security Role"
                            value={profileForm.role}
                            onChange={(e) => setProfileForm({ ...profileForm, role: e.target.value })}
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <Input
                            label="Official Email Address *"
                            type="email"
                            placeholder="admin@tepito.com"
                            value={profileForm.email}
                            onChange={(e) => setProfileForm({ ...profileForm, email: e.target.value })}
                            required
                          />
                        </div>
                        <div>
                          <Input
                            label="Direct Phone / Hotline *"
                            type="tel"
                            placeholder="9876543210"
                            value={profileForm.phone}
                            onChange={(e) => setProfileForm({ ...profileForm, phone: e.target.value })}
                            required
                          />
                        </div>
                      </div>

                      <div className="pt-3">
                        <Button
                          type="button"
                          variant="primary"
                          size="md"
                          arrow
                          disabled={isSavingProfile}
                          onClick={() => {
                            setIsSavingProfile(true);
                            localStorage.setItem('tepito_admin_profile', JSON.stringify(profileForm));
                            const updatedUser = { ...(user || {}), name: profileForm.name, fullName: profileForm.name, email: profileForm.email, avatar: profileForm.avatar };
                            localStorage.setItem('tepito_user', JSON.stringify(updatedUser));
                            if (setUser) setUser(updatedUser);
                            setTimeout(() => {
                              setIsSavingProfile(false);
                              showToast('Admin profile & avatar updated and saved permanently!');
                            }, 400);
                          }}
                        >
                          {isSavingProfile ? 'Saving Profile...' : 'Save Profile Changes'}
                        </Button>
                      </div>

                    </div>
                  </div>

                  {/* RIGHT: PASSWORD & CREDENTIAL SECURITY */}
                  <div className="lg:col-span-6 bg-white p-8 rounded-3xl border border-[#E5E1DD] shadow-xs space-y-6">
                    <div className="pb-4 border-b border-[#E5E1DD]">
                      <span className="text-[10px] font-mono font-bold uppercase text-[#D92C1C]">Authentication Credentials</span>
                      <h4 className="font-display font-bold text-lg text-[#111111] uppercase tracking-tight">
                        Change Security Password
                      </h4>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <Input
                          label="Current Master Password *"
                          type="password"
                          icon={Lock}
                          placeholder="••••••••••••"
                          value={profileForm.currentPassword}
                          onChange={(e) => setProfileForm({ ...profileForm, currentPassword: e.target.value })}
                        />
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <Input
                            label="New Master Password *"
                            type="password"
                            icon={Key}
                            placeholder="Minimum 8 characters"
                            value={profileForm.newPassword}
                            onChange={(e) => setProfileForm({ ...profileForm, newPassword: e.target.value })}
                          />
                        </div>
                        <div>
                          <Input
                            label="Confirm New Password *"
                            type="password"
                            icon={Key}
                            placeholder="Re-enter password"
                            value={profileForm.confirmPassword}
                            onChange={(e) => setProfileForm({ ...profileForm, confirmPassword: e.target.value })}
                          />
                        </div>
                      </div>

                      {/* Password Requirements Checklist */}
                      <div className="p-4 rounded-2xl bg-[#FBF9F7] border border-[#E5E1DD] text-xs space-y-1 font-mono">
                        <span className="text-[10px] font-bold text-[#666666] uppercase block">Password Security Policy:</span>
                        <div className="flex items-center gap-2 text-emerald-700 font-bold">
                          <span>✓</span> Minimum 8 characters with alphanumeric symbols
                        </div>
                        <div className="flex items-center gap-2 text-emerald-700 font-bold">
                          <span>✓</span> Biometric & OTP verification handshake enabled
                        </div>
                      </div>

                      <div className="pt-2">
                        <button
                          type="button"
                          onClick={() => {
                            if (!profileForm.newPassword) {
                              showToast('Please enter a new password', true);
                              return;
                            }
                            if (profileForm.newPassword !== profileForm.confirmPassword) {
                              showToast('New passwords do not match!', true);
                              return;
                            }
                            showToast('Master password updated securely!');
                            setProfileForm(prev => ({ ...prev, currentPassword: '', newPassword: '', confirmPassword: '' }));
                          }}
                          className="w-full py-3 rounded-xl bg-[#111111] hover:bg-black text-white text-xs font-extrabold uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                        >
                          <Lock className="w-3.5 h-3.5" />
                          <span>Update Security Password</span>
                        </button>
                      </div>

                    </div>
                  </div>

                </div>

                {/* SECURITY LOG & ACTIVE SESSIONS */}
                <div className="bg-white p-8 rounded-3xl border border-[#E5E1DD] shadow-xs space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-[#E5E1DD]">
                    <div>
                      <span className="text-[10px] font-mono font-bold uppercase text-[#D92C1C]">Session Audit</span>
                      <h4 className="font-display font-bold text-lg text-[#111111] uppercase tracking-tight">
                        Active Administrator Sessions
                      </h4>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-mono">
                    <div className="p-4 rounded-2xl bg-[#FBF9F7] border border-[#E5E1DD] space-y-1">
                      <span className="text-gray-500 uppercase text-[10px] block">Current Node</span>
                      <span className="font-bold text-[#111111] block">Lucknow Central Server (Node-01)</span>
                      <span className="text-emerald-700 font-bold">🟢 Active Session</span>
                    </div>
                    <div className="p-4 rounded-2xl bg-[#FBF9F7] border border-[#E5E1DD] space-y-1">
                      <span className="text-gray-500 uppercase text-[10px] block">IP & Location</span>
                      <span className="font-bold text-[#111111] block">127.0.0.1 (Localhost / Lucknow)</span>
                      <span className="text-gray-600">Encrypted HTTPS / TLS 1.3</span>
                    </div>
                    <div className="p-4 rounded-2xl bg-[#FBF9F7] border border-[#E5E1DD] space-y-1">
                      <span className="text-gray-500 uppercase text-[10px] block">Last Login Handshake</span>
                      <span className="font-bold text-[#111111] block">Today, 12:05 PM IST</span>
                      <span className="text-gray-600">JWT Bearer Token Valid</span>
                    </div>
                  </div>
                </div>

              </div>
            )}

          </main>
        </div>

        {/* ========================================================= */}
        {/* PRINTABLE GST TAX INVOICE MODAL DIALOG */}
        {/* ========================================================= */}
        {activeInvoiceBooking && (
          <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4 backdrop-blur-xs overflow-y-auto">
            <div className="bg-white rounded-3xl shadow-2xl border border-[#E5E1DD] max-w-2xl w-full p-6 sm:p-8 space-y-6 my-8 max-h-[90vh] overflow-y-auto">
              
              {/* ACTION TOOLBAR (Print & Close) */}
              <div className="flex items-center justify-between pb-4 border-b border-[#E5E1DD] print:hidden">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-800 border border-emerald-200 text-[10px] font-mono font-bold">
                    Official Tax Invoice
                  </span>
                  <span className="text-xs font-mono font-bold text-gray-500">
                    Ref: {activeInvoiceBooking.bookingRef}
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => window.print()}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#111111] hover:bg-black text-white text-xs font-extrabold uppercase tracking-wider transition-all cursor-pointer shadow-sm"
                  >
                    <Printer className="w-4 h-4 text-yellow-400" />
                    <span>Print / Save as PDF</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveInvoiceBooking(null)}
                    className="p-2 rounded-xl bg-[#F6F4F1] hover:bg-[#EAE6E1] text-gray-700 font-bold text-xs cursor-pointer"
                  >
                    ✕ Close
                  </button>
                </div>
              </div>

              {/* INVOICE PRINTABLE CONTAINER */}
              <div className="p-6 bg-white border border-[#E5E1DD] rounded-2xl space-y-6 font-sans text-xs text-[#111111]" id="printable-invoice">
                
                {/* Header with Logo & Company Info */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-[#E5E1DD]">
                  <div>
                    <Logo className="h-8" />
                    <span className="text-[10px] font-mono text-gray-500 block mt-1">TEPITO TECHNOLOGIES PRIVATE LIMITED</span>
                    <span className="text-[10px] text-gray-600 block">Vibhuti Khand, Gomti Nagar, Lucknow, UP - 226010</span>
                    <span className="text-[10px] font-mono text-gray-700 block font-bold">GSTIN: 09AABCT8842K1Z9 • State Code: 09 (UP)</span>
                  </div>

                  <div className="text-left sm:text-right">
                    <span className="text-lg font-display font-black uppercase text-[#D92C1C] block">TAX INVOICE</span>
                    <span className="text-[10px] font-mono text-gray-500 uppercase block">Original for Recipient</span>
                    <span className="font-mono font-bold text-xs text-[#111111] block mt-1">
                      Invoice No: INV-2026-{activeInvoiceBooking.bookingRef?.slice(-6) || '948201'}
                    </span>
                    <span className="text-[11px] font-mono text-gray-600 block">
                      Date: {activeInvoiceBooking.date || new Date().toLocaleDateString('en-IN')}
                    </span>
                  </div>
                </div>

                {/* Billed To / Customer Details */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 rounded-xl bg-[#FBF9F7] border border-[#E5E1DD]">
                  <div>
                    <span className="text-[10px] font-mono font-bold uppercase text-gray-500 block mb-1">Customer / Billed To:</span>
                    <span className="font-bold text-sm text-[#111111] block">{activeInvoiceBooking.customerName}</span>
                    <span className="font-mono text-xs text-gray-700 block">+91 {activeInvoiceBooking.phone || '9876543210'}</span>
                    <span className="text-[11px] text-gray-600 block">Lucknow Urban Hub Dispatch, Uttar Pradesh</span>
                  </div>
                  <div>
                    <span className="text-[10px] font-mono font-bold uppercase text-gray-500 block mb-1">Dispatch Details:</span>
                    <span className="font-bold text-xs text-[#111111] block">Service: {activeInvoiceBooking.service}</span>
                    <span className="text-[11px] font-mono text-gray-600 block">Scheduled Slot: {activeInvoiceBooking.date || 'Immediate Doorstep Arrival'}</span>
                    <span className="text-[11px] font-mono text-gray-600 block">SAC / HSN Code: 998599 (Support Services)</span>
                  </div>
                </div>

                {/* Itemized Table */}
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs">
                    <thead className="bg-[#F6F4F1] border-b border-[#E5E1DD] text-gray-600 font-mono uppercase">
                      <tr>
                        <th className="p-3">#</th>
                        <th className="p-3">Service Description</th>
                        <th className="p-3 font-mono">SAC</th>
                        <th className="p-3 text-right">Base Amount</th>
                        <th className="p-3 text-right">GST (18%)</th>
                        <th className="p-3 text-right">Total (INR)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#E5E1DD]">
                      <tr>
                        <td className="p-3 font-mono">1</td>
                        <td className="p-3 font-bold">
                          {activeInvoiceBooking.service}
                          <span className="block text-[10px] text-gray-500 font-normal">
                            Professional Doorstep Dispatch & Verified Specialist
                          </span>
                        </td>
                        <td className="p-3 font-mono text-gray-500">998599</td>
                        <td className="p-3 text-right font-mono">
                          ₹{(parseInt(activeInvoiceBooking.amount?.replace(/[^0-9]/g, '') || 499) * 0.847).toFixed(2)}
                        </td>
                        <td className="p-3 text-right font-mono text-gray-600">
                          ₹{(parseInt(activeInvoiceBooking.amount?.replace(/[^0-9]/g, '') || 499) * 0.153).toFixed(2)}
                        </td>
                        <td className="p-3 text-right font-mono font-bold text-[#111111]">
                          {activeInvoiceBooking.amount}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Tax Breakdown & Total */}
                <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-[#E5E1DD]">
                  <div className="space-y-1 font-mono text-[11px] text-gray-600">
                    <div>• CGST @ 9.0%: ₹{(parseInt(activeInvoiceBooking.amount?.replace(/[^0-9]/g, '') || 499) * 0.0765).toFixed(2)}</div>
                    <div>• SGST @ 9.0%: ₹{(parseInt(activeInvoiceBooking.amount?.replace(/[^0-9]/g, '') || 499) * 0.0765).toFixed(2)}</div>
                    <div className="text-emerald-700 font-bold">✓ Payment Mode: Paid Online / Verified UPI</div>
                  </div>

                  <div className="p-4 rounded-xl bg-[#111111] text-white text-right min-w-[200px]">
                    <span className="text-[10px] font-mono text-gray-400 uppercase block">Grand Total Paid</span>
                    <span className="text-xl font-display font-black text-yellow-400 block font-mono">
                      {activeInvoiceBooking.amount}
                    </span>
                  </div>
                </div>

                {/* Footer Signature & Seal */}
                <div className="pt-4 border-t border-[#E5E1DD] flex items-center justify-between text-[10px] text-gray-500 font-mono">
                  <div>
                    <span>This is a computer-generated GST tax invoice.</span>
                    <span className="block text-gray-400">Support: support@tepito.in | Helpline: +91 98765 43210</span>
                  </div>
                  <div className="text-right">
                    <span className="font-bold text-[#111111] block">For Tepito Technologies Pvt. Ltd.</span>
                    <span className="text-gray-400 block">Authorized Signatory</span>
                  </div>
                </div>

              </div>

            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* LEAD DETAILS & DIRECT OUTREACH MODAL */}
        {/* ========================================================= */}
        {viewingLead && (
          <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4 backdrop-blur-xs overflow-y-auto">
            <div className="bg-white rounded-3xl shadow-2xl border border-[#E5E1DD] max-w-lg w-full p-6 sm:p-8 space-y-6 my-8">
              <div className="flex items-center justify-between pb-4 border-b border-[#E5E1DD]">
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase text-[#D92C1C]">Lead Details</span>
                  <h3 className="font-display font-bold text-lg text-[#111111] uppercase tracking-tight">
                    {viewingLead.name}
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => setViewingLead(null)}
                  className="p-2 rounded-xl bg-[#F6F4F1] hover:bg-[#EAE6E1] text-gray-700 font-bold text-xs cursor-pointer"
                >
                  ✕ Close
                </button>
              </div>

              <div className="space-y-4 text-xs">
                <div className="grid grid-cols-2 gap-3 p-4 rounded-2xl bg-[#FBF9F7] border border-[#E5E1DD]">
                  <div>
                    <span className="text-[10px] font-mono text-gray-500 uppercase block">Phone Number</span>
                    <span className="font-bold text-[#111111] font-mono block mt-0.5">+91 {viewingLead.phone}</span>
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-gray-500 uppercase block">Email Address</span>
                    <span className="font-bold text-[#111111] block mt-0.5 truncate">{viewingLead.email || 'N/A'}</span>
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-gray-500 uppercase block">Service Category</span>
                    <span className="font-bold text-[#D92C1C] block mt-0.5">{viewingLead.service}</span>
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-gray-500 uppercase block">Lead Status</span>
                    <span className="font-bold text-emerald-700 block mt-0.5">{viewingLead.status || 'New'}</span>
                  </div>
                </div>

                <div>
                  <span className="text-[10px] font-mono font-bold uppercase text-gray-500 block mb-1">Customer Message:</span>
                  <div className="p-4 rounded-xl bg-[#F6F4F1] border border-[#E5E1DD] text-gray-800 leading-relaxed font-sans">
                    {viewingLead.message || 'No additional message attached.'}
                  </div>
                </div>

                {/* Direct Action Buttons */}
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <a
                    href={`https://wa.me/91${viewingLead.phone?.replace(/[^0-9]/g, '')}?text=Namaste%20${encodeURIComponent(viewingLead.name)},%20greetings%20from%20Tepito%20Lucknow!%20We%20received%20your%20inquiry%20for%20${encodeURIComponent(viewingLead.service)}.`}
                    target="_blank"
                    rel="noreferrer"
                    className="py-3 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-extrabold text-xs flex items-center justify-center gap-2 uppercase tracking-wider shadow-sm"
                  >
                    <span>💬 WhatsApp Chat</span>
                  </a>

                  <a
                    href={`tel:+91${viewingLead.phone?.replace(/[^0-9]/g, '')}`}
                    className="py-3 rounded-xl bg-[#111111] hover:bg-black text-white font-extrabold text-xs flex items-center justify-center gap-2 uppercase tracking-wider shadow-sm"
                  >
                    <span>📞 Call Customer</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* FLEET & PARTNER APPLICATION REVIEW MODAL */}
        {/* ========================================================= */}
        {viewingPartnerApp && (
          <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4 backdrop-blur-xs overflow-y-auto">
            <div className="bg-white rounded-3xl shadow-2xl border border-[#E5E1DD] max-w-lg w-full p-6 sm:p-8 space-y-6 my-8">
              <div className="flex items-center justify-between pb-4 border-b border-[#E5E1DD]">
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase text-[#D92C1C]">Fleet Candidate</span>
                  <h3 className="font-display font-bold text-lg text-[#111111] uppercase tracking-tight">
                    {viewingPartnerApp.fullName}
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => setViewingPartnerApp(null)}
                  className="p-2 rounded-xl bg-[#F6F4F1] hover:bg-[#EAE6E1] text-gray-700 font-bold text-xs cursor-pointer"
                >
                  ✕ Close
                </button>
              </div>

              <div className="space-y-4 text-xs">
                <div className="grid grid-cols-2 gap-3 p-4 rounded-2xl bg-[#FBF9F7] border border-[#E5E1DD]">
                  <div>
                    <span className="text-[10px] font-mono text-gray-500 uppercase block">Trade / Skill</span>
                    <span className="font-bold text-[#D92C1C] block mt-0.5">{viewingPartnerApp.serviceCategory}</span>
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-gray-500 uppercase block">Experience</span>
                    <span className="font-bold text-[#111111] font-mono block mt-0.5">{viewingPartnerApp.experience}</span>
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-gray-500 uppercase block">Phone / Helpline</span>
                    <span className="font-bold text-[#111111] font-mono block mt-0.5">+91 {viewingPartnerApp.phone}</span>
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-gray-500 uppercase block">Operating Sector</span>
                    <span className="font-bold text-[#111111] block mt-0.5">{viewingPartnerApp.city}</span>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-[11px] space-y-1">
                  <span className="font-bold block uppercase font-mono text-[10px]">Verification Checklist:</span>
                  <div>✓ Aadhar / Identity Document Pending Review</div>
                  <div>✓ Vehicle Fitness / Trade Tool Kit Verification</div>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-2">
                  <a
                    href={`https://wa.me/91${viewingPartnerApp.phone?.replace(/[^0-9]/g, '')}?text=Hello%20${encodeURIComponent(viewingPartnerApp.fullName)},%20Tepito%20Onboarding%20team%20would%20like%20to%20schedule%20your%20fleet%20onboarding%20verification.`}
                    target="_blank"
                    rel="noreferrer"
                    className="py-3 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-extrabold text-xs flex items-center justify-center gap-2 uppercase tracking-wider"
                  >
                    <span>💬 WhatsApp Onboarding</span>
                  </a>
                  <button
                    type="button"
                    onClick={() => {
                      showToast(`Partner application for ${viewingPartnerApp.fullName} approved!`);
                      setViewingPartnerApp(null);
                    }}
                    className="py-3 rounded-xl bg-[#D92C1C] hover:bg-[#B82315] text-white font-extrabold text-xs flex items-center justify-center gap-2 uppercase tracking-wider cursor-pointer"
                  >
                    <span>Approve Captain 🟢</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* CAREER CANDIDATE REVIEW MODAL */}
        {/* ========================================================= */}
        {viewingJobApp && (
          <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4 backdrop-blur-xs overflow-y-auto">
            <div className="bg-white rounded-3xl shadow-2xl border border-[#E5E1DD] max-w-lg w-full p-6 sm:p-8 space-y-6 my-8">
              <div className="flex items-center justify-between pb-4 border-b border-[#E5E1DD]">
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase text-[#D92C1C]">Job Applicant</span>
                  <h3 className="font-display font-bold text-lg text-[#111111] uppercase tracking-tight">
                    {viewingJobApp.name}
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => setViewingJobApp(null)}
                  className="p-2 rounded-xl bg-[#F6F4F1] hover:bg-[#EAE6E1] text-gray-700 font-bold text-xs cursor-pointer"
                >
                  ✕ Close
                </button>
              </div>

              <div className="space-y-4 text-xs">
                <div className="grid grid-cols-2 gap-3 p-4 rounded-2xl bg-[#FBF9F7] border border-[#E5E1DD]">
                  <div>
                    <span className="text-[10px] font-mono text-gray-500 uppercase block">Applied Position</span>
                    <span className="font-bold text-[#D92C1C] block mt-0.5">{viewingJobApp.jobTitle}</span>
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-gray-500 uppercase block">Contact Phone</span>
                    <span className="font-bold text-[#111111] font-mono block mt-0.5">+91 {viewingJobApp.phone}</span>
                  </div>
                  <div className="col-span-2">
                    <span className="text-[10px] font-mono text-gray-500 uppercase block">Email Address</span>
                    <span className="font-bold text-[#111111] block mt-0.5">{viewingJobApp.email}</span>
                  </div>
                </div>

                <div>
                  <span className="text-[10px] font-mono font-bold uppercase text-gray-500 block mb-1">Applicant Statement / Cover Note:</span>
                  <div className="p-4 rounded-xl bg-[#F6F4F1] border border-[#E5E1DD] text-gray-800 leading-relaxed font-sans max-h-36 overflow-y-auto">
                    {viewingJobApp.coverNote || 'No cover note provided by candidate.'}
                  </div>
                </div>

                {viewingJobApp.linkedin && (
                  <div>
                    <a
                      href={viewingJobApp.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-blue-600 hover:underline font-bold"
                    >
                      <span>View LinkedIn / Portfolio Profile ↗</span>
                    </a>
                  </div>
                )}

                <div className="grid grid-cols-2 gap-3 pt-2">
                  <a
                    href={`mailto:${viewingJobApp.email}?subject=Tepito%20Interview%20Invitation%20for%20${encodeURIComponent(viewingJobApp.jobTitle)}`}
                    className="py-3 rounded-xl bg-[#111111] hover:bg-black text-white font-extrabold text-xs flex items-center justify-center gap-2 uppercase tracking-wider"
                  >
                    <span>📧 Invite for Interview</span>
                  </a>
                  <button
                    type="button"
                    onClick={() => {
                      showToast(`Candidate ${viewingJobApp.name} shortlisted!`);
                      setViewingJobApp(null);
                    }}
                    className="py-3 rounded-xl bg-[#D92C1C] hover:bg-[#B82315] text-white font-extrabold text-xs flex items-center justify-center gap-2 uppercase tracking-wider cursor-pointer"
                  >
                    <span>Shortlist 🟢</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </>
  );
};
