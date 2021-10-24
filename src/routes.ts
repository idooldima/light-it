import SignIn from './pages/auth/signIn'
import SignUp from './pages/auth/signUp'
import Catalog from './pages/catalog'
import Product from './pages/product'
import { requireAuth } from './lib';

type RoutesType = {
    [key: string]: {
        path: string;
        component: any;
        exact?: boolean;
    }
}

const routes: RoutesType = {
    signIn: {
        path: "/",
        component: SignIn,
        exact: true
    },
    signUp: {
        path: "/sign-up",
        component: SignUp,
        exact: true
    },
    products: {
        path: "/products",
        component: requireAuth(Catalog),
        exact: true
    },
    product: {
        path: "/products/:id",
        component: requireAuth(Product)
    }
};



export default routes;
