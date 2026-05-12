export const chapter12 = {
  id: 12,
  sections: [
    {
      id: 'intro',
      type: 'content',
      title: 'Personality and Point of View',
      content: [
        { type: 'text', value: 'Personality expresses itself through plot (Chapter 10) and setting (Chapter 11). Now we explore its most intimate expression: **point of view**. How a character perceives and describes the world is perhaps the most powerful characterization tool available.' },
        { type: 'callout', variant: 'key-concept', value: 'In contemporary fiction, descriptions don\'t reflect objective reality — they reflect the **character\'s perspective**. The same room described by two different characters becomes two different rooms.' },
        { type: 'text', value: 'POV is not just a technical choice about first vs. third person. It\'s a lens that filters everything. What a character notices, ignores, values, and fears — all revealed through perspective.' },
      ],
    },
    {
      id: 'beyond-personality',
      type: 'content',
      title: 'Beyond Personality Alone',
      content: [
        { type: 'text', value: 'Personality (the Big Five) is only one layer of character identity. It interacts with:' },
        { type: 'list', items: [
          '**Cultural background** — values, assumptions, worldview',
          '**Social class** — what feels normal, what feels aspirational or threatening',
          '**Economic circumstances** — scarcity vs. abundance mentality',
          '**Personal history** — specific experiences that shaped perception',
          '**Current emotional state** — mood colors everything',
        ] },
        { type: 'text', value: 'Together, these layers create a unique **neural world** for each character. Two people in the same room literally perceive different realities based on their combined filters.' },
      ],
    },
    {
      id: 'pov-as-reveal',
      type: 'content',
      title: 'POV as Flaw Reveal',
      content: [
        { type: 'text', value: 'The protagonist\'s POV guides the audience through the narrative. But it does more than that — it **reveals character flaws** to the reader even when the character can\'t see them.' },
        { type: 'example', title: 'Openings That Reveal Through POV', items: [
          '**Bukowski\'s *Post Office***: The narrator\'s haphazard, irreverent observations immediately reveal his relaxed, undisciplined nature.',
          '**Zadie Smith\'s *White Teeth***: The dramatic opening shows us Archie Jones through his own perspective — we see his resignation before we\'re told about it.',
          '**James Baldwin\'s *Another Country***: Descriptions are filtered through characters\' emotional states, adding layers of psychological depth.',
        ] },
        { type: 'callout', variant: 'insight', value: 'The most powerful technique: write from a POV where the narrator\'s flaws are **visible to the reader but invisible to the narrator**. The reader sees what the character can\'t see about themselves.' },
      ],
    },
    {
      id: 'quiz-1',
      type: 'quiz',
      quizType: 'formative',
      title: 'POV and Character',
      questions: [
        {
          id: 'ch12-q1',
          type: 'multiple-choice',
          question: 'When a first-person narrator describes others as "always judging" them, this most likely reveals:',
          options: [
            { id: 'a', text: 'That the other characters are judgmental', correct: false },
            { id: 'b', text: 'The narrator\'s own insecurity or paranoia (their flaw visible to reader)', correct: true },
            { id: 'c', text: 'Objective information about the story\'s social dynamics', correct: false },
            { id: 'd', text: 'The author\'s opinion about judgment', correct: false },
          ],
          feedback: {
            correct: 'Exactly! POV reveals the narrator\'s psychology. A narrator who sees judgment everywhere is revealing their own insecurity, not objective reality.',
            incorrect: 'In character-centric POV, what the narrator perceives tells us about **them**, not necessarily about objective reality.',
          },
          hint: 'Remember: POV is a filter that reveals the perceiver, not just what\'s perceived.',
          conceptKey: 'pov-flaw-reveal',
        },
      ],
    },
    {
      id: 'character-centric',
      type: 'content',
      title: 'Character-Centric Description',
      content: [
        { type: 'text', value: 'In contemporary fiction, descriptions reflect the character\'s perspective, not the author\'s. What a character notices, how they describe it, and what they ignore — all reveal personality.' },
        { type: 'tabs', tabs: [
          { label: 'Anxious POV', content: '"The elevator doors closed with a final, mechanical sigh. The fluorescent light buzzed at a frequency that burrowed into her temples. She counted the floors — seven, eight, nine — each number a small prayer." The world is threatening, mechanical, counting-obsessed.' },
          { label: 'Confident POV', content: '"The elevator hummed upward. She checked her reflection in the polished doors, adjusted a strand of hair. Nine floors. Barely enough time to review her opening line." The same elevator, completely different world.' },
          { label: 'Depressed POV', content: '"The elevator. Again. She leaned against the back wall and closed her eyes. It didn\'t matter which floor. They were all the same gray." Everything is flat, meaningless, interchangeable.' },
        ] },
        { type: 'text', value: 'The same physical reality becomes three completely different experienced realities. Each description IS characterization.' },
      ],
    },
    {
      id: 'quiz-2',
      type: 'quiz',
      quizType: 'formative',
      title: 'Perspective Filtering',
      questions: [
        {
          id: 'ch12-q2',
          type: 'fill-blank',
          question: 'Complete this principle of contemporary fiction:',
          sentence: 'In character-centric description, the same _____ described by two different characters becomes two different _____.',
          blanks: [
            { id: 'b1', answer: 'room', options: ['room', 'scene', 'event', 'object'] },
            { id: 'b2', answer: 'rooms', options: ['rooms', 'scenes', 'stories', 'places'] },
          ],
          feedback: {
            correct: 'Yes! Perspective transforms reality. The same physical space becomes different experienced realities.',
            incorrect: 'The principle is: the same room described by different characters becomes different rooms.',
          },
          conceptKey: 'character-centric-description',
        },
      ],
    },
    {
      id: 'exercise',
      type: 'exercise',
      title: 'Dual Perspective',
      exercises: [
        {
          id: 'ch12-ex1',
          type: 'structured-template',
          title: 'Same Event, Different Eyes',
          instructions: 'Write the same brief event from two characters\' POVs with different Big Five profiles.',
          fields: [
            { id: 'event', label: 'The Event', placeholder: 'Describe the objective event (e.g., "Two people wait in a doctor\'s office")' },
            { id: 'char1-profile', label: 'Character 1 Big Five Profile', placeholder: 'e.g., High Neuroticism, Low Extraversion' },
            { id: 'char1-pov', label: 'Character 1\'s POV (150 words)', placeholder: 'Describe the event filtered through this personality...' },
            { id: 'char2-profile', label: 'Character 2 Big Five Profile', placeholder: 'e.g., Low Neuroticism, High Extraversion' },
            { id: 'char2-pov', label: 'Character 2\'s POV (150 words)', placeholder: 'Describe the same event through this different filter...' },
          ],
          xpReward: 200,
        },
      ],
    },
    {
      id: 'quiz-summative',
      type: 'quiz',
      quizType: 'summative',
      title: 'Chapter 12 Assessment',
      passingScore: 70,
      questions: [
        {
          id: 'ch12-s1',
          type: 'multiple-choice',
          conceptKey: 'pov-characterization',
          question: 'Character-centric description means:',
          options: [
            { id: 'a', text: 'The author describes things objectively and lets readers draw conclusions', correct: false },
            { id: 'b', text: 'Descriptions are filtered through the character\'s personality, mood, and background', correct: true },
            { id: 'c', text: 'Only the main character gets detailed descriptions', correct: false },
            { id: 'd', text: 'Characters describe themselves in first person', correct: false },
          ],
          feedback: {
            correct: 'Exactly! Every description passes through the character\'s perceptual filter. What they notice and how they describe it reveals who they are.',
            incorrect: 'Character-centric description means ALL descriptions are filtered through the POV character\'s psychology.',
          },
        },
        {
          id: 'ch12-s2',
          type: 'multiple-choice',
          conceptKey: 'pov-flaw-reveal',
          question: 'The most effective POV writing reveals character flaws that are:',
          options: [
            { id: 'a', text: 'Stated explicitly by the narrator', correct: false },
            { id: 'b', text: 'Visible to the reader but invisible to the narrator', correct: true },
            { id: 'c', text: 'Pointed out by other characters', correct: false },
            { id: 'd', text: 'Overcome by the end of the first chapter', correct: false },
          ],
          feedback: {
            correct: 'Yes! The gap between what the narrator sees about themselves and what the reader sees IS the characterization.',
            incorrect: 'The most powerful technique: flaws visible to reader, invisible to narrator. The reader sees what the character can\'t.',
          },
        },
        {
          id: 'ch12-s3',
          type: 'matching',
          conceptKey: 'pov-personality',
          question: 'Match each POV characteristic to the personality trait it likely reveals:',
          pairs: [
            { id: 'a', left: 'Notices every potential threat', right: 'High Neuroticism' },
            { id: 'b', left: 'Focuses on people and social dynamics', right: 'High Extraversion' },
            { id: 'c', left: 'Notices systems, patterns, efficiency', right: 'High Conscientiousness' },
            { id: 'd', left: 'Notices beauty, symbolism, meaning', right: 'High Openness' },
          ],
          feedback: {
            correct: 'Perfect! What a character notices reveals their Big Five profile.',
            incorrect: 'Each trait creates a different perceptual filter. Neurotics see threats; Extraverts see people; etc.',
          },
        },
        {
          id: 'ch12-s4',
          type: 'ordering',
          conceptKey: 'layers-of-identity',
          question: 'Order these from DEEPEST to MOST SURFACE layer of character identity:',
          items: [
            { id: 'a', text: 'Current emotional state' },
            { id: 'b', text: 'Personality traits (Big Five)' },
            { id: 'c', text: 'Cultural background' },
            { id: 'd', text: 'Personal history / specific experiences' },
          ],
          correctOrder: ['b', 'c', 'd', 'a'],
          feedback: {
            correct: 'Right! Personality is deepest (most stable), then culture, then personal history, then current mood (most changeable).',
            incorrect: 'From deepest to surface: Personality (stable) → Culture → Personal History → Current Mood (changeable).',
          },
        },
      ],
    },
    {
      id: 'summary',
      type: 'content',
      title: 'Chapter Summary',
      content: [
        { type: 'text', value: '## Key Takeaways from Chapter 12' },
        { type: 'list', items: [
          '**POV is a filter** — what characters notice and how they describe it reveals personality',
          '**Same room, different rooms** — perspective transforms physical reality into experienced reality',
          '**Flaw reveal technique** — reader sees what narrator can\'t see about themselves',
          '**Multiple layers** — personality + culture + class + history + mood = unique neural world',
          '**Description IS characterization** — every descriptive choice reveals the perceiver',
        ] },
        { type: 'callout', variant: 'next', value: '**Next up**: Chapter 13 — Culture and Character. Explore how cultural frameworks shape cognition and create fundamentally different story structures.' },
      ],
    },
  ],
};
