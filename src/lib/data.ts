import type { NavLink, ValueBlock, Service, Event, Testimonial, TeamMember, Founder, FAQ, Milestone, FullService, PastEvent } from './types';
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
    id: 'dance-movement-therapy-3',
    title: 'Dance Movement Therapy 3.0',
    date: '22nd November 2025, 5–7 PM',
    location: 'The Latin Dance India, Bengaluru',
    cta: 'Register Now',
    href: '/events/dance-movement-therapy-3',
    image: 'event-1',
    abstract: 'Join us for an immersive experience where movement becomes a pathway to emotional expression and psychological healing. This workshop combines dance, psychology, and mindfulness to help participants explore their inner world through creative movement.',
    agenda: [
      'Introduction to Dance Movement Therapy (15 mins)',
      'Warm-up and Body Awareness Exercises (20 mins)',
      'Guided Movement Exploration (30 mins)',
      'Group Movement Activities (25 mins)',
      'Reflection and Sharing Circle (20 mins)',
      'Closing and Q&A (10 mins)',
    ],
    facilitator: 'Heena Jain, Dance Movement Therapy Facilitator',
    venue: 'The Latin Dance India, Bengaluru\nAddress: [Venue Address]\nParking available on-site',
    pricing: 'Early Bird: ₹1,500 (until Nov 10)\nRegular: ₹2,000',
    registrationLink: 'https://forms.google.com/example',
    faqs: [
      { question: 'Do I need prior dance experience?', answer: 'No prior dance experience is required. The workshop is designed for all levels and focuses on movement as a form of expression rather than technique.' },
      { question: 'What should I wear?', answer: 'Wear comfortable clothing that allows for movement. Loose-fitting or stretchy clothes work best.' },
    ],
  },
  {
    id: 'run-for-mental-health',
    title: 'Run for Mental Health: A Campaign',
    date: '29th Nov 2025',
    location: 'Chennai',
    cta: 'View Details',
    href: '/events/run-for-mental-health',
    image: 'event-2',
    abstract: 'A community event combining physical activity with mental health awareness. Join us for a 5K run followed by mindfulness sessions and discussions about mental wellbeing.',
    agenda: [
      'Registration and Warm-up (30 mins)',
      '5K Run/Walk (45-60 mins)',
      'Cool-down and Stretching (15 mins)',
      'Mindfulness Session (20 mins)',
      'Mental Health Awareness Talk (30 mins)',
      'Networking and Refreshments (30 mins)',
    ],
    facilitator: 'InsightEdge Team',
    venue: 'Marina Beach, Chennai\nStarting Point: [Specific Location]\nWater stations available along the route',
    pricing: 'Individual: ₹500\nGroup (5+): ₹400 per person',
    registrationLink: 'https://forms.google.com/example',
  },
  {
    id: 'yoga-therapy-mind-body-reset',
    title: 'Yoga Therapy: Mind body reset',
    date: '7th Dec 2025',
    location: 'Bengaluru',
    cta: 'View Details',
    href: '/events/yoga-therapy-mind-body-reset',
    image: 'event-3',
    abstract: 'A therapeutic yoga session designed to reset both mind and body. This workshop integrates yoga asanas, pranayama, and meditation techniques to reduce stress, improve emotional regulation, and enhance overall wellbeing.',
    agenda: [
      'Opening Circle and Intention Setting (10 mins)',
      'Gentle Warm-up (15 mins)',
      'Therapeutic Asana Practice (40 mins)',
      'Pranayama (Breathing Techniques) (15 mins)',
      'Guided Meditation (15 mins)',
      'Yoga Nidra (Deep Relaxation) (15 mins)',
      'Closing and Reflection (10 mins)',
    ],
    facilitator: 'InsightEdge Facilitator',
    venue: 'Wellness Studio, Bengaluru\nAddress: [Venue Address]\nMats and props provided',
    pricing: 'Single Session: ₹1,200\nPackage (3 sessions): ₹3,000',
    registrationLink: 'https://forms.google.com/example',
  },
];

