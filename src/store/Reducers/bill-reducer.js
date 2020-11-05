import * as actionType from '../../store/actions'

const initialBillState = {
    amount: 0,
    nexttime: 0,
    items: []
}

const calcBill = (balance, items, isAdd) => {
    let bill = balance;
    for (let item of items)
        bill += (isAdd ? item.price : -item.price)

    return Math.floor(bill)
} 

const billReducer = (billState = initialBillState, action) => {
    switch ( action.type ) {
        case actionType.ADD_ITEM_CLICKED:
            const updatedAddItems = [...billState.items, ...action.addedItems]
            return {
                ...billState,
                amount: calcBill(billState.amount, action.addedItems, true),
                items: updatedAddItems
            }

        case actionType.REMOVE_ITEM_CLICKED:
            const updatedRemoveItems = []
            for (let item of billState.items)
                if (item.title !== action.item.title)
                    updatedRemoveItems.push(item)

            return {
                ...billState,
                amount: calcBill(billState.amount, [action.item], false),
                items: updatedRemoveItems
            }

        case actionType.UPDATE_BILL:
            return {
                ...billState,
                amount: action.amount
            }

        case actionType.UPDATE_NEXTTIME:
            return {
                ...billState,
                nexttime: billState.nexttime + action.val
            }

        default:
            return billState
    }
}

export default billReducer