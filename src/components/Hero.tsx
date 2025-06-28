
import { useState, useEffect } from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const texts = ['Full Stack Developer', 'Software Developer', 'Problem Solver', 'Creative Thinker'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const text = texts[currentIndex];
    let index = 0;
    setCurrentText('');

    const typing = setInterval(() => {
      setCurrentText(text.slice(0, index));
      index++;
      if (index > text.length) {
        clearInterval(typing);
      }
    }, 100);

    return () => clearInterval(typing);
  }, [currentIndex]);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background gradients */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl animate-float"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 left-40 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="animate-fade-in-up">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
            <span className="block text-shadow">Hello, I'm</span>
            <span className="block gradient-text mt-2 leading-snug">Jimcarry Omambak</span>
          </h1>
          
          <div className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground mb-8 h-12 flex items-center justify-center">
            <span className="border-r-2 border-primary pr-2 animate-pulse">
              {currentText}
            </span>
          </div>

          <p className="text-lg sm:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Passionate about creating exceptional digital experiences through innovative design 
            and cutting-edge technology. Let's build something amazing together.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button 
              onClick={scrollToAbout}
              className="magnetic-button glass-card px-8 py-4 rounded-full text-lg font-semibold text-primary border-2 border-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 group"
            >
              Explore My Work
              <ArrowDown className="inline ml-2 group-hover:translate-y-1 transition-transform duration-300" size={20} />
            </button>
            
            <a 
              href="#contact"
              className="magnetic-button px-8 py-4 rounded-full text-lg font-semibold bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Get In Touch
            </a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            {[
              { icon: Github, href: 'https://github.com/Jimcarryyy', label: 'GitHub' },
              { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
              { icon: Mail, href: 'mailto:jimcarryomambak0@gmail.com', label: 'Email' },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                className="glass-card p-3 rounded-full hover:scale-110 transition-all duration-300 group"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
              >
                <Icon className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
          <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
