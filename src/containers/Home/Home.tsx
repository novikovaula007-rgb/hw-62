import mainImg from "../../assets/main_img.png"

const Home = () => {
    return (
        <div>
            <h1 className="display-5 fw-bold mb-4">We Build Digital Experiences That Drive Growth.</h1>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-6 mb-4 mb-md-0">
                        <img src={mainImg} className="img-fluid" alt="Website Mockup"/>
                    </div>
                    <div className="col-md-6 hero-text-col">
                        <p className="lead mb-4">High-performance websites tailored to your business goals. From
                            sleek landing pages to complex e-commerce solutions, we turn your vision into a digital
                            reality.</p>
                        <ul className="d-flex gap-5">
                            <li>
                                No templates. Every pixel is crafted to reflect your brand identity.
                            </li>
                            <li>
                                We build with search engines in mind so customers can find you.
                            </li>
                            <li>
                                Seamless performance across desktops, tablets, and smartphones.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;