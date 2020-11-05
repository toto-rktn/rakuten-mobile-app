import React from 'react'
import style from 'styled-components'

import mobilePhoneIcon from '../../../../assets/images/mobile-phone.svg'
import * as strings from '../../../../assets/Strings/strings'

const OtherProductDiv = style.div`
    display: flex;
    align-items: center;
    padding: 25px;
`

const otherProd = () => {
    return (
        <div className="other-products card box-shadow">
            <OtherProductDiv>
                <span>
                    <h2>{strings.otherProduct.productList}</h2>
                    <p 
                        className="small-font" 
                        style={{paddingBottom: "10px"}}>{strings.otherProduct.selectNote}</p>
                    <span>
                        <a  href="https://portal.mobile.rakuten.co.jp/smartphones"
                            className="no-effect-btn">{strings.otherProduct.selectFirst}　→</a>
                    </span>
                </span>
                <img className="center-image" 
                    src={mobilePhoneIcon}
                    alt='mobile phone'></img>
            </OtherProductDiv>
        </div>
    )
}

export default otherProd