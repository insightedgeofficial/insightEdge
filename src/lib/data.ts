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
    id: 'jamovi-training-workshop',
    title: 'Jamovi Training Workshop',
    date: '5th, 6th, 7th February 2026',
    location: 'Online',
    cta: 'Register Now',
    href: '/events/jamovi-training-workshop',
    image: 'event-1',
    abstract: 'A comprehensive training workshop on Jamovi, a free and open-source statistical software. Learn data analysis, statistical modeling, and reporting using this powerful tool designed for researchers and students.',
    registrationLink: 'https://forms.gle/vfaknuCxp99d9t4DA',
  },
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
  // Row 1 - First 5 testimonials
  {
    quote: 'Working with Insight Edge was an absolute pleasure. Both founders created a warm, collaborative environment and gave us complete freedom to let our creative ideas flow. They are incredibly humble, supportive, and professional. The coordination and arrangements from their side were seamless and truly impressive, I\'d be happy to work with them again.',
    author: 'Drishti Agarwal',
    role: '',
    image: 'testimonial-1',
  },
  {
    quote: 'Working with Insight Edge as a Dance Movement Facilitator was a seamless and rewarding experience. Despite managing their studies and work alongside the startup, the founders demonstrate remarkable clarity in delegating responsibilities, consistent communication, and well-planned event promotion. Their professionalism, commitment, and supportive approach truly stand out. It\'s inspiring to collaborate with such a driven and thoughtfully run team.',
    author: 'Heena Jain',
    role: 'Dance Movement Facilitator',
    image: 'testimonial-2',
  },
  {
    quote: 'I want to give a small shoutout to the InsightEdge team, headed by Priyanka Surana and Lakshmi Rajesh. I just want to mention how extremely professional and creative they are and how they amalgamate both these attributes to come out with something that I\'ve definitely never heard of. Calling themselves "Experience Designers", they helped us host a session that involved creativity, coming out with your emotions, working through tough periods in life, lifting each other up; the art therapy workshop they helped curate for the JITO Chennai Youth Wing. Definitely one for the books. I wish them the best and hope to see more of such psychology related and mental health related workshops in the future.',
    author: 'Sudharshan Bohra',
    role: 'Chief Secretary of JITO Chennai Youth Wing',
    image: 'testimonial-3',
  },
  {
    quote: 'It was an absolute honor to be a resource person for your workshop. The energy, enthusiasm, and dedication of you both were truly inspiring! You all did a fantastic job in organizing the event, creating an engaging learning space, and making a real impact. This is just the beginning of something amazing! Keep pushing boundaries, keep learning, and keep creating opportunities for growth. I have no doubt that you\'ll continue to do even bigger and better things in the future. Wishing you all the success!',
    author: 'Pavithra Chinnaiyan',
    role: '',
    image: 'testimonial-4',
  },
  {
    quote: 'Working with Priyanka and Lakshmi was really an amazing experience. Your unwavering support, prompt responses to every query, and willingness to accommodate every request truly made a difference. You both ensured that I felt comfortable throughout the process, which was immensely helpful. Your dedication and passion for the field can be seen in the way you approach your work with professionalism, warmth, and a genuine willingness to help. I truly appreciate your efforts and the positive energy you bring to every interaction. Grateful to be a part of the collaboration',
    author: 'Feral Upadhyay',
    role: '',
    image: 'testimonial-5',
  },
  // Row 2 - Next 6 testimonials
  {
    quote: 'It was a very nice dance therapy session! We had dancing, as well as a lot of therapeutic moments. There was also so much bonding between us during the session. It was very nice. It was like an ice-breaker as well. We met so many new people; I did not know there were so many people here even though I am a regular person here at Body Story Studios. I really enjoyed myself and the session. Thank you so much for organising',
    author: 'Participant',
    role: 'DMT Workshop',
    image: 'testimonial-6',
  },
  {
    quote: 'I would like to thank InsightEdge for this wonderful experience. They created a very safe space for us, where a lot of us could come and freely express ourselves. It was a very engaging workshop, which made us feel deeply and connect with parts of ourselves, which was very unexpected. We could let ourselves loose and experience emotions freely. We felt very relieved after the workshop was done, as if coming out from under a big haze. I am very thankful to them.',
    author: 'Participant',
    role: 'Workshop Attendee',
    image: 'testimonial-7',
  },
  {
    quote: 'I have attended a lot of dance workshops. But here, the most unique thing was, there was no particular dance choreography or nothing specific that we HAD to follow. We were given the space to just listen to our body and just follow. That gave me a lot of freedom to do things and feel things for myself, as I wanted. I think everybody should experience this at least once.',
    author: 'Participant',
    role: 'DMT Workshop',
    image: 'testimonial-8',
  },
  {
    quote: 'It was a very good session. I was honestly not prepared to be a part of a big group, interact with other people, or try to connect with my feelings in any way. But in the end, I am very happy I turned up in person and was a part of this session. It was very therapeutic and I took part very enthusiastically. It felt very good to have this as a part of my life. The session helped me connect with myself; I felt more motivated and stress-free. I am very thankful to InsightEdge for doing this event',
    author: 'Participant',
    role: 'Art Therapy Workshop',
    image: 'testimonial-9',
  },
  {
    quote: 'The training session conducted by Insight Edge was highly insightful and well-structured. The concepts were explained clearly with relevant real-world examples, making them easy to understand and apply. The session was engaging, interactive, and added significant value to our learning experience. Overall, it was a very effective and impactful training for the whole organisation.',
    author: 'Vikram Jain',
    role: 'Founder of Jamsticks Pvt Ltd and SPRIG Electronics',
    image: 'testimonial-10',
  },
  {
    quote: 'I collaborated with InsightEdge for an Art therapy workshop on September \'25. Lakshmi and Priyanka were the kindest: they kept me in the loop, gave us facilitators our creative liberty and autonomy, and made the entire process seamless and smooth. It was a delight working with the InsightEdge team and I look forward to collaborating with them in the future!',
    author: 'Yashi Sonthalia',
    role: 'Counselling Psychologist and Certified Art Therapist',
    image: 'testimonial-11',
  },
];

