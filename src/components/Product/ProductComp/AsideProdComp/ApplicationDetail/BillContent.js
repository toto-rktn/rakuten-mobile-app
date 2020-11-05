import React from 'react'
import BillPrice from './BillPrice'

import { connect } from 'react-redux'

const onTheTop = {
    margin: '0 0 auto 0'
}

const paddingWithoutBottom = {
    padding: '18px 18px 0 18px'
}

const alignRightPadBot = {
    textAlign: 'right', 
    paddingBottom: '0px'
}

const billContent = (props) => {
    return (
        <div className='horizontal border-bottom' style={paddingWithoutBottom}>
            <p className='bold' style={onTheTop}>
                {props.content.title}
            </p>
            <div id="prices" className='on-the-right-end' style={alignRightPadBot}>
                <BillPrice 
                    price={Math.floor(props.content.monthly)} 
                    category="月額"
                    isTotal={props.isTotal}/>
                { 
                    props.oneTimeBill !== null
                    ? <BillPrice 
                        price={props.content.onetime} 
                        category="一括価格"
                        isTotal={props.isTotal}/>
                    : null
                }

                <BillPrice 
                    price={props.content ? Math.floor(props.content.nexttime) : 0} 
                    category="次回請求"
                    isTotal={props.isTotal} 
                    startVal={10}/>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return { 
        amount: state.bill.amount,
        nexttime: state.bill.nexttime
    }
}

export default connect(mapStateToProps)(billContent)