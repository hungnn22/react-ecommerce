import Background from "../components/website/Background/Background"
import Header from "../components/website/Header/Header"
import Footer from './../components/website/Footer/Footer'
import Nav from "../components/website/Nav/Nav";

const WebsiteLayout = (props) => {

    const user = localStorage.getItem('user')
    console.log(user);

    return (
        <div className="" style={{ position: 'relative' }}>
            <Header />
            <Nav />    
            <Background />   
            <div className="mb-4" style={{minHeight: '100vh',position: 'relative', overflow: 'hidden' }}>
                {props.children}
            </div>
            <Footer />
            <button onClick={() => {
                window.scroll({
                    top: 0,
                    left: 0,
                    behavior: 'smooth'
                });
            }} className="btn btn-to-top"
                style={{
                    backgroundColor: '#e7ab3c',
                    width: '56px', height: '56px', borderRadius: '50%',
                    position: 'fixed',
                    bottom: '20px',
                    right: '20px',
                    zIndex: '1000',
                    opacity: '0.7'
                }}
            >Top</button>
        </div>
    )
}

export default WebsiteLayout
