import type { NavLink, ValueBlock, Service, Event, Testimonial, TeamMember, Founder, FAQ, Milestone, FullService } from './types';
import { BrainCircuit, PersonStanding, BadgeCheck, TrendingUp, Instagram, Linkedin, Youtube, Facebook } from 'lucide-react';

export const navLinks: NavLink[] = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/events', label: 'Events' },
  { href: '/team', label: 'Team' },
  { href: '/faq', label: 'FAQ' },
  { href: '/contact', label: 'Contact' },
];

export const valueBlocks: ValueBlock[] = [
  {
    icon: BrainCircuit,
    title: 'Rooted in Psychology',
    text: 'Every workshop and session draws from established psychological frameworks – ensuring every experience is backed by research, not trends.',
  },
  {
    icon: PersonStanding,
    title: 'Tailored for You',
    text: 'We adapt psychological insights to fit real-world contexts – from classrooms and corporates to communities.',
  },
  {
    icon: BadgeCheck,
    title: 'Facilitators You Can Trust',
    text: 'Sessions are led by trained psychologists and rigorously vetted facilitators – bringing clinical insight, ethical care, and clear instruction to every room.',
  },
  {
    icon: TrendingUp,
    title: 'Results that Stay',
    text: 'We measure transformation, not just attendance. Every InsightEdge engagement is built to create lasting personal and organizational growth.',
  },
];

export const services: Service[] = [
  {
    title: 'Universities and Colleges',
    text: 'Panel Discussions, Skill-Based Workshops, Conferences, and more.',
    cta: 'Explore University Services',
    href: '/services#universities',
  },
  {
    title: 'Rehab Centers',
    text: 'Addiction and Recovery Workshops, Therapeutic Techniques, and Staff Burnout Prevention.',
    cta: 'Explore Rehab Services',
    href: '/services#rehab-centers',
  },
  {
    title: 'NGOs',
    text: 'Field Research Training, Volunteer Training, and Advocacy Training.',
    cta: 'Explore NGO Services',
    href: '/services#ngos',
  },
  {
    title: 'Schools',
    text: 'Introductory Psychology Workshops, Mental Health Awareness, and Career Exploration.',
    cta: 'Explore School Services',
    href: '/services#schools',
  },
  {
    title: 'Corporate Settings',
    text: 'Burnout Assessment, Mindfulness Programs, Resilience Training, and more.',
    cta: 'Explore Corporate Services',
    href: '/services#corporate-wellbeing',
  },
  {
    title: 'Study Abroad',
    text: 'Guidance on programs, SOPs, and applications tailored for psychology pathways.',
    cta: 'Explore Consulting',
    href: '/services#study-abroad',
  },
];

export const upcomingEvents: Event[] = [
  {
    title: 'Dance Movement Therapy 3.0',
    date: '22nd November 2025, 5–7 PM',
    location: 'The Latin Dance India, Bengaluru',
    cta: 'Register Now',
    href: '/events',
    image: 'event-1',
  },
  {
    title: 'Run for Mental Health: A Campaign',
    date: '29th Nov 2025',
    location: 'Chennai',
    cta: 'View Details',
    href: '/events',
    image: 'event-2',
  },
  {
    title: 'Yoga Therapy: Mind body reset',
    date: '7th Dec 2025',
    location: 'Bengaluru',
    cta: 'View Details',
    href: '/events',
    image: 'event-3',
  },
];

export const testimonials: Testimonial[] = [
  {
    quote: 'InsightEdge sessions helped our students manage exam stress with confidence.',
    author: 'School Counselor',
    role: 'Bengaluru',
  },
  {
    quote: 'The corporate workshop was a turning point for our team’s communication.',
    author: 'HR Lead',
    role: 'Tech Firm',
  },
  {
    quote: 'A truly insightful and practical approach to psychology. Highly recommended for any organization.',
    author: 'CEO',
    role: 'Startup',
  },
  {
    quote: 'The facilitators are experts who create a safe and engaging learning environment.',
    author: 'University Student',
    role: 'Chennai',
  },
];

