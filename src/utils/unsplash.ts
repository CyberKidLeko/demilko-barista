// Utility functions for Unsplash integration
// This is a placeholder - in production you would use the actual Unsplash API

export const getImageUrl = (query: string, width = 400, height = 300) => {
  // Using Unsplash's source API for demo purposes
  const searchQuery = encodeURIComponent(query);
  return `https://source.unsplash.com/${width}x${height}/?${searchQuery}`;
};

export const getDrinkImageUrl = (drinkName: string) => {
  const drinkImageMap: Record<string, string> = {
    'americano': 'coffee-black',
    'flat-white': 'coffee-latte',
    'cappuccino': 'cappuccino-foam',
    'latte': 'coffee-milk',
    'mocha': 'chocolate-coffee',
    'hot-chocolate': 'hot-chocolate',
    'matcha-latte': 'matcha-green-tea',
    'iced-frappe': 'iced-coffee',
    'berry-smoothie': 'berry-smoothie',
    'earl-grey-tea': 'tea-cup',
    'lemon-spritzer': 'lemon-water'
  };

  const query = drinkImageMap[drinkName.toLowerCase().replace(/\s+/g, '-')] || 'coffee';
  return getImageUrl(query);
};