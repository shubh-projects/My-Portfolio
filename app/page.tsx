"use client";

import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { 
  Mail, 
  ExternalLink, 
  Terminal, 
  Database, 
  Layout, 
  Cpu,
  ChevronRight,
  Code2,
  Key,
  MessageCircle,
  Sparkles
} from 'lucide-react';

// Custom SVG components for brand icons
const Github = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
    <path d="M9 18c-4.51 2-5-2-7-2"/>
  </svg>
);

const Linkedin = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect width="4" height="12" x="2" y="9"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

const Whatsapp = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
  </svg>
);

const PROJECTS = [
  {
    title: 'Weblyss Lusion Experience',
    description: 'A highly immersive web experience featuring heavy, complex 3D animations, particle effects, and cinematic scroll-jacking designed to inspire and innovate.',
    tech: ['React', 'WebGL', 'Framer Motion', '3D Animation'],
    link: 'https://weblvss-fushion-website-standalone.vercel.app',
    github: 'https://github.com/shubh-projects'
  },
  {
    title: 'Haverune Real Estate',
    description: 'A premium property listing platform with advanced search capabilities, designed for a high-end property browsing experience.',
    tech: ['Next.js', 'React', 'Tailwind CSS'],
    link: 'https://haverune-real-estate.vercel.app/',
    github: 'https://github.com/shubh-projects'
  },
  {
    title: 'Vigorim Fitness',
    description: 'A modern fitness and gym platform featuring dynamic class schedules, trainer profiles, and an engaging high-energy UI.',
    tech: ['Next.js', 'React', 'Tailwind CSS'],
    link: 'https://vigorim-fitness.vercel.app/',
    github: 'https://github.com/shubh-projects'
  },
  {
    title: 'EstateFlow CRM',
    description: 'A comprehensive real estate customer relationship management platform for tracking properties, agents, and client interactions with secure role-based access.',
    demoDetails: 'Demo Login: admin@estateflowcrm.dev | Pass: Password123!',
    tech: ['Next.js', 'React', 'Tailwind CSS', 'Database'],
    link: 'https://estateflow-crm-seven.vercel.app/',
    github: 'https://github.com/shubh-projects'
  },
  {
    title: 'Veylo Real Estate Platform',
    description: 'An elegant property management and discovery platform focusing on connecting buyers and sellers with a seamless interface.',
    tech: ['Next.js', 'React', 'Tailwind CSS'],
    link: 'https://veylo-real-estate-platform.vercel.app/',
    github: 'https://github.com/shubh-projects'
  },
  {
    title: 'Pulseyard Fitness',
    description: 'A responsive workout and fitness tracking interface built to motivate users with a clean, modern aesthetic.',
    tech: ['React', 'Tailwind CSS', 'UI/UX'],
    link: 'https://pulseyard-fitness.vercel.app/',
    github: 'https://github.com/shubh-projects'
  },
  {
    title: 'Creatour Travel Experience',
    description: 'A modern, highly responsive web application built for a travel brand, featuring dynamic UI components and a smooth, immersive user experience.',
    tech: ['Next.js', 'React', 'Tailwind CSS'],
    link: 'https://creatour-new.vercel.app/',
    github: 'https://github.com/shubh-projects'
  },
  {
    title: 'Gadget Hub (In Progress)',
    description: 'An active e-commerce platform build focusing on clean product UI, responsive design, and a scalable frontend architecture.',
    tech: ['React', 'Tailwind CSS', 'UI/UX Design'],
    link: 'https://gadget-hub-cyan.vercel.app/design.html',
    github: 'https://github.com/shubh-projects'
  },
  {
    title: 'GST Filing Automation',
    description: 'Engineered browser automation scripts to streamline GSTR-3B form interactions, automated invoice data extraction, and modal dismissals on the official GST portal.',
    tech: ['JavaScript', 'Browser Automation'],
    link: '/GST fillimg automation.mp4', 
    github: 'https://github.com/shubh-projects'
  },
  {
    title: 'Unicorn Engine',
    description: 'A high-performance live market feed and backtesting platform. Engineered to process rapid data streams and execute complex trading algorithms with minimal latency.',
    tech: ['FastAPI', 'Redis', 'Python'],
    link: '#', 
    github: 'https://github.com/shubh-projects'
  },
  {
    title: 'AI Agent Marketplace',
    description: 'An interactive dashboard and functional ecosystem for autonomous AI agent transactions. Built with a focus on seamless user experience and complex state management.',
    tech: ['Next.js', 'React', 'TypeScript'],
    link: '#', 
    github: 'https://github.com/shubh-projects'
  }
];

