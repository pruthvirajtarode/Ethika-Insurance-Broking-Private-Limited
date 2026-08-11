# Ethika AI Workshop Proposal

## Project Overview
A production-ready, interactive web application designed as a consulting proposal and live workshop platform for **Ethika Insurance Broking Private Limited**. 
The portal demonstrates how practical AI can be applied to insurance operations, claims, employee benefits, and internal knowledge management.

## Local Setup & Development
This project is built using React, Vite, TypeScript, and Tailwind CSS v4.

To run locally:
1. Ensure Node.js is installed.
2. Clone or download the repository.
3. Run `npm install` to install dependencies.
4. Run `npm run dev` to start the development server.
5. Open `http://localhost:5173` in your browser.

## Build & Deployment
The application is optimized for deployment on Vercel or any static hosting provider.
1. Run `npm run build` to compile the TypeScript and generate the production bundle in the `dist` folder.
2. The project can be deployed by importing the repository directly into Vercel (no special configuration required).

## Environment Variables
Currently, the application does not require any environment variables (`.env`) for the local or production build, as it operates entirely using mock services for the initial workshop phase.

## Demo Limitations
- **Synthetic Data**: All data used across the 5 interactive demos (claims, policies, renewals, HR knowledge) is strictly synthetic and fictional.
- **Mock AI Service**: The AI capabilities are powered by a deterministic local mock service (`src/services/aiService.ts`) to ensure a smooth, risk-free workshop presentation without relying on live API calls.
- **No Persistence**: Data generated or modified during the session is not saved to a backend database.

## Future AI Integration
The application architecture is designed for easy transition to production AI models:
- The `src/services/aiService.ts` file acts as a clean abstraction layer. 
- In future phases (e.g., Pilot Phase), these mock functions can be replaced with actual fetch calls to a secure backend connected to an LLM provider (such as OpenAI, Anthropic, or an internal enterprise model).
- At that stage, a `.env` file will be introduced to handle API keys and backend endpoints securely.
