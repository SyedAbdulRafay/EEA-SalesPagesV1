import { ServiceData } from '../types';

export const servicesData: Record<string, ServiceData> = {
  'self-study': {
    id: 'self-study',
    name: 'Self-Study',
    badge: 'Independent & Flexible',
    tagline: 'Learn at your own pace without scheduled classes',
    price: 20,
    period: '/ month',
    ctaText: 'Start Self-Study',
    vibe: 'Independence, flexibility, self-paced learning, affordable entry point',
    vibePill: 'Self-Paced Learning',
    hero: {
      headline: 'Build English accuracy and control on your own schedule.',
      supportingText: 'Work through practical, bite-sized lessons whenever you have time, ask questions in our private forum, and stop relying on guesswork.',
      priceNotice: '$20 / month · Cancel anytime · Instant access',
      secondaryNote: 'No live classes — 100% self-paced with direct Q&A support.',
      previewBadge: 'All Digital Courses + Student Community + Q&A Forum',
    },
    problem: {
      sectionTitle: 'The Problem with Rigid Schedules and Guesswork',
      sectionSubtitle: 'Studying English alone shouldn’t mean feeling lost or forced into class times that clash with your daily life.',
      points: [
        {
          title: 'Your schedule does not fit fixed live class times',
          description: 'Demanding work hours, family commitments, and varying time zones make attending weekly live sessions stressful and impractical.',
          highlight: 'Need flexibility',
        },
        {
          title: 'Free apps and videos leave you with unanswered questions',
          description: 'You watch tutorials and memorize grammar rules, but when you wonder why a specific phrasing sounds unnatural, no one is there to explain.',
          highlight: 'Lack of clarity',
        },
        {
          title: 'You want real direction without a large financial commitment',
          description: 'You are ready to prioritize your English, but you want an affordable starting point to build a steady routine before committing to live coaching.',
          highlight: 'Budget-friendly',
        },
        {
          title: 'You need practical spoken patterns, not abstract rules',
          description: 'Traditional textbooks teach formal grammar formulas that feel awkward in everyday conversation and professional workplace chats.',
          highlight: 'Real communication',
        },
      ],
    },
    solution: {
      sectionTitle: 'A Structured Self-Paced Path That Fits Your Life',
      sectionSubtitle: 'Clear lessons, practical exercises, and direct forum answers whenever you need them.',
      points: [
        {
          title: 'Learn in 15-minute daily pockets',
          description: 'Short, focused video and audio lessons fit effortlessly into your morning coffee, commute, or quiet evenings.',
          iconName: 'clock',
        },
        {
          title: 'Direct Q&A forum answers',
          description: 'Post your exact phrasing questions in our private academy forum and receive clear, human explanations from Anming.',
          iconName: 'message-square',
        },
        {
          title: 'Focus on control over cramming',
          description: 'Target the recurring errors and awkward phrasings that keep you second-guessing yourself when you speak.',
          iconName: 'target',
        },
        {
          title: 'Global classmate community',
          description: 'Connect with motivated professionals and learners worldwide who are walking the same study path.',
          iconName: 'users',
        },
      ],
    },
    whatYouGet: {
      sectionTitle: 'What You Get with Self-Study',
      sectionSubtitle: 'Everything you need to study consistently on your own terms for $20 per month.',
      items: [
        {
          title: 'All Digital Courses Included',
          detail: 'Full, unrestricted access to the complete digital course library (video, text, and downloadable audio lessons).',
        },
        {
          title: 'Classmate Community',
          detail: 'Join the private student community space to share progress, study tips, and stay motivated together.',
        },
        {
          title: 'Ask Questions in the Q&A Forum',
          detail: 'Submit specific sentence questions or confusing grammar points and get dedicated instructor answers.',
        },
        {
          title: 'Learn at Your Own Pace',
          detail: 'No deadlines, no rush, and no expiration dates on your progress. Study whenever your schedule allows.',
        },
        {
          title: 'No Live Classes',
          detail: 'Zero attendance pressure. Designed specifically for students who want private, independent self-study.',
        },
      ],
      calloutBox: {
        title: 'Ideal for independent learners',
        desc: 'If you prefer studying quietly, reviewing lessons multiple times, and asking questions when they arise, Self-Study gives you structured academy training with complete freedom.',
      },
    },
    testimonials: {
      sectionTitle: 'What Our Students Say',
      sectionSubtitle: 'Real experiences from students learning English with Anming and English Evolution Academy.',
      note: 'Academy student reviews from our global learning community.',
      items: [
        {
          id: 't-agnes',
          quote: 'I consider myself lucky to have found Anming’s channel on YouTube. I have had many difficulties improving my English, among them understanding the nuanced differences between similar words.',
          author: 'Agnes',
          location: 'from Hungary',
          contextTag: 'Found clear answers to subtle word differences',
        },
        {
          id: 't-nataliia',
          quote: 'I’ve tried so many different English courses before that I lost count. I never finished any of them! When I came across Anming on Facebook, I immediately liked her teaching style.',
          author: 'Nataliia',
          location: 'from Ukraine',
          contextTag: 'Teaching style that keeps you engaged',
        },
        {
          id: 't-abed',
          quote: 'There are so many methods for teaching the English language, especially on social media. What attracted me to Anming’s school was the sense of comfort I felt as a learner.',
          author: 'Abed',
          location: 'from Syria',
          contextTag: 'Comfortable, non-judgmental learning',
        },
      ],
    },
    pricing: {
      sectionTitle: 'Simple, Transparent Pricing',
      sectionSubtitle: 'No contracts, no surprise fees. Cancel anytime in one click.',
      planName: 'Self-Study Academy Access',
      priceString: '$20',
      billingCadence: 'per month',
      includedSummary: [
        'All digital courses (video, text, audio)',
        'Classmate community access',
        'Ask questions in the Q&A forum',
        'Learn 100% at your own pace',
        'No live classes required',
      ],
      guaranteeOrPolicy: 'Cancel or pause your membership anytime from your account dashboard with zero friction.',
    },
    finalCta: {
      headline: 'Ready to study English with clear direction?',
      reinforcingText: 'Get instant access to all digital courses and the Q&A forum today for just $20 per month.',
      supportingNote: 'Instant online access · Cancel anytime · Learn at your own pace',
    },
  },

  'group-study': {
    id: 'group-study',
    name: 'Group Study',
    badge: 'Live Small Group',
    tagline: 'Practice real speaking every week with max 8 students',
    price: 250,
    period: '/ month',
    ctaText: 'Join Group Study',
    vibe: 'Structure, community, live interaction, small-group learning, accountability',
    vibePill: 'Live Interaction & Structure',
    hero: {
      headline: 'Practice real speaking every week in a small, supportive group.',
      supportingText: 'Move from understanding English in your head to speaking it accurately and calmly. Taught live by Anming with a strict cap of 8 students per class.',
      priceNotice: '$250 / month · Max 8 students · Structured curriculum',
      secondaryNote: 'Active speaking time guaranteed in every session — not a lecture.',
      previewBadge: 'Small Live Cohort (Max 8) + Structured Curriculum + Digital Access',
    },
    problem: {
      sectionTitle: 'The Barrier Between Knowing English and Speaking It',
      sectionSubtitle: 'Most students understand English well when reading or listening, but freeze when put on the spot.',
      points: [
        {
          title: 'You understand English well, but hesitate when speaking',
          description: 'You translate words in your mind, second-guess your grammar, and often end up saying the safe, simple sentence instead of what you really mean.',
          highlight: 'Mind freeze',
        },
        {
          title: 'You lack a safe, consistent space to practice out loud',
          description: 'Practicing in high-pressure work meetings or stressful public situations creates anxiety rather than confidence and steady growth.',
          highlight: 'No practice space',
        },
        {
          title: 'Large language classes leave you sitting in silence',
          description: 'Traditional group classes with 15–25 students reduce your actual speaking practice to just 1 or 2 minutes while listening to grammar lectures.',
          highlight: 'No speaking time',
        },
        {
          title: 'Studying alone lacks accountability and momentum',
          description: 'Without a regular weekly class and fellow peers expecting you, it is easy to skip practice and lose your fluency progress.',
          highlight: 'Inconsistency',
        },
      ],
    },
    solution: {
      sectionTitle: 'Live Practice Designed for Speaking Accuracy',
      sectionSubtitle: 'A structured, small-group environment where you speak 80% of the time and receive real-time corrections.',
      points: [
        {
          title: 'Strict maximum of 8 students',
          description: 'Small class sizes guarantee you have ample speaking time and direct attention from Anming in every single session.',
          iconName: 'users',
        },
        {
          title: 'Structured curriculum to improve accuracy',
          description: 'Each 5-week block systematically targets common mistake patterns, pronunciation, and workplace conversation nuances.',
          iconName: 'target',
        },
        {
          title: 'Live feedback without intimidation',
          description: 'Get constructive, friendly corrections on the mistakes you keep repeating so you can fix them permanently.',
          iconName: 'shield-check',
        },
        {
          title: 'A close-knit peer community',
          description: 'Practice with fellow international professionals who support each other and share similar career and language goals.',
          iconName: 'sparkles',
        },
      ],
    },
    whatYouGet: {
      sectionTitle: 'What You Get with Group Study',
      sectionSubtitle: 'The complete live coaching and digital curriculum package for $250 per month.',
      items: [
        {
          title: 'Small Live Group Classes',
          detail: 'Interactive weekly live sessions taught personally by Anming, focusing on practical conversation and real-life speaking.',
        },
        {
          title: 'Maximum 8 Students Per Class',
          detail: 'A hard limit on class size so you never feel lost in the crowd and always get substantial speaking time.',
        },
        {
          title: 'Structured Curriculum to Improve Accuracy',
          detail: 'A proven step-by-step roadmap covering pronunciation, essential vocabulary, grammar accuracy, and accent refinement.',
        },
        {
          title: 'All Digital Courses Included',
          detail: 'Complement your live classes with unlimited access to all self-paced video, audio, and downloadable lesson materials.',
        },
        {
          title: 'Classmate Community',
          detail: 'Stay connected with your classmates between sessions to ask questions, share insights, and practice together.',
        },
      ],
      calloutBox: {
        title: 'Built for students who want speaking confidence',
        desc: 'If you want scheduled accountability, real conversational feedback, and the camaraderie of a small peer group, Group Study provides the ideal training ground.',
      },
    },
    testimonials: {
      sectionTitle: 'What Our Students Say',
      sectionSubtitle: 'Real feedback from students who transformed their speaking in English Evolution Academy classes.',
      note: 'Academy student reviews from our global learning community.',
      items: [
        {
          id: 't-rafa',
          quote: 'I’m so happy because today I was in a meeting where everyone spoke English. There were a South African and an English woman there, and I understood almost everything they said.',
          author: 'Rafa',
          location: 'from Venezuela',
          contextTag: 'Understood international colleagues in meetings',
        },
        {
          id: 't-mohammed',
          quote: 'This is the best English class I’ve ever found, I’m really enjoying it. There’s always something new to learn in every session, and that keeps me motivated.',
          author: 'Mohammed',
          location: 'from India',
          contextTag: 'Engaging, motivating live sessions',
        },
        {
          id: 't-francisco',
          quote: 'Anming is probably the best English teacher you will ever meet. She is as committed to your learning process as you are, or maybe even more.',
          author: 'Francisco',
          location: 'from Spain',
          contextTag: 'Personal dedication to student progress',
        },
      ],
    },
    pricing: {
      sectionTitle: 'Invest in Your Speaking Fluency',
      sectionSubtitle: 'Reserve your seat in our next small live group cohort.',
      planName: 'Group Study Membership',
      priceString: '$250',
      billingCadence: 'per month',
      includedSummary: [
        'Small live group classes (max 8 students)',
        'Structured curriculum to improve accuracy',
        'All digital courses & downloadable materials',
        'Personal feedback from Anming in class',
        'Private classmate community access',
      ],
      guaranteeOrPolicy: 'Cohorts maintain an 8-student cap to ensure quality. Seats are filled on a first-confirmed basis.',
    },
    finalCta: {
      headline: 'Take your place in our next small live group.',
      reinforcingText: 'Join Anming and a maximum of 8 international classmates to speak English with confidence and control.',
      supportingNote: 'Strictly limited to 8 students per class · Monthly membership',
    },
  },

  'vip': {
    id: 'vip',
    name: '1-on-1 VIP',
    badge: 'Private & Individualized',
    tagline: 'Personalized one-to-one learning option with Anming',
    price: 400,
    period: '/ month',
    ctaText: 'Apply for 1-on-1 VIP',
    vibe: 'Personal attention, individualized learning, direct support, premium/private experience',
    vibePill: 'Personal Attention & Direct Support',
    hero: {
      headline: 'Personalized one-to-one learning tailored entirely to your goals.',
      supportingText: 'A personalized one-to-one learning option designed for students who want private attention, direct feedback, and focused progress with Anming.',
      priceNotice: '$400 / month · 1-on-1 private option · Limited availability',
      secondaryNote: 'Individualized learning pace focused directly on your specific speaking goals.',
      previewBadge: 'Private 1-on-1 Instruction + Personalized Focus + All Digital Courses',
    },
    problem: {
      sectionTitle: 'When Standard Classes Do Not Match Your Specific Needs',
      sectionSubtitle: 'A personalized one-to-one approach addresses individual challenges that group settings cannot focus on.',
      points: [
        {
          title: 'Generic course pacing does not match your specific timeline',
          description: 'You may have urgent career demands, an upcoming international transition, or high-stakes speaking situations requiring immediate focus.',
          highlight: 'Personal timeline',
        },
        {
          title: 'You need direct feedback on your specific speaking habits',
          description: 'In a group setting, feedback is shared among students. You need someone dissecting your exact pronunciation and grammar patterns line by line.',
          highlight: 'Targeted correction',
        },
        {
          title: 'You need privacy to discuss work and industry-specific topics',
          description: 'Practicing confidential work presentations, client negotiations, or specialized vocabulary requires a private one-on-one setting.',
          highlight: 'Confidential & focused',
        },
        {
          title: '[VIP student challenge]',
          description: '[Placeholder for specific student challenge or constraint addressed by private 1-on-1 learning].',
          highlight: '[VIP focus]',
        },
      ],
    },
    solution: {
      sectionTitle: 'A Personalized One-to-One Learning Experience',
      sectionSubtitle: 'Every session and exercise is dedicated 100% to your personal progress and speaking accuracy.',
      points: [
        {
          title: 'Dedicated one-to-one attention',
          description: 'Private learning sessions focused entirely on your communication style, questions, and daily speaking challenges.',
          iconName: 'target',
        },
        {
          title: 'Direct correction of your personal mistake patterns',
          description: 'Anming pinpoints the recurring grammatical habits and phrasing choices that hold back your natural flow.',
          iconName: 'shield-check',
        },
        {
          title: '[VIP feature — individualized learning plan]',
          description: '[Placeholder: Personalized curriculum emphasis tailored to student goals and specific proficiency level].',
          iconName: 'book-open',
        },
        {
          title: '[VIP feature — schedule arrangement]',
          description: '[Placeholder: Scheduling arranged directly around your availability and learning rhythm].',
          iconName: 'clock',
        },
      ],
    },
    whatYouGet: {
      sectionTitle: 'What You Get with 1-on-1 VIP',
      sectionSubtitle: 'Confirmed features and designated placeholders for the VIP personalized learning option.',
      items: [
        {
          title: 'Personalized One-to-One Learning Option',
          detail: 'Private instruction with Anming focused exclusively on your speech, accent, and conversational accuracy.',
        },
        {
          title: 'Direct Individualized Feedback',
          detail: 'Immediate, line-by-line correction of your recurring mistakes during your private sessions.',
        },
        {
          title: 'All Digital Courses Included',
          detail: 'Full, unrestricted access to the complete digital course library (video, text, and downloadable audio lessons).',
        },
        {
          title: '[VIP feature — direct communication]',
          detail: '[Placeholder for direct contact channel / instructor check-in details].',
          isPlaceholder: true,
        },
        {
          title: '[VIP feature — customized materials]',
          detail: '[Placeholder for tailored lesson exercises, review recordings, or individualized homework].',
          isPlaceholder: true,
        },
      ],
      calloutBox: {
        title: 'Note regarding VIP information',
        desc: 'As per guidelines, only confirmed details are included above. Placeholders mark areas where specific session counts, scheduling details, or bonus items can be configured by the academy owner.',
      },
    },
    testimonials: {
      sectionTitle: 'What Our Students Say',
      sectionSubtitle: 'Feedback from international students experiencing Anming’s dedicated teaching approach.',
      note: 'General academy social proof regarding Anming’s personal teaching and dedication to student success.',
      items: [
        {
          id: 't-francisco-vip',
          quote: 'Anming is probably the best English teacher you will ever meet. She is as committed to your learning process as you are, or maybe even more.',
          author: 'Francisco',
          location: 'from Spain',
          contextTag: 'Commitment to individual student growth',
        },
        {
          id: 't-abed-vip',
          quote: 'There are so many methods for teaching the English language, especially on social media. What attracted me to Anming’s school was the sense of comfort I felt as a learner.',
          author: 'Abed',
          location: 'from Syria',
          contextTag: 'Personalized encouragement and comfort',
        },
        {
          id: 't-mohammed-vip',
          quote: 'This is the best English class I’ve ever found, I’m really enjoying it. There’s always something new to learn in every session, and that keeps me motivated.',
          author: 'Mohammed',
          location: 'from India',
          contextTag: 'Consistent motivation and progress',
        },
      ],
    },
    pricing: {
      sectionTitle: '1-on-1 VIP Investment',
      sectionSubtitle: 'Private one-to-one coaching with Anming. Subject to roster availability.',
      planName: '1-on-1 VIP Personalized Coaching',
      priceString: '$400',
      billingCadence: 'per month',
      includedSummary: [
        'Personalized one-to-one learning sessions',
        'Direct personal feedback & error correction',
        'All digital courses & materials included',
        '[VIP feature: personalized study plan]',
        '[VIP feature: direct instructor coordination]',
      ],
      guaranteeOrPolicy: 'Private spots are strictly limited due to instructor calendar availability. An application or intake conversation confirms fit before first session.',
    },
    finalCta: {
      headline: 'Ready for personalized, one-to-one guidance?',
      reinforcingText: 'Apply today for private 1-on-1 coaching with Anming and start learning with an individualized plan.',
      supportingNote: 'Private 1-on-1 learning · $400/month · Inquire for current roster openings',
    },
  },
};

export const academyOverview = {
  name: 'English Evolution Academy',
  website: 'https://englishevolutionacademy.com/',
  founder: 'Anming Alexander',
  founderTitle: 'Certified English Teacher & Founder',
  founderTagline: 'Helping international professionals speak English with control, accuracy, and confidence.',
  methodology: '80% Speaking practice, practical oral communication, targeting recurring error patterns.',
  logoUrl: 'https://englishevolutionacademy.com/wp-content/themes/english-evolution-academy/assets/EE-Logo-Footer.png',
  founderPhoto: 'https://englishevolutionacademy.com/wp-content/themes/english-evolution-academy/assets/founder-photo.jpg',
  brandColors: {
    tealPrimary: '#19818F',
    tealDark: '#0E5259',
    tealLight: '#5FB2BE',
    coral: '#F0997E',
    gold: '#F3BD3B',
    cream: '#FDF6EC',
    ink: '#12211E',
  },
};