// Split testimonials for two rows
export const testimonialsRow1 = testimonials.slice(0, 5);
export const testimonialsRow2 = testimonials.slice(5);

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
  { icon: Facebook, href: 'https://www.facebook.com/profile.php?id=61581207218457', name: 'Facebook' },
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
    id: 'pd-corporate',
    title: 'PD Corporate Workshop',
    date: 'October 2025',
    description: 'A comprehensive personality development workshop in collaboration with Sprig Electronics, focusing on professional growth, communication skills, and personal effectiveness in workplace settings.',
    highlights: [
      'Collaboration with Sprig Electronics',
      'Interactive sessions on professional communication',
      'Personality assessment activities',
      'Networking opportunities for participants',
    ],
    images: [
      { src: '/events/pd-corporate/IMG_0258.HEIC' },
      { src: '/events/pd-corporate/IMG_0260.HEIC' },
      { src: '/events/pd-corporate/IMG_0261.HEIC' },
      { src: '/events/pd-corporate/IMG_0262.HEIC' },
      { src: '/events/pd-corporate/IMG_0266.HEIC' },
      { src: '/events/pd-corporate/IMG_0274.HEIC' },
      { src: '/events/pd-corporate/IMG_0276.HEIC' },
      { src: '/events/pd-corporate/IMG_0281.HEIC' },
      { src: '/events/pd-corporate/IMG_0284.jpg' },
      { src: '/events/pd-corporate/IMG_0287.HEIC' },
      { src: '/events/pd-corporate/IMG_3866.JPG' },
      { src: '/events/pd-corporate/IMG_3869.JPG' },
      { src: '/events/pd-corporate/IMG_3884.JPG' },
    ],
  },
  {
    id: 'jito-art-therapy',
    title: 'JIOTO Art Therapy Workshop',
    date: 'September 2025',
    description: 'An engaging art therapy workshop conducted in collaboration with JITO Youth Wing, exploring creative expression as a pathway to emotional wellness and self-discovery.',
    highlights: [
      'Collaboration with JITO Youth Wing',
      'Hands-on art creation activities',
      'Therapeutic art techniques',
      'Group sharing and reflection sessions',
    ],
    images: [
      { src: '/events/jito-art-therapy/DSC_0016.JPG' },
      { src: '/events/jito-art-therapy/DSC_0036.JPG' },
      { src: '/events/jito-art-therapy/DSC_0061.JPG' },
      { src: '/events/jito-art-therapy/DSC_0064.JPG' },
      { src: '/events/jito-art-therapy/DSC_0066.JPG' },
      { src: '/events/jito-art-therapy/DSC_0102.JPG' },
      { src: '/events/jito-art-therapy/DSC_0103.JPG' },
      { src: '/events/jito-art-therapy/DSC_0114.JPG' },
      { src: '/events/jito-art-therapy/DSC_0119.JPG' },
      { src: '/events/jito-art-therapy/DSC_0142.JPG' },
      { src: '/events/jito-art-therapy/DSC_0151.JPG' },
      { src: '/events/jito-art-therapy/DSC_0161.JPG' },
      { src: '/events/jito-art-therapy/DSC_0173.JPG' },
      { src: '/events/jito-art-therapy/DSC_0190.JPG' },
      { src: '/events/jito-art-therapy/DSC_0203.JPG' },
      { src: '/events/jito-art-therapy/DSC_0206.JPG' },
      { src: '/events/jito-art-therapy/DSC_0221.JPG' },
      { src: '/events/jito-art-therapy/DSC_0234.JPG' },
      { src: '/events/jito-art-therapy/DSC_0269.JPG' },
      { src: '/events/jito-art-therapy/DSC_0303.JPG' },
      { src: '/events/jito-art-therapy/DSC_0312.JPG' },
      { src: '/events/jito-art-therapy/DSC_0394.JPG' },
      { src: '/events/jito-art-therapy/DSC_0408.JPG' },
      { src: '/events/jito-art-therapy/DSC_0478.JPG' },
      { src: '/events/jito-art-therapy/DSC_0492.JPG' },
      { src: '/events/jito-art-therapy/DSC_0495.JPG' },
      { src: '/events/jito-art-therapy/DSC_0552.JPG' },
      { src: '/events/jito-art-therapy/DSC_0566.JPG' },
      { src: '/events/jito-art-therapy/DSC_0569.JPG' },
      { src: '/events/jito-art-therapy/DSC_0598.JPG' },
      { src: '/events/jito-art-therapy/DSC_0599.JPG' },
      { src: '/events/jito-art-therapy/DSC_0615.JPG' },
    ],
  },
  {
    id: 'dmt-workshop',
    title: 'DMT Workshop',
    date: 'July 2025',
    description: 'Dance Movement Therapy workshop in collaboration with Body Story Studios, deepening participants\' understanding of movement as a therapeutic tool.',
    highlights: [
      'Collaboration with Body Story Studios',
      'Advanced movement exploration techniques',
      'Mind-body connection exercises',
      'Small group facilitation',
    ],
    images: [
      { src: '/events/dmt-workshop/IMG_0930.JPG' },
      { src: '/events/dmt-workshop/05240877-f9f5-410d-939d-25ea4181add1.JPG' },
      { src: '/events/dmt-workshop/2c33e8bc-1677-42be-8e4e-620d6b5b1a16.JPG' },
      { src: '/events/dmt-workshop/9e97f0d6-c83a-4e86-a167-f5577c7ea4d8.JPG' },
      { src: '/events/dmt-workshop/IMG_0932.JPG' },
      { src: '/events/dmt-workshop/IMG_0945.JPG' },
      { src: '/events/dmt-workshop/IMG_0962.JPG' },
      { src: '/events/dmt-workshop/IMG_0992.JPG' },
      { src: '/events/dmt-workshop/IMG_1026.PNG' },
      { src: '/events/dmt-workshop/IMG_1027.PNG' },
      { src: '/events/dmt-workshop/IMG_1028.PNG' },
    ],
  },
  {
    id: 'dg-vaishnav',
    title: 'DG Vaishnav',
    date: 'February 2025',
    description: 'A training session on Projective Personality tests conducted for students of DG Vaishnava College, providing hands-on learning experience in psychological assessment.',
    highlights: [
      'Training session for college students',
      'Practical application of projective tests',
      'Interactive learning approach',
      'Skill-building in assessment techniques',
    ],
    images: [
      { src: '/events/dg-vaishnav/DSC01501.JPG' },
      { src: '/events/dg-vaishnav/4d6ebb79-d9da-450c-8c39-3fde7390cf6e.JPG' },
      { src: '/events/dg-vaishnav/DSC01375.JPG' },
      { src: '/events/dg-vaishnav/DSC01376.JPG' },
      { src: '/events/dg-vaishnav/DSC01378.JPG' },
      { src: '/events/dg-vaishnav/DSC01401.JPG' },
      { src: '/events/dg-vaishnav/DSC01403.JPG' },
      { src: '/events/dg-vaishnav/DSC01411.JPG' },
      { src: '/events/dg-vaishnav/DSC01419.JPG' },
      { src: '/events/dg-vaishnav/DSC01421.JPG' },
      { src: '/events/dg-vaishnav/DSC01428.JPG' },
      { src: '/events/dg-vaishnav/DSC01436.JPG' },
      { src: '/events/dg-vaishnav/DSC01466.JPG' },
      { src: '/events/dg-vaishnav/DSC01473.JPG' },
      { src: '/events/dg-vaishnav/DSC01489.JPG' },
      { src: '/events/dg-vaishnav/DSC01512.JPG' },
    ],
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
            'Application mentoring with psychology-specific insight'
        ],
        audience: 'UG & PG Psychology Students, Career Switchers, Early-career Professionals',
        format: '1:1 consulting / Document review / Full-journey mentorship',
        duration: 'Single consults to 3–6 month application support',
        pricing: 'Per consult / Full-cycle package',
        cta: 'Explore Consulting Options',
        ctaLink: '/contact'
    },
    {
        category: 'Statistical Services (Research Support)',
        overview: 'Our statistical support helps students, researchers, and organizations turn data into reliable, decision-ready insights – from study design to analysis and final reporting.',
        outcomes: [
            'Study Design',
            'Data Analysis',
            'Reporting & Review'
        ],
        audience: 'Students, Researchers, Faculty, Clinicians, NGOs, Organizations',
        format: 'Consultations / Analysis Support / Reporting & Review',
        duration: 'Single-session support to multi-week project engagement',
        pricing: 'Per consultation, per dataset, or per project package',
        cta: 'Request Research Support',
        ctaLink: '/contact'
    },
];

