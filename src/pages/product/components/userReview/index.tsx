import { useDispatch, useSelector } from "react-redux"
import { useState } from "react";
import { Rating } from "@mui/material";
import { Button, TextField, Box } from "@material-ui/core";
import { isUserSignedUp } from "../../../../lib";
import { sendCommentStart } from "../../../../store/reviews/actions";
import routes from "../../../../routes";
import { Link } from "react-router-dom";
import { useParams } from "react-router"
import { currentUserSelector } from '../../../../store/auth/selectors'



export default function UserReview() {
    const dispatch = useDispatch();
    const [comment, setComment] = useState("");
    const [rating, setRating] = useState(0);
    const [showUserShouldLoginMessage, setShowUserShouldLoginMessage] = useState(
        false
    );
    const user = useSelector(currentUserSelector)
    const { id } = useParams<{ id: string; }>()
    const resetRating = () => {
        setRating(0);
        setComment("");
    };

    return (
        <>
            <Box display='flex' justifyContent='flex-end' flexDirection='column'>
                <div>
                    <Rating
                        name="
                        grade"
                        max={5}
                        onChange={({ target: { value } }: any) => setRating(+value)}
                        value={rating}
                    />
                    <TextField
                        label="type your review..."
                        fullWidth
                        variant="filled"
                        value={comment}
                        onChange={({ target: { value } }) => setComment(value)}
                    />
                </div>
                <div>
                    <Button
                        fullWidth
                        variant="contained"
                        onClick={() => {
                            if (!isUserSignedUp() || !user) {
                                setShowUserShouldLoginMessage(true);
                            } else {
                                dispatch(sendCommentStart({ product: +id, created_at: new Date().toLocaleString(), text: comment, rate: rating, created_by: { username: user.username } }));
                            }
                            resetRating();
                        }}
                    >
                        Submit
                    </Button>
                </div>

                {showUserShouldLoginMessage && (
                    <div>
                        You should <Link to={routes.signUp.path}>sign in</Link> to leave a
                        comment
                    </div>
                )}
            </Box>
        </>
    );
}