import { useRef, useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import { useEmailJs } from '../../hooks/emailJsHook';
import { processSenEmail } from '../../actions';
import {useDispatch, useSelector} from 'react-redux';
const ContactForm = () => {
    const { send, process, setProcess, clearError} = useEmailJs();
    const processs = useSelector(state => state.process.sendprocess);
    const [email, setEmail] = useState();
    const [message, setMessage] = useState();
    const form = useRef();
    const [clickForm, setClickForm] = useState();
    // const [clearForm, setClearForm] = useState();
    const dispatch = useDispatch();
    
    // setClearForm(document.getElementsByName('contact-form')[0]);
    useEffect(() => {
        setClickForm(document.querySelectorAll(".form_submit")[0]); 
    },[])

    useEffect(() => {
        if (process === 'confirmed' || process === 'error') {
            dispatch(processSenEmail(process));
            setProcess('waiting');
        } 
    })

    if ( processs === 'confirmed') {
        setTimeout(() => {
            dispatch(processSenEmail('waiting'));
        },2000)
    } 
    useEffect(() => {
        if ( process === 'loading') {
            dispatch(processSenEmail('loading'));
    } 
    })
    if ( process === 'error') {
        dispatch(processSenEmail('error')); 
        setTimeout(() => {
            dispatch(processSenEmail('waiting'));
        },2000)
    } 
    return (
        <div className="form">
            <div className="form_contaiter">
                <Form name="contact-form" ref={form} onSubmit={(e) => {
                    clearError(); send(e, form, clickForm)}}>
                    <Form.Group className="mb-3 form_emailText" controlId="exampleForm.ControlInput1">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control className="form_email" type="email" name="from_name" placeholder="name@example.com" />
                    </Form.Group>
                    <Form.Group className="mb-3 form_textareaText" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Your message...</Form.Label>
                        <Form.Control className="form_message" as="textarea" style={{resize: 'none'}}  name="message"  rows={3} />
                        <Form.Control className="form_submit" type="submit" value="Send"/>
                    </Form.Group>
                </Form>
            </div>
        </div>
    )
}
export default ContactForm;


// value={email} onChange={e => setEmail(e.target.value)}
// value={message} onChange={e => setMessage(e.target.value) }