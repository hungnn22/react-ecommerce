import Background from "../components/website/Background/Background"
import Banner from "../components/website/Banner/Banner";
import TopProduct from './../components/website/TopProduct/TopProduct'
import Header from "../components/website/Header/Header"
import Blogs from './../components/website/Blogs/Blogs'
import Footer from './../components/website/Footer/Footer'

const WebsiteLayout = (props) => {

    return (
        <div className="" style={{ position: 'relative' }}>
            <Header />
            <Background />
            <Banner />
            <div>{props.children}</div>
            <TopProduct />
            <Blogs />
            <Footer />
            <button onClick={() => {
                window.scroll({
                    top: 0,
                    left: 0,
                    behavior: 'smooth'
                });
            }} className="btn btn-dark btn-to-top"
                style={{
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
