import DishItem from "../Menu/DishItem";
import styles from "./CartItems.module.css";
import {CartItem, Dish} from "../../features/types";
import {useDispatch} from "react-redux";
import {removeItem} from "../../features/reducers/cartSlice";

function CartItems({items}: { items: CartItem[] }) {
    const dispatch = useDispatch();

    const handleRemoveFromCart = (dish: Dish) => {
        dispatch(removeItem({id: dish.id, price: dish.price}));
    };

    return (
        <>
            {items.map((item: any) => (
                <div className={styles.cartItem}>
                    <div className={styles.cartItemQuantity}>
                        {item.quantity}
                    </div>
                    <DishItem dish={item.dish} quantity={item.quantity}
                              buttonAction={() => handleRemoveFromCart(item.dish)} buttonText={"Remove"}/>
                </div>
            ))}
        </>
    );
}

export default CartItems;
