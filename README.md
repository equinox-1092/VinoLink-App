# VinoLink

A modern web application for wine enthusiasts and professionals to discover, track, and manage wine collections.

## Summary

VinoLink is a comprehensive wine management platform that connects wine lovers with their favorite vintages. The application provides tools for cataloging personal wine collections, discovering new wines, and learning about different wine regions and varieties.

## Features

- 🍷 Interactive wine catalog with detailed information
- 📱 Responsive design for all devices
- 🔍 Advanced search and filtering options
- 📊 Collection management and tracking
- 🌍 Multi-language support
- 🔄 Real-time updates and synchronization
- 🔒 Secure user authentication
- 📈 Analytics and personal recommendations

## Frameworks and Libraries

- **Frontend**: Next.js 14 with React 18
- **Styling**: Tailwind CSS with shadcn/ui components
- **Animation**: Framer Motion
- **Charts**: ECharts for data visualization
- **Icons**: React Icons
- **Internationalization**: react-i18next
- **UI Components**:
  - Headless UI
  - Magic UI components
  - Custom shadcn components

## Install dependencies
```bash
- npx shadcn@latest init
- npm install react-i18next i18next --save
- npm install react-icons --save
- npm install motion
- npx shadcn@latest add https://ui.aceternity.com/registry/sidebar.json
- npm install echarts
- npx shadcn@latest add "https://magicui.design/r/animated-subscribe-button"
- npm install @heroui/table
- npm install heroui-cli -g
- npm install --save @heroui/react
- npm install @headlessui/react@latest
- npx shadcn@latest add pagination
- npx shadcn@latest add "https://magicui.design/r/ripple-button"
```

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Build

1. Clone the repository
   ```bash
   git clone https://github.com/equinox-1092/VinoLink-App.git
   cd vinolink-app
   ```

2. Install dependencies
   ```bash
   npm install
   # or
   yarn
   ```

3. Set up environment variables
   ```bash
   cp .env.example .env.local
   # Update the environment variables in .env.local
   ```

4. Run the development server
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Author

- **Matias Diaz** - [@equinox-1092](https://github.com/equinox-1092)
