// Placeholder data

const users = [
    {
      id: '8080d1c3-a324-481c-91f7-8a311ecc1c3a',
      name: 'User',
      email: 'user@nextmail.com',
      password: '123456',
    },
  ];

  const admins = [
    {
      id: '5b7119a5-520a-467e-994a-b651d313757b',
      name: 'Jenell',
      email: 'jenell@nextmail.com',
      password: 'abcdef',
    },

    {
      id: '469c7b6a-5306-48c8-b057-697406819032',
      name: 'Joash',
      email: 'joash@nextmail.com',
      password: 'abcdef',
    },

    {
      id: '21598349-3802-4f62-b030-3c5bcb62dcc6',
      name: 'Joe',
      email: 'joe@nextmail.com',
      password: 'abcdef',
    },

    {
      id: 'c1134209-0fbd-40d9-b3a6-381012e62a65',
      name: 'Jovan',
      email: 'jovan@nextmail.com',
      password: 'abcdef',
    },

  ];  

  const courses = [
    {
      course_id: '1',
      title: 'Hello',
      description: 'Teach users how to engage in casual converstations with Singaporeans of different cultural backgrounds',
      lessons: [{lesson_id: '1.1'}, {lesson_id: '1.2'}, {lesson_id: '1.3'}],
      quizzes: [{quiz_id: '1.1'}, {quiz_id: '1.2'}, {quiz_id: '1.3'}]
    },

    {
      course_id: '2',
      title: 'Makan Makan',
      description: 'Familiarise users with common Singlish expressions and vocabularies used when dining at a hawker centre',
      lessons: [{lesson_id: '2.1'}, {lesson_id: '2.2'}, {lesson_id: '2.3'}],
      quizzes: [{quiz_id: '2.1'}, {quiz_id: '2.2'}, {quiz_id: '2.3'}]
    },

    {
      course_id: '3',
      title: 'Bojio!',
      description: 'Familiarise users with common Singlish expressions and vocabularies used when dining at a hawker centreEquip users with the ability to ask for directions and recommendations for places to visit in Singapore',
      lessons: [{lesson_id: '3.1'}, {lesson_id: '3.2'}, {lesson_id: '3.3'}],
      quizzes: [{quiz_id: '3.1'}, {quiz_id: '3.2'}, {quiz_id: '3.3'}]
    },

  ];

  const lessons = [
    {
      lesson_id: '1.1',
      course_id: '1',
      title: 'Greetings and Introduction',
      content: '',
      vocabList: [{vocab_id: '1.1'}, 
                  {vocab_id: '1.2'}, 
                  {vocab_id: '1.3'},
                  {vocab_id: '1.4'},
                  {vocab_id: '1.5'}]
    },

    {
      lesson_id: '1.2',
      course_id: '1',
      title: 'Discussing Daily Life',
      content: '',
      vocabList: [{vocab_id: '1.6'}, 
                  {vocab_id: '1.7'}, 
                  {vocab_id: '1.8'},
                  {vocab_id: '1.9'},
                  {vocab_id: '1.10'}]
    },

    {
      lesson_id: '1.3',
      course_id: '1',
      title: 'Talking about the weather',
      content: '',
      vocabList: [{vocab_id: '1.11'}, 
                  {vocab_id: '1.12'}, 
                  {vocab_id: '1.13'},
                  {vocab_id: '1.14'},
                  {vocab_id: '1.15'}]
    },

    {
      lesson_id: '2.1',
      course_id: '2',
      title: 'Ordering food',
      content: '',
      vocabList: [{vocab_id: '2.1'}, 
                  {vocab_id: '2.2'}, 
                  {vocab_id: '2.3'},
                  {vocab_id: '2.4'},
                  {vocab_id: '2.5'}]
    },

    {
      lesson_id: '2.2',
      course_id: '2',
      title: 'Paying and Eating Etiquette',
      content: '',
      vocabList: [{vocab_id: '2.6'}, 
                  {vocab_id: '2.7'}, 
                  {vocab_id: '2.8'},
                  {vocab_id: '2.9'},
                  {vocab_id: '2.10'}]
    },

    {
      lesson_id: '2.3',
      course_id: '2',
      title: 'Interacting with Hawker Centre Staff',
      content: '',
      vocabList: [{vocab_id: '2.11'}, 
                  {vocab_id: '2.12'}, 
                  {vocab_id: '2.13'},
                  {vocab_id: '2.14'},
                  {vocab_id: '2.15'}]
    },

    {
      lesson_id: '3.1',
      course_id: '3',
      title: 'Asking for directions',
      content: '',
      vocabList: [{vocab_id: '3.1'}, 
                  {vocab_id: '3.2'}, 
                  {vocab_id: '3.3'},
                  {vocab_id: '3.4'},
                  {vocab_id: '3.5'}]
    }, 

    {
      lesson_id: '3.2',
      course_id: '3',
      title: 'Recommending Places to Eat',
      content: '',
      vocabList: [{vocab_id: '3.6'}, 
                  {vocab_id: '3.7'}, 
                  {vocab_id: '3.8'},
                  {vocab_id: '3.9'},
                  {vocab_id: '3.10'}]
    },
    
    {
      lesson_id: '3.3',
      course_id: '3',
      title: 'Talking about Popular Attractions',
      content: '',
      vocabList: [{vocab_id: '3.11'}, 
                  {vocab_id: '3.12'}, 
                  {vocab_id: '3.13'},
                  {vocab_id: '3.14'},
                  {vocab_id: '3.15'}]
    }, 
  ];

  const vocabList = [
    {
      vocab_id: '1.1',
      vocab: 'Wah lau eh',
      meaning: 'Expressing surprise or disbelief',
      example: 'Wah lau eh! This is unbelievable!'
    },

    {
      vocab_id: '1.2',
      vocab: 'Ang moh',
      meaning: 'Caucasian',
      example: 'That guy looks like an Ang moh'
    },

    {
      vocab_id: '1.3',
      vocab: 'Kopi-O',
      meaning: 'Black Coffee',
      example: 'Uncle, can I have one kopi-o!'
    },

    {
      vocab_id: '1.4',
      vocab: 'Boleh',
      meaning: 'Can or Possible',
      example: 'You want me to help you with this? Boleh!'
    },

    {
      vocab_id: '1.5',
      vocab: 'Boh chup',
      meaning: 'Nonchalent or indifferent attitude',
      example: 'Look at the way this guy does his work, it is so boh chup!'
    },

    {
      vocab_id: '1.6',
      vocab: 'Kaypoh',
      meaning: 'Busybody',
      example: 'What are you looking at? Do not be so kaypoh!'
    },

    {
      vocab_id: '1.7',
      vocab: 'Steady',
      meaning: 'Reliable or Cool',
      example: 'Ok steady, I get this done by tomorrow'
    },

    {
      vocab_id: '1.8',
      vocab: 'Kopi tiam',
      meaning: 'Coffeeshop',
      example: 'Lets go to this kopi tiam to eat today.'
    },

    {
      vocab_id: '1.9',
      vocab: 'Gong gong',
      meaning: 'Clueless or naive',
      example: 'What is this guy doing? He looks a little bit gong gong'
    },

    {
      vocab_id: '1.10',
      vocab: 'Pon',
      meaning: 'Skip or avoid (mostly used in the context of school)',
      example: 'I did not see you in class just now, you pon class right?'
    },

    {
      vocab_id: '1.11',
      vocab: 'Sian',
      meaning: 'Bored or tired',
      example: 'I am so sian of this guy showing me attitude'
    },

    {
      vocab_id: '1.12',
      vocab: 'Huat',
      meaning: 'Prosper or Win big',
      example: 'I hope you will huat this year and earn big bucks!'
    },

    {
      vocab_id: '1.13',
      vocab: 'Malu',
      meaning: 'Embarrassed',
      example: 'Just now that incident make me damn malu'
    },

    {
      vocab_id: '1.14',
      vocab: 'Alamak',
      meaning: 'Expression of surprise or dismay',
      example: 'Alamak! I forgot to bring my wallet out of the house!'
    },

    {
      vocab_id: '1.15',
      vocab: 'Lepak',
      meaning: 'Relax or Chill',
      example: 'There is nothing to do right now, I guess I will just lepak for the next hour.'
    },

    {
      vocab_id: '2.1',
      vocab: 'Makan',
      meaning: 'Eat',
      example: 'Want to go makan now?'
    },

    {
      vocab_id: '2.2',
      vocab: 'Chope',
      meaning: 'Reserve',
      example: 'I help you chope this seat, go buy food.'
    },

    {
      vocab_id: '2.3',
      vocab: 'Lai',
      meaning: 'Come',
      example: 'Lai, we can go have lunch now'
    },

    {
      vocab_id: '2.4',
      vocab: 'Lim Kopi',
      meaning: 'Drink Coffee',
      example: 'Wa! I am so tired, want to go lim kopi?'
    },

    {
      vocab_id: '2.5',
      vocab: 'Shiok',
      meaning: 'Very satisfying or delicious',
      example: 'Wow this bowl of chicken rice is very shiok!'
    },

    {
      vocab_id: '2.6',
      vocab: 'Paiseh',
      meaning: 'Embarrassed or shy',
      example: 'Just now I made a mistake during my presentation, I feel damn paiseh!'
    },

    {
      vocab_id: '2.7',
      vocab: 'Auntie/Uncle',
      meaning: 'Respectful way of addressing older people',
      example: 'Auntie/Uncle! How has your day been?'
    },

    {
      vocab_id: '2.8',
      vocab: 'Suka',
      meaning: 'To do according to his or her own wishes',
      example: 'This guy suka-suka do his work, never follow instructions properly'
    },

    {
      vocab_id: '2.9',
      vocab: 'Da bao',
      meaning: 'Takeaway',
      example: 'Uncle can I da bao one fish ball noodle! Thank you!'
    },

    {
      vocab_id: '2.10',
      vocab: 'Kiasu',
      meaning: 'Fear of losing out',
      example: 'Wow are you that kiasu? It is only a bowl of noodles!'
    },

    {
      vocab_id: '2.11',
      vocab: 'Gai-gai',
      meaning: 'Go out on a date',
      example: 'Want to go gai gai on friday?'
    },

    {
      vocab_id: '2.12',
      vocab: 'Tompang',
      meaning: 'Hitching a ride',
      example: 'Can I tompang your car home?'
    },

    {
      vocab_id: '2.13',
      vocab: 'Pang gang',
      meaning: 'Finish work or close shop',
      example: 'Finally done with this proposal, time to pang gang!'
    },

    {
      vocab_id: '2.14',
      vocab: 'Abuden',
      meaning: 'Obviously is a rude manner',
      example: 'Abuden! Why are you asking such an obvious question!'
    },

    {
      vocab_id: '2.15',
      vocab: 'Onz',
      meaning: 'Agree or confirm',
      example: 'This Saturday football game? Okay onz!'
    },

    {
      vocab_id: '3.1',
      vocab: 'Ulu',
      meaning: 'Remote or far away',
      example: 'The place we are going is very ulu! So far away from all the mrt stations!'
    },

    {
      vocab_id: '3.2',
      vocab: 'Sotong',
      meaning: 'Blur or clueless',
      example: 'Look at the way he does his work! Obviously a blur sotong!'
    },

    {
      vocab_id: '3.3',
      vocab: 'Agak-agak',
      meaning: 'Estimate',
      example: 'After cooking for the past ten years, I agak-agak know how much of each ingredient I use for each dish.'
    },

    {
      vocab_id: '3.4',
      vocab: 'Suagu',
      meaning: 'Outdated or Ignorant',
      example: 'This guy damn suagu! He does not even know how to turn on the TV'
    },

    {
      vocab_id: '3.5',
      vocab: 'Blanja',
      meaning: 'Treat someone',
      example: 'Since it is your birthday, let me blanja you this lunch'
    },

    {
      vocab_id: '3.6',
      vocab: 'Sedap',
      meaning: 'Delicious',
      example: 'The laksa from this place damn sedap!'
    },
    {
      vocab_id: '3.7',
      vocab: 'Chiong',
      meaning: 'Rush or charge',
      example: 'The dateline of the project is so close, time to chiong this project'
    },
    {
      vocab_id: '3.8',
      vocab: 'Kena',
      meaning: 'Receive or Get (usually something negative)',
      example: 'Oh no you kena fine for parking your car in an illegal spot'
    },
    {
      vocab_id: '3.9',
      vocab: 'Shiok',
      meaning: 'Very satisfying or delicious',
      example: 'Wa this bowl of prawn noodles damn shiok!'
    },
    {
      vocab_id: '3.10',
      vocab: 'Koyak',
      meaning: 'Torn of damaged',
      example: 'This book koyak already, look at the state of it!'
    },
    {
      vocab_id: '3.11',
      vocab: 'Gabra',
      meaning: 'Panicky or flustered',
      example: 'Bro, you no need so garbra, it is only the first round of interviews.'
    },
    {
      vocab_id: '3.12',
      vocab: 'Jialat',
      meaning: 'In trouble or difficult situtation',
      example: 'Jialat, I failed my exams, my parents are going to scold me so hard.'
    },
    {
      vocab_id: '3.13',
      vocab: 'Lelong',
      meaning: 'Auction or Sell',
      example: 'Lelong ah Lelong! Cheap shirts on sale here!'
    },
    {
      vocab_id: '3.14',
      vocab: 'Peng san',
      meaning: 'Faint or exhausted',
      example: 'He do work until he peng san'
    },
    {
      vocab_id: '3.15',
      vocab: 'Zhun',
      meaning: 'Accurate',
      example: 'Wow your measurements are so zhun! Exactly one meter!'
    },

  ];

  const quizzes = [
    {
      quiz_id: '1.1',
      course_id: '1',
      title: 'Quiz 1.1',
      questions: [{question_id : '1.1'}, {question_id: '1.2'}, {question_id: '1.3'}]
    },

    {
      quiz_id: '1.2',
      course_id: '1',
      title: 'Quiz 1.3',
      questions: [{question_id : '1.4'}, {question_id: '1.5'}, {question_id: '1.6'}]
    },

    {
      quiz_id: '1.3',
      course_id: '1',
      title: 'Quiz 1.3',
      questions: [{question_id : '1.7'}, {question_id: '1.8'}, {question_id: '1.9'}]
    },

    {
      quiz_id: '2.1',
      course_id: '2',
      title: 'Quiz 2.1',
      questions: [{question_id : '2.1'}, {question_id: '2.2'}, {question_id: '2.3'}]
    },

    {
      quiz_id: '2.2',
      course_id: '2',
      title: 'Quiz 2.3',
      questions: [{question_id : '2.4'}, {question_id: '2.5'}, {question_id: '2.6'}]
    },

    {
      quiz_id: '2.3',
      course_id: '2',
      title: 'Quiz 2.3',
      questions: [{question_id : '2.7'}, {question_id: '2.8'}, {question_id: '2.9'}]
    },

    {
      quiz_id: '3.1',
      course_id: '3',
      title: 'Quiz 3.1',
      questions: [{question_id : '3.1'}, {question_id: '3.2'}, {question_id: '3.3'}]
    },

    {
      quiz_id: '3.2',
      course_id: '3',
      title: 'Quiz 3.3',
      questions: [{question_id : '3.4'}, {question_id: '3.5'}, {question_id: '3.6'}]
    },

    {
      quiz_id: '3.3',
      course_id: '3',
      title: 'Quiz 3.3',
      questions: [{question_id : '3.7'}, {question_id: '3.8'}, {question_id: '3.9'}]
    },

  ];

  const questions = [
    {
      question_id: '1.1',
      quiz_id: '1.1',
      question_text: 'What is the Singlish term for expressing disbelief?',
      options: [' ', ' ', ' ', ' '],
      correct_answer: ' '
    },

    {
      question_id: '1.2',
      quiz_id: '1.1',
      question_text: 'How would you order black coffee?',
      options: [' ', ' ', ' ', ' '],
      correct_answer: ' '
    },

    {
      question_id: '1.3',
      quiz_id: '1.1',
      question_text: 'What phrase would you use to say someone doesn’t care?',
      options: [' ', ' ', ' ', ' '],
      correct_answer: ' '
    },

    {
      question_id: '1.4',
      quiz_id: '1.2',
      question_text: 'How would you describe someone who is always in others’ business?',
      options: [' ', ' ', ' ', ' '],
      correct_answer: ' '
    },

    {
      question_id: '1.5',
      quiz_id: '1.2',
      question_text: 'What word would you use for someone reliable?',
      options: [' ', ' ', ' ', ' '],
      correct_answer: ' '
    },

    {
      question_id: '1.6',
      quiz_id: '1.2',
      question_text: 'What word would you use to describe a hot, boring day?',
      options: [' ', ' ', ' ', ' '],
      correct_answer: ' '
    },

    {
      question_id: '1.7',
      quiz_id: '1.3',
      question_text: 'What phrase would you use to say someone doesn’t care?',
      options: [' ', ' ', ' ', ' '],
      correct_answer: ' '
    },

    {
      question_id: '1.8',
      quiz_id: '1.3',
      question_text: 'What’s the Singlish term for relaxing?',
      options: [' ', ' ', ' ', ' '],
      correct_answer: ' '
    },

    {
      question_id: '1.9',
      quiz_id: '1.3',
      question_text: 'How do you express surprise in Singlish?',
      options: [' ', ' ', ' ', ' '],
      correct_answer: ' '
    },

    {
      question_id: '2.1',
      quiz_id: '2.1',
      question_text: 'What does "makan" mean?',
      options: [' ', ' ', ' ', ' '],
      correct_answer: ' '
    },

    {
      question_id: '2.2',
      quiz_id: '2.1',
      question_text: 'How would you say you want to reserve a seat?',
      options: [' ', ' ', ' ', ' '],
      correct_answer: ' '
    },

    {
      question_id: '2.3',
      quiz_id: '2.1',
      question_text: 'What phrase would you use to express satisfaction after a meal?',
      options: [' ', ' ', ' ', ' '],
      correct_answer: ' '
    },

    {
      question_id: '2.4',
      quiz_id: '2.2',
      question_text: 'If you feel shy asking for something, which word would you use?',
      options: [' ', ' ', ' ', ' '],
      correct_answer: ' '
    },

    {
      question_id: '2.5',
      quiz_id: '2.2',
      question_text: 'How do you politely address an older vendor?',
      options: [' ', ' ', ' ', ' '],
      correct_answer: ' '
    },

    {
      question_id: '2.6',
      quiz_id: '2.2',
      question_text: 'What is the Singlish term for taking your food to go?',
      options: [' ', ' ', ' ', ' '],
      correct_answer: ' '
    },

    {
      question_id: '2.7',
      quiz_id: '2.3',
      question_text: 'What would you say when asking a friend to help you buy something?',
      options: [' ', ' ', ' ', ' '],
      correct_answer: ' '
    },

    {
      question_id: '2.8',
      quiz_id: '2.3',
      question_text: 'What’s the term for agreeing with someone?',
      options: [' ', ' ', ' ', ' '],
      correct_answer: ' '
    },

    {
      question_id: '2.9',
      quiz_id: '2.3',
      question_text: 'How would you describe a leisurely walk?',
      options: [' ', ' ', ' ', ' '],
      correct_answer: ' '
    },

    {
      question_id: '3.1',
      quiz_id: '3.1',
      question_text: 'What would you call a place that’s far and remote?',
      options: [' ', ' ', ' ', ' '],
      correct_answer: ' '
    },

    {
      question_id: '3.2',
      quiz_id: '3.1',
      question_text: 'How do you describe someone who is clueless?',
      options: [' ', ' ', ' ', ' '],
      correct_answer: ' '
    },

    {
      question_id: '3.3',
      quiz_id: '3.1',
      question_text: 'What’s the term for offering to treat someone?',
      options: [' ', ' ', ' ', ' '],
      correct_answer: ' '
    },

    {
      question_id: '3.4',
      quiz_id: '3.2',
      question_text: 'What is the Singlish word for delicious?',
      options: [' ', ' ', ' ', ' '],
      correct_answer: ' '
    },

    {
      question_id: '3.5',
      quiz_id: '3.2',
      question_text: 'How would you express something that is very satisfying?',
      options: [' ', ' ', ' ', ' '],
      correct_answer: ' '
    },

    {
      question_id: '3.6',
      quiz_id: '3.2',
      question_text: 'How do you describe something worn out?',
      options: [' ', ' ', ' ', ' '],
      correct_answer: ' '
    },

    {
      question_id: '3.7',
      quiz_id: '3.3',
      question_text: 'How would you describe someone who is panicking?',
      options: [' ', ' ', ' ', ' '],
      correct_answer: ' '
    },

    {
      question_id: '3.8',
      quiz_id: '3.3',
      question_text: 'What’s the term for being in a difficult situation?',
      options: [' ', ' ', ' ', ' '],
      correct_answer: ' '
    },

    {
      question_id: '3.9',
      quiz_id: '3.3',
      question_text: 'What word would you use to describe something accurate?',
      options: [' ', ' ', ' ', ' '],
      correct_answer: ' '
    },


  ];

  export { users, admins, vocabList, courses, lessons, quizzes, questions };