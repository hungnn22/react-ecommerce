import { Route, Switch } from "react-router-dom";
import WebsiteLayout from './layouts/WebsiteLayout'
import WomenCollection from "./pages/website/collection/womens/women.collection";
import Home from "./pages/website/home/home";
import ProductDetail from './pages/website/product-detail/ProductDetail'

const Routes = (props) => {
    return (
        <Switch>
            <Route exact={true} path="/admin/:path?/:path?/:path?">
            </Route>
            <Route exact={true} path="/:path?/:path?/:path?/:path?">
                <WebsiteLayout>
                    <Route exact={true} path="/detail/:id">
                        <ProductDetail {...props} />
                    </Route>

                    <Route exact={true} path="/womens">
                        <WomenCollection {...props} />
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
