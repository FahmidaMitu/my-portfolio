# Personal Portfolio Website

A responsive and interactive **Personal Portfolio Website** built using **React.js** and **Tailwind CSS**[cite: 1, 2]. This project showcases my profile, technical skills, featured projects, and provides a functional contact form for visitors[cite: 1, 2].

## 🔗 Live Demo & Repository

- **Live Website:** [Add your Vercel/Netlify Live Link Here][cite: 3]
- **GitHub Repository:** [Add your GitHub Repository Link Here][cite: 3]

## ✨ Features

- **Responsive Navbar:** Smooth navigation across all sections with a mobile-friendly hamburger menu[cite: 1].
- **Hero Section:** Features a profile picture, introduction, and direct action buttons for **View Projects**, **Download CV**, and **Contact Me**[cite: 1, 2].
- **About Me:** Displays educational background, career goals, and personal profile information[cite: 2].
- **Technical Skills:** Clean grid layout highlighting core frontend, backend, and database technologies[cite: 2].
- **Featured Projects:** Dynamically renders project cards from an array using the `.map()` method, complete with technology tags, **Live Demo**, and **GitHub** links[cite: 2].
- **Contact Form:** State-managed form using React `useState` with `onSubmit` handling, input validation, and success/error feedback messages[cite: 2].
- **Footer:** Includes social media links and copyright details[cite: 2].

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