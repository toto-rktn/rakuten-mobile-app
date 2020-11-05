import React from 'react'

import QRCode from '../../../../../assets/images/qr-code.svg'

const appBtn = (
    <div style={{padding: '16px 25px 0 25px'}}>
        <button 
            className='bg-pink-btn boldest'
            style={{width: '100%'}}>この内容で申し込む</button>
    </div>
)

const qr = (
    <div className='horizontal' style={{padding: "0 25px 25px 25px"}}>
        <img style={{width: '32px'}} className="icon-right-margin" src={QRCode} alt="qr"></img>
        <p　className="small-font">
            <span>
                <button className="no-effect-btn">QRコード</button>
            </span>の保存 で、いつでも後から申し込みを再開できます
        </p>
    </div>
)

const rktnPt = (props) => {
    return (
        <div style={{backgroundColor: "#F7F7F7"}}>
            {
                props.detailShown
                ? appBtn
                : null
            }

            <div className="rakuten-point-card-container">
                <div className="rakuten-point-card">
                    <h2>楽天ポイント</h2>
                    <p className="small-font">楽天モバイルのお支払いにポイントをご利用できます。</p>
                </div>
            </div>

            { props.detailShown ? qr : null }
        </div>
    )
}

export default rktnPt