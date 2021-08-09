import { Route, Switch } from "react-router-dom";
import WebsiteLayout from './layouts/WebsiteLayout'
import Cart from "./pages/website/cart/cart";
import Checkout from "./pages/website/checkout/checkout";
import MenCollection from "./pages/website/collection/mens/men.collection";
import WomenCollection from "./pages/website/collection/womens/women.collection";
import Home from "./pages/website/home/home";
import ProductDetail from './pages/website/product-detail/ProductDetail'
import Signin from "./pages/website/signin/signin";
import Signup from "./pages/website/signup/signup";
import AdminLayout from './layouts/AdminLayout'
import Dashboard from "./pages/admin/dashboard/dashboard";
import ProductList from "./pages/admin/products/list";
import AddProduct from "./pages/admin/products/add";
import EditProduct from "./pages/admin/products/edit";
import AdminRoute from "./utils/routerTypes/AdminRoute";
import CategoryList from "./pages/admin/category/list";
import AddCategory from "./pages/admin/category/add";

const Routes = (props) => {
    return (
        <Switch>
            <Route exact={true} path="/admin/:path?/:path?/:path?">
                <AdminLayout>
                    <Switch>
                        <AdminRoute exact path="/admin/products/add">
                            <AddProduct />
                        </AdminRoute>
                        <AdminRoute exact path="/admin/products/:id/edit">
                            <EditProduct />
                        </AdminRoute>
                        <AdminRoute exact path="/admin/products">
                            <ProductList />
                        </AdminRoute>

                        <AdminRoute exact path="/admin/categories/add">
                            <AddCategory />
                        </AdminRoute>
                        <AdminRoute exact path="/admin/categories">
                            <CategoryList />
                        </AdminRoute>
                        <AdminRoute exact path="/admin">
                            <Dashboard />
                        </AdminRoute>
                    </Switch>
                </AdminLayout>
            </Route>
            <Route exact={true} path="/signin">
                <Signin {...props} />
            </Route>
            <Route exact={true} path="/signup">
                <Signup {...props} />
            </Route>
            <Route path="/:path?/:path?/:path?/:path?">
                <WebsiteLayout>
                    <Route exact={true} path="/detail/:id">
                        <ProductDetail {...props} />
                    </Route>

                    <Route exact={true} path="/womens">
                        <WomenCollection {...props} />
                    </Route>
                    <Route exact={true} path="/mens">
                        <MenCollection {...props} />
                    </Route>
                    <Route exact={true} path="/cart">
                        <Cart {...props} />
                    </Route>

                    <Route exact={true} path="/checkout">
                        <Checkout {...props} />
                    </Route>
                    <Route exact={true} path="/">
                        <Home {...props} />
                    </Route>
                </WebsiteLayout>

            </Route>

        </Switch>
    )
}

export default Routes
