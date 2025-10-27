import type { Service, BlogPost, JobOpening, TeamMember, Client, Project } from './types';

// Using a mock async function to simulate fetching data
const simulateFetch = <T,>(data: T): Promise<T> => 
  new Promise(resolve => setTimeout(() => resolve(data), 50));

export const services: Service[] = [
  {
    id: '1',
    title: 'Healthcare Solutions',
    description: 'Innovative strategies to improve patient outcomes and operational efficiency.',
    longDescription: 'Our Healthcare Solutions service provides comprehensive consulting for medical institutions. We focus on digital transformation, patient care optimization, and regulatory compliance to help you navigate the complex healthcare landscape.',
    icon: 'HeartPulse',
    image: 'service-healthcare',
  },
  {
    id: '2',
    title: 'Project Accreditation',
    description: 'Expert guidance to achieve and maintain industry-standard certifications.',
    longDescription: 'We guide organizations through the entire accreditation process, from readiness assessment to final survey. Our experts ensure you meet all requirements for standards like ISO, JCAHO, and more, securing your reputation for quality and excellence.',
    icon: 'ShieldCheck',
    image: 'service-accreditation',
  },
  {
    id: '3',
    title: 'IT Solutions',
    description: 'Cutting-edge IT services to modernize your infrastructure and workflows.',
    longDescription: 'Our IT Consultation services cover everything from cloud strategy and cybersecurity to custom software development. We help you leverage technology to drive growth, enhance security, and streamline operations for a competitive edge.',
    icon: 'Cpu',
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
    content: '<p>The healthcare industry is undergoing a seismic shift, driven by rapid advancements in technology. From electronic health records (EHRs) to AI-powered diagnostics, digital transformation is not just a buzzword; it\'s a fundamental change in how healthcare is delivered and managed.</p><p>One of the most significant changes is the adoption of telehealth. The ability to consult with patients remotely has proven invaluable, offering convenience for patients and efficiency for providers. Moreover, wearable devices and IoT sensors are providing continuous health monitoring, enabling proactive care and better management of chronic conditions.</p><p>Artificial intelligence is another game-changer. Machine learning algorithms can analyze medical images with a high degree of accuracy, assist in drug discovery, and predict patient outcomes based on historical data. This not only improves diagnostic speed and accuracy but also personalizes treatment plans for better results.</p><p>However, this transformation is not without its challenges. Data security and privacy are paramount, requiring robust cybersecurity measures. Interoperability between different systems also remains a hurdle that the industry must overcome to realize the full potential of a connected healthcare ecosystem.</p><p>At Tishha, we help healthcare organizations navigate these complexities, implementing tailored IT strategies that enhance patient care while ensuring data integrity and compliance. The future of healthcare is digital, and we are here to help you lead the way.</p>',
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
    name: 'Mr. Manish Kumar Vaishnav',
    title: 'Founder & Chairman',
    bio: 'A seasoned healthcare leader with over 18 years of experience in hospital management, strategic planning, and operations. An alumnus of IMS, DAVV Indore, and IIM Rohtak, bringing deep expertise in healthcare strategy and execution.',
    image: 'team-member-1',
  },
  {
    id: '2',
    name: 'Mrs. Sugandh Khandelwal',
    title: 'Co-Founder',
    bio: 'A distinguished healthcare professional with degrees from BBD University, Amity University, Apollo Medvarsity, and Symbiosis International University. Brings extensive expertise in hospital administration, clinical research, and medical tourism.',
    image: 'team-member-2',
  },
  
];

export const stratergicPartners: StratergicPartner[] = [
  {
    id: '1',
    name: 'Prof. (Dr.) Hem Chandra',
    title: 'Honorary Advisor',
    bio: 'Prof. (Dr.) Hem Chandra, a nationally acclaimed healthcare leader with over 40 years of experience, excels as an academician, administrator, and public health expert. An alumnus of top institutions, he has shaped medical education and healthcare policy, currently serving as Advisor to the Honerable President and Director of Hospital Services at Swami Ram Himalayan University.',
    image: 'team-member-3',
  },
  {
    id: '2',
    name: 'Mr. Pramod Panigrahi',
    title: 'Associate Director',
    bio: 'An MICA Ahmedabad alumnus with 20 years of experience in strategic marketing, digital transformation, and healthcare consultancy. Combines academic expertise and practical insight to drive growth, innovation, and future-ready business models across media, technology, and healthcare sectors.',
    image: 'team-member-4',
  },
]

