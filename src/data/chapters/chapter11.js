export const chapter11 = {
  id: 11,
  sections: [
    {
      id: 'intro',
      type: 'content',
      title: 'Personality and Setting',
      content: [
        { type: 'text', value: 'We\'ve seen how personality shapes plot. Now we explore how personality manifests in **environment**. A character\'s space — their bedroom, office, car — reveals who they are without a word of dialogue.' },
        { type: 'callout', variant: 'key-concept', value: 'Daniel Nettle describes human personalities as **fractals** — the same patterns repeat at every scale. A character\'s personality appears in their major life decisions AND in the objects on their desk.' },
        { type: 'text', value: 'Environmental storytelling is one of the most powerful "show don\'t tell" techniques available. A well-described space can reveal more than pages of exposition.' },
      ],
    },
    {
      id: 'identity-claims',
      type: 'content',
      title: 'Identity Claims',
      content: [
        { type: 'text', value: 'People create **identity claims** — intentional displays that showcase who they want to be seen as. These are deliberate signals about identity:' },
        { type: 'list', items: [
          'Diplomas and certificates on the wall',
          'Books displayed prominently on shelves',
          'Photos of adventures or important people',
          'Art that reflects values or taste',
          'Objects from meaningful experiences',
        ] },
        { type: 'text', value: 'Identity claims tell us how the character wants to be perceived. But here\'s the key: **they may not reflect who the character actually is**. A shelf of unread philosophy books is an identity claim that reveals more about aspiration than reality.' },
        { type: 'callout', variant: 'insight', value: 'The gap between identity claims and actual behavior is a rich source of character depth. What does a character display vs. what do they actually do?' },
      ],
    },
    {
      id: 'behavioral-residue',
      type: 'content',
      title: 'Behavioral Residue',
      content: [
        { type: 'text', value: 'While identity claims are intentional, **behavioral residue** is not. It\'s the unintentional evidence of how someone actually lives:' },
        { type: 'list', items: [
          'Worn-out spots on furniture',
          'Stacks of unopened mail',
          'A messy desk vs. a pristine one',
          'Dog-eared pages in books',
          'Fingerprints on specific objects',
          'Empty wine bottles in recycling',
        ] },
        { type: 'text', value: 'Behavioral residue reveals the true self — the self the character can\'t control. It often contradicts identity claims, and this contradiction reveals character depth.' },
        { type: 'example', title: 'Identity Claim vs. Behavioral Residue', items: [
          '**Claim**: Framed marathon finisher certificate → **Residue**: Dusty running shoes in closet',
          '**Claim**: Healthy cookbook collection → **Residue**: Fast food wrappers in trash',
          '**Claim**: "Live Laugh Love" sign → **Residue**: Prescription anxiety medication on nightstand',
        ] },
      ],
    },
    {
      id: 'quiz-1',
      type: 'quiz',
      quizType: 'formative',
      title: 'Claims vs. Residue',
      questions: [
        {
          id: 'ch11-q1',
          type: 'matching',
          question: 'Classify each environmental detail as Identity Claim or Behavioral Residue:',
          pairs: [
            { id: 'a', left: 'Framed degree on wall', right: 'Identity Claim' },
            { id: 'b', left: 'Coffee rings on desk', right: 'Behavioral Residue' },
            { id: 'c', left: 'Carefully arranged bookshelf', right: 'Identity Claim' },
            { id: 'd', left: 'Worn path in carpet', right: 'Behavioral Residue' },
          ],
          feedback: {
            correct: 'Perfect! Claims are intentional displays; residue is unintentional evidence.',
            incorrect: 'Identity Claims are deliberate displays. Behavioral Residue is unintentional evidence of actual behavior.',
          },
          conceptKey: 'environmental-storytelling',
        },
      ],
    },
    {
      id: 'case-study',
      type: 'content',
      title: 'Case Study: Notes on a Scandal',
      content: [
        { type: 'text', value: 'Zoë Heller\'s *Notes on a Scandal* demonstrates environmental characterization masterfully through the contrasting homes of Barbara Covett and Sheba Hart.' },
        { type: 'tabs', tabs: [
          { label: 'Barbara\'s Space', content: '**Barbara Covett\'s** environment is scrupulously clean, rigidly organized, and devoid of warmth. Every surface is controlled. This reflects her high conscientiousness, low openness, and the loneliness she won\'t acknowledge. The space is an identity claim of order masking behavioral residue of isolation.' },
          { label: 'Sheba\'s Space', content: '**Sheba Hart\'s** home is chaotically beautiful — art everywhere, mismatched furniture, evidence of family life in creative disarray. It conveys bourgeois confidence and artistic sensibility. The mess is the identity claim here: "I\'m too creative to be organized."' },
        ] },
        { type: 'text', value: 'The contrast between homes reveals the contrast between characters instantly. Barbara\'s envy of Sheba\'s disorder suggests a longing for connection and spontaneity she can\'t allow herself.' },
        { type: 'quote', value: 'The environment speaks before the character opens their mouth. By the time dialogue begins, we already know who we\'re dealing with.', attribution: 'Course analysis' },
      ],
    },
    {
      id: 'quiz-2',
      type: 'quiz',
      quizType: 'formative',
      title: 'Environmental Reading',
      questions: [
        {
          id: 'ch11-q2',
          type: 'multiple-choice',
          question: 'A character\'s apartment is spotlessly clean except for a hidden drawer crammed with unsorted papers and junk. This suggests:',
          options: [
            { id: 'a', text: 'They simply haven\'t had time to organize', correct: false },
            { id: 'b', text: 'A gap between their projected self (controlled) and actual self (struggling)', correct: true },
            { id: 'c', text: 'They are naturally very organized', correct: false },
            { id: 'd', text: 'The drawer belongs to someone else', correct: false },
          ],
          feedback: {
            correct: 'Yes! The spotless apartment is the identity claim. The hidden drawer is behavioral residue that contradicts it. This gap reveals character depth.',
            incorrect: 'When identity claims and behavioral residue contradict each other, we see the gap between the projected self and the true self.',
          },
          hint: 'What does the hidden chaos tell us that the surface order doesn\'t?',
          conceptKey: 'environmental-contradiction',
        },
      ],
    },
    {
      id: 'exercise',
      type: 'exercise',
      title: 'Room Reading',
      exercises: [
        {
          id: 'ch11-ex1',
          type: 'structured-template',
          title: 'Environmental Character Reveal',
          instructions: 'Describe a character\'s bedroom in 200 words that reveals their personality without stating it directly.',
          fields: [
            { id: 'claim1', label: 'Identity Claim #1', placeholder: 'An intentional display that shows how they want to be seen' },
            { id: 'claim2', label: 'Identity Claim #2', placeholder: 'Another deliberate signal about their identity' },
            { id: 'residue1', label: 'Behavioral Residue #1', placeholder: 'Unintentional evidence of how they actually live' },
            { id: 'residue2', label: 'Behavioral Residue #2', placeholder: 'Another uncontrolled reveal' },
            { id: 'contradiction', label: 'The Contradiction', placeholder: 'How does the residue contradict or complicate the claims?' },
            { id: 'description', label: 'Full Description (200 words)', placeholder: 'Write the room description weaving all elements together...' },
          ],
          xpReward: 150,
        },
      ],
    },
    {
      id: 'quiz-summative',
      type: 'quiz',
      quizType: 'summative',
      title: 'Chapter 11 Assessment',
      passingScore: 70,
      questions: [
        {
          id: 'ch11-s1',
          type: 'multiple-choice',
          conceptKey: 'fractal-personality',
          question: 'Daniel Nettle\'s "fractal" metaphor for personality means:',
          options: [
            { id: 'a', text: 'Personality is mathematically predictable', correct: false },
            { id: 'b', text: 'The same behavioral patterns repeat at every scale, from life decisions to desk objects', correct: true },
            { id: 'c', text: 'Personality can be broken into smaller and smaller pieces', correct: false },
            { id: 'd', text: 'Characters should have complex, multi-layered personalities', correct: false },
          ],
          feedback: {
            correct: 'Exactly! A character\'s personality appears in major life choices AND minor environmental details. The pattern repeats at every scale.',
            incorrect: 'The fractal metaphor means personality patterns repeat at all scales — from life decisions down to how someone arranges their desk.',
          },
        },
        {
          id: 'ch11-s2',
          type: 'fill-blank',
          conceptKey: 'environmental-storytelling',
          question: 'Complete this distinction:',
          sentence: 'Identity _____ are intentional displays; behavioral _____ is unintentional evidence.',
          blanks: [
            { id: 'b1', answer: 'claims', options: ['claims', 'markers', 'signs', 'signals'] },
            { id: 'b2', answer: 'residue', options: ['residue', 'evidence', 'traces', 'patterns'] },
          ],
          feedback: {
            correct: 'Correct! Identity claims vs. behavioral residue is the key distinction.',
            incorrect: 'The terms are "identity claims" (intentional) and "behavioral residue" (unintentional).',
          },
        },
        {
          id: 'ch11-s3',
          type: 'multiple-choice',
          conceptKey: 'environmental-contradiction',
          question: 'The most revealing environmental details are often:',
          options: [
            { id: 'a', text: 'The most expensive or prominent objects', correct: false },
            { id: 'b', text: 'Contradictions between identity claims and behavioral residue', correct: true },
            { id: 'c', text: 'Items that match the character\'s stated profession', correct: false },
            { id: 'd', text: 'Objects described in the most detail', correct: false },
          ],
          feedback: {
            correct: 'Yes! The gap between what characters display and how they actually live reveals the most about who they truly are.',
            incorrect: 'Character depth comes from contradictions — the gaps between projected and actual self.',
          },
        },
        {
          id: 'ch11-s4',
          type: 'ordering',
          conceptKey: 'show-dont-tell',
          question: 'Order these methods from LEAST to MOST effective for revealing character:',
          items: [
            { id: 'a', text: 'Author tells us "She was a perfectionist"' },
            { id: 'b', text: 'Another character says "She\'s such a perfectionist"' },
            { id: 'c', text: 'Her apartment is spotless with color-coded closets' },
            { id: 'd', text: 'Spotless apartment with hidden drawer of chaos' },
          ],
          correctOrder: ['a', 'b', 'c', 'd'],
          feedback: {
            correct: 'Perfect! Direct telling < character dialogue < environmental show < environmental contradiction.',
            incorrect: 'Effectiveness increases: author telling → character dialogue → environmental show → environmental contradiction.',
          },
        },
      ],
    },
    {
      id: 'summary',
      type: 'content',
      title: 'Chapter Summary',
      content: [
        { type: 'text', value: '## Key Takeaways from Chapter 11' },
        { type: 'list', items: [
          '**Personality is fractal** — patterns repeat from life decisions to desk objects',
          '**Identity claims** — intentional displays showing how characters want to be seen',
          '**Behavioral residue** — unintentional evidence of how they actually live',
          '**Contradictions reveal depth** — the gap between claims and residue is character gold',
          '**Environment speaks first** — readers know the character before dialogue begins',
        ] },
        { type: 'callout', variant: 'next', value: '**Next up**: Chapter 12 — Personality and Point of View. Learn how perspective filters everything, making POV itself a characterization tool.' },
      ],
    },
  ],
};
