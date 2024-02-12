import { useState, useEffect, useMemo} from "react";
import { Helmet } from "react-helmet";
import '../../../style/style.scss';
import './projectsPage.scss';
import {Link} from 'react-router-dom'
import useMrPanchoService from "../../../services/MrPanchoService";
import * as resources from '../../../resources';
import Spinner from "../../spinner/Spinner";
import ErrorMessage from "../../errorMessage/ErrorMessage";
import IsMobileHomePage from "../../isMobile/isMobileHomePage";

// {bringitup, marvelLogo, mogo, nativeJs}
// const setContent = (process, Component, newItemLoading) => {
//     switch (process) {
//         case 'waiting':
//             return <Spinner/>;
//         case 'loading':
//             return newItemLoading ? <Component/> : <Spinner/>;
//         case 'confirmed':
//             return Component;
//         case 'error':
//             return <ErrorMessage/>;
//         default:
//             throw new Error('Unexpected process state');
//     }
// }

const ProjectPage = () => {
    const [data, setData] = useState([]);
    
    IsMobileHomePage();
  
    console.log('render2');
    const {getdata, process, setProcess} =  useMrPanchoService();
    useEffect(() => {
        // 'https://projectdata-f0pl.onrender.com/cards'
        // 'http://localhost:3000/cards'
        getdata('https://projectdata-f0pl.onrender.com/cards').then(onLoaded).then(() => setProcess('confirmed'))
    }, [])
   
    const onLoaded = (list) => {
        setData(list);  
    }
    
    function renderCards() {
     const rez = data.map((item, index) => {
        function photo() {
            let it;
            Object.entries(resources).forEach(logo => {
                if (logo[0] === item.img) it = logo[1];
               });
               return it;
            } 
            const ulCardlist = item.technologyStack.map((item, index) => {
               return (
                <li key={index}>{item}</li>
               )
            })
            const ulMainFeatures = item.mainFeatures.map((item, index)=> {
                return (
                 <li key={index}>{item}</li>
                )
             })
            return (
            <div key={index} className="ProjectPage_wrap">
                <div className="ProjectPage_card">
                <div className="Card_imageContainer">
                    {/* <img src={photo(logo)} style={{width: '300px', height: '150px' }} alt="marvelLogo" /> */}
                    <div className="Card_image" style={{backgroundImage: `url(${photo()})`}}></div>
                </div>
                <div className="Card_content_bg">
                    <div className="Card_content">
                        <h2 className="Card_projectName">{item.projectName}</h2>
                        <div className="Card_listContainer">
                            <div className="Card_technologyStack">
                                <p>Technology stack:</p>
                                <ul className="Card_list">
                                    {ulCardlist}
                                </ul>
                            </div>
                            <div className="Card_mainFeatures">
                                <p>Main Features:</p>
                                <ul className="Card_list">
                                   {ulMainFeatures}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="Card_btnContainer">
                        <Link className="d-flex justify-content-center btn btn-primary" to={item.linkWebsite}>Go to the website</Link>
                        <br/>
                        <Link className="d-flex justify-content-center btn btn-primary" to={item.linkGitHubRepo}>GitHub repo</Link>
                    </div>
                </div>
            </div>
        </div>
            ) 
        });
        return (
            rez
            )  
    }

    return (
        <>
            <Helmet>
                <meta
                    name="description"
                    content="Pavel Portfolio"
                />
                <title>Pavel Portfolio</title>
            </Helmet>
            <div className="ProjectPage">
            <div className="ProjectPage_bg">
                <h1> My projects </h1>
                <div className="ProjectPage_container">
                   {renderCards()}
                </div>
            </div>
            </div>
        </>
    )
}
export default ProjectPage;

