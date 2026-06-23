# CareerHub SA

## Environment Configuration

No environment variables are currently required for this project.

To keep local setup consistent, create a local `.env` file from the example file when environment variables are introduced:

```bash
cp .env.example .env
```
CareerHub SA is a Vite, React, and TypeScript web application for the CareerHub South Africa experience.

## Tech Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS
- ESLint

## Getting Started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Create a production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Project Structure

```text
.
├── public/          # Static assets
├── src/             # Application source code
├── index.html       # Vite entry HTML
├── package.json     # npm scripts and dependencies
└── vite.config.ts   # Vite configuration
```

## License

This project is licensed under the MIT License. See [LICENSE](./LICENSE) for details.
