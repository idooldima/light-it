import { map } from "lodash";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductsStart } from "../../store/catalog/actions";
import { catalogProductsSelector } from "../../store/catalog/selectors";
import ProductCard from './components/productCard'

export default function Catalog() {
    const dispatch = useDispatch();
    const products = useSelector(catalogProductsSelector)

    useEffect(() => { dispatch(getProductsStart()) }, []);


    return (
        <>
            {map(products, (product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </>
    )

}
