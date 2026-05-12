/**
 * Chapter 18: Confabulation & the Dramatic Question
 * Part 3: The Dramatic Question
 */

export const chapter18 = {
  id: 18,
  sections: [
    {
      type: 'intro',
      title: 'Welcome to Part 3: The Dramatic Question',
      content: `Part 3 explores the **heart of storytelling**: the dramatic question. We'll examine how characters reveal who they truly are through challenge and choice, and why the gap between self-perception and reality creates compelling narrative tension.

This chapter introduces the concept through **confabulation** — the fascinating phenomenon where our brains create false but believable explanations for our own behavior.`,
    },
    {
      type: 'content',
      title: 'Charles Foster Kane: A Case Study',
      content: `In *Citizen Kane*, Charles Foster Kane claims to champion the downtrodden despite his privileged background. His friend Jedediah Leland challenges this self-perception, revealing that Kane is **delusional** — seeking validation rather than genuinely caring about others.

This gap between who Kane *thinks* he is and who he *actually* is creates the film's central tension. The audience watches, fascinated, as Kane's self-deception slowly unravels.`,
      keyPoints: [
        'Kane\'s self-image contradicts his actions',
        'Friend Leland serves as the truth-teller',
        'The gap between perception and reality drives the story',
      ],
    },
    {
      type: 'concept',
      title: 'The Dramatic Question',
      concept: 'dramatic-question',
      content: `The dramatic question is the essence of storytelling: **"Who is this person?"**

It emerges when characters face unexpected challenges or choices that reveal their true nature. This question keeps audiences engaged throughout the narrative, as both readers and characters grapple with self-identity.

The dramatic question works because we're wired to wonder about others — and about ourselves. Every story is an investigation into identity.`,
      example: `In *Breaking Bad*, the dramatic question is: "Is Walter White a good man corrupted by circumstances, or was the darkness always there?" The show spends five seasons answering this question.`,
    },
    {
      type: 'concept',
      title: 'The Unreliable Narrator',
      concept: 'unreliable-narrator',
      content: `Humans possess an inner voice that **misrepresents their true selves**. We all have an unreliable narrator in our heads, constantly spinning a story that makes us the hero.

This isn't lying — it's something stranger. We genuinely believe our own false narratives. This phenomenon is called **confabulation**.`,
    },
    {
      type: 'concept',
      title: 'Confabulation',
      concept: 'confabulation',
      content: `**Confabulation** is the creation of fabricated explanations for behavior that the person genuinely believes to be true.

Split-brain patient experiments dramatically reveal this: when the two hemispheres of the brain are separated, one hemisphere can make the body perform an action, and the other hemisphere will confidently invent a plausible (but completely false) explanation for why.`,
      example: `A split-brain patient's left hand reaches for an object. When asked why, the patient (using the verbal left hemisphere, which didn't initiate the action) confidently explains: "I wanted to pick that up." The explanation is invented on the spot — but feels completely real to the patient.`,
    },
    {
      type: 'content',
      title: 'The Disconnect',
      content: `The unreliable internal narrative creates a **disconnect** between self-perception and reality. Characters navigating their stories often unearth surprising truths about their desires and motivations.

This is why the dramatic question is so powerful: it's the same investigation we conduct on ourselves every day. Self-discovery is a constant and complex journey — in life and in fiction.`,
    },
    {
      type: 'exercise',
      title: 'Crafting the Dramatic Question',
      instructions: `For a story you're developing (or a favorite story), identify:

1. **The dramatic question** in one sentence ("Who is this person?" or "Will they...?")
2. **Three scenes** that test this question
3. **The moment** the question is answered (or deliberately left open)`,
      example: `*The Godfather*:
1. Dramatic question: "Will Michael Corleone become his father?"
2. Tests: Refusing to join the business; killing Sollozzo; ordering the baptism murders
3. Answer: The door closing on Kay — he has become the Godfather`,
    },
    {
      type: 'quiz',
      questions: [
        {
          id: 'ch18-q1',
          type: 'multiple-choice',
          question: 'What is the dramatic question at its core?',
          options: [
            'What will happen next in the plot?',
            'Who is this person?',
            'Will the hero defeat the villain?',
            'How will the story end?',
          ],
          correctIndex: 1,
          explanation: 'The dramatic question centers on character identity — "Who is this person?" — revealed through their choices and challenges.',
        },
        {
          id: 'ch18-q2',
          type: 'multiple-choice',
          question: 'What is confabulation?',
          options: [
            'Deliberate lying to deceive others',
            'Creating fabricated explanations one believes to be true',
            'Forgetting important information',
            'Exaggerating events for dramatic effect',
          ],
          correctIndex: 1,
          explanation: 'Confabulation is creating false explanations for behavior that the person genuinely believes. It\'s not lying — the confabulator doesn\'t know they\'re wrong.',
        },
        {
          id: 'ch18-q3',
          type: 'multiple-choice',
          question: 'What do split-brain experiments reveal about self-narrative?',
          options: [
            'We always know why we do what we do',
            'Our explanations for our behavior are often invented after the fact',
            'The right hemisphere controls all language',
            'Memory is stored in a single location',
          ],
          correctIndex: 1,
          explanation: 'Split-brain experiments show that we confidently create explanations for our actions even when we have no access to the real reasons.',
        },
      ],
    },
    {
      type: 'exercise',
      title: 'The Confabulating Narrator',
      instructions: `Write a first-person scene (300–500 words) where the narrator confidently explains their motivations — but the reader can see their **real motivations** through the cracks.

Use the gap between what the narrator says and what the reader understands to create dramatic irony.`,
      tips: [
        'Have the narrator protest too much about something',
        'Include small contradictions the narrator doesn\'t notice',
        'Let actions contradict stated intentions',
        'Use other characters\' reactions to hint at the truth',
      ],
    },
    {
      type: 'summary',
      title: 'Key Takeaways',
      points: [
        'The **dramatic question** ("Who is this person?") is the essence of storytelling',
        '**Confabulation** reveals that we create false narratives about ourselves that we believe',
        'The gap between self-perception and reality creates narrative tension',
        'Characters (and real people) often discover surprising truths about their motivations',
        'Stories investigate identity — the same investigation we conduct on ourselves',
      ],
    },
  ],
};
