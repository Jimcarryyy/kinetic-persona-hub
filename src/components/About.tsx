
import { User, Award, Coffee, Heart } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: User, label: 'Years Experience', value: '4+' },
    { icon: Award, label: 'Projects Completed', value: '20+' },
    { icon: Coffee, label: 'Cups of Coffee', value: '1000+' },
    { icon: Heart, label: 'Happy Clients', value: '10+' },
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 gradient-text">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From hands-on builds to production automations—here&apos;s how I work and what I care about
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-slide-in-left">
            <div className="glass-card p-8 rounded-2xl">
              <h3 className="text-2xl font-semibold mb-6 text-primary">My Story</h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Hi there! I&apos;m Jimcarry—a full-stack developer with 4+ years of professional experience shipping
                  web products and the messy, real-world systems behind them. I still love a clean UI, but lately my
                  deepest work has been in workflow automation and integrations: Make, n8n, Zapier, Task Magic (RPA),
                  and the APIs that keep data moving where it needs to go.
                </p>
                <p>
                  My most recent role was a confidential remote engagement with an Australian client. I owned a
                  Facebook Marketplace automation effort end to end—designing, hardening, and shipping it to
                  production on my own—while keeping their company site healthy with new features, steady upgrades,
                  and production bug fixes when things got busy.
                </p>
                <p>
                  I use AI-assisted workflows in my day-to-day the same way I&apos;d use any other tool: to speed up
                  research, implementation drafts, and quality checks. The accountability is still mine—I review,
                  test, and stand behind what ships.
                </p>
                <p>
                  When I step away from client work, I&apos;m usually poking at new tech, tinkering on side projects,
                  or refilling the coffee mug. If that sounds like your kind of collaborator, I&apos;d love to hear
                  what you&apos;re building.
                </p>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="animate-slide-in-right">
            <div className="grid grid-cols-2 gap-6">
              {stats.map(({ icon: Icon, label, value }) => (
                <div key={label} className="glass-card p-6 rounded-xl text-center group hover:scale-105 transition-all duration-300">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">{value}</div>
                  <div className="text-sm text-muted-foreground">{label}</div>
                </div>
              ))}
            </div>

            <div className="mt-8 glass-card p-6 rounded-xl">
              <h4 className="text-lg font-semibold mb-4 text-primary">Core Values</h4>
              <div className="grid grid-cols-2 gap-4 text-sm">
                {['Innovation', 'Quality', 'Collaboration', 'Growth'].map((value) => (
                  <div key={value} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-muted-foreground">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
