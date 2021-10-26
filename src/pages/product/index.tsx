import { isEmpty, map } from "lodash";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getProductsStart } from "../../store/catalog/actions";
import { catalogProductsSelector, getProductByIdSelector } from '../../store/catalog/selectors'
import { getReviewsStart } from "../../store/reviews/actions";
import ReviewCard from "./components/reviews";
import { ReduxStoreType } from "../../store/types";
import ProductCard from "../catalog/components/productCard";
import { reviewsSelector } from "../../store/reviews/selectors";
import UserReview from "./components/userReview";
import { Box, Card } from "@material-ui/core";

export default function Product() {
    const dispatch = useDispatch();
    const { id } = useParams<{ id: string; }>()
    const products = useSelector(catalogProductsSelector)
    const reviews = useSelector(reviewsSelector)
    const product = useSelector((state: ReduxStoreType) =>
        getProductByIdSelector(state, +id))
    React.useEffect(() => {
        if (isEmpty(products))
            dispatch(getProductsStart())
    }, []);
    React.useEffect(() => { dispatch(getReviewsStart({ productId: id })) }, []);

    if (!product) {
        return null
    }

    return (
        <Card >
            <Box display='flex' justifyContent='space-around'>
                <ProductCard product={product} />
                <UserReview></UserReview>
            </Box>
            <Box display='flex' justifyContent='flex-end' flexDirection='column'>
                <h2>Reviews</h2>
                {map(reviews, (review) => (
                    <ReviewCard key={review.id} review={review} />
                ))}
            </Box>
        </Card>
    )

}
