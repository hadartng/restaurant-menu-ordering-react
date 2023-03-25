import styles from "./DishItem.module.css";
import burgerErrorImage from "../assets/burger_error.jpg";
import {Dish} from "../../features/types";

function DishItem(props: any) {
    const dish: Dish = props.dish;

    const dishImage = (
        <img className={styles.dishImage} src={dish.imageUrl} alt={dish.name}
             onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                 const target = e.target as HTMLImageElement;
                 target.onerror = null;
                 target.src = burgerErrorImage;
             }}/>);

    return (
        <div key={dish.id} className={styles.dish}>
            {dishImage}
            <div className={styles.dishContent}>
                <h3 className={styles.dishTitle}>{dish.name}</h3>
                <p className={styles.dishDescription}>{dish.description}</p>
                <div className={styles.dishPrice}>₪{`${dish.price.toFixed(2)}`}</div>
                <button className={styles.addButton} onClick={props.buttonAction}>{props.buttonText}</button>
            </div>
        </div>
    );
}

export default DishItem;
