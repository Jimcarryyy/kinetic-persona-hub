import { Award, Calendar, CodeXml, GraduationCap } from 'lucide-react';

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
      achievements: ['With High Honors'],
      icon: GraduationCap,
    },
    {
      degree: 'Pixel Dev Code',
      institution: 'WordPress Developer',
      year: '2021-2023',
      description:
        'Worked as a WordPress developer in a small web development agency, building client websites daily using both custom-coded themes and popular builders like Elementor and Divi.',
      achievements: ['Trusted Developer'],
      icon: CodeXml,
    },
    {
      degree: 'Independent Contractor',
      institution: 'Fullstack Developer',
      year: '2023-2024',
      description:
        'Developed a fullstack automation system integrating LINE Open Chat with UiPath RPA for scheduled messaging. Gained experience in backend scripting, automation, and system integration.',
      achievements: ['Learned UiPath', 'RPA', 'Automation'],
      icon: CodeXml,
    },
    {
      degree: 'Independent Contractor',
      institution: 'Software Engineer',
      year: '2024-2025',
      description:
        'Served as a full-spectrum software engineer under NDA, handling frontend/backend, DevOps, CI/CD, Docker, and production deployment independently.',
      achievements: ['System Architecture', 'CI/CD Pipelines', 'Managing Multiple Sites', 'One-Man Army'],
      icon: CodeXml,
    },
  ];

  const certifications = [
    'Frontend Specialist',
    'Java Expert',
    'React Advanced Certification',
    'One-Man Army',
  ];

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background via-background to-muted/10">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 gradient-text">Education and Experience</h2>
          <p className="text-sm sm:text-base lg:text-xl text-muted-foreground max-w-3xl mx-auto">
            My academic journey and continuous learning path
          </p>
        </div>

        {/* Timeline */}
        <div className="relative mb-16">
          {/* Timeline line */}
          <div className="hidden sm:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary to-primary/30 rounded-full" />

          {educationData.map((item, index) => (
            <div
              key={index}
              className={`relative flex flex-col sm:flex-row ${
                index % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'
              } items-center sm:items-start gap-6 mb-12`}
            >
              <div className={`w-full sm:w-1/2 px-2 sm:px-4 ${index % 2 === 0 ? 'sm:pr-8 text-right sm:text-right' : 'sm:pl-8 sm:text-left text-left'}`}>
                <div className="glass-card p-4 sm:p-6 rounded-xl animate-fade-in-up group hover:scale-[1.02] transition-transform duration-300">
                  <div className="flex items-center justify-between mb-4 flex-wrap">
                    <div className={`flex items-center space-x-2 ${index % 2 === 0 ? 'flex-row-reverse space-x-reverse sm:flex-row sm:space-x-2' : ''}`}>
                      <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                      <div className="flex items-center space-x-1 text-xs sm:text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        <span>{item.year}</span>
                      </div>
                    </div>
                  </div>

                  <h3 className="text-base sm:text-xl font-semibold mb-1 text-primary">{item.degree}</h3>
                  <h4 className="text-sm sm:text-lg font-medium mb-3">{item.institution}</h4>
                  <p className="text-xs sm:text-sm text-muted-foreground mb-4 leading-relaxed">{item.description}</p>

                  <div className="space-y-1">
                    {item.achievements.map((achievement, i) => (
                      <div key={i} className="flex items-center space-x-2">
                        <Award className="w-4 h-4 text-primary flex-shrink-0" />
                        <span className="text-xs sm:text-sm text-muted-foreground">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Dot for timeline (visible only on sm+) */}
              <div className="hidden sm:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg z-10" />

              <div className="hidden sm:block w-1/2" />
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="glass-card p-6 sm:p-8 rounded-2xl animate-fade-in-up">
          <h3 className="text-xl sm:text-2xl font-semibold mb-6 text-center gradient-text">Certifications & Achievements</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="neomorphism p-3 sm:p-4 rounded-lg text-center group hover:shadow-lg transition-all duration-300"
              >
                <Award className="w-6 h-6 sm:w-8 sm:h-8 text-primary mx-auto mb-2 group-hover:scale-110 transition-transform duration-300" />
                <p className="text-xs sm:text-sm font-medium text-muted-foreground">{cert}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
