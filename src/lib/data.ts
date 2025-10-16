import type { Service, BlogPost, JobOpening, TeamMember, Client } from './types';
import { HeartPulse, ShieldCheck, Cpu, Briefcase, Building, Code } from 'lucide-react';

// Using a mock async function to simulate fetching data
const simulateFetch = <T,>(data: T): Promise<T> => 
  new Promise(resolve => setTimeout(() => resolve(data), 50));

export const services: Service[] = [
  {
    id: '1',
    title: 'Healthcare Solutions',
    description: 'Innovative strategies to improve patient outcomes and operational efficiency.',
    longDescription: 'Our Healthcare Solutions service provides comprehensive consulting for medical institutions. We focus on digital transformation, patient care optimization, and regulatory compliance to help you navigate the complex healthcare landscape.',
    icon: HeartPulse,
    image: 'service-healthcare',
  },
  {
    id: '2',
    title: 'Project Accreditation',
    description: 'Expert guidance to achieve and maintain industry-standard certifications.',
    longDescription: 'We guide organizations through the entire accreditation process, from readiness assessment to final survey. Our experts ensure you meet all requirements for standards like ISO, JCAHO, and more, securing your reputation for quality and excellence.',
    icon: ShieldCheck,
    image: 'service-accreditation',
  },
  {
    id: '3',
    title: 'IT Consultation',
    description: 'Cutting-edge IT services to modernize your infrastructure and workflows.',
    longDescription: 'Our IT Consultation services cover everything from cloud strategy and cybersecurity to custom software development. We help you leverage technology to drive growth, enhance security, and streamline operations for a competitive edge.',
    icon: Cpu,
    image: 'service-it',
  },
];

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'digital-transformation-in-healthcare',
    title: 'The Future is Now: Digital Transformation in Healthcare',
    author: 'Dr. Jane Doe',
    date: '2024-07-15',
    image: 'blog-post-1',
    excerpt: 'Exploring the impact of technology on patient care and hospital management. How AI and IoT are reshaping the industry.',
    content: '<p>The healthcare industry is undergoing a seismic shift, driven by rapid advancements in technology. From electronic health records (EHRs) to AI-powered diagnostics, digital transformation is not just a buzzword; it\'s a fundamental change in how healthcare is delivered and managed.</p><p>One of the most significant changes is the adoption of telehealth. The ability to consult with patients remotely has proven invaluable, offering convenience for patients and efficiency for providers. Moreover, wearable devices and IoT sensors are providing continuous health monitoring, enabling proactive care and better management of chronic conditions.</p><p>Artificial intelligence is another game-changer. Machine learning algorithms can analyze medical images with a high degree of accuracy, assist in drug discovery, and predict patient outcomes based on historical data. This not only improves diagnostic speed and accuracy but also personalizes treatment plans for better results.</p><p>However, this transformation is not without its challenges. Data security and privacy are paramount, requiring robust cybersecurity measures. Interoperability between different systems also remains a hurdle that the industry must overcome to realize the full potential of a connected healthcare ecosystem.</p><p>At Synergy Consult, we help healthcare organizations navigate these complexities, implementing tailored IT strategies that enhance patient care while ensuring data integrity and compliance. The future of healthcare is digital, and we are here to help you lead the way.</p>',
  },
  {
    id: '2',
    slug: 'navigating-project-accreditation',
    title: 'A Leader\'s Guide to Navigating Project Accreditation',
    author: 'John Smith',
    date: '2024-06-28',
    image: 'blog-post-2',
    excerpt: 'A step-by-step guide to achieving project accreditation and why it matters for your business reputation.',
    content: '<p>Project accreditation is a formal recognition that a company or individual is competent to perform specific processes, tasks, or jobs. For any business, achieving accreditation is a hallmark of quality and a powerful differentiator in a crowded marketplace.</p><h2>Why Pursue Accreditation?</h2><p>Accreditation demonstrates a commitment to quality and continuous improvement. It builds trust with clients, partners, and stakeholders, assuring them that your services meet rigorous industry standards. It can also open doors to new business opportunities, as many contracts, especially in the public sector, require it.</p><h2>The Accreditation Process: A Roadmap</h2><ol><li><strong>Gap Analysis:</strong> The first step is to assess your current processes against the accreditation standards. This helps identify areas that need improvement.</li><li><strong>Implementation:</strong> Develop and implement the necessary policies, procedures, and quality management systems to fill the identified gaps.</li><li><strong>Internal Audit:</strong> Conduct an internal audit to ensure that the new systems are working effectively and that you are ready for the formal assessment.</li><li><strong>Formal Assessment:</strong> An external accreditation body will conduct a thorough review of your systems and processes.</li><li><strong>Accreditation & Maintenance:</strong> Once accredited, you must maintain your standards through regular surveillance audits and continuous improvement efforts.</li></ol><p>The journey to accreditation can be complex, but the rewards are significant. It is an investment in your organization\'s future, enhancing credibility, improving efficiency, and fostering a culture of excellence.</p>',
  },
];

