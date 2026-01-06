import {NavLink, Route, Routes} from "react-router-dom";
import UserManagement from "../../components/UserManagement/UserManagement.tsx";
import card1Img from "../../assets/card1_img.png";
import card2Img from "../../assets/card2_img.jpg";
import Countries from "../../components/Countries/Countries.tsx";

const Portfolio = () => {
    return (
        <div className='mb-5 d-flex flex-row'>
            <div className="row d-flex flex-column me-5">
                <NavLink className="col-md-4 mb-4" to='/portfolio/user-management' end>
                    <div className="card h-100" style={{width: "350px"}}>
                        <img className="card-img-top" src={card1Img} alt="Card image cap"/>
                        <div className="card-body">
                            <h5 className="card-title">Some quick example text</h5>
                        </div>
                    </div>
                </NavLink>

                <NavLink className="col-md-4 mb-4" to='/portfolio/countries' end>
                    <div className="card h-100" style={{width: "350px"}}>
                        <img className="card-img-top" src={card2Img} alt="Card image cap"/>
                        <div className="card-body">
                            <h5 className="card-title">Some quick example text to build</h5>
                        </div>
                    </div>
                </NavLink>
            </div>
            <Routes>
                <Route path='user-management' element={<UserManagement/>}/>
                <Route path='countries' element={<Countries/>}/>
            </Routes>
        </div>
    );
};

export default Portfolio;