import React from 'react'
import style from 'styled-components'

import CountChange from '../../../../../AnimatedComp/CountChange'

const BillPriceDiv = style.div`
    margin-bottom: 16px;
`

const billPrice = (props) => {
    return (
        <BillPriceDiv>
            <CountChange 
                start={props.startVal ? props.startVal : 0} 
                end={props.price}
                isTotal={props.isTotal} />            
            <p style={{fontSize: "14px"}}> {props.category} </p>
        </BillPriceDiv>
    )
}

export default billPrice