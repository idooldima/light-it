import { Button } from "@material-ui/core";
import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductsStart, resetProducts } from "../../store/catalog/actions";
import { catalogProductssSelector, catalogIsLoadingSelector } from "../../store/catalog/selectors";
import { ProductType } from "../../store/catalog/types";

export default function Catalog() {
    const dispatch = useDispatch();
    const products = useSelector(catalogProductssSelector)
    const isLoading = useSelector(catalogIsLoadingSelector)

    React.useEffect(() => { dispatch(getProductsStart()) }, []);

    const onRefresh = () => {
        dispatch(resetProducts());
        dispatch(getProductsStart());
    }

    // const renderCard = ({ item: product }: { item: ProductType }) => (
    //     <Card>
    //         <View style={styles.container} >
    //             <Image style={styles.img} resizeMode="cover"
    //                 source={{ uri: image.download_url }} />
    //             <Text style={styles.text}>{image.author}</Text>
    //         </View>
    //     </Card>
    // )

    return (
        <div></div>
    )

}
