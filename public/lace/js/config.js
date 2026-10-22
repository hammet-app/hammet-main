/* =====================================================================
   LACE 1.0 WEBSITE: THE ONE FILE YOU EDIT FOR LINKS, FLYERS AND CONTENT
   ---------------------------------------------------------------------
   Everything that changes over time lives here. You do not need to touch
   the HTML pages for any of the items below.
   ===================================================================== */
window.LACE = {

  /* ---------- 1. LINKS ---------- */
  links: {
    selar:    'https://selar.com/hammetlace',   // LACE 1.0 tickets (every "Register" button)
    bootcamp: 'https://rebrand.ly/LeaderSALES', // free bootcamp group
    waitlist: 'https://rebrand.ly/LACERW',      // waitlist group for people not ready to pay yet
    phone:    '07082352779',                    // LACE line (call and WhatsApp)
    phoneNice:'0708 235 2779'
  },

  /* ---------- 2. DATES ---------- */
  eventStart: '2026-10-31T00:00:00+01:00',      // countdown target (Lagos time)
  bootcamp: { firstDay: '2026-10-01', days: 21, time: '11pm WAT' },
  /* The bootcamp badge changes by itself using Lagos time:
       before 1 Oct  -> "Starts 1 October"
       1 to 21 Oct   -> "Live now, Day N of 21"
       from 22 Oct   -> "Completed" with a number to call and a link to get access.
     To preview any day, add ?bcdate=2026-10-22 to the page address. */

  /* ---------- 3. FLYERS (drop the image into assets/flyers/ and put its file name here) ---------- */
  flyers: {
    lace:     '',   // main LACE 1.0 flyer, e.g. 'assets/flyers/lace-flyer.jpg'
    bootcamp: ''    // 21 Days Leadership and Sales Bootcamp flyer, e.g. 'assets/flyers/bootcamp-flyer.jpg'
  },

  /* ---------- 4. PREVIOUS BOOTCAMP SPEAKERS (moving gallery on the bootcamp page) ----------
     photo: '' shows a styled placeholder. To add a real photo, save it in assets/speakers/
     and write the path, e.g. photo: 'assets/speakers/jane.jpg'. Add or remove rows freely. */
  bootcampSpeakers: [
    { name: 'Mr Prince Obinna',  role: 'Host, Executive Director, Hammet Limited', photo: 'assets/people/prince.png' },
    { name: 'Ms Angel Nwafor',   role: 'COO, Hammet Limited',                       photo: 'assets/people/angel.jpg' },
    { name: 'Speaker name',      role: 'Title, Company', photo: '' },
    { name: 'Speaker name',      role: 'Title, Company', photo: '' },
    { name: 'Speaker name',      role: 'Title, Company', photo: '' },
    { name: 'Speaker name',      role: 'Title, Company', photo: '' },
    { name: 'Speaker name',      role: 'Title, Company', photo: '' },
    { name: 'Speaker name',      role: 'Title, Company', photo: '' }
  ]
};

/* ---------- 5. THE 21 BOOTCAMP DAYS ----------
   topic:  what the session is about ('' shows "Topic to be announced")
   speaker: guest trainer ('' hides it)
   flyer:  path to that day's flyer image ('' shows a generated placeholder flyer)
   selar:  the Selar link for that day. LEAVE '' UNTIL YOU HAVE IT.
           As soon as you paste a link, the "Get Day N on Selar" button turns on by itself. */
