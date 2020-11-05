import React from 'react'
import { useSpring, animated } from 'react-spring'
import * as strings from '../assets/Strings/strings'

const CountChange = (props) => {
    const animeProp = useSpring({
        from: { value: props.start },
        to: { value: props.end },
        config: { duration: 600 }
    })

    const style = { 
        fontWeight: props.isTotal ? 900 : 450,
        fontSize: '20px'
    }

    return (
        <div>
            <span className='mid-font'>{strings.units.currencyMark}</span>
            <animated.span style={style}>
                { animeProp.value.interpolate(val => Math.floor(val)) }
            </animated.span>
        </div>
    )
}

export default CountChange