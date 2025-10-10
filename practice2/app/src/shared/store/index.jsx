import { create } from 'zustand';

const load = (key, fallback) => {
    try {
        const v = localStorage.getItem(key);
        return v ? JSON.parse(v) : fallback;
    } catch {
        return fallback;
    }
};

const save = (key, value) => {
    try {
        localStorage.setItem(key, JSON.stringify(value));
    } catch {
        // noop
    }
};

export const useAppStore = create((set, get) => ({
    favorites: load('favorites', []),
    cart: load('cart', []),
    search: '',
    mode: 'all', // 'all' | 'favorites' | 'cart'

    setSearch: (q) => set({ search: q }),
    setMode: (mode) => set({ mode }),

    toggleFavorite: (id) => {
        const { favorites } = get();
        const next = favorites.includes(id)
            ? favorites.filter((i) => i !== id)
            : [...favorites, id];
        save('favorites', next);
        set({ favorites: next });
    },
    toggleCart: (id) => {
        const { cart } = get();
        const next = cart.includes(id)
            ? cart.filter((i) => i !== id)
            : [...cart, id];
        save('cart', next);
        set({ cart: next });
    },
}));
