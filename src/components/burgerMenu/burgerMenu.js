import { NavLink } from 'react-router-dom';
import './burgerMenu.scss';

const BurgerMenu = () => {
console.log('render4');
    return (
        <div className="menu">
            <input type="checkbox" id="burger-checkbox" className="burger-checkbox"/>
            <label htmlFor="burger-checkbox" className="burger"></label>
                <ul className='menu-list'>
                    <li className='navLi'>
                        <NavLink className="menu-item" to="/portfolio/home">Home</NavLink>
                    </li>

                    <li className='navLi'>
                        <NavLink className="menu-item" to="/portfolio/projects">Projects</NavLink>
                    </li>

                    <li className='navLi'>
                        <NavLink className="menu-item" to="/portfolio/about">About me</NavLink>
                    </li>

                    <li className='navLi'>
                        <NavLink className="menu-item" to="/portfolio/contact">Contact</NavLink>
                    </li>
                </ul>
        </div>
    )
}
export default BurgerMenu;
                        