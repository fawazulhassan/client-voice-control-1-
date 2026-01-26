# Voice Control App

A React-based voice control application built following the Home Doctor coding standards and rules.

## 🚀 Features

- **Voice Commands**: Control devices with natural language voice commands
- **Smart Home Integration**: Connect and control smart home devices
- **Responsive Design**: Fully responsive interface that works on all devices
- **Modern UI**: Built with Tailwind CSS following the specified design system

## 🛠 Technology Stack

- **React 19** - Main framework
- **React Router DOM 7.8.1** - Routing with HashRouter
- **Tailwind CSS** - Utility-first CSS framework
- **FontAwesome** - Icons
- **React Icons** - Additional icons

## 📁 Project Structure

```
voice-control-app/
├── src/
│   ├── components/
│   │   ├── common/        # Shared components
│   │   ├── layout/        # Layout components (Header, Footer)
│   │   └── ui/           # UI-specific components
│   ├── pages/            # Page components (Home, VoiceControl)
│   ├── App.js            # Main App component
│   ├── index.js          # React entry point
│   └── *.css             # Component-specific CSS
├── public/               # Static assets
│   └── images/          # Image assets (organized by type)
├── cursor/rules/        # Coding guidelines
└── package.json         # Project dependencies
```

## 🎨 Design System

### Colors
- **Primary**: `#0088FF` (Main blue)
- **Secondary**: `#0A2E72` (Dark blue)
- **Accent**: `#48e4e4` (Light blue)
- **Neutral**: `#454D5D` (Gray)
- **Light Background**: `#EFF3F6`

### Typography
- **Primary Font**: Ubuntu, sans-serif
- **Secondary Font**: Roboto, sans-serif
- **Font Sizes**: 12px to 60px scale

## 🚀 Getting Started

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm start
   ```

3. **Build for Production**
   ```bash
   npm run build
   ```

## 📱 Pages

- **Home** (`/`): Landing page with app overview and features
- **Voice Control** (`/voice-control`): Main voice control interface

## 🎯 Coding Standards

This project follows the Home Doctor coding rules located in `cursor/rules/rulesmustfollow.md`:

- Functional React components with hooks
- Organized imports (React, third-party, local)
- Proper state management with useState/useEffect
- Event handlers defined as separate functions
- Responsive design with mobile-first approach
- Tailwind CSS utility classes
- Proper component composition and architecture

## 🔧 Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App (not recommended)

## 📱 Responsive Design

The app is fully responsive with:
- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px), 2xl (1536px)
- Touch-friendly interface elements (minimum 44px touch targets)
- Flexible grid layouts and spacing

## 🔒 Security & Best Practices

- Input validation and sanitization
- Proper error handling
- Accessibility features (semantic HTML, ARIA labels, keyboard navigation)
- Performance optimizations (lazy loading, code splitting)
- Environment variable configuration

---

Built with ❤️ following Home Doctor coding standards.