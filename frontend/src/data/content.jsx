export const services = {
  'whatsapp-agents': {
    category: 'AI Automation', icon: '📱', name: 'WhatsApp AI Agents',
    tagline: 'Intelligent bots that never sleep',
    overview: 'We build custom WhatsApp AI agents that handle customer conversations 24/7. These bots understand context, respond naturally, and handle everything from bookings to FAQs — without any human needed. Built using n8n + OpenAI, they connect directly to your WhatsApp Business account and learn from your business data.',
    useCases: ['Restaurant bookings', 'Hotel guest inquiries', 'Travel agency confirmations', 'Education institute admissions', 'Customer support FAQ', 'Lead qualification', 'Appointment scheduling'],
    tools: ['n8n', 'OpenAI', 'WhatsApp Business API', 'Twilio'], timeline: '5–7 days'
  },
  'workflow-auto': {
    category: 'AI Automation', icon: '⚡', name: 'Workflow Automation',
    tagline: 'Connect your tools, eliminate manual work',
    overview: 'We map your existing workflows and rebuild them as automated pipelines. Any repetitive task that moves data between tools — emails, spreadsheets, CRMs, databases — gets automated. You set it once, it runs forever.',
    useCases: ['Automated email follow-ups', 'Lead qualification & distribution', 'Inventory management', 'CRM data sync', 'Report generation', 'Notification systems'],
    tools: ['n8n', 'Gmail API', 'Slack', 'Airtable', 'HubSpot', 'Google Sheets'], timeline: '3–5 days'
  },
  'form-data-auto': {
    category: 'AI Automation', icon: '📋', name: 'Form & Data Automation',
    tagline: 'Forms that actually do something',
    overview: 'Smart forms that don\'t just collect data — they trigger actions. When someone fills your form, the data flows automatically into your CRM, sends a confirmation email, notifies your team on Slack, and creates a task in your project tool. All without you touching anything.',
    useCases: ['Lead capture forms', 'Event registration', 'Student admission automation', 'Feedback collection', 'Survey response automation', 'Customer inquiry forms'],
    tools: ['n8n', 'Typeform', 'Google Forms', 'Notion', 'Airtable', 'Slack'], timeline: '2–4 days'
  },
  'social-media-auto': {
    category: 'AI Automation', icon: '📱', name: 'Social Media Post Automation',
    tagline: 'Post everywhere, manage nothing',
    overview: 'We automate your entire social media posting pipeline. Write content once, and it gets scheduled, formatted, and posted across Facebook, Instagram, Twitter, and LinkedIn automatically. AI generates captions and hashtags based on your content calendar.',
    useCases: ['Daily menu/product posts', 'Content calendar automation', 'Multi-platform posting', 'Hashtag & caption management', 'Engagement tracking', 'Brand consistency'],
    tools: ['n8n', 'Buffer', 'Meta Graph API', 'Twitter API', 'OpenAI', 'Google Sheets'], timeline: '3–5 days'
  },
  'spreadsheet-doc-auto': {
    category: 'AI Automation', icon: '📊', name: 'Spreadsheet & Document Automation',
    tagline: 'Your documents update themselves',
    overview: 'We connect your Google Sheets, Excel, and Airtable to your business events. When an order comes in, when a student registers, when a payment is made — your spreadsheets update automatically. No more manual data entry.',
    useCases: ['Automatic report generation', 'Student grade sheet updates', 'Inventory tracking', 'Invoice processing', 'Data extraction from PDFs', 'Sales report automation'],
    tools: ['n8n', 'Google Sheets API', 'Airtable', 'Excel', 'OpenAI', 'PDF.co'], timeline: '2–4 days'
  },
  'custom-ai-agents': {
    category: 'AI Automation', icon: '🤖', name: 'Custom AI Agents',
    tagline: 'AI that thinks and acts for you',
    overview: 'We build custom AI agents that don\'t just answer questions — they research, decide, and execute tasks on your behalf. These agents can browse the web, write content, qualify leads, analyze data, and trigger actions in your other tools — all autonomously.',
    useCases: ['Lead research & qualification', 'Content generation automation', 'Decision-making agents', 'Data analysis & insights', 'Customer feedback analysis', 'Competitor monitoring'],
    tools: ['n8n', 'OpenAI GPT-4', 'LangChain', 'Serper API', 'Notion', 'Slack'], timeline: '7–14 days'
  },
  'landing-pages': {
    category: 'Website Development', icon: '🖥️', name: 'Landing Pages',
    tagline: 'Pages built to convert',
    overview: 'High-converting landing pages designed and built for your specific goal — whether that\'s capturing leads, selling a product, or booking consultations. Every element is optimized for conversions, speed, and mobile experience.',
    useCases: ['Product launch pages', 'Service pages', 'Lead generation pages', 'Sales funnel pages', 'Event registration pages'],
    tools: ['HTML/CSS/JS', 'React', 'Tailwind', 'Figma', 'Vercel'], timeline: '3–5 days'
  },
  'business-websites': {
    category: 'Website Development', icon: '🌐', name: 'Business Websites',
    tagline: 'Your business, online and professional',
    overview: 'Full multi-page business websites that look professional, load fast, and rank on Google. We handle design, development, hosting setup, and basic SEO — so you can focus on your business.',
    useCases: ['Company portfolio sites', 'Service-based business sites', 'Multi-page websites', 'Contact & booking integration', 'SEO-optimized structure'],
    tools: ['HTML/CSS/JS', 'React', 'Next.js', 'Vercel', 'Netlify'], timeline: '7–14 days'
  },
  'ecommerce-stores': {
    category: 'Website Development', icon: '🛒', name: 'E-commerce Stores',
    tagline: 'Sell online without the headache',
    overview: 'We build complete online stores with product listings, cart, checkout, and payment integration. Built for speed and ease of management — you can add products and manage orders without touching code.',
    useCases: ['Product catalog', 'Cart & checkout', 'Payment gateway setup', 'Order management', 'Inventory tracking'],
    tools: ['Next.js', 'Stripe', 'PayPal', 'MongoDB', 'Vercel'], timeline: '10–18 days'
  },
  'webapp-dev': {
    category: 'Website Development', icon: '⚙️', name: 'Web App Development',
    tagline: 'Custom tools built for your workflow',
    overview: 'Need something that doesn\'t exist as a product? We build it. Custom dashboards, booking systems, admin panels, and internal tools — all built specifically for how your business works.',
    useCases: ['Custom dashboards', 'Admin panels', 'Booking systems', 'Internal business tools', 'Client portals'],
    tools: ['MERN Stack', 'Next.js', 'PostgreSQL', 'MongoDB', 'REST APIs'], timeline: '14–30 days'
  },
  'mobile-app-dev': {
    category: 'Application Development', icon: '📲', name: 'Mobile App Development',
    tagline: 'Apps your customers will actually use',
    overview: 'We build mobile apps for Android and iOS that are fast, clean, and built around your users. From idea to App Store — we handle design, development, and deployment.',
    useCases: ['Android & iOS apps', 'Business utility apps', 'Customer-facing apps', 'App Store deployment'],
    tools: ['React Native', 'Expo', 'MongoDB', 'Node.js', 'Firebase'], timeline: '21–45 days'
  },
  'mern-stack': {
    category: 'Application Development', icon: '💻', name: 'MERN Stack Development',
    tagline: 'Full-stack, built right',
    overview: 'Complete web applications built with MongoDB, Express, React, and Node.js. We handle frontend, backend, database, and deployment as one integrated system.',
    useCases: ['React frontend', 'Node.js backend', 'MongoDB database', 'REST API development', 'Authentication systems'],
    tools: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Vercel'], timeline: '14–30 days'
  },
  'logo-brand': {
    category: 'Graphic Design', icon: '🎨', name: 'Logo & Brand Identity',
    tagline: 'A brand that people remember',
    overview: 'We design logos and complete brand identity packages that make your business look professional and consistent across every platform. From concept to final files in all formats.',
    useCases: ['Logo design', 'Brand color palette', 'Typography selection', 'Brand style guide', 'Business card design'],
    tools: ['Figma', 'Adobe Illustrator', 'Adobe Photoshop'], timeline: '3–7 days'
  },
  'social-media-graphics': {
    category: 'Graphic Design', icon: '🖼️', name: 'Social Media Graphics',
    tagline: 'Content that stops the scroll',
    overview: 'Scroll-stopping social media graphics designed for your brand. Post templates, story designs, ad creatives — all consistent with your brand identity and optimized for each platform.',
    useCases: ['Post templates', 'Story designs', 'Cover photos', 'Ad creatives', 'Profile setup'],
    tools: ['Figma', 'Canva Pro', 'Adobe Photoshop'], timeline: '2–4 days'
  },
  'social-media-mgmt': {
    category: 'Digital Marketing', icon: '📣', name: 'Social Media Management',
    tagline: 'Grow while you focus on your business',
    overview: 'We handle your entire social media presence — content creation, posting, engagement, and growth strategy. Monthly reporting so you always know what\'s working.',
    useCases: ['Content creation & posting', 'Account management', 'Audience engagement', 'Growth strategy', 'Analytics reporting'],
    tools: ['Buffer', 'Meta Business Suite', 'Canva', 'Google Analytics'], timeline: 'Ongoing monthly'
  },
  'seo': {
    category: 'Digital Marketing', icon: '🔍', name: 'SEO Optimization',
    tagline: 'Get found on Google',
    overview: 'We optimize your website so it ranks higher on Google search results. From keyword research to technical fixes to content strategy — we cover everything that gets you organic traffic.',
    useCases: ['On-page SEO', 'Keyword research', 'Technical SEO audit', 'Google ranking improvement', 'Competitor analysis'],
    tools: ['Ahrefs', 'Google Search Console', 'Screaming Frog', 'SEMrush'], timeline: 'Ongoing / 30-day audit'
  },
  'video-editing': {
    category: 'Videography & Editing', icon: '🎬', name: 'Video Editing',
    tagline: 'Raw footage → polished content',
    overview: 'We take your raw footage and turn it into professional videos with smooth cuts, color grading, transitions, captions, and music. Formatted for YouTube, Instagram Reels, TikTok, or any platform you need.',
    useCases: ['Raw footage editing', 'Color grading', 'Transitions & effects', 'Captions & subtitles', 'YouTube & Reel formatting'],
    tools: ['Adobe Premiere Pro', 'DaVinci Resolve', 'After Effects', 'CapCut'], timeline: '2–5 days per video'
  },
  'short-form': {
    category: 'Videography & Editing', icon: '🎞️', name: 'Short Form Content',
    tagline: 'Reels and Shorts that get views',
    overview: 'We produce high-retention short-form videos optimized for Instagram Reels, TikTok, and YouTube Shorts. Hook in the first 3 seconds, strong pacing, captions — everything the algorithm loves.',
    useCases: ['Instagram Reels', 'TikTok videos', 'YouTube Shorts', 'Ad video clips', 'Product showcase clips'],
    tools: ['Adobe Premiere Pro', 'CapCut', 'After Effects', 'Canva'], timeline: '1–3 days per video'
  }
}

