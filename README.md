# Full Stack Open - Part 5 (Testing React apps)

Repositorio con las soluciones de la **Parte 5** del curso de la Universidad de Helsinki. Enfocado en la implementación de pruebas, manejo de referencias y autenticación.

## 🛠️ Tecnologías
* **Frontend:** React + Vite
* **Testing:** Vitest, React Testing Library y Playwright (E2E)

## 📖 About
Este repositorio forma parte de mi trayecto de aprendizaje en el curso Full Stack Open. En este módulo específico, el trabajo se centró en asegurar la fiabilidad de las aplicaciones mediante pruebas automatizadas y en profundizar en patrones avanzados de React para el manejo de componentes complejos.

## 📸 Preview
![Vista previa del proyecto](./screenshots/project-demo.png)
*Captura de pantalla de la aplicación Bloglist con el sistema de notificaciones y login.*

[//]: # (Consejos técnicos para la captura:)
 [//]: # (Muestra la aplicación con algunos datos cargados blogs creados y, si es posible, con el formulario de creación abierto. Eso demuestra que la lógica de "mostrar/ocultar" donde usaste forwardRef funciona.)
 [//]: # (GIF Opcional pero recomendado: Si quieres impresionar, usa una herramienta como *ScreenToGif* para grabar 5 segundos haciendo login y creando un blog. En el README se vería igual que una imagen pero con movimiento.)

## 📋 Objetivos del Módulo / Key Features
* Implementación de login y manejo de tokens (localStorage).
* Definición de `propTypes` para validación de componentes.
* Tests unitarios para componentes aislados.
* Tests de integración y E2E para flujos completos de usuario.
* Uso de `forwardRef` y `useImperativeHandle`.

## 🎓 Learning Outcomes
*(Sección pendiente de completar)*

## ✅ Ejercicios Completados
* [x] 5.1 - 5.4: Bloglist frontend, steps 1-4
* [x] 5.5 - 5.12: Bloglist frontend, steps 5-12
* [x] 5.13 - 5.16: Bloglist tests, steps 1-4
* [x] 5.17 - 5.23: Bloglist end to end testing, steps 1-7

## 🧠 Desafíos Superados
* **Aislamiento de Tests:** Implementación de mocks para servicios de API, asegurando que las pruebas de frontend no dependan del estado del backend.
* **Estabilidad en Tests E2E:** Manejo de esperas y selectores robustos en Playwright para evitar "flaky tests" durante el flujo de autenticación.
* **Encapsulamiento de Componentes:** Uso correcto de `forwardRef` para exponer funcionalidades de componentes hijos (como formularios colapsables) de manera controlada.

## 🚀 Instalación
```bash
# Clonar y entrar al directorio
git clone https://github.com/CMP2007/Fullstack-Open-course-part-5
cd Fullstack-Open-course-part-5

# Instalar dependencias
npm install

# Iniciar en desarrollo
npm run dev

# Ejecutar tests
npm run testt
```
## 🔍 Notas del Proyecto
Este repositorio sigue estrictamente las convenciones de la Universidad de Helsinki, incluyendo el uso de npm para la gestión de dependencias y scripts de prueba. El enfoque principal es la transición hacia un desarrollo basado en pruebas (TDD) y la mejora de la arquitectura del frontend.

Carlos Puche - Estudiante autodidacta de programación Full Stack.
