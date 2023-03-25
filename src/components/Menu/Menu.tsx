import DishItem from "./DishItem";
import CategoryContainer from "./CategoryContainer";
import styles from "./Menu.module.css";
import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../features/store";
import {fetchCategoriesAsync} from "../../features/reducers/categoriesSlice";
import {addItem} from "../../features/reducers/cartSlice";
import {Dish} from "../../features/types";


function Menu() {

    const dispatch = useDispatch();
    const categories = useSelector((state: RootState) => state.categories.categories);
    const status = useSelector((state: RootState) => state.categories.status);
    const error = useSelector((state: RootState) => state.categories.error);

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchCategoriesAsync() as any);
        }
    }, [dispatch, status]);

    if (status === 'loading') {
        return <div>Loading categories...</div>;
    }

    if (status === 'failed') {
        return <div>{error}</div>;
    }

    const handleAddToCart = (dish: Dish) => {
        dispatch(addItem(dish));
    };

    return (
        <section className={styles.menu}>
            {categories.map((category) => (
                <CategoryContainer key={category.id} category={category}>

                    {category.dishes.map((dish) => (
                        <DishItem key={dish.id} dish={dish} buttonAction={() => handleAddToCart(dish)}
                                  buttonText={"Add to cart"}/>
                    ))}

                </CategoryContainer>
            ))}
        </section>
    );
}

export default Menu;
