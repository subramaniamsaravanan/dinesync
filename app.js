
// Mock Restaurant Data
const RESTAURANTS = [
    {
        id: "lux-italian",
        name: "La Dolce Vita",
        cuisine: "Italian",
        rating: 4.8,
        prepMultiplier: 1.2,
        image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: "tokyo-bites",
        name: "Sakura Sushi",
        cuisine: "Japanese",
        rating: 4.9,
        prepMultiplier: 1.5,
        image: "https://images.unsplash.com/photo-1579027989536-b7b1f875659b?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: "urban-grill",
        name: "Urban Burger Co.",
        cuisine: "American",
        rating: 4.5,
        prepMultiplier: 0.9,
        image: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: "thai-spice",
        name: "Golden Elephant",
        cuisine: "Thai",
        rating: 4.7,
        prepMultiplier: 1.0,
        image: "https://images.unsplash.com/photo-1559314809-0d155014e29e?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: "morning-brew",
        name: "The Daily Grind",
        cuisine: "Cafe",
        rating: 4.6,
        prepMultiplier: 0.5,
        image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
    }
];

// Updated Menu Items Linked to Restaurants
const MENU_ITEMS = [
    // Italian (La Dolce Vita)
    {
        id: 1,
        restaurantId: "lux-italian",
        name: "Truffle Mushroom Risotto",
        price: 24,
        prepTime: 25,
        category: "Italian",
        mood: ["Comfort", "Fancy"],
        image: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?auto=format&fit=crop&w=400&q=80"
    },
    {
        id: 11,
        restaurantId: "lux-italian",
        name: "Lobster Ravioli",
        price: 32,
        prepTime: 30,
        category: "Italian",
        mood: ["Fancy", "Celebratory"],
        image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=400&q=80"
    },

    // Japanese (Sakura Sushi)
    {
        id: 2,
        restaurantId: "tokyo-bites",
        name: "Spicy Miso Ramen",
        price: 18,
        prepTime: 20,
        category: "Asian",
        mood: ["Stressed", "Cold"],
        image: "https://images.unsplash.com/photo-1591814468924-caf88d1232e1?auto=format&fit=crop&w=400&q=80"
    },
    {
        id: 8,
        restaurantId: "tokyo-bites",
        name: "Sushi Boat Deluxe",
        price: 45,
        prepTime: 25,
        category: "Japanese",
        mood: ["Celebratory", "Fancy"],
        image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=400&q=80"
    },

    // American (Urban Burger Co.)
    {
        id: 3,
        restaurantId: "urban-grill",
        name: "Wagyu Beef Burger",
        price: 28,
        prepTime: 15,
        category: "American",
        mood: ["Hungry", "Energetic"],
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=400&q=80"
    },
    {
        id: 7,
        restaurantId: "urban-grill",
        name: "BBQ Ribs Platter",
        price: 32,
        prepTime: 35,
        category: "American",
        mood: ["Hungry", "Comfort"],
        image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=400&q=80"
    },

    // Healthy (Golden Elephant - mixed for now or make new)
    {
        id: 4,
        restaurantId: "thai-spice", // assigning to Thai for variety or make new
        name: "Zen Garden Salad",
        price: 16,
        prepTime: 10,
        category: "Healthy",
        mood: ["Light", "Healthy"],
        image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=400&q=80"
    },
    {
        id: 9,
        restaurantId: "thai-spice",
        name: "Thai Green Curry",
        price: 20,
        prepTime: 20,
        category: "Asian",
        mood: ["Comfort", "Cold"],
        image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=400&q=80"
    },

    // Cafe (The Daily Grind)
    {
        id: 5,
        restaurantId: "morning-brew",
        name: "Molten Lava Cake",
        price: 12,
        prepTime: 15,
        category: "Dessert",
        mood: ["Sad", "Celebratory"],
        image: "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?auto=format&fit=crop&w=400&q=80"
    },
    {
        id: 6,
        restaurantId: "morning-brew",
        name: "Avocado Toast Royale",
        price: 14,
        prepTime: 8,
        category: "Breakfast",
        mood: ["Healthy", "Light"],
        image: "https://images.unsplash.com/photo-1588137372308-15f75323ca8d?auto=format&fit=crop&w=400&q=80"
    },
    {
        id: 10,
        restaurantId: "morning-brew",
        name: "Double Espresso Shot",
        price: 5,
        prepTime: 3,
        category: "Drinks",
        mood: ["Stressed", "Energetic"],
        image: "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?auto=format&fit=crop&w=400&q=80"
    }
];

