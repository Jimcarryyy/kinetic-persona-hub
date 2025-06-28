
import { CodeXml, GraduationCap, Award, Book, Calendar } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      degree: 'Primary Education',
      institution: 'Subabasbas Elementary School',
      year: '2008-2015',
      description:
        'Subabasbas Elementary School fostered my early academic growth by instilling core values, foundational skills, and a love for learning in a supportive public school environment.',
      achievements: [],
      icon: GraduationCap,
    },
    {
      degree: 'Secondary Education',
      institution: 'Marigondon National High School',
      year: '2015-2019',
      description:
        'Marigondon National High School provided a strong academic and character foundation, encouraging critical thinking, community involvement, and personal responsibility through diverse public education programs.',
      achievements: [],
      icon: GraduationCap,
    },
    {
      degree: 'Upper Secondary Education',
      institution: 'Benthel Asia School of Technology',
      year: '2019-2021',
      description:
        'Benthel Asia School of Technology commits itself to provide an environment where absorbent young people learn how to develop systems thinking and technological fluency, preparing students for higher education and innovation-driven careers.',
      achievements: ['with high honors'],
      icon: GraduationCap,
    },
    {
      degree: 'Pixel Dev Code',
      institution: 'Wordpress Developer',
      year: '2021-2023',
      description:
        'Worked as a WordPress developer in a small web development agency, building client websites daily using both custom-coded themes and popular builders like Elementor and Divi. Adapted to diverse project requirements, integrating plugins such as WooCommerce to deliver tailored, functional, and visually appealing websites.',
      achievements: ['Trusted developer'],
      icon: CodeXml,
    },
    {
      degree: 'Independent Contractor',
      institution: 'Fullstack Developer',
      year: '2023-2024',
      description:
        'Developed a fullstack automation system that integrates LINE Open Chat with UiPath RPA to schedule and send messages. This role enhanced my expertise in backend scripting, automation workflows, and system integration, enabling seamless message dispatch through robotic process automation.',
      achievements: ['Learned UI Path', 'Learned RPA', 'Learned Automation'],
      icon: CodeXml,
    },
    {
      degree: 'Independent Contractor',
      institution: 'Software Engineer',
      year: '2024-2025',
      description:
        'Served as a full-spectrum software engineer under NDA, independently managing the entire development lifecycle. Responsibilities included frontend and backend development, database architecture, API integrations, DevOps workflows, CI/CD pipelines, Dockerization, GitHub repository management, and server deployment. Operated as a one-man team ensuring seamless delivery and maintenance of multiple systems.',
      achievements: ['Learned system architecture', 'Learned CI/CD pipelines', 'Managing Multiple Sites', 'One-man Army'],
      icon: CodeXml,
    },
  ];


  const certifications = [
    'Frontend Specialist',
    'Java Expert',
    'React Advanced Certification',
    'One-man Army',
  ];

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background via-background to-muted/10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 gradient-text">Education and Experience</h2>
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
