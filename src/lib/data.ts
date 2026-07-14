import type { NavLink, ValueBlock, Service, Event, Testimonial, TeamMember, Founder, FAQ, Milestone, FullService, PastEvent } from './types';
import { Brain, Person, SealCheck, TrendUp, InstagramLogo, LinkedinLogo, YoutubeLogo, FacebookLogo } from '@phosphor-icons/react/dist/ssr';

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
    icon: Brain,
    title: 'Rooted in Psychology',
    text: 'Every workshop and session draws from established psychological frameworks – ensuring every experience is backed by research, not trends.',
  },
  {
    icon: Person,
    title: 'Tailored for You',
    text: 'We adapt psychological insights to fit real-world contexts – from classrooms and corporates to communities.',
  },
  {
    icon: SealCheck,
    title: 'Facilitators You Can Trust',
    text: 'Sessions are led by trained psychologists and rigorously vetted facilitators – bringing clinical insight, ethical care, and clear instruction to every room.',
  },
  {
    icon: TrendUp,
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
    id: 'jamovi-3day-workshop',
    title: 'Jamovi 3-Day Workshop Training',
    date: '5th, 6th & 7th February 2026',
    location: 'Online',
    cta: 'Register Now',
    href: '/events/jamovi-3day-workshop',
    image: 'event-1',
    abstract: 'A comprehensive 3-day training workshop on Jamovi, a free and open-source statistical software. Learn data analysis, statistical modeling, and reporting using this powerful tool designed for researchers and students. (PDF will be attached.)',
    registrationLink: 'https://forms.gle/vfaknuCxp99d9t4DA',
  },
  {
    id: 'jamovi-mssw-college',
    title: 'Jamovi Statistical Training - MSSW College Students',
    date: '2-day in-college training: 26th and 27th February 2026',
    location: 'MSSW College',
    cta: 'View Details',
    href: '/events/jamovi-mssw-college',
    image: 'event-1',
    abstract: 'A 2-day in-college Jamovi statistical training programme for MSSW College students. Hands-on sessions on data analysis and reporting. (Image to be inserted.)',
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
  { icon: FacebookLogo, href: 'https://www.facebook.com/profile.php?id=61581207218457', name: 'FacebookLogo' },
  { icon: InstagramLogo, href: 'https://www.instagram.com/_insight.edge_?igsh=MXZnNndjOHJqb2k2Mw%3D%3D&utm_source=qr', name: 'InstagramLogo' },
  { icon: LinkedinLogo, href: 'https://www.linkedin.com/company/insight-edge1234/', name: 'LinkedIn' },
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
    title: 'JITO Art Therapy Workshop',
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
  { name: 'Yashi Sonthalia', role: 'Counselling Psychologist | Couples Therapist | Art Therapy Practitioner', tagline: 'Where insight meets creativity.', bio: 'Yashi is a counselling psychologist and facilitator whose work combines evidence-based psychology with creative practice. From therapy and workshops to immersive wellbeing experiences, she creates spaces for reflection, emotional resilience, and meaningful connection. She is the author of Manage Your Emotions, Master Your Mind and creator of Take the Plunge.', image: 'team-yashi' },
  { name: 'Drishti Agarwal', role: 'Trainee Counselling Psychologist | Early Childhood Educator | Art-Based Life Coach', tagline: 'Play. Create. Connect.', bio: 'Drishti is a trainee counselling psychologist and early childhood educator who bridges therapeutic insight with creative learning. Her work combines art, play, and evidence-based pedagogy to support emotional expression, curiosity, and growth in children and young adults.', image: 'team-drishti' },
  { name: 'Lekhima Bhutia', role: 'Expressive Arts Therapy Practitioner | Queer-Affirmative | Trauma-Informed Facilitator', tagline: 'Where art becomes a language of healing.', bio: 'Lekhima is an expressive arts therapy practitioner whose work blends creativity, inclusivity, and embodiment. Her practice is grounded in queer-affirmative and trauma-informed approaches, creating spaces that honour safety, authenticity, and voice. Drawing from her background in art, music, and dance, Lekhima brings a vibrant, sensory-rich energy to her sessions using metaphor, play, and movement to help participants reconnect with their inner worlds and one another.', image: 'team-lekhima' },
  { name: 'Rishi Muthu Velkumar', role: 'Statistician | MSc Biostatistics & Epidemiology', tagline: 'Turning data into clear, actionable insight.', bio: 'Rishi is a part of the team at InsightEdge as a statistician. With training in biostatistics, epidemiology, and psychology, he works across study design, data management, and advanced analysis using tools like R and SAS. His experience includes public health trend analysis and MIS-based retrospective analysis, along with research exposure spanning cross-sectional studies, psychometric tool development, and Ecological Momentary Assessment (EMA).', image: 'team-rishi' },
  { name: 'Kiran', role: 'Global Education Consultant & Counselling Psychologist', tagline: 'Guiding you from aspiration to acceptance.', bio: 'Kiran is a globally engaged psychologist and youth mentor with experience supporting students across India and the UK. As Founder of Espoir Trust and Student Union Chairperson at the University of Portsmouth, he brings academic insight, international exposure, and a deep understanding of student life abroad. Having worked with organisations like UNICEF, UNESCO, and UNV, he blends psychological guidance with practical, step-by-step support — from university shortlists and SOP strategy to documentation and readiness for life in a new country. His mentoring is structured, encouraging, and clarity-driven, helping students navigate the study-abroad journey with confidence.', image: 'team-kiran' },
  { name: 'Dr. Priyesh C.', role: 'Psychologist | Research & Data Analysis Specialist', tagline: 'Where science meets clarity.', bio: 'Priyesh brings together psychology, neuroscience, and data to make research feel approachable and meaningful. With a strong foundation in clinical psychology and neurophysiology, he helps students, researchers, and professionals move from confusion to confidence in research design and data analysis. He is known for his calm, clear teaching style and hands-on approach especially in making statistics, Jamovi, and quantitative research feel simple, practical, and usable. Priyesh works closely with individuals and institutions to support ethical, rigorous, and impactful psychological research.', image: 'team-priyesh' },
];

