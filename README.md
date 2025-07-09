# Project Talos

Official website of the **ASME Chapter of NIT Rourkela**, built and maintained by [OpenCode](https://github.com/OpencodeNIT-R), the official Open Source and Cybersecurity Club of NIT Rourkela.

[![CI](https://github.com/OpencodeNIT-R/project-talos/actions/workflows/ci.yml/badge.svg)](https://github.com/OpencodeNIT-R/project-talos/actions)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Prettier](https://img.shields.io/badge/code%20style-prettier-ff69b4.svg)](https://prettier.io/)

> **Note**: This website is under active development. A **"Coming Soon"** landing page is served at `/`.  
> All development takes place at `/playground`.

---

## 🚀 Tech Stack

- **React + Vite** – Lightning-fast UI development
- **Tailwind CSS** – Utility-first styling
- **React Router** – Routing system
- **Prettier + ESLint + Husky** – Code quality and consistency
- **GitHub Actions** – CI/CD pipeline
- **Netlify** – Deployment platform

---

## 📦 Installation

> Requires **Node.js ≥ 18** and **npm**

```bash
# Clone the repo
git clone https://github.com/OpencodeNIT-R/project-talos.git
cd project-talos

# Install dependencies
npm install

# Start development server
npm run dev
```

---

## 📂 Project Structure

```bash
project-talos/
├── .github/workflows/         # GitHub Actions workflow
│ └── ci.yml
├── .husky/                    # Pre-commit hooks
├── public/                    # Static assets
├── src/
│ ├── components/              # UI components
│ │ ├── playground/            # Components under active development
│ │ └── shared/                # Reusable components
│ ├── pages/
│ │ ├── landing-page/          # Public home page
│ │ └── playground/            # Route-based development space
│ ├── App.jsx
│ ├── main.jsx
│ └── index.css
├── .eslint*
├── .prettier*
├── .gitignore
├── vite.config.js
├── package.json
├── index.html
├── LICENSE
└── README.md

```

---

## 🤝 Contributing

We welcome all contributions — code, design, docs, or ideas!

Please read our [CONTRIBUTING.md](CONTRIBUTING.md) for detailed guidelines on:

- Setting up the project locally
- Commit message conventions
- Formatting and linting
- Pull request process

> You can also open [issues](https://github.com/OpencodeNIT-R/project-talos/issues) to suggest features or report bugs.

---

## 💬 Community & Support

- 🐞 [Report a Bug](https://github.com/OpencodeNIT-R/project-talos/issues)
- 🌟 [Request a Feature](https://github.com/OpencodeNIT-R/project-talos/issues)

For queries, reach out to [@OpencodeNIT-R](https://github.com/OpencodeNIT-R)

---

## 🛡 License

Licensed under the [MIT License](LICENSE)

---

## 👥 Maintainers

Architected with ❤️ by [**OpenCode**](https://github.com/OpencodeNIT-R), NIT Rourkela

- [Dhrutinandan Swain](https://github.com/swaindhruti)
- [Harsh Kumar Verma](https://github.com/Cybrite)
- [Siddharth Narayan Mishra](https://github.com/siddharth-narayan-mishra)
