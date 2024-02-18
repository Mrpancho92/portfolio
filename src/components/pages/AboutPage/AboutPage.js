import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import '../../../style/style.scss';
import './AboutPage.scss';
import * as resources from '../../../resources';
import useMrPanchoService from "../../../services/MrPanchoService";
import IsMobileHomePage from "../../isMobile/isMobileHomePage";
import { clickTech, clickExp, clickEducation } from '../../../actions';
import { useSelector, useDispatch } from 'react-redux'

const AboutPage = () => {
    IsMobileHomePage();
    const [data, setData] = useState([]);
    const tech = useSelector(state => state.aboutOption.tech);
    const exp = useSelector(state => state.aboutOption.exp);
    const education = useSelector(state => state.aboutOption.education);
    console.log('render-ABOUT');
    localStorage.setItem('aboutMeOptions', JSON.stringify({
        "tech": `${tech}`, 
        "exp": `${exp}`, 
        "education": `${education}`
    }));
    const dispatch = useDispatch();
    const {getdata, process, setProcess} =  useMrPanchoService();

    useEffect(() => {
        // 'https://projectdata-f0pl.onrender.com/cards'
        // 'http://localhost:3000/cards'
        // 'https://projectdata-f0pl.onrender.com/aboutMeCardsTechStack'
        if (tech + '' === 'true') {
            getdata('https://projectdata-f0pl.onrender.com/aboutMeCardsTechStack')
            .then(onLoadedTechStack)
            .then(() => setProcess('confirmed'))
        } 
    },[tech]) 

    useEffect(() => {
        // 'https://projectdata-f0pl.onrender.com/aboutMeCardsMyExperience'
        if (exp + '' === 'true') {
            getdata('https://projectdata-f0pl.onrender.com/aboutMeCardsMyExperience')
            .then(onLoadedMyExperience)
            .then(() => setProcess('confirmed'))
        } 
    },[exp])

    useEffect(() => {
        // 'https://projectdata-f0pl.onrender.com/aboutMeCardsMyEducation'
        if (education + '' === 'true') {
            getdata('https://projectdata-f0pl.onrender.com/aboutMeCardsMyEducation')
            .then(onLoadedMyEducation)
            .then(() => setProcess('confirmed'))
        } 
    },[education])

    const onLoadedTechStack = (list) => {
        setData(list);  
    }
    const onLoadedMyExperience = (list) => {
        setData(list);  
    }
    const onLoadedMyEducation = (list) => {
        setData(list);  
    }

    function renderCards() {
        const rez = data.map((item, index) => {
           function photo() {
               let it = [];
               Object.entries(resources).forEach(logo => {
                    item.img.forEach(item => {
                        if (logo[0] === item) it.push(logo[1]);
                    })
                });
                console.log(it);
                return it.map((item, index )=> {
                       return (
                            <img key={index} src={item} style={{width: '50px', height: '50px' }} alt="logo"/>               
                       ) 
                    }) 
               } 
               function ulTechStack() {
                const ulTechStack = item.myTechStack.map((item, index) => {
                    return (
                      <li key={index}>{item}</li>
                    )
                 })
                 return ulTechStack;
               }
               
               function ulDescription() {
                   const uldescription = item.description.map((item, index) => {
                        return (
                         <li key={index}>{item}</li>
                        )
                     })
                return uldescription;
               }

               return (
               <div key={index} className="AboutPage_wrap">
                   <div className="AboutPage_card">
                   <div className="Card_imageContainer">
                       {/* <img src={photo(logo)} style={{width: '300px', height: '150px' }} alt="marvelLogo" /> */}
                       {/* <div className="Card_image" style={{backgroundImage: `url(${photo()})`}}></div> */}
                       {photo()}
                   </div>
                   <div className="Card_content_bg">
                       <div className="Card_content">
                           <h2 className="Card_projectName">{item.cardName}</h2>
                           <div className="Card_listContainer">
                               <div className="Card_technologyStack">
                                   {/* <p>Technology stack:</p> */}
                                   <ul className="Card_list">
                                       {item.myTechStack ? ulTechStack() : null}
                                   </ul>
                               </div>
                               <div className="Card_mainFeatures">
                                   <p>{item.positionAtWork ? item.positionAtWork : null }</p>
                                   <ul className="Card_list">
                                      {item.description ? ulDescription() : null}
                                   </ul>
                               </div>
                           </div>
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
            <div className="AboutPage">
                <div className="AboutPage_bg">
                    <div className="AboutPage_text_buttons">
                        <h1> About me </h1>
                        <button onClick={() => dispatch(clickTech())} 
                        className="d-flex justify-content-center btn btn-primary">My Tech Stack</button>
                        <button onClick={() => dispatch(clickExp())} className="d-flex justify-content-center btn btn-primary">My Experiance</button>
                        <button onClick={() => dispatch(clickEducation())} className="d-flex justify-content-center btn btn-primary">My Education</button>
                    </div>
                    <div className="AboutPage_container">
                    {renderCards()}
                    </div>
                </div>
            </div>
        </>
    )
}
export default AboutPage;