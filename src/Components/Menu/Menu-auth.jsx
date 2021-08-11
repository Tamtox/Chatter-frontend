import React,{ useState } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import '../../Styles/Menu/Menu-auth.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser} from '@fortawesome/free-regular-svg-icons';
import { faSignOutAlt,faSignInAlt} from '@fortawesome/free-solid-svg-icons';

function MenuAuth() {
    const isLoggedIn = true;
    return (
        <div className='menu-auth'>
            <div className='menu-auth-username'>
                {`Tamtox`}
            </div>
            <div className='menu-auth-icons'>
                {isLoggedIn?
                <React.Fragment>
                    <FontAwesomeIcon className={`icon hover-filter`}  icon={faUser} />
                    <FontAwesomeIcon className={`icon hover-filter`}  icon={faSignOutAlt} />
                </React.Fragment>:
                <FontAwesomeIcon  className={`icon hover-filter`}  icon={faSignInAlt} />
                }
            </div>
        </div>
    )
}

export default MenuAuth