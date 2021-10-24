
export type Review = {
    id: string;
    rate: string
    text: string
    idUser: string
    idEntry: string
}

export type Reviews = Review[]

export type ReviewStateType = {
    reviews: Reviews;
    isLoading: boolean;
    error: null;
}

export type GetReviewsPayload = {
    productId: string
}