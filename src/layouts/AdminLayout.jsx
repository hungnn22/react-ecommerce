import Sidebar from "../components/admin/Sidebar/Sidebar"

const AdminLayout = (props) => {
    return (
        <div className="page-wrapper chiller-theme toggled" style={{minWidth: '140vh', position: 'relative'}}>
            <a id="show-sidebar" className="btn btn-sm btn-dark" href="#">
                <i className="fas fa-bars"></i>
            </a>

            <Sidebar />
            <main className="page-content">
                {props.children}
            </main>
        </div>
    )
}

export default AdminLayout
