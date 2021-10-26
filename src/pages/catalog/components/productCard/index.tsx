import { Card, CardActionArea, CardContent, CardMedia, Typography, Box } from "@material-ui/core";
import { replace } from "lodash";
import { useHistory } from "react-router";
import routes from "../../../../routes";
import { ProductType } from "../../../../store/catalog/types";
type Props = { product: ProductType }





export default function ProductCard({ product }: Props) {
    const history = useHistory();
    return (
        <Card onClick={() => { history.push(replace(routes.product.path, ":id", product.id)) }} >
            <CardActionArea  >
                <Box width='140px' margin='0 auto'>
                    <CardMedia
                        component="img"
                        height="140"
                        width='140'
                        image={`http://smktesting.herokuapp.com/static/${product.img}`}
                        alt={`product${product.id}`}
                    />
                </Box>
                <CardContent>
                    <Typography gutterBottom variant="h4" component="div">
                        {product.title}
                    </Typography>
                    <Typography variant="body2">
                        {product.text}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}