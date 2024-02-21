import { useState, useEffect,useRef } from "react";
import emailjs from '@emailjs/browser';
import { useSelector } from "react-redux";
import { Helmet } from "react-helmet";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../../../style/style.scss';
import IconsBar from "../../iconsBar/IconsBar";
import './ContactPage.scss';
import IsMobileHomePage from "../../isMobile/isMobileHomePage";

const ContactPage = () => {
    const counter = useSelector(state => state.counters.firstCounter);
    IsMobileHomePage();
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const form = useRef();
    console.log('render-CONTACTME');
    
   const send = (e) => {
    e.preventDefault();
    // const templateParams = {
    //     from_name: form.current[0].value,
    //     message: form.current[1].value,
    //   };
    const serviceID = 'service_qjtpa1i';
    const templateID = 'template_dn8astt';
    const options = {
        publicKey: 'zGqZVWGaVG3aLfQap',
        // Do not allow headless browsers
        blockHeadless: true,
        blockList: {
          // Block the suspended emails
          list: ['foo@emailjs.com', 'bar@emailjs.com'],
          // The variable contains the email address
          watchVariable: 'userEmail',
        },
        limitRate: {
          // Set the limit rate for the application
          id: 'app',
          // Allow 1 request per 10s
          throttle: 10000,
        },
      };

    emailjs.sendForm(serviceID, templateID, form.current, options ).then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
   }
  
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
           <div className="form">
                <div className="form_contaiter">
                <Form ref={form} onSubmit={send}>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control className="form_email" type="email" value={email} onChange={e => setEmail(e.target.value) } name="from_name" placeholder="name@example.com" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Example textarea</Form.Label>
                        <Form.Control className="form_message" as="textarea" style={{resize: 'none'}}  name="message" value={message} onChange={e => setMessage(e.target.value) } rows={3} />
                        <Form.Control className="form_submit" type="submit" value="Send"/>
                    </Form.Group>
            </Form>
                </div>
               
           </div>
           <IconsBar onChange={counter}/>
        </>
    )
}
export default ContactPage;