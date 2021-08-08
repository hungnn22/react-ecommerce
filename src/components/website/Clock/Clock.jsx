import useClock from "../../../utils/hooks/useClock"

const Clock = () => {

    const {timer} = useClock()

    return (
        <section className="deal-of-week set-bg spad"
            style={{backgroundImage: 'url("https://res.cloudinary.com/hungnn22cloudinary/image/upload/v1628418585/ecommer/time-bg_uvcoo9.jpg")'}}
        >
            <div className="container">
                <div className="col-lg-6 text-center">
                    <div className="section-title">
                        <h2>Deal Of The Week</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed<br /> do ipsum dolor sit amet,
                            consectetur adipisicing elit </p>
                        <div className="product-price">
                            $35.00
                            <span>/ HanBag</span>
                        </div>
                    </div>
                    <div className="countdown-timer" id="countdown">
                        <div className="cd-item">
                            <span>{Number(timer.hour + 10)}</span>
                            <p>Days</p>
                        </div>
                        <div className="cd-item">
                            <span>{timer.hour}</span>
                            <p>Hrs</p>
                        </div>
                        <div className="cd-item">
                            <span>{timer.min}</span>
                            <p>Mins</p>
                        </div>
                        <div className="cd-item">
                            <span>{timer.sec}</span>
                            <p>Secs</p>
                        </div>
                    </div>
                    <a href="/" className="primary-btn">Shop Now</a>
                </div>
            </div>
        </section>
    )
}

export default Clock
