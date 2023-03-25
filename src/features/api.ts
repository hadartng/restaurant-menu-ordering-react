import axios from "axios";
import {Category, Review} from "./types";

export const fetchCategories = async (): Promise<Category[]> => {
    const response = await axios.get<any>(
        "https://tenbis-static.azureedge.net/restaurant-menu/35896_en"
    );
    const categories = response.data.categories || [];
    return categories;
};

export const fetchReviews = async (): Promise<Review[]> => {
    const response = await axios.get<any>(
        "https://www.10bis.co.il/NextApi/GetRestaurantReviews?restaurantId=35896"
    );
    const reviews = response.data.reviewsList || [];
    return reviews;
};