export const founders: Founder[] = [
  {
    name: 'Priyanka Surana',
    title: 'Co-founder',
    bio: 'A flower mistaken for a cactus, Priyanka Surana is a gold medalist currently pursuing her Master’s in Counseling Psychology at the Indian Institute of Psychology. With a deep passion for understanding the human mind, she brings a unique blend of expertise and curiosity to her work, shaping innovative approaches to mental health education.',
    image: 'founder-priyanka',
    linkedin: 'https://www.linkedin.com/in/priyanka-suranaaaa?utm_source=share_via&utm_content=profile&utm_medium=member_ios'
  },
  {
    name: 'Lakshmi Rajesh',
    title: 'Co-founder',
    bio: 'Driven by a profound interest in human behavior, Lakshmi Rajesh is actively engaged in advanced research on mental health and maladaptive behavior. As she prepares to embark on a PhD journey, her work challenges conventional boundaries, striving to offer new perspectives on psychological research and practice.',
    image: 'founder-lakshmi',
    linkedin: 'https://www.linkedin.com/in/lakshmi-rajesh-0a507124b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app'
  },
];

export const socialLinks = [
  { icon: Instagram, href: 'https://www.instagram.com/_insight.edge_?igsh=MXZnNndjOHJqb2k2Mw%3D%3D&utm_source=qr', name: 'Instagram' },
  { icon: Linkedin, href: 'https://www.linkedin.com/company/insight-edge1234/', name: 'LinkedIn' },
  { icon: Youtube, href: '#', name: 'YouTube' },
];

export const footerLinks = {
  quickLinks: [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/events', label: 'Events' },
    { href: '/contact', label: 'Contact' },
  ],
};

export const ethosBlocks = [
  {
    title: 'Rooted in Psychology',
    text: 'Every InsightEdge experience is grounded in proven psychological theories, therapeutic models, and behavioural science. We don’t rely on popular buzzwords or feel-good trends — we rely on research. Our workshops integrate frameworks from cognitive, behavioural, humanistic, and experiential psychology to ensure that every activity, reflection, and takeaway is scientifically informed and genuinely effective.',
  },
  {
    title: 'Tailored for You',
    text: 'We believe mental health education must be relatable, practical, and context-sensitive. That’s why we customise each session to the environment it enters — whether it’s a school, a corporate team, or a community group. Our approach translates psychological insight into everyday language and real-life situations, ensuring participants feel seen, understood, and supported where they actually are.',
  },
  {
    title: 'Facilitators You Can Trust',
    text: 'Every session at InsightEdge is designed and delivered by trained psychologists and facilitators with strong academic and clinical grounding. Our team is carefully chosen for their expertise, ethics, and ability to hold space. With structured methodologies, compassionate communication, and consistent professional training, participants always experience guidance that is safe, informed, and deeply humane.',
  },
  {
    title: 'Results that Stay',
    text: 'Our focus is on meaningful, lasting change — not just a good session in the moment. Every workshop is designed to create shifts that participants can actually feel in their day-to-day lives. We use simple reflections, practical tools, and follow-through practices to help learning settle in. The goal is for the impact to continue long after the workshop, becoming a natural part of how people show up, relate, and grow.',
  },
];

export const milestones: Milestone[] = [
    { date: 'December 2024', description: 'InsightEdge founded by two psychologists passionate about bringing psychology to everyday spaces.' },
    { date: 'February 2025', description: 'Conducted training session on Projective Personality tests for students of DG Vaishnava College.' },
    { date: 'May 2025', description: 'Dance Movement Therapy (DMT) 1.0 - Chennai.' },
    { date: 'July 2025', description: 'DMT 2.0 in collaboration with Body Story Studios (Wellness Centre).' },
    { date: 'September 2025', description: 'Art Therapy Workshop conducted in collaboration with JITO Youth Wing.' },
    { date: 'October 2025', description: 'Personality Development Workshop in Collaboration with Sprig Electronics.' },
];

