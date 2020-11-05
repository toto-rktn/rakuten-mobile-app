import React from 'react'

import ApplicationContent from './AsideProdComp/ApplicationDetail/ApplicationContent'
import Coupon from './AsideProdComp/Coupon'
import OtherProd from './AsideProdComp/OtherProd'

const asideProd = (props) => {
    return (
        <div className="aside-prod">

            <ApplicationContent detailShown={props.detailShown}/>
            { props.detailShown 
                ? null
                : (<div>
                        <Coupon />
                        <OtherProd />
                    </div>) 
            }
        </div>
    )
}

export default asideProd