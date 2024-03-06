import Spinner from "../spinner/Spinner";
import './popupModalLoading.scss';  

const PopupModalLoading = () => {
    return (
        <div className="popupModalLoading">
           <p>Отправка прошла успешно!
            <span className="ec ec-slightly-smiling-face"></span>
            </p> 
        </div>
    )
}
export default PopupModalLoading;