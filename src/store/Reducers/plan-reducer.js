import * as actionType from '../actions'

const initialState = {
    plans: []
}

const planReducer = (state = initialState, action) => {
    switch ( action.type ) {
        case actionType.UPDATE_PLANS:
            const updatedPlans = [...state.plans, action.plan]
            return {
                ...state,
                plans: updatedPlans
            }

        default:
            return state
    }
}

export default planReducer