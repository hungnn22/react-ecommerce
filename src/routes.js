import { Route, Switch } from "react-router-dom";
import WebsiteLayout from './layouts/WebsiteLayout'
import Home from "./pages/website/home/home";

const Routes = (props) => {
    return (
        <Switch>
            <Route path="/admin/:path?/:path?/:path?">
            </Route>
            <Route exact path="/:path?/:path?/:path?/:path?">
                <WebsiteLayout>
                    <Route exact path="/">
                        <Home {...props} />
                    </Route>
                </WebsiteLayout>
            </Route>
        </Switch>
    )
}

export default Routes
