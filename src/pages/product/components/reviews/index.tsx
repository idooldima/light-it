import { Box, Card, Typography, } from "@material-ui/core";
import { Rating } from "@mui/material";
import { Review } from "../../../../store/reviews/types";

type ReviewPropsType = { review: Review }

export default function ReviewCard({ review }: ReviewPropsType) {
    return (
        <Card title="review">
            <Box display='flex' flexDirection='column' >
                <Box display='flex' justifyContent='flex-end' maxWidth='80vw' >
                    <Typography variant="h6"> {review.created_by.username} at: </Typography>
                    <Typography variant="h6">  {new Date(review.created_at).toLocaleString()}</Typography>
                </Box >
                <Box display='flex' justifyContent='flex-end' maxWidth='80vw' >
                    <Typography component="legend">Rate:</Typography>
                    <Rating name="read-only" value={review.rate} readOnly />
                </Box>
                <Box display='flex' justifyContent='flex-end' maxWidth='80vw'>
                    <Typography variant="h5">Comment: {review.text}</Typography>
                </Box>
            </Box>
        </Card >
    );
}

