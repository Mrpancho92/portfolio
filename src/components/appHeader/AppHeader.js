import { React } from 'react';
import { useMediaQuery } from 'react-responsive';
import { NavLink } from 'react-router-dom';
import Switch from '../switch/Switch';
import BurgerMenu from '../burgerMenu/burgerMenu';
import './appHeader.scss';
import '../../style/style.scss'
import { toggle } from '../../actions';
import { useSelector, useDispatch } from 'react-redux';

const AppHeader = () => {
    const counter = useSelector(state => state.counters.firstCounter);
    const isMobile = useMediaQuery({ query: `(max-width: 575px)` });
    if (counter) {
        Array.from( document.getElementsByTagName('html'))[0].classList.add('dark');
        
    } else {
        Array.from( document.getElementsByTagName('html'))[0].classList.remove('dark');
    }
    const localSave = () => {
        localStorage.setItem('rememberMe', !counter);  
    }
    const dispatch = useDispatch();
    console.log('render-AppHeader');
    
    return (
        <header className="app__header">
            <Switch
                isOn={counter}
                handleToggle={() => {
                    dispatch(toggle());
                    localSave();
                }}
            />
            <nav className="app__menu">
                { isMobile ?  <BurgerMenu/> :
                <ul>
                        <li className='navLi'>
                            <NavLink to="/">Home</NavLink>
                        </li>

                        <li className='navLi'>
                            <NavLink to="/projects">Projects</NavLink>
                        </li>

                        <li className='navLi'>
                            <NavLink to="/about">About me</NavLink>
                        </li>

                        <li className='navLi'>
                            <NavLink to="/contact">Contact</NavLink>
                        </li>
                    </ul> }
            </nav>
        </header>
    )
}
export default AppHeader;