export const chapter10 = {
  id: 10,
  sections: [
    {
      id: 'intro',
      type: 'content',
      title: 'Personality and Plot',
      content: [
        { type: 'text', value: 'If characters are defined by their flawed theories of control, how do we build those theories systematically? In this chapter, Storr introduces a powerful framework: the **Big Five personality traits**.' },
        { type: 'callout', variant: 'key-concept', value: 'The Big Five (OCEAN) is the most validated personality model in psychology. It provides a scientific foundation for creating characters whose behavior is consistent, predictable, and psychologically authentic.' },
        { type: 'text', value: 'Personality is shaped by genetic factors and early experiences, and it remains remarkably stable throughout life. For storytellers, this means personality can **predict** how a character will react to any situation.' },
      ],
    },
    {
      id: 'big-five',
      type: 'content',
      title: 'The Big Five Personality Traits (OCEAN)',
      content: [
        { type: 'text', value: 'The Big Five model measures personality across five dimensions. Each trait exists on a spectrum, and the unique combination creates individual character.' },
        { type: 'text', value: '**O — Openness to Experience**' },
        { type: 'list', items: [
          'High: Curiosity, creativity, love of novelty, abstract thinking',
          'Low: Traditionalism, preference for routine, concrete thinking',
        ] },
        { type: 'text', value: '**C — Conscientiousness**' },
        { type: 'list', items: [
          'High: Discipline, organization, reliability, goal-orientation',
          'Low: Spontaneity, flexibility, sometimes irresponsibility',
        ] },
        { type: 'text', value: '**E — Extraversion**' },
        { type: 'list', items: [
          'High: Sociability, assertiveness, energy from social interaction',
          'Low: Introversion, reserve, energy from solitude',
        ] },
        { type: 'text', value: '**A — Agreeableness**' },
        { type: 'list', items: [
          'High: Trust, compassion, cooperation, conflict-avoidance',
          'Low: Competitiveness, skepticism, sometimes hostility',
        ] },
        { type: 'text', value: '**N — Neuroticism**' },
        { type: 'list', items: [
          'High: Anxiety, emotional volatility, sensitivity to negative emotion',
          'Low: Emotional stability, resilience, calm under pressure',
        ] },
      ],
    },
    {
      id: 'literary-examples',
      type: 'content',
      title: 'Literary Character Examples',
      content: [
        { type: 'text', value: 'The Big Five helps us understand characters behave the way they do:' },
        { type: 'tabs', tabs: [
          { label: 'High Neuroticism', content: '**Miss Havisham** (*Great Expectations*) — Her extreme emotional volatility and inability to move past trauma drive the entire plot. Her neuroticism is the engine of her character.' },
          { label: 'Low Extraversion', content: '**Boo Radley** (*To Kill a Mockingbird*) — His introversion shapes his mysterious presence in the story. He exists at the margins, watching rather than participating.' },
          { label: 'High Openness', content: '**Lisa Simpson** (*The Simpsons*) — Her intellectual curiosity, love of art and ideas, and openness to different perspectives set her apart from her family.' },
          { label: 'Low Agreeableness', content: '**Heathcliff** (*Wuthering Heights*) — His competitiveness, vengefulness, and unwillingness to cooperate drive the tragic plot.' },
          { label: 'High Conscientiousness', content: '**Antigone** — Her rigid adherence to duty and moral principle, regardless of consequences, defines her tragic arc.' },
        ] },
        { type: 'text', value: 'Notice how each trait doesn\'t just describe behavior — it **predicts** how the character will respond to challenges, driving the plot forward.' },
      ],
    },
    {
      id: 'quiz-1',
      type: 'quiz',
      quizType: 'formative',
      title: 'Big Five Check',
      questions: [
        {
          id: 'ch10-q1',
          type: 'matching',
          question: 'Match each Big Five trait to its description:',
          pairs: [
            { id: 'a', left: 'Openness', right: 'Curiosity and love of novelty' },
            { id: 'b', left: 'Conscientiousness', right: 'Discipline and organization' },
            { id: 'c', left: 'Extraversion', right: 'Energy from social interaction' },
            { id: 'd', left: 'Neuroticism', right: 'Sensitivity to negative emotions' },
          ],
          feedback: {
            correct: 'Perfect! You\'ve got the Big Five down.',
            incorrect: 'Review: O=curiosity, C=discipline, E=sociability, A=cooperation, N=emotional sensitivity.',
          },
          conceptKey: 'big-five',
        },
      ],
    },
    {
      id: 'personality-plot',
      type: 'content',
      title: 'How Personality Drives Plot',
      content: [
        { type: 'text', value: 'Personality profoundly impacts how characters react to and interact with the world. A highly neurotic character perpetuates cycles of negativity; an agreeable character fosters positive interactions but may be exploited.' },
        { type: 'text', value: 'These traits shape responses to challenges, **dictating plot development**. The same event — losing a job, for example — produces entirely different stories depending on the character\'s Big Five profile:' },
        { type: 'example', title: 'Same Event, Different Personalities', items: [
          '**High Neuroticism**: Catastrophizes, spirals into depression, relationship strain',
          '**High Conscientiousness**: Immediately creates a job-search plan, networks systematically',
          '**High Openness**: Sees it as an opportunity to reinvent, explores new careers',
          '**Low Agreeableness**: Blames others, considers revenge on former employer',
          '**High Extraversion**: Reaches out to everyone they know, finds support quickly',
        ] },
        { type: 'callout', variant: 'insight', value: 'Plot is character revealed under pressure. The Big Five tells you how your character will respond to any pressure you apply.' },
      ],
    },
    {
      id: 'case-study',
      type: 'content',
      title: 'Case Study: Stevens (The Remains of the Day)',
      content: [
        { type: 'text', value: 'Kazuo Ishiguro\'s butler Stevens demonstrates how the Big Five shapes an entire narrative:' },
        { type: 'list', items: [
          '**High Conscientiousness**: Devoted to duty above all else',
          '**Low Openness**: Resistant to change, traditional, uncomfortable with novelty',
          '**Low Extraversion**: Reserved, uncomfortable with emotional expression',
          '**Low Neuroticism**: Maintains composure under pressure (sometimes pathologically)',
          '**Moderate Agreeableness**: Cooperative with superiors, but emotionally unavailable',
        ] },
        { type: 'text', value: 'Stevens\' personality creates the conditions for both his dignity and his tragedy. His high conscientiousness made him an excellent butler but prevented him from pursuing love. His low openness meant he couldn\'t adapt when the world changed around him.' },
        { type: 'quote', value: 'Stevens\' personality is his destiny. The tragedy isn\'t that bad things happen to him — it\'s that he was never capable of choosing differently.', attribution: 'Course analysis' },
      ],
    },
    {
      id: 'quiz-2',
      type: 'quiz',
      quizType: 'formative',
      title: 'Personality and Prediction',
      questions: [
        {
          id: 'ch10-q2',
          type: 'multiple-choice',
          question: 'A character high in Openness and low in Conscientiousness would most likely:',
          options: [
            { id: 'a', text: 'Create detailed plans and follow them precisely', correct: false },
            { id: 'b', text: 'Resist any change to their routine', correct: false },
            { id: 'c', text: 'Start many creative projects but struggle to finish them', correct: true },
            { id: 'd', text: 'Avoid social situations and prefer solitude', correct: false },
          ],
          feedback: {
            correct: 'Exactly! High Openness creates many ideas; low Conscientiousness means poor follow-through. This combination predicts creative but scattered behavior.',
            incorrect: 'High Openness = loves novelty and ideas. Low Conscientiousness = poor discipline. Together: starts things, doesn\'t finish.',
          },
          hint: 'Think about what each trait predicts, then combine them.',
          conceptKey: 'personality-prediction',
        },
        {
          id: 'ch10-q3',
          type: 'fill-blank',
          question: 'Complete this insight about character and plot:',
          sentence: 'Plot is _____ revealed under _____.',
          blanks: [
            { id: 'b1', answer: 'character', options: ['character', 'story', 'conflict', 'theme'] },
            { id: 'b2', answer: 'pressure', options: ['pressure', 'time', 'stress', 'scrutiny'] },
          ],
          feedback: {
            correct: 'Yes! Plot IS character revealed under pressure. The Big Five tells you how that revelation will unfold.',
            incorrect: 'The phrase is: "Plot is character revealed under pressure."',
          },
          conceptKey: 'personality-plot',
        },
      ],
    },
    {
      id: 'exercise',
      type: 'exercise',
      title: 'Big Five Character Sheet',
      exercises: [
        {
          id: 'ch10-ex1',
          type: 'structured-template',
          title: 'Create a Big Five Profile',
          instructions: 'Create a character using the Big Five framework. Score each trait and show how it manifests in behavior.',
          fields: [
            { id: 'openness', label: 'Openness (1-10) + Justification', placeholder: 'e.g., "8 — Always seeking new experiences, reads widely, uncomfortable with routine"' },
            { id: 'conscientiousness', label: 'Conscientiousness (1-10) + Justification', placeholder: 'e.g., "3 — Messy workspace, misses deadlines, acts on impulse"' },
            { id: 'extraversion', label: 'Extraversion (1-10) + Justification', placeholder: 'e.g., "6 — Enjoys parties but needs recovery time, thinks before speaking"' },
            { id: 'agreeableness', label: 'Agreeableness (1-10) + Justification', placeholder: 'e.g., "4 — Skeptical of others\' motives, competitive, speaks bluntly"' },
            { id: 'neuroticism', label: 'Neuroticism (1-10) + Justification', placeholder: 'e.g., "7 — Worries constantly, sensitive to criticism, mood swings"' },
            { id: 'prediction', label: 'Behavioral Prediction', placeholder: 'Based on this profile, how would this character react to losing their job?' },
          ],
          xpReward: 250,
        },
      ],
    },
    {
      id: 'quiz-summative',
      type: 'quiz',
      quizType: 'summative',
      title: 'Chapter 10 Assessment',
      passingScore: 70,
      questions: [
        {
          id: 'ch10-s1',
          type: 'multiple-choice',
          conceptKey: 'big-five',
          question: 'The Big Five personality model is valuable for storytellers because:',
          options: [
            { id: 'a', text: 'It provides a checklist of character traits to include', correct: false },
            { id: 'b', text: 'It allows prediction of how a character will respond to any situation', correct: true },
            { id: 'c', text: 'It guarantees readers will like the character', correct: false },
            { id: 'd', text: 'It was developed specifically for fiction writers', correct: false },
          ],
          feedback: {
            correct: 'Exactly! The Big Five\'s power is predictive. Once you know the profile, you know how the character behaves.',
            incorrect: 'The Big Five\'s value isn\'t as a checklist but as a **predictive tool**. It tells you how your character will react to pressure.',
          },
        },
        {
          id: 'ch10-s2',
          type: 'ordering',
          conceptKey: 'big-five',
          question: 'Put the Big Five traits in order to spell OCEAN:',
          items: [
            { id: 'a', text: 'Openness' },
            { id: 'b', text: 'Conscientiousness' },
            { id: 'c', text: 'Extraversion' },
            { id: 'd', text: 'Agreeableness' },
            { id: 'e', text: 'Neuroticism' },
          ],
          correctOrder: ['a', 'b', 'c', 'd', 'e'],
          feedback: {
            correct: 'Perfect! O-C-E-A-N is the mnemonic for the Big Five.',
            incorrect: 'OCEAN = Openness, Conscientiousness, Extraversion, Agreeableness, Neuroticism.',
          },
        },
        {
          id: 'ch10-s3',
          type: 'multiple-choice',
          conceptKey: 'personality-stability',
          question: 'According to psychology research, personality:',
          options: [
            { id: 'a', text: 'Changes dramatically throughout life based on experiences', correct: false },
            { id: 'b', text: 'Remains remarkably stable throughout life unless significantly disrupted', correct: true },
            { id: 'c', text: 'Is entirely determined by genetics with no environmental influence', correct: false },
            { id: 'd', text: 'Cannot be measured or predicted reliably', correct: false },
          ],
          feedback: {
            correct: 'Yes! Personality is stable, which is why it can predict behavior. This stability is what makes character arcs meaningful — change is rare and hard-won.',
            incorrect: 'Research shows personality is remarkably stable. This is why character change in fiction is dramatic — it requires extraordinary pressure.',
          },
        },
        {
          id: 'ch10-s4',
          type: 'multiple-choice',
          conceptKey: 'personality-plot',
          question: 'Stevens from *The Remains of the Day* illustrates that:',
          options: [
            { id: 'a', text: 'Personality can easily be overcome by willpower', correct: false },
            { id: 'b', text: 'Personality creates both strengths and limitations that shape destiny', correct: true },
            { id: 'c', text: 'All characters should have balanced personality profiles', correct: false },
            { id: 'd', text: 'Introverted characters make poor protagonists', correct: false },
          ],
          feedback: {
            correct: 'Exactly! Stevens\' high conscientiousness made him excellent at his job but prevented him from pursuing love. Personality is destiny.',
            incorrect: 'Stevens shows that personality traits are double-edged — the same traits that create strengths also create limitations.',
          },
        },
      ],
    },
    {
      id: 'summary',
      type: 'content',
      title: 'Chapter Summary',
      content: [
        { type: 'text', value: '## Key Takeaways from Chapter 10' },
        { type: 'list', items: [
          '**OCEAN** — Openness, Conscientiousness, Extraversion, Agreeableness, Neuroticism',
          '**Personality is stable** — it predicts behavior across situations and time',
          '**Plot is character under pressure** — personality determines response to challenges',
          '**Traits are double-edged** — every strength comes with a corresponding limitation',
          '**Personality is destiny** — Stevens\' traits created both his dignity and his tragedy',
        ] },
        { type: 'callout', variant: 'next', value: '**Next up**: Chapter 11 — Personality and Setting. Learn how characters\' personalities manifest in their environments through identity claims and behavioral residue.' },
      ],
    },
  ],
};