export const serviceCategories = [
  {
    id: 'ai-automation',
    title: 'AI Automation',
    badge: 'Most Popular',
    description: 'We automate your repetitive business tasks using n8n, AI agents, and smart workflows so you save 40+ hours every month.',
    icon: (
      <svg viewBox="0 0 24 24"><rect x="3" y="11" width="18" height="10" rx="2"/><circle cx="12" cy="5" r="2"/><path d="M12 7v4"/><circle cx="12" cy="16" r="1"/></svg>
    ),
    services: ['whatsapp-agents', 'workflow-auto', 'form-data-auto', 'social-media-auto', 'spreadsheet-doc-auto', 'custom-ai-agents']
  },
  {
    id: 'website-dev',
    title: 'Website Development',
    description: 'We build fast, modern, and professional websites that look great and convert visitors into customers.',
    icon: (
      <svg viewBox="0 0 24 24"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
    ),
    services: ['landing-pages', 'business-websites', 'ecommerce-stores', 'webapp-dev']
  },
  {
    id: 'app-dev',
    title: 'Application Development',
    description: 'From mobile apps to backend systems, we build software that works smoothly and scales with your business.',
    icon: (
      <svg viewBox="0 0 24 24"><rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12" y2="18"/></svg>
    ),
    services: ['mobile-app-dev', 'mern-stack']
  },
  {
    id: 'graphic-design',
    title: 'Graphic Design',
    description: 'Professional visual design that makes your brand stand out — from logos to full brand identity packages.',
    icon: (
      <svg viewBox="0 0 24 24"><circle cx="13.5" cy="6.5" r="2.5"/><circle cx="17.5" cy="10.5" r="2.5"/><circle cx="8.5" cy="7.5" r="2.5"/><circle cx="6.5" cy="12" r="2.5"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.93 0 1.5-.67 1.5-1.5 0-.39-.15-.74-.39-1.04-.23-.29-.38-.63-.38-1.02 0-.83.67-1.5 1.5-1.5H16c3.31 0 6-2.69 6-6 0-5.5-4.5-9.94-10-9.94z"/></svg>
    ),
    services: ['logo-brand', 'social-media-graphics']
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing',
    description: 'We grow your online presence and bring you real leads through data-driven marketing strategies.',
    icon: (
      <svg viewBox="0 0 24 24"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
    ),
    services: ['social-media-mgmt', 'seo']
  },
  {
    id: 'videography',
    title: 'Videography & Editing',
    description: 'High-quality video content that tells your brand story and captures your audience\'s attention.',
    icon: (
      <svg viewBox="0 0 24 24"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2"/></svg>
    ),
    services: ['video-editing', 'short-form']
  }
]

