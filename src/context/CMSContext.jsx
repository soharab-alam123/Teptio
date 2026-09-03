import React, { createContext, useContext, useState, useEffect } from 'react';
import { api } from '../services/api';
import { SERVICES_DATA } from '../data/services';

const CMSContext = createContext();

export const CMSProvider = ({ children }) => {
  const [settings, setSettings] = useState({
    siteName: 'Tepito',
    tagline: 'Everything You Need. Right When You Need It.',
    phone: '+91 80099 22000',
    secondaryPhone: '+91 12345 67890',
    email: 'info@tepito.in',
    workingHours: '24 Hours • 7 Days a Week (All Lucknow Zones)',
    address: {
      companyName: 'Tepito India Private Limited',
      street: 'H.No. 2358-38 Gali Shachhada, Patanala Chowk',
      city: 'Lucknow',
      state: 'Uttar Pradesh',
      pincode: '226003',
    },
    socialLinks: {
      instagram: 'https://instagram.com/tepito',
      facebook: 'https://facebook.com/tepito',
      twitter: 'https://twitter.com/tepito',
      linkedin: 'https://linkedin.com/company/tepito',
      youtube: 'https://youtube.com/tepito',
    }
  });

  const [headerConfig, setHeaderConfig] = useState({
    navigation: [
      { title: 'Home', url: '/', order: 1, active: true },
      { title: 'About', url: '/about', order: 2, active: true },
      { title: 'Services', url: '/services', isMegaMenu: true, order: 3, active: true },
      { title: 'Contact', url: '/contact', order: 4, active: true },
    ],
    ctaButton: { text: 'Get Started', url: '#booking', enabled: true },
    partnerLink: { text: 'Become a Partner', url: '/partner', enabled: true },
  });

  const [footerConfig, setFooterConfig] = useState(null);
  const [services, setServices] = useState(SERVICES_DATA);
  const [homePageContent, setHomePageContent] = useState(null);
  const [aboutPageContent, setAboutPageContent] = useState(null);
  const [contactPageContent, setContactPageContent] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchCMSData = async () => {
    try {
      const [settingsRes, headerRes, footerRes, servicesRes, homeRes, aboutRes, contactRes] = await Promise.allSettled([
        api.getSettings(),
        api.getHeader(),
        api.getFooter(),
        api.getServices(),
        api.getPageContent('home'),
        api.getPageContent('about'),
        api.getPageContent('contact'),
      ]);

      if (settingsRes.status === 'fulfilled' && settingsRes.value?.data) {
        setSettings(settingsRes.value.data);
      }
      if (headerRes.status === 'fulfilled' && headerRes.value?.data) {
        setHeaderConfig(headerRes.value.data);
      }
      if (footerRes.status === 'fulfilled' && footerRes.value?.data) {
        setFooterConfig(footerRes.value.data);
      }
      if (servicesRes.status === 'fulfilled' && servicesRes.value?.data?.length > 0) {
        setServices(servicesRes.value.data);
      }
      if (homeRes.status === 'fulfilled' && homeRes.value?.data) {
        setHomePageContent(homeRes.value.data);
      }
      if (aboutRes.status === 'fulfilled' && aboutRes.value?.data) {
        setAboutPageContent(aboutRes.value.data);
      }
      if (contactRes.status === 'fulfilled' && contactRes.value?.data) {
        setContactPageContent(contactRes.value.data);
      }
    } catch (err) {
      console.warn('CMS Fetch error fallback active:', err.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchCMSData();
  }, []);

  return (
    <CMSContext.Provider
      value={{
        settings,
        headerConfig,
        footerConfig,
        services,
        homePageContent,
        aboutPageContent,
        contactPageContent,
        isLoading,
        refreshCMS: fetchCMSData,
      }}
    >
      {children}
    </CMSContext.Provider>
  );
};

export const useCMS = () => {
  const context = useContext(CMSContext);
  if (!context) {
    throw new Error('useCMS must be used within a CMSProvider');
  }
  return context;
};
