import React from 'react';
import { Coffee, Grid, List } from 'lucide-react';
import { Navigation } from '../components/Navigation';
import { SearchAndFilter } from '../components/SearchAndFilter';
import { DrinkCard } from '../components/DrinkCard';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { useDrinks } from '../contexts/DrinksContext';

interface DrinksMenuProps {
  onNavigate: (page: string, drinkId?: string) => void;
}

export function DrinksMenu({ onNavigate }: DrinksMenuProps) {
  const {
    categories,
    searchTerm,
    selectedCategory,
    setSearchTerm,
    setSelectedCategory,
    filteredDrinks
  } = useDrinks();

  const [viewMode, setViewMode] = React.useState<'grid' | 'list'>('grid');

  const handleDrinkClick = (drinkId: string) => {
    onNavigate('drink-detail', drinkId);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation 
        title="Drinks Menu"
        showBackButton
        onBack={() => onNavigate('home')}
        onHome={() => onNavigate('home')}
      />

      <div className="max-w-6xl mx-auto p-4 space-y-6">
        {/* Header */}
        <Card className="bg-gradient-to-r from-blue-50 to-cyan-50 border-blue-200">
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="bg-blue-100 p-2 rounded-lg">
                <Coffee className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h2 className="text-xl font-medium">Complete Recipe Guide</h2>
                <p className="text-sm text-muted-foreground">
                  Click any drink to see detailed preparation steps and notes
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Search and Filter */}
        <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
          <div className="flex-1 max-w-2xl">
            <SearchAndFilter
              searchTerm={searchTerm}
              selectedCategory={selectedCategory}
              categories={categories}
              onSearchChange={setSearchTerm}
              onCategoryChange={setSelectedCategory}
            />
          </div>
          
          {/* View Toggle */}
          <div className="flex items-center gap-2 bg-white rounded-lg p-1 border">
            <Button
              variant={viewMode === 'grid' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setViewMode('grid')}
              className="px-3"
            >
              <Grid className="h-4 w-4" />
            </Button>
            <Button
              variant={viewMode === 'list' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setViewMode('list')}
              className="px-3"
            >
              <List className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Results Info */}
        <div className="flex items-center justify-between">
          <p className="text-sm text-muted-foreground">
            Showing {filteredDrinks.length} drink{filteredDrinks.length !== 1 ? 's' : ''}
            {searchTerm && ` for "${searchTerm}"`}
            {selectedCategory !== 'All' && ` in ${selectedCategory}`}
          </p>
        </div>

        {/* Drinks Grid/List */}
        {filteredDrinks.length === 0 ? (
          <Card className="bg-white">
            <CardContent className="p-12 text-center">
              <Coffee className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="font-medium mb-2">No drinks found</h3>
              <p className="text-sm text-muted-foreground">
                Try adjusting your search terms or category filter
              </p>
            </CardContent>
          </Card>
        ) : (
          <div className={
            viewMode === 'grid' 
              ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'
              : 'space-y-4'
          }>
            {filteredDrinks.map((drink) => (
              <DrinkCard
                key={drink.id}
                drink={drink}
                onClick={handleDrinkClick}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}