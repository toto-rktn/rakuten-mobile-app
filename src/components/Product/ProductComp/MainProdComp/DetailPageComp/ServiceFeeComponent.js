import React from 'react'
import yenIcon from '../../../../../assets/images/yen.svg'
import * as strings from '../../../../../assets/Strings/strings'


const serviceFeeComp = (props) => {
    return (
        <div style={{marginBottom: '40px'}}>
            <h2 style={{marginBottom: '24px'}}>{props.title}</h2>
            <div className='horizontal'>
                <img className="mid-img-icon icon-right-margin" src={yenIcon} alt='yen'></img>
                <p style={{ fontSize: '18px', fontWeight: 700 }}>{strings.serviceFee.fee}</p>
                <div className="on-the-right-end">
                    <p style={{fontSize: "18px"}}>{props.price}{strings.units.currency}</p>
                </div>
            </div>
            <p className="smaller-font" style={{textAlign: "right"}}>
                {strings.serviceFee.nextTimePayment}
            </p>
        </div>
    )
}

export default serviceFeeComp