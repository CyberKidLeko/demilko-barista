import React from 'react';
import { ArrowLeft, Home } from 'lucide-react';
import { Button } from './ui/button';

interface NavigationProps {
  title: string;
  showBackButton?: boolean;
  onBack?: () => void;
  onHome?: () => void;
}

export function Navigation({ title, showBackButton = false, onBack, onHome }: NavigationProps) {
  return (
    <div className="bg-primary text-primary-foreground p-4 flex items-center justify-between sticky top-0 z-10 shadow-sm">
      <div className="flex items-center gap-3">
        {showBackButton && (
          <Button
            variant="ghost"
            size="sm"
            onClick={onBack}
            className="text-primary-foreground hover:bg-primary/80 p-2"
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
        )}
        <h1 className="text-xl font-medium">{title}</h1>
      </div>
      
      {onHome && (
        <Button
          variant="ghost"
          size="sm"
          onClick={onHome}
          className="text-primary-foreground hover:bg-primary/80 p-2"
        >
          <Home className="h-5 w-5" />
        </Button>
      )}
    </div>
  );
}