export const teamMembers: TeamMember[] = [
  { name: 'Heena Jain', role: 'Dance Movement Therapy Facilitator', tagline: 'Where movement meets meaning.', bio: 'Heena integrates creative movement and psychological insight to help participants reconnect with their bodies and emotions. She specializes in trauma-informed expressive arts facilitation and experiential workshops for youth and adults.', image: 'team-heena' },
  { name: 'Yashi Sonthalia', role: 'Counselling Psychologist, Couples Therapist & Art Therapy Practitioner', tagline: 'Where insight meets creativity.', bio: 'Yashi is a counselling psychologist and facilitator who brings together the science of psychology and the art of expression. With advanced training in couples and family therapy, art-based interventions, and positive psychology, she works with individuals, partners, and groups to explore emotion, connection, and growth. Her facilitation blends storytelling, humor, and creative modalities to make reflective learning experiential and grounded. Beyond her clinical practice, she conducts corporate and student workshops, facilitates ice baths and mind–body wellness sessions, and is the author of Manage Your Emotions, Master Your Mind and the creator of the reflective journal Take the Plunge.', image: 'team-yashi' },
  { name: 'Drishti Agarwal', role: 'Trainee Counselling Psychologist, Early Childhood Educator & Art-Based Life Coach', tagline: 'Play. Create. Connect.', bio: 'Drishti is a trainee counselling psychologist and early childhood educator who bridges therapeutic insight with creative learning. Her work combines art, play, and evidence-based pedagogy to support emotional expression, curiosity, and growth in children and young adults.', image: 'team-drishti' },
  { name: 'Lekhima Bhutia', role: 'Expressive Arts Therapy Practitioner | Queer-Affirmative | Trauma-Informed Facilitator', tagline: 'Where art becomes a language of healing.', bio: 'Lekhima is an expressive arts therapy practitioner whose work blends creativity, inclusivity, and embodiment. Her practice is grounded in queer-affirmative and trauma-informed approaches, creating spaces that honour safety, authenticity, and voice. Drawing from her background in art, music, and dance, Lekhima brings a vibrant, sensory-rich energy to her sessions using metaphor, play, and movement to help participants reconnect with their inner worlds and one another.', image: 'team-lekhima' },
  { name: 'Saumika Venugopal', role: 'Global Psychology Admissions Consultant & Trainee Clinical Psychologist', tagline: 'Making your application journey feel doable.', bio: 'Saumika is a trainee clinical psychologist with strong experience across neuropsychological testing, early intervention work, and CBT-based approaches. Her clinical exposure spans hospitals, neuro centres, and special schools, giving her a deep understanding of what psychology programs look for in competitive applicants. She brings a structured, detail-oriented, and deeply supportive approach to university guidance — from program shortlisting and profile building to SOP refinement and interview preparation — ensuring students feel informed, confident, and ready for their global academic journey.', image: 'team-saumika' },
  { name: 'Rishi Muthu', role: '', tagline: '', bio: '', image: 'team-rishi' },
  { name: 'Kiran Thulasiraman Reddy', role: 'Global Education Consultant & Counselling Psychologist', tagline: 'Guiding you from aspiration to acceptance.', bio: 'Kiran is a globally engaged psychologist and youth mentor with experience supporting students across India and the UK. As Founder of Espoir Trust and Student Union Chairperson at the University of Portsmouth, he brings academic insight, international exposure, and a deep understanding of student life abroad. Having worked with organisations like UNICEF, UNESCO, and UNV, he blends psychological guidance with practical, step-by-step support — from university shortlists and SOP strategy to documentation and readiness for life in a new country. His mentoring is structured, encouraging, and clarity-driven, helping students navigate the study-abroad journey with confidence.', image: 'team-kiran' },
];

