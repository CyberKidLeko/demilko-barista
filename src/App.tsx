import React, { useState } from 'react';
import { Home } from './pages/Home';
import { MorningRoutine } from './pages/MorningRoutine';
import { ClosingRoutine } from './pages/ClosingRoutine';
import { DrinksMenu } from './pages/DrinksMenu';
import { DrinkDetail } from './pages/DrinkDetail';
import { RoutineProvider } from './contexts/RoutineContext';
import { DrinksProvider } from './contexts/DrinksContext';
import { Toaster } from './components/ui/sonner';

type Page = 'home' | 'morning-routine' | 'closing-routine' | 'drinks-menu' | 'drink-detail';

interface AppState {
  currentPage: Page;
  selectedDrinkId?: string;
}

export default function App() {
  const [appState, setAppState] = useState<AppState>({
    currentPage: 'home'
  });

  const navigate = (page: Page, drinkId?: string) => {
    setAppState({
      currentPage: page,
      selectedDrinkId: drinkId
    });
  };

  const renderPage = () => {
    switch (appState.currentPage) {
      case 'home':
        return <Home onNavigate={navigate} />;
      case 'morning-routine':
        return <MorningRoutine onNavigate={navigate} />;
      case 'closing-routine':
        return <ClosingRoutine onNavigate={navigate} />;
      case 'drinks-menu':
        return <DrinksMenu onNavigate={navigate} />;
      case 'drink-detail':
        return (
          <DrinkDetail 
            drinkId={appState.selectedDrinkId || ''} 
            onNavigate={navigate} 
          />
        );
      default:
        return <Home onNavigate={navigate} />;
    }
  };

  return (
    <RoutineProvider>
      <DrinksProvider>
        <div className="min-h-screen bg-background">
          {renderPage()}
          <Toaster />
        </div>
      </DrinksProvider>
    </RoutineProvider>
  );
}