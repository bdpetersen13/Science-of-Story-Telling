/**
 * Human-readable labels and definitions for all trackable concepts.
 * Used by the spaced repetition review flashcards.
 */
export const CONCEPT_LABELS = {
  // Chapter 1: Curiosity & the Brain
  'curiosity-gap': {
    term: 'Curiosity Gap',
    definition: 'A storytelling technique where the writer reveals just enough information to create questions in the reader\'s mind, but withholds enough to keep them turning pages. Managing the balance between too much (boredom) and too little (confusion) information.',
  },
  'info-gap-theory': {
    term: 'Information Gap Theory',
    definition: 'George Loewenstein\'s theory that curiosity arises when we perceive a gap between what we currently know and what we want to know. This gap creates cognitive discomfort — an itch that can only be scratched by finding the answer.',
  },
  'unexpected-change': {
    term: 'Unexpected Change',
    definition: 'The fundamental mechanism that captures reader attention at the start of a story. Our brains constantly predict what will happen next; when reality violates those predictions, the brain snaps to attention and curiosity activates.',
  },
  'brain-attention': {
    term: 'The Neuroscience of Attention',
    definition: 'When curiosity is triggered, the brain releases dopamine — not the dopamine of pleasure, but of motivated seeking. This drives the "just one more chapter" impulse, as each page promises to close an information gap while opening new ones.',
  },

  // Chapter 2: The Model-Making Brain
  'neural-models': {
    term: 'Neural Models',
    definition: 'The brain\'s internal representations of how the world works. We don\'t experience reality directly — we experience our brain\'s best guess at reality, a model constructed from sensory data and past experience.',
  },
  'hallucinated-reality': {
    term: 'Hallucinated Reality',
    definition: 'The idea that our conscious experience is essentially a "controlled hallucination" — the brain constructs a model of reality and presents it to us as if it were the real thing. Stories exploit this by creating models that feel as real as lived experience.',
  },
  'sensory-simulation': {
    term: 'Sensory Simulation',
    definition: 'When we read about a character tasting chocolate or feeling rain, our brain activates some of the same neural circuits that would fire during actual sensory experience. This is why vivid writing creates immersion.',
  },
  'model-defense': {
    term: 'Model Defense',
    definition: 'The brain\'s tendency to defend its existing models of reality, even when presented with contradictory evidence. This creates the psychological resistance to change that makes character transformation so dramatic in stories.',
  },

  // Chapter 3: World Making
  'specific-detail': {
    term: 'Specific Detail',
    definition: 'The use of precise, concrete details rather than abstractions to create story worlds. "A cup of Earl Grey" is more immersive than "a hot drink" because specific details trigger the brain\'s model-making machinery more effectively.',
  },
  'epistemic-trust': {
    term: 'Epistemic Trust',
    definition: 'The reader\'s sense that the author knows what they\'re talking about. Specific, accurate details build trust; vague or incorrect details break it. Once trust is established, the reader surrenders to the story\'s reality.',
  },
  'emotional-landscape': {
    term: 'Emotional Landscape',
    definition: 'The idea that settings in stories aren\'t neutral backdrops but emotional environments. A character\'s perception of their world reveals their inner state — the landscape is the mindscape.',
  },
  'world-through-character': {
    term: 'World Through Character',
    definition: 'The technique of filtering all world-building through a character\'s subjective perception. Rather than objective description, we see the world as the character sees it, which simultaneously builds both world and character.',
  },

  // Chapter 4: The Domesticated Brain
  'theory-of-mind': {
    term: 'Theory of Mind',
    definition: 'The cognitive ability to attribute mental states — beliefs, intentions, desires, emotions — to ourselves and others. This is the neural machinery that stories hijack: we automatically try to understand what characters are thinking and feeling.',
  },
  'social-intelligence': {
    term: 'Social Intelligence',
    definition: 'The evolutionary pressure that may have driven the development of our large brains. The need to navigate complex social hierarchies required sophisticated mental modeling of others\' minds — the same machinery that makes us story-loving creatures.',
  },
  'empathy-engine': {
    term: 'The Empathy Engine',
    definition: 'Stories function as empathy simulators. Through theory of mind, we don\'t just observe characters — we inhabit their perspective, feeling echoes of their emotions. This is why diverse fiction can literally broaden our capacity for real-world empathy.',
  },
  'character-motivation': {
    term: 'Character Motivation',
    definition: 'What a character wants and why they want it. Motivation is the engine of story because humans are obsessed with understanding why people do what they do. Clear, compelling motivation makes characters feel real.',
  },

  // Chapter 5: Salience
  'salience-network': {
    term: 'Salience Network',
    definition: 'The brain\'s system for filtering what\'s important from what\'s not. In storytelling, the writer must signal to the reader\'s salience network which details matter — every included detail should serve the story.',
  },
  'detail-selection': {
    term: 'Detail Selection',
    definition: 'The art of choosing which details to include and which to omit. Great writers include details that do double or triple duty — establishing setting while revealing character while advancing plot.',
  },
  'chekhov-gun': {
    term: 'Chekhov\'s Gun',
    definition: 'The principle that every element in a story should be necessary. If a gun appears on the wall in Act One, it must be fired by Act Three. Salient details create expectations that must be fulfilled.',
  },
  'foreshadowing': {
    term: 'Foreshadowing',
    definition: 'The technique of planting clues about future events. Foreshadowing works because the brain\'s salience network flags these details as important, creating unconscious anticipation that pays off later.',
  },

  // Chapter 6: Neural Models & Metaphor
  'metaphor-cognition': {
    term: 'Metaphor & Cognition',
    definition: 'Metaphors aren\'t just literary decoration — they\'re fundamental to how we think. We understand abstract concepts (time, emotions, morality) through concrete metaphors (time is money, anger is heat). Stories leverage this cognitive architecture.',
  },
  'embodied-language': {
    term: 'Embodied Language',
    definition: 'Language that connects to physical, bodily experience. "She felt crushed" activates the brain\'s sensorimotor circuits. Embodied language is more engaging than abstract language because it connects to our physical model of reality.',
  },
  'sensory-metaphor': {
    term: 'Sensory Metaphor',
    definition: 'Metaphors that map abstract concepts onto sensory experiences. "A cold personality," "a bright idea," "a heavy heart" — these work because they activate the brain\'s sensory processing alongside its abstract reasoning.',
  },
  'symbolic-meaning': {
    term: 'Symbolic Meaning',
    definition: 'Objects, settings, or events in stories that carry meaning beyond their literal function. A lighthouse isn\'t just a building — it can symbolize guidance, isolation, or warning. Symbols work because the brain naturally seeks pattern and meaning.',
  },

  // Chapter 7: Cause & Effect
  'causal-chains': {
    term: 'Causal Chains',
    definition: 'The sequence of cause-and-effect events that form the backbone of narrative. Each event should feel like an inevitable consequence of what came before. "The king died, then the queen died" is a chronicle; "The king died, then the queen died of grief" is a story.',
  },
  'narrative-logic': {
    term: 'Narrative Logic',
    definition: 'The internal consistency of cause and effect within a story\'s world. Even fantasy worlds must obey their own rules. When narrative logic breaks, the reader\'s model collapses and immersion shatters.',
  },
  'pattern-completion': {
    term: 'Pattern Completion',
    definition: 'The brain\'s compulsive need to complete patterns and fill in gaps. In storytelling, this means presenting enough of a causal chain that the reader\'s brain automatically projects forward, creating anticipation and engagement.',
  },
  'because-principle': {
    term: 'The "Because" Principle',
    definition: 'Research shows that people are more accepting of requests that include a "because" — even if the reason is trivial. Stories satisfy this deep need for causal explanation. Events must happen *because* of something.',
  },

  // Chapter 8: Change Is Not Enough
  'meaningful-change': {
    term: 'Meaningful Change',
    definition: 'Not all change makes a story. Meaningful change is change that challenges a character\'s core beliefs or sense of self. It\'s not about events happening — it\'s about events that force characters to confront who they are.',
  },
  'character-driven-plot': {
    term: 'Character-Driven Plot',
    definition: 'Plot that emerges from who a character is, rather than being imposed externally. The character\'s flawed model of reality creates the conflicts that drive the story forward. Plot is character; character is plot.',
  },
  'ignition-point': {
    term: 'Ignition Point',
    definition: 'The moment in a story when a character\'s model of reality is disrupted and they are forced to act. This is distinct from the "inciting incident" — the ignition point is psychological, not just situational.',
  },
  'story-trigger': {
    term: 'Story Trigger',
    definition: 'An event that exposes the gap between a character\'s model of reality and actual reality. The trigger doesn\'t just create a problem — it reveals a pre-existing flaw in how the character understands the world.',
  },

  // ==================== PART 2: THE FLAWED SELF ====================

  // Chapter 9: The Flawed Self
  'flawed-self': {
    term: 'The Flawed Self',
    definition: 'Characters operate with distorted views of reality, which they mistake for objective truth. These flaws are built into their neural model of the world and create the psychological conflicts that drive story.',
  },
  'naive-realism': {
    term: 'Naïve Realism',
    definition: 'The false belief that we perceive the world directly and objectively, rather than through a constructed neural model. Characters (and people) assume their subjective experience IS objective reality.',
  },
  'theory-of-control': {
    term: 'Theory of Control',
    definition: 'A character\'s learned strategy for managing the chaos and unpredictability of the world. It\'s their operating system for navigating life, built from early experience. When disrupted, the story begins.',
  },
  'character-change': {
    term: 'Character Change',
    definition: 'Transformation of a character\'s core beliefs or theory of control. True character change is rare and painful because it requires the brain to abandon models it has defended for years.',
  },

  // Chapter 10: Personality and Plot
  'big-five': {
    term: 'Big Five Personality Traits',
    definition: 'The OCEAN model: Openness (curiosity), Conscientiousness (organization), Extraversion (social energy), Agreeableness (cooperation), Neuroticism (negative emotion). These traits predict behavior across situations.',
  },
  'personality-prediction': {
    term: 'Personality and Behavior Prediction',
    definition: 'Knowing a character\'s Big Five profile lets you predict how they\'ll respond to plot events. High neuroticism = anxiety responses. High openness = seeking novel solutions. Personality shapes plot.',
  },
  'personality-plot': {
    term: 'Personality as Plot Engine',
    definition: 'Character personality doesn\'t just color response to plot — it generates plot. A disagreeable character creates conflict; a neurotic character creates anxiety-driven decisions. Who they are IS what happens.',
  },
  'personality-stability': {
    term: 'Personality Stability',
    definition: 'Personality traits are relatively stable across time but not rigid. Gradual shifts are possible, especially through major life experiences. This explains why character transformation feels earned when it\'s gradual.',
  },

  // Chapter 11: Personality and Setting
  'environmental-storytelling': {
    term: 'Environmental Storytelling',
    definition: 'Using a character\'s space — their room, office, car — to reveal who they are without dialogue or exposition. Objects and their arrangement speak volumes about personality.',
  },
  'identity-claims': {
    term: 'Identity Claims',
    definition: 'Intentional displays that showcase who a character wants to be seen as. Diplomas on walls, books on shelves, art choices — these are deliberate signals about identity, which may or may not reflect reality.',
  },
  'behavioral-residue': {
    term: 'Behavioral Residue',
    definition: 'Unintentional evidence of how a character actually lives. Worn furniture, stacks of mail, coffee rings — the traces they can\'t control, which often contradict their identity claims.',
  },
  'environmental-contradiction': {
    term: 'Environmental Contradiction',
    definition: 'The gap between identity claims and behavioral residue. When what a character displays contradicts how they actually live, we see the gap between their projected self and true self.',
  },
  'show-dont-tell': {
    term: 'Show Don\'t Tell',
    definition: 'The principle that demonstration powerful than explanation. Environmental details that show character are more effective than direct statements. Contradiction is most powerful of all.',
  },

  // Chapter 12: Personality and POV
  'pov-characterization': {
    term: 'POV as Characterization',
    definition: 'Point of view is not just a technical choice — it\'s a characterization tool. What a character notices, how they describe things, what they ignore — all reveal personality through perspective.',
  },
  'pov-flaw-reveal': {
    term: 'POV Flaw Reveal',
    definition: 'The technique of writing from a perspective where the narrator\'s flaws are visible to the reader but invisible to the narrator. The gap between self-perception and reality IS the characterization.',
  },
  'character-centric-description': {
    term: 'Character-Centric Description',
    definition: 'In contemporary fiction, descriptions reflect the character\'s perspective, not objective reality. The same room described by two different characters becomes two different rooms.',
  },
  'layers-of-identity': {
    term: 'Layers of Identity',
    definition: 'Character identity is multi-layered: personality (deepest, most stable), cultural background, personal history, and current emotional state (most changeable). Each layer filters perception.',
  },

  // Chapter 13: Culture and Character
  'deep-culture': {
    term: 'Deep Culture',
    definition: 'Culture shapes cognition at the deepest level — moral frameworks, causal reasoning, self-concept, emotional expression. It\'s not just surface details like food and fashion.',
  },
  'cultural-frameworks': {
    term: 'Cultural Frameworks',
    definition: 'The fundamental value systems that shape how characters think and what they consider important. Individualist vs. collectivist is one key dimension affecting story structure.',
  },
  'individualism-collectivism': {
    term: 'Individualism vs. Collectivism',
    definition: 'A key cultural dimension. Individualist cultures value personal freedom and singular heroes. Collectivist cultures value group contribution and community-embedded protagonists.',
  },
  'universal-purpose': {
    term: 'Universal Purpose of Story',
    definition: 'Despite different structures across cultures, all stories serve the same purpose: teaching theories of control — how to navigate an unpredictable world. Methods differ; purpose is universal.',
  },

  // Chapter 14: Anatomy of a Flawed Self
  'self-narrative-formation': {
    term: 'Self-Narrative Formation',
    definition: 'The developmental process by which we construct our "grand narrative" — the story of who we are. Begins with caregivers, continues through childhood, crystallizes in adolescence.',
  },
  'model-defending': {
    term: 'Model Defending',
    definition: 'After building our model of reality, we shift to defending it. Contradictory perspectives feel like threats. We seek validation, create echo chambers, and resist change.',
  },
  'ignition-point-design': {
    term: 'Ignition Point Design',
    definition: 'Crafting the moment that disrupts a character\'s theory of control. The ignition point must target the specific weak spot, be undeniable, force a response, and create stakes.',
  },
  'echo-chambers': {
    term: 'Echo Chambers',
    definition: 'Environments that reinforce existing beliefs. Characters surround themselves with like-minded people and media, protecting their model from challenge. Outsiders disrupt this.',
  },

  // Chapter 15: Fictional Memories & Moral Delusions
  'hero-maker-brain': {
    term: 'The Hero-Maker Brain',
    definition: 'Our unconscious tendency to reconstruct memories to cast ourselves as morally superior. We remember intentions as better than behavior, attribute successes to character and failures to circumstance.',
  },
  'memory-distortion': {
    term: 'Memory Distortion',
    definition: 'Memories are not recordings but reconstructions that serve psychological purposes. Over time, memories shift to make our past self look better, supporting our positive self-image.',
  },
  'moral-delusion': {
    term: 'Moral Delusion',
    definition: 'The illusion of moral superiority. Research shows most people believe their motivations are purer than others\'. This drives conflict when each side believes they\'re the righteous one.',
  },
  'competing-hero-narratives': {
    term: 'Competing Hero-Maker Narratives',
    definition: 'Both protagonist and antagonist believe they\'re the hero. Their competing convictions of moral righteousness create deep dramatic conflict. Every villain is a hero in their own story.',
  },

  // Chapter 16: David and Goliath
  'david-goliath-narrative': {
    term: 'David vs. Goliath Narrative',
    definition: 'The hero-maker brain constructs narratives of moral struggle against formidable odds. We cast ourselves as the small, righteous force fighting powerful, corrupt opposition.',
  },
  'belief-change-rarity': {
    term: 'Rarity of Belief Change',
    definition: 'Identity-level belief shifts are rare exceptions. The model-defending brain ensures most challenges are dismissed or reinterpreted. When change happens, it\'s painful and transformative.',
  },
  'mutual-david-narratives': {
    term: 'Mutual David Narratives',
    definition: 'Both sides of most conflicts see themselves as David fighting Goliath. This mutual hero-maker framing makes conflicts intractable — compromise feels like moral surrender.',
  },
  'belief-change-mechanism': {
    term: 'Mechanism of Belief Change',
    definition: 'For identity-level change: evidence must be undeniable (can\'t dismiss), and a new hero narrative must be available (alternative identity). Pain is the necessary cost.',
  },

  // Chapter 17: How Flawed Characters Create Meaning
  'plot-character-relationship': {
    term: 'Plot-Character Relationship',
    definition: 'Plot is the vehicle; character transformation is the cargo. External events only matter because of how they affect the character\'s evolving identity. Plot without character is spectacle.',
  },
  'core-question': {
    term: 'The Core Question',
    definition: 'The ultimate question driving every narrative: "Who is this person becoming?" Every scene, conflict, and choice advances or complicates this question about identity transformation.',
  },
  'external-internal-alignment': {
    term: 'External-Internal Alignment',
    definition: 'The most powerful stories align external and internal conflict. The outer battle mirrors the inner struggle. Victory in the world proves transformation in the self.',
  },
  'character-is-plot': {
    term: 'Character IS Plot',
    definition: 'Events don\'t create story — the character\'s unique psychological response creates story. The same event happening to different characters produces completely different stories.',
  },
  'ending-types': {
    term: 'Ending Types and Transformation',
    definition: 'Endings reflect character transformation: Comedy/Triumph = became who they needed to become. Tragedy = failed to transform. Ambiguous = uncertain. Anti-hero = transformed in wrong direction.',
  },

  // ==================== PART 3: THE DRAMATIC QUESTION ====================

  // Chapter 18: Confabulation & the Dramatic Question
  'dramatic-question': {
    term: 'The Dramatic Question',
    definition: 'The essence of storytelling: "Who is this person?" It emerges when characters face unexpected challenges or choices that reveal their true nature, keeping audiences engaged as both readers and characters grapple with identity.',
  },
  'confabulation': {
    term: 'Confabulation',
    definition: 'The creation of fabricated explanations for behavior that the person genuinely believes to be true. Split-brain experiments show we confidently invent reasons for our actions even when we have no access to the real causes.',
  },
  'unreliable-narrator': {
    term: 'The Unreliable Narrator',
    definition: 'The inner voice that misrepresents our true selves. We all have an unreliable narrator in our heads, constantly spinning a story that makes us the hero — not lying, but genuinely believing our own false narratives.',
  },
  'split-brain': {
    term: 'Split-Brain Research',
    definition: 'Experiments where the brain hemispheres are separated, revealing that one hemisphere can initiate action while the other confidently invents a false but believable explanation. Demonstrates the gap between self-narrative and reality.',
  },

  // Chapter 19: Multiple Selves
  'multiple-selves': {
    term: 'Multiple Selves',
    definition: 'Identity is not fixed but fluid — a "democracy of mini-selves" competing for control. Self-control is less about willpower, more about which mini-self wins the internal battle at any given moment.',
  },
  'neural-narrator': {
    term: 'The Neural Narrator',
    definition: 'David Eagleman\'s concept: a narrator in our brain that weaves a coherent story from competing identities, creating the illusion of a unified self. We feel like one person, but we\'re actually a coalition.',
  },
  'mini-selves': {
    term: 'Mini-Selves',
    definition: 'The competing personas within us — the achiever, the hedonist, the caretaker, the rebel. Each asserts itself depending on circumstances. Three-dimensional characters show these mini-selves in conflict.',
  },
  'core-identity': {
    term: 'Core Identity vs. Fluidity',
    definition: 'A stable core personality exists, shaped by genetics and early experience, but it\'s subject to constant situational change. Well-developed characters are consistent enough to be recognizable, fluid enough to be real.',
  },

  // Chapter 20: Two Levels of Story
  'two-level-story': {
    term: 'Two Levels of Story',
    definition: 'Stories function on two layers simultaneously: the visible/conscious layer (everyday drama, actions, events) and the subconscious layer (emotions, memories, deeper needs). Both must work together.',
  },
  'subconscious-struggle': {
    term: 'Subconscious Struggle',
    definition: 'The deeper conflicts beneath surface events. Character evolution informs plot development — as characters encounter dramatic events, their flawed perceptions break down and they confront deeper beliefs.',
  },
  'surface-plot': {
    term: 'Surface Plot',
    definition: 'The visible layer of story: actions, events, dialogue. Surface plot should always point toward the subconscious layer — external events that mirror internal battles.',
  },
  'internal-conflict': {
    term: 'Internal Conflict',
    definition: 'The character\'s psychological struggle beneath the surface action. Stories provide closure on identity questions that real life often doesn\'t — the search for self crystallized in a moment of truth.',
  },

  // Chapter 21: Modernist Stories
  'modernist-ambiguity': {
    term: 'Modernist Ambiguity',
    definition: 'Modernist narratives leave character development deliberately ambiguous. The story doesn\'t tell you what to think — it creates conditions for thought, requiring reader interpretation.',
  },
  'reader-collaborator': {
    term: 'Reader as Collaborator',
    definition: 'In modernist stories, the reader\'s own psychology fills in the gaps left by deliberate ambiguity. This can create more personal, resonant experience — or alienate readers who prefer clarity.',
  },
  'kafka-technique': {
    term: 'Kafka\'s Technique',
    definition: 'The disconnect between conscious observation and subconscious feeling. Characters narrate mundane details while readers feel increasing unease. The unnamed dread mirrors our own experience of subconscious unease.',
  },
  'clear-vs-ambiguous': {
    term: 'Clear vs. Ambiguous Resolution',
    definition: 'Traditional narratives provide clear cause-and-effect character change; modernist narratives deliberately leave transformation ambiguous. Both approaches serve different storytelling goals.',
  },

  // Chapter 22: Wanting and Needing
  'want-vs-need': {
    term: 'Want vs. Need',
    definition: 'Characters often possess a conscious desire (want) that contradicts their subconscious requirement for growth (need). The gap creates memorable characters; the collision creates the most powerful arcs.',
  },
  'conscious-desire': {
    term: 'Conscious Desire (Want)',
    definition: 'What the character actively chases throughout the story — their stated goal, their external quest. Often a mask for the deeper need they can\'t yet see.',
  },
  'subconscious-need': {
    term: 'Subconscious Need',
    definition: 'What the character actually requires for genuine growth — the deeper truth beneath their conscious want. Often the opposite of what they think they want.',
  },
  'turning-point': {
    term: 'The Turning Point',
    definition: 'The most powerful moment in a character arc: when they abandon their conscious want in favor of their true need. The want was a mask; the need was always underneath.',
  },

  // Chapter 23: Dialogue
  'narrative-compression': {
    term: 'Narrative Compression',
    definition: 'Storytelling compresses vast experiences into brief periods — an entire life in 90 minutes. This compression makes dialogue dense with meaning; every line must work hard.',
  },
  'dialogue-craft': {
    term: 'The Four Qualities of Dialogue',
    definition: 'Effective dialogue must be: Dynamic (moving story forward), Driven by desire (characters want something), Rich in personality (distinctive voice), Dual-level (conscious and subconscious meaning).',
  },
  'subtext': {
    term: 'Subtext',
    definition: 'The unspoken meaning beneath spoken words. Characters rarely say exactly what they mean — especially about things that matter most. The gap between surface and meaning creates tension.',
  },
  'voice-differentiation': {
    term: 'Voice Differentiation',
    definition: 'Each character should sound distinctly different based on their personality, background, and emotional state. The same information delivered by different characters becomes different dialogue.',
  },

  // Chapter 24: Roots of the Dramatic Question
  'evolutionary-storytelling': {
    term: 'Evolutionary Roots of Story',
    definition: 'Our responses to heroism and villainy were crucial for survival in hunter-gatherer societies. Those who could read character accurately — who could answer the dramatic question — survived.',
  },
  'gossip-mechanism': {
    term: 'Gossip as Cooperation Mechanism',
    definition: 'Gossip was essential for tribal cooperation, allowing monitoring of behaviors. Positive tales of selflessness brought celebration; stories of selfish action triggered moral outrage and punishment.',
  },
  'social-emotions': {
    term: 'Social Emotions in Storytelling',
    definition: 'Modern stories tap into ancient social emotions: admiration for heroic virtues, moral outrage toward selfishness, desire for consequence. The selflessness vs. selfishness battle keeps audiences captivated.',
  },
  'hero-villain-dynamic': {
    term: 'Hero/Villain Dynamic',
    definition: 'Moral judgments in storytelling are cross-cultural and deeply evolved. The dramatic question often reduces to: "Will this person choose selflessness or selfishness?"',
  },

  // Chapter 25: Status Play
  'status-dynamics': {
    term: 'Status Dynamics',
    definition: 'Two inherent ambitions fuel narratives: social acceptance (belonging) and status elevation (surpassing). These drives conflict, creating behaviors like dishonesty and betrayal that form the crux of human stories.',
  },
  'underdog-narrative': {
    term: 'Underdog Narrative',
    definition: 'Stories depicting low-status characters overcoming corrupt elite resonate deeply because they embody the universal desire for redemption and justice — the feeling of being undervalued despite capability.',
  },
  'schadenfreude': {
    term: 'Schadenfreude',
    definition: 'Satisfaction in the misfortunes of high-status people. Neurological studies confirm different brain responses to suffering based on perceived status — we\'re wired for status-based empathy.',
  },
  'status-empathy': {
    term: 'Status and Empathy',
    definition: 'Humans empathize more with lower-status individuals\' struggles. Status dynamics drive both plot and emotional engagement — status shifts create emotional peaks in storytelling.',
  },

  // Chapter 26: King Lear & Humiliation
  'status-loss': {
    term: 'Status Loss',
    definition: 'Removal of status can lead to madness, desperation, and danger. When expectations fail to align with reality, the mental model shatters. Losing status is losing self.',
  },
  'identity-collapse': {
    term: 'Identity Collapse',
    definition: 'When a character\'s model of reality shatters under pressure. In King Lear, the storm symbolizes internal chaos as Lear confronts his insignificance. Beliefs are deeply intertwined with identity.',
  },
  'humiliation-catalyst': {
    term: 'Humiliation as Catalyst',
    definition: 'Humiliation emerges as a toxic force — an "annihilation of the self" — that drives individuals to extreme, often malevolent actions. It doesn\'t create villains, but it often ignites them.',
  },
  'public-shame': {
    term: 'Public Shame',
    definition: 'Public acknowledgment of humiliation adds a tribal dimension. Villains can only be fully punished in the eyes of their peers. Private humiliation creates the most dangerous antagonists.',
  },

  // Chapter 27: Stories as Tribal Propaganda
  'tribal-narrative': {
    term: 'Tribal Narrative',
    definition: 'Stories serve as tools for tribal identity and social cohesion: transmitting values, creating heroes, reinforcing behaviors. Human tribes are intricately tied to their stories.',
  },
  'founding-stories': {
    term: 'Founding Stories',
    definition: 'Origin narratives that bind communities and define identity. The Judeans documented oral stories during exile to preserve identity, effectively founding Judaism through shared narrative.',
  },
  'us-vs-them': {
    term: 'Us vs. Them Narratives',
    definition: 'Tribal stories can become simplistic propaganda that blinds members to nuance. The hero-maker brain, amplified at the group level, creates dangerous moral blindness.',
  },
  'moral-blindness': {
    term: 'Moral Blindness',
    definition: 'The danger of simplistic tribal narratives that distort reality and fuel conflict. Every group believes it\'s the hero; responsible storytellers consider what their narratives leave out.',
  },

  // Chapter 28: Antiheroes & Empathy
  'antihero': {
    term: 'Antihero',
    definition: 'A protagonist with significant moral flaws who nonetheless earns audience sympathy through craft. Empathy for antiheroes activates multiple brain systems simultaneously.',
  },
  'sympathy-vs-respect': {
    term: 'Sympathy vs. Moral Respect',
    definition: 'The assumption that audiences prefer kind characters is misleading. Truly kind characters can be uninspiring. We identify with heroes to explore who we might become, not to emulate goodness.',
  },
  'nabokov-technique': {
    term: 'Nabokov\'s Empathy Techniques',
    definition: 'Building empathy for morally reprehensible characters through: backstory that explains (not excuses), narrative proximity, self-awareness, and providing worse antagonists for comparison.',
  },
  'social-learning': {
    term: 'Social Learning Function',
    definition: 'Antihero tales often end in punishment, reinforcing tribal values while allowing safe exploration of darker impulses. Enjoyment of exploring morally ambiguous roles provides relief from expectations.',
  },

  // Chapter 29: Origin Damage
  'origin-damage': {
    term: 'Origin Damage',
    definition: 'The specific pivotal moments in a character\'s past that shape their identity and flawed theory of control. Not vague generalizations but scenes — specific events the writer must know.',
  },
  'specificity': {
    term: 'Specificity in Backstory',
    definition: 'Creating compelling characters requires pinpointing origin damage to specific events. Even if not explicitly in the narrative, the writer must know them. Vague backgrounds create vague characters.',
  },
  'formative-experiences': {
    term: 'Formative Experiences',
    definition: 'The first two decades are critical for developing neural models of reality. Positive experiences tend toward seeing friendliness; negative experiences focus on hostility. The brain wires itself around early experience.',
  },
  'heros-journey': {
    term: 'The Hero\'s Journey and Origin',
    definition: 'The journey toward self-understanding is at the heart of all narratives. The core question origin damage raises: "Can they evolve and overcome their past?" This is the transformative hero\'s journey.',
  },

  // ==================== PART 4: PLOT, ENDINGS & MEANING ====================

  // Chapter 30: Plot
  'sacred-flaw': {
    term: 'The Sacred Flaw',
    definition: 'A deeply held, flawed belief about self or world that the character defends at almost any cost. It formed as survival mechanism, is woven into identity, and challenging it feels like annihilation.',
  },
  'plot-as-test': {
    term: 'Plot as Flaw-Testing Machine',
    definition: 'Plot functions as a machine that tests the character\'s sacred flaw with increasing pressure. Every scene, obstacle, and relationship tests whether they\'ll cling to their flaw or transcend it.',
  },
  'cause-effect-plot': {
    term: 'Cause and Effect in Plot',
    definition: 'Plot isn\'t "and then... and then..." It\'s "because... therefore..." Each scene causes the next through character-driven logical consequences that feel inevitable in retrospect.',
  },

  // Chapter 31: The Sacred Flaw
  'flaw-categories': {
    term: 'Flaw Categories',
    definition: 'Sacred flaws typically fall into categories: Control ("If I control everything, I\'ll be safe"), Worth ("I\'m not enough"), Trust ("People will hurt me"), Identity ("I am limited"), and Moral ("Ends justify means").',
  },
  'flaw-escalation': {
    term: 'Flaw Escalation',
    definition: 'As plot pressure increases, sacred flaws escalate through stages: Denial (“That wasn\'t about my flaw”), Doubling Down, Desperation, and Crisis (escape impossible). Each stage should be dramatized.',
  },
  'flaw-as-gift': {
    term: 'The Flaw as Gift',
    definition: 'The sacred flaw is often the character\'s greatest strength taken too far. The control freak is highly competent; the loner is self-reliant. Transformation means rebalancing, not eliminating.',
  },

  // Chapter 32: Crisis and Climax
  'impossible-choice': {
    term: 'The Impossible Choice',
    definition: 'The crisis presents an impossible choice where both options cost something essential. The character must choose between their flaw (safety/identity) and their need (growth/truth).',
  },
  'dark-night': {
    term: 'Dark Night of the Soul',
    definition: 'A moment of complete despair before the crisis, where all seems lost. It forces flaw confrontation without defenses, creates rock bottom for transformation, and maximizes audience uncertainty.',
  },
  'transformation-types': {
    term: 'Types of Climactic Transformation',
    definition: 'Different arcs: Positive (releases flaw, embraces need), Negative (doubles down, tragedy), Flat (maintains beliefs, transforms world), Ambiguous (uncertain change). The climax reveals the arc type.',
  },

  // Chapter 33: Endings
  'ending-categories': {
    term: 'Ending Types',
    definition: 'Endings fall into archetypes: Redemptive (overcomes flaw), Tragic (fails to overcome), Ironic (achieves want but loses need), Ambiguous (transformation uncertain), Circular (returns to beginning).',
  },
  'earned-endings': {
    term: 'Earned vs. Unearned Endings',
    definition: 'An ending is earned when transformation was prepared (seeds planted), gradual (not sudden), costly (real sacrifice), and consistent (character does what they couldn\'t before). Unearned endings feel like cheating.',
  },
  'denouement': {
    term: 'Denouement',
    definition: 'The cooling-off period after climax (French for "untying"). Shows the new normal, ties up meaningful threads, allows emotional processing. Should be brief — the drama is over.',
  },

  // Chapter 34: The Meaning of Story
  'meaning-crisis': {
    term: 'The Meaning Crisis',
    definition: 'Modern life faces weakened traditional meaning structures. Stories step into this gap, providing vicarious purpose, moral clarity, identity models, and temporary transcendence from meaninglessness.',
  },
  'narrative-identity': {
    term: 'Narrative Identity',
    definition: 'We don\'t just consume stories — we ARE stories. We construct our sense of self through memory narratives, future projections, and daily narration. Stories we consume shape our self-story.',
  },
  'storyteller-responsibility': {
    term: 'The Storyteller\'s Responsibility',
    definition: 'Because stories shape worldviews, storytellers carry moral responsibility: showing honest costs, resisting oversimplification, humanizing characters, and being aware of implicit teachings.',
  },

  // Chapter 35: Becoming a Storyteller
  'story-framework': {
    term: 'The Story Creation Framework',
    definition: 'A complete story requires: World (what reality?), Character (who with what flaw?), Dramatic Question (who will they become?), Plot (what tests?), Crisis (impossible choice), Ending (the answer), Meaning (the teaching).',
  },
  'storyteller-mindset': {
    term: 'The Storyteller\'s Mindset',
    definition: 'Beyond technique: curiosity about humans, attention to detail, comfort with ambiguity, empathy without judgment, and craft over inspiration. Storytelling is practice, not talent.',
  },
  'daily-practice': {
    term: 'The Practice',
    definition: 'Developing as a storyteller: read widely, analyze constantly ("why does this work?"), write daily, seek feedback, study craft repeatedly, and live fully. Quantity leads to quality.',
  },
};
