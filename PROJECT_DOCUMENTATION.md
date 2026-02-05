# CoDeC Project - Complete Documentation

## 📋 Project Overview

**CoDeC** (Community of Developers and Coders) is a modern web application for a technical college club. It serves as a hub for members to explore divisions, view events, track achievements, and access a personalized member dashboard.

**Project Name:** codec-mvp  
**Type:** React + Vite SPA (Single Page Application)  
**Purpose:** Showcase club activities, manage member engagement, and provide a centralized platform for technical community building.

---

## 🏗️ Technology Stack

**Frontend:**
- **React 18.3.1** - UI framework
- **React Router DOM 7.1.3** - Client-side routing
- **Vite 6.0.7** - Build tool & dev server
- **Lucide React 0.473.0** - Icon library

**Development Tools:**
- **Vite React Plugin** - HMR (Hot Module Replacement) support
- **ESLint** - Code linting
- **React Dev Tools** - Browser debugging

**Styling:**
- CSS modules (individual `.css` files per component/page)
- CSS variables for theming

---

## 📁 Project Structure

```
CoDeC/
├── index.html                 # HTML entry point
├── package.json              # Dependencies & scripts
├── vite.config.js            # Vite configuration
├── src/
│   ├── main.jsx              # React DOM render entry
│   ├── App.jsx               # Main router & layout
│   ├── index.css             # Global styles
│   │
│   ├── components/           # Reusable UI components
│   │   ├── Navbar.jsx        # Navigation bar with mobile menu
│   │   ├── Navbar.css        # Navbar styling
│   │   ├── Footer.jsx        # Footer component
│   │
│   ├── pages/                # Page components (routed)
│   │   ├── LandingPage.jsx   # Home page with Easter egg
│   │   ├── LandingPage.css
│   │   ├── DivisionsPage.jsx # Club divisions showcase
│   │   ├── DivisionsPage.css
│   │   ├── EventsPage.jsx    # Upcoming & past events
│   │   ├── EventsPage.css
│   │   ├── AchievementsPage.jsx # Club milestones timeline
│   │   ├── AchievementsPage.css
│   │   ├── ClubHeadsPage.jsx # Leadership team
│   │   ├── ClubHeadsPage.css
│   │   ├── LoginPage.jsx     # Authentication page
│   │   ├── LoginPage.css
│   │   ├── Dashboard.jsx     # Member portal (multi-tab)
│   │   ├── Dashboard.css
│   │
│   └── data/
│       └── mockData.js       # Static data (divisions, events, etc.)
```

---

## 🔧 Core Components & Their Roles

### **App.jsx** (Main Application Container)
- **Purpose:** Root component that sets up routing structure
- **Key Features:**
  - Uses React Router for client-side navigation
  - Wraps all pages with `<Navbar>` and `<Footer>`
  - Manages layout with flexbox (min height 100vh)
- **Routes:**
  - `/` → LandingPage
  - `/divisions` → DivisionsPage
  - `/heads` → ClubHeadsPage
  - `/events` → EventsPage
  - `/achievements` → AchievementsPage
  - `/login` → LoginPage
  - `/dashboard` → Dashboard

### **Navbar.jsx** (Navigation Component)
- **Purpose:** Top navigation bar with responsive mobile menu
- **Features:**
  - Logo with styled "Co" (orange) and "DeC" (blue) text
  - Hamburger menu for mobile (via `lucide-react` icons)
  - Active route highlighting
  - Links to all major pages
- **State:** `isOpen` for mobile menu toggle
- **Icon:** Uses `Code2` icon from lucide-react

### **Footer.jsx** (Footer Component)
- **Purpose:** Simple footer with copyright info
- **Features:**
  - Centered text layout
  - Dynamic year display using `new Date().getFullYear()`
  - Uses CSS variable for secondary color

---

## 📄 Pages Explained

### **1. LandingPage.jsx** (Home)
- **Route:** `/`
- **Purpose:** Welcome page with Easter egg activation
- **Content:**
  - Hero section with tagline: "Building problem-solvers, developers, and researchers"
  - Call-to-action button to view events
  - **Easter Egg:** Click on "CoDeC" text to trigger Iron Man-style HUD overlay
    - Animated biometric scan sequence
    - 3D circle effects and grid overlay
    - "ACCESS GRANTED" message
    - Redirects to login page after animation
- **State:** `showHud` (overlay visibility), `authStep` (animation phase)
- **Animations:** Spin, pulse, blink, scan line effects

### **2. DivisionsPage.jsx** (Club Divisions)
- **Route:** `/divisions`
- **Purpose:** Showcase the 3 technical divisions
- **Divisions:**
  1. **Competitive Programming**
     - Focus: DSA, Math, Problem Solving
     - Tech: C++, Python, Java
     - Icon: Terminal
  2. **Web Development**
     - Focus: Full-stack Development, Deployment
     - Tech: React, Node.js, PostgreSQL, Docker
     - Icon: Globe
  3. **Machine Learning**
     - Focus: Deep Learning, NLP, Research
     - Tech: Python, TensorFlow, PyTorch, Jupyter
     - Icon: Brain
- **Layout:** Grid of division cards with details

### **3. EventsPage.jsx** (Events Hub)
- **Route:** `/events`
- **Purpose:** Display upcoming and past events
- **Upcoming Events:**
  - CoDeC Weekly Contest #42 (2026-02-01)
  - Intro to React Workshop (2026-02-05)
- **Past Events:**
  - ICPC Regional Qualifiers Watch Party (2025-12-15)
  - Hacktoberfest 2025 Wrap-up (2025-11-01)
