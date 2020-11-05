import React from 'react'
import style from 'styled-components'

import * as strings from '../../assets/Strings/strings'

const FooterDiv = style.div`
    text-align: center;
    padding-top: 16px;
    padding-bottom: 16px;
`

const footer = () => {
    return (
        <FooterDiv>
            <p className="smaller-font blue-gray">@ {strings.footer.compName}</p>
        </FooterDiv>
    )
}

export default footer