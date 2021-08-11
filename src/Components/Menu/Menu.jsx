import React,{useState} from 'react';
import MenuAuth from './Menu-auth';
import MenuMain from './Menu-main';
import '../../Styles/Menu/Menu.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleRight} from '@fortawesome/free-solid-svg-icons';

function Menu() {
    const [toggle,setToggle] = useState(true);
    return (
        <header className={`menu ${toggle?'menuOpen':'menuClose'}`}>
            <MenuAuth />
            <MenuMain />
            <div className='toggle'>
                <FontAwesomeIcon className={`toggle-icon ${toggle?'open':'close'}`} onClick={()=>setToggle(!toggle)} icon={faChevronCircleRight} />
            </div>
        </header>
    ) 
}

export default Menu