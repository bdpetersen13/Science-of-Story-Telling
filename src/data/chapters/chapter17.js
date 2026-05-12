export const chapter17 = {
  id: 17,
  sections: [
    {
      id: 'intro',
      type: 'content',
      title: 'How Flawed Characters Create Meaning',
      content: [
        { type: 'text', value: 'This is the capstone chapter of Part 2. We\'ve explored the flawed self from every angle: personality, setting, POV, culture, the ignition point, the hero-maker brain, and belief change. Now we synthesize everything into a unified understanding of how **character creates meaning**.' },
        { type: 'callout', variant: 'key-concept', value: 'Surface events (road trips, battles, conversations) provide drama. But the **true essence** of story lies in the character\'s evolving identity. Plot is the vehicle; character transformation is the cargo.' },
        { type: 'text', value: 'The ultimate question driving every narrative: **Who is this person becoming?**' },
      ],
    },
    {
      id: 'surface-vs-core',
      type: 'content',
      title: 'Surface Conflict vs. Core Transformation',
      content: [
        { type: 'text', value: 'Consider Stevens from *The Remains of the Day*. His surface conflict — his new American employer\'s joking manner — seems trivial. But it signifies something enormous: the entire framework Stevens has built his life around is obsolete.' },
        { type: 'text', value: 'The road trip to visit Miss Kenton is just a road trip on the surface. But it\'s really about:' },
        { type: 'list', items: [
          'His **inability to connect** emotionally with anyone',
          'His **missed romantic opportunity** with Miss Kenton',
          'His **theory of control** (dignity through restraint) failing him',
          'His **desperate attempt to regain control** in a changed world',
        ] },
        { type: 'quote', value: 'Seemingly small conflicts carry enormous weight when connected to character psychology. A disagreement about jokes becomes a battle for identity.', attribution: 'Course analysis' },
      ],
    },
    {
      id: 'plot-as-vehicle',
      type: 'content',
      title: 'Plot as Vehicle for Character',
      content: [
        { type: 'text', value: 'Plot provides the **external pressure** that reveals and transforms character. But plot events lack meaning without a relatable character to experience them.' },
        { type: 'text', value: 'Consider:' },
        { type: 'example', title: 'Event vs. Character-Event', items: [
          '**Event**: A man loses his job. (So what?)',
          '**Character-Event**: A man whose entire identity is built on being the provider loses his job. (Now there\'s drama.)',
          '**Event**: A woman discovers a secret. (Mildly interesting.)',
          '**Character-Event**: A woman whose theory of control is "trust no one" discovers the one person she trusted has been lying. (Devastating.)',
        ] },
        { type: 'text', value: 'The same plot event creates vastly different stories depending on the character it happens to. This is why character comes first.' },
        { type: 'callout', variant: 'insight', value: '**Character IS plot.** The events don\'t create the story — the character\'s unique psychological response to events creates the story.' },
      ],
    },
    {
      id: 'quiz-1',
      type: 'quiz',
      quizType: 'formative',
      title: 'Character and Plot',
      questions: [
        {
          id: 'ch17-q1',
          type: 'fill-blank',
          question: 'Complete this principle:',
          sentence: 'Plot is the _____; character transformation is the _____.',
          blanks: [
            { id: 'b1', answer: 'vehicle', options: ['vehicle', 'setting', 'structure', 'framework'] },
            { id: 'b2', answer: 'cargo', options: ['cargo', 'meaning', 'destination', 'purpose'] },
          ],
          feedback: {
            correct: 'Yes! Plot carries the character transformation, which is the real payload of the story.',
            incorrect: 'The metaphor is: plot is the vehicle, character transformation is the cargo.',
          },
          conceptKey: 'plot-character-relationship',
        },
      ],
    },
    {
      id: 'primacy-of-character',
      type: 'content',
      title: 'The Primacy of Character',
      content: [
        { type: 'text', value: 'Dramatic elements — chases, reveals, confrontations — are only compelling because they evoke emotions tied to a character\'s unique experiences. Without character, they\'re just spectacle.' },
        { type: 'text', value: 'All stories center on character struggles, both **external** (vs. world) and **internal** (vs. self). The most powerful stories align these:' },
        { type: 'list', items: [
          '**External conflict** mirrors **internal conflict**',
          'The **antagonist** represents what the protagonist fears in themselves',
          'The **climax** resolves both outer and inner battles simultaneously',
          '**Victory** means change; **defeat** means failure to change',
        ] },
        { type: 'text', value: 'This is why character arcs feel so satisfying when done well. The external resolution proves the internal transformation.' },
      ],
    },
    {
      id: 'core-question',
      type: 'content',
      title: 'The Core Question',
      content: [
        { type: 'text', value: 'The ultimate question driving every narrative is deceptively simple:' },
        { type: 'callout', variant: 'key-concept', value: '**"Who is this person becoming?"**' },
        { type: 'text', value: 'Every scene, every conflict, every choice either advances or complicates this question. The protagonist\'s search for self-identity amid chaos and shifting realities IS the story.' },
        { type: 'text', value: 'At the end, we learn the answer:' },
        { type: 'list', items: [
          '**Comedy/Triumph**: They became who they needed to become',
          '**Tragedy**: They failed to become who they needed to become',
          '**Ambiguous**: We\'re left to wonder — did they really change?',
        ] },
        { type: 'quote', value: 'Every story is a reflection of character transformation — or the failure to transform. Plot is just the pressure that forces the question.', attribution: 'Course synthesis' },
      ],
    },
    {
      id: 'quiz-2',
      type: 'quiz',
      quizType: 'formative',
      title: 'The Core Question',
      questions: [
        {
          id: 'ch17-q2',
          type: 'multiple-choice',
          question: 'The "core question" driving every narrative is:',
          options: [
            { id: 'a', text: '"Will the hero defeat the villain?"', correct: false },
            { id: 'b', text: '"Who is this person becoming?"', correct: true },
            { id: 'c', text: '"What will happen next?"', correct: false },
            { id: 'd', text: '"How will the story end?"', correct: false },
          ],
          feedback: {
            correct: 'Exactly! Plot events are just pressure. The real question is about identity transformation.',
            incorrect: 'Plot questions (will they win? what happens?) are secondary to the character question: **Who is this person becoming?**',
          },
          conceptKey: 'core-question',
        },
        {
          id: 'ch17-q3',
          type: 'matching',
          question: 'Match each ending type to its character outcome:',
          pairs: [
            { id: 'a', left: 'Comedy/Triumph', right: 'Character became who they needed to become' },
            { id: 'b', left: 'Tragedy', right: 'Character failed to transform' },
            { id: 'c', left: 'Ambiguous', right: 'Transformation remains uncertain' },
            { id: 'd', left: 'Anti-hero arc', right: 'Character transformed in the wrong direction' },
          ],
          feedback: {
            correct: 'Perfect! Each ending type reflects a different answer to the core question.',
            incorrect: 'Triumph = transformation. Tragedy = failure. Ambiguous = uncertain. Anti-hero = wrong direction.',
          },
          conceptKey: 'ending-types',
        },
      ],
    },
    {
      id: 'exercise',
      type: 'exercise',
      title: 'Part 2 Integration',
      exercises: [
        {
          id: 'ch17-ex1',
          type: 'structured-template',
          title: 'Complete Character Bible',
          instructions: 'Create a complete character using every framework from Part 2. This is the capstone exercise.',
          fields: [
            { id: 'big-five', label: 'Big Five Profile (Ch 10)', placeholder: 'O/C/E/A/N scores with brief justifications' },
            { id: 'environment', label: 'Environmental Characterization (Ch 11)', placeholder: 'Identity claims and behavioral residue in their space' },
            { id: 'pov-voice', label: 'POV Voice (Ch 12)', placeholder: 'How does their perspective filter what they notice and describe?' },
            { id: 'cultural-lens', label: 'Cultural Framework (Ch 13)', placeholder: 'Individualist or collectivist? How does culture shape their values?' },
            { id: 'theory-control', label: 'Theory of Control + Ignition Point (Ch 14)', placeholder: 'What\'s their strategy? What shatters it?' },
            { id: 'hero-narrative', label: 'Hero-Maker Narrative (Ch 15)', placeholder: 'What story do they tell about themselves?' },
            { id: 'david-goliath', label: 'David vs. Goliath Framing (Ch 16)', placeholder: 'Who is their "Goliath"? Are they actually David?' },
            { id: 'core-transformation', label: 'Core Transformation Arc (Ch 17)', placeholder: 'Who are they becoming? Will they succeed?' },
          ],
          xpReward: 400,
        },
      ],
    },
    {
      id: 'quiz-summative',
      type: 'quiz',
      quizType: 'summative',
      title: 'Chapter 17 Assessment',
      passingScore: 70,
      questions: [
        {
          id: 'ch17-s1',
          type: 'multiple-choice',
          conceptKey: 'character-is-plot',
          question: 'The statement "Character IS plot" means:',
          options: [
            { id: 'a', text: 'Plot structure should be based on character archetypes', correct: false },
            { id: 'b', text: 'Events become meaningful through the character\'s unique psychological response', correct: true },
            { id: 'c', text: 'Character descriptions should include plot summary', correct: false },
            { id: 'd', text: 'Plot and character cannot be separated in analysis', correct: false },
          ],
          feedback: {
            correct: 'Exactly! The same event creates different stories depending on the character. The response IS the plot.',
            incorrect: '"Character IS plot" means events only become story through the character\'s **unique psychological response**.',
          },
        },
        {
          id: 'ch17-s2',
          type: 'ordering',
          conceptKey: 'surface-to-core',
          question: 'Order these from SURFACE level to CORE meaning:',
          items: [
            { id: 'a', text: 'Stevens takes a road trip to Cornwall' },
            { id: 'b', text: 'Stevens confronts his emotional unavailability' },
            { id: 'c', text: 'Stevens meets Miss Kenton' },
            { id: 'd', text: 'Stevens\' theory of control fails in a changed world' },
          ],
          correctOrder: ['a', 'c', 'd', 'b'],
          feedback: {
            correct: 'Perfect! Surface event → Meeting → Theory challenged → Core confrontation.',
            incorrect: 'From surface to core: Road trip → Meeting → Theory fails → Emotional confrontation.',
          },
        },
        {
          id: 'ch17-s3',
          type: 'fill-blank',
          conceptKey: 'core-question',
          question: 'Complete the core question of narrative:',
          sentence: '"_____ is this _____ becoming?"',
          blanks: [
            { id: 'b1', answer: 'Who', options: ['Who', 'What', 'How', 'Why'] },
            { id: 'b2', answer: 'person', options: ['person', 'character', 'hero', 'story'] },
          ],
          feedback: {
            correct: 'Yes! "Who is this person becoming?" is the question at the heart of every story.',
            incorrect: 'The core question is: "Who is this person becoming?"',
          },
        },
        {
          id: 'ch17-s4',
          type: 'multiple-choice',
          conceptKey: 'external-internal-alignment',
          question: 'The most powerful stories align external and internal conflict by:',
          options: [
            { id: 'a', text: 'Having the antagonist be physically stronger', correct: false },
            { id: 'b', text: 'Making the external conflict mirror the internal struggle', correct: true },
            { id: 'c', text: 'Keeping external and internal conflicts separate', correct: false },
            { id: 'd', text: 'Resolving internal conflict before external', correct: false },
          ],
          feedback: {
            correct: 'Exactly! When the external battle mirrors the internal one, victory proves transformation.',
            incorrect: 'Alignment means the external conflict **mirrors** the internal struggle. Winning outside proves change inside.',
          },
        },
        {
          id: 'ch17-s5',
          type: 'multiple-choice',
          conceptKey: 'tragedy-vs-triumph',
          question: 'In storytelling terms, tragedy is fundamentally about:',
          options: [
            { id: 'a', text: 'Bad things happening to good people', correct: false },
            { id: 'b', text: 'A character failing to become who they needed to become', correct: true },
            { id: 'c', text: 'Death of the protagonist', correct: false },
            { id: 'd', text: 'Villains winning over heroes', correct: false },
          ],
          feedback: {
            correct: 'Yes! Tragedy is the failure of transformation. The character couldn\'t or wouldn\'t become who they needed to be.',
            incorrect: 'Tragedy isn\'t about events (death, failure) but about **failed transformation** — not becoming who they needed to become.',
          },
        },
      ],
    },
    {
      id: 'summary',
      type: 'content',
      title: 'Chapter Summary',
      content: [
        { type: 'text', value: '## Key Takeaways from Chapter 17' },
        { type: 'list', items: [
          '**Surface vs. Core** — external events carry internal transformation',
          '**Plot is vehicle** — character transformation is the cargo',
          '**Character IS plot** — events only matter through character response',
          '**External mirrors internal** — outer victory proves inner change',
          '**Core question** — "Who is this person becoming?"',
        ] },
        { type: 'callout', variant: 'next', value: '🎉 **Congratulations!** You\'ve completed Part 2: The Flawed Self. You now have a complete framework for creating psychologically authentic characters. **Next**: Part 3 — The Dramatic Question, where we explore plot structure and how stories create meaning through conflict.' },
      ],
    },
  ],
};
