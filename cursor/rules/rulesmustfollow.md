# 🏥 Home Doctor - Coding Rules & Guidelines

## 📋 Table of Contents
1. [Project Overview](#project-overview)
2. [Technology Stack](#technology-stack)
3. [Project Structure](#project-structure)
4. [Frontend Coding Standards](#frontend-coding-standards)
5. [Backend Coding Standards](#backend-coding-standards)
6. [Tailwind CSS Guidelines](#tailwind-css-guidelines)
7. [Responsive Design Rules](#responsive-design-rules)
8. [Component Architecture](#component-architecture)
9. [API Integration Standards](#api-integration-standards)
10. [File Naming Conventions](#file-naming-conventions)
11. [Styling Guidelines](#styling-guidelines)
12. [Best Practices](#best-practices)

---

## 🎯 Project Overview

Home Doctor is a React-based healthcare platform with a Node.js/Express backend and MySQL database. The application provides medical services, doctor appointments, and user management functionality.

**Key Features:**
- User registration and authentication
- Medical department listings
- Doctor profiles and appointments
- Responsive healthcare website
- Medical blog/news section

---

## 🛠 Technology Stack

### Frontend
- **React 19** - Main framework
- **React Router DOM 7.8.1** - Routing (HashRouter)
- **Bootstrap 5.3.5** - CSS framework (base)
- **Tailwind CSS** - Utility-first CSS (to be implemented)
- **FontAwesome** - Icons
- **React Icons** - Additional icons

### Backend
- **Node.js** with **Express 5.1.0**
- **MySQL2** - Database driver
- **CORS** - Cross-origin resource sharing
- **Nodemon** - Development server

---

## 📁 Project Structure

```
homedoctor/
├── backend/                    # Node.js/Express server
│   ├── server.js              # Main server file
│   ├── package.json           # Backend dependencies
│   └── node_modules/          # Backend dependencies
├── src/                       # React frontend source
│   ├── components/            # Reusable components (to be created)
│   │   ├── common/           # Shared components
│   │   ├── layout/           # Layout components
│   │   └── ui/               # UI components
│   ├── pages/                # Page components
│   │   ├── home.js           # Home page
│   │   ├── login.js          # Login page
│   │   ├── signin.js         # Sign up page
│   │   └── forgetpassword.js # Forgot password page
│   ├── App.js                # Main App component
│   ├── index.js              # React entry point
│   └── *.css                 # Component-specific CSS
├── public/                   # Static assets
│   ├── images/              # Image assets (to be organized)
│   └── *.ico/png            # Favicons and manifest
├── cursor/rules/            # Coding guidelines
└── package.json             # Frontend dependencies
```

---

## ⚛️ Frontend Coding Standards

### 1. Component Structure
```javascript
// ✅ CORRECT - Functional component with hooks
import React, { useState, useEffect } from 'react';
import './ComponentName.css';

function ComponentName() {
  const [state, setState] = useState(initialValue);

  useEffect(() => {
    // Side effects here
  }, []);

  const handleFunction = () => {
    // Handler logic
  };

  return (
    <div className="component-container">
      {/* JSX content */}
    </div>
  );
}

export default ComponentName;
```

### 2. Import Organization
```javascript
// ✅ CORRECT - Organized imports
import React, { useState, useEffect } from 'react';

// Third-party libraries
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Local components
import ComponentName from '../components/ComponentName';

// Styles (always last)
import './ComponentName.css';
```

### 3. State Management
- Use `useState` for local component state
- Use `useEffect` for side effects
- Always provide initial state values
- Use descriptive variable names

### 4. Event Handlers
```javascript
// ✅ CORRECT
const handleSubmit = (event) => {
  event.preventDefault();
  // Logic here
};

// ❌ AVOID - Inline functions in render
<button onClick={() => handleSubmit()}>Submit</button>

// ✅ PREFERRED
<button onClick={handleSubmit}>Submit</button>
```

---

## 🖥️ Backend Coding Standards

### 1. Server Structure
```javascript
// server.js structure
const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Database connection
const db = mysql.createConnection({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME || 'homedoctor'
});

// Routes
app.get('/', (req, res) => {
  res.send('Home Doctor API');
});

// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
```

### 2. Environment Variables
- **NEVER** hardcode database credentials
- Use `.env` file for configuration
- Create `.env.example` for team members

### 3. Error Handling
```javascript
// ✅ CORRECT - Proper error handling
app.get('/users', (req, res) => {
  db.query('SELECT * FROM users', (err, results) => {
    if (err) {
      console.error('Database error:', err);
      return res.status(500).json({
        error: 'Internal server error',
        message: process.env.NODE_ENV === 'development' ? err.message : 'Something went wrong'
      });
    }
    res.json(results);
  });
});
```

### 4. SQL Injection Prevention
- **ALWAYS** use parameterized queries
- **NEVER** concatenate user input directly into SQL

```javascript
// ✅ SAFE
const query = 'INSERT INTO users (name, email) VALUES (?, ?)';
db.query(query, [name, email], callback);

// ❌ UNSAFE
const query = `INSERT INTO users (name, email) VALUES ('${name}', '${email}')`;
```

---

## 🎨 Tailwind CSS Guidelines

### 1. Installation & Setup
```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

### 2. Configuration (`tailwind.config.js`)
```javascript
/** @type {import('tailwindcss').config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0088FF',
        secondary: '#0A2E72',
        accent: '#48e4e4',
        neutral: '#454D5D',
        'light-bg': '#EFF3F6',
      },
      fontFamily: {
        'ubuntu': ['Ubuntu', 'sans-serif'],
        'roboto': ['Roboto', 'sans-serif'],
      },
      fontSize: {
        'xs': ['12px', '16px'],
        'sm': ['14px', '20px'],
        'base': ['16px', '24px'],
        'lg': ['18px', '28px'],
        'xl': ['20px', '28px'],
        '2xl': ['24px', '32px'],
        '3xl': ['30px', '36px'],
        '4xl': ['36px', '40px'],
        '5xl': ['48px', '1'],
        '6xl': ['60px', '1'],
      },
    },
  },
  plugins: [],
}
```

### 3. Usage Patterns

#### Layout Classes
```html
<!-- Container with responsive padding -->
<div className="container mx-auto px-4 sm:px-6 lg:px-8">

<!-- Flex layouts -->
<div className="flex flex-col md:flex-row gap-4">

<!-- Grid layouts -->
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
```

#### Color System
```html
<!-- Using custom colors -->
<button className="bg-primary hover:bg-primary/80 text-white">
  Primary Button
</button>

<!-- Text colors -->
<h1 className="text-secondary">Heading</h1>
<p className="text-neutral">Description</p>
```

#### Responsive Design
```html
<!-- Responsive text sizes -->
<h1 className="text-2xl md:text-4xl lg:text-6xl font-bold">
  Responsive Heading
</h1>

<!-- Responsive spacing -->
<div className="p-4 md:p-6 lg:p-8">
  Content
</div>

<!-- Responsive visibility -->
<div className="block md:hidden">Mobile only</div>
<div className="hidden md:block">Desktop only</div>
```

#### Component Classes
```html
<!-- Card component -->
<div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
  <h3 className="text-xl font-bold text-secondary mb-2">Card Title</h3>
  <p className="text-neutral">Card content</p>
</div>

<!-- Button variants -->
<button className="px-6 py-3 bg-primary text-white rounded-full hover:bg-primary/90 transition-colors font-medium">
  Primary Button
</button>

<button className="px-6 py-3 border border-primary text-primary rounded-full hover:bg-primary hover:text-white transition-all font-medium">
  Secondary Button
</button>
```

### 4. Migration Strategy
1. **Phase 1**: Install Tailwind and configure
2. **Phase 2**: Create utility classes for existing components
3. **Phase 3**: Gradually replace custom CSS with Tailwind
4. **Phase 4**: Remove unused CSS files

---

## 📱 Responsive Design Rules

### 1. Breakpoints (Tailwind defaults)
- **sm**: 640px and up
- **md**: 768px and up
- **lg**: 1024px and up
- **xl**: 1280px and up
- **2xl**: 1536px and up

### 2. Responsive Patterns
```html
<!-- Responsive containers -->
<div className="max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto">

<!-- Responsive text -->
<p className="text-sm md:text-base lg:text-lg">

<!-- Responsive spacing -->
<div className="space-y-4 md:space-y-6 lg:space-y-8">

<!-- Responsive grids -->
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
```

### 3. Mobile-First Approach
```html
<!-- Mobile-first: base styles for mobile, then larger screens -->
<div className="text-sm md:text-base lg:text-lg">
  <!-- Mobile: small, Tablet: base, Desktop: large -->
</div>
```

### 4. Touch-Friendly Design
- Minimum touch target: 44px × 44px
- Adequate spacing between interactive elements
- Consider thumb navigation patterns

---

## 🧩 Component Architecture

### 1. Component Organization
```
src/
├── components/
│   ├── common/           # Shared components
│   │   ├── Button.js
│   │   ├── Input.js
│   │   ├── Card.js
│   │   └── Modal.js
│   ├── layout/           # Layout components
│   │   ├── Header.js
│   │   ├── Footer.js
│   │   ├── Sidebar.js
│   │   └── Navigation.js
│   └── ui/               # UI-specific components
│       ├── DoctorCard.js
│       ├── ServiceCard.js
│       └── TestimonialCard.js
```

### 2. Component Composition
```javascript
// Layout component
function Layout({ children }) {
  return (
    <div className="min-h-screen bg-light-bg">
      <Header />
      <main className="container mx-auto px-4">
        {children}
      </main>
      <Footer />
    </div>
  );
}

// Page component
function HomePage() {
  return (
    <Layout>
      <HeroSection />
      <ServicesSection />
      <DoctorsSection />
    </Layout>
  );
}
```

---

## 🔗 API Integration Standards

### 1. API Structure
```javascript
// api.js - Centralized API calls
const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:3000';

export const api = {
  // GET requests
  getUsers: () => fetch(`${API_BASE_URL}/users`),

  // POST requests
  createUser: (userData) =>
    fetch(`${API_BASE_URL}/users`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userData),
    }),

  // Authentication
  login: (credentials) =>
    fetch(`${API_BASE_URL}/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(credentials),
    }),
};
```

### 2. Error Handling
```javascript
const handleApiCall = async (apiCall) => {
  try {
    const response = await apiCall();

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('API call failed:', error);
    throw error;
  }
};
```

---

## 📝 File Naming Conventions

### Components
- **PascalCase** for component files: `UserProfile.js`
- **kebab-case** for CSS files: `user-profile.css`
- **camelCase** for utility files: `apiHelpers.js`

### Assets
```
public/
├── images/
│   ├── icons/           # icon-*.png
│   ├── banners/         # banner-*.png
│   └── testimonials/    # testimonial-*.png
```

### Constants
- **UPPER_SNAKE_CASE** for constants: `API_BASE_URL`
- Group related constants in files: `constants.js`

---

## 🎨 Styling Guidelines

### 1. Color Palette
```javascript
// colors.js
export const colors = {
  primary: '#0088FF',      // Main blue
  secondary: '#0A2E72',    // Dark blue
  accent: '#48e4e4',       // Light blue
  neutral: '#454D5D',      // Gray
  background: '#EFF3F6',   // Light background
  white: '#FFFFFF',
  error: '#DC3545',
  success: '#28A745',
};
```

### 2. Typography Scale
```javascript
// typography.js
export const typography = {
  fonts: {
    primary: 'Ubuntu, sans-serif',
    secondary: 'Roboto, sans-serif',
  },
  sizes: {
    xs: '12px',
    sm: '14px',
    base: '16px',
    lg: '18px',
    xl: '20px',
    '2xl': '24px',
    '3xl': '30px',
    '4xl': '36px',
    '5xl': '48px',
    '6xl': '60px',
  },
  weights: {
    regular: 400,
    medium: 500,
    bold: 700,
  },
};
```

### 3. Spacing Scale
```javascript
// spacing.js
export const spacing = {
  1: '4px',
  2: '8px',
  3: '12px',
  4: '16px',
  5: '20px',
  6: '24px',
  8: '32px',
  10: '40px',
  12: '48px',
  16: '64px',
  20: '80px',
  24: '96px',
};
```

---

## ✅ Best Practices

### 1. Code Quality
- ✅ Use ESLint and Prettier
- ✅ Write descriptive commit messages
- ✅ Add comments for complex logic
- ✅ Use meaningful variable names
- ✅ Keep functions small and focused

### 2. Performance
- ✅ Use React.memo for expensive components
- ✅ Optimize images and assets
- ✅ Implement lazy loading for routes
- ✅ Minimize bundle size
- ✅ Use code splitting

### 3. Security
- ✅ Validate user input on frontend and backend
- ✅ Use HTTPS in production
- ✅ Implement proper authentication
- ✅ Sanitize database inputs
- ✅ Use environment variables for secrets

### 4. Accessibility
- ✅ Use semantic HTML elements
- ✅ Provide alt text for images
- ✅ Ensure keyboard navigation
- ✅ Maintain sufficient color contrast
- ✅ Add ARIA labels where needed

### 5. Testing
- ✅ Write unit tests for components
- ✅ Write integration tests for API calls
- ✅ Test responsive design
- ✅ Test accessibility features

### 6. Version Control
- ✅ Use feature branches
- ✅ Write clear commit messages
- ✅ Review code before merging
- ✅ Keep main branch stable

---

## 🚀 Quick Start for New Projects

1. **Setup Project Structure**
```bash
npx create-react-app project-name
cd project-name
mkdir src/components/{common,layout,ui}
mkdir src/pages
mkdir public/images/{icons,banners,testimonials}
```

2. **Install Dependencies**
```bash
npm install react-router-dom axios tailwindcss
npm install -D tailwindcss postcss autoprefixer
```

3. **Configure Tailwind**
```bash
npx tailwindcss init -p
# Edit tailwind.config.js with project colors
```

4. **Setup Backend**
```bash
mkdir backend
cd backend
npm init -y
npm install express mysql2 cors dotenv
```

5. **Copy Coding Rules**
```bash
mkdir cursor/rules
cp /path/to/rulesmustfollow.md cursor/rules/
```

---

## 📞 Support

When starting new projects:
1. Always copy this `rulesmustfollow.md` file
2. Follow the established patterns
3. Use Tailwind CSS for new components
4. Maintain consistent folder structure
5. Follow the coding standards outlined above

**Remember**: Consistency is key to maintainable code! 🎯