window.BOOTCAMP_DAYS = [
  { day: 1,  topic: 'Sales: Using your ear to sell',                                   speaker: '', flyer: '', selar: '' },
  { day: 2,  topic: 'Leadership: Love as a manipulative strategy',                      speaker: '', flyer: '', selar: '' },
  { day: 3,  topic: '', speaker: '', flyer: '', selar: '' },
  { day: 4,  topic: '', speaker: '', flyer: '', selar: '' },
  { day: 5,  topic: '', speaker: '', flyer: '', selar: '' },
  { day: 6,  topic: '', speaker: '', flyer: '', selar: '' },
  { day: 7,  topic: '', speaker: '', flyer: '', selar: '' },
  { day: 8,  topic: '', speaker: '', flyer: '', selar: '' },
  { day: 9,  topic: '', speaker: '', flyer: '', selar: '' },
  { day: 10, topic: '', speaker: '', flyer: '', selar: '' },
  { day: 11, topic: '', speaker: '', flyer: '', selar: '' },
  { day: 12, topic: 'Leadership: Sacrificial Leadership',                               speaker: 'Mr Prince Obinna', flyer: '', selar: '' },
  { day: 13, topic: 'Operator-Leadership: The exact steps to standing out in any team', speaker: 'Ms Angel Nwafor',  flyer: '', selar: '' },
  { day: 14, topic: '', speaker: '', flyer: '', selar: '' },
  { day: 15, topic: '', speaker: '', flyer: '', selar: '' },
  { day: 16, topic: '', speaker: '', flyer: '', selar: '' },
  { day: 17, topic: '', speaker: '', flyer: '', selar: '' },
  { day: 18, topic: '', speaker: '', flyer: '', selar: '' },
  { day: 19, topic: '', speaker: '', flyer: '', selar: '' },
  { day: 20, topic: '', speaker: '', flyer: '', selar: '' },
  { day: 21, topic: '', speaker: '', flyer: '', selar: '' }
];

/* ---------- 6. TESTIMONIALS ----------
   n: name   t: title   f: photo file in assets/people/   x: testimonial   a: specific action taken (optional)
   home: true  => shows in the small gallery on the homepage (keep it to 5).
   Every person needs a photo. To add someone: add a row and drop the photo into assets/people/. */
