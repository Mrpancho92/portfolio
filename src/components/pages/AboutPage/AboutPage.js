import { useState, useEffect } from "react";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import '../../../style/style.scss';
import './AboutPage.scss';
import ProjectData from '../../../Assets/projectData/projectData';
import * as resources from '../../../resources';
import useMrPanchoService from "../../../services/MrPanchoService";
import IsMobilePage from "../../isMobile/isMobilePage";
import { clickTech, clickExp, clickEducation } from '../../../actions';
import { useSelector, useDispatch } from 'react-redux';
import {defaultSlide} from "../../../FramerMotion/framerMotion.pages.configs"
import { AnimatePresence, motion } from 'framer-motion';

const AboutPage = () => {
    IsMobilePage();
    localStorage.setItem('page', 'about');
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
    // useEffect(() => {
    //     // 'https://projectdata-f0pl.onrender.com/cards'
    //     // 'http://localhost:3000/cards'
    //     // 'https://projectdata-f0pl.onrender.com/aboutMeCardsTechStack'
    //     if (tech + '' === 'true') {
    //         getdata('https://projectdata-f0pl.onrender.com/aboutMeCardsTechStack')
    //         .then(onLoadedTechStack)
    //         .then(() => setProcess('confirmed'))
    //     } 
    // },[tech]) 

    // useEffect(() => {
    //     // 'https://projectdata-f0pl.onrender.com/aboutMeCardsMyExperience'
    //     if (exp + '' === 'true') {
    //         getdata('https://projectdata-f0pl.onrender.com/aboutMeCardsMyExperience')
    //         .then(onLoadedMyExperience)
    //         .then(() => setProcess('confirmed'))
    //     } 
    // },[exp])

    // useEffect(() => {
    //     // 'https://projectdata-f0pl.onrender.com/aboutMeCardsMyEducation'
    //     if (education + '' === 'true') {
    //         getdata('https://projectdata-f0pl.onrender.com/aboutMeCardsMyEducation')
    //         .then(onLoadedMyEducation)
    //         .then(() => setProcess('confirmed'))
    //     } 
    // },[education])

    // const onLoadedTechStack = (list) => {
    //     setData(list);  
    // }
    // const onLoadedMyExperience = (list) => {
    //     setData(list);  
    // }
    // const onLoadedMyEducation = (list) => {
    //     setData(list);  
    // }

 useEffect(() => {
        if (tech + '' === 'true') {
            const techButton = document.getElementById('tech');
            const filterProjectData = ProjectData.filter(item => {
                if(item.aboutMeCardsTechStack) {
                  return item
                } else return false
             })
             setData(Object.values(filterProjectData)[0].aboutMeCardsTechStack);
             setTimeout(() => {
                techButton.focus();
             },500) 
        } 
    },[tech]) 

    useEffect(() => {
        if (exp + '' === 'true') {
            const expButton = document.getElementById('exp');
            const filterProjectData = ProjectData.filter(item => {
                if(item.aboutMeCardsMyExperience) {
                  return item
                } else return false
             })
             setData(Object.values(filterProjectData)[0].aboutMeCardsMyExperience);
             setTimeout(() => {
                expButton.focus();
             },500)  
        } 
    },[exp]) 

    useEffect(() => {
        if (education + '' === 'true') {
            const educationButton = document.getElementById('education');
            const filterProjectData = ProjectData.filter(item => {
                if(item.aboutMeCardsMyEducation) {
                  return item
                } else return false
             })
             setData(Object.values(filterProjectData)[0].aboutMeCardsMyEducation);
             setTimeout(() => {
                educationButton.focus();
             },500)
        } 
    },[education]) 

    function renderCards() {
        const rez = data.map((item, index) => {       
           function photo() {
               let it = [];
               let styleImg = '';
               Object.entries(resources).forEach(logo => {
                if (item.cardName === "Frameworks:") {
                    styleImg = `styleImg`;
                } else {
                    styleImg = `otherImg`;
                } 
                    item.img.forEach(item => {
                        if (logo[0] === item) it.push(logo[1])                
                    })
                });
                return it.map((item, index )=> {
                       return (
                        <div key={index} className={styleImg}>
                            <img src={item} alt="logo"/> 
                        </div>                
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
                   <div className="AboutPage_imageContainer">
                       {/* <img src={photo(logo)} style={{width: '300px', height: '150px' }} alt="marvelLogo" /> */}
                       {/* <div className="Card_image" style={{backgroundImage: `url(${photo()})`}}></div> */}
                       {photo()}
                   </div>
                   <div className="AboutPage_Card_content_bg">
                       <div className="AboutPage_Card_content">
                           <h2 className="AboutPage_Card_projectName">{item.cardName}</h2>
                           <div className="AboutPage_Card_listContainer">
                               <div className="AboutPage_Card_technologyStack">
                                   {/* <p>Technology stack:</p> */}
                                   <ul className="AboutPage_Card_list">
                                       {item.myTechStack ? ulTechStack() : null}
                                   </ul>
                               </div>
                               <div className="AboutPage_Card_mainFeatures">
                                   <p>{item.positionAtWork ? item.positionAtWork : null }</p>
                                   <p>{item.positionEducation ? item.positionEducation : null }</p>
                                   <ul className="AboutPage_Card_list">
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
        return ( rez ) 
        
    }
    return (
        <motion.div
            variants={defaultSlide}
            initial='hidden'
            animate='visible'
            exit='exit'
            className='AboutPage'
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
            <div className="AboutPage">
                <div className="AboutPage_bg">
                <h1> About me </h1>
                    <div className="AboutPage_text_buttons">
                        <button id="tech" onClick={() =>dispatch(clickTech())} 
                        className="d-flex justify-content-center btn btn-primary aboutPageBtn">My Tech Stack</button>
                        <button id="exp" onClick={() => dispatch(clickExp())} className="d-flex justify-content-center btn btn-primary aboutPageBtn">My Experiance</button>
                        <button id="education" onClick={() => dispatch(clickEducation())} className="d-flex justify-content-center btn btn-primary aboutPageBtn">My Education</button>
                    </div>
        <AnimatePresence  mode="wait" >         
            {       
              (JSON.parse(localStorage.getItem('aboutMeOptions')).tech === 'true') 
              ? <motion.div
                       key={data}
                       variants={defaultSlide}
                       initial='hidden'
                       animate='visible'
                       exit='exit' 
                       className='AboutPage_container'
                   >       
                   <div className="AboutPage_container">
                         {renderCards()}   
                   </div>       
                </motion.div> 
               : null    
            }                       
            { 
              (JSON.parse(localStorage.getItem('aboutMeOptions')).exp === 'true') 
              ? <motion.div
                       key={data}
                       variants={defaultSlide}
                       initial='hidden'
                       animate='visible'
                       exit='exit' 
                       className='AboutPage_container'
                   >       
                   <div className="AboutPage_container">
                         {renderCards()}   
                   </div>       
                </motion.div> 
               : null 
            }          
            {   
              (JSON.parse(localStorage.getItem('aboutMeOptions')).education === 'true') 
              ? <motion.div
                       key={data}
                       variants={defaultSlide}
                       initial='hidden'
                       animate='visible'
                       exit='exit' 
                       className='AboutPage_container'
                   >       
                   <div className="AboutPage_container">
                         {renderCards()}  
                   </div>       
                </motion.div> 
               : null   
            }  
        </AnimatePresence>
                </div>
            </div>
        </motion.div>
    )
}
export default AboutPage;
