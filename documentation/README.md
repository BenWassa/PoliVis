# PoliVis

PoliVis is a mobile-first Progressive Web App (PWA) designed to make politics personal, visual, and immediately understandable. It presents Canadian political figures through a clean, stylized interface that merges profiles, policies, and perspectives—giving users the ability to explore who's shaping their world and how.

Think of it as a "Pokédex for politics"—approachable, aesthetic, and data-driven.

## 🎯 Vision

**Tone:** Calm, intelligent, and apolitical—no outrage bait, no bias.

**Style:** Minimalist, data-driven cards with color cues (party tones, issue tags).

**UX Principles:**
- Tap once → Learn something valuable
- Swipe → Discover context
- Long-press → Access depth (news, sources, analysis)

**Target Audience:** Young professionals, students, and civic newcomers who want to feel competent and confident about politics—not overwhelmed.

**User Promise:** "Get up to speed on who's running your province or country—at a glance."

## ✨ Features

- **Politicians View:** Browse Canadian political figures with detailed profiles, career history, and policy positions
- **Parties View:** Explore political parties and their representatives
- **Issues View:** Discover key policy areas and related politicians
- **Search & Filter:** Find politicians by name, party, or issues
- **Mobile-First Design:** Optimized for mobile devices with responsive layout
- **Progressive Web App:** Installable on mobile devices, works offline
- **Static Data:** No API dependencies, fully self-contained

## 🛠 Tech Stack

- **Frontend:** React 18 + TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **Icons:** Custom SVG icons
- **PWA:** Service Worker for offline functionality
- **Deployment:** Static hosting (GitHub Pages, Netlify, etc.)

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/BenWassa/Project-PoliVis.git
cd Project-PoliVis/civic-lens
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory, ready for deployment to any static hosting service.

## 📱 Usage

- **Browse Politicians:** Tap on any politician card to view detailed information
- **Explore Parties:** See all politicians grouped by political party
- **Discover Issues:** Find politicians associated with specific policy areas
- **Search:** Use the global search bar to find specific politicians or topics
- **Install as PWA:** On mobile devices, add to home screen for native app experience

## 📁 Project Structure

```
civic-lens/
├── src/
│   ├── components/     # React components
│   ├── constants.ts    # Static data (politicians, issues)
│   ├── types.ts        # TypeScript interfaces
│   ├── lib/
│   │   └── genai.ts    # AI integration stub
│   ├── App.tsx         # Main app component
│   └── index.tsx       # App entry point
├── public/             # Static assets
├── package.json        # Dependencies and scripts
└── vite.config.ts      # Build configuration

documentation/          # Project documentation
├── Vision.md          # Design philosophy and vision
├── PoliVis setup.md   # Setup instructions
└── README.md          # This file
```

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

### Development Setup

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Make your changes
4. Test thoroughly
5. Commit: `git commit -m 'Add some feature'`
6. Push: `git push origin feature/your-feature`
7. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Inspired by the need for accessible civic information
- Built with modern web technologies for maximum reach
- Designed for citizens who want to engage meaningfully with politics

---

**PoliVis** - Making politics personal and understandable.