export const faqs: FAQ[] = [
  { 
    question: 'What kinds of programs does InsightEdge offer?', 
    answer: 'We offer evidence-based workshops, clinical internships, capacity-building training, study abroad consulting, research support, and customized wellbeing programs for schools, universities, corporates, NGOs, and community organisations. This includes art therapy, dance movement therapy (DMT), and other mental health-based workshops.' 
  },
  { 
    question: 'Are your workshops suitable for non-psychology audiences?', 
    answer: 'Yes. Many of our school, corporate, and community workshops are designed for general audiences. Only the technical modules (like assessment or research training) are psychology-specific.' 
  },
  { 
    question: 'Can you design custom workshops for our institution?', 
    answer: 'Absolutely. Most of our work is tailor-made. We design sessions based on your audience, context, and learning goals.' 
  },
  { 
    question: 'Do your university workshops cover clinical and counselling skills?', 
    answer: 'Yes. Our modules include therapeutic communication, case conceptualisation, interviewing basics, ethics, and research exposure—aligned with UG/PG psychology curricula.' 
  },
  { 
    question: 'Do you conduct long-term programs for institutions?', 
    answer: 'Yes. We offer term-based modules, semester-linked partnerships, and multi-week training models for schools and colleges.' 
  },
  { 
    question: 'Do you provide certification for capacity-building programs?', 
    answer: 'Yes. Participants receive a certificate upon completing attendance and activity requirements.' 
  },
  { 
    question: 'What does the study abroad consulting process include?', 
    answer: 'Program shortlisting, SOP/LOR/CV support, interview preparation, documentation review, timeline planning, and transition guidance.' 
  },
  { 
    question: 'Can I book just one consultation for study abroad instead of the full package?', 
    answer: 'Yes. You can opt for single sessions or full-cycle mentorship.' 
  },
  { 
    question: 'Do you offer training in SPSS, Jamovi, R, or qualitative tools?', 
    answer: 'Yes. We run instructor-led modules for statistical software, qualitative coding, and scientific writing.' 
  },
  { 
    question: 'How do you ensure participant safety during workshops?', 
    answer: 'All facilitators follow trauma-informed, culturally sensitive practices, maintain confidentiality, and obtain informed consent where required.' 
  },
  { 
    question: 'What if a participant requires clinical support?', 
    answer: 'If needs fall beyond the scope of the workshop, we provide referral pathways and guidance on seeking appropriate professional services.' 
  },
  { 
    question: 'Are your events beginner-friendly?', 
    answer: 'Most events—especially movement, art, and reflective workshops—do not require prior experience. Technical training events will specify prerequisites.' 
  },
  { 
    question: 'How do I contact you directly?', 
    answer: 'You can reach us at insightedge.contact@gmail.com or via our Contact page form. We respond within 24 hours.' 
  },
];
