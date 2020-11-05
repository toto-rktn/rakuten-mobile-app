import React from 'react'
import { connect } from 'react-redux'

import './TopEyedraw.css'
import * as actionType from '../../store/actions'

import alertIcon from '../../assets/images/alert.svg'
import * as strings from '../../assets/Strings/strings'

const link = "https://network.mobile.rakuten.co.jp/information/news/service/390/" 

const NotifCard = (props) => {
    const whenPlanClicked = () => {
        props.onToggleToggle()
        setTimeout(() => {
            props.onToggleDetail()
            setTimeout(() => {
                props.onToggleToggle()
            }, 250)
        }, 250)
    }

    const selectPlanPage = (
        <div id="top-eyedraw-select-plan" className="card">
            <img className="small-img-icon" src={alertIcon} alt='alert'></img>
            <div id="eyedraw-content">
                <p className="bold">{strings.topEyedraw.fiveG}</p>
                <a href={link}>{strings.topEyedraw.detail}</a>
            </div>
        </div>
    )

    const detailPage = (
        <div id="top-eyedraw-detail">
            <button className="no-effect-btn small-font" onClick={whenPlanClicked}>
                ←　{strings.topEyedraw.plan}
            </button>
            <p className="bold">{strings.topEyedraw.callAndData}</p>
            <p className="small-font">{strings.topEyedraw.taxNote}</p>
        </div>
    )

    return (
        <div id='top-eyedraw'>
            {props.detailShown ? detailPage : selectPlanPage}
        </div>
    )
}

const mapDispatchToProp = dispatch => {
    return {
        onToggleDetail: (val) => dispatch({type: actionType.TOGGLE_DETAIL}),
        onToggleToggle: (val) => dispatch({type: actionType.TOGGLE_TOGGLE})
    }
}

export default connect(null, mapDispatchToProp)(NotifCard)