export const fullServices: FullService[] = [
    {
      category: 'Schools',
      overview: 'Our school-based programs build socio-emotional and life skills in students, and empower educators with psychological tools to create emotionally safe learning environments.',
      outcomes: [
        'Introductory Psychology Workshops',
        'Mental Health Awareness Programs',
        'Career Exploration in Psychology'
      ],
      audience: 'Students (Grades 6–12), Teachers, School Counselors',
      format: 'Workshops / Modules / Awareness Programs',
      duration: '1-day to multi-week series',
      pricing: 'Per workshop or per-term package',
      cta: 'Request a School Proposal',
      ctaLink: '/contact'
    },
    {
      category: 'Universities',
      overview: 'Our university programs bridge psychological theory with real-world application. Designed for undergraduate and postgraduate psychology and allied health science students, our workshops build essential skills in therapeutic communication, facilitation, research design, and career readiness.',
      outcomes: [
        'Panel Discussions',
        'Skill-Based Workshops',
        'Conferences',
        'Graduate School Preparation',
        'Simulation (Roleplay) Sessions for Therapeutic Techniques',
        'Research and Academic Support',
        'Soft Skills and Communication Training',
        'Mental Health Awareness and Advocacy Campaigns',
        'Professional Development and Networking Events'
      ],
      audience: 'UG & PG Psychology Students, Allied Health Sciences students, University Departments, Psychology Clubs, Intern Coordinators',
      format: 'Skill-building workshops / Semester-linked modules / Guest lectures / Career & higher education clinics',
      duration: '2-hour workshops to full-semester training series',
      pricing: 'Per workshop / Department partnership model',
      cta: 'Invite Us to Your Campus',
      ctaLink: '/contact'
    },
    {
        category: 'Rehab Centers',
        overview: 'We equip facilitators, psychologists, and educators with frameworks and skills to design and deliver evidence-based psychoeducational and wellbeing programs.',
        outcomes: [
            'Addiction and Recovery Workshops',
            'Therapeutic Techniques for Recovery Support',
            'Burnout Prevention for Staff'
        ],
        audience: 'Facilitators, Trainers, Mental Health Professionals, Educators',
        format: 'Intensive workshops / Hybrid modules / Certification pathways',
        duration: '2 days to 6 weeks',
        pricing: 'Per participant / Institutional partnership',
        cta: 'Join a Training Program',
        ctaLink: '/contact'
    },
    {
        category: 'NGOs',
        overview: 'We collaborate with organizations and institutions to design, evaluate, and document psychological interventions using robust, context-sensitive frameworks. We also support students, researchers, and institutions with end-to-end statistical services and skill-building in research methodology.',
        outcomes: [
            'Field Research and Data Collection Training',
            'Volunteer Training Programs',
            'Support Group Facilitation Skill Training',
            'Advocacy Training for Mental Health Activists'
        ],
        audience: 'NGOs, Research Institutions, CSR Units, Policy Programs, Students, Scholars, Faculty',
        format: 'Collaborative research projects / Consultancy model / Training modules',
        duration: 'Depends on project scope',
        pricing: 'Project-based (custom quotation)',
        cta: 'Discuss a Collaboration',
        ctaLink: '/contact'
    },
    {
        category: 'Corporate Wellbeing',
        overview: 'We partner with organizations to design bespoke wellbeing and development programs that foster psychological safety, leadership growth, and emotional resilience at work.',
        outcomes: [
            'Burnout & Attrition Risk Assessment',
            'Mindfulness-Based Stress Reduction (MBSR) Programs',
            'Resilience and Coping Skills Training',
            'Mental Health Metrics Reports',
            'Job Role-Personality Fit Assessment',
            'Psychological Tools for Performance Reviews',
            'Conflict Resolution & Mediation Skills',
            'Referral Systems for External Therapy & Mental Health Services',
            'Expressive Arts-Based Wellbeing Retreats',
            'Vision-Boarding & Career Identity Workshops',
            'Strengths-Based Team Mapping and Exercises'
        ],
        audience: 'Corporate teams, HR and L&D departments, Leadership cohorts',
        format: 'Workshops / Retreats / Ongoing wellbeing programs',
        duration: 'Half-day to 3-month interventions',
        pricing: 'Corporate package (custom proposal)',
        cta: 'Book a Corporate Workshop',
        ctaLink: '/contact'
    },
    {
        category: 'Study Abroad',
        overview: 'Designed specifically for psychology pathways, our consulting service supports students through every step of the international education process—from shortlisting universities to crafting compelling SOPs and preparing for interviews.',
        outcomes: [
            'Personalised university lists based on fit, eligibility, and career goals',
            'Clear guidance on SOPs, LORs, CVs, and timelines',
            'Application mentoring with psychology-specific insight',
            'Smooth transition support for adjusting to life abroad'
        ],
        audience: 'UG & PG Psychology Students, Career Switchers, Early-career Professionals',
        format: '1:1 consulting / Document review / Full-journey mentorship',
        duration: 'Single consults to 3–6 month application support',
        pricing: 'Per consult / Full-cycle package',
        cta: 'Explore Consulting Options',
        ctaLink: '/contact'
    },
];

export const faqs: FAQ[] = [
  { question: 'How do we book a school program?', answer: 'You can book a school program by filling out our contact form with the "Booking a Workshop" topic selected. Our team will then get in touch with you to discuss your school\'s specific needs and provide a detailed proposal.' },
  { question: 'Do you offer online modules?', answer: 'Yes, many of our workshops and training modules are available in a hybrid or fully online format to accommodate participants from different locations. Please check the specific service or event details.' },
  { question: 'How do you ensure safeguarding?', answer: 'Safeguarding is our top priority. Our facilitators are trained in ethical standards and trauma-informed practices. We ensure informed consent, confidentiality, and create a safe, inclusive environment for all participants. You can read more on our "Our Approach" page.' },
  { question: 'Can you customize programs for NGOs or corporates?', answer: 'Absolutely. We specialize in tailoring our content to meet the unique context and goals of your organization. Contact us to discuss a custom program for your team.' },
  { question: 'What evidence supports your approach?', answer: 'Our programs are grounded in established psychological frameworks and behavioural science. We draw from cognitive, behavioural, humanistic, and experiential psychology to ensure our methods are effective and research-backed.' },
  { question: 'Do you provide certificates?', answer: 'Yes, certificates of participation or completion are provided for many of our workshops and training programs. Please refer to the details of each specific service for more information.' },
];
