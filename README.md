# CCA Foundations Mock Exam 🎯

> **Free, open-source mock exam for the Claude Certified Architect – Foundations certification.**  
> 100 scenario-based questions · No API key · No login · Fully offline after load.

[![Deploy to GitHub Pages](https://github.com/Neerajkr7/cca-foundations-exam-practice/actions/workflows/deploy.yml/badge.svg)](https://github.com/Neerajkr7/cca-foundations-exam-practice/actions)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)
[![Questions](https://img.shields.io/badge/questions-100-blueviolet)](#contributing)

**🌐 Live → [https://neerajkr7.github.io/cca-foundations-exam-practice/](https://neerajkr7.github.io/cca-foundations-exam-practice/)**

---

## About the Exam

The [Claude Certified Architect – Foundations (CCA)](https://anthropic.skilljar.com) launched on **March 12, 2026** as Anthropic's first official technical certification. It's a proctored 60-question exam targeting solution architects building production-grade Claude applications.

This community mock exam covers all 5 official domains with exact real-exam weighting:

| Domain                                 | Weight   | Questions in this repo |
| -------------------------------------- | -------- | ---------------------- |
| Agentic Architecture & Orchestration   | 27%      | 27                     |
| Claude Code Configuration & Workflows  | 20%      | 20                     |
| Prompt Engineering & Structured Output | 20%      | 20                     |
| Tool Design & MCP Integration          | 18%      | 18                     |
| Context Management & Reliability       | 15%      | 15                     |
| **Total**                              | **100%** | **100**                |

---

## Features

- ✅ **100 hand-crafted questions** — scenario-based, not trivia
- ✅ **Works offline** — PWA, installs to home screen, no internet needed after first load
- ✅ **No API key** — fully static, free forever
- ✅ **Configurable sessions** — 10 / 20 / 40 / 60 / 100 questions
- ✅ **Domain & difficulty filtering** — drill your weak spots
- ✅ **Detailed explanations** — why the correct answer is right AND why the top distractor is wrong
- ✅ **Streak tracker + live timer + accuracy stats**
- ✅ **Bookmarks** — flag questions for a focused review session
- ✅ **Missed questions log** — jump back to anything you got wrong

---

## Getting Started

```bash
git clone https://github.com/Neerajkr7/cca-foundations-exam-practice.git
cd cca-foundations-exam-practice
npm install
npm run dev
# → http://localhost:5173/cca-foundations-exam-practice/
```

---

## Deploy to GitHub Pages

Every push to `main` triggers the GitHub Actions workflow and auto-deploys.

**One-time setup:**

1. Push this repo to GitHub
2. Go to **Settings → Pages → Source → GitHub Actions**
3. Push any commit to `main` — live in ~60 seconds ✅

**If you fork this repo**, update the `base` in `vite.config.js` to match your repo name:

```js
// vite.config.js
base: '/YOUR_REPO_NAME/',
```

For **Vercel / Netlify / Cloudflare Pages** — remove the `base` field entirely.

---

## Project Structure

```
cca-foundations-exam-practice/
├── .github/
│   └── workflows/
│       └── deploy.yml          # Auto-deploy to GitHub Pages on push to main
├── public/
│   ├── favicon.svg
│   ├── manifest.webmanifest    # PWA manifest
│   ├── sw.js                   # Vanilla service worker (offline support)
│   └── icons/
│       ├── icon-192.png
│       └── icon-512.png
├── src/
│   ├── App.jsx                 # ← All 100 questions live here
│   ├── main.jsx                # SW registration + update banner
│   └── index.css
├── index.html
├── vite.config.js
├── CONTRIBUTING.md
└── package.json
```

---

## 🤝 Contributing

**Contributions are what make this resource better for everyone preparing for the CCA exam.**

Whether you've spotted a wrong answer, want to add questions from a domain that needs more coverage, or have ideas for UI improvements — all contributions are welcome and appreciated.

### Ways to contribute

| Type                  | Description                                                    |
| --------------------- | -------------------------------------------------------------- |
| 🐛 **Fix a question** | Wrong answer marked correct, misleading wording, outdated info |
| ➕ **Add questions**  | New scenario-based questions with explanations                 |
| 🌐 **Translations**   | Questions in other languages (Hindi, Spanish, Japanese, etc.)  |
| 🎨 **UI / UX**        | Accessibility improvements, mobile experience, dark/light mode |
| 📖 **Docs**           | Improve explanations, fix typos, add study tips                |
| 🔗 **Resources**      | Link to great free prep materials                              |

### Adding or fixing questions

All 100 questions live in the `ALL_QUESTIONS` array in `src/App.jsx`. Each question follows this exact shape:

```js
{
  id: 101,                          // unique — use next available number
  domain: "agentic",                // agentic | code | prompt | mcp | context
  difficulty: "Intermediate",       // Foundational | Intermediate | Advanced
  scenario: "Multi-Agent Pipeline", // 2–5 word scenario label
  question: "Your scenario-grounded question here?",
  options: [
    "Option A — plausible but wrong",
    "Option B — the correct answer",   // correct: 1 (0-indexed)
    "Option C — common anti-pattern",
    "Option D — plausible distractor",
  ],
  correct: 1,                       // 0-indexed index into options[]
  explanation: "2-3 sentences: why the correct answer is right AND why the top distractor is wrong. Be specific — vague explanations don't help candidates learn."
}
```

**Question quality bar** — please check before submitting:

- [ ] The question tests applied architectural understanding, not memorisation
- [ ] All 4 options are plausible — no obvious throwaway answers
- [ ] The explanation addresses _both_ the correct answer and the most tempting wrong answer
- [ ] The `correct` index matches the actually correct option
- [ ] No duplicate of an existing question (run a quick search for key terms)

### Submitting a PR

```bash
# 1. Fork the repo on GitHub, then clone your fork
git clone https://github.com/YOUR_USERNAME/cca-foundations-exam-practice.git
cd cca-foundations-exam-practice

# 2. Create a branch with a descriptive name
git checkout -b add-questions-context-domain
# or
git checkout -b fix-question-42-wrong-answer

# 3. Make your changes in src/App.jsx
# 4. Test locally
npm install && npm run dev

# 5. Commit with a clear message
git commit -m "add: 5 new Context Management questions (ids 101-105)"
# or
git commit -m "fix: Q42 correct answer was index 2, should be 1"

# 6. Push and open a PR
git push origin add-questions-context-domain
```

**PR title format:**

- `add: <description>` — new questions or features
- `fix: <description>` — bug fixes or wrong answers
- `docs: <description>` — readme, comments, explanations
- `ui: <description>` — visual or UX changes

### Reporting issues

Found a wrong answer or a broken feature? [Open an issue](https://github.com/Neerajkr7/cca-foundations-exam-practice/issues/new) with:

- The question ID (shown in bottom-right of each question card)
- What's wrong
- What the correct answer/behaviour should be, with a source or reasoning

### Domain coverage we'd love more questions for

The current bank has 100 questions. Here's where more contributions would add the most value:

- **Agentic Architecture** — prompt injection defences, cost optimisation patterns, advanced state management
- **Claude Code** — Agent Skills in depth, advanced hooks, large monorepo patterns
- **Context Management** — RAG architectures, multi-document synthesis, confidence calibration

---

## Official Free Prep Resources

- [Anthropic Academy (Skilljar)](https://anthropic.skilljar.com) — 13 free self-paced courses
- [Claude Documentation](https://docs.anthropic.com)
- [Model Context Protocol Docs](https://modelcontextprotocol.io)
- [Claude Code Docs](https://docs.anthropic.com/claude-code)
- [CCA Exam Guide PDF](https://anthropic.skilljar.com) — official domain breakdown and sample questions

---

## Disclaimer

This is an **unofficial**, community-made study resource. It is not affiliated with or endorsed by Anthropic. Questions are based on publicly available CCA exam guides and official Anthropic documentation. Always refer to official Anthropic resources for the most accurate and up-to-date exam content.

---

## License

MIT © 2026 — free to use, fork, and build on.

---

<div align="center">

**If this helped you pass the exam, consider starring the repo ⭐ and sharing it with others preparing for the CCA.**

</div>
