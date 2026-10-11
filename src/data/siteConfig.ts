import { ServiceItem, TestimonialItem } from '../types';

export const siteConfig = {
  name: 'Yash Wajge',
  role: 'Video Editor & Storyteller',
  headline: 'Yash Wajge — Video Editor for Creators & Brands',
  tagline: 'High-retention editing, cinematic pacing, and strategic storytelling that turn viewers into subscribers and loyal customers.',
  canonicalUrl: 'https://yashwajge.video',
  email: 'yashwajge9@gmail.com',
  location: 'Remote · London & Worldwide (UTC / EST / PST)',
  availabilityStatus: 'Available for Q4/Q1 Projects',
  stats: [
    { label: 'Total Views Generated', value: '85M+', sub: 'Across YouTube, Reels & TikTok' },
    { label: 'Videos Delivered', value: '350+', sub: 'Shorts & Long-form projects' },
    { label: 'Avg 30s Retention', value: '68%', sub: '2.4x industry average' },
    { label: 'Client Repeat Rate', value: '94%', sub: 'Long-term creator partnerships' },
  ],
  socials: {
    youtube: 'https://youtube.com/@yashwajge',
    instagram: 'https://instagram.com/yashwajge.edit',
    linkedin: 'https://linkedin.com/in/yashwajge',
    twitter: 'https://x.com/yashwajge',
    whatsapp: 'https://wa.me/447700900123',
  },
  software: [
    { name: 'Adobe Premiere Pro', level: 'Expert (8+ yrs)', tag: 'NLE Editing' },
    { name: 'DaVinci Resolve Studio', level: 'Expert (6+ yrs)', tag: 'Color Grading & Finishing' },
    { name: 'Adobe After Effects', level: 'Advanced (5+ yrs)', tag: 'Motion Graphics & VFX' },
    { name: 'Adobe Audition & iZotope', level: 'Advanced (5+ yrs)', tag: 'Dialogue Cleanup & Mix' },
    { name: 'Photoshop', level: 'Advanced (7+ yrs)', tag: 'Thumbnails & Keyart' },
    { name: 'Blender', level: 'Intermediate', tag: '3D Mockups & Title Sequences' },
  ],
  workflowSteps: [
    {
      step: '01',
      title: 'Strategy & Ingestion',
      desc: 'We review raw footage, target audience retention curves, channel pacing guidelines, and key narrative beats before making a single cut.',
    },
    {
      step: '02',
      title: 'The Assembly & A-Roll Pacing',
      desc: 'Ruthlessly cutting pauses, building narrative momentum, scripting sound hooks, and structuring the first 30 seconds for maximum stickiness.',
    },
    {
      step: '03',
      title: 'B-Roll, Sound Design & Motion',
      desc: 'Layering custom sound effects, kinetic typography, dynamic zooms, contextual graphics, and mixed audio tracks that keep eyes on screen.',
    },
    {
      step: '04',
      title: 'Color Grading & Final Delivery',
      desc: 'Final color grading in DaVinci Resolve, platform-optimized render exports (4K/1080p), and revisions handled with Frame.io precision.',
    },
  ],
};

export const servicesData: ServiceItem[] = [
  {
    id: 'short-form',
    title: 'Short-Form Video Editing',
    subtitle: 'Reels, YouTube Shorts & TikTok',
    description: 'High-energy, hook-engineered vertical edits with kinetic subtitles, pattern interrupts, and seamless loops tailored for algorithmic discovery.',
    deliverables: ['Custom 9:16 vertical edit', 'Dynamic word-by-word captions', 'Curated sound effects & audio mix', 'Engaging hook variation testing'],
    turnaround: '24–48 hours per batch',
    icon: 'Sparkles',
  },
  {
    id: 'long-form',
    title: 'Long-Form YouTube & Docs',
    subtitle: 'Main-channel videos & Mini-Documentaries',
    description: 'Cinematic storytelling, documentary pacing, multi-camera syncing, and narrative editing that drives 50%+ retention across 15+ minute videos.',
    deliverables: ['Full multi-cam sync & cut', 'Narrative restructuring & pacing', 'Original motion graphics & maps', 'Chapter timestamps & export package'],
    turnaround: '3–5 days per episode',
    icon: 'Film',
  },
  {
    id: 'podcast',
    title: 'Video Podcast Production',
    subtitle: 'Full shows & viral clip repurposing',
    description: 'End-to-end podcast post-production: multi-camera switching, audio mastering, and converting each episode into 5–10 viral short clips.',
    deliverables: ['Master episode mix (video + audio)', 'Automated speaker switching', 'Audiogram & teaser trailers', '5–10 cutdown vertical clips'],
    turnaround: '48–72 hours',
    icon: 'Mic',
  },
  {
    id: 'color-sound',
    title: 'Color Grading & Sound Design',
    subtitle: 'DaVinci Resolve finishing & spatial audio',
    description: 'Professional cinematic look development, matching multiple cameras, LUT creation, noise reduction, and custom Foley sound design.',
    deliverables: ['ACES/DaVinci YRGB color pass', 'Skin tone isolation & cleanup', 'Dialogue noise reduction', 'Commercial stereo audio master (-14 LUFS)'],
    turnaround: '2–3 days',
    icon: 'Sliders',
  },
  {
    id: 'thumbnails',
    title: 'High-CTR YouTube Thumbnails',
    subtitle: 'Click-Through Rate optimization',
    description: 'Psychology-driven thumbnail design designed alongside the video edit to ensure maximum curiosity and viewer conversion.',
    deliverables: ['3 High-CTR concept variations', '4K resolution exports', 'A/B testing advice', 'Custom cutouts & color pop'],
    turnaround: '24 hours',
    icon: 'Eye',
  },
];

export const testimonialsData: TestimonialItem[] = [
  {
    id: '1',
    quote: "Yash transformed our channel's retention. Our average view duration went from 38% to 62% in the first month, and our subscriber growth tripled. He doesn't just edit clips; he understands storytelling.",
    clientName: 'Marcus Bennett',
    clientRole: 'Tech Creator & Founder',
    channelOrCompany: '1.2M YouTube Subscribers',
    metric: '+180% Retention Surge',
    avatarText: 'MB',
  },
  {
    id: '2',
    quote: 'Our short-form views exploded after switching to Yash. We gained over 250,000 Instagram followers in 90 days. His turnarounds are always on time, and the sound design quality is unmatched.',
    clientName: 'Elena Rostova',
    clientRole: 'Head of Content',
    channelOrCompany: 'Nova Digital Agency',
    metric: '45M+ Reel Views',
    avatarText: 'ER',
  },
  {
    id: '3',
    quote: 'Finding an editor who can handle both fast-paced YouTube pacing and serious documentary narrative is rare. Yash handled our 6-part mini-series flawlessly under tight deadlines.',
    clientName: 'David Chen',
    clientRole: 'Executive Producer',
    channelOrCompany: 'Aura Media Studio',
    metric: '98% Client Satisfaction',
    avatarText: 'DC',
  },
];
