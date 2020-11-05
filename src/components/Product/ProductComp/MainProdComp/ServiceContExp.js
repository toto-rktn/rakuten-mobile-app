import React, { useEffect } from 'react'
import style from 'styled-components'
import { connect } from 'react-redux'

import ServiceComponent from './DetailPageComp/ServiceComponent'
import SIMComponent from './DetailPageComp/SIMComponent'
import ServiceFeeComponent from './DetailPageComp/ServiceFeeComponent'

import circleIcon from '../../../../assets/images/circle.svg'
import voiceMailIcon from '../../../../assets/images/voice-mail.svg'
import exchangeIcon from '../../../../assets/images/exchange.svg'
import waitTimeIcon from '../../../../assets/images/wait-time.svg'
import IntlCallIcon from '../../../../assets/images/intl-call.svg'
import filterIcon from '../../../../assets/images/filter.svg'
import securityIcon from '../../../../assets/images/security.svg'
import androidIcon from '../../../../assets/images/android.svg'
import wifiIcon from '../../../../assets/images/wifi.svg'

import detailService from '../../../../FakeDB/detail-service.json'
import * as strings from '../../../../assets/Strings/strings'
import * as actionType from '../../../../store/actions'
import db_action from '../../../../methods/db_action'

const telecomImages = [voiceMailIcon, exchangeIcon, waitTimeIcon, IntlCallIcon]
const serviceImages = [wifiIcon, securityIcon, androidIcon, filterIcon]
const sim = detailService['sim-type'][0]
const serviceFee = detailService['service-fee'][0]

const ServiceCategoryP = style.p`
    margin-bottom: 10px;
`

const ServiceTitleH1 = style.h1`
    font-size: 30px;
    width: 85%;

    margin: 10px 10px auto 0;
    z-index: 0;
`

const ServiceContExp = (props) => {
    const title = props.plans.length === 0 ? "" : props.plans[0][0].title
    const description = props.plans.length === 0 ? [] : props.plans[0][0].description
    const plans = props.plans
    const onUpdatePlans = props.onUpdatePlans

    useEffect(() => {
        const fetchPlans = async () => {
            if (plans.length === 0) {
                await db_action.getStaticData('services', 'plans')
                        .then(res => onUpdatePlans(res.data.list))
                        .catch(err => console.error(err))
            }
        }

        fetchPlans()
    }, [plans, onUpdatePlans])

    const combineDataAndImages = (data, images) => {
        const combinedData = []
        for (let i = 0; i < data.length; i++) {
            const d = {
                ...data[i],
                image: images[i]
            }
            combinedData.push(d)
        }
        return combinedData
    }

    const selectPlanPage = (
        <div>
            <ServiceCategoryP className='mid-font'>{strings.topEyedraw.callAndData}</ServiceCategoryP>
            <div className="service-content-explanation">
                <img id="pink-circle" src={circleIcon} alt='circle'></img>
                {/* <ServiceTitleH1 className="boldest">{strings.mainCont.plan}</ServiceTitleH1> */}
                <ServiceTitleH1 className="boldest">{title}</ServiceTitleH1>
                <span className="script-gray bold mid-font">
                    {
                        description.map(content => {
                            return <p key={Math.random()}>{content}</p>
                        })
                    }
                </span>
            </div>
        </div>
    )

    const detailPage = (
        <div className="border-bottom">
            <div id='detail-content-top' style={{paddingBottom: '24px'}}>
                <h2 className='boldest'>{strings.mainCont.plan}</h2>
                <div>
                    <p>
                        <span className='small-font dim-gray bold' style={{ textDecoration: 'line-through' }}>
                            ¥2,980{strings.units.perMonty}
                        </span>
                    </p>
                </div>
            </div>

            <ServiceComponent 
                title="Telecom Service" 
                data={props.data}
                contents={combineDataAndImages(props.telecom, telecomImages)}
                />
            
            <ServiceComponent 
                title="Service" 
                data={props.data}
                contents={combineDataAndImages(props.services, serviceImages)}
                />
            
            <SIMComponent title="SIM Type" 
                btn1Title={sim['btn1Title']} btn2Title={sim['btn2Title']} 
                description={sim['description']} anotherLinkTitle={sim['anotherLinkTitle']}/>
            
            <ServiceFeeComponent title={serviceFee.title} price={serviceFee.price}/>
        </div>
    )

    return props.detailShown ? detailPage : selectPlanPage
}

const mapStateToProp = state => {
    return {
        telecom: state.service.telecom,
        services: state.service.services,
        plans: state.plan.plans
    }
}

const mapDispatchToProp = dispatch => {
    return {
        onUpdatePlans: (plan) => dispatch({type: actionType.UPDATE_PLANS, plan: plan})
    }
}

export default connect(mapStateToProp, mapDispatchToProp)(ServiceContExp)