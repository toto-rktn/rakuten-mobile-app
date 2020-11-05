import React from 'react'

import './TopEyedraw.css'
import alertIcon from '../../assets/images/alert.svg'
import * as strings from '../../assets/Strings/strings'

const link = "https://network.mobile.rakuten.co.jp/information/news/service/390/" 

const TopEyedrawSelect = (props) => {

    const selectPlanPage = (
        <div id="top-eyedraw-select-plan" className="card">
            <img className="small-img-icon" src={alertIcon} alt='alert'></img>
            <div id="eyedraw-content">
                <p className="bold">{strings.topEyedraw.fiveG}</p>
                <a href={link}>{strings.topEyedraw.detail}</a>
            </div>
        </div>
    )

    return (
        <div id='top-eyedraw'>
            selectPlanPage
        </div>
    )
}

export default TopEyedrawSelect