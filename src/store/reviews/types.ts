
export type Review = {
    created_at: string;
    created_by: {
        id?: number,
        username: string
        first_name?: string
        last_name?: string
        email?: string
    }
    id?: number;
    product: number
    rate: number
    text: string
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


