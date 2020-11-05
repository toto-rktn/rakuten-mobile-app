import React from 'react';
import { useSpring, animated } from 'react-spring'
import { connect } from 'react-redux'
import { Switch, Route, Link } from 'react-router-dom'

import Header from '../components/Header/Header'
import TopEyedraw from '../components/Card/TopEyedraw'
import ProductTitle from '../components/Product/ProductTitle'
import Product from '../components/Product/Product'

import './App.css';
import * as actionType from '../store/actions'

const App = (props) => {
  const fadeOut = useSpring({
    opacity: props.toggle ? 1 : 0,
    config: { duration: 200 }
  })

  return (
    <div className="App">
      <Header />
      <div className="outermost">

        <Link to="app">Application</Link>
        <br></br>
        <Link to="test">Test</Link>

        <Switch>
          <Route path='/app'>
            <animated.div style={fadeOut}>
              <TopEyedraw detailShown={props.detailShown}/>
              <ProductTitle detailShown={props.detailShown}/>
              <Product
                detailShown={props.detailShown}/>
            </animated.div>
          </Route>
          <Route path='/test'>
            <h1>Successfully Routed</h1>
          </Route>
        </Switch>
        
      </div>
    </div>
  )
}

const mapStateToProp = state => {
  return {
    toggle: state.service.toggle,
    detailShown: state.service.detailShown,
  }
}

const mapDispatchToProp = dispatch => {
  return {
    onInitBill: (items) => dispatch({type: actionType.ADD_ITEM_CLICKED, addedItems: items}),
    onToggleToggle: (val) => dispatch({type: actionType.TOGGLE_TOGGLE, toggleVal: val}),
    onToggleDetail: (val) => dispatch({type: actionType.TOGGLE_DETAIL, detailVal: val})
  }
}

export default connect(mapStateToProp, mapDispatchToProp)(App);
