import React from 'react'

import './Header.css'
import * as strings from '../../assets/Strings/strings'
import logo from '../../assets/images/rm-logo.svg'
import cartIcon from '../../assets/images/shopping-cart.svg'
import loginIcon from '../../assets/images/login.svg'
import menuIcon from '../../assets/images/menu.svg'

const header = () => {
    return (
        <div id="header-container" className='header-horizontal'>
            <div className="header-horizontal">
                <img id="rm-logo" src={logo} alt="Rakuten Mobile"></img>
                <p className='header-right-margin'>{strings.header.apply}</p>
                <p className='header-right-margin'>{strings.header.support}</p>
            </div>
            <div style={{ margin: "0 0 0 auto"}} className='header-horizontal'>
                <img className="small-img-icon header-right-margin" src={cartIcon} alt="cart"></img>
                <img className="small-img-icon header-right-margin" src={loginIcon} alt="login"></img>
                <img className="small-img-icon header-right-margin" src={menuIcon} alt="menu"></img>
            </div>
        </div>
    )
}

export default header