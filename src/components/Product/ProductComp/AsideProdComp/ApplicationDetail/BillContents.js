import React from 'react'
import BillContent from './BillContent'


/*
 * @param props.contents = [{
 *      title, monthlyBill, oneTimeBill, nextTimeBill
 * }, ...]
 */

const billContents = (props) => props.contents.map((content) => {
    return <BillContent 
                content={content}
                key={content.key}/>
})


export default billContents