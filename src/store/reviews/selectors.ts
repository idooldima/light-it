import { ReduxStoreType } from "../types";
import { Reviews } from "./types";


export const reviewsSelector = (state: ReduxStoreType): Reviews =>
    state.reviews.reviews;
