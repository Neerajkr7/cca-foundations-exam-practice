# CCA Foundations Mock Exam 🎯

> **Free, open-source mock exam for the Claude Certified Architect – Foundations certification.**  
> 100 scenario-based questions · No API key · No login · Fully offline after load.

[![Deploy to GitHub Pages](https://github.com/YOUR_USERNAME/cca-foundations-exam/actions/workflows/deploy.yml/badge.svg)](https://github.com/YOUR_USERNAME/cca-foundations-exam/actions)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

**Live demo → `https://YOUR_USERNAME.github.io/cca-foundations-exam/`**

---

## About the Exam

The Claude Certified Architect – Foundations (CCA) launched on **March 12, 2026** as Anthropic's first official technical certification. This mock exam covers all 5 official domains with exact real-exam weighting:

| Domain | Weight | Questions |
|--------|--------|-----------|
| Agentic Architecture & Orchestration | 27% | 27 |
| Claude Code Configuration & Workflows | 20% | 20 |
| Prompt Engineering & Structured Output | 20% | 20 |
| Tool Design & MCP Integration | 18% | 18 |
| Context Management & Reliability | 15% | 15 |

---

## Features

- ✅ 100 hand-crafted scenario-based questions — no trivia
- ✅ No API key required — fully static
- ✅ Configurable sessions — 10 / 20 / 40 / 60 / 100 questions
- ✅ Domain & difficulty filtering
- ✅ Detailed explanations on every answer
- ✅ Streak tracker + live timer + accuracy stats
- ✅ Bookmarks + missed questions review

---

## Local Dev

```bash
git clone https://github.com/YOUR_USERNAME/cca-foundations-exam.git
cd cca-foundations-exam
npm install
npm run dev
# → http://localhost:5173/cca-foundations-exam/
```

---

## Deploy to GitHub Pages

Every push to `main` auto-deploys via GitHub Actions.

**One-time setup:**
1. Push repo to GitHub
2. Go to **Settings → Pages → Source → GitHub Actions**
3. Push to `main` — done ✅

**Important:** Update `base` in `vite.config.js` to match your repo name:
```js
base: '/YOUR_ACTUAL_REPO_NAME/',
```

For **Vercel / Netlify / Cloudflare Pages** — remove the `base` field entirely.

---

## Project Structure

```
cca-foundations-exam/
├── .github/workflows/deploy.yml   # Auto-deploy to GitHub Pages
├── public/favicon.svg
├── src/
│   ├── App.jsx                    # Exam app + 100-question bank
│   ├── main.jsx
│   └── index.css
├── index.html
├── vite.config.js
└── package.json
```

---

## Contributing

PRs welcome! To add questions, follow this shape in `src/App.jsx`:

```js
{
  id: 101,
  domain: "agentic",           // agentic | code | prompt | mcp | context
  difficulty: "Intermediate",  // Foundational | Intermediate | Advanced
  scenario: "Pipeline Design",
  question: "Your scenario-based question?",
  options: ["A", "B", "C", "D"],
  correct: 1,                  // 0-indexed
  explanation: "Why correct + why top distractor is wrong."
}
```

---

## Official Free Prep Resources

- [Anthropic Academy (Skilljar)](https://anthropic.skilljar.com) — 13 free courses
- [Claude Docs](https://docs.anthropic.com)
- [MCP Docs](https://modelcontextprotocol.io)
- [Claude Code Docs](https://docs.anthropic.com/claude-code)

---

## Disclaimer

Unofficial community resource. Not affiliated with or endorsed by Anthropic.

## License

MIT © 2026
