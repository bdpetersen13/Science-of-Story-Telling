export const chapter5 = {
  id: 5,
  sections: [
    {
      id: 'intro', type: 'content', title: 'What the Brain Cares About',
      content: [
        { type: 'text', value: 'Your brain is bombarded with millions of bits of sensory data every second. It can\'t process all of it, so it has a ruthless filtering system: the **salience network**. This network decides, in real time, what matters and what can be safely ignored.' },
        { type: 'text', value: 'For storytellers, salience is everything. Every detail you include signals to the reader: *this matters*. Every detail you exclude signals: *this can be ignored*. Get this wrong, and you either bury important information in noise or make promises you never keep.' },
        { type: 'callout', variant: 'key-concept', value: 'In storytelling, every included detail is a promise to the reader. Their salience network flags it as important. If it turns out to be irrelevant, trust erodes. If it pays off, satisfaction deepens.' },
      ],
    },
    {
      id: 'salience-network', type: 'content', title: 'The Brain\'s Filter',
      content: [
        { type: 'text', value: 'The salience network operates on several principles. It flags things that are **novel** (we haven\'t seen this before), **emotionally charged** (this connects to something we care about), **goal-relevant** (this relates to what we\'re trying to do), or **threatening** (this could be dangerous).' },
        { type: 'text', value: 'In stories, these same principles apply. Readers pay attention to details that are surprising, emotional, connected to the central question, or ominous. A skilled writer activates the salience network deliberately, guiding the reader\'s attention like a conductor guides an orchestra.' },
        { type: 'text', value: 'This is why **pacing** matters. Too many salient details in a row is exhausting — the reader\'s attention system overloads. Too few and the reader disengages. The rhythm of salient and quiet moments creates the pulse of a story.' },
      ],
    },
    {
      id: 'chekhov', type: 'content', title: 'Chekhov\'s Gun and the Promise of Detail',
      content: [
        { type: 'quote', value: 'Remove everything that has no relevance to the story. If you say in the first chapter that there is a rifle hanging on the wall, in the second or third chapter it absolutely must go off. If it\'s not going to be fired, it shouldn\'t be hanging there.', attribution: 'Anton Chekhov' },
        { type: 'text', value: 'Chekhov\'s famous principle is actually a statement about salience. When you include a detail, the reader\'s brain flags it as significant. You\'ve made a promise. If that detail never pays off, the reader feels cheated — their salience network was activated for nothing.' },
        { type: 'text', value: 'This doesn\'t mean every detail must advance the plot. Details can serve characterization, mood, theme, or world-building. But they must serve *something*. The reader\'s brain is keeping track, even when they\'re not consciously aware of it.' },
      ],
    },
    {
      id: 'quiz-1', type: 'quiz', quizType: 'formative', title: 'Salience in Practice',
      questions: [
        {
          id: 'ch5-q1', type: 'scenario', conceptKey: 'chekhov-gun',
          question: 'A mystery novel spends a paragraph describing a character\'s unusual pocket watch in Chapter 2. By the end of the novel, the pocket watch has never been mentioned again. Based on salience theory, what happened?',
          options: [
            { id: 'a', text: 'Nothing — it was just good world-building', correct: false },
            { id: 'b', text: 'The writer made a promise that was never fulfilled, eroding reader trust', correct: true },
            { id: 'c', text: 'The reader probably forgot about it anyway', correct: false },
            { id: 'd', text: 'It added mystery by being unexplained', correct: false },
          ],
          feedback: {
            correct: 'Right! The reader\'s salience network flagged that pocket watch. A full paragraph of attention = a significant promise. Breaking that promise may leave the reader with an unsatisfied, "something was missing" feeling.',
            incorrect: 'The reader\'s salience network **flagged that detail as important**. Even if they don\'t consciously remember it, their brain is tracking it. Unfulfilled salient details create a subtle sense of dissatisfaction.',
          },
          hint: 'What does the brain do when it encounters a detailed, emphasized object?',
        },
      ],
    },
    {
      id: 'foreshadowing', type: 'content', title: 'Foreshadowing: The Art of Planting',
      content: [
        { type: 'text', value: 'Foreshadowing is salience engineering at its finest. You plant a detail early — sometimes subtly, sometimes boldly — that pays off later. The reader\'s salience network registers it, creating unconscious anticipation.' },
        { type: 'text', value: 'The best foreshadowing operates on two levels. On first read, the detail seems natural and unremarkable (or just interesting enough to notice). On re-reading, it becomes blindingly obvious. This is what readers mean when they say a twist was "surprising but inevitable."' },
        { type: 'example', title: 'Levels of Foreshadowing', items: [
          '**Heavy foreshadowing**: "She didn\'t know it then, but this would be the last time she saw him alive." (Blatant — creates dread)',
          '**Medium foreshadowing**: A character casually mentions they can\'t swim. Later, there\'s a flood. (Setup and payoff)',
          '**Subtle foreshadowing**: A recurring color, image, or phrase that gains meaning as the story unfolds (Thematic)',
        ] },
      ],
    },
    {
      id: 'exercise', type: 'exercise', title: 'Salience Workshop',
      exercises: [
        {
          id: 'ch5-ex1', type: 'self-assess', xpReward: 75,
          title: 'Audit Your Favorite Story',
          instructions: 'Think of a story (book, film, or show) with a satisfying twist or payoff. Trace the foreshadowing backward.',
          rubric: [
            { id: 'r1', label: 'I identified the twist or payoff moment' },
            { id: 'r2', label: 'I found at least 2 earlier details that foreshadowed it' },
            { id: 'r3', label: 'I analyzed whether the foreshadowing was subtle, medium, or heavy' },
            { id: 'r4', label: 'I explained why the payoff felt "surprising but inevitable"' },
          ],
        },
      ],
    },
    {
      id: 'quiz-summative', type: 'quiz', quizType: 'summative', title: 'Chapter 5 Assessment', passingScore: 70,
      questions: [
        {
          id: 'ch5-s1', type: 'multiple-choice', conceptKey: 'salience-network',
          question: 'The brain\'s salience network flags information that is:',
          options: [
            { id: 'a', text: 'Written in beautiful prose', correct: false },
            { id: 'b', text: 'Novel, emotionally charged, goal-relevant, or threatening', correct: true },
            { id: 'c', text: 'Placed at the beginning of sentences', correct: false },
            { id: 'd', text: 'Repeated multiple times', correct: false },
          ],
          feedback: { correct: 'Yes! These are the primary triggers for the salience network — in life and in stories.', incorrect: 'The salience network responds to **novelty, emotion, goal-relevance, and threat**. Beautiful prose alone won\'t trigger it.' },
        },
        {
          id: 'ch5-s2', type: 'multiple-choice', conceptKey: 'detail-selection',
          question: 'The most effective story details are those that:',
          options: [
            { id: 'a', text: 'Are the most descriptive and elaborate', correct: false },
            { id: 'b', text: 'Serve multiple functions: setting, character, plot, or theme simultaneously', correct: true },
            { id: 'c', text: 'Include technical accuracy and precision', correct: false },
            { id: 'd', text: 'Are unexpected and surreal', correct: false },
          ],
          feedback: { correct: 'Perfect! Details that do double or triple duty are efficient and deeply satisfying.', incorrect: 'The best details are **multifunctional** — they serve setting AND character AND story simultaneously.' },
        },
        {
          id: 'ch5-s3', type: 'multiple-choice', conceptKey: 'foreshadowing',
          question: 'The best foreshadowing creates a twist that feels:',
          options: [
            { id: 'a', text: 'Completely random and shocking', correct: false },
            { id: 'b', text: 'Obvious from the beginning', correct: false },
            { id: 'c', text: 'Surprising on first read, inevitable on re-read', correct: true },
            { id: 'd', text: 'Emotionally neutral but intellectually clever', correct: false },
          ],
          feedback: { correct: 'That\'s the gold standard! Surprising the first time, blindingly obvious the second time.', incorrect: 'The sweet spot for foreshadowing is **surprising on first read, inevitable on re-read**. The clues were there all along.' },
        },
      ],
    },
    {
      id: 'summary', type: 'content', title: 'Chapter Summary',
      content: [
        { type: 'text', value: '## Key Takeaways from Chapter 5' },
        { type: 'list', items: [
          '**Every detail is a promise** — the salience network flags included details as important',
          '**Chekhov\'s Gun** is a principle about reader trust, not just plot efficiency',
          '**Details should multitask** — serving setting, character, and story simultaneously',
          '**Pacing is salience management** — balance intense and quiet moments',
          '**Foreshadowing** plants details that pay off later, creating "surprising but inevitable" moments',
        ] },
        { type: 'callout', variant: 'next', value: '**Next up**: Chapter 6 — Neural Models & Metaphor. Discover how metaphors aren\'t just literary devices — they\'re how we think.' },
      ],
    },
  ],
};