export const jobOpenings: JobOpening[] = [
  {
    id: '1',
    title: 'Senior Healthcare Consultant',
    location: 'Remote',
    type: 'Full-time',
    description: 'We are seeking an experienced healthcare consultant to lead digital transformation projects for our key clients. The ideal candidate will have 10+ years of experience in healthcare management and a deep understanding of EMR systems, regulatory compliance, and patient care workflows.',
  },
  {
    id: '2',
    title: 'IT Security Analyst',
    location: 'New York, NY',
    type: 'Full-time',
    description: 'Join our cybersecurity team to protect our clients\' critical infrastructure. Responsibilities include vulnerability assessments, incident response, and implementing security best practices. CISSP or similar certification is required.',
  },
  {
    id: '3',
    title: 'Junior Web Developer',
    location: 'Remote',
    type: 'Contract',
    description: 'We are looking for a contract-based junior web developer to assist with internal and client-facing web projects. Proficiency in React, Next.js, and TypeScript is essential. This is a 6-month contract with the possibility of extension.',
  },
];

export const teamMembers: TeamMember[] = [
  {
    id: '1',
    name: 'Jane Doe',
    title: 'CEO & Lead Healthcare Strategist',
    bio: 'With over 20 years in the healthcare sector, Jane is a visionary leader dedicated to improving patient outcomes through innovation.',
    image: 'team-member-1',
  },
  {
    id: '2',
    name: 'John Smith',
    title: 'CTO & Head of IT Solutions',
    bio: 'John is a tech guru with a passion for solving complex problems. He leads our IT division, specializing in cloud architecture and cybersecurity.',
    image: 'team-member-2',
  },
  {
    id: '3',
    name: 'Sarah Brown',
    title: 'Director of Accreditation Services',
    bio: 'Sarah is an expert in quality management and regulatory compliance, helping organizations achieve excellence and recognition.',
    image: 'team-member-3',
  },
  {
    id: '4',
    name: 'Michael Johnson',
    title: 'Senior Project Manager',
    bio: 'Michael ensures that all our client projects are delivered on time and on budget, exceeding expectations every step of the way.',
    image: 'team-member-4',
  },
];

export const clients: Client[] = [
  {
    id: '1',
    name: 'Innovate Corp',
    testimonial: 'Synergy Consult transformed our approach to IT. Their expertise was invaluable in our recent cloud migration project. Highly recommended!',
    logo: 'client-logo-1',
  },
  {
    id: '2',
    name: 'HealthForward',
    testimonial: 'The accreditation process was daunting, but Synergy Consult\'s team made it seamless. We achieved our certification ahead of schedule.',
    logo: 'client-logo-2',
  },
  {
    id: '3',
    name: 'TechSolutions Inc.',
    testimonial: 'A truly professional and knowledgeable team. Their healthcare insights helped us develop a market-leading product.',
    logo: 'client-logo-3',
  },
];

// Data fetching functions
export const getServices = async () => simulateFetch(services);
export const getServiceById = async (id: string) => simulateFetch(services.find(s => s.id === id));
export const getBlogPosts = async () => simulateFetch(blogPosts);
export const getBlogPostBySlug = async (slug: string) => simulateFetch(blogPosts.find(p => p.slug === slug));
export const getJobOpenings = async () => simulateFetch(jobOpenings);
export const getTeamMembers = async () => simulateFetch(teamMembers);
export const getClients = async () => simulateFetch(clients);
