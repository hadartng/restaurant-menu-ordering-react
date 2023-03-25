import CartItems from "./CartItems";
import {RootState} from "../../features/store";
import {CartIcon} from "../assets/icons";
import {useDispatch, useSelector} from "react-redux";
import {cartOpen} from "../../features/reducers/cartSlice";
import styles from "./Cart.module.css";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

function Cart() {
    const cart = useSelector((state: RootState) => state.cart);
    const dispatch = useDispatch();

    const handleCartVisibility = (isOpen: boolean) => {
        dispatch(cartOpen({isOpen: isOpen}));
    };

    const dialog = (
        <Dialog className={styles["cart-dialog"]} open={cart.cartOpen} onClose={() => handleCartVisibility(false)}>
            <DialogTitle className={styles["cart-title"]}>
                {cart.items.length === 0 ? "Your cart is empty" : "Your selected items"}
            </DialogTitle>
            <DialogContent className={styles["cart-content"]}>{<CartItems items={cart.items}/>}</DialogContent>
            <DialogActions
                className={styles["cart-actions"]}>
                {cart.totalQuantity > 0 && <div className={styles["cart-sum"]}>
                    Total price: {cart.totalPrice}₪
                </div>}
                <Button
                    className={styles["cart-close"]}
                    onClick={() => handleCartVisibility(false)}
                >
                    Close
                </Button>
                {cart.totalQuantity > 0 && <Button className={styles["cart-order"]}>Order</Button>}
            </DialogActions>
        </Dialog>
    );

    return (
        <>
            <div className={styles["cart"]} onClick={() => handleCartVisibility(true)}>
                <CartIcon/>
                <div className={styles["amount-container"]}>
                    <div className={styles["total-amount"]}>{cart.totalQuantity}</div>
                </div>
            </div>
            {dialog}
        </>
    );
}

export default Cart;