export const testimonials: Testimonial[] = [
  {
    quote: 'InsightEdge sessions helped our students manage exam stress with confidence.',
    author: 'School Counselor',
    role: 'Bengaluru',
    image: 'testimonial-1',
  },
  {
    quote: "The corporate workshop was a turning point for our team's communication.",
    author: 'HR Lead',
    role: 'Tech Firm',
    image: 'testimonial-2',
  },
  {
    quote: 'A truly insightful and practical approach to psychology. Highly recommended for any organization.',
    author: 'CEO',
    role: 'Startup',
    image: 'testimonial-3',
  },
  {
    quote: 'The facilitators are experts who create a safe and engaging learning environment.',
    author: 'University Student',
    role: 'Chennai',
    image: 'testimonial-4',
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

export const pastEvents: PastEvent[] = [
  {
    id: 'personality-development-sprig',
    title: 'Personality Development Workshop',
    date: 'October 2025',
    description: 'A comprehensive personality development workshop in collaboration with Sprig Electronics, focusing on professional growth, communication skills, and personal effectiveness in workplace settings.',
    highlights: [
      'Collaboration with Sprig Electronics',
      'Interactive sessions on professional communication',
      'Personality assessment activities',
      'Networking opportunities for participants',
    ],
    images: ['event-1', 'event-2', 'event-3'],
  },
  {
    id: 'art-therapy-jito',
    title: 'Art Therapy Workshop',
    date: 'September 2025',
    description: 'An engaging art therapy workshop conducted in collaboration with JITO Youth Wing, exploring creative expression as a pathway to emotional wellness and self-discovery.',
    highlights: [
      'Collaboration with JITO Youth Wing',
      'Hands-on art creation activities',
      'Therapeutic art techniques',
      'Group sharing and reflection sessions',
    ],
    images: ['event-1', 'event-3'],
  },
  {
    id: 'dmt-2-body-story',
    title: 'Dance Movement Therapy 2.0',
    date: 'July 2025',
    description: 'The second edition of our Dance Movement Therapy workshop in collaboration with Body Story Studios, deepening participants\' understanding of movement as a therapeutic tool.',
    highlights: [
      'Collaboration with Body Story Studios',
      'Advanced movement exploration techniques',
      'Mind-body connection exercises',
      'Small group facilitation',
    ],
    images: ['event-1', 'event-2'],
  },
  {
    id: 'dmt-1-chennai',
    title: 'Dance Movement Therapy 1.0',
    date: 'May 2025',
    description: 'Our inaugural Dance Movement Therapy workshop in Chennai, introducing participants to the healing power of movement and creative expression.',
    highlights: [
      'First DMT workshop in Chennai',
      'Introduction to movement therapy',
      'Community building activities',
      'Positive participant feedback',
    ],
    images: ['event-1', 'event-2', 'event-3'],
  },
  {
    id: 'projective-tests-dg-vaishnava',
    title: 'Projective Personality Tests Training',
    date: 'February 2025',
    description: 'A training session on Projective Personality tests conducted for students of DG Vaishnava College, providing hands-on learning experience in psychological assessment.',
    highlights: [
      'Training session for college students',
      'Practical application of projective tests',
      'Interactive learning approach',
      'Skill-building in assessment techniques',
    ],
    images: ['event-2', 'event-3'],
  },
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
  { question: 'How do we book a school program?', answer: 'Simply fill out our contact form and select "Workshop Booking" as your topic. We\'ll get back to you within 2-3 working days to discuss your needs and share a customized proposal.' },
  { question: 'Do you offer online modules?', answer: 'Yes! Many of our workshops are available online or in a hybrid format. Check individual service pages for format details, or contact us to discuss what works best for you.' },
  { question: 'How do you ensure safeguarding?', answer: 'Safety comes first. Our facilitators are trained in ethical practices and trauma-informed approaches. We prioritize informed consent, confidentiality, and creating a welcoming space for everyone. Learn more on our Approach page.' },
  { question: 'Can you customize programs for NGOs or corporates?', answer: 'Absolutely! We love tailoring programs to fit your organization\'s unique goals. Reach out through our contact form, and we\'ll work together to design something perfect for your team.' },
  { question: 'What evidence supports your approach?', answer: 'Our methods draw from established psychological research and frameworks—including cognitive, behavioral, humanistic, and experiential approaches. Everything we do is grounded in evidence-based practices.' },
  { question: 'Do you provide certificates?', answer: 'Yes! Most of our workshops and training programs include certificates of participation or completion. Check each service page for specific details.' },
];
