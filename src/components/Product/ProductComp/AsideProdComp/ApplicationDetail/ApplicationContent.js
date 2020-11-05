import React from 'react'
import { connect } from 'react-redux'

import BillContent from './BillContent'
import Footnote from './Footnote'
import RktnPt from './RktnPt'

import * as strings from '../../../../../assets/Strings/strings'

const AppContent = (props) => {

    const billContent = (title, monthly, onetime, nexttime) => {
        return {
            title, monthly, onetime, nexttime
        }
    }

    return (
        <div className="card shop-cart box-shadow">
            <div className="app-content-title">
                <h2>{strings.applicationContent.appContent}</h2>
                <p className="small-font">{strings.applicationContent.note}</p>
            </div>

            { 
                props.detailShown
                ? (<div>
                        <BillContent content={ billContent("Rakuten UN-LIMIT V", props.monthly, 0, props.nexttime) } isTotal={false}/>
                        <BillContent content={ billContent("消費税", props.monthly * 0.1, 0, props.nexttime * 0.1) } isTotal={false}/>
                        <BillContent content={ billContent("合計（税込）", props.monthly * 1.1, 0, props.nexttime * 1.1) } isTotal={true}/>
                        <Footnote />
                    </div>) : null
            }

            <RktnPt detailShown={props.detailShown}/>
        </div>
    )
}

const mapStateToProp = state => {
    return {
        monthly: state.bill.amount,
        nexttime: state.bill.nexttime,
    }
}

export default connect(mapStateToProp)(AppContent)