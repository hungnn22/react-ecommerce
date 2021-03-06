import { NavLink, useHistory } from "react-router-dom"
import auth from './../../../utils/auth/auth'

const Sidebar = () => {

    const history = useHistory()

    const handleSignout = () => {
        auth.clear()
        history.push('/signin')
    }

    return (
        <nav id="sidebar" className="sidebar-wrapper">
            <div className="sidebar-content">
                <div className="sidebar-brand">
                    <a href="#">pro sidebar</a>
                    <div id="close-sidebar">
                        <i className="fas fa-times" />
                    </div>
                </div>
                <div className="sidebar-header">
                    <div className="user-pic">
                        <img className="img-responsive img-rounded" src="https://raw.githubusercontent.com/azouaoui-med/pro-sidebar-template/gh-pages/src/img/user.jpg" alt="User picture" />
                    </div>
                    <div className="user-info">
                        <span className="user-name">
                            <strong>{auth.getAuth() && auth.getAuth().name}</strong>
                        </span>
                        <span className="user-role">Administrator</span>
                        <span className="user-status">
                            <i style={{ color: 'green' }} className="fa fa-circle" />
                            <span>Online</span>
                        </span>
                    </div>
                </div>
                <div className="sidebar-search">
                    <div>
                        <div className="input-group">
                            <input type="text" className="form-control search-menu" placeholder="Search..." />
                            <div className="input-group-append">
                                <span className="input-group-text">
                                    <i className="fa fa-search" aria-hidden="true" />
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="sidebar-menu">
                    <ul>
                        <li className="header-menu">
                            <span>General</span>
                        </li>
                        <li className="sidebar">
                            <NavLink exact={true} activeClassName="text-light" to="/admin">
                                <i className="fa fa-tachometer-alt" />
                                <span>Dashboard</span>
                                <span className="badge badge-pill badge-warning">New</span>
                            </NavLink>
                        </li>
                        <li className="sidebar">
                            <NavLink exact={true} activeClassName="text-light" to="/admin/products">
                                <i className="fa fa-shopping-cart" />
                                <span>Product</span>
                            </NavLink>
                        </li>
                        <li className="sidebar">
                            <NavLink exact={true} activeClassName="text-light" to="/admin/categories">
                                <i className="fa fa-book" />
                                <span>Catgory</span>
                            </NavLink>
                        </li>
                        <li className="sidebar-dropdown">
                            <a href="#">
                                <i className="fa fa-chart-line" />
                                <span>Charts</span>
                            </a>
                            <div className="sidebar-submenu">
                                <ul>
                                    <li>
                                        <a href="#">Pie chart</a>
                                    </li>
                                    <li>
                                        <a href="#">Line chart</a>
                                    </li>
                                    <li>
                                        <a href="#">Bar chart</a>
                                    </li>
                                    <li>
                                        <a href="#">Histogram</a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="sidebar-dropdown">
                            <a href="#">
                                <i className="fa fa-globe" />
                                <span>Maps</span>
                            </a>
                            <div className="sidebar-submenu">
                                <ul>
                                    <li>
                                        <a href="#">Google maps</a>
                                    </li>
                                    <li>
                                        <a href="#">Open street map</a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="header-menu">
                            <span>Extra</span>
                        </li>
                        <li>
                            <a href="#">
                                <i className="fa fa-book" />
                                <span>Documentation</span>
                                <span className="badge badge-pill badge-primary">Beta</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="fa fa-calendar" />
                                <span>Calendar</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="fa fa-folder" />
                                <span>Examples</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="sidebar-footer">
                <a href="#">
                    <i className="fa fa-bell" />
                    <span className="badge badge-pill badge-warning notification">3</span>
                </a>
                <a href="#">
                    <i className="fa fa-envelope" />
                    <span className="badge badge-pill badge-success notification">7</span>
                </a>
                <a href="#">
                    <i className="fa fa-cog" />
                    <span className="badge-sonar" />
                </a>
                <a href="/signin"
                    onClick={handleSignout}
                >
                    <i className="fa fa-power-off" />
                </a>
            </div>
        </nav>

    )
}

export default Sidebar
