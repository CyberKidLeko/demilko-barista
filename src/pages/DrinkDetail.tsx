import React, { useState } from 'react';
import { Clock, Coffee, AlertCircle, CheckCircle, Users } from 'lucide-react';
import { Navigation } from '../components/Navigation';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Checkbox } from '../components/ui/checkbox';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { useDrinks } from '../contexts/DrinksContext';
import useLocalStorage from '../hooks/useLocalStorage';
import { getDrinkImageUrl } from '../utils/unsplash';

interface DrinkDetailProps {
  drinkId: string;
  onNavigate: (page: string) => void;
}

export function DrinkDetail({ drinkId, onNavigate }: DrinkDetailProps) {
  const { getDrinkById } = useDrinks();
  const drink = getDrinkById(drinkId);
  
  const [checkedSteps, setCheckedSteps] = useLocalStorage<string[]>(`drink-steps-${drinkId}`, []);
  const [showInstructions, setShowInstructions] = useState(false);

  if (!drink) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navigation 
          title="Drink Not Found"
          showBackButton
          onBack={() => onNavigate('drinks-menu')}
          onHome={() => onNavigate('home')}
        />
        <div className="max-w-2xl mx-auto p-4">
          <Card className="bg-white">
            <CardContent className="p-12 text-center">
              <Coffee className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="font-medium mb-2">Drink not found</h3>
              <p className="text-sm text-muted-foreground">
                The requested drink recipe could not be found.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  const toggleStep = (stepIndex: number) => {
    const stepId = `step-${stepIndex}`;
    setCheckedSteps(prev => 
      prev.includes(stepId) 
        ? prev.filter(id => id !== stepId)
        : [...prev, stepId]
    );
  };

  const resetSteps = () => {
    setCheckedSteps([]);
  };

  const completedSteps = drink.steps.filter((_, index) => 
    checkedSteps.includes(`step-${index}`)
  ).length;

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation 
        title={drink.name}
        showBackButton
        onBack={() => onNavigate('drinks-menu')}
        onHome={() => onNavigate('home')}
      />

      <div className="max-w-2xl mx-auto p-4 space-y-6">
        {/* Header Card with Image */}
        <Card className="bg-white overflow-hidden">
          <div className="aspect-[16/9] relative">
            <ImageWithFallback
              src={getDrinkImageUrl(drink.name)}
              alt={drink.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <div className="flex items-center gap-2 mb-2">
                <Badge variant="secondary" className="bg-white/20 text-white border-white/20">
                  {drink.category}
                </Badge>
              </div>
              <h1 className="text-2xl font-medium">{drink.name}</h1>
              <p className="text-white/90 mt-1">{drink.description}</p>
            </div>
          </div>
        </Card>

        {/* Quick Info */}
        <div className="grid grid-cols-2 gap-4">
          <Card className="bg-white">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="bg-blue-100 p-2 rounded-lg">
                  <Clock className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Prep Time</p>
                  <p className="font-medium">{drink.prep_time}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="bg-green-100 p-2 rounded-lg">
                  <Users className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Ingredients</p>
                  <p className="font-medium">{drink.ingredients.length} items</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Ingredients */}
        <Card className="bg-white">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Coffee className="h-5 w-5" />
              Ingredients
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {drink.ingredients.map((ingredient, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                  <span>{ingredient}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Preparation Steps */}
        <Card className="bg-white">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5" />
                Preparation Steps
                <Badge variant="outline" className="ml-2">
                  {completedSteps}/{drink.steps.length}
                </Badge>
              </CardTitle>
              <Button variant="outline" size="sm" onClick={resetSteps}>
                Reset
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {drink.steps.map((step, index) => {
                const stepId = `step-${index}`;
                const isChecked = checkedSteps.includes(stepId);
                
                return (
                  <div 
                    key={index} 
                    className={`flex items-start gap-3 p-3 rounded-lg border transition-all duration-200 ${
                      isChecked ? 'bg-green-50 border-green-200' : 'bg-gray-50 border-gray-200'
                    }`}
                  >
                    <Checkbox
                      checked={isChecked}
                      onCheckedChange={() => toggleStep(index)}
                      className="mt-0.5"
                    />
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-sm font-medium text-muted-foreground">
                          Step {index + 1}
                        </span>
                      </div>
                      <p className={`${isChecked ? 'line-through text-muted-foreground' : ''}`}>
                        {step}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* Important Notes */}
        {drink.notes.length > 0 && (
          <Card className="bg-amber-50 border-amber-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-amber-800">
                <AlertCircle className="h-5 w-5" />
                Important Notes
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {drink.notes.map((note, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-amber-500 rounded-full flex-shrink-0 mt-2" />
                    <span className="text-amber-800">{note}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        )}

        {/* Quick Actions */}
        <div className="flex gap-3">
          <Button 
            className="flex-1" 
            onClick={() => onNavigate('drinks-menu')}
            variant="outline"
          >
            Back to Menu
          </Button>
          <Button 
            className="flex-1"
            onClick={resetSteps}
          >
            Start Over
          </Button>
        </div>
      </div>
    </div>
  );
}