export const fullServices: FullService[] = [
    {
      category: 'Schools',
      overview: 'Our school programmes focus on the skills that support students both inside and beyond the classroom. Through structured socio-emotional learning and life skills education, students develop emotional awareness, resilience, communication, and decision-making skills. We equip educators with psychology-informed strategies and techniques to foster emotionally safe and inclusive classrooms, while our career guidance programmes support students in exploring their strengths, interests, and future opportunities through personalised counselling and evidence-based assessments.',
      outcomes: [
        'Emotionally safer classrooms',
        'Informed career choices',
        'Improved peer relationships',
        'Stronger socio-emotional skills',
        'Meaningful student engagement',
        'Positive classroom culture',
        'Enhanced life skills'
      ],
      rootedIn: [
        'Social-Emotional Learning (SEL)',
        'Child & Adolescent Development',
        'Experiential Learning',
        'Inclusive Education',
        'Psychometric Assessments',
        'Restorative Classroom Practices'
      ],
      cta: 'Request a School Proposal',
      ctaLink: '/contact'
    },
    {
      category: 'Universities',
      overview: 'Our university programmes focus on the knowledge and skills that prepare students for professional practice. Through structured training in psychological techniques, therapeutic communication, facilitation, and research design, students build the confidence and competence needed for real-world settings. We complement academic learning with experiential, dialogue-driven programmes that strengthen critical thinking, professional identity, and career readiness.',
      outcomes: [
        'Career readiness for diverse psychology and allied health roles',
        'Ethical and reflective practice',
        'Facilitation and group engagement techniques',
        'Therapeutic communication skills',
        'Interviewing techniques',
        'Psychometric Test Administration',
        'Counselling Microskills'
      ],
      rootedIn: [
        'Professional Competency Development',
        'Skills-Based Training',
        'Client-Centred Practice',
        'Reflective Supervision',
        'Interdisciplinary Collaboration'
      ],
      cta: 'Invite Us to Your Campus',
      ctaLink: '/contact'
    },
    {
        category: 'Rehab Centres',
        overview: 'Our programmes for rehabilitation centres are designed to complement the recovery journey through psychoeducation, wellbeing initiatives, and structured interventions. Led by trained facilitators, participants build emotional resilience, healthy coping strategies, and interpersonal skills in a safe and supportive environment. We work alongside rehabilitation teams to provide holistic programmes that promote long-term wellbeing and sustained recovery.',
        outcomes: [
            'Sustainable recovery practices',
            'Healthy coping strategies',
            'Relapse prevention strategies',
            'Holistic well-being',
            'Community and peer support',
            'Self-management skills'
        ],
        rootedIn: [
            'Trauma-Informed Approaches',
            'Recovery-Oriented Care',
            'Psychoeducational Interventions',
            'Addiction Recovery Principles',
            'Relapse Prevention',
            'Motivational Interviewing'
        ],
        cta: 'Join a Training Program',
        ctaLink: '/contact'
    },
    {
        category: 'NGOs',
        overview: 'Our programmes for NGOs are designed to strengthen communities through context-sensitive interventions that respond to the unique needs of the people they serve. We collaborate with organisations to deliver inclusive workshops, psychoeducation, and capacity-building initiatives that build emotional resilience, strengthen life skills, and access practical tools that support long-term well being.',
        outcomes: [
            'Inclusive community engagement',
            'Context-sensitive interventions',
            'Community empowerment',
            'Capacity building',
            'Lasting community impact',
            'Stronger support systems',
            'Self-advocacy'
        ],
        rootedIn: [
            'Participatory Approaches',
            'Context-Informed Design',
            'Lived Experience Integration',
            'Systems Thinking',
            'Social-Emotional Learning',
            'Co-Designed Interventions',
            'Multicultural Awareness'
        ],
        cta: 'Discuss a Collaboration',
        ctaLink: '/contact'
    },
    {
        category: 'Corporate Wellbeing',
        overview: 'Designed for organisations of all sizes, our corporate wellbeing programmes are designed to strengthen individual well-being while supporting healthier workplace systems. Through structured workshops, leadership development, and Employee Assistance Programmes (EAPs), we help organisations build emotionally resilient teams and create workplace cultures where people feel supported, connected, and equipped to perform at their best.',
        outcomes: [
            'Employee Assistance Programmes (EAP) support',
            'Leadership confidence',
            'Psychological safety',
            'Employee wellbeing',
            'Stronger workplace communication',
            'Organisational effectiveness',
            'Healthy workplace culture'
        ],
        rootedIn: [
            'Organisational Behaviour & Development',
            'Team Dynamics',
            'Systems-Oriented Practice',
            'Change Management',
            'Psychological Capital'
        ],
        cta: 'Book a Corporate Workshop',
        ctaLink: '/contact'
    },
    {
        category: 'Study Abroad',
        overview: 'Designed for students aspiring to pursue psychology, our consulting services provide personalised support throughout the national and international admissions process. From shortlisting universities and refining applications to SOP development, entrance exams, interview preparation, and application strategy, we provide personalised mentorship to help students make informed decisions and confidently navigate their academic pathways.',
        outcomes: [
            'University and programme clarity',
            'Strong application portfolio',
            'Expert mentorship',
            'SOP drafting & review',
            'Informed university choices',
            'Interview coaching',
            'Curated resources'
        ],
        rootedIn: [
            'Global Education Pathways',
            'Career Counselling',
            'Student-Centred Planning',
            'Vocational Psychology'
        ],
        cta: 'Explore Consulting Options',
        ctaLink: '/contact'
    },
    {
        category: 'Research Support',
        overview: 'Our research support services provide end-to-end guidance across the research journey. From refining research questions and developing robust study designs to statistical analysis, interpretation, reporting, and review, we provide structured, iterative support that strengthens the quality, rigour, and impact of every project.',
        outcomes: [
            'Research design support',
            'Statistical analysis',
            'Data interpretation',
            'Reporting & manuscript review',
            'Methodological rigour',
            'End-to-end research guidance',
            'Constructive feedback',
            'Collaborative guidance'
        ],
        rootedIn: [
            'Ethical Research Practices',
            'Scientific Inquiry',
            'Quantitative & Qualitative Research',
            'Data-Driven Insights',
            'Interdisciplinary Research'
        ],
        cta: 'Request Research Support',
        ctaLink: '/contact'
    },
];

export const faqs: FAQ[] = [
  { 
    question: 'What kinds of programmes does Insight Edge offer?', 
    answer: 'We design evidence-based programmes that support learning, wellbeing, and professional development across diverse settings. Our services include socio-emotional learning programmes for schools, career-ready training for university students, workplace wellbeing initiatives, rehabilitation and community programmes, study abroad consulting, clinical internships, and end-to-end research support. We also offer specialised workshops in art therapy, dance movement therapy (DMT), and other experiential approaches to mental health and wellbeing.' 
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
    answer: 'Yes. Our university programmes include training in therapeutic communication, counselling microskills, case conceptualisation, psychological interviewing, ethical practice, facilitation, and research methods. Designed to complement undergraduate and postgraduate psychology curricula, our workshops bridge academic learning with practical, career-ready skills.' 
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
