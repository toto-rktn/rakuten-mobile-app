import React from 'react'

import couponIcon from '../../../../assets/images/coupon.svg'
import * as strings from '../../../../assets/Strings/strings'

const coupon = () => {
    return (
        <div id="coupon">
            <button className="no-effect-btn" id="coupon-button">
                <img 
                    src={couponIcon} alt='coupon'
                    className="mid-img-icon icon-right-margin"></img>
                <p style={{fontSize: "18px", color: "#000037"}}>{strings.coupon.useCoupon}</p>
            </button>
        </div>
    )
}

export default coupon