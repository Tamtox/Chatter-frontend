import React,{useState} from 'react';
import '../../Styles/Menu/Menu-main.scss';

function MenuMain() {
    const [contactsActive,setContactsActive] = useState(true);
    return(
        <div className='menu-main'>
            <div className='menu-selector'>
                <div className={`menu-selector-item ${contactsActive&&'active-menu'}`} onClick={()=>setContactsActive(true)}>Contacts</div>
                <div className={`menu-selector-item ${!contactsActive&&'active-menu'}`} onClick={()=>setContactsActive(false)}>Chats</div>
            </div>
            <div className='menu-list'>
                {contactsActive?
                <React.Fragment>
                    <div className='contact box-shadow hover'>Contact</div>
                    <div className='contact box-shadow hover'>Contact</div>
                    <div className='contact box-shadow hover'>Contact</div>
                    <div className='contact box-shadow hover'>Contact</div>
                    <div className='contact box-shadow hover'>Contact</div>
                </React.Fragment>:
                <React.Fragment>
                    <div className='chat box-shadow hover'>Chat</div>
                    <div className='chat box-shadow hover'>Chat</div>
                    <div className='chat box-shadow hover'>Chat</div>
                    <div className='chat box-shadow hover'>Chat</div>
                    <div className='chat box-shadow hover'>Chat</div>
                    <div className='chat box-shadow hover'>Chat</div>
                </React.Fragment>
                }
            </div>
        </div>
    )
}

export default MenuMain