- **Layout:** Two sections (upcoming & past), each with event cards
- **Features:** Date icons, descriptions, register button (disabled for upcoming)

### **4. AchievementsPage.jsx** (Club Milestones)
- **Route:** `/achievements`
- **Purpose:** Celebrate member victories and club achievements
- **Achievements:**
  1. ICPC World Finals 2025 Qualification (2025-12-20)
  2. Smart India Hackathon Winners - "AgroTech" project (2025-09-10)
  3. 50+ Codeforces Candidates Masters milestone (2025-11-30)
- **Layout:** Vertical timeline with icons (Trophy, Medal, Star)
- **Icons:** Dynamic rotation based on index

### **5. ClubHeadsPage.jsx** (Leadership Team)
- **Route:** `/heads`
- **Purpose:** Introduce the club leadership
- **Team Members:**
  - **Mihir Mohite** - President
  - **Sarah Chen** - Technical Lead
  - **Rahul Sharma** - CP Head
  - **Emily Davis** - Design Head
- **Layout:** Grid of member cards with avatars, positions, and bios
- **Avatars:** Generated via UI Avatars API (color-coded by role)

### **6. LoginPage.jsx** (Authentication)
- **Route:** `/login`
- **Purpose:** Member login interface
- **Features:**
  - Email and password form fields
  - Form validation (required fields)
  - Mock authentication (stores `isAuthenticated` in localStorage)
  - Redirects to Dashboard on successful login
- **UI:** Centered card layout with LogIn icon
- **State:** `email`, `password` (form inputs)

### **7. Dashboard.jsx** (Member Portal) ⭐ Most Complex
- **Route:** `/dashboard`
- **Purpose:** Personalized member hub with multiple features
- **Structure:**
  - **Sidebar:** User profile + navigation tabs
  - **Main Content:** Tab-specific content
- **Tabs:**
  1. **Contest Tracker**
     - Add new contest entries (Name, Platform, Problems, Rating Change, Notes)
     - Platforms: Codeforces, CodeChef, AtCoder
     - Display list of submitted contests
     - Form with validation
  2. **Meeting Updates**
     - Upcoming & past meeting information
     - Agenda and key discussion points
  3. **Announcements**
     - Club-wide announcements
     - Date-stamped messages
  4. **Discussions**
     - Forum-like discussions
     - Shows author and timestamps
- **User Data:** Uses `currentUser` object from mockData
  - Name: Lohitaksh
  - Email: lohitaksh@codec.edu
  - Role: member
  - Pre-populated contests, meetings, announcements, discussions
- **State:** `activeTab` controls which section is visible

---

## 📊 Mock Data (mockData.js)

Central data source for all static content:

### **divisions** (Array)
- 3 division objects with: id, name, description, focus, technologies, icon

### **events** (Object)
- **upcoming:** Array of future events
- **past:** Array of historical events

### **achievements** (Array)
- List of club milestones with: id, title, description, date

### **clubHeads** (Array)
- Leadership team with: id, name, position, avatar image URL, bio

### **currentUser** (Object)
- Mock logged-in user with:
  - Basic info (name, email, role)
  - **contests:** Array of past contest entries
  - **meetings:** Array of meeting records
  - **announcements:** Array of announcements
  - **discussions:** Array of discussion posts

---

## 🎨 Styling Approach

- **Global Styles:** `src/index.css` (base typography, colors, layout)
- **Component Styles:** Individual `.css` files per component/page
- **CSS Variables:** Likely used for:
  - `--secondary-color` (footer background)
  - Color palette (orange #f59e0b, blue #2563eb)
- **Responsive:** Mobile-first with hamburger menu in Navbar
- **Icons:** Lucide React for SVG icons

---

## 🚀 Key Features & Flow

1. **Landing Page** → Introduces the club with a hidden Easter egg
2. **Explore Content** → View divisions, events, achievements, and leadership
3. **Login** → Authenticate to access the member dashboard
4. **Dashboard** → Track contests, view meeting notes, check announcements, participate in discussions

---

## 🔗 Dependencies Summary

| Package | Version | Purpose |
|---------|---------|---------|
| React | 18.3.1 | UI framework |
| React Router DOM | 7.1.3 | Client-side routing |
| Lucide React | 0.473.0 | Icon library |
| Vite | 6.0.7 | Build tool |
| @vitejs/plugin-react | 4.3.4 | React HMR plugin |

---

## 💡 Development Notes

- **No Backend:** This is a frontend-only MVP with mock data
- **No Authentication:** Login is simulated; credentials not validated
- **No Database:** All data hardcoded in mockData.js
- **No API Calls:** Fully static content
- **Form Handling:** Contest form in Dashboard uses React state
- **Routing:** Client-side only; pages won't work without Vite dev server

---

## 🚀 Running the Project

```bash
# Install dependencies
npm install

# Start dev server (http://localhost:5173)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linter
npm lint
```

---

## 🗄️ Supabase Setup

- **Create local env file:** Copy `.env.local.sample` to `.env.local` at the project root and fill in your Supabase values. Do NOT commit `.env.local`.

  Example:

  NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
  NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-public-key

- **Where to get keys:** In the Supabase dashboard for your project — use the public anon key for client usage. Never expose a service role key in client code or any `NEXT_PUBLIC_` variable.

- **Dev server:** After creating `.env.local` and installing dependencies, run:

```bash
npm run dev
```

---



---

## 🎯 Future Enhancements

- Connect to a real backend API
- Implement actual authentication
- Add database integration
- Mobile app version
- Real contest data fetching from APIs
- Email notifications for announcements
- Discussion moderation features
- Member profile pages
- Event registration system

---

**Last Updated:** January 29, 2026
