// import {Link, NavLink} from 'react-router-dom';
import { React, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import { NavLink } from 'react-router-dom';
import Switch from '../switch/Switch';
import BurgerMenu from '../burgerMenu/burgerMenu';
import './appHeader.scss';
import '../../style/style.scss'
import { toggle } from '../../actions';
import { useSelector, useDispatch } from 'react-redux';

const AppHeader = () => {
    // const [value, setValue] = useState(false); 
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
// const AppHeader = () => {
//     return (
//         <header className="app__header">
//             <h1 className="app__title">
//                 <Link to="/marvel">
//                     <span>Marvel</span> information portal
//                 </Link>
//             </h1>
//             <nav className="app__menu">
//                 <ul>
//                     <li>
//                         <NavLink 
//                         end 
//                         // activeStyle={{'color': 'green'}} 
//                         style={({ isActive }) => ({color: isActive ? 'green': 'inherit' })}
//                         to="/marvel">Characters</NavLink></li>
//                     /
//                     <li>
//                         <NavLink 
//                         end 
//                         style={({ isActive }) => ({color: isActive ? 'green': 'inherit' })} 
//                         to="/comics">Comics</NavLink></li>
//                 </ul>
//             </nav>
//         </header>
//     )
// }
// const mapStateToProps = (state) => {
//     return {
//         counter: state
//     }
// } 

// const mapDispatchToProps = (dispatch) => {
//     return {
//         toggle: () => dispatch({type: 'toggle'})
//     } 
// }

// export default connect(mapStateToProps, mapDispatchToProps)(AppHeader);

export default AppHeader;