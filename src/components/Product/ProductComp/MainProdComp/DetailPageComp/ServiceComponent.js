import React, { Component } from 'react'
import Contents from './Contents'
import * as strings from '../../../../../assets/Strings/strings'

/**
 * This class is a blueprint for each service section (telecom, service, sim-type, etc)
 */
class ServiceComponent extends Component {

    constructor(props) {
        super(props)
        this.state = { contents: props.contents }
    }

    /*
     * Purpose: translates state.contents into a list of Content React component
       then return it to render
     * Input: none
     */
    showListContents = () => {
        return <Contents contents={this.state.contents} title={this.props.title}/>
    }

    render() {
        return (
            <div style={{marginBottom: '24px'}}>
                <h2 style={{fontSize: "25px"}}>{this.props.title}</h2>
                <button className='no-effect-btn smaller-font'>
                    {strings.serviceComp.serviceList} →
                </button>
                {this.props.needAnotherLink ? this.otherLinkButton : null}
                {this.showListContents()}
            </div>
        )
    }
}

export default ServiceComponent