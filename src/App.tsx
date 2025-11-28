import { useState, useEffect } from 'react';
import { Github, Linkedin, MessageCircle, Code2, Database, Server, Layout, ExternalLink, Terminal, Menu, X, } from 'lucide-react';
import { Background3D } from './Background3D';
import { ThemeToggle } from './ThemeToggle';
import profilePhoto from './profile-photo.png';
// import { FaWhatsapp } from "react-icons/fa";
function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const skills = [
    { name: 'MongoDB', icon: Database, color: 'from-green-400 to-emerald-500' },
    { name: 'Express.js', icon: Server, color: 'from-cyan-400 to-blue-500' },
    { name: 'React', icon: Code2, color: 'from-blue-400 to-cyan-500' },
    { name: 'Node.js', icon: Terminal, color: 'from-lime-400 to-green-500' },
  ];

  const projects = [
    {
      title: 'AI Stock Guru',
      description: 'AI-powered stock market analysis platform providing real-time insights, predictions, and personalized investment recommendations.',
      tech: ['React', 'AI/ML', 'API Integration', 'Chart.js'],
      link: 'https://aistockguru.netlify.app/'
    },
    {
      title: 'Student Performance Analysis Dashboard',
      description: 'Analytics dashboard for students performance metrics with real-time data visualization and reporting.',
      tech: ['React', 'Express', 'PostgreSQL', 'Chart.js'],
      link: 'https://utthan-landing-page-with-examinatio-alpha.vercel.app/'
    },
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with payment integration, inventory management, and real-time updates.',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      link: '#'
    },
  ];

  const services = [
    {
      title: 'Full-Stack Development',
      description: 'End-to-end web application development using MERN stack technologies.',
      icon: Code2,
    },
    {
      title: 'API Development',
      description: 'RESTful API design and implementation with Express.js and Node.js.',
      icon: Server,
    },
    {
      title: 'Database Design',
      description: 'Scalable database architecture with MongoDB and SQL databases.',
      icon: Database,
    },
    {
      title: 'UI/UX Implementation',
      description: 'Responsive and interactive user interfaces with React and modern CSS.',
      icon: Layout,
    },
  ];

  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Services', id: 'services' },
    { name: 'Projects', id: 'projects' },
    // { name: 'Contact', id: 'contact' },
  ];

  return (
    <div className="min-h-screen transition-colors duration-300 relative overflow-hidden"
      style={{
        color: 'var(--text-primary)'
      }}>
      {/* 3D Animated Background */}
      <Background3D />

      {/* Theme Toggle Button */}
      <ThemeToggle />

      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-cyan-500/30">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold">
              <span className="bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent neon-text">
                SS
              </span>
            </div>

            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-all duration-300 hover:text-cyan-400 ${activeSection === item.id ? 'text-cyan-400 neon-text' : ''
                    }`}
                  style={{ color: activeSection === item.id ? '' : 'var(--text-secondary)' }}
                >
                  {item.name}
                </button>
              ))}
            </div>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-cyan-400 hover:bg-cyan-500/10 rounded-lg transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-cyan-500/30 pt-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left py-3 px-4 rounded-lg transition-all duration-300 ${activeSection === item.id
                    ? 'text-cyan-400 bg-cyan-500/10 neon-text'
                    : 'hover:text-cyan-400 hover:bg-cyan-500/5'
                    }`}
                  style={{ color: activeSection === item.id ? '' : 'var(--text-secondary)' }}
                >
                  {item.name}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Cursor glow effect */}
      <div
        className="pointer-events-none fixed inset-0 z-30 transition duration-300"
        style={{
          background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(0, 255, 255, 0.08), transparent 80%)`,
        }}
      />

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center px-6 py-20">
        <div className="relative z-10 max-w-5xl mx-auto">
          {/* Profile Photo */}
          <div className="flex justify-center mb-8">
            <div className="profile-image-container">
              <img
                src={profilePhoto}
                alt="Sarvesh Singh"
                className="profile-image w-40 h-40 md:w-48 md:h-48 object-cover"
              />
            </div>
          </div>

          <div className="text-center">
            <div className="mb-8 inline-block">
              <h1 className="text-6xl md:text-8xl font-bold mb-4 text-gradient-name animate-pulse">
                Sarvesh Singh ✨
              </h1>
              <div className="h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent neon-line" />
            </div>

            <p className="text-xl md:text-2xl mb-6 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              A passionate <span className="text-cyan-400 neon-text font-semibold">Software Developement Engineer</span>
            </p>

            <p className="text-lg md:text-xl mb-4 max-w-3xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
              Navigating the realms of databases, server-side logic, and seamless user interfaces.
            </p>

            <p className="text-lg mb-6" style={{ color: 'var(--text-secondary)' }}>
              💻 I specialize in MERN stack and AIML technologies and enjoy building scalable, real-world web applications.
            </p>

            <p className="text-lg text-pink-400 neon-text-pink mb-12">
              ❤️‍🔥 Beyond coding, I love collaborating with like-minded individuals and innovative teams.
            </p>

            <div className="flex gap-6 justify-center mb-12">
              <a
                href="https://github.com/sarvesh9137"
                target="_blank"
                rel="noopener noreferrer"
                className="neon-button p-4 rounded-full hover:scale-110 transition-transform duration-300"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/sarvesh-singh-935b8a250"
                target="_blank"
                rel="noopener noreferrer"
                className="neon-button p-4 rounded-full hover:scale-110 transition-transform duration-300"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              {/* <a
                href="mailto:sarvesh9137@gmail.com"
                className="neon-button p-4 rounded-full hover:scale-110 transition-transform duration-300"
              >
                <Mail className="w-6 h-6" />
              </a> */}
              <a
                href="https://wa.me/919137986824"
                target="_blank"
                rel="noopener noreferrer"
                className="neon-button p-4 rounded-full hover:scale-110 transition-transform duration-300"
              >
                <MessageCircle className="w-6 h-6" /> {/* WhatsApp-like icon */}
              </a>
            </div>

            <div className="inline-block">
              <button className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-pink-500 rounded-lg font-semibold text-lg overflow-hidden transition-all duration-300 hover:scale-105 neon-button-large">
                <span className="relative z-10">🚀 Let's Create Something Amazing!</span>
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-cyan-400 rounded-full flex justify-center p-2">
            <div className="w-1 h-3 bg-cyan-400 rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
            <span className="bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent neon-text">
              Tech Stack
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <div
                  key={index}
                  className="group relative p-8 rounded-xl border border-cyan-500/30 hover:border-cyan-400 transition-all duration-300 neon-card"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-300`} />
                  <div className="relative z-10">
                    <Icon className="w-12 h-12 mb-4 text-cyan-400 group-hover:scale-110 transition-transform duration-300" />
                    <h3 className="text-xl font-semibold text-white">{skill.name}</h3>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="relative py-20 px-6 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
            <span className="bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-transparent neon-text-pink">
              Services
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="group relative p-8 rounded-xl border border-pink-500/30 hover:border-pink-400 transition-all duration-300 neon-card-pink"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-300" />
                  <div className="relative z-10">
                    <Icon className="w-12 h-12 mb-4 text-pink-400 group-hover:scale-110 transition-transform duration-300" />
                    <h3 className="text-2xl font-semibold mb-3 group-hover:text-cyan-400 transition-colors" style={{ color: 'var(--text-primary)' }}>
                      {service.title}
                    </h3>
                    <p className="leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{service.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
            <span className="bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent neon-text">
              Featured Projects
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <a
                key={index}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-6 rounded-xl border border-pink-500/30 hover:border-pink-400 transition-all duration-300 neon-card-pink block"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-300" />

                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <Layout className="w-8 h-8 text-pink-400" />
                    <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-cyan-400 transition-colors" />
                  </div>

                  <h3 className="text-xl font-semibold mb-3 group-hover:text-cyan-400 transition-colors" style={{ color: 'var(--text-primary)' }}>
                    {project.title}
                  </h3>

                  <p className="mb-4 text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 text-xs bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
            <span className="bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-transparent neon-text-pink">
              Get In Touch
            </span>
          </h2>

          <div className="text-center mb-12">
            <p className="text-xl mb-8 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>

            <div className="flex gap-6 justify-center mb-12">
              <a
                href="https://github.com/sarvesh9137"
                target="_blank"
                rel="noopener noreferrer"
                className="neon-button p-4 rounded-full hover:scale-110 transition-transform duration-300"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/sarvesh-singh-935b8a250"
                target="_blank"
                rel="noopener noreferrer"
                className="neon-button p-4 rounded-full hover:scale-110 transition-transform duration-300"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="https://wa.me/919137986824"
                target="_blank"
                rel="noopener noreferrer"
                className="neon-button p-4 rounded-full hover:scale-110 transition-transform duration-300"
              >
                <MessageCircle className="w-6 h-6" />
              </a>
            </div>

            <a
              href="mailto:sarvesh@example.com"
              className="inline-block group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-pink-500 rounded-lg font-semibold text-lg overflow-hidden transition-all duration-300 hover:scale-105 neon-button-large"
            >
              <span className="relative z-10">Send Me a Message</span>
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 px-6 border-t border-cyan-500/30">
        <div className="max-w-6xl mx-auto text-center">
          <p className="mb-4" style={{ color: 'var(--text-secondary)' }}>
            Built with <span className="text-pink-400 neon-text-pink">❤️</span> using React & Tailwind CSS
          </p>
          <p className="text-sm" style={{ color: 'var(--text-secondary)', opacity: 0.7 }}>
            ©Copyrights 2025 Sarvesh Singh. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
