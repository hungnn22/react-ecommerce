import './Background.css'

const Background = () => {
    return (

        <section className="carouse">
            <img src="https://res.cloudinary.com/hungnn22cloudinary/image/upload/v1628414664/ecommer/hero-1_apand7.jpg" />
            <div className="container">
                <div className="row">
                    <div className="content col-lg-5">
                        <h1 className="content-title">Black friday</h1>
                        <p className="content-para" style={{maxWidth: '500px'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore</p>
                        <a href="/" className="primary-btn mt-2 content-button">Shop Now</a>
                    </div>
                </div>
            </div>

            {/* <div className="hero-items owl-carousel">
                <div className="single-hero-items set-bg" data-setbg="assets/img/hero-1.jpg">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-5">
                                <span>Bag,kids</span>
                                <h1>Black friday</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore</p>
                                <a href="/" className="primary-btn">Shop Now</a>
                            </div>
                        </div>
                        <div className="off-card">
                            <h2>Sale <span>50%</span></h2>
                        </div>
                    </div>
                </div>
                <div className="single-hero-items set-bg" data-setbg="assets/img/hero-2.jpg">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-5">
                                <span>Bag,kids</span>
                                <h1>Black friday</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore</p>
                                <a href="/" className="primary-btn">Shop Now</a>
                            </div>
                        </div>
                        <div className="off-card">
                            <h2>Sale <span>50%</span></h2>
                        </div>
                    </div>
                </div>
            </div> */}
        </section>
    )
}

export default Background
