const ErrorMessageContactForm = () => {
    return (
        <div className="popupModalLoading">
                <p>Ошибка при отправке....!
                    <span class="ec ec-x"></span>
                <br/>
                    <div>Повторная отправка возможна через 10с.</div>
               </p> 
        </div>
    //    <img src={process.env.PUBLIC_URL + '/error.gif'} alt="Error" />  - если надо взять из папки public 
    ) 
}
// style={{display: 'block', width: '250px', height: '250px', objectFit:'contain', margin: '0 auto'}}
export default ErrorMessageContactForm;