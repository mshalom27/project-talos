# Contributing to Project Talos

Welcome! 🎉  
We’re thrilled you’re considering contributing to **Project Talos**, the official website of the ASME Chapter at NIT Rourkela, built by the OpenCode community.

Whether it's a bug report, feature suggestion, design improvement, or pull request — **every contribution matters**.

---

## 🧭 Table of Contents

- [Getting Started](#getting-started)
- [How to Contribute](#how-to-contribute)
- [Code Style](#code-style)
- [Branching & Commits](#branching--commits)
- [Pull Request Guidelines](#pull-request-guidelines)
- [Code of Conduct](#code-of-conduct)
- [Need Help?](#need-help)

---

## 🚀 Getting Started

1. **Fork the repository**
2. **Clone your fork**
   ```bash
   git clone https://github.com/your-username/project-talos.git
   cd project-talos
   ```
3. **Install dependencies**
   ```bash
   npm install
   ```
4. **Start the development server**
   ```bash
   npm run dev
   ```

- Visit: [`http://localhost:5173`](http://localhost:5173)
  - `/` → Coming Soon page
  - `/playground` → Development space

---

## 🛠 How to Contribute

- **Report Bugs**: Open an issue describing the problem clearly.
- **Suggest Features**: Share your ideas via issues or discussions.
- **Submit Code**: Tackle an issue or build something new.
- **Improve UI/UX**: Propose or implement visual improvements.
- **Enhance Docs**: Help us keep docs and README accurate.

---

## 🎨 Code Style

We enforce consistent formatting and linting:

- **Prettier** for formatting
- **ESLint** for code correctness
- **Husky** runs pre-commit checks automatically

Run locally before committing:

```bash
npx prettier . --write
npx eslint . --ext .js,.jsx
```

---

## 🌳 Branching & Commits

- Base all work on the `main` branch

- Use **feature branches**:

  ```bash
  git checkout -b feature/your-feature-name
  ```

- Follow conventional commit messages:

  ```bash
  <type>[optional scope]: <short message>
  ```

  #### 📌 Allowed Types

  | Type       | Purpose                                  | Example                                 |
  | ---------- | ---------------------------------------- | --------------------------------------- |
  | `feat`     | New feature                              | `feat: add homepage hero section`       |
  | `fix`      | Bug fix                                  | `fix: correct navbar alignment`         |
  | `docs`     | Documentation only                       | `docs: update README instructions`      |
  | `style`    | Code style, formatting (no logic change) | `style: reformat button spacing`        |
  | `refactor` | Code refactor (no behavior change)       | `refactor: clean up auth hook`          |
  | `perf`     | Performance improvement                  | `perf: reduce image load time`          |
  | `test`     | Add or update tests                      | `test: add unit tests for footer`       |
  | `chore`    | Tooling, config, or meta updates         | `chore: update eslint config`           |
  | `ci`       | CI/CD workflow changes                   | `ci: fix node version in GitHub action` |
  | `build`    | Changes to build tools or dependencies   | `build: update vite build settings`     |
  | `revert`   | Reverts a previous commit                | `revert: remove broken slider`          |

  #### 🧠 Extras

  | Syntax             | Usage                                | Example                            |
  | ------------------ | ------------------------------------ | ---------------------------------- |
  | `feat!:`           | Breaking change                      | `feat!: drop support for IE11`     |
  | `fix(auth):`       | Scoped change                        | `fix(nav): fix mobile menu toggle` |
  | `BREAKING CHANGE:` | Add in body for API-breaking commits | See below                          |

<details>
<summary>🔻 Example with breaking change</summary>

```bash
feat!: rewrite routing system

BREAKING CHANGE: All previous routes are now under `/app/*`.
```

</details>

---

## 📦 Pull Request Guidelines

1. Keep PRs focused and atomic.
2. Include screenshots or demos for UI changes.
3. Reference any related issue numbers.
4. Ensure all checks pass (formatting, linting, build).
5. Be respectful in code reviews — we're here to learn.

---

## 🤝 Code of Conduct

We follow the [Contributor Covenant](https://www.contributor-covenant.org/).
By participating, you agree to uphold a safe, inclusive, and respectful environment.

> TL;DR: Be kind, constructive, and professional.

---

## 💬 Need Help?

- Open an [issue](https://github.com/OpencodeNIT-R/project-talos/issues)
- Tag a maintainer in discussions
- Reach out to the [OpenCode](https://github.com/OpencodeNIT-R) team

We’re glad to have you on board 🙌

---

_Thanks for being part of the OpenCode community!_
