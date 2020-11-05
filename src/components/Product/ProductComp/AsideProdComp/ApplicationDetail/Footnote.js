import React from 'react'
import infoIcon from '../../../../../assets/images/info.svg'

const infoIconStyle = {
    width: '16px',
    height: 'auto',
    marginRight: '4px',
}

const infoDivStyle = {
    padding: '24px'
}

const footnote = (props) => {
    return (
        <div style={infoDivStyle}>
            <img style={infoIconStyle} src={infoIcon} alt='info'></img>
            <span className='small-font'>分割払いを選択された場合は、表示される金額と実際にお支払いいただく金額が異なる場合があります</span>
        </div>
    )
}

export default footnote