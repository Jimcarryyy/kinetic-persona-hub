
import { User, Award, Coffee, Heart } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: User, label: 'Years Experience', value: '5+' },
    { icon: Award, label: 'Projects Completed', value: '50+' },
    { icon: Coffee, label: 'Cups of Coffee', value: '1000+' },
    { icon: Heart, label: 'Happy Clients', value: '25+' },
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 gradient-text">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover my journey, passion, and the driving force behind my creative work
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-slide-in-left">
            <div className="glass-card p-8 rounded-2xl">
              <h3 className="text-2xl font-semibold mb-6 text-primary">My Story</h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Hi there! I'm Alex, a passionate full-stack developer with over 5 years of experience 
                  creating digital solutions that make a difference. My journey began with a curiosity 
                  about how things work, which led me to the fascinating world of web development.
                </p>
                <p>
                  I specialize in modern web technologies and have a keen eye for design. My approach 
                  combines technical expertise with creative problem-solving to deliver exceptional 
                  user experiences that not only look great but perform flawlessly.
                </p>
                <p>
                  When I'm not coding, you'll find me exploring new technologies, contributing to 
                  open-source projects, or enjoying a good cup of coffee while sketching out ideas 
                  for my next project.
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
