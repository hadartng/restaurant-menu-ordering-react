import Cart from "../Cart/Cart";
import styles from "./Header.module.css";

// Header section of the page
function Header() {
    return (
        <section className={styles.header}>
            <div className={styles.headerLogo}/>
            <Cart/>
        </section>
    );
}

export default Header;
