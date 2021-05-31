import CartActionTypes from './cart-types'
import CartActionTYpes from './cart-types'

export const toggleCartHidden  = () =>({
  type: CartActionTYpes.TOGGLE_CART_HIDDEN
})

export const addItem = item =>({
  type: CartActionTypes.ADD_ITEM,
  payload: item
})