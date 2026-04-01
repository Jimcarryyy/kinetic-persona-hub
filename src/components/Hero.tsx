import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 sm:px-6 lg:px-8"
    >
      {/* Animated background gradients */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 left-10 w-48 h-48 sm:w-72 sm:h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl animate-float" />
        <div className="absolute top-32 right-10 w-48 h-48 sm:w-72 sm:h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-10 left-20 w-48 h-48 sm:w-72 sm:h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl animate-float" style={{ animationDelay: '4s' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto py-20">
        <div className="animate-fade-in-up">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold mb-6 tracking-tight leading-tight">
            <span className="block text-shadow">Hello, I'm</span>
            <span className="block gradient-text mt-2 leading-snug">Jim Carry</span>
          </h1>

          <p className="text-sm sm:text-xl lg:text-2xl text-muted-foreground mb-6 max-w-2xl mx-auto leading-snug">
            Full-stack developer · Workflow automation & integrations
          </p>

          <p className="text-sm sm:text-lg text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            I build reliable web products and production-grade automations—Make, n8n, Zapier, RPA, and the APIs
            that stitch it all together—along with the sites those systems connect to. I like clear ownership, fast
            iteration, and shipping work that keeps running once it&apos;s live.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button
              onClick={scrollToAbout}
              className="magnetic-button glass-card px-6 sm:px-8 py-3 sm:py-4 rounded-full text-sm sm:text-lg font-semibold text-primary border-2 border-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 group"
            >
              Explore My Work
              <ArrowDown className="inline ml-2 group-hover:translate-y-1 transition-transform duration-300" size={18} />
            </button>

            <a
              href="#contact"
              className="magnetic-button px-6 sm:px-8 py-3 sm:py-4 rounded-full text-sm sm:text-lg font-semibold bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Get In Touch
            </a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-4 sm:space-x-6">
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
                <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-4 h-8 sm:w-6 sm:h-10 border-2 border-muted-foreground rounded-full flex justify-center">
          <div className="w-1 h-2 sm:h-3 bg-muted-foreground rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
