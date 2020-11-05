import React from 'react'
import { connect } from 'react-redux'
import style from 'styled-components'
import './Content.css'

// import checked from '../../../../../assets/images/checked.svg'
import AddBtn from '../../../../../AnimatedComp/AddBtn'
import * as strings from '../../../../../assets/Strings/strings'

const ContentDiv = style.div`
    padding: 16px 0;
`

const IconImg = style.img`
    margin: 0 16px auto 0;
`

const TitleP = style.p`
    font-size: 18px;
    font-weight: 700;
`

const SelectedBtn = (
    <div className='horizontal'>
        <p className="bold">{strings.serviceContent.added}</p>
        {/* <img className="small-img-icon" src={checked} alt='checked'></img> */}
    </div>
)

const Content = (props) => {
    const isSelected = (category, content) => {
        if (content.selected) {
            return true
        }

        const selectedItems = category === "Telecom Service" 
            ? props.telecomSelectedItems
            : props.serviceSelectedItems
        
        for (let item of selectedItems) {
            if (item.title === content.title) {
                return true
            }
        }

        return false
    }

    const selected = isSelected(props.title, props.content)
    const locked = props.content.selected

    return (
        <ContentDiv className='horizontal'>
            <IconImg className='small-img-icon' src={props.icon} alt="content icon"></IconImg>
            <div id='detail-content-without-img'>
                <div id="detail-content-without-img-top" className='horizontal' style={{ marginBottom: "14px" }}>
                    <TitleP>{props.content.title}</TitleP>
                    <div className='on-the-right-end'>
                        { 
                            <AddBtn content={props.content} title={props.title} selected={selected} isLocked={locked}>
                                {selected ? SelectedBtn : strings.serviceContent.add}
                            </AddBtn>
                        }
                    </div>
                </div>
                <p className='bold small-font'>
                    <span>{strings.units.currencyMark}</span>
                    {props.content.price}
                </p>
                <p className='small-font' style={{width: '80%'}}>{props.content.description}</p>
            </div>
        </ContentDiv>
    )
}

const mapStateToProp = state => {
    return { 
        addedItems: state.bill.items,
        telecomSelectedItems: state.service.telecomSelectedItems,
        serviceSelectedItems: state.service.serviceSelectedItems
    }
}

export default connect(mapStateToProp)(Content)