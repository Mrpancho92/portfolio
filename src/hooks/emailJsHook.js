import { useState, useCallback } from 'react';
import emailjs from '@emailjs/browser';


export const useEmailJs = () => {
    const [process, setProcess] = useState('waiting');
    const send = async(e , form, clickForm) => {
        e.preventDefault();
        setProcess('loading');

        // Данные для работы с emailjs
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
        // Валидация формы отправки данных
        const email = form.current[0].value
        const textLabelEmail = form.current.querySelectorAll('.form-label');
        const message = form.current[1].value
       if (!(email.includes('@') && email.includes('.') && !email.includes(' '))) {
        form.current[0].style.border = '1px solid rgba(255, 51, 51, 0.94)';
        textLabelEmail[0].style.color = 'rgba(255, 51, 51, 0.94)';
        textLabelEmail[0].textContent = 'Email address (Неправильный адрес!)';
        form.current[0].focus();
        setProcess('waiting')
       }
       if (!message.length > 0) {
        form.current[1].style.border = '1px solid rgba(255, 51, 51, 0.94)';
        textLabelEmail[1].style.color = 'rgba(255, 51, 51, 0.94)';
        textLabelEmail[1].textContent = 'Your message... (Заполните поле ввода!)';
        form.current[1].focus();
        setProcess('waiting')
       } 
       if (email.includes('@') && email.includes('.') && !email.includes(' ')) {
        textLabelEmail[0].textContent = 'Email address';
        textLabelEmail[0].style.color = 'inherit';
        form.current[0].style.border = 'none';
       }
       if (message.length > 0) {
        textLabelEmail[1].textContent = 'Your message...';
        textLabelEmail[1].style.color = 'inherit';
        form.current[1].style.border = 'none';
       }

       if (email.includes('@') && email.includes('.') && !email.includes(' ') && message.length > 0) {
        form.current[1].style.border = 'none';
       // Отправка данных через emailjs
      await  emailjs.sendForm(serviceID, templateID, form.current, options ).then(
            (response) => {
              console.log('SUCCESS!', response.status, response.text);
              setProcess('confirmed');
              clickForm.blur();
              form.current.reset();
            },
            (error) => {
              console.log('FAILED...', error.text);
              setProcess('error');
              // clickForm.blur();
              form.current.reset();
            },
          );
       } 
    }
    const clearError = useCallback(() => {
        setProcess('waiting');
    }, []);

       return { send, process, setProcess, clearError}
}

