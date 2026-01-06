const Contacts = () => {
    return (
        <div>
            <h1 className="display-5 fw-bold mb-4">How to contact us</h1>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-6 mb-4 mb-md-0">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d40081.30820912235!2d74.56773285994923!3d42.869129159630994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389ec9d3088356eb%3A0xb6b7beaa1240556a!2z0JDQt9C40Y8g0JzQvtC70Ls!5e0!3m2!1sru!2sru!4v1767674572656!5m2!1sru!2sru"
                            width="600" height="450" style={{border: '0'}} loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    <div className="col-md-6 hero-text-col">
                        <h2 className="mb-5">The best time to launch your new site was yesterday. The second best time
                            is today.</h2>
                        <p className="lead mb-4">High-performance websites tailored to your business goals. From
                            sleek landing pages to complex e-commerce solutions, we turn your vision into a digital
                            reality.</p>
                        <ul className="d-flex flex-column gap-2" style={{listStyle: 'none'}}>
                            <li>
                                101 California St, Suite 2710, San Francisco, CA 94111, USA
                            </li>
                            <li>
                                +1 (415) 555-0124
                            </li>
                            <li>
                                support@corestack.com
                            </li>
                            <li>
                                24/7 Priority Support for Clients
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contacts;