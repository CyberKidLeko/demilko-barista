import React, { createContext, useContext, ReactNode, useState } from 'react';
import { drinksData } from '../data/drinks';

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

interface DrinksContextType {
  drinks: Drink[];
  categories: string[];
  searchTerm: string;
  selectedCategory: string;
  setSearchTerm: (term: string) => void;
  setSelectedCategory: (category: string) => void;
  filteredDrinks: Drink[];
  getDrinkById: (id: string) => Drink | undefined;
}

const DrinksContext = createContext<DrinksContextType | undefined>(undefined);

export function DrinksProvider({ children }: { children: ReactNode }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const drinks = drinksData;
  const categories = ['All', ...Array.from(new Set(drinks.map(drink => drink.category)))];

  const filteredDrinks = drinks.filter(drink => {
    const matchesSearch = drink.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         drink.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || drink.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getDrinkById = (id: string) => {
    return drinks.find(drink => drink.id === id);
  };

  const value = {
    drinks,
    categories,
    searchTerm,
    selectedCategory,
    setSearchTerm,
    setSelectedCategory,
    filteredDrinks,
    getDrinkById
  };

  return (
    <DrinksContext.Provider value={value}>
      {children}
    </DrinksContext.Provider>
  );
}

export function useDrinks() {
  const context = useContext(DrinksContext);
  if (context === undefined) {
    throw new Error('useDrinks must be used within a DrinksProvider');
  }
  return context;
}