export const Leaders: Leaders[] = [
  {
    id: '1',
    name: 'Mr. Manish Kumar Vaishnav',
    title: 'Founder & Chairman',
    bio: 'A seasoned healthcare leader with over 18 years of experience in hospital management, strategic planning, and operations. An alumnus of IMS, DAVV Indore, and IIM Rohtak, bringing deep expertise in healthcare strategy and execution.',
    image: 'team-member-1',
  },
  {
    id: '2',
    name: 'Mrs. Sugandh Khandelwal',
    title: 'Co-Founder',
    bio: 'A distinguished healthcare professional with degrees from BBD University, Amity University, Apollo Medvarsity, and Symbiosis International University. Brings extensive expertise in hospital administration, clinical research, and medical tourism.',
    image: 'team-member-2',
  },
  {
    id: '3',
    name: 'Prof. (Dr.) Hem Chandra',
    title: 'Honorary Advisor',
    bio: 'Prof. (Dr.) Hem Chandra, a nationally acclaimed healthcare leader with over 40 years of experience, excels as an academician, administrator, and public health expert. An alumnus of top institutions, he has shaped medical education and healthcare policy, currently serving as Advisor to the Honerable President and Director of Hospital Services at Swami Ram Himalayan University.',
    image: 'team-member-3',
  },
  {
    id: '4',
    name: 'Mr. Pramod Panigrahi',
    title: 'Associate Director',
    bio: 'An MICA Ahmedabad alumnus with 20 years of experience in strategic marketing, digital transformation, and healthcare consultancy. Combines academic expertise and practical insight to drive growth, innovation, and future-ready business models across media, technology, and healthcare sectors.',
    image: 'team-member-4',
  },
]

export const clients: Client[] = [
  {
    id: '1',
    name: 'Dr. Neerav Anand Singh, One Spine Clinic',
    testimonial: 'The team at Tishha Consultants LLP brought a level of insight and strategic thinking that transformed our approach to business.',
    logo: 'client-logo-1',
  },
  {
    id: '2',
    name: 'Dr. G.R. Divakar, Rama Hospital',
    testimonial: 'Partnering with Tishha Consultants LLP was one of the best decisions we`ve made. Their strategic vision and execution excellence were instrumental in driving our projects forward.',
    logo: 'client-logo-2',
  },
  {
    id: '3',
    name: 'Dr. Prateek Gangwar, Radhika Super Speciality & Advance Trauma Centre',
    testimonial: 'Working with Tishha Consultants LLP was an absolute pleasure. Their attention to detail and commitment to providing exceptional service set them apart. They understood our needs perfectly and delivered solutions that exceeded.',
    logo: 'client-logo-3',
  },
  {
    id: '4',
    name: 'Dr. Ammar Ahmad Khan, Pulse MultiSpeciality Hospital',
    testimonial: 'Tishha Consultancy LLP has been a vital partner for Pulse Hospital, enhancing our operational efficiency and patient care through tailored solutions and exceptional expertise. Highly recommended for any healthcare organization.',
    logo: 'client-logo-4',
  },
  {
    id: '5',
    name: 'Dr. Swapnila Prashad, Devalk Netralaya',
    testimonial: 'Tishha Consultants LLP stands out for their deep industry knowledge and reliable service. They provided us with actionable strategies that were tailored to our specific needs, helping us achieve measurable growth.',
    logo: 'client-logo-5',
  },
  {
    id: '6',
    name: 'Dr. Tanveer Ahmad, Dr. Tanveer Skin, Hair & Laser Clinic',
    testimonial: 'Working with Tishha Consultants LLP has been a game-changer for our organisation. Their team brought deep sector knowledge, razor-sharp insights and hands-on support that genuinely transformed how we plan, execute and scale our services. ',
    logo: 'client-logo-6',
  },
];

