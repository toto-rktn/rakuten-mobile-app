import React, { useState, useEffect } from 'react'
import { useSpring, animated } from 'react-spring'
import { connect } from 'react-redux'

import * as actionType from '../store/actions'

const contrastColor = '#95A6AC'

const AddBtn = (props) => {
    const [isSelected, setIsSelected] = useState(props.selected)
    const [toggleStyle, setToggleStyle] = useState(false)
    useEffect(() => { 
        setIsSelected(props.selected)
    }, [props.selected])

    const selectedStyle = {
        backgroundColor: toggleStyle ? "#000037" : "white",
        color: toggleStyle ? "white" : "#000037",

        border: '1px',
        borderStyle: 'solid',
        borderRadius: '7px',
        borderColor: toggleStyle ? "white" : "#000037"
    }

    const notSelectedStyle = {
        backgroundColor: toggleStyle ? contrastColor : "white",
        color: toggleStyle ? "white" : contrastColor, 

        border: '1px',
        borderStyle: 'solid',
        borderRadius: '7px',
        borderColor: contrastColor
    }

    const bgChange = useSpring({
        ...(isSelected ? selectedStyle : notSelectedStyle),

        border: '1px',
        borderStyle: 'solid',
        borderRadius: '7px',

        padding: '8.5px 16px',
        cursor: 'pointer',
        config: { duration: 200 }
    })

    const lockedStyle = {
        backgroundColor: "lightgray",
        color: "white",

        border: '1px',
        borderColor: isSelected ? "lightgray" : contrastColor,
        borderStyle: 'solid',
        borderRadius: '7px',

        padding: '8.5px 16px',
    }

    const onClickSlected = () => {
        if (props.title === "Telecom Service")
            props.onRemoveTelecomItem(props.content)
        else if (props.title === "Service")
            props.onRemoveServiceItem(props.content)
        
        props.onRemoveItem(props.content)
    }
    const onClickNotSelected = () => {
        if (props.title === "Telecom Service")
            props.onAddTelecomItem(props.content)
        else if (props.title === "Service")
            props.onAddServiceItem(props.content)
        
        props.onAddItem(props.content)
    }

    return (
        <animated.button className="boldest" style={ props.isLocked ? lockedStyle : bgChange }
            onMouseOver={ () => { setToggleStyle(true) } }
            onMouseLeave={ () => { setToggleStyle(false) } }
            onClick={() => isSelected ? onClickSlected() : onClickNotSelected()}>
                {props.children}
        </animated.button>
    )
}

const mapStateToProps = state => {
    return { 
        amount: state.amount
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAddTelecomItem: (item) => dispatch({type: actionType.ADD_ITEM_TELECOM, item: item}),
        onAddServiceItem: (item) => dispatch({type: actionType.ADD_ITEM_SERVICE, item: item}),
        onAddItem: (item) => dispatch({type: actionType.ADD_ITEM_CLICKED, addedItems: [item]}),

        onRemoveTelecomItem: (item) => dispatch({type: actionType.REMOVE_ITEM_TELECOM, item: item}),
        onRemoveServiceItem: (item) => dispatch({type: actionType.REMOVE_ITEM_SERVICE, item: item}),
        onRemoveItem: (item) => dispatch({type: actionType.REMOVE_ITEM_CLICKED, item: item}),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(AddBtn)