🚀 Flynx.ai Website

Welcome to the official repository for the Flynx.ai homepage! 🌟

Flynx.ai is on a mission to redefine investment banking with AI, offering advanced research and services that empower everyone to invest in the future. With AI-driven insights and a cutting-edge tech stack, Flynx.ai is democratizing opportunities in the world of finance. 💼🤖

🎯 Key Features
	•	🌍 Mission-Driven Content: Showcases Flynx.ai’s vision of democratizing investment opportunities with AI-powered insights.
	•	🧠 AI Integration: Highlights how Flynx.ai leverages AI to transform investment processes, from data analysis to decision-making.
	•	⚡ Modern Frontend Stack: Built with React + TypeScript + Vite for blazing-fast performance and a seamless developer experience.

🛠️ Technology Stack
	•	Frameworks & Tools:
	•	⚛️ React: For building a dynamic user interface.
	•	🛡️ TypeScript: Ensures type safety and enhances the developer experience.
	•	⚡ Vite: Optimized for fast builds and modern web projects.
	•	Plugins:
	•	🛠️ @vitejs/plugin-react: Uses Babel for Fast Refresh.
	•	⚡ @vitejs/plugin-react-swc: Employs SWC for even faster builds.

🧹 Expanding ESLint Configuration

If you’re developing a production-grade application, consider enhancing your linting setup:
	1.	Update parserOptions in your ESLint configuration:

export default tseslint.config({
  languageOptions: {
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});


	2.	Replace tseslint.configs.recommended with:
	•	✅ tseslint.configs.recommendedTypeChecked
	•	🚀 tseslint.configs.strictTypeChecked
	3.	Install eslint-plugin-react for React-specific linting:

import react from 'eslint-plugin-react';

export default tseslint.config({
  settings: { react: { version: '18.3' } },
  plugins: { react },
  rules: {
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
});

🚀 Getting Started
	1.	Clone the Repository:

git clone https://github.com/flynx-ai/flynx-ai-website.git
cd flynx-ai-website


	2.	Install Dependencies:

npm install


	3.	Run Locally:

npm run dev


	4.	Build for Production:

npm run build

🌐 Deployment

This project is automatically deployed on Vercel from the main branch. Push updates to GitHub to trigger new deployments. 🌟
Check out the live site: flynx.vercel.app

🤝 Contributing

We welcome contributions! 🛠️
	1.	Fork the repository.
	2.	Create your feature branch (git checkout -b feature/AmazingFeature).
	3.	Commit your changes (git commit -m 'Add some AmazingFeature').
	4.	Push to the branch (git push origin feature/AmazingFeature).
	5.	Open a Pull Request.

📄 License

This project is licensed under the MIT License. 📜