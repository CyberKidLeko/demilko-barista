import React from 'react';
import { Coffee, Sun, Moon, StickyNote, CheckCircle, Clock } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { useRoutine } from '../contexts/RoutineContext';
import useLocalStorage from '../hooks/useLocalStorage';

interface HomeProps {
  onNavigate: (page: string) => void;
}

export function Home({ onNavigate }: HomeProps) {
  const { getCompletionPercentage } = useRoutine();
  const [quickNotes, setQuickNotes] = useLocalStorage<string[]>('barista-quick-notes', [
    'Ask Americano customers: milk or black?',
    'Iced Flat White needs cold milk and ice',
    'Check matcha powder levels daily'
  ]);

  const morningProgress = getCompletionPercentage('morning');
  const closingProgress = getCompletionPercentage('closing');

  const menuItems = [
    {
      id: 'morning',
      title: 'Morning Routine',
      description: 'Opening checklist and preparation tasks',
      icon: Sun,
      color: 'bg-amber-100 hover:bg-amber-200 border-amber-200',
      iconColor: 'text-amber-600',
      progress: morningProgress,
      onClick: () => onNavigate('morning-routine')
    },
    {
      id: 'drinks',
      title: 'Drinks Menu',
      description: 'Complete recipe guide and preparation steps',
      icon: Coffee,
      color: 'bg-blue-100 hover:bg-blue-200 border-blue-200',
      iconColor: 'text-blue-600',
      onClick: () => onNavigate('drinks-menu')
    },
    {
      id: 'closing',
      title: 'Closing Routine',
      description: 'End-of-day cleanup and shutdown tasks',
      icon: Moon,
      color: 'bg-purple-100 hover:bg-purple-200 border-purple-200',
      iconColor: 'text-purple-600',
      progress: closingProgress,
      onClick: () => onNavigate('closing-routine')
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-primary text-primary-foreground p-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl font-medium mb-2">Barista POS Training</h1>
          <p className="text-primary-foreground/80">Your complete guide to coffee preparation and daily routines</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto p-6 space-y-6">
        {/* Main Menu Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <Card 
                key={item.id}
                className={`cursor-pointer transition-all duration-200 hover:shadow-md ${item.color} border-2`}
                onClick={item.onClick}
              >
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <Icon className={`h-8 w-8 ${item.iconColor}`} />
                    {item.progress !== undefined && (
                      <Badge variant="secondary" className="bg-white/80">
                        {item.progress}%
                      </Badge>
                    )}
                  </div>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-sm text-muted-foreground mb-3">
                    {item.description}
                  </p>
                  {item.progress !== undefined && (
                    <div className="w-full bg-white/50 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full transition-all duration-300 ${
                          item.id === 'morning' ? 'bg-amber-500' : 'bg-purple-500'
                        }`}
                        style={{ width: `${item.progress}%` }}
                      />
                    </div>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Quick Notes Section */}
        <Card className="bg-white">
          <CardHeader>
            <div className="flex items-center gap-2">
              <StickyNote className="h-5 w-5 text-yellow-600" />
              <CardTitle className="text-lg">Quick Notes & Reminders</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {quickNotes.map((note, index) => (
                <div key={index} className="flex items-start gap-3 p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                  <CheckCircle className="h-4 w-4 text-yellow-600 mt-0.5 flex-shrink-0" />
                  <p className="text-sm">{note}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 gap-4">
          <Card className="bg-white">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="bg-green-100 p-2 rounded-lg">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Morning Progress</p>
                  <p className="font-medium">{morningProgress}% Complete</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-white">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="bg-blue-100 p-2 rounded-lg">
                  <Clock className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Closing Progress</p>
                  <p className="font-medium">{closingProgress}% Complete</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}