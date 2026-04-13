# Contributing to CCA Foundations Mock Exam

Thanks for taking the time to contribute! This project exists to help the community prepare for the Claude Certified Architect exam — every question added, every bug fixed, and every improvement makes it better for everyone.

---

## Quick start

```bash
# Fork on GitHub first, then:
git clone https://github.com/YOUR_USERNAME/cca-foundations-exam-practice.git
cd cca-foundations-exam-practice
npm install
npm run dev   # → http://localhost:5173/cca-foundations-exam-practice/
```

---

## What we need most

### 1. New questions

All questions live in the `ALL_QUESTIONS` array in `src/App.jsx`. Copy this template:

```js
{
  id: 101,                          // next available number
  domain: "agentic",                // agentic | code | prompt | mcp | context
  difficulty: "Intermediate",       // Foundational | Intermediate | Advanced
  scenario: "Multi-Agent Pipeline", // 2–5 words
  question: "Your question here?",
  options: ["A", "B", "C", "D"],
  correct: 1,                       // 0-indexed
  explanation: "Why correct. Why top distractor is wrong."
}
```

**Quality checklist before submitting:**
- [ ] Tests architectural judgment, not memorisation
- [ ] All 4 options are genuinely plausible
- [ ] Explanation is specific (names the anti-pattern, explains the consequence)
- [ ] `correct` index is right — double check!
- [ ] No duplicate of an existing question

### 2. Bug fixes

If a question has the wrong answer marked as correct, please open an issue or PR immediately — these are high priority.

Issue title: `[BUG] Q{id}: wrong answer marked correct`

### 3. Translations

We'd love the question bank available in other languages. If you're fluent in a language and want to translate — please open an issue to discuss the approach before starting.

---

## PR guidelines

- **One concern per PR** — add questions OR fix a bug OR update docs. Don't mix.
- **Branch naming:** `add/questions-mcp-advanced`, `fix/q42-correct-answer`, `docs/improve-contributing`
- **Commit messages:** `add: 3 new MCP questions (ids 101-103)` / `fix: Q18 correct answer index`
- Keep PRs small and focused — easier to review and merge quickly

---

## Code of conduct

- Be respectful and constructive in reviews and issues
- Base corrections on official Anthropic documentation where possible — include a source link
- If you're unsure whether a question or answer is correct, open an issue to discuss before submitting a PR

---

## Questions?

Open a [GitHub Discussion](https://github.com/Neerajkr7/cca-foundations-exam-practice/discussions) or an issue. Happy to help.