export const projects: Project[] = [
  {
    id: '1',
    slug: 'healthforward-accreditation',
    title: 'Achieving JCAHO Accreditation for HealthForward',
    client: 'HealthForward',
    image: 'case-study-1',
    excerpt: 'How we guided a leading hospital through a complex accreditation process, resulting in a 99.8% compliance score and enhanced operational efficiency.',
    challenge: 'HealthForward, a major regional hospital, was facing a critical JCAHO accreditation survey. Their internal team was overwhelmed with the documentation requirements, process standardization, and staff training needed to meet the rigorous standards. They needed expert guidance to ensure a successful outcome without disrupting patient care.',
    solution: 'Tishha deployed a team of accreditation specialists who conducted a thorough gap analysis. We developed a customized roadmap, implemented a digital quality management system, and provided hands-on training for all departments. Our team worked alongside HealthForward staff to streamline workflows and ensure every standard was met and documented correctly.',
    result: 'HealthForward passed their JCAHO survey with a 99.8% compliance score. The new digital systems reduced administrative overhead by 30%, and the streamlined processes led to a 15% improvement in patient throughput. The hospital is now recognized as a leader in quality and safety in their region.',
    services: ['Quality Accreditation', 'Healthcare Solutions'],
    testimonial: {
      text: 'Tishha was the partner we needed. Their expertise and hands-on approach were instrumental in our success. We couldn’t have done it without them.',
      author: 'CEO, HealthForward'
    }
  },
  {
    id: '2',
    slug: 'innovate-corp-cloud-migration',
    title: 'Cloud Migration & Modernization for Innovate Corp',
    client: 'Innovate Corp',
    image: 'case-study-2',
    excerpt: 'A complete overhaul of a legacy IT infrastructure, moving Innovate Corp to a secure, scalable, and cost-effective cloud environment.',
    challenge: 'Innovate Corp was struggling with an aging on-premise IT infrastructure that was costly to maintain, difficult to scale, and vulnerable to security threats. They needed to migrate to a modern cloud platform to support their rapid growth and digital product innovation.',
    solution: 'Our IT consultation team designed and executed a phased cloud migration strategy. We selected the optimal cloud provider (AWS) and services, refactored critical applications for the cloud, and implemented a robust CI/CD pipeline for automated deployments. Security was a priority, with a multi-layered approach including identity and access management, network security, and continuous monitoring.',
    result: 'The migration was completed on time and 10% under budget. Innovate Corp achieved a 40% reduction in IT operational costs, a 3x improvement in application performance, and near-zero downtime. Their new scalable infrastructure allows them to innovate faster and more securely than ever before.',
    services: ['Digital Solution', 'IT Consultation'],
    testimonial: {
      text: 'The cloud migration was a massive undertaking, but Tishha\'s team made it feel effortless. Their technical skill and project management were top-notch.',
      author: 'CTO, Innovate Corp'
    }
  },
  {
    id: '3',
    slug: 'greenfield-hospital-planning',
    title: 'Strategic Planning for a Greenfield Hospital Project',
    client: 'NewHope Medical',
    image: 'case-study-1',
    excerpt: 'From concept to blueprint, we delivered a comprehensive feasibility study and architectural plan for a new 200-bed specialty hospital.',
    challenge: 'NewHope Medical aimed to build a state-of-the-art hospital but lacked the in-house expertise to conduct a thorough feasibility analysis and develop a functional architectural plan that optimized both patient flow and operational efficiency.',
    solution: 'Tishha conducted a detailed market analysis, financial projections, and site assessment. We then collaborated with architects and clinicians to design a patient-centric facility, incorporating modern healthcare design principles and scalable infrastructure to accommodate future growth.',
    result: 'The feasibility study secured board approval and initial funding. The architectural design is now the blueprint for a hospital poised to become a regional leader in specialized care, with workflows designed to reduce staff fatigue and improve patient outcomes.',
    services: ['Planning & Designing', 'Feasibility Study', 'Healthcare Solutions'],
  },
];



// Data fetching functions
export const getServices = async () => simulateFetch(services);
export const getServiceById = async (id: string) => simulateFetch(services.find(s => s.id === id));
export const getBlogPosts = async () => simulateFetch(blogPosts);
export const getBlogPostBySlug = async (slug: string) => simulateFetch(blogPosts.find(p => p.slug === slug));
export const getJobOpenings = async () => simulateFetch(jobOpenings);
export const getTeamMembers = async () => simulateFetch(teamMembers);
export const getStratergicPartners= async()=>simulateFetch(stratergicPartners);
export const getLeaders= async()=>simulateFetch(Leaders);

export const getClients = async () => simulateFetch(clients);
export const getProjects = async () => simulateFetch(projects);
export const getProjectBySlug = async (slug: string) => simulateFetch(projects.find(p => p.slug === slug));
