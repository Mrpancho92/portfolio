import { useState, useRef, useEffect } from "react";
import emailjs from '@emailjs/browser';
import { useSelector } from "react-redux";
import { Helmet } from "react-helmet";
import Form from 'react-bootstrap/Form';
import '../../../style/style.scss';
import IconsBar from "../../iconsBar/IconsBar";
import './ContactPage.scss';
import IsMobilePage from "../../isMobile/isMobilePage";

const ContactPage = () => {
    const counter = useSelector(state => state.counters.firstCounter);
    IsMobilePage();
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const form = useRef();
    console.log('render-CONTACTME');
    
    const [clickForm, setClickForm] = useState();
    // var buttons = document.querySelector('.form_submit')
    //     buttons.forEach(function (button) {
    //          button = new Form.Button(button)
    //          button.toggle()
    //     })
    //     })
   
    
    useEffect(() => {
        setClickForm(document.querySelectorAll(".form_submit")[0]); 
    },[])
    
    
      
      
       
    
 

   const send = (e) => {
    e.preventDefault();
    // clickForm.blur();
    setTimeout(() => {
        clickForm.blur();
    },400)
     
    // const templateParams = {
    //     from_name: form.current[0].value,
    //     message: form.current[1].value,
    //   };
    // const serviceID = 'service_qjtpa1i';
    // const templateID = 'template_dn8astt';
    // const options = {
    //     publicKey: 'zGqZVWGaVG3aLfQap',
    //     // Do not allow headless browsers
    //     blockHeadless: true,
    //     blockList: {
    //       // Block the suspended emails
    //       list: ['foo@emailjs.com', 'bar@emailjs.com'],
    //       // The variable contains the email address
    //       watchVariable: 'userEmail',
    //     },
    //     limitRate: {
    //       // Set the limit rate for the application
    //       id: 'app',
    //       // Allow 1 request per 10s
    //       throttle: 10000,
    //     },
    //   };

    // emailjs.sendForm(serviceID, templateID, form.current, options ).then(
    //     (response) => {
    //       console.log('SUCCESS!', response.status, response.text);
    //     },
    //     (error) => {
    //       console.log('FAILED...', error.text);
    //     },
    //   );
   }
//   **********
//  console.log(form.current? form.current[0].value : '');
//  console.log(form.current? form.current[1].value : '');
//     useEffect(() => {
//         email.includes('@') && email.includes('.') && !email.includes(' ')
//       ? setEmailValid(true)
//       : setEmailValid(false);

//         message.length > 0 ? setMessageValid(true) : setMessageValid(false);
//   }, [email, message]);


    return (
        <>
            <Helmet>
                <meta
                    name="description"
                    content="Pavel Portfolio"
                />
                <title>Pavel Portfolio</title>
            </Helmet>
            <div className="ContactPage">
                <div className="ContactPage_bg">
                    <h1> Contact me </h1>
                    <h2>У вас есть какие-либо вопросы или интересный проект для работы?</h2>
                    <br/>
                    <p>Я бы с удовольствием получил от вас весточку!</p>
                    <p> Просто заполните форму или отправьте электронное письмо по адресу:&nbsp;
                        <a href="mailto:mrpancho@mail.ru">mrpancho@mail.ru</a>  
                    </p>
                    <p>или позвоните по телефону: +7 (909) 932-27-25.</p> 
                
           <div className="form">
                <div className="form_contaiter">
                <Form ref={form} onSubmit={send}>
                    <Form.Group className="mb-3 form_emailText" controlId="exampleForm.ControlInput1">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control className="form_email" type="email" value={email} onChange={e => setEmail(e.target.value) } name="from_name" placeholder="name@example.com" />
                    </Form.Group>
                    <Form.Group className="mb-3 form_textareaText" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Example textarea</Form.Label>
                        <Form.Control className="form_message" as="textarea" style={{resize: 'none'}}  name="message" value={message} onChange={e => setMessage(e.target.value) } rows={3} />
                        <Form.Control className="form_submit" type="submit" value="Send"/>
                    </Form.Group>
            </Form>
                </div>
               
           </div>
           <IconsBar onChange={counter}/>
           </div>
        </div>
        </>
    )
}
export default ContactPage;