// import {useDispatch, useSelector} from "react-redux";
// import {RootState} from "../../store";
// import {useEffect} from "react";
// import {fetchReviewsAsync} from "../../features/reducers/reviewsSlice";
import styles from "./Reviews.module.css";
import ReviewsCarousel from './ReviewsCarousel';

// Reviews section of the page
function Reviews() {

    // const dispatch = useDispatch();
    // const reviews = useSelector((state: RootState) => state.reviews.reviews);
    // const status = useSelector((state: RootState) => state.reviews.status);
    // const error = useSelector((state: RootState) => state.reviews.error);

    // useEffect(() => {
    //     if (status === 'idle') {
    //         dispatch(fetchReviewsAsync() as any);
    //     }
    // }, [dispatch, status]);
    //
    // if (status === 'loading') {
    //     return <div>Loading reviews...</div>;
    // }
    //
    // if (status === 'failed') {
    //     return <div>{error}</div>;
    // }

    return (
        <section className={styles.reviews}>
            <ReviewsCarousel/>
        </section>
    );
}

export default Reviews;
