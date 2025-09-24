export const drinksData = [
  // ESPRESSO BASED DRINKS
  {
    id: "1",
    name: "Espresso",
    category: "Espresso Based Drinks",
    price: "R 25",
    image: "coffee-espresso",
    description: "Double shot espresso",
    ingredients: [
      "2 shots espresso"
    ],
    steps: [
      "Pull 2 shots of espresso into cup",
      "Serve immediately"
    ],
    notes: [
      "Served with a double shot espresso",
      "⭐ Decaf: hit extract button twice, use red cap",
      "Extra espresso shot available for R10"
    ],
    prep_time: "1 minute"
  },
  {
    id: "2",
    name: "Americano",
    category: "Espresso Based Drinks",
    price: "R 27",
    image: "coffee-americano",
    description: "Double shot espresso with hot water",
    ingredients: [
      "2 shots espresso",
      "6-8 oz hot water"
    ],
    steps: [
      "Pull 2 shots of espresso into cup",
      "Add 6-8 oz of hot water",
      "Stir gently"
    ],
    notes: [
      "⭐ ALWAYS ask customer: milk or black?",
      "Served with a double shot espresso",
      "Can be made iced"
    ],
    prep_time: "2 minutes"
  },
  {
    id: "3",
    name: "Cortado",
    category: "Espresso Based Drinks",
    price: "R 28",
    image: "coffee-cortado",
    description: "Equal parts espresso and steamed milk",
    ingredients: [
      "2 shots espresso",
      "2 oz steamed milk"
    ],
    steps: [
      "Pull 2 shots of espresso into small glass",
      "Steam milk to 140°F",
      "Pour steamed milk into espresso in equal parts"
    ],
    notes: [
      "Served with a double shot espresso",
      "Traditional Spanish coffee drink"
    ],
    prep_time: "3 minutes"
  },
  {
    id: "4",
    name: "Flat White",
    category: "Espresso Based Drinks",
    price: "R 30",
    image: "coffee-flat-white",
    description: "Double shot with steamed milk and microfoam",
    ingredients: [
      "2 shots espresso",
      "5-6 oz steamed milk",
      "Thin layer microfoam"
    ],
    steps: [
      "Pull 2 shots of espresso into cup",
      "Steam milk to 140-150°F with microfoam",
      "Pour steamed milk into espresso",
      "Create latte art if desired"
    ],
    notes: [
      "Microfoam should be silky and smooth",
      "For iced version: Scoop foam up on top!",
      "Served with a double shot espresso"
    ],
    prep_time: "3 minutes"
  },
  {
    id: "5",
    name: "Latté/Cappuccino",
    category: "Espresso Based Drinks",
    price: "R 35",
    image: "coffee-latte",
    description: "Espresso with steamed milk",
    ingredients: [
      "2 shots espresso",
      "6-8 oz steamed milk",
      "Milk foam"
    ],
    steps: [
      "Pull 2 shots of espresso into cup",
      "Steam milk to 140-150°F",
      "Pour steamed milk into espresso",
      "Add foam on top for cappuccino style",
      "Create latte art"
    ],
    notes: [
      "Served with a double shot espresso",
      "Can add flavored syrups",
      "Almond milk additional R15",
      "Lactose free milk additional R5"
    ],
    prep_time: "3 minutes"
  },
  {
    id: "6",
    name: "Flavoured Lattés",
    category: "Espresso Based Drinks",
    price: "R 40",
    image: "flavoured-latte",
    description: "Hazelnut, vanilla, salted caramel, matcha, blonde mocha, nutella",
    ingredients: [
      "2 shots espresso",
      "1½ pumps flavour syrup",
      "6-8 oz steamed milk",
      "Milk foam"
    ],
    steps: [
      "Add 1½ pumps of chosen flavour syrup to cup",
      "Pull 2 shots of espresso",
      "Steam milk to 140-150°F",
      "Pour steamed milk into espresso",
      "Add foam on top",
      "Create latte art"
    ],
    notes: [
      "Flavour syrup: 1½ pumps",
      "Available flavours: Hazelnut, vanilla, salted caramel, matcha, blonde mocha, nutella",
      "Almond milk additional R15",
      "Lactose free milk additional R5"
    ],
    prep_time: "3 minutes"
  },
  {
    id: "7",
    name: "Boere Latté",
    category: "Espresso Based Drinks",
    price: "R 40",
    image: "boere-latte",
    description: "Traditional latte with condensed milk",
    ingredients: [
      "2 shots espresso",
      "1 teaspoon condensed milk",
      "6-8 oz steamed milk",
      "Milk foam"
    ],
    steps: [
      "Add 1 teaspoon condensed milk to cup",
      "Pull 2 shots of espresso",
      "Steam milk to 140-150°F",
      "Pour steamed milk into espresso",
      "Add foam on top",
      "Create latte art"
    ],
    notes: [
      "1 teaspoon condensed milk + normal latte preparation",
      "Traditional South African style"
    ],
    prep_time: "3 minutes"
  },

  // ICED COFFEES
  {
    id: "8",
    name: "Iced Americano",
    category: "Iced Coffees",
    price: "R 30",
    image: "iced-americano",
    description: "Double shot espresso based iced coffee",
    ingredients: [
      "2 shots espresso",
      "6-8 oz cold water",
      "Ice"
    ],
    steps: [
      "Pull 2 shots of espresso",
      "Fill glass with ice",
      "Add cold water",
      "Pour espresso over ice",
      "Stir gently"
    ],
    notes: [
      "Double shot espresso based",
      "⭐ ALWAYS ask customer: milk or black?"
    ],
    prep_time: "2 minutes"
  },
  {
    id: "9",
    name: "Iced Flat White",
    category: "Iced Coffees",
    price: "R 35",
    image: "iced-flat-white",
    description: "Double shot espresso based iced coffee with milk",
    ingredients: [
      "2 shots espresso",
      "5-6 oz cold milk",
      "Ice",
      "Milk foam"
    ],
    steps: [
      "Pull 2 shots of espresso",
      "Fill glass with ice",
      "Add cold milk",
      "Pour espresso over ice and milk",
      "Scoop foam up on top!"
    ],
    notes: [
      "⭐ Scoop foam up on top!",
      "Double shot espresso based"
    ],
    prep_time: "3 minutes"
  },
  {
    id: "10",
    name: "Iced Latté",
    category: "Iced Coffees",
    price: "R 40",
    image: "iced-latte",
    description: "Double shot espresso based iced latte",
    ingredients: [
      "2 shots espresso",
      "6-8 oz cold milk",
      "Ice"
    ],
    steps: [
      "Pull 2 shots of espresso",
      "Fill glass with ice",
      "Add cold milk",
      "Pour espresso over ice and milk",
      "Stir gently"
    ],
    notes: [
      "Double shot espresso based",
      "Can add flavored syrups"
    ],
    prep_time: "3 minutes"
  },
  {
    id: "11",
    name: "Flavoured Iced Lattés",
    category: "Iced Coffees",
    price: "R 43",
    image: "flavoured-iced-latte",
    description: "Hazelnut, vanilla, salted caramel, mocha, blonde mocha, nutella, boere",
    ingredients: [
      "2 shots espresso",
      "1½ pumps flavour syrup",
      "6-8 oz cold milk",
      "Ice"
    ],
    steps: [
      "Add 1½ pumps of chosen flavour syrup to glass",
      "Pull 2 shots of espresso",
      "Fill glass with ice",
      "Add cold milk",
      "Pour espresso over ice and milk",
      "Stir well"
    ],
    notes: [
      "Flavour syrup: 1½ pumps",
      "Available flavours: Hazelnut, vanilla, salted caramel, mocha, blonde mocha, nutella, boere"
    ],
    prep_time: "3 minutes"
  },

  // FRAPPÉS AND ICED DRINKS
  {
    id: "12",
    name: "Fudge Cookie Frappé",
    category: "Frappés and Iced Drinks",
    price: "R 37",
    image: "fudge-cookie-frappe",
    description: "Blended ice & milk",
    ingredients: [
      "4 scoops milk",
      "2 scoops fudge cookie powder",
      "Full cup ice"
    ],
    steps: [
      "Add 4 scoops milk to blender",
      "Add 2 scoops fudge cookie powder",
      "Fill with ice (full cup)",
      "Blend until smooth and thick",
      "Pour into glass"
    ],
    notes: [
      "No vanilla in frappes",
      "Full cup of ice is essential",
      "Frappé: Blended ice & milk"
    ],
    prep_time: "4 minutes"
  },
  {
    id: "13",
    name: "Peanut Butter Frappé",
    category: "Frappés and Iced Drinks",
    price: "R 37",
    image: "peanut-butter-frappe",
    description: "Blended ice & milk",
    ingredients: [
      "4 scoops milk",
      "1 scoop milkshake base powder",
      "2 scoops peanut butter powder",
      "Full cup ice"
    ],
    steps: [
      "Add 4 scoops milk to blender",
      "Add 1 scoop milkshake base powder",
      "Add 2 scoops peanut butter powder",
      "Fill with ice (full cup)",
      "Blend until smooth and thick",
      "Pour into glass"
    ],
    notes: [
      "1 scoop milkshake base powder for all non-cookie frappes",
      "Full cup of ice is essential",
      "Frappé: Blended ice & milk"
    ],
    prep_time: "4 minutes"
  },
  {
    id: "14",
    name: "Iced Chocolate",
    category: "Frappés and Iced Drinks",
    price: "R 40",
    image: "iced-chocolate",
    description: "Dark, white, top deck chocolate iced drink",
    ingredients: [
      "2-3 scoops chocolate powder",
      "Cold milk",
      "Ice",
      "Whipped cream",
      "Chocolate sprinkles"
    ],
    steps: [
      "Add chocolate powder to glass",
      "Add small amount of milk and stir to make paste",
      "Fill glass with ice",
      "Add cold milk",
      "Top with whipped cream",
      "Garnish with chocolate sprinkles"
    ],
    notes: [
      "Available in dark, white, or top deck chocolate",
      "Ice cubes, milk based drink"
    ],
    prep_time: "3 minutes"
  },
  {
    id: "15",
    name: "Iced Chai Latté",
    category: "Frappés and Iced Drinks",
    price: "R 45",
    image: "iced-chai-latte",
    description: "Spiced chai tea served cold",
    ingredients: [
      "3 scoops chai powder",
      "Cold milk",
      "Ice",
      "Cinnamon sprinkle"
    ],
    steps: [
      "Add 3 scoops chai powder to glass",
      "Add small amount of cold milk to make paste",
      "Fill glass with ice",
      "Add cold milk",
      "Stir well",
      "Top with cinnamon sprinkle"
    ],
    notes: [
      "Use cold milk instead of warm for iced version"
    ],
    prep_time: "3 minutes"
  },
  {
    id: "16",
    name: "Whey Booster Frappé",
    category: "Frappés and Iced Drinks",
    price: "R 55",
    image: "whey-booster-frappe",
    description: "Blended ice, milk, peanut butter, vanilla & whey protein",
    ingredients: [
      "4 scoops milk",
      "Peanut butter",
      "1 scoop vanilla",
      "1 scoop whey protein",
      "Full cup ice"
    ],
    steps: [
      "Add 4 scoops milk to blender",
      "Add peanut butter",
      "Add 1 scoop vanilla",
      "Add 1 scoop whey protein",
      "Fill with ice (full cup)",
      "Blend until smooth and thick"
    ],
    notes: [
      "Contains whey protein for fitness enthusiasts",
      "High protein content"
    ],
    prep_time: "4 minutes"
  },
  {
    id: "17",
    name: "Green Queen Crusher Frappé",
    category: "Frappés and Iced Drinks",
    price: "R 65",
    image: "green-queen-frappe",
    description: "Celery, cucumber, pineapple, kale, spinach & vanilla blended with milk",
    ingredients: [
      "Celery",
      "Cucumber",
      "Pineapple",
      "Kale",
      "Spinach",
      "1 scoop vanilla",
      "4 scoops milk",
      "Ice"
    ],
    steps: [
      "Add all vegetables and fruit to blender",
      "Add 1 scoop vanilla",
      "Add 4 scoops milk",
      "Add ice",
      "Blend until smooth",
      "Pour into glass"
    ],
    notes: [
      "Healthy green smoothie option",
      "Packed with nutrients"
    ],
    prep_time: "5 minutes"
  },
  {
    id: "17a",
    name: "Dark Chocolate Frappé",
    category: "Frappés and Iced Drinks",
    price: "R 37",
    image: "dark-choc-frappe",
    description: "Blended ice & milk chocolate drink",
    ingredients: [
      "4 scoops milk",
      "1 scoop milkshake base powder",
      "3 scoops dark chocolate powder",
      "Full cup ice"
    ],
    steps: [
      "Add 4 scoops milk to blender",
      "Add 1 scoop milkshake base powder",
      "Add 3 scoops dark chocolate powder",
      "Fill with ice (full cup)",
      "Blend until smooth and thick",
      "Pour into glass"
    ],
    notes: [
      "Dark choc frappe: 3 scoops dark chocolate",
      "1 scoop milkshake base powder",
      "Frappé: Blended ice & milk"
    ],
    prep_time: "4 minutes"
  },
  {
    id: "17b",
    name: "White Chocolate Frappé",
    category: "Frappés and Iced Drinks",
    price: "R 37",
    image: "white-choc-frappe",
    description: "Blended ice & milk chocolate drink",
    ingredients: [
      "4 scoops milk",
      "1 scoop milkshake base powder",
      "2 scoops white chocolate powder",
      "Full cup ice"
    ],
    steps: [
      "Add 4 scoops milk to blender",
      "Add 1 scoop milkshake base powder",
      "Add 2 scoops white chocolate powder",
      "Fill with ice (full cup)",
      "Blend until smooth and thick",
      "Pour into glass"
    ],
    notes: [
      "White choc frappe: 2 scoops white chocolate",
      "1 scoop milkshake base powder",
      "Frappé: Blended ice & milk"
    ],
    prep_time: "4 minutes"
  },
  {
    id: "17c",
    name: "Top Deck Frappé",
    category: "Frappés and Iced Drinks",
    price: "R 37",
    image: "top-deck-frappe",
    description: "Blended ice & milk chocolate drink",
    ingredients: [
      "4 scoops milk",
      "1 scoop milkshake base powder",
      "2 scoops dark chocolate powder",
      "1 scoop white chocolate powder",
      "Full cup ice"
    ],
    steps: [
      "Add 4 scoops milk to blender",
      "Add 1 scoop milkshake base powder",
      "Add 2 scoops dark chocolate powder",
      "Add 1 scoop white chocolate powder",
      "Fill with ice (full cup)",
      "Blend until smooth and thick",
      "Pour into glass"
    ],
    notes: [
      "Top deck frappe: 2 dark + 1 white chocolate scoops",
      "1 scoop milkshake base powder",
      "Frappé: Blended ice & milk"
    ],
    prep_time: "4 minutes"
  },

  // FRUITY SMOOTHIES
  {
    id: "18",
    name: "Mango Smoothie",
    category: "Fruity Smoothies",
    price: "R 42",
    image: "mango-smoothie",
    description: "Blended ice, milk & fruit purees",
    ingredients: [
      "1 scoop vanilla",
      "1½ scoops mango syrup",
      "4 scoops milk",
      "Ice"
    ],
    steps: [
      "Add 1 scoop vanilla to blender",
      "Add 1½ scoops mango syrup",
      "Add 4 scoops milk",
      "Add ice",
      "Blend until smooth",
      "Pour into glass"
    ],
    notes: [
      "Smoothie recipe: 1 scoop vanilla, 1½ scoop syrup, 4 scoops milk",
      "Blended ice, milk & fruit purees"
    ],
    prep_time: "3 minutes"
  },
  {
    id: "19",
    name: "Strawberry Smoothie",
    category: "Fruity Smoothies",
    price: "R 42",
    image: "strawberry-smoothie",
    description: "Blended ice, milk & fruit purees",
    ingredients: [
      "1 scoop vanilla",
      "1½ scoops strawberry syrup",
      "4 scoops milk",
      "Ice"
    ],
    steps: [
      "Add 1 scoop vanilla to blender",
      "Add 1½ scoops strawberry syrup",
      "Add 4 scoops milk",
      "Add ice",
      "Blend until smooth",
      "Pour into glass"
    ],
    notes: [
      "Smoothie recipe: 1 scoop vanilla, 1½ scoop syrup, 4 scoops milk",
      "Blended ice, milk & fruit purees"
    ],
    prep_time: "3 minutes"
  },
  {
    id: "20",
    name: "Mixed Berries Smoothie",
    category: "Fruity Smoothies",
    price: "R 42",
    image: "mixed-berries-smoothie",
    description: "Blended ice, milk & fruit purees",
    ingredients: [
      "1 scoop vanilla",
      "1½ scoops mixed berries syrup",
      "4 scoops milk",
      "Ice"
    ],
    steps: [
      "Add 1 scoop vanilla to blender",
      "Add 1½ scoops mixed berries syrup",
      "Add 4 scoops milk",
      "Add ice",
      "Blend until smooth",
      "Pour into glass"
    ],
    notes: [
      "Smoothie recipe: 1 scoop vanilla, 1½ scoop syrup, 4 scoops milk",
      "Blended ice, milk & fruit purees"
    ],
    prep_time: "3 minutes"
  },
  {
    id: "21",
    name: "Litchi Smoothie",
    category: "Fruity Smoothies",
    price: "R 50",
    image: "litchi-smoothie",
    description: "Blended ice, milk & fruit purees",
    ingredients: [
      "3 scoops milk",
      "4 litchi",
      "Little litchi syrup",
      "1 scoop vanilla",
      "Ice"
    ],
    steps: [
      "Add 3 scoops milk to blender",
      "Add 4 fresh litchi",
      "Add little litchi syrup",
      "Add 1 scoop vanilla",
      "Add ice",
      "Blend until smooth",
      "Pour into glass"
    ],
    notes: [
      "Special recipe: 3 scoops milk, 4 litchi, little syrup, 1 scoop vanilla",
      "Uses fresh litchi fruit"
    ],
    prep_time: "4 minutes"
  },
  {
    id: "22",
    name: "Lemon Julius",
    category: "Fruity Smoothies",
    price: "R 50",
    image: "lemon-julius",
    description: "Lemon, fresh mint and vanilla",
    ingredients: [
      "1 scoop vanilla",
      "1½ scoops lemon syrup",
      "4 fresh mint leaves",
      "4 scoops milk",
      "Ice"
    ],
    steps: [
      "Add 1 scoop vanilla to blender",
      "Add 1½ scoops lemon syrup",
      "Add 4 fresh mint leaves",
      "Add 4 scoops milk",
      "Add ice",
      "Blend until smooth",
      "Pour into glass"
    ],
    notes: [
      "⭐ 4 fresh mint leaves essential",
      "Lemon, fresh mint and vanilla combination"
    ],
    prep_time: "3 minutes"
  },

  // SMOOTHIE BOWLS
  {
    id: "23",
    name: "Merry Berry Bowl",
    category: "Smoothie Bowls",
    price: "R 65",
    image: "merry-berry-bowl",
    description: "Mixed frozen berries & plain yogurt topped with seasonal fruit",
    ingredients: [
      "Mixed frozen berries",
      "Plain yogurt",
      "Seasonal fruit for topping"
    ],
    steps: [
      "Blend frozen berries with plain yogurt until thick",
      "Pour into bowl",
      "Top with seasonal fresh fruit",
      "Serve immediately"
    ],
    notes: [
      "Mixed frozen berries & plain yogurt topped with seasonal fruit",
      "Thick consistency for bowl presentation"
    ],
    prep_time: "4 minutes"
  },
  {
    id: "24",
    name: "Mango & Banana Bowl",
    category: "Smoothie Bowls",
    price: "R 65",
    image: "mango-banana-bowl",
    description: "Frozen mango, banana & plain yogurt topped with seasonal fruit",
    ingredients: [
      "Frozen mango",
      "Frozen banana",
      "Plain yogurt",
      "Seasonal fruit for topping"
    ],
    steps: [
      "Blend frozen mango and banana with plain yogurt until thick",
      "Pour into bowl",
      "Top with seasonal fresh fruit",
      "Serve immediately"
    ],
    notes: [
      "Frozen mango, banana & plain yogurt topped with seasonal fruit",
      "Thick consistency for bowl presentation"
    ],
    prep_time: "4 minutes"
  },
  {
    id: "25",
    name: "Litchi Bowl",
    category: "Smoothie Bowls",
    price: "R 75",
    image: "litchi-bowl",
    description: "Frozen litchi & plain yogurt topped with seasonal fruit",
    ingredients: [
      "Frozen litchi",
      "Plain yogurt",
      "Seasonal fruit for topping"
    ],
    steps: [
      "Blend frozen litchi with plain yogurt until thick",
      "Pour into bowl",
      "Top with seasonal fresh fruit",
      "Serve immediately"
    ],
    notes: [
      "Frozen litchi & plain yogurt topped with seasonal fruit",
      "Premium fruit bowl option"
    ],
    prep_time: "4 minutes"
  },
  {
    id: "26",
    name: "Protein Energizer Bowl",
    category: "Smoothie Bowls",
    price: "R 75",
    image: "protein-energizer-bowl",
    description: "Smoothie bowl made with peanut butter & whey protein, yogurt, frozen banana & muesli topped with seasonal fruit",
    ingredients: [
      "Peanut butter",
      "1 scoop whey protein",
      "Plain yogurt",
      "Frozen banana",
      "Muesli",
      "Seasonal fruit for topping"
    ],
    steps: [
      "Blend peanut butter, whey protein, yogurt and frozen banana until thick",
      "Pour into bowl",
      "Top with muesli",
      "Add seasonal fresh fruit",
      "Serve immediately"
    ],
    notes: [
      "High protein option for fitness enthusiasts",
      "Contains whey protein and peanut butter"
    ],
    prep_time: "5 minutes"
  },

  // OTHER HOT DRINKS
  {
    id: "27",
    name: "Tea",
    category: "Other Hot Drinks",
    price: "R 22",
    image: "tea",
    description: "Rooibos, Ceylon, Earl Grey, Green",
    ingredients: [
      "1 tea bag (chosen variety)",
      "8 oz hot water",
      "Milk (optional)",
      "Honey"
    ],
    steps: [
      "Heat water to appropriate temperature",
      "Place tea bag in cup",
      "Pour hot water over tea bag",
      "Leave tea bag in cup",
      "Serve with honey on the side",
      "Add milk if requested"
    ],
    notes: [
      "⭐ ALWAYS ask customer: with milk or black?",
      "Available: Rooibos, Ceylon, Earl Grey, Green",
      "Don't remove tea bags - leave in cup",
      "⭐ Always comes with honey"
    ],
    prep_time: "3 minutes"
  },
  {
    id: "28",
    name: "Red Cappuccino",
    category: "Other Hot Drinks",
    price: "R 35",
    image: "red-cappuccino",
    description: "Rooibos tea prepared cappuccino style",
    ingredients: [
      "Rooibos tea concentrate",
      "Steamed milk",
      "Milk foam",
      "Cinnamon (optional)"
    ],
    steps: [
      "Brew strong rooibos tea concentrate",
      "Steam milk to 140°F",
      "Pour tea concentrate into cup",
      "Add steamed milk",
      "Top with milk foam",
      "Dust with cinnamon if requested"
    ],
    notes: [
      "Caffeine-free alternative to coffee",
      "Traditional South African drink"
    ],
    prep_time: "4 minutes"
  },
  {
    id: "29",
    name: "Hot Chocolate",
    category: "Other Hot Drinks",
    price: "R 40",
    image: "hot-chocolate",
    description: "Dark, white, top deck chocolate",
    ingredients: [
      "3 scoops dark chocolate powder OR 2 scoops white chocolate powder",
      "Warm milk",
      "Chocolate sprinkles",
      "Marshmallows"
    ],
    steps: [
      "Add chocolate powder to cup (3 scoops dark OR 2 scoops white)",
      "Add small amount of warm milk to make paste",
      "Steam milk to 140°F",
      "Pour steamed milk into cup",
      "Stir well",
      "Top with chocolate sprinkles and marshmallows"
    ],
    notes: [
      "Dark: 3 scoops, White: 2 scoops",
      "⭐ NO espresso in hot chocolate",
      "Always include chocolate sprinkles and marshmallows"
    ],
    prep_time: "3 minutes"
  },
  {
    id: "30",
    name: "Chai Latté",
    category: "Other Hot Drinks",
    price: "R 45",
    image: "chai-latte",
    description: "Spiced chai tea with steamed milk",
    ingredients: [
      "2 scoops chai powder",
      "Little hot water",
      "Warm milk",
      "Cinnamon sprinkle"
    ],
    steps: [
      "Add 2 scoops chai powder to cup",
      "Add little hot water to make paste",
      "Steam milk to 140°F",
      "Pour steamed milk into cup",
      "Stir well",
      "Top with cinnamon sprinkle",
      "Use red cap"
    ],
    notes: [
      "2 scoops chai powder, little water, warm milk",
      "⭐ Don't forget cinnamon sprinkle and red cap",
      "Traditional spiced tea blend"
    ],
    prep_time: "4 minutes"
  },
  {
    id: "32",
    name: "Matcha Latté",
    category: "Other Hot Drinks",
    price: "R 45",
    image: "matcha-latte",
    description: "Japanese green tea powder with steamed milk",
    ingredients: [
      "2 scoops matcha powder",
      "Little hot water",
      "Warm milk"
    ],
    steps: [
      "Add 2 scoops matcha powder to cup",
      "Add little hot water",
      "Whisk to create smooth paste",
      "Steam milk to 140°F",
      "Pour steamed milk slowly into cup",
      "Create latte art if desired"
    ],
    notes: [
      "2 scoops matcha, little water, warm milk",
      "Whisk matcha thoroughly to avoid lumps"
    ],
    prep_time: "4 minutes"
  },
  {
    id: "33",
    name: "Dark Chocolate Mocha",
    category: "Other Hot Drinks",
    price: "R 40",
    image: "dark-mocha",
    description: "Dark chocolate and espresso combination",
    ingredients: [
      "2 scoops dark chocolate powder",
      "1 shot espresso",
      "Steamed milk",
      "Marshmallows"
    ],
    steps: [
      "Add 2 scoops dark chocolate powder to cup",
      "Pull 1 shot espresso",
      "Stir chocolate and espresso together",
      "Steam milk to 140°F",
      "Pour steamed milk into cup",
      "Top with marshmallows"
    ],
    notes: [
      "2 dark chocolate scoops, espresso, marshmallows",
      "Perfect combination of coffee and chocolate"
    ],
    prep_time: "4 minutes"
  },
  {
    id: "34",
    name: "Blonde Mocha",
    category: "Other Hot Drinks",
    price: "R 40",
    image: "blonde-mocha",
    description: "White chocolate and espresso combination",
    ingredients: [
      "2 scoops white chocolate powder",
      "1 shot espresso",
      "Steamed milk",
      "Marshmallows"
    ],
    steps: [
      "Add 2 scoops white chocolate powder to cup",
      "Pull 1 shot espresso",
      "Stir chocolate and espresso together",
      "Steam milk to 140°F",
      "Pour steamed milk into cup",
      "Top with marshmallows"
    ],
    notes: [
      "Blonde mocha: 2 scoops white chocolate, espresso",
      "Milder chocolate flavor than dark mocha"
    ],
    prep_time: "4 minutes"
  },
  {
    id: "34a",
    name: "Top Deck Mocha",
    category: "Other Hot Drinks",
    price: "R 40",
    image: "top-deck-mocha",
    description: "Top deck chocolate and espresso combination",
    ingredients: [
      "2 scoops dark chocolate powder",
      "1 scoop white chocolate powder",
      "1 shot espresso",
      "Steamed milk",
      "Marshmallows"
    ],
    steps: [
      "Add 2 scoops dark chocolate powder to cup",
      "Add 1 scoop white chocolate powder",
      "Pull 1 shot espresso",
      "Stir chocolate and espresso together",
      "Steam milk to 140°F",
      "Pour steamed milk into cup",
      "Top with marshmallows"
    ],
    notes: [
      "Top deck mocha: 2 dark + 1 white chocolate, espresso",
      "Combination of dark and white chocolate flavors"
    ],
    prep_time: "4 minutes"
  },
  {
    id: "35",
    name: "Camo Matcha",
    category: "Other Hot Drinks",
    price: "R 45",
    image: "camo-matcha",
    description: "Matcha with espresso combination",
    ingredients: [
      "2 scoops matcha powder",
      "1 shot espresso",
      "Steamed milk"
    ],
    steps: [
      "Add 2 scoops matcha powder to cup",
      "Pull 1 shot espresso",
      "Add little hot water to matcha",
      "Whisk matcha to smooth paste",
      "Add espresso",
      "Steam milk to 140°F",
      "Pour steamed milk into cup"
    ],
    notes: [
      "2 scoops matcha, espresso, milk",
      "Unique combination of matcha and coffee"
    ],
    prep_time: "4 minutes"
  },
  {
    id: "36",
    name: "Milk Tart Latté",
    category: "Other Hot Drinks",
    price: "R 40",
    image: "milk-tart-latte",
    description: "South African milk tart flavoured drink",
    ingredients: [
      "2 scoops milk tart powder",
      "Espresso (optional)",
      "Steamed milk",
      "Cinnamon sprinkle"
    ],
    steps: [
      "Add 2 scoops milk tart powder to cup",
      "Ask customer if they want it with coffee",
      "If yes, pull 1 shot espresso",
      "Add little warm milk to make paste",
      "Steam milk to 140°F",
      "Pour steamed milk into cup",
      "Top with cinnamon sprinkle"
    ],
    notes: [
      "⭐ Ask if they want it with coffee",
      "2 scoops milk tart powder",
      "Traditional South African flavor"
    ],
    prep_time: "4 minutes"
  },

  // SPRITZERS
  {
    id: "37",
    name: "Kiwi & Mint Tea Spritzer",
    category: "Spritzers",
    price: "R 40",
    image: "kiwi-mint-spritzer",
    description: "Cool & refreshing non-alcoholic drink made with Fitch & Leedes Tonic",
    ingredients: [
      "1½ fresh lemon juice",
      "Double shot kiwi tea concentrate",
      "Single shot kiwi syrup",
      "Indian tonic water",
      "Fresh mint leaves",
      "Ice"
    ],
    steps: [
      "Add 1½ fresh lemon juice to glass",
      "Add double shot kiwi tea concentrate",
      "Add single shot kiwi syrup",
      "Fill glass with ice",
      "Top with Indian tonic water",
      "Garnish with fresh mint leaves on top"
    ],
    notes: [
      "Recipe: 1½ lemon juice, double shot tea flavour, single shot syrup, Indian tonic, mint on top",
      "Cool & refreshing non-alcoholic drink"
    ],
    prep_time: "3 minutes"
  },
  {
    id: "38",
    name: "Ruby Red Grapefruit & Earl Grey Spritzer",
    category: "Spritzers",
    price: "R 40",
    image: "grapefruit-earl-grey-spritzer",
    description: "Cool & refreshing non-alcoholic drink made with Fitch & Leedes Tonic",
    ingredients: [
      "1½ fresh lemon juice",
      "Double shot Earl Grey tea concentrate",
      "Single shot grapefruit syrup",
      "Indian tonic water",
      "Fresh mint leaves",
      "Ice"
    ],
    steps: [
      "Add 1½ fresh lemon juice to glass",
      "Add double shot Earl Grey tea concentrate",
      "Add single shot grapefruit syrup",
      "Fill glass with ice",
      "Top with Indian tonic water",
      "Garnish with fresh mint leaves on top"
    ],
    notes: [
      "Recipe: 1½ lemon juice, double shot tea flavour, single shot syrup, Indian tonic, mint on top",
      "Earl Grey tea base with grapefruit flavor"
    ],
    prep_time: "3 minutes"
  },
  {
    id: "39",
    name: "Mango & Rooibos Spritzer",
    category: "Spritzers",
    price: "R 40",
    image: "mango-rooibos-spritzer",
    description: "Cool & refreshing non-alcoholic drink made with Fitch & Leedes Tonic",
    ingredients: [
      "1½ fresh lemon juice",
      "Double shot Rooibos tea concentrate",
      "Single shot mango syrup",
      "Pink tonic water",
      "Fresh mint leaves",
      "Ice"
    ],
    steps: [
      "Add 1½ fresh lemon juice to glass",
      "Add double shot Rooibos tea concentrate",
      "Add single shot mango syrup",
      "Fill glass with ice",
      "Top with pink tonic water",
      "Garnish with fresh mint leaves on top"
    ],
    notes: [
      "⭐ Use PINK tonic for mango spritzer (not Indian)",
      "Recipe: 1½ lemon juice, double shot tea flavour, single shot syrup, pink tonic, mint on top"
    ],
    prep_time: "3 minutes"
  },

  // OTHER BEVERAGES
  {
    id: "40",
    name: "Still/Sparkling Water",
    category: "Other",
    price: "R 25",
    image: "water",
    description: "Premium bottled water",
    ingredients: ["Bottled water"],
    steps: ["Serve chilled bottled water"],
    notes: ["Available still or sparkling"],
    prep_time: "1 minute"
  },
  {
    id: "41",
    name: "Soda Drinks",
    category: "Other",
    price: "R 25",
    image: "soda",
    description: "Coke, Diet Coke, Zero, Sprite, Sprite Zero, Soda Water",
    ingredients: ["Canned soda drinks"],
    steps: ["Serve chilled can with glass and ice if requested"],
    notes: ["Coke, Diet Coke, Zero, Sprite, Sprite Zero, Soda Water"],
    prep_time: "1 minute"
  },
  {
    id: "42",
    name: "Appletiser/Grapetiser",
    category: "Other",
    price: "R 30",
    image: "appletiser",
    description: "Sparkling fruit drinks",
    ingredients: ["Bottled Appletiser or Grapetiser"],
    steps: ["Serve chilled with glass"],
    notes: ["Available in Apple or Grape flavor"],
    prep_time: "1 minute"
  }
];