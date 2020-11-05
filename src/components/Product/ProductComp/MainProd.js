import React from 'react'

import ServiceContFooter from './MainProdComp/ServiceContFooter'
import ServiceContExp from './MainProdComp/ServiceContExp'

const mainProd = (props) => {
    return (
        <div className="card main-prod box-shadow">
            
            <ServiceContExp
                data={props.data}
                detailShown={props.detailShown} />
            <ServiceContFooter 
                detailShown={props.detailShown}/>
        
        </div>
    )
}

export default mainProd