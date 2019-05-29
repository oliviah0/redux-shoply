import { ADD, REMOVE } from "./actionTypes";
// import ItemsApi from "./Api";

import data from "./data.json";
const INITIAL_STATE = { items: data.products, cartItems: {} };

function rootReducer(state = INITIAL_STATE, action) {
  console.log("reducer ran; state & action:", state, action);

  // let id = action.payload.id
  let cartItems = { ...state.cartItems }

  switch (action.type) {
    case ADD:
      cartItems[action.payload.id] = cartItems[action.payload.id] + 1 || 1

      return { ...state, cartItems: cartItems };

    case REMOVE:
      if (cartItems[action.payload.id]) {
        cartItems[action.payload.id] = cartItems[action.payload.id] - 1
        if (cartItems[action.payload.id] <= 0) {
          delete cartItems[action.payload.id]
        }
        return { ...state, cartItems: cartItems };
      } else {
        return state
      }

    default:
      return state;
  }
}
// end

export default rootReducer;
