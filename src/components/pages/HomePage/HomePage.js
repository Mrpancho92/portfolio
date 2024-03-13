// import { connect } from "react-redux";
import { useSelector } from "react-redux";
import {Link} from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import './HomePage.scss';
import '../../../style/style.scss';
import IconsBar from "../../iconsBar/IconsBar";
import avatar from '../../../resources/avatar.jpg';
import IsMobilePage from "../../isMobile/isMobilePage";
import {defaultSlide} from "../../../FramerMotion/framerMotion.pages.configs"
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from "react";

const HomePage = () => {
    const counter = useSelector(state => state.counters.firstCounter);
    // const [key, setKey] = useState(false);
    IsMobilePage();
    localStorage.setItem('page', 'home');
   
    // const localSave = () => {
    //     localStorage.setItem('url', window.location.pathname);  
    // }
    // localSave();

    // useEffect(() => {
    //     console.log(state);
    //     if (state === true) {
           
    //         window.location.href = 'http://localhost:3000'; 
    //     } 
    // },[state])
 
    
    return (
        <motion.div 
            variants={defaultSlide}
            initial='hidden'
            animate='visible'
            exit='exit'
            className='homePage_bg'
        >
            <HelmetProvider>
                <Helmet>
                    <meta
                        name="description"
                        content="Pavel Portfolio"
                    />
                    <title>Pavel Portfolio</title>
                </Helmet>
            </HelmetProvider>
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
                        <Link className="d-flex justify-content-center mb-3 btn btn-primary homePage_projectsBtn" 
                        to="/projects">See my projects
                        </Link>
                        <IconsBar onChange={counter}/>
                    </div>
                </div>
            </div>
        </motion.div>
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