export const servicePricing = [
  {
    category: 'AI Automation',
    icon: (
      <svg viewBox="0 0 24 24"><rect x="3" y="11" width="18" height="10" rx="2"/><circle cx="12" cy="5" r="2"/><path d="M12 7v4"/><circle cx="12" cy="16" r="1"/></svg>
    ),
    services: [
      {
        name: 'WhatsApp AI Agent',
        desc: 'Smart bot handling bookings, FAQs, and customer conversations 24/7',
        price: 'Rs. 8,400',
        oldPrice: 'Rs. 12,000',
        unit: 'setup + Rs. 4,200/mo',
        features: ['Custom trained on your data', 'Unlimited conversations', 'Booking & FAQ automation', 'Weekly maintenance', 'Free support: 3 days'],
        delivery: '5–7 days'
      },
      {
        name: 'Workflow Automation',
        desc: 'Connect your tools and eliminate repetitive manual tasks',
        price: 'Rs. 6,000',
        oldPrice: 'Rs. 8,500',
        unit: 'per workflow',
        features: ['Up to 3 tool integrations', 'Automated triggers & actions', 'Error handling & alerts', 'Documentation', 'Free support: 3 days'],
        delivery: '3–5 days'
      },
      {
        name: 'Social Media Automation',
        desc: 'Auto-post across all platforms from one content calendar',
        price: 'Rs. 5,500',
        oldPrice: 'Rs. 7,500',
        unit: 'setup + Rs. 3,000/mo',
        features: ['Multi-platform posting', 'AI caption & hashtag generator', 'Content calendar sync', 'Analytics dashboard', 'Free support: 5 days'],
        delivery: '3–5 days'
      },
      {
        name: 'Custom AI Agent',
        desc: 'AI that researches, qualifies leads, and executes tasks autonomously',
        price: 'Rs. 25,000',
        oldPrice: 'Rs. 35,000',
        unit: 'starting from',
        features: ['Web browsing & research', 'Lead qualification & scoring', 'Multi-step task execution', 'Tool integrations', 'Free support: 7 days'],
        delivery: '7–14 days'
      }
    ]
  },
  {
    category: 'Website Development',
    icon: (
      <svg viewBox="0 0 24 24"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
    ),
    services: [
      {
        name: 'Landing Page',
        desc: 'High-converting single page optimized for leads or sales',
        price: 'Rs. 7,500',
        oldPrice: 'Rs. 10,000',
        unit: 'one-time',
        features: ['Mobile-responsive design', 'SEO optimized', 'Fast loading (< 2s)', 'Contact form integration', 'Free support: 5 days'],
        delivery: '3–5 days'
      },
      {
        name: 'Business Website',
        desc: 'Multi-page professional website with all your business info',
        price: 'Rs. 18,000',
        oldPrice: 'Rs. 25,000',
        unit: 'one-time',
        features: ['Up to 8 pages', 'Custom design', 'Google indexing & SEO', 'Admin panel access', 'Free support: 7 days'],
        delivery: '7–14 days'
      },
      {
        name: 'E-commerce Store',
        desc: 'Online store with products, cart, checkout & payment gateway',
        price: 'Rs. 35,000',
        oldPrice: 'Rs. 50,000',
        unit: 'starting from',
        features: ['Product catalog & listings', 'Cart & checkout flow', 'Payment gateway (eSewa/Khalti)', 'Order management', 'Free support: 14 days'],
        delivery: '10–18 days'
      },
      {
        name: 'Web App Development',
        desc: 'Custom dashboards, booking systems & internal business tools',
        price: 'Rs. 50,000',
        oldPrice: 'Rs. 75,000',
        unit: 'starting from',
        features: ['Custom UI/UX design', 'Backend & database', 'User authentication', 'API integrations', 'Free support: 14 days'],
        delivery: '14–30 days'
      }
    ]
  },
  {
    category: 'Application Development',
    icon: (
      <svg viewBox="0 0 24 24"><rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12" y2="18"/></svg>
    ),
    services: [
      {
        name: 'Mobile App (Android + iOS)',
        desc: 'Cross-platform app built with React Native & Expo',
        price: 'Rs. 60,000',
        oldPrice: 'Rs. 85,000',
        unit: 'starting from',
        features: ['Both Android & iOS', 'Custom UI/UX', 'Push notifications', 'App Store deployment', 'Free support: 14 days'],
        delivery: '21–45 days'
      },
      {
        name: 'MERN Stack App',
        desc: 'Full-stack web application with React, Node.js & MongoDB',
        price: 'Rs. 45,000',
        oldPrice: 'Rs. 65,000',
        unit: 'starting from',
        features: ['React frontend', 'Node.js + Express backend', 'MongoDB database', 'REST API', 'Free support: 14 days'],
        delivery: '14–30 days'
      }
    ]
  },
  {
    category: 'Graphic Design',
    icon: (
      <svg viewBox="0 0 24 24"><circle cx="13.5" cy="6.5" r="2.5"/><circle cx="17.5" cy="10.5" r="2.5"/><circle cx="8.5" cy="7.5" r="2.5"/><circle cx="6.5" cy="12" r="2.5"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.93 0 1.5-.67 1.5-1.5 0-.39-.15-.74-.39-1.04-.23-.29-.38-.63-.38-1.02 0-.83.67-1.5 1.5-1.5H16c3.31 0 6-2.69 6-6 0-5.5-4.5-9.94-10-9.94z"/></svg>
    ),
    services: [
      {
        name: 'Logo & Brand Identity',
        desc: 'Complete brand package with logo, colors & style guide',
        price: 'Rs. 5,000',
        oldPrice: 'Rs. 7,500',
        unit: 'one-time',
        features: ['3 logo concepts', 'Unlimited revisions', 'Full brand guidelines', 'All file formats (AI, PNG, SVG)', 'Business card design'],
        delivery: '3–7 days'
      },
      {
        name: 'Social Media Graphics',
        desc: 'Scroll-stopping posts, stories & ad creatives for your brand',
        price: 'Rs. 3,500',
        oldPrice: 'Rs. 5,000',
        unit: 'per 10 designs',
        features: ['Custom branded templates', 'Instagram, Facebook, LinkedIn', 'Story & reel covers', 'Ad creatives', 'Source files included'],
        delivery: '2–4 days'
      }
    ]
  },
  {
    category: 'Digital Marketing',
    icon: (
      <svg viewBox="0 0 24 24"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
    ),
    services: [
      {
        name: 'Social Media Management',
        desc: 'Full social media handling — content, posting & growth strategy',
        price: 'Rs. 8,000',
        oldPrice: 'Rs. 12,000',
        unit: 'per month',
        features: ['12 posts per month', 'Content calendar', 'Account management', 'Audience engagement', 'Monthly analytics report'],
        delivery: 'Ongoing'
      },
      {
        name: 'SEO Optimization',
        desc: 'Get your website ranking higher on Google search results',
        price: 'Rs. 6,000',
        oldPrice: 'Rs. 9,000',
        unit: 'per month',
        features: ['Keyword research', 'On-page SEO', 'Technical audit', 'Monthly reporting', 'Competitor analysis'],
        delivery: 'Ongoing'
      }
    ]
  },
  {
    category: 'Videography & Editing',
    icon: (
      <svg viewBox="0 0 24 24"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2"/></svg>
    ),
    services: [
      {
        name: 'Video Editing',
        desc: 'Professional editing with color grading, transitions & captions',
        price: 'Rs. 2,500',
        oldPrice: 'Rs. 4,000',
        unit: 'per video (up to 10 min)',
        features: ['Smooth cuts & transitions', 'Color grading', 'Captions & subtitles', 'Music & sound design', 'Multiple format export'],
        delivery: '2–5 days'
      },
      {
        name: 'Short Form Content',
        desc: 'Reels, Shorts & TikToks optimized for maximum engagement',
        price: 'Rs. 1,500',
        oldPrice: 'Rs. 2,500',
        unit: 'per video (up to 60s)',
        features: ['Hook-first editing', 'Trending format style', 'Auto-captions', 'Platform optimized', 'Raw footage provided'],
        delivery: '1–3 days'
      }
    ]
  }
]

