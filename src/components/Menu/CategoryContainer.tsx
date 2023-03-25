import styles from "./CategoryContainer.module.css";
import {Category} from "../../features/types";

function CategoryContainer(props: any) {
    const category: Category = props.category;

    return (
        <div className={styles.category}>
            <h2 className={styles.categoryTitle}>{category.name}</h2>
            <div className={styles.dishes}>
                {props.children}
            </div>
        </div>
    );
}

export default CategoryContainer;
