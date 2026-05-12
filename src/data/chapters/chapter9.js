export const chapter9 = {
  id: 9,
  sections: [
    {
      id: 'intro',
      type: 'content',
      title: 'The Flawed Self',
      content: [
        { type: 'text', value: 'Welcome to Part 2. Having explored how the brain constructs reality and processes stories, we now turn to the **flawed self** — the psychologically authentic characters that drive compelling narratives.' },
        { type: 'callout', variant: 'key-concept', value: 'Every character lives in a **distorted reality** shaped by biases and flawed beliefs. These distortions are invisible to the character themselves — but visible to the reader. This gap is the engine of drama.' },
        { type: 'text', value: 'Will Storr opens Part 2 with a striking case study: Mr. B, a man who believes he\'s under constant FBI surveillance, living in a staged reality show. His psychosis illustrates something profound about all of us.' },
      ],
    },
    {
      id: 'mr-b',
      type: 'content',
      title: 'Mr. B\'s Distorted Reality',
      content: [
        { type: 'text', value: 'Mr. B is convinced that cameras follow him everywhere, that his neighbors are actors, and that his entire life is being broadcast. When others try to convince him otherwise, he dismisses their arguments. His model **defends itself**.' },
        { type: 'text', value: 'Here\'s the uncomfortable truth: Mr. B\'s condition is an extreme version of something we all experience. We all live in constructed realities shaped by our biases, assumptions, and neural models. The difference is one of degree, not kind.' },
        { type: 'quote', value: 'The flawed self is not a bug — it\'s a feature. Every human operates with incomplete, biased models of reality. This is what makes us individuals, and what makes characters compelling.', attribution: 'Will Storr (paraphrased)' },
      ],
    },
    {
      id: 'universal-flaws',
      type: 'content',
      title: 'Universal Human Flaws',
      content: [
        { type: 'text', value: 'All humans live with distorted realities. These distortions aren\'t random — they\'re shaped by our experiences, our culture, and our psychological needs. They make us unique, but they also impair our ability to navigate the world accurately.' },
        { type: 'list', items: [
          '**Flaws are embedded in perception** — we don\'t see reality, we see our model of reality',
          '**Flaws are invisible to us** — we can\'t see what we can\'t see',
          '**Flaws feel like truth** — our distorted view feels like objective reality',
          '**Flaws are defended fiercely** — the brain protects its models from challenge',
        ] },
        { type: 'text', value: 'For storytellers, this means characters don\'t simply "have flaws" like items on a checklist. Their flaws are woven into how they perceive everything. A jealous character doesn\'t just feel jealousy — they see threats to their relationships everywhere.' },
      ],
    },
    {
      id: 'quiz-1',
      type: 'quiz',
      quizType: 'formative',
      title: 'Check Your Understanding',
      questions: [
        {
          id: 'ch9-q1',
          type: 'multiple-choice',
          question: 'Why does Mr. B\'s case illustrate something universal about human psychology?',
          options: [
            { id: 'a', text: 'Because everyone secretly believes they\'re being watched', correct: false },
            { id: 'b', text: 'Because all humans live in constructed realities shaped by biases — his is just more extreme', correct: true },
            { id: 'c', text: 'Because psychosis is more common than we think', correct: false },
            { id: 'd', text: 'Because the FBI actually does surveillance on many people', correct: false },
          ],
          feedback: {
            correct: 'Exactly! Mr. B\'s distorted reality is an extreme version of what all humans experience. We all live in models, not reality itself.',
            incorrect: 'The key insight is that **all** humans live in constructed, biased realities. Mr. B\'s condition is extreme, but the underlying mechanism is universal.',
          },
          hint: 'Think about what we learned about the "model-making brain" in Part 1.',
          conceptKey: 'flawed-self',
        },
      ],
    },
    {
      id: 'naive-realism',
      type: 'content',
      title: 'Naive Realism',
      content: [
        { type: 'text', value: 'Psychologists have a term for our default assumption that we see the world as it truly is: **naive realism**. We believe our perception is objective, unbiased, and accurate. We believe that anyone who sees things differently is either uninformed, stupid, or malicious.' },
        { type: 'callout', variant: 'insight', value: '**Naive realism** is the belief that we perceive reality directly and accurately, and that anyone who disagrees must be biased, irrational, or lying. It\'s the cognitive foundation of most human conflict.' },
        { type: 'text', value: 'This is the engine that makes characters resist change. When a character "knows" they\'re right, they\'re not being stubborn — they\'re experiencing their flawed model as objective truth. Asking them to change feels like asking them to abandon reality itself.' },
        { type: 'tabs', tabs: [
          { label: 'Real Life', content: 'Political polarization often stems from naive realism. Each side believes they see reality clearly and the other side is deluded or dishonest. Neither recognizes their own model as a model.' },
          { label: 'In Fiction', content: 'Great antagonists aren\'t evil for evil\'s sake. They\'re naive realists who believe their worldview is objectively correct. Their villainy comes from acting on what they perceive as truth.' },
        ] },
      ],
    },
    {
      id: 'theory-of-control',
      type: 'content',
      title: 'The Theory of Control',
      content: [
        { type: 'text', value: 'Every character has what Storr calls a **theory of control** — a learned strategy for managing their world and responding to unexpected changes. This theory shapes identity and behavior at the deepest level.' },
        { type: 'example', title: 'Theories of Control', items: [
          '"If I\'m perfect, no one can criticize me" → Perfectionist control strategy',
          '"If I never trust anyone, I won\'t get hurt" → Isolation control strategy',
          '"If I\'m funny, people will like me" → Performance control strategy',
          '"If I control everything, nothing bad can happen" → Domination control strategy',
        ] },
        { type: 'text', value: 'A character\'s theory of control is their operating system. It runs in the background, shaping every decision. When a story disrupts this theory, the character is forced to adapt — or double down and suffer the consequences.' },
        { type: 'callout', variant: 'key-concept', value: 'The **ignition point** of a story is the moment when something happens that disrupts the protagonist\'s theory of control. The entire plot flows from this disruption.' },
      ],
    },
    {
      id: 'quiz-2',
      type: 'quiz',
      quizType: 'formative',
      title: 'Theories of Control',
      questions: [
        {
          id: 'ch9-q2',
          type: 'matching',
          question: 'Match each character archetype to their likely theory of control:',
          pairs: [
            { id: 'a', left: 'The Overachiever', right: 'Success will make me worthy of love' },
            { id: 'b', left: 'The Loner', right: 'If I need no one, no one can hurt me' },
            { id: 'c', left: 'The People-Pleaser', right: 'If everyone likes me, I\'ll be safe' },
            { id: 'd', left: 'The Control Freak', right: 'If I control everything, nothing bad happens' },
          ],
          feedback: {
            correct: 'Perfect! Each archetype has a theory of control that drives their behavior.',
            incorrect: 'Think about what each archetype fears and how they try to prevent that fear from coming true.',
          },
          conceptKey: 'theory-of-control',
        },
        {
          id: 'ch9-q3',
          type: 'multiple-choice',
          question: 'What happens when a story disrupts a character\'s theory of control?',
          options: [
            { id: 'a', text: 'The character immediately changes their beliefs', correct: false },
            { id: 'b', text: 'The character is forced to adapt or double down, creating dramatic tension', correct: true },
            { id: 'c', text: 'The character becomes an antagonist', correct: false },
            { id: 'd', text: 'The story usually ends', correct: false },
          ],
          feedback: {
            correct: 'Yes! The disruption of the theory of control creates the central tension. The character must change their operating system or suffer the consequences of clinging to it.',
            incorrect: 'Characters don\'t change easily. When their theory of control is threatened, they typically resist — creating dramatic tension.',
          },
          hint: 'Remember how the brain defends its models.',
          conceptKey: 'theory-of-control',
        },
      ],
    },
    {
      id: 'challenge-of-change',
      type: 'content',
      title: 'The Challenge of Change',
      content: [
        { type: 'text', value: 'Characters begin stories with deep-rooted naivety, unaware of their flaws. Accepting and changing these flaws is daunting and painful — this is the hero\'s journey at its psychological core.' },
        { type: 'text', value: 'The struggle to identify personal biases reflects a universal human experience. We all resist acknowledging our mistakes because the brain protects its model. Change feels like death — the death of who we thought we were.' },
        { type: 'quote', value: 'The reason change is so difficult is that flaws aren\'t held consciously. They\'re woven into perception itself. You can\'t simply decide to see differently.', attribution: 'Will Storr' },
        { type: 'text', value: 'This is why character arcs in great fiction feel earned. The protagonist doesn\'t just "decide" to be different. They\'re dragged through experiences that crack their model open, forcing them to rebuild.' },
      ],
    },
    {
      id: 'exercise',
      type: 'exercise',
      title: 'The Flawed Self Profile',
      exercises: [
        {
          id: 'ch9-ex1',
          type: 'structured-template',
          title: 'Create a Flawed Self Profile',
          instructions: 'Create a character profile that maps their psychological architecture using the concepts from this chapter.',
          fields: [
            { id: 'theory', label: 'Theory of Control', placeholder: 'What is their learned strategy for managing the world? (e.g., "If I\'m always helpful, people will need me")' },
            { id: 'flaw', label: 'Core Flaw', placeholder: 'What belief do they hold that they cannot see is flawed?' },
            { id: 'naive-realism', label: 'Naive Realism', placeholder: 'What are they absolutely certain about that is actually wrong?' },
            { id: 'disruption', label: 'Disruption Event', placeholder: 'What type of event would shatter their theory of control?' },
          ],
          xpReward: 200,
        },
      ],
    },
    {
      id: 'quiz-summative',
      type: 'quiz',
      quizType: 'summative',
      title: 'Chapter 9 Assessment',
      passingScore: 70,
      questions: [
        {
          id: 'ch9-s1',
          type: 'multiple-choice',
          conceptKey: 'flawed-self',
          question: 'According to Storr, what makes characters psychologically authentic?',
          options: [
            { id: 'a', text: 'They have clearly stated strengths and weaknesses', correct: false },
            { id: 'b', text: 'They live in distorted realities shaped by biases invisible to themselves', correct: true },
            { id: 'c', text: 'They experience dramatic events that test their courage', correct: false },
            { id: 'd', text: 'They have detailed backstories explaining their behavior', correct: false },
          ],
          feedback: {
            correct: 'Yes! Authentic characters don\'t just "have" flaws — their flaws are woven into their perception of reality.',
            incorrect: 'The key insight is that flaws aren\'t items on a checklist. They\'re embedded in how characters perceive everything.',
          },
        },
        {
          id: 'ch9-s2',
          type: 'fill-blank',
          conceptKey: 'naive-realism',
          question: 'Complete this definition:',
          sentence: '_____ _____ is the belief that we perceive reality directly and accurately, and that anyone who disagrees must be biased or irrational.',
          blanks: [
            { id: 'b1', answer: 'Naive', options: ['Naive', 'Simple', 'False', 'Blind'] },
            { id: 'b2', answer: 'realism', options: ['realism', 'thinking', 'perception', 'belief'] },
          ],
          feedback: {
            correct: 'Correct! Naive realism is the foundation of most human (and character) conflict.',
            incorrect: 'The term is "naive realism" — the belief that our perception IS reality.',
          },
        },
        {
          id: 'ch9-s3',
          type: 'multiple-choice',
          conceptKey: 'theory-of-control',
          question: 'A character\'s "theory of control" is best described as:',
          options: [
            { id: 'a', text: 'Their conscious goals and desires', correct: false },
            { id: 'b', text: 'Their learned strategy for managing the world and responding to change', correct: true },
            { id: 'c', text: 'Their plan for defeating the antagonist', correct: false },
            { id: 'd', text: 'Their ability to control other characters', correct: false },
          ],
          feedback: {
            correct: 'Exactly! The theory of control is the character\'s operating system — running in the background, shaping every decision.',
            incorrect: 'The theory of control isn\'t about conscious goals. It\'s a deeper, often unconscious strategy for navigating the world.',
          },
        },
        {
          id: 'ch9-s4',
          type: 'ordering',
          conceptKey: 'character-change',
          question: 'Put these stages of character change in order:',
          items: [
            { id: 'a', text: 'Character operates with unconscious flawed beliefs' },
            { id: 'b', text: 'Story events crack the character\'s model open' },
            { id: 'c', text: 'Character resists, defending their theory of control' },
            { id: 'd', text: 'Character is forced to rebuild their understanding' },
          ],
          correctOrder: ['a', 'b', 'c', 'd'],
          feedback: {
            correct: 'Perfect! This is the arc of psychological change in character-driven stories.',
            incorrect: 'The sequence is: unconscious flaws → disruption → resistance → forced rebuilding.',
          },
        },
      ],
    },
    {
      id: 'summary',
      type: 'content',
      title: 'Chapter Summary',
      content: [
        { type: 'text', value: '## Key Takeaways from Chapter 9' },
        { type: 'list', items: [
          '**All characters live in distorted realities** — shaped by biases invisible to themselves',
          '**Naive realism** — the belief that we see reality directly — drives character conflict',
          '**Theory of control** — every character has a learned strategy for managing their world',
          '**Flaws are embedded in perception** — characters don\'t "have" flaws, they see through them',
          '**Change is painful** — it requires the death of who the character thought they were',
        ] },
        { type: 'callout', variant: 'next', value: '**Next up**: Chapter 10 — Personality and Plot. Discover how the Big Five personality traits shape character behavior and drive plot development.' },
      ],
    },
  ],
};
