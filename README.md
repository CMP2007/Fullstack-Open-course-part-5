# Full Stack Open - Part 5 (Testing React apps)

Repository containing the solutions for Part 5 of the University of Helsinki course. Focused on testing implementation, reference handling, and authentication.

## 🛠️ Tecnologías
* **Frontend:** React + Vite
* **Testing:** Vitest, React Testing Library y Playwright (E2E)

## 📖 About
This repository is part of my learning journey in the Full Stack Open course. In this specific module, the work focused on ensuring application reliability through automated testing and deepening knowledge of advanced React patterns for handling complex components.

> [!NOTE]
> **Practice Project:** 🏛️ **Exercises Project.**.
> This repository is divided into a simple folder structure: the practica_5.1 folder contains the example projects developed during the reading of the material, while the ejercicio_5.1 folder contains the projects used to complete the exercises for this level. The structure of both and the installation steps are identical.
> In the event that a single project is used for practices or to complete the exercises throughout the level, its respective folder will only contain that single project.

## 📸 Preview
![Project Preview](./screenshots/project-demo.png)
*Screenshot of the Bloglist application with the notification system and login.*

[//]: # (Consejos técnicos para la captura:)
 [//]: # (Muestra la aplicación con algunos datos cargados blogs creados y, si es posible, con el formulario de creación abierto. Eso demuestra que la lógica de "mostrar/ocultar" donde usaste forwardRef funciona.)
 [//]: # (GIF Opcional pero recomendado: Si quieres impresionar, usa una herramienta como *ScreenToGif* para grabar 5 segundos haciendo login y creando un blog. En el README se vería igual que una imagen pero con movimiento.)

## 📋 Module Objectives / Key Features
* Login implementation and token handling (localStorage).
* Definition of propTypes for component validation.
* Unit tests for isolated components.
* Integration and E2E tests for complete user flows.
* Use of `forwardRef` and `useImperativeHandle`.

## 🎓 Learning Outcomes
*(Sección pendiente de completar)*
* Mastery of the JWT-based authentication flow and LocalStorage persistence.

* Ability to write tests that simulate real user interactions, reducing production errors.
  
* Improvement in component architecture through the use of advanced Hooks and type validation with PropTypes.
  
## ✅ ECompleted Exercises
* [x] 5.1 - 5.4: Bloglist frontend, steps 1-4
* [x] 5.5 - 5.12: Bloglist frontend, steps 5-12
* [x] 5.13 - 5.16: Bloglist tests, steps 1-4
* [x] 5.17 - 5.23: Bloglist end to end testing, steps 1-7

## 🧠 Overcome Challenges
* **Test Isolation:** Implementation of mocks for API services, ensuring that frontend tests do not depend on the backend state.
* **Stability in E2E Tests:** Handling waits and robust selectors in Playwright to avoid "flaky tests" during the authentication flow.
* **Component Encapsulation:** Correct use of `forwardRef` to expose functionalities of child components (such as collapsible forms) in a controlled manner.

  ## 📂 Project Structure
```text
.
├── ejercicio_5.1/        # Main Project (Bloglist)
│   ├── frontend/         # React + Vite Client
│   │   ├── src/          # Components and UI logic
│   │   └── package.json
│   ├── backend/          # Node.js / Express Server (API)
│   │   ├── controllers/  # Route logic
│   │   └── models/       # Database Schemas / Models
│   └── E2E-Test/         # End-to-End Tests (Playwright)
├── practica_5.1/         # **Follow-up material exercises**
├── screenshots/          # **Screenshots for documentation**
├── .gitignore            # Git excluded files
└── README.md             # General documentation
```

## 🚀 Installation
```bash
# Clone and enter the director
git clone https://github.com/CMP2007/Fullstack-Open-course-part-5
cd Fullstack-Open-course-part-5
cd ejercicio_5.1

# Configure the Backend
cd backend
npm install
# Note: Create your .env file with MONGODB_URI and SECRET
cd ..

# Configure the Frontend
cd frontend
npm install

# Start in development for both parts with the command 
npm run dev

# Run tests
npm run test
```
## 🔍 Project Notes
This repository strictly follows the University of Helsinki conventions, including the use of npm for dependency management and testing scripts. The primary focus is the transition toward Test-Driven Development (TDD) and improving frontend architecture.

---
**Carlos Puche** - Autodidactic Full Stack programming student.

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/carlos-puche-0444b53ba/)
