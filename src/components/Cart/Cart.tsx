import styles from "./Cart.module.css";
import CartItems from "./CartItems";
import {RootState} from "../../features/store";
import {CartIcon} from "../assets/icons";
import {useDispatch, useSelector} from "react-redux";
import {cartOpen} from "../../features/reducers/cartSlice";
import {createPortal} from "react-dom";

function Cart() {
    const cart = useSelector((state: RootState) => state.cart);
    const dispatch = useDispatch();

    const handleCartVisibility = (isOpen: boolean) => {
        dispatch(cartOpen({isOpen: isOpen}));
    };

    const dialog = (
        <div className={styles["cart-backdrop"]} onClick={() => handleCartVisibility(false)}>
            <div className={styles["cart-modal"]} onClick={(e) => e.stopPropagation()}>
                <div className={styles["cart-header"]}>
                    <h2 className={styles["cart-title"]}>
                        {cart.items.length === 0 ? "Your cart is empty" : "Your selected items"}
                    </h2>
                    <button className={styles["cart-close"]} onClick={() => handleCartVisibility(false)}>×</button>
                </div>
                <div className={styles["cart-content"]}>{<CartItems items={cart.items}/>}</div>
                {cart.totalQuantity > 0 && (
                    <div className={styles["cart-footer"]}>
                        <div className={styles["cart-sum"]}>Total price: {cart.totalPrice}₪</div>
                        {cart.totalQuantity > 0 && <button className={styles["cart-order"]}>Order</button>}
                    </div>
                )}
            </div>
        </div>
    );

    return (
        <>
            <div className={styles["cart"]} onClick={() => handleCartVisibility(true)}>
                <CartIcon/>
                <div className={styles["amount-container"]}>
                    <div className={styles["total-amount"]}>{cart.totalQuantity}</div>
                </div>
            </div>
            {cart.cartOpen ? createPortal(dialog, document.body) : null}
        </>
    );
}

export default Cart;
