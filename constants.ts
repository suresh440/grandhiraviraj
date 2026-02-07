import { SiteData } from './types';

export const INITIAL_DATA: SiteData = {
  profile: {
    name: "Grandhi Ravi Raj",
    role: ["Marketing Manager", "Pharmaceutical Sales Expert", "Team Leader"],
    bio: "I am a results-oriented Marketing Manager at Derma Pvt Ltd with over 18 years of comprehensive experience as a Medical Representative. I specialize in driving brand growth, strategic territory management, and leading high-performance teams to exceed sales targets in the pharmaceutical industry.",
    email: "contact@grandhiraviraj.com",
    github: "#", // Reusing this field for "Portfolio" or generic link if needed, or just placeholder
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    resumeUrl: "#",
  },
  projects: [
    {
      id: "1",
      title: "South Zone Sales Expansion",
      description: "Led a strategic initiative to expand market penetration in the South Zone, resulting in a 40% increase in revenue within one year.",
      category: "Sales",
      imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop",
      liveUrl: "#",
      tags: ["Strategy", "Revenue Growth", "Territory Management"],
    },
    {
      id: "2",
      title: "DermaCare Product Launch",
      description: "Successfully orchestrated the launch of the new DermaCare line, coordinating with 50+ dermatologists and key opinion leaders.",
      category: "Marketing",
      imageUrl: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=600&auto=format&fit=crop",
      liveUrl: "#",
      tags: ["Product Launch", "KOL Management", "Branding"],
    },
    {
      id: "3",
      title: "Sales Force Effectiveness Program",
      description: "Designed and implemented a training program for 15+ Medical Representatives, improving detailing quality and conversion rates.",
      category: "Leadership",
      imageUrl: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=600&auto=format&fit=crop",
      liveUrl: "#",
      tags: ["Training", "Team Building", "Performance"],
    },
    {
      id: "4",
      title: "Key Account Management System",
      description: "Developed a structured approach for managing corporate hospital accounts, securing exclusive contracts worth 5M INR.",
      category: "Sales",
      imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop",
      liveUrl: "#",
      tags: ["KAM", "Negotiation", "B2B"],
    },
  ],
  posts: [
    {
      id: "1",
      title: "Building Trust with Dermatologists",
      excerpt: "Strategies for Medical Representatives to establish long-term professional relationships with key specialists.",
      date: "Oct 12, 2023",
      readTime: "5 min read",
      imageUrl: "https://images.unsplash.com/photo-1576091160550-217358c7db81?q=80&w=600&auto=format&fit=crop",
    },
    {
      id: "2",
      title: "The Shift to Digital in Pharma Marketing",
      excerpt: "How hybrid detailing models are reshaping the way we interact with healthcare professionals post-pandemic.",
      date: "Sep 28, 2023",
      readTime: "8 min read",
      imageUrl: "https://images.unsplash.com/photo-1576091160291-2411f2399854?q=80&w=600&auto=format&fit=crop",
    },
    {
      id: "3",
      title: "From MR to Manager: The Transition",
      excerpt: "Lessons learned from 18 years in the field and tips for aspiring leaders in the pharmaceutical industry.",
      date: "Aug 15, 2023",
      readTime: "6 min read",
      imageUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=600&auto=format&fit=crop",
    },
  ],
};

export const SKILLS = [
  { name: "Pharma Sales", level: 98 },
  { name: "Team Leadership", level: 95 },
  { name: "Market Analysis", level: 90 },
  { name: "Brand Management", level: 85 },
  { name: "Negotiation", level: 92 },
  { name: "CRM & Forecasting", level: 88 },
];