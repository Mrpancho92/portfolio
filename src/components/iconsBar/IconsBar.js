import { useEffect } from 'react';
import './iconsBar.scss';
import { Envelope, Github, Telegram, Whatsapp } from 'react-bootstrap-icons';

const IconsBar = ({onChange}) => {
    useEffect(() => {
        let element = document.querySelector('.homePage_text');
        if (element) {
          const r =  document.querySelector('.iconsBar_iconsContainer');
                r.style = `width: 90%;`
        } 
    }, [])
    return (
        <div className="iconsBar_iconsContainer">
            <a href="mailto:mrpancho@mail.ru">
                <Envelope color={onChange ? "white" : "gray"} size={50} />
            </a>
            <a href="https://github.com/Mrpancho92">
                <Github color={onChange ? "white" : "gray"} size={50} />
            </a>
            <a href="https://t.me/MrPancho0">
                <Telegram color={onChange ? "white" : "gray"} size={50} />
            </a>
            <a href="https://wa.me/79099322725">
                <Whatsapp color={onChange ? "white" : "gray"} size={50} />
            </a>
        </div>
    )
}
export default IconsBar;