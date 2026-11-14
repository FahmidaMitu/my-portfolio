# Personal Portfolio Website

A responsive and interactive **Personal Portfolio Website** built using **React.js** and **Tailwind CSS**. This project showcases my profile, technical skills, featured projects, and provides a functional contact form for visitors.

## 🔗 Live Demo & Repository

- **Live Website:** [https://my-portfolio-mitu11.vercel.app/]
- **GitHub Repository:** [https://github.com/FahmidaMitu/my-portfolio.git]

## ✨ Features

- **Responsive Navbar:** Smooth navigation across all sections with a mobile-friendly hamburger menu.
- **Hero Section:** Features a profile picture, introduction, and direct action buttons for **View Projects**, **Download CV**, and **Contact Me**.
- **About Me:** Displays educational background, career goals, and personal profile information.
- **Technical Skills:** Clean grid layout highlighting core frontend, backend, and database technologies.
- **Featured Projects:** Dynamically renders project cards from an array using the `.map()` method, complete with technology tags, **Live Demo**, and **GitHub** links.
- **Contact Form:** State-managed form using React `useState` with `onSubmit` handling, input validation, and success/error feedback messages.
- **Footer:** Includes social media links and copyright details.

## 🛠️ Technologies Used

- **Frontend:** React.js (Vite), JavaScript (ES6+), HTML5, CSS3
- **Styling:** Tailwind CSS
- **Version Control:** Git & GitHub

## 📂 Project Structure

```text
my-portfolio/
├── public/
│   └── resume.pdf
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── data/
│   │   └── projectsData.js
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

## 🚀 Getting Started

Follow these steps to run the project locally on your machine:

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/FahmidaMitu/my-portfolio.git](https://github.com/FahmidaMitu/my-portfolio.git)
   ```

2. **Navigate to the project directory:**
   ```bash
   cd my-portfolio
   ```

3. **Install dependencies:**
   ```bash
   npm install
   ```

4. **Start the development server:**
   ```bash
   npm run dev
   ```

5. Open your browser and visit `http://localhost:5173`.

## 📄 License

This project is created for educational and portfolio purposes.