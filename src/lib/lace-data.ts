export interface Testimonial {
  id: string
  name: string
  title: string
  photo: string
  quote: string
  action?: string
  home?: boolean
  category?: string
  cardType?: string
  bannerQuote?: string
  highlight?: string
  socialType?: string
  handle?: string
  likes?: number
  companyBadge?: string
}

export interface BootcampSpeaker {
  name: string
  role: string
  photo: string
}

export interface BootcampDay {
  day: number
  topic: string
  speaker: string
  speakerPhoto?: string
  speakerRole?: string
  flyer: string
  selar: string
}

export const LACE_CONFIG = {
  links: {
    selar: 'https://selar.com/hammetlace',
    bootcamp: 'https://rebrand.ly/LeaderSALES',
    waitlist: 'https://rebrand.ly/LACERW',
    phone: '07082352779',
    phoneNice: '0708 235 2779',
  },
  dates: {
    eventStart: '2026-10-31T00:00:00+01:00',
    openingCeremony: 'Saturday, 31 October 2026',
    venue: '10 Kayode Alabi, Ogba, Lagos',
    trainingPeriod: 'Mon 2 Nov – Fri 13 Nov 2026 (Virtual)',
    examDate: 'Saturday, 14 November 2026',
    bootcampStart: '2026-10-01',
    bootcampDays: 21,
    bootcampTime: '11:00 PM WAT daily (Google Meet)',
  },
  tickets: [
    {
      name: 'Regular',
      price: '₦2,000',
      description: 'Standard admission to the Lagos AI Career Experience 1.0 opening and certified learning sessions.',
      popular: false,
      features: [
        'Access to Opening Ceremony in Ogba, Lagos',
        '2-week intensive virtual certification training',
        'AI Career Curriculum & work toolkits',
        'Eligibility for certification exam',
        'LACE Community & alumni access',
      ],
    },
    {
      name: 'VIP',
      price: '₦5,000',
      description: 'Enhanced access including exclusive workshop materials, priority seating, and direct mentor Q&A.',
      popular: true,
      features: [
        'Everything in Regular tier',
        'Reserved front-row seating at Opening Ceremony',
        'Full 21-day Leadership & Sales Bootcamp archive',
        'Direct breakout Q&A sessions with facilitators',
        'Verified Certificate of AI Mastery',
      ],
    },
    {
      name: 'Executive',
      price: '₦10,000',
      description: 'Full executive package for business leaders, founders, and professionals seeking 1-on-1 strategy.',
      popular: false,
      features: [
        'Everything in VIP tier',
        'Executive roundtable with Hammet leadership',
        'Private 1-on-1 AI implementation audit for your career/business',
        'Lifetime access to future Hammet masterclasses',
        'VIP Dinner & networking lounge access',
      ],
    },
  ],
  speakers: [
    {
      name: 'Mr Prince Obinna',
      role: 'Host & Executive Director, Hammet Limited',
      photo: '/lace/people/prince.png',
      bio: 'Convener of LACE, pioneer of AI career transformation in Nigeria, and executive educator focusing on high-leverage operator leadership.',
    },
    {
      name: 'Ms Angel Nwafor',
      role: 'Chief Operating Officer, Hammet Limited',
      photo: '/lace/people/angel.jpg',
      bio: 'Operations strategist, operator-leadership specialist, and execution architect behind Hammet’s pan-African learning initiatives.',
    },
    {
      name: 'Dr. Godswill Ikechukwu',
      role: 'CEO of WILLON & Electronics Engineer',
      photo: '/lace/people/godswill.jpg',
      bio: 'Hardware-to-software integration expert and tech ecosystem builder exploring practical AI implementation for industry.',
    },
    {
      name: 'Sharon Oni-yinka',
      role: 'Lead Visual Strategist & Survey Programmer',
      photo: '/lace/people/sharon.jpg',
      bio: 'Specialist in translating complex AI systems into intuitive communication structures and presentation architecture.',
    },
  ],
  bootcampDays: [
    { day: 1, topic: 'Sales: Using your ear to sell', speaker: 'Mr Prince Obinna', speakerPhoto: '/lace/people/prince.png', speakerRole: 'Host & Convener', flyer: '', selar: '' },
    { day: 2, topic: 'Leadership: Love as a manipulative strategy', speaker: 'Mr Prince Obinna', speakerPhoto: '/lace/people/prince.png', speakerRole: 'Executive Director', flyer: '', selar: '' },
    { day: 3, topic: 'Self-Discipline & The Ownership Formula', speaker: 'Dr. Godswill Ikechukwu', speakerPhoto: '/lace/people/godswill.jpg', speakerRole: 'CEO, WILLON', flyer: '', selar: '' },
    { day: 4, topic: 'The Psychology of Value Communication', speaker: 'Sharon Oni-yinka', speakerPhoto: '/lace/people/sharon.jpg', speakerRole: 'Lead Visual Strategist', flyer: '', selar: '' },
    { day: 5, topic: 'Systems Over Motivation: Building Daily Routines', speaker: 'Ms Angel Nwafor', speakerPhoto: '/lace/people/angel.jpg', speakerRole: 'Chief Operating Officer', flyer: '', selar: '' },
    { day: 6, topic: 'Understanding Pain Points Before Pitching', speaker: 'John Aba Igwe', speakerPhoto: '/lace/people/john.jpg', speakerRole: 'GoLang Developer & Closer', flyer: '', selar: '' },
    { day: 7, topic: 'High-Output Management for Solo Operators', speaker: 'Mr Prince Obinna', speakerPhoto: '/lace/people/prince.png', speakerRole: 'Executive Director', flyer: '', selar: '' },
    { day: 8, topic: 'Audience Perception & Emotional Anchoring', speaker: 'Elizabeth', speakerPhoto: '/lace/people/elizabeth.jpg', speakerRole: 'Creative Producer', flyer: '', selar: '' },
    { day: 9, topic: 'Navigating Pressure & Maintaining Executive Presence', speaker: 'Andrew', speakerPhoto: '/lace/people/andrew.jpg', speakerRole: 'Operations Lead', flyer: '', selar: '' },
    { day: 10, topic: 'Designing SOPs for Creative & Technical Work', speaker: 'Chimezie', speakerPhoto: '/lace/people/chimezie.jpg', speakerRole: 'Systems Engineer', flyer: '', selar: '' },
    { day: 11, topic: 'Discovery Calls & Multi-Touch Follow-Up Architecture', speaker: 'Joy', speakerPhoto: '/lace/people/joy.jpg', speakerRole: 'Growth Specialist', flyer: '', selar: '' },
    { day: 12, topic: 'Leadership: Sacrificial Leadership', speaker: 'Mr Prince Obinna', speakerPhoto: '/lace/people/prince.png', speakerRole: 'Convener of LACE', flyer: '', selar: '' },
    { day: 13, topic: 'Operator-Leadership: The exact steps to standing out in any team', speaker: 'Ms Angel Nwafor', speakerPhoto: '/lace/people/angel.jpg', speakerRole: 'Chief Operating Officer', flyer: '', selar: '' },
    { day: 14, topic: 'The Art of Ethical Persuasion in Business', speaker: 'Foma', speakerPhoto: '/lace/people/foma.jpg', speakerRole: 'Sales Strategist', flyer: '', selar: '' },
    { day: 15, topic: 'Cross-Functional Collaboration Under Extreme Deadlines', speaker: 'Chiemela', speakerPhoto: '/lace/people/chiemela.jpg', speakerRole: 'Tech Lead', flyer: '', selar: '' },
    { day: 16, topic: 'Craft Mastery with Speed & Precision', speaker: 'Lola', speakerPhoto: '/lace/people/lola.jpg', speakerRole: 'Product Designer', flyer: '', selar: '' },
    { day: 17, topic: 'From Consumer to Champion Mindset', speaker: 'Dr. Godswill Ikechukwu', speakerPhoto: '/lace/people/godswill.jpg', speakerRole: 'Electronics Engineer', flyer: '', selar: '' },
    { day: 18, topic: 'Visibility as a Multiplier for Quality Products', speaker: 'Sharon Oni-yinka', speakerPhoto: '/lace/people/sharon.jpg', speakerRole: 'Visual Strategist', flyer: '', selar: '' },
    { day: 19, topic: 'Building Unshakeable Conviction Before You Pitch', speaker: 'John Aba Igwe', speakerPhoto: '/lace/people/john.jpg', speakerRole: 'QuiAri Promoter', flyer: '', selar: '' },
    { day: 20, topic: 'Leading Without a Title in Fast-Growing Teams', speaker: 'Ms Angel Nwafor', speakerPhoto: '/lace/people/angel.jpg', speakerRole: 'Execution Strategist', flyer: '', selar: '' },
    { day: 21, topic: 'The Grand Finale: Reimagining Work with AI Leadership', speaker: 'Mr Prince Obinna & Team', speakerPhoto: '/lace/people/prince.png', speakerRole: 'Executive Faculty', flyer: '', selar: '' },
  ],
  testimonials: [
    {
      id: 'john-aba-igwe',
      name: 'John Aba Igwe',
      title: 'QuiAri Promoter & GoLang Developer',
      photo: '/lace/people/t-john.jpg',
      category: 'tech',
      home: true,
      cardType: 'media',
      bannerQuote: '"Before the LACE Bootcamp, I had the skill but lacked the structure. This is not just a bootcamp, it is a leadership factory."',
      quote:
        'Before the LACE Bootcamp, I had the skill but lacked the structure. The LACE Bootcamp gave me clarity, confidence and a champion mindset. It taught me how to lead myself, lead a team, and communicate value in a way that sells. This is not just a bootcamp, it is a leadership factory. I am proud to be part of LACE history.',
      action:
        'I now lead with daily accountability: I start my day with a clear to-do list and end it with a report. I took ownership in my Taskforce and now coordinate and follow up with members instead of waiting to be told. I document and delegate, with SOPs for my brand design work. On sales, I stopped selling and started serving: I now do discovery calls to understand pain points before pitching, I follow up at least three times, and I have at least one intentional sales conversation every day. LACE moved me from being busy to being productive, from consumer to champion.',
      companyBadge: 'QuiAri · GoLang',
    },
    {
      id: 'hannah-sharon',
      name: 'Sharon Oni-yinka',
      title: 'Presentation Designer & Survey Programmer',
      photo: '/lace/people/t-sharon.jpg',
      category: 'creative',
      home: true,
      cardType: 'text',
      highlight: 'I LOVE the LACE Bootcamp and so does our entire team! Leadership starts with me before it extends to others.',
      quote:
        'The LACE Bootcamp has taught me to look at leadership and sales differently. I have learned that leadership starts with me before it extends to others, and that I must understand my strengths and potential to lead effectively. I also learned that my time, energy and skills are valuable resources, and that giving them is about believing in a vision and contributing to its success.',
      action:
        'I have been more intentional about taking responsibility for my tasks, contributing ideas, and supporting the Task Force’s shared goals. I have also started paying more attention to how I communicate my skills and the value I can offer.',
      companyBadge: 'Mixpanel Partner',
    },
    {
      id: 'godswill-ikechukwu',
      name: 'Godswill Ikechukwu',
      title: 'Electronic Engineer & CEO of WILLON',
      photo: '/lace/people/t-godswillik.jpg',
      category: 'founder',
      home: false,
      cardType: 'media',
      bannerQuote: '"For the time and attention I gave, it’s 3X’d my conviction with massive ROI! Boldness in sales is clarity."',
      quote:
        'The LACE Bootcamp has boosted my knowledge of leadership and sales, moving me from 4/10 to 6/10, and by the end I am aiming for 8.63/10. I have realized that boldness in sales is not loudness. It has made me focus on clarity and conviction instead of trying to be louder, because sales is about perception. Leadership goes beyond titles: it is carrying the burden of a vision to transform lives and systems.',
      action:
        'I am now mastering my craft with speed to achieve excellence and leading team execution with clarity.',
      companyBadge: 'WILLON Technologies',
    },
    {
      id: 'chidinma-ozor',
      name: 'Chidinma Emmanuella Ozor',
      title: 'Aspiring Entrepreneur & Founder',
      photo: '/lace/people/t-chidinma.jpg',
      category: 'founder',
      home: false,
      cardType: 'social',
      socialType: 'linkedin',
      handle: 'chidinma-ozor',
      quote:
        'Chili Piper just implemented our Wall of Love using LACE principles 🌶️. Before the bootcamp, I struggled with public speaking and trembled with fear. Now I can speak comfortably to a multitude and pitch customers with total composure. Results have been 🔥🔥🔥! Check it out.',
      action:
        'Overcame public speaking apprehension and now pitches directly to prospective clients without trembling.',
      likes: 84,
    },
    {
      id: 'godswill-nwafor',
      name: 'Godswill Nwafor',
      title: 'Software Engineer & Frontend Lead',
      photo: '/lace/people/t-godswillnw.jpg',
      category: 'tech',
      home: false,
      cardType: 'media',
      bannerQuote: '"Once we added LACE leadership systems, it unlocked so much more engineering throughput and alignment! 🔥"',
      quote:
        'The LACE Bootcamp has been an eye-opening experience. It has taught me that leadership goes beyond titles, and that effective communication, relationship-building and the ability to communicate value are essential in every profession. As a Software Engineer, the experience has broadened my perspective.',
      action:
        'I have become more intentional about how I communicate and collaborate with people on the LACE AI project, understanding needs, communicating ideas clearly, and taking initiative.',
      companyBadge: 'Levels.fyi Alumni',
    },
    {
      id: 'darren-global-foma',
      name: 'The Global Foma',
      title: 'Founder, Foma Accessories International',
      photo: '/lace/people/t-foma.jpg',
      category: 'founder',
      home: true,
      cardType: 'media',
      bannerQuote: '"It’s the easiest and simplest mindset upgrade we found on the market! Get into rooms and connect."',
      quote:
        'The LACE Bootcamp has shaped the way I see and lead my team. It has helped me become bold in the entrepreneurship industry and boosted my zeal to go all out for more. Get into rooms, and pay to be in those rooms if possible. Meet and connect with more people. I am grateful for the opportunity to be part of this great force.',
      action:
        'Secured high-value supplier partnerships and expanded cross-border inventory operations with renewed confidence.',
      companyBadge: 'Foma International',
    },
    {
      id: 'joy-eseohen',
      name: 'Joy Eseohen',
      title: 'Finance Officer & Operations Analyst',
      photo: '/lace/people/t-joy.jpg',
      category: 'leadership',
      home: true,
      cardType: 'text',
      highlight: 'LACE has truly transformed our community building and personal systems. Leadership is about giving without expecting anything in return.',
      quote:
        'On Day 12, Sacrificial Leadership with Sir Prince, one line stuck with me: "Leadership is about giving without expecting anything in return, by focusing on making a lasting impact in people, not personal recognition." I will keep practising this consistently.',
      action:
        'I have become more confident in taking ownership, creating new systems for effective team results, and asking the right questions.',
      companyBadge: 'Acquire.com Verified',
    },
    {
      id: 'elizabeth-ndubuisi',
      name: 'Elizabeth Ndubuisi',
      title: 'HR Associate & Talent Lead, Hammet',
      photo: '/lace/people/t-elizabeth.jpg',
      category: 'leadership',
      home: true,
      cardType: 'text',
      highlight: 'LACE has been a massive part of my growth. Self-understanding is not a luxury, it is leverage. Real raw lessons without motivational fluff.',
      quote:
        'For the first few days, my job was simple: send the announcement. But I was not getting the messages myself, until one session stopped me cold: How can you announce growth you are not living? That was the moment everything changed. I became intentional and started showing up for me.',
      action:
        'Before LACE, pressure made me tremble. Now I breathe under pressure, stay calm and execute. I now know leadership is what you do when no one is watching.',
      companyBadge: 'Selfmade.today',
    },
    {
      id: 'vine-creative',
      name: 'Vine',
      title: 'Cross-Functional Creative Assistant',
      photo: '/lace/people/t-vine.jpg',
      category: 'creative',
      home: false,
      cardType: 'social',
      socialType: 'x',
      handle: '@vine_creative',
      quote:
        'I have been in the @hammet_ai LACE bootcamp for weeks and I absolutely LOVE it ❤️. Once you start, you realize you cannot sell a solution to someone whose problem you have not taken the time to understand. Joining is a decision, showing up is a commitment. Truly worth every minute 🙏',
      action:
        'Switched from surface-level tasks to deep contextual alignment, mapping each creative deliverable to direct customer pain points.',
      likes: 67,
    },
    {
      id: 'martha-okenwa',
      name: 'Martha Okenwa',
      title: 'Executive Assistant & Team Coordinator',
      photo: '/lace/people/t-martha.jpg',
      category: 'leadership',
      home: false,
      cardType: 'media',
      bannerQuote: '"Effective selling requires a people-oriented mindset. You must make the product about solving people’s problems."',
      quote:
        'These sessions have been truly mind-shifting and transformational. I have learned a lot about sales and leadership, especially that effective selling requires a people-oriented mindset. You must make the product about the people, helping them see how it solves their problems. Leadership is an opportunity to serve society at large.',
      action:
        'Serving as a student leader on campus, implementing empathy-first delegation and structured project timelines.',
      companyBadge: 'Executive Desk',
    },
    {
      id: 'chinenye-akunna',
      name: 'Chinenye Akunna',
      title: 'Writer & Community Manager',
      photo: '/lace/people/t-chinenye.jpg',
      category: 'creative',
      home: false,
      cardType: 'text',
      highlight: 'Leadership is not about being in charge, but about taking care of those in our charge.',
      quote:
        'I have become more conscious of what excellent leadership entails. I have learnt that leadership is not about being in charge, but about taking care of those in my charge. I am super grateful to Witty Prince for this initiative.',
      action:
        'I have taken more initiative lately, starting first instead of waiting for others.',
      companyBadge: 'Hammet Community',
    },
    {
      id: 'ugochi-benita',
      name: 'Umeugo Ugochi Benita',
      title: 'Operations Strategist',
      photo: '/lace/people/t-ugochi.jpg',
      category: 'leadership',
      home: false,
      cardType: 'social',
      socialType: 'linkedin',
      handle: 'ugochi-benita',
      quote:
        'Operator Leadership session with Angel Simcha was pure gold! 💡 Key takeaway: Assumption is one position never to take as a leader. Be crystal clear on your desired outcome first, ask questions when stuck, and bring 100% excellence.',
      action:
        'Eliminated assumptions in project planning; implemented an outcome-first checklist before beginning any project phase.',
      likes: 42,
    },
    {
      id: 'oluwatoba-abolarin',
      name: 'Oluwatoba Abolarin',
      title: 'Motion Designer & Visual Artist',
      photo: '/lace/people/t-oluwatoba.jpg',
      category: 'creative',
      home: false,
      cardType: 'social',
      socialType: 'x',
      handle: '@toba_motion',
      quote:
        'One speaker said: "Your system is only as strong as your consistency." Since hearing that on the LACE bootcamp, I have been showing up every single day to master motion design. Big gratitude to Sir Witty Prince! 🚀⚡',
      action:
        'One speaker said your system is only as strong as your consistency. Since then I have been constantly learning and practising motion design.',
      likes: 91,
    },
    {
      id: 'the-mystic',
      name: 'The Mystic',
      title: 'Brand & Motion Designer',
      photo: '/lace/people/t-mystic.jpg',
      category: 'creative',
      home: false,
      cardType: 'media',
      bannerQuote: '"Nobody buys a great product that is unknown; a great and visible product sells. Visible impact wins!"',
      quote:
        'I have always known sales was important, but the LACE Bootcamp emphasised how much more important it is. The very fact that being an effective and efficient leader depends on how well you can sell your ideas and vision to others was an eye-opener.',
      action:
        'I started posting my work publicly. A great and visible product sells, so I am taking intentional steps to be visible.',
      companyBadge: 'Mystic Brand Labs',
    },
    {
      id: 'cadet-mimi',
      name: 'Cadet Mimi',
      title: 'Operations & Sales Representative',
      photo: '/lace/people/t-mimi.jpg',
      category: 'leadership',
      home: false,
      cardType: 'text',
      highlight: 'Sales is about solving problems and building trust, not just selling. Even through challenges, I became proactive and intentional.',
      quote:
        'The LACE Bootcamp came at the right time and changed my mindset about leadership, accountability and sales. I learned that good leadership starts with self-discipline and taking ownership, and that sales is about solving problems and building trust, not just selling.',
      action:
        'Revamped daily outreach protocol, replacing standard product pitches with consultative problem-solving dialogues.',
      companyBadge: 'Frontline Sales Desk',
    },
  ],
  faq: [
    {
      q: 'What is LACE 1.0?',
      a: 'LACE 1.0 (Lagos AI Career Experience) is a flagship certification experience by Hammet School of AI Foundations designed to equip African professionals, students, and entrepreneurs with practical, job-ready artificial intelligence competencies.',
    },
    {
      q: 'Where will the Opening Ceremony take place?',
      a: 'The Opening Ceremony takes place in-person on Saturday, 31 October 2026 at 10 Kayode Alabi, Ogba, Lagos. The following 2-week intensive training is fully virtual, allowing participants to join seamlessly from anywhere.',
    },
    {
      q: 'Is the certification exam compulsory?',
      a: 'Yes. To maintain high academic and industry standards, the certification examination on Saturday, 14 November 2026 is compulsory for all credential candidates.',
    },
    {
      q: 'What happens after I register on Selar?',
      a: 'You will immediately receive confirmation, venue details, calendar invites, and direct onboarding links into the private LACE 1.0 participant network.',
    },
    {
      q: 'Can I still get the 21-Day Leadership and Sales Bootcamp sessions?',
      a: 'Yes! Every LACE 1.0 ticket provides full access to the complete 21-day bootcamp session archives and recordings.',
    },
  ],
}
