
import { useState } from 'react';
import { Code, Palette, Database, Cloud, Smartphone, Zap } from 'lucide-react';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('frontend');

  const skillCategories = {
    frontend: {
      icon: Code,
      title: 'Frontend Development',
      skills: [
        { name: 'HTML', level: 100, color: 'from-orange-500 to-yellow-400' },
        { name: 'CSS', level: 90, color: 'from-blue-500 to-blue-300' },
        { name: 'JavaScript', level: 70, color: 'from-yellow-500 to-yellow-300' },
        { name: 'jQuery', level: 70, color: 'from-indigo-500 to-indigo-300' },
        { name: 'React.js', level: 80, color: 'from-blue-400 to-cyan-400' },
        { name: 'Vue.js', level: 75, color: 'from-green-500 to-emerald-400' },
        { name: 'Tailwind CSS', level: 92, color: 'from-cyan-500 to-teal-500' },
        { name: 'Bootstrap CSS', level: 92, color: 'from-cyan-500 to-teal-700' },
        { name: 'Next.js', level: 50, color: 'from-gray-800 to-gray-600' },
        { name: 'Nuxt.js', level: 55, color: 'from-lime-500 to-green-400' },
        { name: 'SASS/SCSS', level: 70, color: 'from-pink-500 to-red-400' },
        { name: 'TypeScript', level: 60, color: 'from-blue-600 to-blue-400' },
      ]
    },
    backend: {
      icon: Database,
      title: 'Backend Development',
      skills: [
        { name: 'PHP', level: 75, color: 'from-indigo-600 to-purple-400' },
        { name: 'Java', level: 80, color: 'from-red-600 to-orange-400' },
        { name: 'C++', level: 40, color: 'from-gray-700 to-gray-500' },
        { name: 'Python', level: 35, color: 'from-yellow-500 to-amber-400' },
        { name: 'Node.js', level: 60, color: 'from-green-700 to-lime-400' },
        { name: 'MySQL', level: 90, color: 'from-teal-500 to-blue-500' },
      ]
    },
    tools: {
      icon: Cloud,
      title: 'Tools & DevOps',
      skills: [
        { name: 'WordPress/CMS', level: 75, color: 'from-blue-700 to-indigo-500' },
        { name: 'Git', level: 70, color: 'from-orange-600 to-red-600' },
        { name: 'GitHub', level: 80, color: 'from-gray-800 to-gray-500' },
        { name: 'Docker', level: 60, color: 'from-blue-600 to-blue-400' },
        { name: 'CI/CD Pipelines', level: 100, color: 'from-green-600 to-emerald-600' },
        { name: 'CMD', level: 70, color: 'from-gray-700 to-gray-400' },
        { name: 'SSH Configs', level: 90, color: 'from-slate-700 to-slate-400' },
        { name: 'RPA', level: 50, color: 'from-purple-600 to-indigo-400' },
      ]
    },
    design: {
      icon: Palette,
      title: 'Design & UX',
      skills: [
        { name: 'Figma', level: 82, color: 'from-purple-500 to-indigo-500' },
        { name: 'Prototyping', level: 90, color: 'from-orange-500 to-red-500' },
        { name: 'User Research', level: 80, color: 'from-teal-500 to-cyan-500' },
        { name: 'Wireframing', level: 90, color: 'from-gray-600 to-gray-400' },
        { name: 'Design Systems', level: 87, color: 'from-indigo-500 to-blue-500' },
      ]
    }
  };

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background via-muted/5 to-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 gradient-text">Skills & Expertise</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive technical skills across the full development stack
          </p>
        </div>

        {/* Category Selector */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.entries(skillCategories).map(([key, category]) => {
            const Icon = category.icon;
            return (
              <button
                key={key}
                onClick={() => setActiveCategory(key)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === key
                    ? 'bg-primary text-primary-foreground shadow-lg scale-105'
                    : 'glass-card hover:scale-105'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span>{category.title}</span>
              </button>
            );
          })}
        </div>

        {/* Skills Display */}
        <div className="glass-card p-8 rounded-2xl">
          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories[activeCategory].skills.map((skill, index) => (
              <div
                key={skill.name}
                className="skill-card group animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold text-lg">{skill.name}</h3>
                  <span className="text-sm text-muted-foreground font-mono">{skill.level}%</span>
                </div>
                
                {/* Progress Bar */}
                <div className="relative h-3 bg-muted rounded-full overflow-hidden">
                  <div
                    className={`absolute top-0 left-0 h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out group-hover:animate-pulse`}
                    style={{ 
                      width: `${skill.level}%`,
                      animationDelay: `${index * 0.1}s`
                    }}
                  />
                </div>

                {/* Skill level indicator */}
                <div className="flex justify-between mt-2 text-xs text-muted-foreground">
                  <span>Beginner</span>
                  <span>Expert</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Skills Tags */}
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-semibold mb-6 text-primary">Technologies I Work With</h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {[
              'HTML', 'CSS', 'JavaScript', 'jQuery', 'React.js', 'Vue.js', 'Next.js', 'Nuxt.js', 'SASS/SCSS',
              'TypeScript', 'PHP', 'Java', 'C++', 'Python', 'Node.js', 'MySQL',
              'WordPress/CMS', 'Git', 'GitHub', 'Docker', 'CI/CD Pipelines', 'CMD', 'SSH Configs', 'RPA','Figma'
            ].map((tech, index) => (
              <span
                key={tech}
                className="px-4 py-2 glass-card rounded-full text-sm font-medium hover:scale-105 transition-all duration-200 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
