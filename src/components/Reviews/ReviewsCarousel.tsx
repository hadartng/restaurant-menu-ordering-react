import styles from "./ReviewsCarousel.module.css";
import reviews from './reviewsItems';

function ReviewsCarousel() {
    return (
        <div className={styles.carousel}>
            {reviews.map((review, index) => (
                <div key={index}
                     className={index < reviews.length ? styles.review : `${styles.review} ${styles.duplicate}`}>
                    <h2>{review.name}</h2>
                    <div className={styles.score}>
                        <div>
                            <span>{review.score}</span>
                        </div>
                    </div>
                    <p>{review.date}</p>
                    <p>{review.review}</p>
                </div>
            ))}
        </div>
    );
}

export default ReviewsCarousel;