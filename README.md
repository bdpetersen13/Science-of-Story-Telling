# Science of Storytelling

A fully client-side, gamified interactive course that teaches the craft of storytelling through the lens of cognitive science and neuroscience — structured around Will Storr's *The Science of Storytelling*.

## What It Does

Students work through **35 chapters** organized into 4 parts, reading content and completing embedded quizzes. After finishing all chapters in a part, they unlock a **Boss Assessment** — a harder cumulative quiz (80% passing score) that awards a special badge and 500 XP. Completing the full course earns a certificate.

<img width="2558" height="1330" alt="Screenshot 2026-05-12 at 5 47 19 PM" src="https://github.com/user-attachments/assets/c53b1345-142b-4b1a-946b-91599d1f8bea" />

### Course Structure

| Part | Chapters | Topic |
|------|----------|-------|
| 1 | 1–8 | Creating a World (curiosity, neural models, metaphor, cause/effect) |
| 2 | 9–17 | The Flawed Self (personality, POV, culture, flawed characters) |
| 3 | 18–29 | The Dramatic Question (confabulation, status, antiheroes, empathy) |
| 4 | 30–35 | Plot, Endings & Meaning (sacred flaw, crisis/climax, narrative identity) |

## Key Systems

**Gamification** — XP awarded per chapter (150 base + quiz score bonus), 10 levels from Novice Writer to Master Storyteller (0–10,000 XP), 39 unique badges, and daily login streaks.

**Spaced Repetition** — Full SM-2 algorithm per concept. A review queue surfaces due cards; confidence ratings (0–5) adjust future intervals. Powers the `/review` page.

**Progress Tracking** — Chapters unlock linearly. Quiz scores map to 1–3 stars (70%+, 90%+). Boss Assessments unlock when all chapters in a part are complete.

**Quiz Types** — Multiple choice, fill-in-the-blank, matching, and drag-and-drop.

**Pages** — Dashboard, Chapter reader, Boss Assessment, Spaced Review, Progress, Analytics, Settings, Certificate.

## Tech Stack

- React 19 + Vite 7
- Tailwind CSS v4
- React Router v7
- Framer Motion
- Recharts
- No backend — all state in `localStorage`

## Development

```bash
npm install
npm run dev
```

```bash
npm run build
npm run preview
```

## Built With

Built using [Claude Code](https://claude.ai/code) by Anthropic.
