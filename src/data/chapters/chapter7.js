export const chapter7 = {
  id: 7,
  sections: [
    {
      id: 'intro', type: 'content', title: 'The Causal Brain',
      content: [
        { type: 'text', value: 'The brain is a **cause-and-effect machine**. It doesn\'t just observe events — it compulsively seeks to understand *why* they happen. This drive is so deep that we often perceive causation where none exists. We see faces in clouds, hear messages in static, and construct elaborate explanations for random events.' },
        { type: 'callout', variant: 'key-concept', value: 'Story IS cause and effect. E.M. Forster\'s famous distinction: "The king died and then the queen died" is a chronicle. "The king died, and then the queen died of grief" is a story. The word "because" — even when implied — transforms events into narrative.' },
        { type: 'text', value: 'For storytellers, this means every event in your story needs a *because*. Readers will search for one whether you provide it or not. If you don\'t control the causal logic, readers will construct their own — and it might not be the one you intended.' },
      ],
    },
    {
      id: 'causal-chains', type: 'content', title: 'Building Causal Chains',
      content: [
        { type: 'text', value: 'A well-constructed plot is a chain of cause and effect where each event flows inevitably from the preceding one. Not "this happened, then this happened, then this happened" but "this happened, *which caused* this, *which led to* this, *which forced* this."' },
        { type: 'text', value: 'The strongest causal chains connect character psychology to external events. A character\'s flawed belief causes them to make a decision, which creates a consequence, which forces a harder decision, which reveals a deeper flaw. Character *is* plot.' },
        { type: 'list', items: [
          '**External causation**: Events in the world cause other events (the bridge collapses, so they\'re trapped)',
          '**Internal causation**: Character psychology causes external events (her jealousy causes her to spy on him, which causes him to lose trust)',
          '**Blended causation**: External events interact with character psychology (the bridge collapse reveals his cowardice, which causes her to reassess everything)',
        ] },
        { type: 'text', value: 'The most satisfying stories blend all three. External events reveal and test character psychology. Character psychology shapes how events unfold. The interplay creates the feeling of inevitability that great stories have.' },
      ],
    },
    {
      id: 'quiz-1', type: 'quiz', quizType: 'formative', title: 'Causal Reasoning',
      questions: [
        {
          id: 'ch7-q1', type: 'scenario', conceptKey: 'causal-chains',
          question: 'Which sequence has the strongest causal chain?',
          options: [
            { id: 'a', text: 'She lost her job. She moved to a new city. She started painting.', correct: false },
            { id: 'b', text: 'She lost her job because she refused to compromise her principles, which forced her to move to a cheaper city, where she finally had time to pursue the painting she\'d always suppressed.', correct: true },
            { id: 'c', text: 'She was sad. Things got worse. Eventually things got better.', correct: false },
            { id: 'd', text: 'She lost her job on Monday. On Tuesday it rained. By Friday she was painting.', correct: false },
          ],
          feedback: {
            correct: 'Yes! Each event flows from the previous one through clear causation, and the chain connects to character psychology (her principles, her suppressed passion).',
            incorrect: 'The strongest chains have clear **because** connections between events AND root the causation in **character psychology**.',
          },
          hint: 'Look for the sequence where every event is connected by a "because."',
        },
      ],
    },
    {
      id: 'narrative-logic', type: 'content', title: 'Internal Consistency',
      content: [
        { type: 'text', value: 'Even fantasy and science fiction must obey cause and effect — their *own* cause and effect. A story can establish any rules it wants (magic exists, time travel is possible, animals can talk), but once established, those rules must be followed consistently.' },
        { type: 'text', value: 'When narrative logic breaks — when a character acts "out of character," when a problem is solved by coincidence, when the rules suddenly change — the reader\'s causal model collapses. This is experienced as frustration, disbelief, or the accusation of "bad writing."' },
        { type: 'callout', variant: 'insight', value: 'The brain\'s causal machinery is so powerful that readers will forgive almost any premise (talking animals, time loops, magic) as long as the internal logic is consistent. What they cannot forgive is logical inconsistency within the story\'s own rules.' },
      ],
    },
    {
      id: 'pattern-completion', type: 'content', title: 'Pattern Completion',
      content: [
        { type: 'text', value: 'The brain doesn\'t just trace causal chains backward — it projects them **forward**. When you present enough of a pattern, the brain automatically predicts what comes next. This is the engine of suspense: the reader projects a possible future and reads to find out if they\'re right.' },
        { type: 'text', value: 'The best stories exploit pattern completion by setting up expectations and then **partially** subverting them. If the reader predicts exactly what happens, they\'re bored. If the outcome is completely random, they\'re frustrated. The sweet spot: outcomes that break the predicted pattern but maintain causal logic.' },
        { type: 'text', value: 'This is why twist endings work when they "recontextualize" rather than "contradict." A good twist doesn\'t break the causal chain — it reveals a hidden chain that was there all along. The reader\'s pattern was wrong, but the story\'s pattern was consistent.' },
      ],
    },
    {
      id: 'exercise', type: 'exercise', title: 'Cause & Effect Workshop',
      exercises: [
        {
          id: 'ch7-ex1', type: 'structured-template', xpReward: 100,
          title: 'The "Because" Chain',
          instructions: 'Build a five-event causal chain where each event is caused by the previous one AND by character psychology.',
          fields: [
            { id: 'character', label: 'Character + core flaw', placeholder: 'e.g., "Marcus, a surgeon who can\'t admit when he\'s wrong"' },
            { id: 'event1', label: 'Event 1 (inciting event)', placeholder: 'What happens that threatens this character\'s flaw?' },
            { id: 'event2', label: 'Event 2 (caused by Event 1 + flaw)', placeholder: 'Because of the flaw, the character reacts by...' },
            { id: 'event3', label: 'Event 3 (caused by Event 2)', placeholder: 'This reaction leads to...' },
            { id: 'event4', label: 'Event 4 (escalation)', placeholder: 'Which forces the character to...' },
            { id: 'event5', label: 'Event 5 (crisis point)', placeholder: 'Until they reach a moment where...' },
          ],
        },
      ],
    },
    {
      id: 'quiz-summative', type: 'quiz', quizType: 'summative', title: 'Chapter 7 Assessment', passingScore: 70,
      questions: [
        {
          id: 'ch7-s1', type: 'multiple-choice', conceptKey: 'causal-chains',
          question: 'The fundamental difference between a chronicle and a story is:',
          options: [
            { id: 'a', text: 'Stories are longer than chronicles', correct: false },
            { id: 'b', text: 'Stories have characters; chronicles don\'t', correct: false },
            { id: 'c', text: 'Stories connect events through cause and effect; chronicles just list events in sequence', correct: true },
            { id: 'd', text: 'Chronicles are true; stories are fictional', correct: false },
          ],
          feedback: { correct: 'Exactly! The "because" is what transforms a sequence of events into a story.', incorrect: 'The key difference: stories connect events through **cause and effect**. Chronicles simply list events in time order.' },
        },
        {
          id: 'ch7-s2', type: 'multiple-choice', conceptKey: 'narrative-logic',
          question: 'Why can readers accept magic in fantasy but reject coincidence in thrillers?',
          options: [
            { id: 'a', text: 'Fantasy readers are less critical', correct: false },
            { id: 'b', text: 'Magic is established as part of the causal rules; coincidence breaks causal logic', correct: true },
            { id: 'c', text: 'Thrillers are more realistic genres', correct: false },
            { id: 'd', text: 'Coincidence only bothers literary critics', correct: false },
          ],
          feedback: { correct: 'Yes! Magic is a consistent causal rule. Coincidence violates causation itself. The brain accepts new rules but rejects broken ones.', incorrect: 'The brain accepts **any rules** as long as they\'re consistent. Magic is a rule; coincidence is the **absence** of causal logic.' },
        },
        {
          id: 'ch7-s3', type: 'multiple-choice', conceptKey: 'pattern-completion',
          question: 'The sweet spot for story outcomes is:',
          options: [
            { id: 'a', text: 'Exactly what the reader predicted', correct: false },
            { id: 'b', text: 'Completely random and unpredictable', correct: false },
            { id: 'c', text: 'Breaking the predicted pattern while maintaining causal logic', correct: true },
            { id: 'd', text: 'Always tragic, because tragedy is more literary', correct: false },
          ],
          feedback: { correct: 'Perfect! The outcome should surprise the predicted pattern but still make causal sense. "Surprising but inevitable."', incorrect: 'The sweet spot: **break the prediction** but **maintain causal logic**. The reader didn\'t see it coming, but in retrospect it was inevitable.' },
        },
      ],
    },
    {
      id: 'summary', type: 'content', title: 'Chapter Summary',
      content: [
        { type: 'text', value: '## Key Takeaways from Chapter 7' },
        { type: 'list', items: [
          '**"Because" transforms chronicle into story** — cause and effect is narrative\'s foundation',
          '**Causal chains** should blend external events with character psychology',
          '**Internal consistency** matters more than plausibility — any rules are fine if followed',
          '**Pattern completion** drives suspense — the brain projects what comes next',
          '**Best twists recontextualize** — they reveal hidden causal chains, not random events',
        ] },
        { type: 'callout', variant: 'next', value: '**Next up**: Chapter 8 — Change Is Not Enough. The final chapter — why meaningful character transformation is the deepest story of all.' },
      ],
    },
  ],
};
