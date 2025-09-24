import React from 'react';
import { Clock, Coffee } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { getDrinkImageUrl } from '../utils/unsplash';

interface Drink {
  id: string;
  name: string;
  category: string;
  image: string;
  description: string;
  ingredients: string[];
  steps: string[];
  notes: string[];
  prep_time: string;
}

interface DrinkCardProps {
  drink: Drink;
  onClick: (drinkId: string) => void;
}

export function DrinkCard({ drink, onClick }: DrinkCardProps) {
  const handleClick = () => {
    onClick(drink.id);
  };

  return (
    <Card 
      className="cursor-pointer transition-all duration-200 hover:shadow-lg hover:scale-[1.02] bg-white border border-gray-200"
      onClick={handleClick}
    >
      <CardContent className="p-0">
        <div className="aspect-[4/3] relative overflow-hidden rounded-t-lg">
          <ImageWithFallback
            src={getDrinkImageUrl(drink.name)}
            alt={drink.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-2 right-2">
            <Badge variant="secondary" className="bg-white/90 text-gray-700">
              {drink.category}
            </Badge>
          </div>
        </div>
        
        <div className="p-4">
          <div className="flex items-start justify-between mb-2">
            <h3 className="font-medium text-lg">{drink.name}</h3>
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <Clock className="h-4 w-4" />
              {drink.prep_time}
            </div>
          </div>
          
          <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
            {drink.description}
          </p>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <Coffee className="h-4 w-4" />
              {drink.ingredients.length} ingredients
            </div>
            
            {drink.notes.length > 0 && (
              <Badge variant="outline" className="text-xs">
                {drink.notes.length} note{drink.notes.length > 1 ? 's' : ''}
              </Badge>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}