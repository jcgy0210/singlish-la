// Placeholder data

const users = [
  {
    id: "8080d1c3-a324-481c-91f7-8a311ecc1c3a",
    name: "User",
    email: "user@nextmail.com",
    password: "123456",
  },
];

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const admins = [
  {
    id: "5b7119a5-520a-467e-994a-b651d313757b",
    name: "Jenell",
    email: "jenell@nextmail.com",
    password: "abcdef",
  },

  {
    id: "469c7b6a-5306-48c8-b057-697406819032",
    name: "Joash",
    email: "joash@nextmail.com",
    password: "abcdef",
  },

  {
    id: "21598349-3802-4f62-b030-3c5bcb62dcc6",
    name: "Joe",
    email: "joe@nextmail.com",
    password: "abcdef",
  },

  {
    id: "c1134209-0fbd-40d9-b3a6-381012e62a65",
    name: "Jovan",
    email: "jovan@nextmail.com",
    password: "abcdef",
  },
];

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const courses = [
  {
    course_id: "1",
    title: "Hello",
    description:
      "Teach users how to engage in casual converstations with Singaporeans of different cultural backgrounds.",
  },

  {
    course_id: "2",
    title: "Makan Makan",
    description:
      "Familiarise users with common Singlish expressions and vocabularies used when dining at a hawker centre.",
  },

  {
    course_id: "3",
    title: "Bojio!",
    description:
      "Equip users with the ability to ask for directions and recommendations for places to visit in Singapore.",
  },
];

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const lessons = [
  {
    lesson_id: "1.1",
    course_id: "1",
    title: "Greetings and Introduction",
  },

  {
    lesson_id: "1.2",
    course_id: "1",
    title: "Discussing Daily Life",
  },

  {
    lesson_id: "1.3",
    course_id: "1",
    title: "Talking about the weather",
  },

  {
    lesson_id: "2.1",
    course_id: "2",
    title: "Ordering food",
  },

  {
    lesson_id: "2.2",
    course_id: "2",
    title: "Paying and Eating Etiquette",
  },

  {
    lesson_id: "2.3",
    course_id: "2",
    title: "Interacting with Hawker Centre Staff",
  },

  {
    lesson_id: "3.1",
    course_id: "3",
    title: "Asking for directions",
  },

  {
    lesson_id: "3.2",
    course_id: "3",
    title: "Recommending Places to Eat",
  },

  {
    lesson_id: "3.3",
    course_id: "3",
    title: "Talking about Popular Attractions",
  },
];

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const vocabList = [
  {
    vocab_id: "1.1",
    lesson_id: "1.1",
    vocab: "Walao eh",
    meaning: "Expressing surprise or disbelief",
    example: "Walao eh! This is unbelievable!",
  },

  {
    vocab_id: "1.2",
    lesson_id: "1.1",
    vocab: "Ang moh",
    meaning: "Caucasian",
    example: "That guy looks like an Ang moh",
  },

  {
    vocab_id: "1.3",
    lesson_id: "1.1",
    vocab: "Kopi-O",
    meaning: "Black Coffee",
    example: "Uncle, can I have one kopi-o!",
  },

  {
    vocab_id: "1.4",
    lesson_id: "1.1",
    vocab: "Boleh",
    meaning: "Can or Possible",
    example: "You want me to help you with this? Boleh!",
  },

  {
    vocab_id: "1.5",
    lesson_id: "1.1",
    vocab: "Boh chup",
    meaning: "Nonchalent or indifferent attitude",
    example: "Look at the way this guy does his work, it is so boh chup!",
  },

  {
    vocab_id: "1.6",
    lesson_id: "1.2",
    vocab: "Kaypoh",
    meaning: "Busybody",
    example: "What are you looking at? Do not be so kaypoh!",
  },

  {
    vocab_id: "1.7",
    lesson_id: "1.2",
    vocab: "Steady",
    meaning: "Reliable or Cool",
    example: "Ok steady, I get this done by tomorrow",
  },

  {
    vocab_id: "1.8",
    lesson_id: "1.2",
    vocab: "Kopi tiam",
    meaning: "Coffeeshop",
    example: "Lets go to this kopi tiam to eat today.",
  },

  {
    vocab_id: "1.9",
    lesson_id: "1.2",
    vocab: "Gong gong",
    meaning: "Clueless or naive",
    example: "What is this guy doing? He looks a little bit gong gong",
  },

  {
    vocab_id: "1.10",
    lesson_id: "1.2",
    vocab: "Ponteng",
    meaning: "Skip or avoid (mostly used in the context of school)",
    example: "I did not see you in class just now, you ponteng class right?",
  },

  {
    vocab_id: "1.11",
    lesson_id: "1.3",
    vocab: "Sien",
    meaning: "Bored or tired",
    example: "I am so sian of this guy showing me attitude",
  },

  {
    vocab_id: "1.12",
    lesson_id: "1.3",
    vocab: "Huat",
    meaning: "Prosper or Win big",
    example: "I hope you will huat this year and earn big bucks!",
  },

  {
    vocab_id: "1.13",
    lesson_id: "1.3",
    vocab: "Malu",
    meaning: "Embarrassed",
    example: "Just now that incident make me damn malu",
  },

  {
    vocab_id: "1.14",
    lesson_id: "1.3",
    vocab: "Alamak",
    meaning: "Expression of surprise or dismay",
    example: "Alamak! I forgot to bring my wallet out of the house!",
  },

  {
    vocab_id: "1.15",
    lesson_id: "1.3",
    vocab: "Lepak",
    meaning: "Relax or Chill",
    example:
      "There is nothing to do right now, I guess I will just lepak for the next hour.",
  },

  {
    vocab_id: "2.1",
    lesson_id: "2.1",
    vocab: "Makan",
    meaning: "Eat",
    example: "Want to go makan now?",
  },

  {
    vocab_id: "2.2",
    lesson_id: "2.1",
    vocab: "Chope",
    meaning: "Reserve",
    example: "I help you chope this seat, go buy food.",
  },

  {
    vocab_id: "2.3",
    lesson_id: "2.1",
    vocab: "Lai",
    meaning: "Come",
    example: "Lai, we can go have lunch now",
  },

  {
    vocab_id: "2.4",
    lesson_id: "2.1",
    vocab: "Lim kopi",
    meaning: "Drink Coffee",
    example: "Wa! I am so tired, want to go lim kopi?",
  },

  {
    vocab_id: "2.5",
    lesson_id: "2.1",
    vocab: "Shiok",
    meaning: "Very satisfying or delicious",
    example: "Wow this bowl of chicken rice is very shiok!",
  },

  {
    vocab_id: "2.6",
    lesson_id: "2.2",
    vocab: "Paiseh",
    meaning: "Embarrassed or shy",
    example:
      "Just now I made a mistake during my presentation, I feel damn paiseh!",
  },

  {
    vocab_id: "2.7",
    lesson_id: "2.2",
    vocab: "Auntie/Uncle",
    meaning: "Respectful way of addressing older people",
    example: "Auntie/Uncle! How has your day been?",
  },

  {
    vocab_id: "2.8",
    lesson_id: "2.2",
    vocab: "Suka",
    meaning: "To do according to his or her own wishes",
    example:
      "This guy suka-suka do his work, never follow instructions properly",
  },

  {
    vocab_id: "2.9",
    lesson_id: "2.2",
    vocab: "Da bao",
    meaning: "Takeaway",
    example: "Uncle can I da bao one fish ball noodle! Thank you!",
  },

  {
    vocab_id: "2.10",
    lesson_id: "2.2",
    vocab: "Kiasu",
    meaning: "Fear of losing out",
    example: "Wow are you that kiasu? It is only a bowl of noodles!",
  },

  {
    vocab_id: "2.11",
    lesson_id: "2.3",
    vocab: "Gai-gai",
    meaning: "Walk around or stroll",
    example: "Want to go gai gai on friday?",
  },

  {
    vocab_id: "2.12",
    lesson_id: "2.3",
    vocab: "Tumpang",
    meaning: "Hitching a ride",
    example: "Can I tumpang your car home?",
  },

  {
    vocab_id: "2.13",
    lesson_id: "2.3",
    vocab: "Pang gang",
    meaning: "Finish work or close shop",
    example: "Finally done with this proposal, time to pang gang!",
  },

  {
    vocab_id: "2.14",
    lesson_id: "2.3",
    vocab: "Abuden",
    meaning: "'Obviously' in a rude manner",
    example: "Abuden! Why are you asking such an obvious question!",
  },

  {
    vocab_id: "2.15",
    lesson_id: "2.3",
    vocab: "Onz",
    meaning: "Agree or confirm",
    example: "This Saturday football game? Okay onz!",
  },

  {
    vocab_id: "3.1",
    lesson_id: "3.1",
    vocab: "Ulu",
    meaning: "Remote or far away",
    example:
      "The place we are going is very ulu! So far away from all the mrt stations!",
  },

  {
    vocab_id: "3.2",
    lesson_id: "3.1",
    vocab: "Sotong",
    meaning: "Blur or clueless",
    example: "Look at the way he does his work! Obviously a blur sotong!",
  },

  {
    vocab_id: "3.3",
    lesson_id: "3.1",
    vocab: "Agak-agak",
    meaning: "Estimate",
    example:
      "After cooking for the past ten years, I agak-agak know how much of each ingredient I use for each dish.",
  },

  {
    vocab_id: "3.4",
    lesson_id: "3.1",
    vocab: "Suagu",
    meaning: "Outdated or ignorant",
    example: "This guy damn suagu! He does not even know how to turn on the TV",
  },

  {
    vocab_id: "3.5",
    lesson_id: "3.1",
    vocab: "Blanja",
    meaning: "Treat someone",
    example: "Since it is your birthday, let me blanja you this lunch",
  },

  {
    vocab_id: "3.6",
    lesson_id: "3.2",
    vocab: "Sedap",
    meaning: "Delicious",
    example: "The laksa from this place damn sedap!",
  },
  {
    vocab_id: "3.7",
    lesson_id: "3.2",
    vocab: "Chiong",
    meaning: "Rush or charge",
    example:
      "The deadline of the project is so close, time to chiong this project",
  },
  {
    vocab_id: "3.8",
    lesson_id: "3.2",
    vocab: "Kena",
    meaning: "Receive or get (usually something negative)",
    example: "Oh no you kena fine for parking your car in an illegal spot",
  },
  {
    vocab_id: "3.9",
    lesson_id: "3.2",
    vocab: "Solid",
    meaning: "Excellent, dependable, or very good",
    example:
      "That nasi lemak was solid, man! I’m definitely coming back for more.",
  },
  {
    vocab_id: "3.10",
    lesson_id: "3.2",
    vocab: "Koyak",
    meaning: "Torn or damaged, can also mean tired",
    example: "This book koyak already, look at the state of it!",
  },
  {
    vocab_id: "3.11",
    lesson_id: "3.3",
    vocab: "Gabra",
    meaning: "Panicky or flustered",
    example:
      "Bro, you no need so gabra, it is only the first round of interviews.",
  },
  {
    vocab_id: "3.12",
    lesson_id: "3.3",
    vocab: "Jialat",
    meaning: "In trouble or difficult situation",
    example:
      "Jialat, I failed my exams, my parents are going to scold me so hard.",
  },
  {
    vocab_id: "3.13",
    lesson_id: "3.3",
    vocab: "Lelong",
    meaning: "Auction or Sell",
    example: "Lelong ah Lelong! Cheap shirts on sale here!",
  },
  {
    vocab_id: "3.14",
    lesson_id: "3.3",
    vocab: "Peng san",
    meaning: "Faint or exhausted",
    example: "He do work until he peng san.",
  },
  {
    vocab_id: "3.15",
    lesson_id: "3.3",
    vocab: "Zhun",
    meaning: "Accurate",
    example: "Wow your measurements are so zhun! Exactly one meter!",
  },
];

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const quizzes = [
  {
    quiz_id: "1.1",
    lesson_id: "1.1",
    title: "Quiz 1.1",
  },

  {
    quiz_id: "1.2",
    lesson_id: "1.2",
    title: "Quiz 1.2",
  },

  {
    quiz_id: "1.3",
    lesson_id: "1.3",
    title: "Quiz 1.3",
  },

  {
    quiz_id: "2.1",
    lesson_id: "2.1",
    title: "Quiz 2.1",
  },

  {
    quiz_id: "2.2",
    lesson_id: "2.2",
    title: "Quiz 2.2",
  },

  {
    quiz_id: "2.3",
    lesson_id: "2.3",
    title: "Quiz 2.3",
  },

  {
    quiz_id: "3.1",
    lesson_id: "3.1",
    title: "Quiz 3.1",
  },

  {
    quiz_id: "3.2",
    lesson_id: "3.2",
    title: "Quiz 3.2",
  },

  {
    quiz_id: "3.3",
    lesson_id: "3.3",
    title: "Quiz 3.3",
  },
];

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const questions = [
  {
    question_id: "1.1",
    quiz_id: "1.1",
    question_text: "What is the Singlish term for expressing disbelief?",
    options: ["Ang moh", "Walao eh", "Boh chup", "Oh my dad"],
    correct_answer: "Walao eh",
  },

  {
    question_id: "1.2",
    quiz_id: "1.1",
    question_text: "How would you order black coffee?",
    options: [
      "One Kopi-T please",
      "One Kopi-C please",
      "One Kopi-P please",
      "One Kopi-O please",
    ],
    correct_answer: "One Kopi-O please",
  },

  {
    question_id: "1.3",
    quiz_id: "1.1",
    question_text: "What phrase would you use to say someone doesn’t care?",
    options: ["Boleh", "Behtahan", "Boh chup", "Bobo"],
    correct_answer: "Boh chup",
  },

  {
    question_id: "1.4",
    quiz_id: "1.2",
    question_text:
      "How would you describe someone who is always in others’ business?",
    options: ["Kaypoh", "Steady", "Gong gong", "Ponteng"],
    correct_answer: "Kaypoh",
  },

  {
    question_id: "1.5",
    quiz_id: "1.2",
    question_text: "What word would you use for someone reliable?",
    options: ["The Rock", "Steady", "Kopi tiam", "Ponteng"],
    correct_answer: "Steady",
  },

  {
    question_id: "1.6",
    quiz_id: "1.2",
    question_text: "What’s the term for skipping an event or obligation?",
    options: ["Pong pong", "Pentong", "Gong gong", "Ponteng"],
    correct_answer: "Ponteng",
  },

  {
    question_id: "1.7",
    quiz_id: "1.3",
    question_text: "What word would you use to describe a hot, boring day?",
    options: ["Huat", "Lepak", "Hoseh", "Sien"],
    correct_answer: "Sien",
  },

  {
    question_id: "1.8",
    quiz_id: "1.3",
    question_text: "What’s the Singlish term for relaxing?",
    options: ["Chill", "Lepak", "Chilli", "Lopak"],
    correct_answer: "Lepak",
  },

  {
    question_id: "1.9",
    quiz_id: "1.3",
    question_text: "How do you express surprise in Singlish?",
    options: ["Alamak", "Emak", "Nasi lemak", "Alemak"],
    correct_answer: "Alamak",
  },

  {
    question_id: "2.1",
    quiz_id: "2.1",
    question_text: 'What does "makan" mean?',
    options: ["Drink", "Satisfying", "Eat", "Come"],
    correct_answer: "Eat",
  },

  {
    question_id: "2.2",
    quiz_id: "2.1",
    question_text: "How would you say you want to reserve a seat?",
    options: ["Book", "Chope", "Lai", "Cope"],
    correct_answer: "Chope",
  },

  {
    question_id: "2.3",
    quiz_id: "2.1",
    question_text:
      "What phrase would you use to express satisfaction after a meal?",
    options: ["Shiok", "Shiong", "Sien", "Sheesh"],
    correct_answer: "Shiok",
  },

  {
    question_id: "2.4",
    quiz_id: "2.2",
    question_text:
      "If you feel shy asking for something, which word would you use?",
    options: ["Suka", "Kiasu", "Da bao", "Paiseh"],
    correct_answer: "Paiseh",
  },

  {
    question_id: "2.5",
    quiz_id: "2.2",
    question_text: "How do you politely address an older vendor?",
    options: ["Madam/Sir", "Auntie/Uncle", "Sister/Brother", "Miss/Mister"],
    correct_answer: "Auntie/Uncle",
  },

  {
    question_id: "2.6",
    quiz_id: "2.2",
    question_text: "What is the Singlish term for taking your food to go?",
    options: ["Da Nang", "Da Vinci", "Da zhen", "Da bao"],
    correct_answer: "Da bao",
  },

  {
    question_id: "2.7",
    quiz_id: "2.3",
    question_text:
      "What would you say when you ask someone if you can join them for a ride?",
    options: ["Tumpang", "Pang gang", "Tampung", "Gang pang"],
    correct_answer: "Tumpang",
  },

  {
    question_id: "2.8",
    quiz_id: "2.3",
    question_text: "What’s the term for agreeing with someone?",
    options: ["Huat", "Orz", "Abuden", "Onz"],
    correct_answer: "Onz",
  },

  {
    question_id: "2.9",
    quiz_id: "2.3",
    question_text: "How would you describe a leisurely walk?",
    options: ["Gai-gai", "Pang gang", "Abuden", "Aduben"],
    correct_answer: "Gai-gai",
  },

  {
    question_id: "3.1",
    quiz_id: "3.1",
    question_text: "What would you call a place that’s far and remote?",
    options: ["Suagu", "Agak-agak", "Ulu", "Sotong"],
    correct_answer: "Ulu",
  },

  {
    question_id: "3.2",
    quiz_id: "3.1",
    question_text: "How do you describe someone who is clueless?",
    options: ["Sotong", "Octopus", "Blanja", "Agak-agak"],
    correct_answer: "Sotong",
  },

  {
    question_id: "3.3",
    quiz_id: "3.1",
    question_text: "What’s the term for offering to treat someone?",
    options: ["Agak-agak", "Blanja", "Beri", "Alak-Alak"],
    correct_answer: "Blanja",
  },

  {
    question_id: "3.4",
    quiz_id: "3.2",
    question_text:
      "If you're late for a movie and you tell your friend, 'Let’s chiong to the cinema!', what are you asking them to do?",
    options: [
      "Drive to the cinema",
      "Takeover the cinema",
      "Eat in the cinema",
      "Rush to the cinema",
    ],
    correct_answer: "Rush to the cinema",
  },

  {
    question_id: "3.5",
    quiz_id: "3.2",
    question_text:
      "If someone says, 'That presentation was solid!', what do they mean about the presentation?",
    options: [
      "It was hesitant",
      "It was excellent",
      "It was awkward",
      "It was attractive",
    ],
    correct_answer: "It was excellent",
  },

  {
    question_id: "3.6",
    quiz_id: "3.2",
    question_text: "'Lisa kena fine $100', what does it mean?",
    options: [
      "Lisa gave a $100 fine",
      "Lisa won a $100 fine",
      "Lisa paid a $100 fine",
      "Lisa received a $100 fine",
    ],
    correct_answer: "Lisa received a $100 fine",
  },

  {
    question_id: "3.7",
    quiz_id: "3.3",
    question_text:
      "If someone says, 'I felt gabra before my presentation.' what does that imply about their feelings?",
    options: [
      "They were calm and relaxed.",
      "They were excited and happy.",
      "They were panicky or flustered.",
      "They were confident and prepared.",
    ],
    correct_answer: "They were panicky or flustered.",
  },

  {
    question_id: "3.8",
    quiz_id: "3.3",
    question_text:
      "'Jialat! I gotta go.' what does 'jialat' imply in this context?",
    options: [
      "They are feeling very relaxed.",
      "They are having a great time.",
      "They are excited about something.",
      "They are running late and in trouble.",
    ],
    correct_answer: "They are running late and in trouble.",
  },

  {
    question_id: "3.9",
    quiz_id: "3.3",
    question_text:
      "'Your prediction was super zhun!' What does 'zhun' imply in this context?",
    options: [
      "Lucky or fortunate",
      "Accurate or correct",
      "Funny or entertaining",
      "Unexpected or surprising",
    ],
    correct_answer: "Accurate or correct",
  },
];

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const achievements = [
  {
    id: "01",
    achievement: "Lesson 1 Complete le!",
    description: "Complete the first lesson",
    requirement: "Complete the first lesson",
    status: "locked",
  },

  {
    id: "02",
    achievement: "Steady la! First quiz done!",
    description: "Complete the first quiz",
    requirement: "Complete the first quiz",
    status: "locked",
  },

  {
    id: "03",
    achievement: "Swee first course!",
    description: "Complete the first course",
    requirement: "Complete the first course",
    status: "locked",
  },

  {
    id: "04",
    achievement: "Swee second course!",
    description: "Complete the second course",
    requirement: "Complete the second course",
    status: "locked",
  },

  {
    id: "05",
    achievement: "Swee third course!",
    description: "Complete the third course",
    requirement: "Complete the third course",
    status: "locked",
  },
];

export {
  users,
  admins,
  vocabList,
  courses,
  lessons,
  quizzes,
  questions,
  achievements,
};
