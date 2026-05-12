export const chapter13 = {
  id: 13,
  sections: [
    {
      id: 'intro',
      type: 'content',
      title: 'Culture and Character',
      content: [
        { type: 'text', value: 'We\'ve explored how personality shapes character. Now we zoom out to examine how **culture** shapes both personality and the very structure of stories themselves.' },
        { type: 'callout', variant: 'key-concept', value: 'Culture isn\'t just surface detail (food, fashion, festivals). It\'s embedded in **cognitive frameworks** — shaping how characters perceive reality, what they value, and what counts as a satisfying story.' },
        { type: 'text', value: 'Understanding cultural frameworks helps writers create authentic characters from different backgrounds and recognize why story structures vary across traditions.' },
      ],
    },
    {
      id: 'deep-culture',
      type: 'content',
      title: 'Culture\'s Deep Influence',
      content: [
        { type: 'text', value: 'Culture goes far beyond art, food, and fashion. It\'s embedded in how we think:' },
        { type: 'list', items: [
          '**Moral frameworks** — what\'s right, wrong, shameful, honorable',
          '**Causal reasoning** — how we explain why things happen',
          '**Self-concept** — individual identity vs. role in group',
          '**Emotional expression** — which emotions are acceptable to display',
          '**Conflict resolution** — confrontation vs. harmony-seeking',
        ] },
        { type: 'text', value: 'From birth through early childhood, the brain forms neural connections rapidly. Children learn through play, and storytelling (with adult narration) reinforces moral lessons and cultural values. By adulthood, these patterns feel like "just how the world works."' },
      ],
    },
    {
      id: 'individualism-collectivism',
      type: 'content',
      title: 'Individualism vs. Collectivism',
      content: [
        { type: 'text', value: 'One of the most studied cultural dimensions is the spectrum from **individualist** to **collectivist** values:' },
        { type: 'tabs', tabs: [
          { label: 'Western Individualist', content: '**Value center**: Personal freedom, self-reliance, individual achievement\n\n**Hero type**: Singular hero with personal agency\n\n**Conflict source**: Individual vs. world/self\n\n**Resolution**: Clear, decisive — the hero wins or loses\n\n**Origins**: Ancient Greek tradition' },
          { label: 'Eastern Collectivist', content: '**Value center**: Group contribution, harmony, social role\n\n**Hero type**: Community-embedded protagonist\n\n**Conflict source**: Individual vs. group expectations\n\n**Resolution**: Often open-ended, contemplative\n\n**Origins**: Various Eastern traditions' },
        ] },
        { type: 'text', value: 'These aren\'t absolute categories — individuals vary within cultures. But they shape default assumptions about what makes a good story and a good character.' },
      ],
    },
    {
      id: 'quiz-1',
      type: 'quiz',
      quizType: 'formative',
      title: 'Cultural Frameworks',
      questions: [
        {
          id: 'ch13-q1',
          type: 'matching',
          question: 'Match each story element to its cultural framework:',
          pairs: [
            { id: 'a', left: 'Hero saves the day alone', right: 'Individualist' },
            { id: 'b', left: 'Open-ended, contemplative resolution', right: 'Collectivist' },
            { id: 'c', left: 'Personal achievement as highest value', right: 'Individualist' },
            { id: 'd', left: 'Protagonist navigates group dynamics', right: 'Collectivist' },
          ],
          feedback: {
            correct: 'Perfect! Each cultural framework produces different story patterns.',
            incorrect: 'Individualist = lone hero, clear resolution. Collectivist = group navigation, open endings.',
          },
          conceptKey: 'cultural-frameworks',
        },
      ],
    },
    {
      id: 'story-structures',
      type: 'content',
      title: 'Story Structure Differences',
      content: [
        { type: 'text', value: 'Cultural values produce fundamentally different story structures:' },
        { type: 'text', value: '**Western Three-Act Structure**' },
        { type: 'list', items: [
          'Clear beginning, middle, end',
          'Individual protagonist with agency',
          'Conflict escalates to decisive climax',
          'Resolution provides closure',
          'Hero conquers chaos through action',
        ] },
        { type: 'text', value: '**Eastern Narrative Approaches**' },
        { type: 'list', items: [
          'Often circular or episodic structure',
          'Protagonist embedded in social web',
          'Conflict may not resolve decisively',
          'Endings encourage contemplation',
          'Understanding and harmony over conquest',
        ] },
        { type: 'callout', variant: 'insight', value: 'Both traditions serve the same deeper purpose: teaching **theories of control** — how to navigate an unpredictable world. Western: control through action. Eastern: control through understanding and acceptance.' },
      ],
    },
    {
      id: 'quiz-2',
      type: 'quiz',
      quizType: 'formative',
      title: 'Story Structure',
      questions: [
        {
          id: 'ch13-q2',
          type: 'multiple-choice',
          question: 'Both Western and Eastern story traditions ultimately serve to:',
          options: [
            { id: 'a', text: 'Entertain audiences with dramatic conflict', correct: false },
            { id: 'b', text: 'Teach theories of control — how to navigate an unpredictable world', correct: true },
            { id: 'c', text: 'Preserve historical events for future generations', correct: false },
            { id: 'd', text: 'Demonstrate the superiority of one culture over another', correct: false },
          ],
          feedback: {
            correct: 'Yes! Despite different structures, all stories teach how to manage uncertainty. The methods differ (action vs. understanding), but the purpose is universal.',
            incorrect: 'While entertainment matters, the deeper function is teaching **theories of control** — strategies for navigating life\'s challenges.',
          },
          hint: 'What do characters learn through their story journeys?',
          conceptKey: 'universal-purpose',
        },
      ],
    },
    {
      id: 'exercise',
      type: 'exercise',
      title: 'Cultural Lens',
      exercises: [
        {
          id: 'ch13-ex1',
          type: 'structured-template',
          title: 'Same Dilemma, Different Cultures',
          instructions: 'Write the same character dilemma through two different cultural lenses.',
          fields: [
            { id: 'dilemma', label: 'The Dilemma', placeholder: 'Describe the core conflict (e.g., "Character must choose between career opportunity and family obligation")' },
            { id: 'western', label: 'Western Individualist Version (150 words)', placeholder: 'The character approaches this through personal agency, individual choice, and decisive action...' },
            { id: 'eastern', label: 'Eastern Collectivist Version (150 words)', placeholder: 'The character navigates group dynamics, considers social role, seeks harmony...' },
            { id: 'reflection', label: 'Reflection', placeholder: 'Which feels more satisfying to you? What does that reveal about your own cultural framework?' },
          ],
          xpReward: 200,
        },
      ],
    },
    {
      id: 'quiz-summative',
      type: 'quiz',
      quizType: 'summative',
      title: 'Chapter 13 Assessment',
      passingScore: 70,
      questions: [
        {
          id: 'ch13-s1',
          type: 'multiple-choice',
          conceptKey: 'deep-culture',
          question: 'Culture shapes character at the cognitive level by influencing:',
          options: [
            { id: 'a', text: 'Only surface details like food and clothing', correct: false },
            { id: 'b', text: 'Moral frameworks, causal reasoning, and self-concept', correct: true },
            { id: 'c', text: 'Only characters from non-Western backgrounds', correct: false },
            { id: 'd', text: 'Plot but not characterization', correct: false },
          ],
          feedback: {
            correct: 'Exactly! Culture shapes deep cognitive patterns, not just surface details.',
            incorrect: 'Culture goes far deeper than surface — it shapes how we think, reason, and understand ourselves.',
          },
        },
        {
          id: 'ch13-s2',
          type: 'fill-blank',
          conceptKey: 'cultural-frameworks',
          question: 'Complete this comparison:',
          sentence: 'Western stories typically feature _____ heroes with clear resolution; Eastern stories often feature _____ protagonists with contemplative endings.',
          blanks: [
            { id: 'b1', answer: 'individual', options: ['individual', 'powerful', 'male', 'traditional'] },
            { id: 'b2', answer: 'community-embedded', options: ['community-embedded', 'passive', 'spiritual', 'ancient'] },
          ],
          feedback: {
            correct: 'Correct! The individual vs. community-embedded distinction is central.',
            incorrect: 'Western = individual heroes; Eastern = community-embedded protagonists.',
          },
        },
        {
          id: 'ch13-s3',
          type: 'ordering',
          conceptKey: 'story-structure',
          question: 'Put these Western three-act structure elements in order:',
          items: [
            { id: 'a', text: 'Setup: Introduce character and world' },
            { id: 'b', text: 'Confrontation: Conflict escalates' },
            { id: 'c', text: 'Resolution: Decisive conclusion' },
            { id: 'd', text: 'Inciting incident: Disrupts status quo' },
          ],
          correctOrder: ['a', 'd', 'b', 'c'],
          feedback: {
            correct: 'Perfect! Setup → Inciting Incident → Confrontation → Resolution.',
            incorrect: 'The sequence is: Setup → Inciting Incident → Confrontation → Resolution.',
          },
        },
        {
          id: 'ch13-s4',
          type: 'multiple-choice',
          conceptKey: 'universal-purpose',
          question: 'Despite different structures, all storytelling traditions share:',
          options: [
            { id: 'a', text: 'The same character archetypes', correct: false },
            { id: 'b', text: 'The purpose of teaching theories of control', correct: true },
            { id: 'c', text: 'Three-act structure', correct: false },
            { id: 'd', text: 'Individual heroes', correct: false },
          ],
          feedback: {
            correct: 'Yes! All stories teach how to navigate uncertainty — through action (Western) or understanding (Eastern).',
            incorrect: 'The universal purpose is teaching **theories of control** — strategies for navigating life\'s challenges.',
          },
        },
      ],
    },
    {
      id: 'summary',
      type: 'content',
      title: 'Chapter Summary',
      content: [
        { type: 'text', value: '## Key Takeaways from Chapter 13' },
        { type: 'list', items: [
          '**Culture is cognitive** — it shapes moral frameworks, reasoning, and self-concept',
          '**Individualism vs. Collectivism** — fundamental dimension affecting story structure',
          '**Western: action and closure** — hero conquers through individual agency',
          '**Eastern: understanding and openness** — protagonist harmonizes through acceptance',
          '**Universal purpose** — all stories teach theories of control',
        ] },
        { type: 'callout', variant: 'next', value: '**Next up**: Chapter 14 — Anatomy of a Flawed Self. Deep dive into the ignition point and how stories shatter characters\' theories of control.' },
      ],
    },
  ],
};
