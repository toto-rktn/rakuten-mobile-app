import React from 'react'
import { useSpring, animated } from 'react-spring'
import { connect } from 'react-redux'

import db_action from '../../../../methods/db_action'

import * as actionType from '../../../../store/actions'
import './ServiceContFooter.css'

import whiteShopCartIcon from '../../../../assets/images/shopping-cart-white.svg'
import * as strings from '../../../../assets/Strings/strings'

const ServiceContFooter = (props) => {
    const plans = props.plans.length === 0 ? [] : props.plans[0]

    const animeProp = useSpring({
        to: { 
            number: plans.length === 0 ? 0 : plans[0].cost 
        }, 
        from: { 
            number: 0 
        }
    })

    const whenClicked = async () => {
        const preSelected = []

        await db_action.getStaticData('add-ons', 'telecom')
                .then(res => { 
                    for (let item of res.data.items)
                        if (item.selected)
                            preSelected.push(item)
                    props.onUpdateTelecom(res.data.items)
                }).catch(err => console.error(err))

        await db_action.getStaticData('add-ons', 'service')
                .then(res => { 
                    for (let item of res.data.items)
                        if (item.selected)
                            preSelected.push(item)
                    props.onUpdateService(res.data.items) 
                }).catch(err => console.error(err))

        await db_action.getStaticData('services', 'fee')
                .then(res => {
                    props.onUpdateNextTime(res.data.list[0].cost)
                }).catch(err => console.error(err))
        
        props.onUpdateBill(props.amount === 0 ? props.nexttime : props.amount)
        props.onAddBill(preSelected)
        
        props.onToggleToggle()
        setTimeout(() => { 
            // toggle detail in .25 sec
            props.onToggleDetail()
            // toggle back in .25 sec
            setTimeout(() => { 
              props.onToggleToggle() 
            }, 250)
        }, 250)
    }

    const selectPlanPage = (
        <div className="service-content-footer">
            <div id="price-container">
                <p id="service-cost-amount">
                    <animated.span>{animeProp.number.interpolate(val => Math.floor(val))}</animated.span>
                    <span id="service-cost-unit">{strings.units.currency}</span>
                </p>
                <p className="small-font">{strings.units.perMonty}</p>
            </div>
    
            <div id="service-options" className="horizontal">
                <button 
                    id="more-info" 
                    className="no-effect-btn main-footer-button mid-font"
                    onClick={props.moreInfo}>
                    {strings.mainContFooter.moreDetail}
                </button>
                <button 
                    id="choose-btn" 
                    className="no-effect-btn main-footer-button mid-font"
                    onClick={() => {
                        whenClicked()
                    }}>
                    <img 
                        src={whiteShopCartIcon} alt='cart'
                        className="small-img-icon icon-right-margin"></img>
                    {strings.mainContFooter.selectPlan}
                </button>
            </div>
        </div>
    )
    
    const detailPage = (
        <div style={{paddingTop: "30px"}}>
            <button className="bg-pink-btn boldest" style={{width: "90%", fontSize: '18px'}}>
                {strings.mainContFooter.selectProduct}
            </button>
        </div>
    )

    return props.detailShown ? detailPage : selectPlanPage
}

const mapStateToProp = state => {
    return {
        amount: state.bill.amount,
        nexttime: state.bill.nexttime,
        toggle: state.service.toggle,
        detailShown: state.service.detailShown,
        telecom: state.service.telecom,
        plans: state.plan.plans
    }
}
  
const mapDispatchToProp = dispatch => {
    return {
        onUpdateBill: (val) => dispatch({type: actionType.UPDATE_BILL, amount: val}),
        onAddBill: (items) => dispatch({type: actionType.ADD_ITEM_CLICKED, addedItems: items}),
        onUpdateNextTime: (val) => dispatch({type: actionType.UPDATE_NEXTTIME, val: val}),

        onToggleToggle: () => dispatch({type: actionType.TOGGLE_TOGGLE}),
        onToggleDetail: () => dispatch({type: actionType.TOGGLE_DETAIL}),
        onUpdateTelecom: (val) => dispatch({type: actionType.UPDATE_TELECOM, telecomData: val}),
        onUpdateService: (val) => dispatch({type: actionType.UPDATE_SERVICES, serviceData: val})
    }
}

export default connect(mapStateToProp, mapDispatchToProp)(ServiceContFooter)