const MOODS = [
    { id: "Stressed", icon: "ri-thunderstorms-line", color: "#6366f1" },
    { id: "Celebratory", icon: "ri-goblet-line", color: "#ec4899" },
    { id: "Healthy", icon: "ri-leaf-line", color: "#10b981" },
    { id: "Comfort", icon: "ri-cup-line", color: "#f59e0b" },
    { id: "Hungry", icon: "ri-knife-blood-line", color: "#ef4444" },
    { id: "Energetic", icon: "ri-flashlight-line", color: "#eab308" }
];

// Application Logic
class App {
    constructor() {
        this.state = {
            page: 'home',
            cart: [],
            mood: null,
            selectedRestaurant: null,
            booking: {
                guests: 2,
                time: '19:00',
                date: new Date().toISOString().split('T')[0]
            },
            kitchenLoad: 15,
            userDistance: 12,
            userKm: 4.5
        };

        this.init();
    }

    init() {
        this.setupNavigation();
        this.render();
    }

    setupNavigation() {
        document.querySelectorAll('.nav-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const route = e.currentTarget.dataset.route;
                this.navigate(route);
            });
        });
    }

    navigate(page, params = {}) {
        this.state.page = page;
        if (params.restaurantId) this.state.selectedRestaurant = params.restaurantId;

        // Update Active Nav
        document.querySelectorAll('.nav-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.route === page);
        });

        this.render();
    }

    render() {
        const main = document.getElementById('main-content');
        main.innerHTML = '';

        switch (this.state.page) {
            case 'home':
                main.appendChild(this.renderHome());
                break;
            case 'restaurants':
                main.appendChild(this.renderRestaurants());
                break;
            case 'mood':
                main.appendChild(this.renderMoodSelector());
                break;
            case 'menu':
                main.appendChild(this.renderMenu());
                break;
            case 'status':
                main.appendChild(this.renderStatus());
                break;
            case 'booking':
                main.appendChild(this.renderBooking());
                break;
        }
    }

    renderHome() {
        const container = document.createElement('div');
        container.className = 'home-container';
        container.innerHTML = `
            <div class="hero card" style="text-align:center;">
                <h1 class="text-gradient" style="font-size: 3.5rem; line-height: 1.1; margin-bottom: 20px;">
                    DineSync Platform
                </h1>
                <p style="color: var(--text-muted); font-size: 1.2rem; margin-bottom: 30px;">
                    Synchronized dining across the city's best kitchens.
                </p>
                <div class="grid-2">
                    <button class="btn btn-primary" id="start-mood-btn">
                        <i class="ri-emotion-line"></i> Find Food by Mood
                    </button>
                    <button class="btn btn-outline" id="browse-rest-btn">
                        <i class="ri-store-2-line"></i> Browse Restaurants
                    </button>
                </div>
            </div>
            
            <div class="grid-3" style="margin-top: 30px;">
                <div class="card">
                    <i class="ri-timer-flash-line" style="font-size: 2rem; color: var(--primary);"></i>
                    <h3>Real-Time Sync</h3>
                    <p style="color: var(--text-muted);">Timed arrival for every restaurant.</p>
                </div>
                <div class="card">
                    <i class="ri-home-smile-2-line" style="font-size: 2rem; color: var(--secondary);"></i>
                    <h3>Curated Spots</h3>
                    <p style="color: var(--text-muted);">From fine dining to cozy cafes.</p>
                </div>
                <div class="card">
                    <i class="ri-magic-line" style="font-size: 2rem; color: var(--success);"></i>
                    <h3>Mood Matching</h3>
                    <p style="color: var(--text-muted);">Let your feelings dictate your fork.</p>
                </div>
            </div>
        `;

        container.querySelector('#start-mood-btn').addEventListener('click', () => this.navigate('mood'));
        container.querySelector('#browse-rest-btn').addEventListener('click', () => this.navigate('restaurants'));
        return container;
    }

    renderRestaurants() {
        const container = document.createElement('div');
        container.innerHTML = `<h2 style="margin-bottom: 20px;">Curated Partners</h2><div class="grid-2 rest-grid"></div>`;
        const grid = container.querySelector('.rest-grid');

        RESTAURANTS.forEach(rest => {
            const card = document.createElement('div');
            card.className = 'card';
            card.style.padding = '0';
            card.style.cursor = 'pointer';
            card.className += ' rest-card';

            card.innerHTML = `
                <div style="height: 180px; background-image: url('${rest.image}'); background-size: cover; background-position: center;"></div>
                <div style="padding: 20px;">
                    <div style="display:flex; justify-content:space-between; align-items:center;">
                        <h3>${rest.name}</h3>
                        <span class="badge badge-success">⭐ ${rest.rating}</span>
                    </div>
                    <p style="color: var(--text-muted); margin-top: 5px;">${rest.cuisine}</p>
                </div>
            `;

            card.onclick = () => {
                this.state.mood = null; // Clear mood if picking specific restaurant
                this.navigate('menu', { restaurantId: rest.id });
            };
            grid.appendChild(card);
        });

        return container;
    }

    renderMoodSelector() {
        const container = document.createElement('div');
        container.innerHTML = `
            <div style="margin-bottom: 40px;">
                <h2 style="margin-bottom: 20px;">How are you feeling?</h2>
                <div class="grid-2 mood-grid"></div>
            </div>
            
            <div>
                <h2 style="margin-bottom: 20px;">Trending Dishes</h2>
                <div id="mood-dishes-container"></div>
            </div>
        `;

        const grid = container.querySelector('.mood-grid');

        MOODS.forEach(mood => {
            const btn = document.createElement('button');
            btn.className = 'card mood-card';
            btn.style.textAlign = 'center';
            btn.style.cursor = 'pointer';
            btn.style.border = `1px solid ${mood.color}44`;

            btn.innerHTML = `
                <i class="${mood.icon}" style="font-size: 3rem; color: ${mood.color}; margin-bottom: 15px; display:block;"></i>
                <span style="font-size: 1.2rem; font-weight: 600;">${mood.id}</span>
            `;

            btn.onclick = () => {
                this.state.mood = mood.id;
                this.state.selectedRestaurant = null;
                this.navigate('menu');
            };
            grid.appendChild(btn);
        });

        // Render *all* dishes or a curated list below the moods
        const dishesContainer = container.querySelector('#mood-dishes-container');
        // Show all items, or maybe just random top picks. displaying all for now as requested.
        dishesContainer.appendChild(this.renderDishesGrid(MENU_ITEMS));

        return container;
    }

    renderMenu() {
        const container = document.createElement('div');

        let title = "Menu";
        let subtext = "";

        if (this.state.selectedRestaurant) {
            const rest = RESTAURANTS.find(r => r.id === this.state.selectedRestaurant);
            title = rest.name;
            subtext = rest.cuisine;
        } else if (this.state.mood) {
            title = `Mood: ${this.state.mood}`;
            subtext = "Recommended dishes across all partners";
        }

        let headerHTML = `
            <div style="margin-bottom: 20px;">
                <div style="display:flex; justify-content:space-between; align-items:flex-end;">
                    <div>
                        <h2 style="margin:0;">${title}</h2>
                        <span style="color:var(--text-muted);">${subtext}</span>
                    </div>
                    <div>
                         ${(this.state.mood || this.state.selectedRestaurant) ? `<button class="btn btn-outline" id="clear-filters">Show All</button>` : ''}
                    </div>
                </div>
            </div>`;

        // Filtering
        let items = MENU_ITEMS;
        if (this.state.selectedRestaurant) {
            items = MENU_ITEMS.filter(i => i.restaurantId === this.state.selectedRestaurant);
        } else if (this.state.mood) {
            items = MENU_ITEMS.filter(i => i.mood.includes(this.state.mood));
        }

        container.innerHTML = headerHTML;
        container.appendChild(this.renderDishesGrid(items));

        const cartPreview = this.state.cart.length > 0 ? `
            <div style="position:fixed; bottom: 80px; left:50%; transform:translateX(-50%); 
                        background:var(--primary); padding:15px 30px; border-radius:50px; 
                        box-shadow: 0 10px 30px rgba(79, 70, 229, 0.4); z-index:90; cursor:pointer; display:flex; gap:10px; align-items:center; color: white;"
                 id="view-cart-fab">
                <i class="ri-shopping-bag-3-line"></i>
                <span>${this.state.cart.length} items (₹${this.state.cart.reduce((a, b) => a + b.price, 0)})</span>
            </div>
        ` : '';

        if (cartPreview) {
            const temp = document.createElement('div');
            temp.innerHTML = cartPreview;
            const fab = temp.firstElementChild;
            fab.onclick = () => this.navigate('booking');
            container.appendChild(fab);
        }

        if (this.state.mood || this.state.selectedRestaurant) {
            const clearBtn = container.querySelector('#clear-filters');
            if (clearBtn) clearBtn.onclick = () => {
                this.state.mood = null;
                this.state.selectedRestaurant = null;
                this.navigate('menu');
            };
        }

        return container;
    }

    renderDishesGrid(items) {
        const grid = document.createElement('div');
        grid.className = 'grid-3';

        if (items.length === 0) {
            grid.innerHTML = `<div style="grid-column: 1/-1; text-align: center; color: var(--text-muted); padding: 40px;">No dishes found matching criteria.</div>`;
            return grid;
        }

        items.forEach(item => {
            // Find restaurant info for item
            const rest = RESTAURANTS.find(r => r.id === item.restaurantId);

            const itemCard = document.createElement('div');
            itemCard.className = 'card';
            itemCard.style.padding = '0';
            itemCard.style.overflow = 'hidden';

            itemCard.innerHTML = `
                <div style="height: 200px; background-image: url('${item.image}'); background-size: cover; background-position: center;"></div>
                <div style="padding: 20px;">
                    <div style="display:flex; justify-content:space-between; margin-bottom: 10px;">
                        <small style="color:var(--primary); font-weight:700;">${rest ? rest.name : ''}</small>
                        <span class="badge badge-warning"><i class="ri-time-line"></i> ${item.prepTime}m</span>
                    </div>
                    <h3 style="margin-bottom: 10px; font-size:1.1rem;">${item.name}</h3>
                    <div style="display:flex; justify-content:space-between; align-items:center; margin-top: auto;">
                        <span style="font-size: 1.2rem; font-weight: 700;">₹${item.price}</span>
                        <button class="btn btn-primary add-btn" data-id="${item.id}">Add</button>
                    </div>
                </div>
            `;

            itemCard.querySelector('.add-btn').onclick = (e) => {
                e.stopPropagation(); // Prevent card clicks if we add them later
                this.addToCart(item);
            }
            grid.appendChild(itemCard);
        });
        return grid;
    }

    renderBooking() {
        const container = document.createElement('div');
        const cartTotal = this.state.cart.reduce((sum, item) => sum + item.price, 0);

        // Group items by restaurant for display
        // Logic: You might need multi-bookings for multi-restaurants, but for now we basically assume a "Mixed Cart" sync
        // or just list them.

        container.innerHTML = `
            <div class="grid-2">
                <div class="card">
                    <h2>Your Order</h2>
                    ${this.state.cart.map(item => `
                        <div style="display:flex; justify-content:space-between; padding: 10px 0; border-bottom: 1px solid var(--glass-border);">
                            <div>
                                <span style="display:block;">${item.name}</span>
                                <small style="color:var(--text-muted);">From ${RESTAURANTS.find(r => r.id === item.restaurantId)?.name}</small>
                            </div>
                            <span>₹${item.price}</span>
                        </div>
                    `).join('')}
                    <div style="margin-top: 20px; font-weight: 700; font-size: 1.2rem; display:flex; justify-content:space-between;">
                        <span>Total</span>
                        <span>₹${cartTotal}</span>
                    </div>
                </div>

                <div class="card">
                    <h2>Booking Details</h2>
                    <form id="booking-form">
                        <div style="margin-bottom: 20px;">
                            <label>Guests</label>
                            <input type="number" value="${this.state.booking.guests}" min="1">
                        </div>
                        <div style="margin-bottom: 20px;">
                            <label>Time</label>
                            <input type="time" value="${this.state.booking.time}">
                        </div>
                        <button type="submit" class="btn btn-primary" style="width:100%">Confirm & Sync Arrival</button>
                    </form>
                </div>
            </div>
        `;

        container.querySelector('form').onsubmit = (e) => {
            e.preventDefault();
            this.navigate('status');
        };

        return container;
    }

    renderStatus() {
        const container = document.createElement('div');
        const prepTime = this.state.cart.reduce((max, item) => Math.max(max, item.prepTime), 0);
        const backlog = this.state.kitchenLoad;
        const totalKitchenTime = prepTime + backlog;
        const travelTime = this.state.userDistance;

        const waitStatus = travelTime >= totalKitchenTime ?
            "Perfect Sync! Table ready on arrival." :
            `You'll wait approx ${totalKitchenTime - travelTime} mins at the bar.`;

        container.innerHTML = `
            <div class="card" style="margin-bottom: 20px; text-align: center; border: 1px solid var(--primary);">
                <i class="ri-check-double-line" style="font-size: 4rem; color: var(--success);"></i>
                <h1 style="margin: 10px 0;">Order Confirmed</h1>
                <p class="text-gradient" style="font-size: 1.5rem; font-weight: 600;">${waitStatus}</p>
                <p style="margin-top:10px;">We've notified the kitchens.</p>
            </div>

            <div class="grid-3">
                <div class="card">
                    <h3 style="color: var(--text-muted); font-size: 0.9rem;">RESTAURANT QUEUE</h3>
                    <div style="font-size: 2.5rem; font-weight: 700; color: var(--warning);">${backlog} min</div>
                </div>
                <!-- ... -->
                 <div class="card">
                    <h3 style="color: var(--text-muted); font-size: 0.9rem;">YOUR ORDER PREP</h3>
                    <div style="font-size: 2.5rem; font-weight: 700; color: var(--secondary);">${prepTime} min</div>
                </div>

                <div class="card">
                    <h3 style="color: var(--text-muted); font-size: 0.9rem;">TRAVEL TIME</h3>
                    <div style="font-size: 2.5rem; font-weight: 700; color: var(--primary);">${travelTime} min</div>
                </div>
            </div>
        `;

        return container;
    }

    addToCart(item) {
        this.state.cart.push(item);
        const notif = document.createElement('div');
        notif.style.cssText = `
            position: fixed; top: 100px; right: 20px; 
            background: var(--success); color: white; padding: 10px 20px; 
            border-radius: 8px; animation: fadeIn 0.3s; z-index: 200;
        `;
        notif.innerText = `Added ${item.name}`;
        document.body.appendChild(notif);
        setTimeout(() => notif.remove(), 2000);
        this.render();
    }
}

window.addEventListener('DOMContentLoaded', () => {
    new App();
});
