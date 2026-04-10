<img width="1366" height="2739" alt="screencapture-nihalxofficial-ai-model-hub-netlify-app-2026-04-10-10_03_23" src="https://github.com/user-attachments/assets/b3cb8636-39f2-493e-ade4-b2ea3beb0c79" />
<img width="1349" height="638" alt="Screenshot 2026-04-10 100310" src="https://github.com/user-attachments/assets/026f3b55-2501-4309-8683-84c190e9d33e" />


# 🤖 AI Model Hub

A modern, responsive web application that serves as a centralized hub for exploring and discovering AI models. Built with React and styled using Tailwind CSS with DaisyUI components.

🌐 **Live Demo:** [https://nihalxofficial-ai-model-hub.netlify.app/](https://nihalxofficial-ai-model-hub.netlify.app/)

---

## ✨ Features

- 🔍 Browse and explore a curated collection of AI models
- 📋 Detailed model cards with key information
- 🔔 Real-time toast notifications for user interactions
- 📱 Fully responsive design across all screen sizes
- 🎨 Clean and modern UI with DaisyUI components
- ⚡ Fast and lightweight with optimized performance

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| [React](https://react.dev/) | UI library & component architecture |
| [JavaScript (ES6+)](https://developer.mozilla.org/en-US/docs/Web/JavaScript) | Core language with modern syntax |
| [Tailwind CSS](https://tailwindcss.com/) | Utility-first CSS styling |
| [DaisyUI](https://daisyui.com/) | Tailwind CSS component library |
| [React Toastify](https://fkhadra.github.io/react-toastify/) | Toast notification system |
| [React Icons](https://react-icons.github.io/react-icons/) | Icon library for React |

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v18 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/nihalxofficial/ai-model-hub.git
   cd ai-model-hub
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser** and visit `http://localhost:5173`

---

## 📦 Dependencies

```json
{
  "react": "^18.x",
  "react-dom": "^18.x",
  "react-toastify": "^10.x",
  "react-icons": "^5.x",
  "tailwindcss": "^3.x",
  "daisyui": "^4.x"
}
```

---

## 📁 Project Structure

```
ai-model-hub/
├── public/
│   └── favicon.ico
├── src/
│   ├── assets/          # Images and static assets
│   ├── components/      # Reusable React components
│   ├── pages/           # Page-level components
│   ├── App.jsx          # Root component
│   └── main.jsx         # Entry point
├── index.html
├── tailwind.config.js
├── vite.config.js
└── package.json
```

---

## 🎨 UI & Styling

This project uses **Tailwind CSS** for utility-first styling combined with **DaisyUI** for pre-built, accessible UI components such as cards, badges, buttons, and modals — enabling a consistent and polished design without writing custom CSS from scratch.

---

## 🔔 Notifications

**React Toastify** is used to provide smooth, non-intrusive toast notifications that give users real-time feedback for actions like adding a model to favourites, copying links, or form submissions.

---

## 🌍 Deployment

This app is deployed on **Netlify** with automatic CI/CD from the main branch.

To build for production:
```bash
npm run build
```

The `dist/` folder will be generated and ready for deployment.

---

## 👤 Author

**Nihal** — [@nihalxofficial](https://github.com/nihalxofficial)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
