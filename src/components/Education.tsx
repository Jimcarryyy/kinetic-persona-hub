
import { GraduationCap, Award, Book, Calendar } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      degree: 'Master of Computer Science',
      institution: 'Stanford University',
      year: '2019-2021',
      description: 'Specialized in Machine Learning and Web Technologies',
      achievements: ['Magna Cum Laude', 'Research Assistant', 'Dean\'s List'],
      icon: GraduationCap,
    },
    {
      degree: 'Bachelor of Software Engineering',
      institution: 'MIT',
      year: '2015-2019',
      description: 'Foundation in Computer Science and Software Development',
      achievements: ['Summa Cum Laude', 'CS Society President', 'Hackathon Winner'],
      icon: Book,
    },
  ];

  const certifications = [
    'AWS Certified Solutions Architect',
    'Google Cloud Professional',
    'React Advanced Certification',
    'UI/UX Design Specialist',
  ];

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background via-background to-muted/10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 gradient-text">Education</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            My academic journey and continuous learning path
          </p>
        </div>

        {/* Education Timeline */}
        <div className="relative mb-16">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary to-primary/30 rounded-full"></div>
          
          {educationData.map((item, index) => (
            <div key={index} className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
              <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                <div className="glass-card p-6 rounded-xl animate-fade-in-up group hover:scale-105 transition-all duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`flex items-center space-x-2 ${index % 2 === 0 ? 'flex-row-reverse space-x-reverse' : ''}`}>
                      <item.icon className="w-6 h-6 text-primary" />
                      <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        <span>{item.year}</span>
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-2 text-primary">{item.degree}</h3>
                  <h4 className="text-lg font-medium mb-3">{item.institution}</h4>
                  <p className="text-muted-foreground mb-4">{item.description}</p>
                  
                  <div className="space-y-2">
                    {item.achievements.map((achievement, i) => (
                      <div key={i} className="flex items-center space-x-2">
                        <Award className="w-4 h-4 text-primary flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Timeline dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg z-10 group-hover:scale-125 transition-transform duration-300"></div>
              
              <div className="w-1/2"></div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="glass-card p-8 rounded-2xl animate-fade-in-up">
          <h3 className="text-2xl font-semibold mb-6 text-center gradient-text">Certifications & Achievements</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {certifications.map((cert, index) => (
              <div key={index} className="neomorphism p-4 rounded-lg text-center group hover:shadow-lg transition-all duration-300">
                <Award className="w-8 h-8 text-primary mx-auto mb-2 group-hover:scale-110 transition-transform duration-300" />
                <p className="text-sm font-medium text-muted-foreground">{cert}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
