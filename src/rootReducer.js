import { ADD, REMOVE } from "./actionTypes";
// import ItemsApi from "./Api";

import data from "./data.json";
const INITIAL_STATE = { items: data.products, cartItems: {} };

function rootReducer(state = INITIAL_STATE, action) {
  console.log("reducer ran; state & action:", state, action);

  switch (action.type) {
    case ADD:
      const newItem = {...action.payload}
      let cartItems = {...state.cartItems}
      cartItems[newItem] = cartItems[newItem] + 1 || 1 

      return { ...state, cartItems: cartItems };

    // case REMOVE:
    //   return { ...state, count: state.count - 1 };
 
    default:
      return state;
  }
}
// end

export default rootReducer;
