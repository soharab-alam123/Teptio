export const SERVICES_DATA = [
  {
    id: 'parcel-delivery',
    slug: 'parcel-delivery',
    title: 'Parcel Delivery',
    headline: "SEND IT. WE'LL HANDLE THE REST.",
    badge: 'Express Movement',
    category: 'Movement',
    shortDescription: 'Door-to-door on-demand package delivery across the city in under 45 minutes.',
    description: 'Whether it is urgent business documents, forgotten keys, client gifts, or retail packages, our verified courier fleet ensures prompt, tracked, and secure doorstep transit with real-time pin verification.',
    heroImage: 'https://images.unsplash.com/photo-1616401784845-180882ba9ba8?auto=format&fit=crop&w=1400&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1580674684081-7617fbf3d745?auto=format&fit=crop&w=800&q=80',
    ],
    features: [
      { title: 'Sub-45 Min Express', desc: 'Direct point-to-point courier assignment with zero intermediate warehouse delay.' },
      { title: 'Live GPS & Route Lock', desc: 'Interactive live telemetry showing the courier en route with estimated arrival time.' },
      { title: 'Secure OTP Handshake', desc: 'Two-factor secure delivery code verified at both pickup and drop-off points.' },
      { title: 'Up to 20kg Capacity', desc: 'Two-wheeler and small vehicle cargo support with weather-sealed transit boxes.' }
    ],
    benefits: [
      'Zero surge pricing on business hours',
      'Tamper-evident security bags provided',
      'Complimentary damage protection up to ₹10,000',
      'Direct courier direct chat & call mask'
    ],
    stats: [
      { label: 'Avg Pickup Time', value: '8 mins' },
      { label: 'On-time Rate', value: '99.4%' },
      { label: 'Active Couriers', value: '1,200+' }
    ],
    subServices: [
      { name: 'Document & Key Express', price: 'From ₹49', est: '25-35 mins', popular: true },
      { name: 'Standard Parcel (up to 5kg)', price: 'From ₹89', est: '40-50 mins', popular: false },
      { name: 'Fragile / Cake Delivery', price: 'From ₹129', est: '30-45 mins', popular: false },
      { name: 'Multi-Stop Business Route', price: 'From ₹199', est: 'Scheduled', popular: false }
    ],
    faq: [
      { q: 'What items can I send through Tepito Delivery?', a: 'You can send legal personal and business goods up to 20kg including keys, documents, clothing, food, electronics, and gifts. Hazardous or prohibited materials are strictly restricted.' },
      { q: 'How does the OTP verification work?', a: 'Once the rider arrives at the drop location, the recipient provides a 4-digit secret code generated on your app before the parcel is handed over.' },
      { q: 'Is there live parcel tracking?', a: 'Yes, both the sender and recipient receive a live tracking link with the rider’s real-time coordinates and direct masked communication.' }
    ],
    cta: 'Book Delivery Now'
  },
  {
    id: 'cab-ride',
    slug: 'cab-ride',
    title: 'Cab / Ride',
    headline: 'GET THERE. WITHOUT THE HASSLE.',
    badge: 'Urban Transit',
    category: 'Movement',
    shortDescription: 'Punctual, spotless rides with verified captains, upfront transparent fares, and zero cancellations.',
    description: 'Redefining daily city commuting with immaculate vehicles, professional chauffeur-trained captains, silent ride options, and absolute fare transparency with no surprise surge multipliers.',
    heroImage: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=1400&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1508974239320-0a029497e820?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1559297434-fae8a1916a79?auto=format&fit=crop&w=800&q=80',
    ],
    features: [
      { title: 'Zero Driver Cancellations', desc: 'Our platform matches you with committed drivers who accept with route certainty.' },
      { title: 'Spotless Fleet Quality', desc: 'Daily vehicle sanitization and strict 12-point hygiene audits for every car.' },
      { title: 'Silent Ride Mode', desc: 'Toggle quiet commute preferences right from the app for undisturbed focus.' },
      { title: 'Fixed Route Fares', desc: 'Transparent pricing locked before you board. What you see is what you pay.' }
    ],
    benefits: [
      'Background-verified professional captains',
      'In-ride safety alert and live journey sharing',
      'Complimentary bottled water & chargers in Premium tier',
      'Guaranteed pickup scheduling up to 48 hours in advance'
    ],
    stats: [
      { label: 'Avg Arrival', value: '4 mins' },
      { label: 'Driver Rating', value: '4.88 ★' },
      { label: 'Daily Trips', value: '18,500+' }
    ],
    tiers: [
      {
        id: 'economy',
        name: 'Economy Go',
        tagline: 'Smart everyday city travel',
        capacity: '4 seats',
        pricePerKm: '₹14/km',
        baseFare: '₹79',
        features: ['Compact hatchback', 'Air conditioned', 'Verified driver']
      },
      {
        id: 'premium',
        name: 'Comfort Sedan',
        tagline: 'Extra legroom & executive quiet',
        capacity: '4 seats',
        pricePerKm: '₹19/km',
        baseFare: '₹129',
        popular: true,
        features: ['Spacious sedan', 'Quiet ride mode', 'Premium sound', 'Complimentary water']
      },
      {
        id: 'xl',
        name: 'Prime XL / SUV',
        tagline: 'Group travel & airport luggage',
        capacity: '6 seats',
        pricePerKm: '₹26/km',
        baseFare: '₹199',
        features: ['6-seater SUV', 'Massive luggage boot', 'High clearance', 'Top-rated captains']
      }
    ],
    faq: [
      { q: 'Can I schedule rides in advance for early morning flights?', a: 'Yes, you can schedule rides from 2 hours up to 48 hours in advance with a 100% on-time guarantee.' },
      { q: 'How does Tepito prevent driver cancellations?', a: 'Our incentive architecture rewards reliability, and drivers see the destination and fare upfront before accepting, eliminating route refusal.' }
    ],
    cta: 'Book a Ride'
  },
  {
    id: 'beauty-salon',
    slug: 'beauty-salon',
    title: 'Beauty & Salon',
    headline: 'LOOK GOOD. FEEL BETTER.',
    badge: 'At-Home Wellness',
    category: 'Lifestyle',
    shortDescription: 'Luxury salon, skin treatments, and grooming experiences delivered in the comfort of your home.',
    description: 'Experience clinical hygiene and salon artistry at home. Our licensed aestheticians arrive with single-use sterile kits, premium professional salon brands, and salon-grade setup for a transformative self-care session.',
    heroImage: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1400&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=800&q=80',
    ],
    features: [
      { title: 'Single-Use Sterile Kits', desc: '100% sealed disposable sheets, tools, and mono-dose product sachets.' },
      { title: 'Top 1% Certified Stylists', desc: 'Rigorously vetted stylists with 5+ years of premium salon experience.' },
      { title: 'Zero Mess Guarantee', desc: 'Complete post-service cleanup leaving your space as spotless as before.' },
      { title: 'Authentic Luxury Brands', desc: 'We only utilize authorized international brands including L’Oréal Professionnel, O3+, and Cheryl’s.' }
    ],
    benefits: [
      'Transparent service breakdown & consultation',
      'Relaxation in your personal private ambiance',
      'Customized skin & scalp diagnostic',
      'Hassle-free online rescheduling'
    ],
    stats: [
      { label: 'Client Satisfaction', value: '4.92 ★' },
      { label: 'Hygiene Score', value: '100%' },
      { label: 'Sessions Done', value: '45,000+' }
    ],
    subServices: [
      { name: 'O3+ Luxury Bridal Glow Facial', price: '₹1,899', duration: '75 mins', rating: '4.95' },
      { name: 'Honey Wax & Full Body Polishing', price: '₹2,299', duration: '90 mins', rating: '4.91' },
      { name: 'Keratin Hair Spa & Scalp Detox', price: '₹1,499', duration: '60 mins', rating: '4.88' },
      { name: 'Executive Men’s Beard Sculpt & Facial', price: '₹999', duration: '50 mins', rating: '4.89' },
      { name: 'Gel Pedicure & Manicure Deluxe', price: '₹1,249', duration: '70 mins', rating: '4.93' }
    ],
    faq: [
      { q: 'What do I need to provide for a salon appointment at home?', a: 'Only a chair, a nearby electrical plug point, and warm water. Our beautician brings everything else including floor mats, mirrors, sterilizers, and disposables.' },
      { q: 'Are all products authentic?', a: 'Yes, every product used is factory-sealed and unboxed right in front of you.' }
    ],
    cta: 'Book Salon Experience'
  },
  {
    id: 'lifestyle-products',
    slug: 'lifestyle-products',
    title: 'Lifestyle Products',
    headline: 'EVERYDAY ESSENTIALS. CURATED FOR MODERN LIVING.',
    badge: 'Curated Essentials',
    category: 'Lifestyle',
    shortDescription: 'Design-forward home accents, premium wellness goods, and organic daily essentials.',
    description: 'We curate high-utility, aesthetic essentials for the contemporary home. From artisanal organic bath oils to minimalist desk organizers and ergonomic kitchenware, delivered to your door in 90 minutes.',
    heroImage: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1400&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=800&q=80',
    ],
    features: [
      { title: 'Sustainably Sourced', desc: 'Plastic-neutral packaging and conscious small-batch artisan partnerships.' },
      { title: '90-Min Hyperlocal Delivery', desc: 'Fast localized micro-fulfillment hubs across major metropolitan zones.' },
      { title: '7-Day Easy Replacement', desc: 'No-questions-asked quality guarantee on every curated catalog item.' },
      { title: 'Curator Tested', desc: 'Each product tested for ergonomics, aesthetics, and lasting material durability.' }
    ],
    benefits: [
      'Free shipping on curated bundles over ₹999',
      'Complimentary gift-wrapping option at checkout',
      'Handcrafted artisan provenance cards included',
      'Earn Tepito reward credits with every purchase'
    ],
    stats: [
      { label: 'Curated SKUs', value: '450+' },
      { label: 'Avg Delivery', value: '62 mins' },
      { label: 'Customer Love', value: '98%' }
    ],
    faq: [
      { q: 'How fast will my lifestyle order arrive?', a: 'In supported urban areas, orders are packed from our nearest micro-warehouse and delivered within 60 to 90 minutes.' },
      { q: 'Can I add lifestyle products to a service booking?', a: 'Yes! You can add wellness or home care products alongside a cleaning or salon booking for simultaneous delivery.' }
    ],
    cta: 'Shop Curated Goods'
  },
  {
    id: 'home-cleaning',
    slug: 'home-cleaning',
    title: 'Home Cleaning',
    headline: 'IMMACULATE LIVING. ZERO EFFORT.',
    badge: 'Deep Sanitize',
    category: 'Home',
    shortDescription: 'Industrial-grade deep cleaning, microfiber sanitization, and eco-friendly home restoration.',
    description: 'Transform your living sanctuary. Our trained cleaning specialists deploy German vacuum tech, hospital-grade non-toxic disinfectants, and meticulous room-by-room checklists to remove deep grime, allergens, and hidden dust.',
    heroImage: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1400&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?auto=format&fit=crop&w=800&q=80',
    ],
    features: [
      { title: 'Non-Toxic Green Formulas', desc: 'Safe for toddlers, infants, and pets with zero harsh chlorine residue.' },
      { title: 'High-Pressure Steamers', desc: 'Thermal 140°C steam extraction for tile grout, mattress sanitizing, and grease.' },
      { title: 'Standardized 64-Point Audit', desc: 'Supervised checklist inspection with photo verification before handover.' },
      { title: 'Insurance Shield Included', desc: 'Full liability protection for high-value interior furnishings and fixtures.' }
    ],
    benefits: [
      'Background-verified cleaning crews in uniform',
      'Free touch-up redo within 24 hours if unsatisfied',
      'Transparent flat rates based on carpet area',
      'Custom add-ons for ovens, balconies, and chimneys'
    ],
    stats: [
      { label: 'Homes Cleaned', value: '32,000+' },
      { label: 'Satisfaction', value: '99.1%' },
      { label: 'Avg Deep Clean Time', value: '3.5 hrs' }
    ],
    subServices: [
      { name: 'Full Apartment Deep Clean (2-3 BHK)', price: '₹3,499', duration: '4-5 hours', popular: true },
      { name: 'Intense Kitchen Degreasing & Chimney', price: '₹1,499', duration: '2 hours', popular: false },
      { name: 'Bathroom Anti-Scale & Grout Restoration', price: '₹899', duration: '90 mins', popular: false },
      { name: 'Sofa & Fabric Upholstery Shampoo', price: '₹1,199', duration: '75 mins', popular: false },
      { name: 'Move-in / Vacate Restoration Polish', price: '₹4,999', duration: '6 hours', popular: false }
    ],
    faq: [
      { q: 'Do I need to leave the house during deep cleaning?', a: 'Not necessarily! You are welcome to stay. Our team uses low-odor, eco-friendly agents and operates quietly room-by-room.' },
      { q: 'What equipment does the cleaning team bring?', a: 'Everything required: industrial HEPA vacuum cleaners, steam machines, scrubbers, microfiber color-coded wipes, ladders, and eco-certified chemicals.' }
    ],
    cta: 'Book Home Cleaning'
  },
  {
    id: 'plumbing',
    slug: 'plumbing',
    title: 'Plumbing',
    headline: 'PRECISION FIXES. WATER TIGHT PEACE OF MIND.',
    badge: 'Master Technicians',
    category: 'Home',
    shortDescription: 'Certified master plumbers for leak detection, bathroom fittings, pipe repairs, and emergency drainage.',
    description: 'Stop leaks before they damage your infrastructure. Our licensed plumbers arrive equipped with modern diagnostic tools, digital acoustic leak locators, and factory-standard replacement hardware with a 30-day warranty.',
    heroImage: 'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&w=1400&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1542013936693-884638332954?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=800&q=80',
    ],
    features: [
      { title: 'Digital Leak Sonar', desc: 'Accurately pinpoint concealed pipe fractures inside walls without demolishing tiles.' },
      { title: '30-Day Service Warranty', desc: 'Any recurring drip or joint defect is rectified free of charge within 30 days.' },
      { title: 'Standard Rate Ratecard', desc: 'Clear itemized billing per fixture without inflated spot bargaining.' },
      { title: 'Emergency Dispatch', desc: 'Dedicated 30-minute priority dispatch for bursting pipes and overflow emergencies.' }
    ],
    benefits: [
      'Certified ITI & master-grade credentials',
      'High-grade brass & CPVC replacement fittings available on van',
      'Clean post-job debris clearance',
      'Digital payment & GST invoice generated instantly'
    ],
    stats: [
      { label: 'Repairs Completed', value: '19,400+' },
      { label: 'Warranty Rate', value: '99.8%' },
      { label: 'Response Time', value: '28 mins' }
    ],
    subServices: [
      { name: 'Tap, Mixer & Faucet Replacement', price: '₹249', time: '30 mins' },
      { name: 'Concealed Pipe Leakage Detection', price: '₹649', time: '60 mins' },
      { name: 'Drain & Toilet Blockage Clearance', price: '₹499', time: '45 mins' },
      { name: 'Overhead Water Tank & Motor Connection', price: '₹899', time: '90 mins' },
      { name: 'Complete Bathroom Fixture Installation', price: '₹1,499', time: '2 hours' }
    ],
    faq: [
      { q: 'Are spare parts included in the service cost?', a: 'Inspection and labor are covered in the initial booking rate. Genuine branded spare parts are quoted upfront from our digital catalog before fitting.' },
      { q: 'What happens if the pipe leaks again next week?', a: 'All plumbing repairs come with an unconditional 30-day warranty. We will send a senior technician to re-inspect and fix it at zero cost.' }
    ],
    cta: 'Book a Plumber'
  },
  {
    id: 'electrical-services',
    slug: 'electrical-services',
    title: 'Electrical Services',
    headline: 'POWERED SAFELY. WIRED TO PERFECTION.',
    badge: 'Licensed Electricians',
    category: 'Home',
    shortDescription: 'Licensed electricians for short-circuit diagnosis, appliance setups, smart switches, and rewire safety.',
    description: 'Electrical safety requires uncompromising expertise. From troubleshooting mysterious trip issues to installing chandeliers, EV home chargers, and inverter backup setups, our certified electricians guarantee code compliance.',
    heroImage: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1400&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=800&q=80',
    ],
    features: [
      { title: 'Thermal Load Diagnostics', desc: 'FLIR thermal imaging to detect overheating breaker switches before hazards ignite.' },
      { title: 'Govt Certified Electricians', desc: 'Holders of Class-A/B electrical safety wireman licenses.' },
      { title: 'Surge Protection Setup', desc: 'Installation of MCBs, RCCBs, and Whole-House surge suppressors.' },
      { title: 'Smart Home Integration', desc: 'Expert wiring for WiFi switches, ambient dimmer circuits, and smart doorbells.' }
    ],
    benefits: [
      'Insulated safety tools compliant with IEC 60900 standards',
      'Complimentary earthing and voltage check with every visit',
      'Fixed transparent pricing schedule',
      'Up to ₹50,000 accidental property damage protection'
    ],
    stats: [
      { label: 'Safety Rating', value: '100%' },
      { label: 'Jobs Executed', value: '28,000+' },
      { label: 'Avg Arrival', value: '30 mins' }
    ],
    subServices: [
      { name: 'Ceiling Fan & Chandelier Installation', price: '₹199', time: '30 mins' },
      { name: 'MCB Trip & Short Circuit Repair', price: '₹399', time: '45 mins' },
      { name: 'Switchboard Replacement & Rewire', price: '₹299', time: '40 mins' },
      { name: 'Inverter & Battery Wiring Setup', price: '₹799', time: '75 mins' },
      { name: 'Heavy Appliance (Geyser / AC) Point Wiring', price: '₹499', time: '60 mins' }
    ],
    faq: [
      { q: 'How quickly can an electrician arrive in case of total power loss?', a: 'Emergency slots are dispatched within 25–35 minutes across central zones.' },
      { q: 'Will the technician bring proper replacement switches?', a: 'Yes, technicians carry standard modular switches and circuit breakers from certified brands like Schneider, Havells, and Legrand.' }
    ],
    cta: 'Book Electrician'
  }
];
