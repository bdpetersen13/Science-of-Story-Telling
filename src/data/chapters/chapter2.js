export const chapter2 = {
  id: 2,
  sections: [
    {
      id: 'intro',
      type: 'content',
      title: 'The Brain as Storyteller',
      content: [
        { type: 'text', value: 'Here is one of the most unsettling facts in neuroscience: **you have never experienced reality directly**. Everything you see, hear, taste, and touch is a construction — a model built by your brain from fragmentary sensory data.' },
        { type: 'callout', variant: 'key-concept', value: 'The brain doesn\'t passively receive reality. It actively constructs a model of reality and presents it to consciousness as if it were the real thing. We are all, in a sense, hallucinating all the time.' },
        { type: 'text', value: 'Will Storr calls this the "model-making brain," and understanding it is essential for storytellers. Because if reality is a construction, then stories can create constructions that feel equally real.' },
      ],
    },
    {
      id: 'hallucinated-world',
      type: 'content',
      title: 'The Hallucinated World',
      content: [
        { type: 'text', value: 'Your visual field feels continuous and detailed, but it\'s not. The eye has a tiny region of high-resolution vision (the fovea) surrounded by increasingly blurry peripheral vision. There\'s a blind spot where the optic nerve exits. And yet you perceive a seamless, richly detailed panorama.' },
        { type: 'text', value: 'How? Your brain **fills in the gaps**. It takes sparse sensory data and constructs a complete model, drawing on memories, expectations, and learned patterns. This “controlled hallucination” is so convincing that you experience it as unquestionable reality.' },
        { type: 'quote', value: 'We don\'t see the world as it is. We see the world as we are.', attribution: 'Anaïs Nin' },
        { type: 'text', value: 'This has profound implications for storytelling. When a writer describes a room, the reader\'s brain doesn\'t need every detail — it needs *the right* details. The brain will construct the rest from its own library of experience.' },
      ],
    },
    {
      id: 'quiz-1',
      type: 'quiz',
      quizType: 'formative',
      title: 'Check Your Understanding',
      questions: [
        {
          id: 'ch2-q1',
          type: 'multiple-choice',
          question: 'Why does Storr describe our experience of reality as a "controlled hallucination"?',
          options: [
            { id: 'a', text: 'Because our senses are unreliable and often malfunction', correct: false },
            { id: 'b', text: 'Because the brain constructs a complete model from fragmentary sensory data', correct: true },
            { id: 'c', text: 'Because we are always dreaming even when awake', correct: false },
            { id: 'd', text: 'Because stories make us confuse fiction with reality', correct: false },
          ],
          feedback: {
            correct: 'Exactly! Our senses deliver fragmentary data, and the brain fills in the gaps to create a seamless, convincing model. It\'s a construction that feels like reality.',
            incorrect: 'The key insight is that our brains take **incomplete** sensory information and actively **construct** a full model of reality. It\'s not that our senses malfunction — it\'s that reality as we experience it is always a brain-made model.',
          },
          hint: 'Think about the blind spot in your eye. You don\'t notice it because...',
          conceptKey: 'hallucinated-reality',
        },
      ],
    },
    {
      id: 'neural-models',
      type: 'content',
      title: 'How Neural Models Work',
      content: [
        { type: 'text', value: 'The brain builds models at every level. You have a model of how gravity works (things fall down). A model of social norms (don\'t stare at strangers). A model of your own identity (who you believe yourself to be). These models are **neural patterns** — networks of connected neurons that fire together.' },
        { type: 'text', value: 'These models are incredibly useful. They allow you to predict what will happen next, navigate complex environments, and make split-second decisions. But they have a critical flaw: **the brain treats its models as truth**.' },
        { type: 'callout', variant: 'insight', value: 'The brain doesn\'t say "my model suggests the coffee cup is on the left." It says "the coffee cup IS on the left." This conviction is what makes us functional — and also what makes us resistant to change.' },
        { type: 'text', value: 'For storytellers, this means characters don\'t just have "beliefs" — they have neural models that feel like absolute reality. A character\'s flawed model of the world isn\'t something they can easily discard. It\'s wired into their brain. This is why character change is so difficult and so dramatic.' },
      ],
    },
    {
      id: 'sensory-simulation',
      type: 'content',
      title: 'Stories as Sensory Simulations',
      content: [
        { type: 'text', value: 'Here\'s where it gets interesting for writers: neuroimaging studies show that when we read about a character picking up a heavy object, **motor cortex areas associated with grasping activate**. When we read about the smell of cinnamon, **olfactory processing regions light up**.' },
        { type: 'text', value: 'In other words, reading a story is not a purely abstract, linguistic exercise. The brain *simulates* the experience. It runs the story through its model-making machinery and creates a partial lived experience.' },
        { type: 'list', items: [
          '**Motor simulation**: Reading about physical actions activates motor planning areas',
          '**Sensory simulation**: Descriptions of sights, sounds, smells, textures activate corresponding sensory regions',
          '**Emotional simulation**: Character emotions trigger the reader\'s own emotional circuitry',
          '**Social simulation**: Theory of mind circuits engage to model character intentions and beliefs',
        ] },
        { type: 'text', value: 'This is why *specific, concrete* language is more powerful than abstract language. "She gripped the rough bark of the oak" activates more neural simulation than "she touched a tree." The brain needs specific detail to build its model.' },
      ],
    },
    {
      id: 'quiz-2',
      type: 'quiz',
      quizType: 'formative',
      title: 'Applying Neural Models',
      questions: [
        {
          id: 'ch2-q2',
          type: 'scenario',
          question: 'A writer describes a character eating dinner as: "She ate her food. It was good." Based on this chapter, why is this description weak?',
          options: [
            { id: 'a', text: 'It\'s too short', correct: false },
            { id: 'b', text: 'It doesn\'t give the reader enough specific detail to trigger neural simulation', correct: true },
            { id: 'c', text: 'It should include the character\'s thoughts', correct: false },
            { id: 'd', text: 'It\'s grammatically simple', correct: false },
          ],
          feedback: {
            correct: 'Right! The brain needs specific, concrete detail to build its model. "She twirled the linguine around her fork, the garlic and basil sharp in her nostrils" gives the brain something to simulate.',
            incorrect: 'The issue isn\'t length or grammar. It\'s that the brain\'s simulation machinery needs **specific sensory details** to activate. Vague language creates no neural model.',
          },
          hint: 'What does the brain need to run a sensory simulation?',
          conceptKey: 'sensory-simulation',
        },
        {
          id: 'ch2-q3',
          type: 'multiple-choice',
          question: 'Why is character change so psychologically difficult, according to the neural model theory?',
          options: [
            { id: 'a', text: 'Characters are lazy and unmotivated', correct: false },
            { id: 'b', text: 'Their beliefs are neural models that the brain treats as absolute truth', correct: true },
            { id: 'c', text: 'They don\'t have enough information to change', correct: false },
            { id: 'd', text: 'Other characters prevent them from changing', correct: false },
          ],
          feedback: {
            correct: 'Exactly! A character\'s worldview isn\'t just an opinion they hold — it\'s a neural model that feels like reality itself. Changing it means tearing apart their experienced world.',
            incorrect: 'The key insight is that beliefs aren\'t just thoughts — they\'re **neural models** that the brain treats as reality. Changing a deeply held model feels like reality itself is breaking.',
          },
          hint: 'Think about how the brain treats its own models.',
          conceptKey: 'model-defense',
        },
      ],
    },
    {
      id: 'exercise',
      type: 'exercise',
      title: 'The Model-Making Workshop',
      exercises: [
        {
          id: 'ch2-ex1',
          type: 'structured-template',
          title: 'Sensory Simulation Challenge',
          instructions: 'Rewrite the following bland description using specific sensory details that will trigger the reader\'s neural simulation.',
          fields: [
            { id: 'original', label: 'Bland version (given)', placeholder: '"He walked into the old house. It smelled bad. The rooms were messy."' },
            { id: 'rewrite', label: 'Your rewrite with specific sensory detail', placeholder: 'Use specific sights, sounds, smells, textures, and temperatures...' },
            { id: 'analysis', label: 'Which neural simulation systems does your rewrite activate?', placeholder: 'e.g., "Olfactory (rotting wood smell), tactile (gritty floor), visual (peeling wallpaper)..."' },
          ],
          xpReward: 100,
        },
      ],
    },
    {
      id: 'quiz-summative',
      type: 'quiz',
      quizType: 'summative',
      title: 'Chapter 2 Assessment',
      passingScore: 70,
      questions: [
        {
          id: 'ch2-s1', type: 'multiple-choice', conceptKey: 'neural-models',
          question: 'What is a "neural model" in the context of storytelling?',
          options: [
            { id: 'a', text: 'A 3D brain scan used by neuroscientists', correct: false },
            { id: 'b', text: 'The brain\'s internal representation of how some aspect of reality works', correct: true },
            { id: 'c', text: 'A character\'s explicit statement of their beliefs', correct: false },
            { id: 'd', text: 'The plot structure of a neural narrative', correct: false },
          ],
          feedback: {
            correct: 'Yes! Neural models are the brain\'s internal representations — patterns of connected neurons that encode how we believe reality works.',
            incorrect: 'A neural model is the brain\'s **internal representation** of some aspect of reality — built from experience and treated as truth by consciousness.',
          },
        },
        {
          id: 'ch2-s2', type: 'multiple-choice', conceptKey: 'hallucinated-reality',
          question: 'The concept of "hallucinated reality" suggests that:',
          options: [
            { id: 'a', text: 'We are always in a dream state', correct: false },
            { id: 'b', text: 'Our conscious experience is a model constructed by the brain, not direct perception', correct: true },
            { id: 'c', text: 'Reading fiction causes hallucinations', correct: false },
            { id: 'd', text: 'Only some people experience constructed reality', correct: false },
          ],
          feedback: {
            correct: 'Correct! Everyone\'s experience of reality is a brain-constructed model. This is normal, functional, and the reason stories can feel so real.',
            incorrect: 'The key insight is that **everyone\'s** experience of reality is a construction by the brain. It\'s not a dysfunction — it\'s how consciousness works.',
          },
        },
        {
          id: 'ch2-s3', type: 'multiple-choice', conceptKey: 'sensory-simulation',
          question: 'When you read "she dragged her fingers across the rough sandstone wall," your brain:',
          options: [
            { id: 'a', text: 'Only processes the linguistic meaning of the words', correct: false },
            { id: 'b', text: 'Partially activates tactile and motor processing regions', correct: true },
            { id: 'c', text: 'Creates an exact replica of the physical sensation', correct: false },
            { id: 'd', text: 'Ignores the sensory content and focuses on plot', correct: false },
          ],
          feedback: {
            correct: 'Exactly! Reading sensory language creates partial neural simulation — the brain runs the experience through its sensory processing machinery.',
            incorrect: 'Research shows that reading sensory-rich language **partially activates** the same brain regions involved in actual sensory experience. It\'s not full simulation, but it\'s real neural activation.',
          },
        },
        {
          id: 'ch2-s4', type: 'scenario', conceptKey: 'model-defense',
          question: 'A character firmly believes "people always let you down." Based on neural model theory, what would be the most effective way to create dramatic tension?',
          options: [
            { id: 'a', text: 'Have someone explain to them that they\'re wrong', correct: false },
            { id: 'b', text: 'Put them in a situation where someone is genuinely trustworthy, forcing their model to crack', correct: true },
            { id: 'c', text: 'Give them a flashback explaining where the belief came from', correct: false },
            { id: 'd', text: 'Have them read a self-help book about trust', correct: false },
          ],
          feedback: {
            correct: 'Perfect! The most dramatic tension comes from putting a character\'s flawed model under pressure from contradictory reality. The model must crack — and that cracking IS the drama.',
            incorrect: 'Neural models don\'t change through information or explanation. They change when **experienced reality** contradicts them so forcefully that the model can no longer hold.',
          },
        },
        {
          id: 'ch2-s5',
          type: 'ordering',
          conceptKey: 'sensory-simulation',
          question: 'Put these steps in order: How does reading trigger neural simulation?',
          items: [
            { id: 'a', text: 'Reader encounters specific sensory language' },
            { id: 'b', text: 'Brain activates corresponding sensory/motor regions' },
            { id: 'c', text: 'Reader experiences partial simulation of the described event' },
            { id: 'd', text: 'Brain interprets linguistic meaning of words' },
          ],
          correctOrder: ['a', 'd', 'b', 'c'],
          feedback: {
            correct: 'Excellent! The brain first encounters the language, interprets meaning, then activates simulation regions, creating the partial experience.',
            incorrect: 'The process flows from encountering words → interpreting meaning → activating sensory regions → experiencing simulation.',
          },
        },
        {
          id: 'ch2-s6',
          type: 'matching',
          conceptKey: 'neural-models',
          question: 'Match each concept to its definition:',
          pairs: [
            { id: 'a', left: 'Neural Model', right: 'Brain\'s internal representation treated as reality' },
            { id: 'b', left: 'Controlled Hallucination', right: 'The constructed nature of conscious experience' },
            { id: 'c', left: 'Sensory Simulation', right: 'Brain regions activating while reading descriptions' },
            { id: 'd', left: 'Model Defense', right: 'Resistance to changing deeply held beliefs' },
          ],
          feedback: {
            correct: 'Perfect matching! These concepts form the foundation of understanding how stories affect the brain.',
            incorrect: 'Review the definitions: Neural models are treated as reality, hallucination refers to constructed experience, simulation is brain activation during reading, and defense is resistance to change.',
        },
        },
        {
          id: 'ch2-s7',
          type: 'fill-blank',
          conceptKey: 'hallucinated-reality',
          question: 'Complete this key insight from the chapter:',
          sentence: 'The brain doesn\'t passively receive reality — it actively _____ a _____ and presents it to consciousness as if it were the real thing.',
          blanks: [
            { id: 'b1', answer: 'constructs', options: ['constructs', 'copies', 'records', 'ignores'] },
            { id: 'b2', answer: 'model', options: ['model', 'memory', 'dream', 'story'] },
          ],
          feedback: {
            correct: 'Exactly! The brain CONSTRUCTS a MODEL of reality. This is the core insight of the hallucinated reality concept.',
            incorrect: 'The key words are "constructs" and "model" — the brain actively builds an internal representation, not a copy.',
          },
        },
      ],
    },
    {
      id: 'summary',
      type: 'content',
      title: 'Chapter Summary',
      content: [
        { type: 'text', value: '## Key Takeaways from Chapter 2' },
        { type: 'list', items: [
          '**Reality is a construction** — the brain builds a model from fragmentary data',
          '**Neural models feel like truth** — the brain doesn\'t distinguish model from reality',
          '**Stories trigger neural simulation** — reading specific detail activates sensory/motor regions',
          '**Specific beats abstract** — concrete language triggers richer simulation',
          '**Character models resist change** — because changing a model means changing experienced reality',
          '**Model defense creates drama** — the tension between a flawed model and contradictory evidence is the engine of story',
        ] },
        { type: 'callout', variant: 'next', value: '**Next up**: Chapter 3 — World Making. Learn how great writers build vivid, immersive worlds using the brain\'s model-making machinery.' },
      ],
    },
  ],
};
