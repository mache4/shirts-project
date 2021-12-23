import { ADD_CART_ITEM, DELETE_CART_ITEM, RESET_CART_ITEMS } from "../../constants/actionTypes";
// GET_CART_ITEMS

export default function cartItems(state: any[] = [], action: any) {
    switch (action.type) {
        case ADD_CART_ITEM:
            return state.concat(action.data);
        case DELETE_CART_ITEM:
            return state.splice(action.index, 1);
        case RESET_CART_ITEMS:
            return [];
        default:
            return state;
    }
};