// 100% Type-Safe Animation Variants
const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 }
  }
};

const textReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function Portfolio() {
  const [scrolled, setScrolled] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  
  // Custom Cursor tracking
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Scroll animations for parallax
  const { scrollY, scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
  
  // Parallax transforms
  const backgroundY = useTransform(scrollY, [0, 1000], [0, 300]);
  const heroImageY = useTransform(scrollY, [0, 800], [0, 150]);
  const heroImageRotate = useTransform(scrollY, [0, 800], [0, 10]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const heroHeadline = "I build the future.".split(" ");

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-blue-500/30 overflow-hidden relative cursor-none">
      
      {/* Premium Custom Cursor */}
      <motion.div 
        className="fixed top-0 left-0 w-8 h-8 rounded-full bg-blue-400/40 blur-[4px] pointer-events-none z-[100] mix-blend-screen"
        animate={{ x: mousePos.x - 16, y: mousePos.y - 16 }}
        transition={{ duration: 0.15 }}
      />
      <motion.div 
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-white pointer-events-none z-[101]"
        animate={{ x: mousePos.x - 4, y: mousePos.y - 4 }}
        transition={{ duration: 0 }}
      />

      {/* Parallax Ambient Background */}
      <motion.div style={{ y: backgroundY }} className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1], x: [0, 50, 0] }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-blue-900/40 blur-[140px]"
        />
        <motion.div 
          animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.2, 0.1], x: [0, -60, 0] }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute top-[40%] -right-[10%] w-[40%] h-[60%] rounded-full bg-purple-900/30 blur-[140px]"
        />
      </motion.div>

      {/* Top Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 origin-left z-[60]"
        style={{ scaleX }}
      />

      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-slate-950/80 backdrop-blur-xl border-b border-slate-800/50 py-4 shadow-2xl' : 'bg-transparent py-6'}`}>
        <div className="max-w-5xl mx-auto px-6 flex justify-between items-center">
          <motion.span 
            initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}
            className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent cursor-pointer"
          >
            Shubh.dev
          </motion.span>
          <motion.div 
            initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, staggerChildren: 0.1 }}
            className="flex gap-6 items-center"
          >
            {['Projects', 'Skills', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-sm font-medium hover:text-blue-400 transition-colors relative group cursor-none">
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </motion.div>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto px-6 pt-32 pb-24 relative z-10">
        {/* Hero Section */}
        <section className="py-20 md:py-32 flex flex-col-reverse md:flex-row items-center gap-12 min-h-[80vh]">
          <motion.div className="flex-1" initial="hidden" animate="visible" variants={staggerContainer}>
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/60 border border-blue-500/30 text-blue-400 text-sm mb-8 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse shadow-[0_0_12px_rgba(59,130,246,0.9)]"></span>
              Available for freelance work
            </motion.div>
            
            <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight">
              Hi, I'm <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-[length:200%_auto] animate-gradient bg-clip-text text-transparent">Shubh.</span><br />
              <div className="flex flex-wrap gap-x-4 mt-2">
                {heroHeadline.map((word, i) => (
                  <motion.span key={i} variants={textReveal} className="text-4xl md:text-6xl text-slate-300 inline-block">
                    {word}
                  </motion.span>
                ))}
              </div>
            </motion.h1>
            
            <motion.p variants={fadeUp} className="text-lg text-slate-400 max-w-xl mb-10 leading-relaxed font-light">
              Software Developer & Automation Specialist. I build custom software, dynamic Webflow sites, and powerful AI & n8n automations to transform workflows and scale businesses.
            </motion.p>
            
            <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
              <a href="#projects" className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-3.5 rounded-xl font-medium transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_35px_rgba(37,99,235,0.6)] flex items-center gap-2 hover:-translate-y-1 cursor-none">
                View My Work <ChevronRight size={18} />
              </a>
              <a href="#skills" className="bg-slate-900/80 backdrop-blur-sm hover:bg-slate-800 text-white px-8 py-3.5 rounded-xl font-medium transition-all border border-slate-700 hover:border-blue-500 flex items-center gap-2 hover:-translate-y-1 cursor-none">
                <Sparkles size={18} className="text-cyan-400" /> My Tech Stack
              </a>
            </motion.div>
          </motion.div>

          {/* Parallax & Floating Profile Image Container */}
          <motion.div 
            style={{ y: heroImageY, rotate: heroImageRotate }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="w-56 h-56 md:w-80 md:h-80 relative"
          >
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ repeat: Infinity, duration: 5 }}
              className="w-full h-full relative group cursor-none"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-purple-500 rounded-full blur-2xl opacity-40 animate-pulse group-hover:opacity-70 transition-opacity duration-500"></div>
              <img 
                src="/profile.jpg" 
                alt="Shubh" 
                className="relative w-full h-full object-cover rounded-full border-[4px] border-slate-800/80 shadow-2xl z-10 bg-slate-800 backdrop-blur-sm transition-transform duration-500 group-hover:scale-105"
                onError={(e) => { e.currentTarget.src = "https://ui-avatars.com/api/?name=Shubh&background=0D1117&color=60A5FA&size=512"; }}
              />
            </motion.div>
          </motion.div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-24 border-t border-slate-800/50 relative">
          <motion.h2 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
            className="text-4xl font-bold mb-12 flex items-center gap-4"
          >
            <span className="p-3 bg-blue-500/10 rounded-xl border border-blue-500/20"><Code2 className="text-blue-400" size={28} /></span> 
            Featured Projects
          </motion.h2>
          
          <motion.div 
            className="grid md:grid-cols-2 gap-8"
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
          >
            {PROJECTS.map((project, idx) => (
              <motion.div 
                variants={fadeUp}
                whileHover={{ y: -8 }}
                key={idx} 
                onClick={() => { if (project.link !== '#') window.open(project.link, '_blank'); }}
                className={`bg-slate-900/40 backdrop-blur-md border border-slate-800/80 p-8 rounded-3xl transition-all duration-500 group flex flex-col relative overflow-hidden shadow-lg ${project.link !== '#' ? 'cursor-none hover:border-blue-500/50 hover:shadow-[0_20px_40px_-15px_rgba(59,130,246,0.2)] hover:bg-slate-800/40' : ''}`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                
                <h3 className="text-2xl font-bold mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-cyan-400 transition-all z-10">{project.title}</h3>
                <p className="text-slate-400 text-sm mb-6 leading-relaxed flex-grow z-10 font-light">
                  {project.description}
                </p>
                
                {project.demoDetails && (
                  <div className="mb-6 z-10 bg-slate-950/80 p-4 rounded-xl border border-slate-800/80 flex items-start gap-3 shadow-inner">
                    <Key size={16} className="text-cyan-400 mt-0.5 shrink-0" />
                    <p className="text-xs text-slate-300 font-mono leading-relaxed opacity-90">
                      {project.demoDetails}
                    </p>
                  </div>
                )}
                
                <div className="flex flex-wrap gap-2 mb-8 mt-auto z-10">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="text-xs font-medium px-3 py-1.5 rounded-lg bg-slate-950/80 border border-slate-800 text-slate-300 shadow-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-between items-center z-10 pt-6 border-t border-slate-800/50">
                  <button 
                    onClick={(e) => { e.stopPropagation(); window.open(project.github, '_blank'); }} 
                    className="text-slate-400 hover:text-white transition-colors flex items-center gap-2 text-sm font-medium bg-slate-950/80 px-4 py-2 rounded-xl border border-slate-800 hover:border-slate-500 cursor-none"
                  >
                    <Github size={18} /> Code
                  </button>
                  
                  {project.link !== '#' && (
                    <span className="text-blue-400 group-hover:text-blue-300 transition-colors flex items-center gap-1.5 text-sm font-semibold tracking-wide">
                      View Live <ChevronRight size={18} className="group-hover:translate-x-1.5 transition-transform duration-300" />
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-24 border-t border-slate-800/50">
          <motion.h2 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
            className="text-4xl font-bold mb-12 flex items-center gap-4"
          >
            <span className="p-3 bg-purple-500/10 rounded-xl border border-purple-500/20"><Terminal className="text-purple-400" size={28} /></span> 
            Technical Arsenal
          </motion.h2>
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8"
          >
            {/* Skill Card 1 */}
            <motion.div variants={fadeUp} whileHover={{ y: -5 }} className="bg-slate-900/40 backdrop-blur-md border border-slate-800 p-8 rounded-3xl hover:border-slate-600 transition-colors shadow-lg">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-800/50">
                <Cpu className="text-cyan-400" size={24} />
                <h3 className="text-xl font-semibold">Workflow & AI</h3>
              </div>
              <ul className="space-y-4 text-slate-400">
                {['AI Automations', 'n8n Workflows', 'Browser Automation', 'LLM Integrations'].map((skill, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-cyan-400/50"></div> {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
            
            {/* Skill Card 2 */}
            <motion.div variants={fadeUp} whileHover={{ y: -5 }} className="bg-slate-900/40 backdrop-blur-md border border-slate-800 p-8 rounded-3xl hover:border-slate-600 transition-colors shadow-lg">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-800/50">
                <Layout className="text-purple-400" size={24} />
                <h3 className="text-xl font-semibold">Web & Design</h3>
              </div>
              <ul className="space-y-4 text-slate-400">
                {['Webflow', 'React & Next.js', 'Tailwind CSS', 'UI/UX Architecture'].map((skill, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-purple-400/50"></div> {skill}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Skill Card 3 */}
            <motion.div variants={fadeUp} whileHover={{ y: -5 }} className="bg-slate-900/40 backdrop-blur-md border border-slate-800 p-8 rounded-3xl hover:border-slate-600 transition-colors shadow-lg">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-800/50">
                <Database className="text-blue-400" size={24} />
                <h3 className="text-xl font-semibold">Backend & Data</h3>
              </div>
              <ul className="space-y-4 text-slate-400">
                {['Node.js & Python', 'PostgreSQL & Redis', 'REST APIs', 'Docker'].map((skill, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-blue-400/50"></div> {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 border-t border-slate-800/50">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 rounded-[2.5rem] p-12 md:p-20 text-center overflow-hidden relative shadow-2xl"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[200%] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-500/15 via-transparent to-transparent pointer-events-none"></div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6 relative z-10 bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">Let's build something epic.</h2>
            <p className="text-slate-400 mb-12 max-w-2xl mx-auto relative z-10 text-lg font-light leading-relaxed">
              Whether you need a dynamic Webflow site, a complex n8n automation, or custom software, my inbox is always open. Let's discuss your next massive project.
            </p>
            <div className="flex flex-wrap justify-center gap-6 relative z-10">
              <motion.a 
                whileHover={{ scale: 1.05, y: -5 }} whileTap={{ scale: 0.95 }}
                href="https://wa.me/+916284495403" target="_blank" rel="noreferrer" 
                className="flex items-center gap-3 px-8 py-4 bg-[#25D366] hover:bg-[#20b858] rounded-2xl transition-colors duration-300 text-slate-950 font-bold shadow-lg shadow-[#25D366]/20 cursor-none"
              >
                <Whatsapp size={22} /> Chat on WhatsApp
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.05, y: -5 }} whileTap={{ scale: 0.95 }}
                href="mailto:shubhaggarwal008@gmail.com" 
                className="p-4 bg-slate-900/80 backdrop-blur-sm hover:bg-blue-600 rounded-2xl transition-colors duration-300 text-white shadow-lg border border-slate-700 hover:border-blue-500 cursor-none"
              >
                <Mail size={24} />
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.05, y: -5 }} whileTap={{ scale: 0.95 }}
                href="https://github.com/shubh-projects" target="_blank" rel="noreferrer" 
                className="p-4 bg-slate-900/80 backdrop-blur-sm hover:bg-slate-800 rounded-2xl transition-colors duration-300 text-white shadow-lg border border-slate-700 hover:border-slate-500 cursor-none"
              >
                <Github size={24} />
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.05, y: -5 }} whileTap={{ scale: 0.95 }}
                href="https://www.linkedin.com/in/shubh-aggarwal-561072241/" target="_blank" rel="noreferrer" 
                className="p-4 bg-slate-900/80 backdrop-blur-sm hover:bg-[#0A66C2] rounded-2xl transition-colors duration-300 text-white shadow-lg border border-slate-700 hover:border-[#0A66C2] cursor-none"
              >
                <Linkedin size={24} />
              </motion.a>
            </div>
          </motion.div>
        </section>
      </main>
    </div>
  );
}