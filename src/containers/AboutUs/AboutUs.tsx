import card1Img from "../../assets/card1_img.png"
import card2Img from "../../assets/card2_img.jpg"
import card3Img from "../../assets/card3_img.webp"

const Home = () => {
    return (
        <div>
            <h1 className="display-5 fw-bold mb-4">Your Partners in Digital Transformation.</h1>
            <div className="container">
                <p className="fs-5">We believe a website is more than just a digital business card — it’s your most powerful sales
                    tool.</p>
                <p className="fs-5 mb-4">We bridge the gap between aesthetic beauty and technical excellence. With over 10 years of
                    experience, we don't just write code; we solve business problems.</p>
                <div className="row d-flex">
                    <div className="col-md-4 mb-4">
                        <div className="card h-100" style={{width: "350px"}}>
                            <img className="card-img-top" src={card1Img} alt="Card image cap"/>
                            <div className="card-body">
                                <p className="card-text">Some quick example text to build on the card title and make up
                                    the
                                    bulk
                                    of the card's content.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div className="card h-100" style={{width: "350px"}}>
                            <img className="card-img-top" src={card2Img} alt="Card image cap"/>
                            <div className="card-body">
                                <p className="card-text">Some quick example text to build on the card title and make up
                                    the
                                    bulk
                                    of the card's content.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div className="card h-100" style={{width: "350px"}}>
                            <img className="card-img-top" src={card3Img} alt="Card image cap"/>
                            <div className="card-body">
                                <p className="card-text">Some quick example text to build on the card title and make up
                                    the
                                    bulk
                                    of the card's content.</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Home;