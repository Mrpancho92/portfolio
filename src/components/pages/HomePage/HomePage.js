// import { connect } from "react-redux";
import { shallowEqual, useSelector } from "react-redux";
import { useMediaQuery } from 'react-responsive';
import {Link} from 'react-router-dom';
import { Helmet } from "react-helmet";
import './HomePage.scss';
import '../../../style/style.scss';
import IconsBar from "../../iconsBar/IconsBar";
import avatar from '../../../resources/avatar.jpg';
import { bool } from "prop-types";
import IsMobileHomePage from "../../isMobile/isMobileHomePage";

const HomePage = () => {
    const counter = useSelector(state => state.counters.firstCounter);
    IsMobileHomePage();

    return (
        <>
            <Helmet>
                <meta
                    name="description"
                    content="Pavel Portfolio"
                />
                <title>Pavel Portfolio</title>
            </Helmet>
            <div className="homePage_bg">
                <div className="homePage_container">
                    <div className="avatar_box">
                        <img className="avatar" src={avatar} alt="avatar" />
                    </div>
                        <div className="homePage_text" style={{
                            color: counter ? '#ffffff' : ''
                         }}>
                        <h1 className="homePage_primaryHeading">
                            Front-end
                            <br/>
                            Web Developer
                        </h1>
                        <div className="homePage_purposes">
                            <p className="homePage_paragraph">
                                Hi, I'm Pavel Antoshin.
                                <br/>
                                I am focused on creating web applications with:
                            </p>
                            <ul className="homePage_featuresList">
                                <li className="homePage_feature">Optimized performance</li>
                                <li className="homePage_feature">Responsive layouts</li>
                                <li className="homePage_feature">Intuitive UX/UI designs</li>
                            </ul>
                        </div>
                        <Link className="d-flex justify-content-center mb-3 btn btn-primary homePage_projectsBtn" to="/projects">See my projects
                        </Link>
                        <IconsBar onChange={counter}/>
                    </div>
                </div>
            </div>
        </>
    )
}
// }className="homePage_projectsBtn" href="/projects"

// const mapStateToProps = (state) => {
//     return {
//         counter: state
//     }
// } 

// export default connect(mapStateToProps)(HomePage);
export default HomePage;