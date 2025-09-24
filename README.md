
  # Barista POS Training App ☕

A comprehensive web application designed for barista training with POS-style interface, daily routines, and complete drink recipe guides.

## Features

### 🏠 Dashboard
- Quick access to all sections
- Progress tracking for daily routines
- Quick notes and reminders
- Visual progress indicators

### 🌅 Morning Routine
- Complete opening checklist with 7 essential tasks
- Step-by-step instructions for each task
- Progress tracking with localStorage persistence
- Task completion animations and feedback

### 🌙 Closing Routine  
- Comprehensive end-of-day checklist with 8 tasks
- Detailed cleanup and shutdown procedures
- Progress tracking and completion status
- Reset functionality for daily use

### ☕ Drinks Menu
- 11+ complete drink recipes across categories:
  - Hot Coffee (Americano, Flat White, Cappuccino, Latte)
  - Mocha variations
  - Hot Chocolate
  - Matcha drinks
  - Frappés and cold drinks
  - Smoothies
  - Tea selections
  - Spritzers
- Search and category filtering
- Grid/List view toggle
- POS-style clickable cards

### 📋 Recipe Details
- Complete preparation steps with checkboxes
- Ingredient lists and measurements
- Preparation time estimates
- Important notes and customer preferences
- Progress tracking per recipe
- Visual step completion

## Technical Implementation

### Tech Stack
- **Frontend**: React 18 with functional components
- **Styling**: TailwindCSS with custom design tokens
- **State Management**: React Context API
- **Storage**: LocalStorage for persistence
- **Icons**: Lucide React
- **UI Components**: Custom shadcn/ui components

### Key Features
- **Responsive Design**: Mobile-first, works on all devices
- **PWA Ready**: Manifest file included for app installation
- **Persistent State**: All progress saved locally
- **Accessible**: WCAG compliant with proper ARIA labels
- **Performance**: Optimized images and lazy loading

### File Structure
```
├── App.tsx                 # Main app component with routing
├── components/             # Reusable UI components
│   ├── Navigation.tsx      # App navigation header
│   ├── ChecklistItem.tsx   # Interactive checklist component
│   ├── DrinkCard.tsx       # POS-style drink cards
│   └── SearchAndFilter.tsx # Search and category filtering
├── pages/                  # Main application pages
│   ├── Home.tsx           # Dashboard with quick access
│   ├── MorningRoutine.tsx # Opening checklist
│   ├── ClosingRoutine.tsx # Closing checklist  
│   ├── DrinksMenu.tsx     # Recipe browser
│   └── DrinkDetail.tsx    # Individual recipe view
├── contexts/              # React Context providers
│   ├── RoutineContext.tsx # Routine state management
│   └── DrinksContext.tsx  # Drinks data and filtering
├── hooks/                 # Custom React hooks
│   └── useLocalStorage.ts # LocalStorage persistence
├── data/                  # JSON data files
│   ├── drinks.json        # Complete drink recipes
│   └── routines.json      # Morning and closing tasks
└── utils/                 # Utility functions
    └── unsplash.ts        # Image handling utilities
```

## Data Structure

### Drinks JSON
Each drink includes:
- Complete ingredient lists
- Step-by-step preparation instructions
- Preparation time estimates
- Important notes and customer preferences
- Category classification

### Routines JSON
Each task includes:
- Detailed task descriptions
- Estimated completion times
- Step-by-step instructions
- Task categorization

## Usage

### For Training
1. **Morning**: Start with the Morning Routine to learn opening procedures
2. **Practice**: Use the Drinks Menu to learn recipes and practice preparation
3. **Evening**: Complete the Closing Routine for proper shutdown

### For Operations
- Use as a reference guide during service
- Track daily routine completion
- Reference drink recipes with customer notes
- Maintain consistency across team members

### Customization
- Edit `data/drinks.json` to add/modify recipes
- Update `data/routines.json` to customize checklists
- Modify quick notes in the Home component
- Adjust styling via TailwindCSS classes

## PWA Installation
The app can be installed on mobile devices:
1. Open in mobile browser
2. Tap "Add to Home Screen" when prompted
3. Use like a native app with offline capabilities

## Browser Compatibility
- Chrome/Edge: Full support
- Firefox: Full support  
- Safari: Full support
- Mobile browsers: Optimized experience

## Performance
- Lazy loaded images
- Optimized bundle size
- Efficient state management
- LocalStorage caching

---

**Perfect for**: Coffee shops, training programs, new barista onboarding, reference guide, and maintaining service consistency.