import * as actionType from '../actions'

const initialState = {
    toggle: true,
    detailShown: false,
    telecom: [],
    telecomSelectedItems: [],
    services: [],
    serviceSelectedItems: []
}

const serviceReducer = (state = initialState, action) => {
    switch ( action.type ) {

        case actionType.TOGGLE_TOGGLE:
            return {
                ...state,
                toggle: !state.toggle,
            }

        case actionType.TOGGLE_DETAIL:
            return {
                ...state,
                detailShown: !state.detailShown
            }

        case actionType.UPDATE_TELECOM:
            return {
                ...state,
                telecom: action.telecomData
            }

        case actionType.ADD_ITEM_TELECOM:
            const updatedTelecomItems = [...state.telecomSelectedItems, action.item]
            return {
                ...state,
                telecomSelectedItems: updatedTelecomItems
            }

        case actionType.REMOVE_ITEM_TELECOM:
            let removedTelecomItems = []
            for (let item of state.telecomSelectedItems) {
                if (action.item.title !== item.title) {
                    removedTelecomItems.push(item)
                }
            }

            return {
                ...state,
                telecomSelectedItems: removedTelecomItems
            }

        case actionType.ADD_ITEM_SERVICE:
            const updatedServiceItems = [...state.serviceSelectedItems, action.item]

            return {
                ...state,
                serviceSelectedItems: updatedServiceItems
            }

        case actionType.REMOVE_ITEM_SERVICE:
            let removedServiceItems = []
            for (let item of state.serviceSelectedItems) {
                if (action.item.title !== item.title) {
                    removedServiceItems.push(item)
                }
            }

            return {
                ...state,
                serviceSelectedItems: removedServiceItems
            }

        case actionType.UPDATE_SERVICES:
            return {
                ...state,
                services: action.serviceData
            }

        default:
            return state
    }
}

export default serviceReducer