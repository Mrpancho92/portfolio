import {useMemo} from "react";
import ContactForm from "../../contactForm/contactForm";
import { useSelector } from "react-redux";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import '../../../style/style.scss';
import PopupModalLoading from "../../popupModalLoading/PopupModalLoading";
import IconsBar from "../../iconsBar/IconsBar";
import './ContactPage.scss';
import IsMobilePage from "../../isMobile/isMobilePage";
import ErrorMessageContactForm from "../../errorMessageContactForm/errorMessageContactForm";
import Spinner from "../../spinner/Spinner";
import {defaultSlide} from "../../../FramerMotion/framerMotion.pages.configs"
import { motion } from 'framer-motion';


const setContent = (process, Component) => {
    switch (process) {
        case 'waiting':
            return 
        case 'loading':
            return (
                <div className="popupModalLoading">
                    <div className="positionSpinner">
                        <Spinner/>
                    </div>
                </div>
            )
        case 'confirmed':
            return <Component/>;  
        case 'error':
            return <ErrorMessageContactForm/>;
        default:
            throw new Error('Unexpected process state');
    }
}

const ContactPage = () => {
    const counter = useSelector(state => state.counters.firstCounter);
    const process = useSelector(state => state.process.sendprocess);
    
    IsMobilePage();
    localStorage.setItem('page', 'contact');
    console.log('render-CONTACTME');
    
let elements = useMemo(() => {
        return setContent(process, PopupModalLoading); 
}, [process]);
console.log(process);

    return (
        <motion.div
            variants={defaultSlide}
            initial='hidden'
            animate='visible'
            exit='exit'
            className='ContactPage'
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
            <div className="ContactPage">
                <div className="ContactPage_bg">
                    <h1> Contact me </h1>
                    <h2>У вас есть какие-либо вопросы или интересный проект для работы?</h2>
                    <br/>
                    <p>Я был бы рад получить от вас сообщение!</p>
                    <p> Просто заполните форму или отправьте электронное письмо по адресу:&nbsp;
                        <a href="mailto:mrpancho@mail.ru">mrpancho@mail.ru</a>  
                    </p>
                    <p>или позвоните по телефону: +7 (909) 932-27-25.</p>  
            <ContactForm />
           <IconsBar onChange={counter}/>
           </div>
        </div>
        {elements}
    </motion.div>
    )
}
export default ContactPage;