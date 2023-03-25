export interface Dish {
    id: string;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
}

export interface Category {
    id: string;
    name: string;
    dishes: Dish[];
}

export interface CartItem {
    dish: Dish;
    quantity: number;
}

export interface Review {
    id: string;
    date: string;
    name: string;
    review: string;
    score: number;
}
