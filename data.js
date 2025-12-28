export const MENU_ITEMS = [
    {
        id: 1,
        name: "Truffle Mushroom Risotto",
        price: 24,
        prepTime: 25,
        category: "Italian",
        mood: ["Comfort", "Fancy"],
        image: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?auto=format&fit=crop&w=400&q=80"
    },
    {
        id: 2,
        name: "Spicy Miso Ramen",
        price: 18,
        prepTime: 20,
        category: "Asian",
        mood: ["Stressed", "Cold"],
        image: "https://images.unsplash.com/photo-1591814468924-caf88d1232e1?auto=format&fit=crop&w=400&q=80"
    },
    {
        id: 3,
        name: "Wagyu Beef Burger",
        price: 28,
        prepTime: 15,
        category: "American",
        mood: ["Hungry", "Energetic"],
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=400&q=80"
    },
    {
        id: 4,
        name: "Zen Garden Salad",
        price: 16,
        prepTime: 10,
        category: "Healthy",
        mood: ["Light", "Healthy"],
        image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=400&q=80"
    },
    {
        id: 5,
        name: "Molten Lava Cake",
        price: 12,
        prepTime: 15,
        category: "Dessert",
        mood: ["Sad", "Celebratory"],
        image: "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?auto=format&fit=crop&w=400&q=80"
    }
];

export const MOODS = [
    { id: "Stressed", icon: "ri-thunderstorms-line", color: "#6366f1" },
    { id: "Celebratory", icon: "ri-goblet-line", color: "#ec4899" },
    { id: "Healthy", icon: "ri-leaf-line", color: "#10b981" },
    { id: "Comfort", icon: "ri-cup-line", color: "#f59e0b" }
];

export const RESTAURANT_CONFIG = {
    name: "DineSync Premium",
    coords: { lat: 40.7128, lng: -74.0060 }, // NYC coordinates mock
    basePrepTime: 10, // Base admin delay
    kitchenQueue: 0 // Will mock dynamic
};
