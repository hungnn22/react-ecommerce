import { Redirect, Route, useHistory } from "react-router-dom"
import auth from "../auth/auth"

const AdminRoute = (props) => {
    const history = useHistory()
    if (!auth.isAdmin()) {
        history.push("/signin")
    }
    return (
        <Route {...props}>{props.children}</Route>
    );
}

export default AdminRoute
