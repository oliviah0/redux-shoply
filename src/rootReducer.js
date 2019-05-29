import { ADD, REMOVE } from "./actionTypes";
// import ItemsApi from "./Api";

import data from "./data.json";
const INITIAL_STATE = { 
  items: data.products, 
  cartItems: {},
  cartTotal: 0.0
};

function calcTotal(items, cartItems) {

  let totals = Object.entries(cartItems).map(item => items[item[0]].price * item[1])
  return totals.reduce(function(accum, val) {
    accum += val
    return accum
  }, 0)

}

function rootReducer(state = INITIAL_STATE, action) {
  console.log("reducer ran; state & action:", state, action);

  // let id = action.payload.id
  let cartItems = { ...state.cartItems }
  let total;

  switch (action.type) {
    case ADD:
      cartItems[action.payload.id] = cartItems[action.payload.id] + 1 || 1

      total = calcTotal(state.items, cartItems);

      return { ...state, cartItems: cartItems, cartTotal: total };

    case REMOVE:
      if (cartItems[action.payload.id]) {
        cartItems[action.payload.id] = cartItems[action.payload.id] - 1
        if (cartItems[action.payload.id] <= 0) {
          delete cartItems[action.payload.id]
        }
        total = calcTotal(state.items, cartItems);

        return { ...state, cartItems: cartItems, cartTotal: total };
      } else {
        return state
      }

    default:
      return state;
  }
}
// end

export default rootReducer;
