/**
 * Part 2 Boss Assessment: The Character Architect's Trial
 * Tests mastery of Chapters 9-17: The Flawed Self
 */

export const bossAssessment2 = {
  id: 'boss-2',
  title: "The Character Architect's Trial",
  description: 'Prove your mastery of character psychology, personality, and the flawed self. This assessment covers all 9 chapters of Part 2.',
  passingScore: 80,
  timeLimit: 25, // minutes
  totalQuestions: 20,
  sections: [
    {
      id: 'intro',
      type: 'content',
      title: 'Welcome to the Character Architect\'s Trial',
      content: [
        { type: 'text', value: 'You\'ve completed Part 2: **The Flawed Self**. Now prove your mastery by passing this comprehensive assessment.' },
        { type: 'callout', variant: 'warning', value: '**Passing Score: 80%** | **20 Questions** | **25 Minutes**\n\nThis assessment draws from all chapters in Part 2. You must demonstrate understanding of personality, POV, culture, and the psychology of character transformation.' },
      ],
    },
    {
      id: 'boss-quiz',
      type: 'quiz',
      quizType: 'boss',
      title: 'The Character Architect\'s Trial',
      passingScore: 80,
      questions: [
        // Chapter 9: The Flawed Self
        {
          id: 'boss2-q1',
          type: 'multiple-choice',
          conceptKey: 'naive-realism',
          question: 'The concept of "naïve realism" explains why:',
          options: [
            { id: 'a', text: 'Characters believe their subjective perception IS objective reality', correct: true },
            { id: 'b', text: 'Readers prefer simple, straightforward narratives', correct: false },
            { id: 'c', text: 'Writers should avoid complex character psychology', correct: false },
            { id: 'd', text: 'All characters must be naïve at the start of a story', correct: false },
          ],
          feedback: {
            correct: 'Exactly! Naïve realism is the belief that our perception is direct, unfiltered reality — not a construction.',
            incorrect: 'Naïve realism means characters (and people) believe their subjective perception IS objective reality.',
          },
        },
        {
          id: 'boss2-q2',
          type: 'fill-blank',
          conceptKey: 'theory-of-control',
          question: 'Complete this definition of a core character concept:',
          sentence: 'A theory of _____ is a character\'s learned strategy for managing the chaos of the world.',
          blanks: [
            { id: 'b1', answer: 'control', options: ['control', 'power', 'knowledge', 'survival'] },
          ],
          feedback: {
            correct: 'Yes! The theory of control is central to understanding character motivation and flaw.',
            incorrect: 'The term is "theory of control" — the character\'s strategy for managing chaos.',
          },
        },

        // Chapter 10: Personality and Plot
        {
          id: 'boss2-q3',
          type: 'matching',
          conceptKey: 'big-five',
          question: 'Match each Big Five trait to its primary characteristic:',
          pairs: [
            { id: 'a', left: 'Openness', right: 'Curiosity and creativity' },
            { id: 'b', left: 'Conscientiousness', right: 'Organization and reliability' },
            { id: 'c', left: 'Extraversion', right: 'Energy from social interaction' },
            { id: 'd', left: 'Neuroticism', right: 'Sensitivity to negative emotion' },
          ],
          feedback: {
            correct: 'Perfect! You understand the Big Five personality framework.',
            incorrect: 'Review the Big Five: O=curiosity, C=organization, E=social energy, A=cooperation, N=negative emotion.',
          },
        },
        {
          id: 'boss2-q4',
          type: 'multiple-choice',
          conceptKey: 'personality-stability',
          question: 'The Big Five model suggests personality is:',
          options: [
            { id: 'a', text: 'Completely fixed at birth and never changes', correct: false },
            { id: 'b', text: 'Relatively stable but can shift gradually over time', correct: true },
            { id: 'c', text: 'Completely fluid and changes moment to moment', correct: false },
            { id: 'd', text: 'Determined entirely by cultural background', correct: false },
          ],
          feedback: {
            correct: 'Correct! Personality is relatively stable but not rigid — gradual shifts are possible.',
            incorrect: 'Personality is **relatively stable** but can shift gradually, especially through major life experiences.',
          },
        },

        // Chapter 11: Personality and Setting
        {
          id: 'boss2-q5',
          type: 'multiple-choice',
          conceptKey: 'environmental-storytelling',
          question: 'The distinction between identity claims and behavioral residue is:',
          options: [
            { id: 'a', text: 'Claims are what characters say; residue is what they do', correct: false },
            { id: 'b', text: 'Claims are intentional displays; residue is unintentional evidence', correct: true },
            { id: 'c', text: 'Claims are permanent; residue is temporary', correct: false },
            { id: 'd', text: 'Claims are visual; residue is verbal', correct: false },
          ],
          feedback: {
            correct: 'Exactly! Identity claims are deliberate; behavioral residue is unconscious evidence of actual behavior.',
            incorrect: 'Identity claims = intentional displays. Behavioral residue = unintentional evidence.',
          },
        },
        {
          id: 'boss2-q6',
          type: 'ordering',
          conceptKey: 'show-dont-tell',
          question: 'Rank these characterization methods from LEAST to MOST effective:',
          items: [
            { id: 'a', text: 'Author directly states character trait' },
            { id: 'b', text: 'Another character comments on the trait' },
            { id: 'c', text: 'Environment reveals trait through objects' },
            { id: 'd', text: 'Environment reveals contradictory evidence' },
          ],
          correctOrder: ['a', 'b', 'c', 'd'],
          feedback: {
            correct: 'Perfect! Direct telling < dialogue < environmental show < environmental contradiction.',
            incorrect: 'From least to most effective: Author tells → Character dialogue → Environment shows → Contradiction.',
          },
        },

        // Chapter 12: Personality and POV
        {
          id: 'boss2-q7',
          type: 'multiple-choice',
          conceptKey: 'pov-characterization',
          question: 'Character-centric description means:',
          options: [
            { id: 'a', text: 'Describing only the main character in detail', correct: false },
            { id: 'b', text: 'All descriptions are filtered through the POV character\'s psychology', correct: true },
            { id: 'c', text: 'Characters describe themselves in first person', correct: false },
            { id: 'd', text: 'The narrator remains objective and neutral', correct: false },
          ],
          feedback: {
            correct: 'Yes! Every description passes through the character\'s perceptual filter.',
            incorrect: 'Character-centric description means ALL descriptions are filtered through the POV character\'s psychology.',
          },
        },
        {
          id: 'boss2-q8',
          type: 'fill-blank',
          conceptKey: 'pov-flaw-reveal',
          question: 'Complete this POV principle:',
          sentence: 'The most powerful technique: flaws visible to the _____ but invisible to the _____.',
          blanks: [
            { id: 'b1', answer: 'reader', options: ['reader', 'audience', 'writer', 'character'] },
            { id: 'b2', answer: 'narrator', options: ['narrator', 'character', 'protagonist', 'hero'] },
          ],
          feedback: {
            correct: 'Perfect! The reader sees what the narrator can\'t see about themselves.',
            incorrect: 'The principle is: flaws visible to the **reader** but invisible to the **narrator**.',
          },
        },

        // Chapter 13: Culture and Character
        {
          id: 'boss2-q9',
          type: 'matching',
          conceptKey: 'cultural-frameworks',
          question: 'Match each cultural framework to its story characteristics:',
          pairs: [
            { id: 'a', left: 'Western Individualist', right: 'Singular hero, decisive resolution' },
            { id: 'b', left: 'Eastern Collectivist', right: 'Community protagonist, open endings' },
            { id: 'c', left: 'Universal Purpose', right: 'Teaching theories of control' },
            { id: 'd', left: 'Cultural Cognition', right: 'Shapes moral frameworks and reasoning' },
          ],
          feedback: {
            correct: 'Excellent! You understand how culture shapes story structure.',
            incorrect: 'Western = individual hero; Eastern = community; Both teach control; Culture shapes cognition.',
          },
        },
        {
          id: 'boss2-q10',
          type: 'multiple-choice',
          conceptKey: 'universal-purpose',
          question: 'Despite different structures, all story traditions share:',
          options: [
            { id: 'a', text: 'Three-act structure', correct: false },
            { id: 'b', text: 'The purpose of teaching theories of control', correct: true },
            { id: 'c', text: 'Individual hero protagonists', correct: false },
            { id: 'd', text: 'Happy endings', correct: false },
          ],
          feedback: {
            correct: 'Yes! All stories teach how to navigate uncertainty — the methods differ but the purpose is universal.',
            incorrect: 'The universal purpose is teaching **theories of control** — how to navigate life\'s challenges.',
          },
        },

        // Chapter 14: Anatomy of a Flawed Self
        {
          id: 'boss2-q11',
          type: 'multiple-choice',
          conceptKey: 'model-defending',
          question: 'Model-defending mode means characters:',
          options: [
            { id: 'a', text: 'Are open to new perspectives and evidence', correct: false },
            { id: 'b', text: 'Protect existing beliefs as if they were the self', correct: true },
            { id: 'c', text: 'Build increasingly complex worldviews', correct: false },
            { id: 'd', text: 'Rationally evaluate all information', correct: false },
          ],
          feedback: {
            correct: 'Exactly! Model defending means protecting beliefs as if they were the self. Challenge = threat.',
            incorrect: 'Model defending = protecting existing beliefs. The brain treats challenges as attacks on identity.',
          },
        },
        {
          id: 'boss2-q12',
          type: 'fill-blank',
          conceptKey: 'ignition-point',
          question: 'Complete this story structure term:',
          sentence: 'The _____ point is when something disrupts the protagonist\'s theory of control.',
          blanks: [
            { id: 'b1', answer: 'ignition', options: ['ignition', 'turning', 'breaking', 'crisis'] },
          ],
          feedback: {
            correct: 'Yes! The ignition point sparks the entire story by disrupting the theory of control.',
            incorrect: 'The term is "ignition point" — the moment the theory of control is disrupted.',
          },
        },
        {
          id: 'boss2-q13',
          type: 'multiple-choice',
          conceptKey: 'echo-chambers',
          question: 'Characters create echo chambers because:',
          options: [
            { id: 'a', text: 'They want to avoid conflict', correct: false },
            { id: 'b', text: 'The brain naturally seeks validation for existing models', correct: true },
            { id: 'c', text: 'Society forces them into groups', correct: false },
            { id: 'd', text: 'They are morally weak', correct: false },
          ],
          feedback: {
            correct: 'Correct! Echo chambers are natural products of model-defending. The brain seeks confirmation.',
            incorrect: 'Echo chambers form because the brain naturally seeks **validation** for existing beliefs.',
          },
        },

        // Chapter 15: Hero-Maker
        {
          id: 'boss2-q14',
          type: 'multiple-choice',
          conceptKey: 'hero-maker-brain',
          question: 'The "hero-maker brain" operates by:',
          options: [
            { id: 'a', text: 'Consciously crafting impressive stories', correct: false },
            { id: 'b', text: 'Unconsciously reconstructing memories to maintain moral self-image', correct: true },
            { id: 'c', text: 'Accurately recording our best moments', correct: false },
            { id: 'd', text: 'Comparing ourselves objectively to others', correct: false },
          ],
          feedback: {
            correct: 'Exactly! The hero-maker is unconscious — it shapes memory without our awareness.',
            incorrect: 'The hero-maker operates **unconsciously**, reconstructing memory to serve self-image.',
          },
        },
        {
          id: 'boss2-q15',
          type: 'fill-blank',
          conceptKey: 'competing-hero-narratives',
          question: 'Complete this insight about compelling villains:',
          sentence: 'Every _____ is a hero in their own _____.',
          blanks: [
            { id: 'b1', answer: 'villain', options: ['villain', 'antagonist', 'character', 'person'] },
            { id: 'b2', answer: 'story', options: ['story', 'mind', 'narrative', 'world'] },
          ],
          feedback: {
            correct: 'Perfect! Understanding the villain\'s hero narrative makes them three-dimensional.',
            incorrect: 'The principle is: "Every villain is a hero in their own story."',
          },
        },

        // Chapter 16: David and Goliath
        {
          id: 'boss2-q16',
          type: 'multiple-choice',
          conceptKey: 'belief-change-rarity',
          question: 'Identity-level belief change is rare because:',
          options: [
            { id: 'a', text: 'People are lazy and don\'t want to learn', correct: false },
            { id: 'b', text: 'Most beliefs are actually correct', correct: false },
            { id: 'c', text: 'The model-defending brain treats challenges as threats', correct: true },
            { id: 'd', text: 'Society punishes those who change their minds', correct: false },
          ],
          feedback: {
            correct: 'Yes! Model defending makes identity-level change feel like a threat to the self.',
            incorrect: 'Change is rare because the **model-defending brain** treats belief challenges as identity threats.',
          },
        },
        {
          id: 'boss2-q17',
          type: 'multiple-choice',
          conceptKey: 'mutual-david-narratives',
          question: 'The David vs. Goliath pattern creates intractable conflicts because:',
          options: [
            { id: 'a', text: 'One side is always objectively right', correct: false },
            { id: 'b', text: 'Both sides see themselves as the righteous underdog', correct: true },
            { id: 'c', text: 'The stronger side always wins', correct: false },
            { id: 'd', text: 'History is written by the victors', correct: false },
          ],
          feedback: {
            correct: 'Exactly! Both sides construct David narratives, making compromise feel like moral surrender.',
            incorrect: 'Conflicts become intractable when **both sides** see themselves as the righteous David.',
          },
        },

        // Chapter 17: Character Creates Meaning
        {
          id: 'boss2-q18',
          type: 'fill-blank',
          conceptKey: 'plot-character-relationship',
          question: 'Complete this metaphor about story structure:',
          sentence: 'Plot is the _____; character transformation is the _____.',
          blanks: [
            { id: 'b1', answer: 'vehicle', options: ['vehicle', 'structure', 'setting', 'framework'] },
            { id: 'b2', answer: 'cargo', options: ['cargo', 'meaning', 'purpose', 'destination'] },
          ],
          feedback: {
            correct: 'Perfect! Plot carries transformation; transformation is what matters.',
            incorrect: 'The metaphor is: plot is the vehicle, character transformation is the cargo.',
          },
        },
        {
          id: 'boss2-q19',
          type: 'multiple-choice',
          conceptKey: 'core-question',
          question: 'The core question driving every narrative is:',
          options: [
            { id: 'a', text: '"Will the hero defeat the villain?"', correct: false },
            { id: 'b', text: '"What happens next?"', correct: false },
            { id: 'c', text: '"Who is this person becoming?"', correct: true },
            { id: 'd', text: '"How will the story end?"', correct: false },
          ],
          feedback: {
            correct: 'Yes! All plot events serve this deeper question about identity transformation.',
            incorrect: 'The core question isn\'t about plot events — it\'s about identity: **"Who is this person becoming?"**',
          },
        },
        {
          id: 'boss2-q20',
          type: 'matching',
          conceptKey: 'ending-types',
          question: 'Match each ending type to its character outcome:',
          pairs: [
            { id: 'a', left: 'Comedy/Triumph', right: 'Character became who they needed to become' },
            { id: 'b', left: 'Tragedy', right: 'Character failed to transform' },
            { id: 'c', left: 'Ambiguous', right: 'Transformation remains uncertain' },
            { id: 'd', left: 'Anti-hero arc', right: 'Character transformed in wrong direction' },
          ],
          feedback: {
            correct: 'Perfect! You understand how endings reflect character transformation.',
            incorrect: 'Endings reflect transformation: Triumph=change, Tragedy=failure, Ambiguous=uncertain, Anti-hero=wrong direction.',
          },
        },
      ],
    },
    {
      id: 'completion',
      type: 'content',
      title: 'Assessment Complete!',
      content: [
        { type: 'text', value: 'You\'ve completed the Character Architect\'s Trial!' },
        { type: 'callout', variant: 'success', value: 'Your results will be displayed now. If you passed with 80% or higher, you\'ll earn the **Character Architect** badge and unlock Part 3: The Dramatic Question.' },
      ],
    },
  ],
};
