import React from 'react'
import style from 'styled-components'

import simIcon from '../../../../../assets/images/sim.svg'

const SIMButton = style.button`
    width: 260px;
    height: 60px;

    padding: 12px;
    margin: 24px 12px 24px 0;

    display: flex;
    align-items: center;

    border: 1.5px;
    border-style: solid;
    border-color: #CACBDB;
    border-radius: 5px;

    font: inherit;
    font-weight: bold;
    background-color: transparent;

    cursor: pointer;
`

const buttonNameStyle = {
    fontSize: "16px",
}

const simComp = (props) => {
    return (
        <div style={{marginBottom: '40px'}}>
            <h2>{props.title}</h2>
            <div className='horizontal'>
                <SIMButton>
                    <img className='mid-img-icon icon-right-margin' src={simIcon} alt="sim"></img>
                    <span style={buttonNameStyle}>{props.btn1Title}</span>
                </SIMButton>
                <SIMButton>
                    <img className='mid-img-icon icon-right-margin' src={simIcon} alt="sim"></img>
                    <span style={buttonNameStyle}>{props.btn2Title}</span>
                </SIMButton>
            </div>
            <p className='smaller-font'>{props.description}</p>
            <button className='no-effect-btn small-font'>{props.anotherLinkTitle}</button>
        </div>
    )
}

export default simComp