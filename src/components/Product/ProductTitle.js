import React from 'react'
import style from 'styled-components'

import * as strings from '../../assets/Strings/strings'

const ProdTitleDiv = style.div`
    margin-top: 75px;
    height: 130px;

    margin: 45px 0;
`

const selectPlanPage = (
    <ProdTitleDiv>
        <h1>{strings.topEyedraw.plan}</h1>
        <h2 className='bold' style={{ fontSize: "30px"}}>{strings.topEyedraw.callAndData}</h2>
    </ProdTitleDiv>
)


const ProdTitle = (props) => {
    return props.detailShown ? null : selectPlanPage
}

export default ProdTitle