window.TESTIMONIALS = [
  { n: 'John Aba Igwe', t: 'QuiAri Promoter, GoLang Developer', f: 'assets/people/t-john.jpg', home: true,
    x: 'Before the LACE Bootcamp, I had the skill but lacked the structure. The LACE Bootcamp gave me clarity, confidence and a champion mindset. It taught me how to lead myself, lead a team, and communicate value in a way that sells. This is not just a bootcamp, it is a leadership factory. I am proud to be part of LACE history.',
    a: 'I now lead with daily accountability: I start my day with a clear to-do list and end it with a report. I took ownership in my Taskforce and now coordinate and follow up with members instead of waiting to be told. I document and delegate, with SOPs for my brand design work. On sales, I stopped selling and started serving: I now do discovery calls to understand pain points before pitching, I follow up at least three times, and I have at least one intentional sales conversation every day. LACE moved me from being busy to being productive, from consumer to champion.' },

  { n: 'Chidinma Emmanuella Ozor', t: 'Aspiring Entrepreneur', f: 'assets/people/t-chidinma.jpg',
    x: 'Before the LACE Bootcamp, I struggled with speaking in public, even among my peers. Whenever I wanted to speak, I would tremble with fear. Even speaking to customers was a difficult task. After spending time in this bootcamp, I started changing so much that I can now speak comfortably, not just to my peers but to a multitude. It also gave me the courage to interact properly with customers. I am very grateful to the LACE team, and I hope they keep giving young people this opportunity to grow and become the best of themselves.' },

  { n: 'Sharon Oni-yinka', t: 'Presentation Designer and Survey Programmer', f: 'assets/people/t-sharon.jpg', home: true,
    x: 'The LACE Bootcamp has taught me to look at leadership and sales differently. I have learned that leadership starts with me before it extends to others, and that I must understand my strengths and potential to lead effectively. I also learned that my time, energy and skills are valuable resources, and that giving them is about believing in a vision and contributing to its success. On the sales side, I am learning the importance of understanding people, communicating value, and helping them see why what I offer matters.',
    a: 'I have been more intentional about taking responsibility for my tasks, contributing ideas, and supporting the Task Force\'s shared goals. I have also started paying more attention to how I communicate my skills and the value I can offer, while being more mindful of people\'s needs when interacting with them.' },

  { n: 'Godswill Nwafor', t: 'Software Engineer and Frontend Developer', f: 'assets/people/t-godswillnw.jpg',
    x: 'The LACE Bootcamp has been an eye-opening experience. It has taught me that leadership goes beyond titles, and that effective communication, relationship-building and the ability to communicate value are essential in every profession. As a Software Engineer, the experience has broadened my perspective and inspired me to be more intentional about my personal and professional growth. I am grateful for the lessons and the opportunity to become a better leader and problem-solver.',
    a: 'I have become more intentional about how I communicate and collaborate with people, especially while working with my development team on the LACE AI project. I now focus not just on completing my technical tasks, but on understanding people\'s needs, communicating ideas clearly, taking initiative, and contributing to the team\'s overall goal. This has helped me see leadership as something demonstrated through everyday actions, not just a title.' },

  { n: 'Vine', t: 'Cross-Functional Creative Assistant (AI, Finance, Marketing and Design)', f: 'assets/people/t-vine.jpg',
    x: 'I am learning that commitment begins long before showing up. It begins with understanding the vision, knowing what you can offer, and choosing to commit. You cannot be forced to care about a vision you never took the time to understand. The same applies to sales: you cannot sell a solution to someone whose problem you have not taken the time to understand. People do not need to be convinced of everything; they need to see why something matters to them. Joining is a decision, but showing up is a commitment. Whether in leadership or sales, impact begins when you move beyond intention and take responsibility for the value you bring.' },

  { n: 'Chinenye Akunna', t: 'Writer and Community Manager', f: 'assets/people/t-chinenye.jpg',
    x: 'So far, I have not been able to follow religiously, but I have become more conscious of what excellent leadership entails. I have learnt that leadership is not about being in charge, but about taking care of those in my charge. I am super grateful to Witty Prince for this initiative.',
    a: 'I have taken more initiative lately, starting first instead of waiting for others.' },

  { n: 'Umeugo Ugochi Benita', t: 'LACE Bootcamp Participant', f: 'assets/people/t-ugochi.jpg',
    x: 'I have been actively involved in two sessions, but I will share my lessons from the session on Operator Leadership by Angel Simcha. The session was insightful. I learnt the importance of being clear on your outcome first, because it determines the steps you take. I learnt that assumption is one position not to take as a leader: be clear on your role and ask questions where you are stuck. I also learnt to put in my best wherever I lead; it is better not to be involved than to do things nonchalantly. Lastly, I learnt that leadership is not only for those with titles.' },

  { n: 'Joy Eseohen', t: 'Finance Officer', f: 'assets/people/t-joy.jpg', home: true,
    x: 'I have learned many things, and if I wrote them all it would be more than an epistle. But on Day 12, Sacrificial Leadership with Sir Prince, one line stuck with me: "Leadership is about giving without expecting anything in return, by focusing on making a lasting impact in people, not personal recognition." I will keep practising this consistently, even after the bootcamp.',
    a: 'Based on the leadership sessions, which impacted me the most, I have become more confident in taking ownership, taking a step to do things even if it means I have to be the first and only one doing it. I have brought this into my work ethic by creating new systems for effective results, and by asking the right questions of the team.' },

  { n: 'Martha Okenwa', t: 'Executive Assistant, Hammet Limited', f: 'assets/people/t-martha.jpg',
    x: 'These sessions have been truly mind-shifting and transformational. I have learned a lot about sales and leadership, especially that effective selling requires a people-oriented mindset. You must make the product about the people, helping them see how it solves their problems. On leadership, I have learned that it is a calling that demands sacrifice. It is about being willing to see others become better, lives transformed and systems changed for good. These lessons have reshaped my perspective, helping me see leadership not as a badge of honour but as an opportunity to serve people and society at large.',
    a: 'I am currently serving as a leader in certain spaces, especially on campus. What I have learnt has become a solid resolve to put my best to work and to intentionally practise empathy in my relationships with the people I lead and the leaders working alongside me.' },

  { n: 'Godswill Ikechukwu', t: 'Electronic Engineer, CEO of WILLON, Ops Director at CampFlux', f: 'assets/people/t-godswillik.jpg',
    x: 'The LACE Bootcamp has boosted my knowledge of leadership and sales, moving me from 4/10 to 6/10, and by the end I am aiming for 8.63/10. I have realized that boldness in sales is not loudness. It has made me focus on clarity and conviction instead of trying to be louder, because sales is about perception. I also understand better that leadership goes beyond titles: it is carrying the burden of a vision to transform lives and systems. I now lead with excellence, with or without a title. I have also come to see that leadership is a form of selling: getting someone to take an action you want them to take.',
    a: 'I am now mastering my craft with speed to achieve excellence.' },

  { n: 'Elizabeth Ndubuisi', t: 'Executive Assistant and HR Associate, Hammet Limited', f: 'assets/people/t-elizabeth.jpg', home: true,
    x: 'For the first few days of the bootcamp, my job was simple: send the announcement, post the highlight, make sure everyone else gets it. But I was not getting the messages myself, until one session stopped me cold. How can you announce growth you are not living? That was the moment everything changed. I became intentional and started showing up for me. There was no motivational fluff. The speakers really poured into us, practically, raw and real.',
    a: 'Before LACE, pressure made me tremble and make mistakes. Now I breathe under pressure, stay calm and execute. Before LACE, I never studied myself. Now I know that self-understanding is not a luxury, it is leverage. I also found a real community, and working with people like Coco Jane, Eniola and Precious has been one of my highlights. I now know leadership is what you do when no one is watching, and that I have to lead myself before leading others.' },

  { n: 'Oluwatoba Abolarin', t: 'Motion Designer', f: 'assets/people/t-oluwatoba.jpg',
    x: 'The LACE Bootcamp has impacted me greatly. I have learned a lot from the various speakers, from the convener, Sir Witty Prince, and from Simon Sinek\'s videos. These lessons have challenged my perspective on leadership and inspired me to learn more about it from great leaders such as John C. Maxwell. It has been a pleasure, and I am very grateful.',
    a: 'One speaker said your system is only as strong as your consistency. Since then I have been constantly learning and practising my motion design and related skills. That is the major action I have taken.' },

  { n: 'The Mystic', t: 'Brand and Motion Designer', f: 'assets/people/t-mystic.jpg',
    x: 'I have always known sales was important, but the LACE Bootcamp emphasised how much more important it is. The very fact that being an effective and efficient leader depends on how well you can sell your ideas and vision to others was an eye-opener.',
    a: 'I started posting my work. Nobody buys a great product that is unknown; a great and visible product sells. So I am taking steps to be visible.' },

  { n: 'The Global Foma', t: 'Founder, Foma Accessories International, and Importation Expert Agent', f: 'assets/people/t-foma.jpg', home: true,
    x: 'The LACE Bootcamp has shaped the way I see and lead my team. It has helped me become bold in the entrepreneurship industry and boosted my zeal to go all out for more. Get into rooms, and pay to be in those rooms if possible. Meet and connect with more people. I am grateful for the opportunity to be part of this great force for greatness, because this is just the beginning. Thank you so much, Witty Prince and the team.' },

  { n: 'Cadet Mimi', t: 'Operations Communications Desk and Sales Representative', f: 'assets/people/t-mimi.jpg',
    x: 'The LACE Bootcamp has impacted me positively. It came at the right time and changed my mindset about leadership, accountability and sales. I learned that good leadership starts with self-discipline and taking ownership, and that sales is about solving problems and building trust, not just selling. Even though I had data challenges, the sessions I attended made me more confident, proactive and intentional. I now approach my work and conversations differently.' }
];
