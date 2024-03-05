import { useState, useCallback } from 'react';
import emailjs from '@emailjs/browser';


export const useEmailJs = () => {
    const [process, setProcess] = useState('waiting');

    const send = async(e , form, clickForm) => {
        e.preventDefault();
        setProcess('loading');
        // setTimeout(() => {
        //     clickForm.blur();
        // },400)
         console.log('dddddd');
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
      
      await  emailjs.sendForm(serviceID, templateID, form.current, options ).then(
            (response) => {
              console.log('SUCCESS!', response.status, response.text);
              setProcess('confirmed');
              clickForm.blur();
            },
            (error) => {
              console.log('FAILED...', error.text);
              setProcess('error');
            },
          );
       }
    const clearError = useCallback(() => {
        setProcess('waiting');
    }, []);
       return { send, process, setProcess, clearError}
}

