export type ProductType = {
    id: string,
    img: string,
    text: string,
    title: string


};

export type Products = ProductType[]

export type CatalogStateType = {
    products: Products,
    isLoading: boolean;
    error: null;
};