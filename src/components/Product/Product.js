import React, { useState } from 'react'

import MainProd from './ProductComp/MainProd'
import AsideProd from './ProductComp/AsideProd'

import './Product.css'


const Product = (props) =>  {
    const [redirect, setRedirect] = useState(null)

    const moreInfoCliked = () => {
        const url = "https://network.mobile.rakuten.co.jp/fee/un-limit/?source=ecomm"
        setRedirect(url)
    }

    if (redirect) {
        window.location = redirect
        return
    }

    const content = (
        <div style={{ display: 'flex', marginBottom: '32px'}}>
            <MainProd 
                moreInfo={moreInfoCliked}
                detailShown={props.detailShown}/>
            <AsideProd
                detailShown={props.detailShown}/>
        </div>
    )
    return content
}


export default Product