export const faqData = [
  {
    question: 'Do I need technical knowledge?',
    answer: 'No. We handle all the technical setup. You just tell us what to automate, and we build it. We provide clear training for your team.'
  },
  {
    question: 'How long does it take to build an automation?',
    answer: 'Simple automations (WhatsApp bot, forms): 3-5 days. Complex custom agents: 7-14 days. Delivery timeline confirmed in writing before we start.'
  },
  {
    question: 'What if something breaks after delivery?',
    answer: 'All projects include 3-7 days of free support. After that, ongoing support is included in your monthly plan. We respond within 24-48 hours.'
  },
  {
    question: 'Can you automate something not on your service list?',
    answer: 'Likely yes. If it can be automated, we can probably build it. Book a free consultation and describe your use case.'
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'eSewa, Khalti, Bank Transfer (Nepal)'
  }
]

export const howItWorksSteps = [
  {
    title: 'Free Consultation',
    desc: 'We chat for 30 minutes. You tell us what takes the most time in your business. We explain how automation can solve it.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
      </svg>
    )
  },
  {
    title: 'Custom Blueprint',
    desc: 'We design a custom automation solution tailored to your workflow. You review, approve, and we agree on timeline & pricing.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
        <line x1="16" y1="13" x2="8" y2="13"/>
        <line x1="16" y1="17" x2="8" y2="17"/>
        <polyline points="10 9 9 9 8 9"/>
      </svg>
    )
  },
  {
    title: 'Build & Test',
    desc: 'We build your automation using n8n, integrate it with your tools, and test extensively to ensure it works perfectly.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
      </svg>
    )
  },
  {
    title: 'Launch & Train',
    desc: 'Your automation goes live. We train you on how to use it and provide 3-7 days of free support.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/>
        <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/>
        <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/>
        <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/>
      </svg>
    )
  },
  {
    title: 'Ongoing Support',
    desc: 'We monitor your automation, maintain it weekly/bi-weekly, and help with any updates or improvements you need.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <line x1="18" y1="20" x2="18" y2="10"/>
        <line x1="12" y1="20" x2="12" y2="4"/>
        <line x1="6" y1="20" x2="6" y2="14"/>
      </svg>
    )
  }
]

export const whyChooseData = [
  {
    title: 'Fast Delivery',
    desc: '3-5 days for most automations. Get results quickly.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
      </svg>
    )
  },
  {
    title: 'Affordable Pricing',
    desc: 'Start at NPR 8,000/month. No expensive consultants required.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23"/>
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
      </svg>
    )
  },
  {
    title: 'Personalized Service',
    desc: 'Not a template. Every automation is custom-built for YOUR business.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    )
  },
  {
    title: 'Proven Results',
    desc: '50+ automations built. Clients save 40+ hours per month on average.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
      </svg>
    )
  },
  {
    title: 'Complete Training',
    desc: 'You get clear documentation, videos, and live training.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
        <path d="M6 12v5c3 3 9 3 12 0v-5"/>
      </svg>
    )
  },
  {
    title: 'Global, Local Support',
    desc: 'Based in Nepal. Serve clients worldwide. 24/7 support available.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <line x1="2" y1="12" x2="22" y2="12"/>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
      </svg>
    )
  }
]
