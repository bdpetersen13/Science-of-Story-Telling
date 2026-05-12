export const chapter14 = {
  id: 14,
  sections: [
    {
      id: 'intro',
      type: 'content',
      title: 'Anatomy of a Flawed Self — The Ignition Point',
      content: [
        { type: 'text', value: 'We\'ve built the framework: personality, setting, POV, culture. Now we go deeper into the **mechanics of character psychology** — how the flawed self forms, defends itself, and what it takes to break it open.' },
        { type: 'callout', variant: 'key-concept', value: 'The **ignition point** is the moment when something disrupts the protagonist\'s theory of control. It\'s the spark that sets the entire story in motion — the moment when the character\'s operating system crashes.' },
        { type: 'text', value: 'Understanding the anatomy of the flawed self lets you design ignition points that hit exactly where they\'ll do the most damage — and create the most compelling drama.' },
      ],
    },
    {
      id: 'self-narrative',
      type: 'content',
      title: 'Self-Narrative Formation',
      content: [
        { type: 'text', value: 'How does the flawed self form? It\'s a developmental process:' },
        { type: 'list', items: [
          '**Infancy**: Self-recognition begins with caregiver interactions',
          '**Early childhood**: Parents tell stories about who the child is',
          '**Middle childhood**: Child begins contributing to their own narrative',
          '**Adolescence**: Formation of the "grand narrative" — a comprehensive story of who they are and why',
          '**Adulthood**: The model becomes increasingly rigid and defended',
        ] },
        { type: 'text', value: 'By adulthood, we\'ve constructed a **grand narrative** about ourselves — a story that explains our past, justifies our present, and predicts our future. This narrative incorporates our flaws, but invisibly. We can\'t see them because they\'re woven into the fabric of how we see.' },
      ],
    },
    {
      id: 'model-defending',
      type: 'content',
      title: 'Model Defending vs. Model Building',
      content: [
        { type: 'text', value: 'In youth, we\'re in **model-building mode** — actively constructing our understanding of how the world works. But at some point, we shift to **model-defending mode** — protecting the models we\'ve built.' },
        { type: 'text', value: 'In model-defending mode:' },
        { type: 'list', items: [
          'Conflicting perspectives feel like **threats**',
          'We unconsciously seek **validation** for existing beliefs',
          'We interpret evidence to **confirm** what we already think',
          'We create **echo chambers** of like-minded people',
          'Contrary evidence triggers **aggression** or **dismissal**',
        ] },
        { type: 'callout', variant: 'insight', value: 'The brain doesn\'t defend beliefs because they\'re true. It defends them because they\'re **ours**. The model feels like the self. Attacking the model feels like attacking identity itself.' },
      ],
    },
    {
      id: 'quiz-1',
      type: 'quiz',
      quizType: 'formative',
      title: 'Model Formation',
      questions: [
        {
          id: 'ch14-q1',
          type: 'ordering',
          question: 'Put these stages of self-narrative formation in order:',
          items: [
            { id: 'a', text: 'Grand narrative crystallizes (adolescence)' },
            { id: 'b', text: 'Self-recognition through caregivers (infancy)' },
            { id: 'c', text: 'Model defending becomes dominant (adulthood)' },
            { id: 'd', text: 'Contributing to own narrative (childhood)' },
          ],
          correctOrder: ['b', 'd', 'a', 'c'],
          feedback: {
            correct: 'Perfect! The sequence: caregiver recognition → contribution → grand narrative → defending.',
            incorrect: 'Order: Infancy (caregivers) → Childhood (contribution) → Adolescence (grand narrative) → Adulthood (defending).',
          },
          conceptKey: 'self-narrative-formation',
        },
      ],
    },
    {
      id: 'ignition-point',
      type: 'content',
      title: 'The Ignition Point',
      content: [
        { type: 'text', value: 'Good storytelling features an **ignition point** — a plot change that disrupts the protagonist\'s theory of control. This disruption creates the entire story.' },
        { type: 'text', value: 'The ignition point must:' },
        { type: 'list', items: [
          '**Target the theory of control** — hit exactly what the character relies on',
          '**Be undeniable** — the character can\'t simply ignore it',
          '**Force a response** — the character must adapt or double down',
          '**Create stakes** — failure to respond has consequences',
        ] },
        { type: 'example', title: 'Ignition Point Examples', items: [
          '**Control Theory**: "I\'m indispensable at work" → **Ignition**: Gets fired',
          '**Control Theory**: "My marriage is solid" → **Ignition**: Discovers affair',
          '**Control Theory**: "I can handle anything alone" → **Ignition**: Faces problem requiring help',
          '**Control Theory**: "I\'m a good parent" → **Ignition**: Child rejects them',
        ] },
      ],
    },
    {
      id: 'echo-chambers',
      type: 'content',
      title: 'Echo Chambers and Confirmation',
      content: [
        { type: 'text', value: 'Characters (like real people) create echo chambers — environments that reinforce their existing beliefs:' },
        { type: 'list', items: [
          'They surround themselves with **like-minded people**',
          'They consume media that **confirms their worldview**',
          'They interpret ambiguous evidence as **supporting their position**',
          'They dismiss critics as **biased or uninformed**',
        ] },
        { type: 'text', value: 'The echo chamber protects the flawed self from challenge. When someone from outside the chamber enters the character\'s world, conflict becomes inevitable.' },
        { type: 'callout', variant: 'insight', value: 'One powerful story structure: bring an **outsider** into a character\'s echo chamber. The outsider\'s different perspective forces the character to confront what they\'ve been avoiding.' },
      ],
    },
    {
      id: 'quiz-2',
      type: 'quiz',
      quizType: 'formative',
      title: 'The Ignition Point',
      questions: [
        {
          id: 'ch14-q2',
          type: 'fill-blank',
          question: 'Complete this definition:',
          sentence: 'The _____ _____ is the moment when something disrupts the protagonist\'s theory of control, setting the entire story in motion.',
          blanks: [
            { id: 'b1', answer: 'ignition', options: ['ignition', 'starting', 'crisis', 'turning'] },
            { id: 'b2', answer: 'point', options: ['point', 'moment', 'event', 'incident'] },
          ],
          feedback: {
            correct: 'Yes! The ignition point is the spark that sets the story ablaze.',
            incorrect: 'The term is "ignition point" — the moment the theory of control is disrupted.',
          },
          conceptKey: 'ignition-point',
        },
        {
          id: 'ch14-q3',
          type: 'multiple-choice',
          question: 'A character whose theory of control is "If I\'m always helpful, people will need me" would be most disrupted by:',
          options: [
            { id: 'a', text: 'Being asked to help with a difficult task', correct: false },
            { id: 'b', text: 'Being told their help is unwanted or harmful', correct: true },
            { id: 'c', text: 'Receiving a promotion at work', correct: false },
            { id: 'd', text: 'Meeting someone who shares their values', correct: false },
          ],
          feedback: {
            correct: 'Exactly! The ignition point must target the specific theory of control. Being told their help is unwanted attacks the foundation of their self-concept.',
            incorrect: 'The ignition point must **directly challenge** the theory of control. What would make "being helpful = being needed" collapse?',
          },
          hint: 'What would make their entire strategy for feeling valuable suddenly not work?',
          conceptKey: 'ignition-point-design',
        },
      ],
    },
    {
      id: 'case-study',
      type: 'content',
      title: 'Case Study: Stevens (The Remains of the Day)',
      content: [
        { type: 'text', value: 'Stevens provides a masterful example of theory of control, ignition point, and model defending:' },
        { type: 'text', value: '**Stevens\' Theory of Control**: Dignity through perfect professional service. Emotional restraint is strength. Personal needs are subordinate to duty.' },
        { type: 'text', value: '**The Ignition Point**: His new American employer\'s casual, joking manner challenges Stevens\' entire framework. The world has changed, and his theory of control no longer fits.' },
        { type: 'text', value: '**Model Defending**: Stevens cannot simply abandon his identity. He interprets the new situation through his old framework, creating tension between **maintaining identity** and **adapting to reality**.' },
        { type: 'quote', value: 'The tragedy of Stevens is that his model defended itself so successfully that he missed his chance at love, connection, and a different kind of life. The model won, and Stevens lost.', attribution: 'Course analysis' },
      ],
    },
    {
      id: 'exercise',
      type: 'exercise',
      title: 'Ignition Point Design',
      exercises: [
        {
          id: 'ch14-ex1',
          type: 'structured-template',
          title: 'Design a Perfect Ignition Point',
          instructions: 'For a character you\'ve been developing, design an ignition point that perfectly targets their weak spot.',
          fields: [
            { id: 'theory', label: 'Theory of Control', placeholder: 'What is their learned strategy for managing the world?' },
            { id: 'grand-narrative', label: 'Grand Narrative', placeholder: 'What story do they tell about themselves and their life?' },
            { id: 'echo-chamber', label: 'Echo Chamber', placeholder: 'Who/what reinforces their beliefs? (3-5 sources)' },
            { id: 'weak-spot', label: 'The Weak Spot', placeholder: 'Where is their theory of control most vulnerable?' },
            { id: 'ignition', label: 'The Ignition Point', placeholder: 'What event directly targets this weak spot?' },
            { id: 'scene', label: 'The Scene (200 words)', placeholder: 'Write the moment the ignition point hits...' },
          ],
          xpReward: 300,
        },
      ],
    },
    {
      id: 'quiz-summative',
      type: 'quiz',
      quizType: 'summative',
      title: 'Chapter 14 Assessment',
      passingScore: 70,
      questions: [
        {
          id: 'ch14-s1',
          type: 'multiple-choice',
          conceptKey: 'model-defending',
          question: 'The shift from "model building" to "model defending" means:',
          options: [
            { id: 'a', text: 'Characters become more open to new perspectives', correct: false },
            { id: 'b', text: 'Characters protect existing beliefs and resist contradictory evidence', correct: true },
            { id: 'c', text: 'Characters lose the ability to learn new skills', correct: false },
            { id: 'd', text: 'Characters become more rational and evidence-based', correct: false },
          ],
          feedback: {
            correct: 'Exactly! Model defending means protecting the self-narrative, even against evidence. This resistance IS the character\'s psychology.',
            incorrect: 'Model defending = protecting existing beliefs. Contradictory evidence is dismissed, ignored, or reinterpreted.',
          },
        },
        {
          id: 'ch14-s2',
          type: 'matching',
          conceptKey: 'ignition-point',
          question: 'Match each theory of control to an effective ignition point:',
          pairs: [
            { id: 'a', left: '"Success makes me worthy"', right: 'Public failure or exposure' },
            { id: 'b', left: '"I don\'t need anyone"', right: 'Crisis requiring help from others' },
            { id: 'c', left: '"I\'m always right"', right: 'Undeniable proof of major error' },
            { id: 'd', left: '"Being perfect keeps me safe"', right: 'Acceptance despite visible flaw' },
          ],
          feedback: {
            correct: 'Perfect! Each ignition point directly targets the specific theory of control.',
            incorrect: 'The ignition point must directly challenge the specific theory. Success theory → failure. Independence theory → forced dependence. Etc.',
          },
        },
        {
          id: 'ch14-s3',
          type: 'multiple-choice',
          conceptKey: 'echo-chambers',
          question: 'Characters create echo chambers because:',
          options: [
            { id: 'a', text: 'They want to avoid work', correct: false },
            { id: 'b', text: 'The brain seeks validation for its existing models', correct: true },
            { id: 'c', text: 'They are morally weak', correct: false },
            { id: 'd', text: 'Society forces them into groups', correct: false },
          ],
          feedback: {
            correct: 'Yes! Echo chambers are a natural product of model-defending. The brain seeks confirmation, not challenge.',
            incorrect: 'Echo chambers form because the brain naturally seeks **validation** for existing beliefs. It\'s psychology, not morality.',
          },
        },
        {
          id: 'ch14-s4',
          type: 'multiple-choice',
          conceptKey: 'case-study-stevens',
          question: 'Stevens from *The Remains of the Day* demonstrates that:',
          options: [
            { id: 'a', text: 'All characters eventually change and grow', correct: false },
            { id: 'b', text: 'Model defending can succeed so well that the character loses what matters most', correct: true },
            { id: 'c', text: 'Professional excellence guarantees personal happiness', correct: false },
            { id: 'd', text: 'Ignition points always lead to positive transformation', correct: false },
          ],
          feedback: {
            correct: 'Exactly! Stevens\' model defended itself perfectly — and he lost his chance at love and connection. The model won; Stevens lost.',
            incorrect: 'Stevens is a tragic example: his model defended itself so successfully that he missed his chance at a different life.',
          },
        },
      ],
    },
    {
      id: 'summary',
      type: 'content',
      title: 'Chapter Summary',
      content: [
        { type: 'text', value: '## Key Takeaways from Chapter 14' },
        { type: 'list', items: [
          '**Grand narrative** — forms through development, becomes rigid in adulthood',
          '**Model defending** — the brain protects beliefs as if they were the self',
          '**Ignition point** — disrupts theory of control, creates entire story',
          '**Echo chambers** — environments that protect flawed beliefs from challenge',
          '**Tragic possibility** — model can defend so successfully that character loses what matters',
        ] },
        { type: 'callout', variant: 'next', value: '**Next up**: Chapter 15 — Fictional Memories & Moral Delusions. Explore the hero-maker brain and how competing righteousness creates compelling antagonists.' },
      ],
    },
  ],
};
