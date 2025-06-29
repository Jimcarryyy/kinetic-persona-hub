
import { ExternalLink, Eye, Zap } from 'lucide-react';
import { useState } from 'react';
import AroundTheWorld from '../image/aroundtheworld.png';
import CarNation from '../image/carnation.png';
import Carrental from '../image/carrental.png';
import Cohen from '../image/cohen.png';
import Elevate from '../image/elevate.png';
import Gkggc from '../image/gkggc.png';
import GYM from '../image/gym.png';
import Hotel from '../image/hotel.png';
import Line from '../image/line.png';
import LogSystem from '../image/logsystemimage.jpg';
import Movie from '../image/movie.png';
import Neuro from '../image/neuro.png';
import Orderuk from '../image/orderuk.png';
import Patient from '../image/patient.png';
import PixelDev from '../image/pixeldev.png';
import Rights from '../image/rights.png';
import Spt from '../image/spt.png';
import Thrive from '../image/thrive.png';
import Veritas from '../image/veritas.png';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [visibleCount, setVisibleCount] = useState(6);

  const projects = [
    {
      id: 1,
      title: 'Pizel Dev Code',
      description: 'At Pixel DevCode, we specialize in creating Pixel Perfect Websites',
      longDescription: 'At Pixel DevCode, we specialize in creating Pixel Perfect Websites that are not only visually stunning but also highly functional. Our team of expert designers and developers ensures every element on your website is meticulously crafted, down to the smallest detail, to provide a flawless user experience across all devices.',
      image: PixelDev,
      technologies: ['HTML', 'CSS', 'JS', 'PHP', 'MySql', 'Wordpress'],
      category: 'fullstack',
      live: 'https://pixeldevcode.com/',
      featured: true,
    },
    {
      id: 2,
      title: 'Around The World',
      description: 'Make learning about the world an unforgettable adventure',
      longDescription: 'I absolutely LOVE these stories. The content is amazing and the stories are so original and engaging. They are absolute treasures.',
      image: AroundTheWorld,
      technologies: ['HTML', 'CSS', 'JS', 'PHP', 'MySQL', 'Wordpress'],
      category: 'fullstack',
      live: 'https://aroundtheworldstories.com/',
      featured: true,
    },
    {
      id: 3,
      title: 'SPT Skin bins',
      description: 'At SPT Skip Bins, our dedication to service sets us apart.',
      longDescription: 'At SPT Skip Bins, our dedication to service sets us apart. We are your truly local bin company, deeply rooted in our Auckland community. Our team, from our owners to our drivers and office staff, is committed to delivering top-notch service that is both friendly and reliable. Guided by our core values of reliability, quality, and honesty, we go above and beyond to serve our customers.',
      image: Spt,
      technologies: ['HTML', 'CSS', 'JS', 'PHP', 'MySQL', 'Wordpress'],
      category: 'fullstack',
      live: 'https://sptskipbins.co.nz/',
      featured: true,
    },
    {
      id: 4,
      title: 'Patent System',
      description: 'A modular interface framework inspired by the precision and structure of patent documentation.',
      longDescription:
        'Patent System is a robust, enterprise-grade design system built to streamline the development of large-scale applications. It includes a library of reusable, accessible UI components, well-defined design tokens, and fully integrated documentation using Storybook. Designed with scalability and consistency in mind, it empowers teams to build cohesive user interfaces faster and more efficiently.',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=800&h=600',
      technologies: ['HTML', 'CSS', 'JS', 'PHP', 'MySQL', 'Wordpress'],
      category: 'fullstack',
      featured: false,
    },
    {
      id: 5,
      title: 'Cohen & Cohen',
      description: 'At Cohen & Cohen Law Group, we are committed to delivering exceptional legal services with a focus on family law.',
      longDescription:
        'At Cohen & Cohen Law Group, we are committed to delivering exceptional legal services with a focus on personal injury, criminal defense, and family law. With over 20 years of combined experience, our team of dedicated attorneys has successfully represented clients in various complex legal matters. ',
      image: Cohen,
      technologies: ['HTML', 'CSS', 'JS', 'PHP', 'MySQL', 'Wordpress'],
      category: 'fullstack',
      live: 'https://bptest25c30.wpenginepowered.com/',
      featured: false,
    },
    {
      id: 6,
      title: 'GK Green Garden Center',
      description: 'GK Green Garden is your one-stop destination for all your gardening needs, With a passion for plants and a commitment to quality.',
      longDescription:
        'GK Green Garden is your one-stop destination for all your gardening needs. With a passion for plants and a commitment to quality, we strive to provide you with the best selection of flowers, shrubs, trees, and gardening supplies.',
      image: Gkggc,
      technologies: ['HTML', 'CSS', 'JS'],
      category: 'frontend',
      live: 'https://jimmm32.github.io/GK%20GGC/',
      featured: false,
    },
    {
      id: 7,
      title: 'Car rentals',
      description: 'At Premium Car Rentals, we provide a wide range of top-notch vehicles tailored to meet your unique travel needs.',
      longDescription:
        'At Premium Car Rentals, we provide a wide range of top-notch vehicles tailored to meet your unique travel needs. Whether it’s a family trip, business travel, or just a weekend getaway, our cars are well-maintained and affordable.',
      image: Carrental,
      technologies: ['HTML', 'CSS', 'JS','JQEURY', 'AJAX', 'PHP', 'MySQL'],
      category: 'fullstack',
      live: 'http://carreservesite.fast-page.org/?i=1',
      featured: true,
    },
    {
      id: 8,
      title: 'Line Open Chat',
      description: 'Automated scheduling system for LINE Open Chat using UiPath RPA.',
      longDescription:
        'Line Open Chat is a fullstack automation solution that integrates LINE, a popular Japanese messaging app, with UiPath RPA to schedule and send pre-defined messages automatically. This system enables users to efficiently manage scheduled communications such as reminders, notes, and announcements directly through LINE Open Chat. It combines frontend control with backend automation using PHP, MySQL, and UiPath, streamlining repetitive messaging tasks and improving productivity in communication workflows.',
      image: Line,
      technologies: ['HTML', 'CSS', 'JS', 'PHP', 'MySQL', 'UI Path', 'RPA'],
      category: 'fullstack',
      featured: false,
    },
    {
      id: 9,
      title: 'Order UK',
      description: 'Order.UK simplifies the food ordering process. Browse through our diverse menu',
      longDescription:
        'Order.UK simplifies the food ordering process. Browse through our diverse menu, select your favorite dishes, and proceed to checkout. Your delicious meal will be on its way to your doorstep in no time!',
      image: Orderuk,
      technologies: ['HTML', 'CSS', 'JS', 'React + Vite'],
      category: 'frontend',
      live: 'https://order-app-1w1j.vercel.app/',
      featured: true,
    },
    {
      id: 10,
      title: 'Rights Ready Legal',
      description: 'Free Case Evaluation in Minutes. Get the justice you deserve with experienced attorneys who care about your outcome.',
      longDescription:
        'Free Case Evaluation in Minutes. Get the justice you deserve with experienced attorneys who care about your outcome.',
      image: Rights,
      technologies: ['HTML', 'Tailwind css', 'React + Vite'],
      category: 'frontend',
      live: 'https://rights-ready-legal-aid.vercel.app/',
      featured: true,
    },
    {
      id: 11,
      title: 'Student Log QR-based System',
      description: 'A real-time logging system using QR code scans for accurate student monitoring.',
      longDescription:
        'The Student Log QR-based System is a desktop application designed to streamline student attendance and monitoring through QR code technology. Students simply scan their unique QR codes upon entering and leaving school premises, allowing the system to automatically log timestamps. Built with PHP, MySQL, AJAX, and jQuery, the system features real-time data capture, user role management, attendance reports, and a responsive UI. This solution enhances security, minimizes manual errors, and promotes efficient record-keeping in educational institutions.',
      image: LogSystem,
      technologies: ['HTML', 'CSS', 'JS', 'JQUERY', 'AJAX', 'PHP', 'MySQL'],
      category: 'fullstack',
      featured: false,
    },
    {
      id: 12,
      title: 'Movie Reservation System',
      description: 'A desktop application for booking movie tickets with real-time seat availability.',
      longDescription:
        'The Movie Reservation System is a Java-based desktop app that allows users to browse movies, select showtimes, and reserve seats with a visual seating layout. Built with Java Swing and MySQL, it features admin control for adding movies and schedules, ticket pricing management, and real-time reservation updates to avoid double bookings.',
      image: Movie,
      technologies: ['Java', 'Java Swing', 'MySQL'],
      category: 'desktop',
      featured: false,
    },
    {
      id: 13,
      title: 'Hotel Reservation System',
      description: 'A full-featured booking system for managing hotel rooms and guest reservations.',
      longDescription:
        'This Hotel Reservation System provides a desktop solution for managing room bookings, guest check-ins, and check-outs. Developed in Java Swing with MySQL backend, it supports room availability tracking, invoice generation, guest information management, and reservation history. Ideal for small to medium-sized hotel businesses.',
      image: Hotel,
      technologies: ['Java', 'Java Swing', 'MySQL'],
      category: 'desktop',
      featured: false,
    },
    {
      id: 14,
      title: 'Patient Monitoring System',
      description: 'A Java-based system for recording and tracking patient health data.',
      longDescription:
        'The Patient Monitoring System is designed for clinics and hospitals to track patient health metrics over time. Built using Java Swing and MySQL, it allows for storing patient details, medical history, vitals monitoring, doctor assignments, and visit logs — all within an easy-to-use desktop interface.',
      image: Patient,
      technologies: ['Java', 'Java Swing', 'MySQL'],
      category: 'desktop',
      featured: false,
    },
    {
      id: 15,
      title: 'GYM Management System',
      description: 'Manage memberships, trainers, and subscriptions in one gym software.',
      longDescription:
        'The GYM Management System streamlines day-to-day gym operations such as member registration, attendance tracking, trainer assignments, and payment records. This Java Swing-based desktop application uses MySQL for data persistence and offers tools for managing packages, schedules, and gym member profiles.',
      image: GYM,
      technologies: ['Java', 'Java Swing', 'MySQL'],
      category: 'desktop',
      featured: false,
    },
    {
      id: 16,
      title: 'Car Nation (rental system)',
      description: 'A car rental management desktop app built for smooth vehicle bookings.',
      longDescription:
        'Car Nation is a car rental system developed using Java Swing and MySQL, aimed at managing vehicle reservations, customer data, rental periods, and pricing. The system provides admin tools to add and update cars, track availability, and generate rental reports, helping rental businesses automate their processes efficiently.',
      image: CarNation,
      technologies: ['Java', 'Java Swing', 'MySQL'],
      category: 'desktop',
      featured: false,
    },
    {
      id: 17,
      title: 'Veritas Legal',
      description: 'Premier legal representation combining decades of experience with innovative approaches',
      longDescription:
        'Premier legal representation combining decades of experience with innovative approaches to achieve exceptional outcomes for our clients.',
      image: Veritas,
      technologies: ['HTML', 'Tailwind css', 'JS', 'React + Vite'],
      category: 'frontend',
      live: 'https://veritas-visual-justice.vercel.app/',
      featured: true,
    },
    {
      id: 18,
      title: 'NeuroFlow AI',
      description: 'Transform your productivity with AI-powered automation, intelligent scheduling.',
      longDescription:
        'Transform your productivity with AI-powered automation, intelligent scheduling, and seamless workflow optimization for modern teams.',
      image: Neuro,
      technologies: ['HTML', 'Tailwind css', 'JS', 'React + Vite'],
      category: 'frontend',
      live: 'https://neuroflow-genesis-page.vercel.app/',
      featured: true,
    },
    {
      id: 19,
      title: 'Trive online store',
      description: 'We are passionate about providing exceptional products and outstanding customer service.',
      longDescription:
        'Founded in 2020, ThriveStore began as a small team with a big vision: to create the most customer-centric e-commerce experience possible. We started by carefully curating products that we ourselves would love to own and use.',
      image: Thrive,
      technologies: ['HTML', 'Tailwind css', 'JS', 'React + Vite'],
      category: 'frontend',
      live: 'https://thrive-online-store.vercel.app/',
      featured: true,
    },
    {
      id: 20,
      title: 'Elevate',
      description: 'Join thousands of learners and creators on Elevate. Master new skills, build your expertise.',
      longDescription:
        'Join thousands of learners and creators on Elevate. Master new skills, build your expertise, and transform your career with our premium courses.',
      image: Elevate,
      technologies: ['HTML', 'Tailwind css', 'JS', 'React + Vite'],
      category: 'frontend',
      live: 'https://elevate-learn-brightly.vercel.app/',
      featured: true,
    },
    
  ];

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'fullstack', label: 'Full Stack' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'desktop', label: 'Desktop' },
  ];

  const filtered = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const filteredProjects = filtered.slice(0, visibleCount);
  const canShowMore = visibleCount < filtered.length;
  const canShowLess = visibleCount > 6;

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 gradient-text">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore my latest work and creative solutions
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'bg-primary text-primary-foreground shadow-lg'
                  : 'glass-card hover:scale-105'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="glass-card rounded-2xl overflow-hidden group hover:scale-105 transition-all duration-500 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Overlay buttons */}
                <div className="absolute top-4 right-4 space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass-card p-2 rounded-full hover:scale-110 transition-transform duration-200"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>

                {project.featured && (
                  <div className="absolute top-4 left-4">
                    <div className="flex items-center space-x-1 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold">
                      <Zap className="w-3 h-3" />
                      <span>Featured</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-primary">{project.title}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  {project.live ? (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors duration-200 flex-1 justify-center"
                    >
                      <Eye className="w-4 h-4" />
                      <span className="text-sm">Demo</span>
                    </a>
                  ) : (
                    <button
                      disabled
                      className="flex items-center space-x-2 px-4 py-2 bg-muted text-muted-foreground rounded-lg cursor-not-allowed flex-1 justify-center"
                    >
                      <Eye className="w-4 h-4 opacity-60" />
                      <span className="text-sm">Demo Unavailable</span>
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Show More / Show Less Buttons */}
      {(canShowMore || canShowLess) && (
        <div className="flex flex-col items-center mt-8 space-y-4">
          {canShowMore && (
            <button
              onClick={() => setVisibleCount((prev) => prev + 3)}
              className="flex items-center gap-2 px-5 py-3 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors"
            >
              <span>Show More</span>
              <svg
                className="w-5 h-5 animate-bounce"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          )}

          {canShowLess && (
            <button
              onClick={() => setVisibleCount(6)}
              className="text-sm text-muted-foreground hover:underline"
            >
              Show Less
            </button>
          )}
        </div>
      )}

    </section>
  );
};

export default Projects;
