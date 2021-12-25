import { ADD_CART_ITEM, REMOVE_CART_ITEM, PATCH_CART_ITEM, RESET_CART_ITEMS } from "../../constants/actionTypes";
// GET_CART_ITEMS

export default function cartItems(state: any[] = [], action: any) {
    switch (action.type) {
        case ADD_CART_ITEM:
            return state.concat(action.data);
        case REMOVE_CART_ITEM:
            return state.filter((i: any) => i.id !== action.id);
        case PATCH_CART_ITEM:
            return state.map((i: any) => {
                if (i.id === action.id)
                    return { ...i, number: action.number }
                else
                    return i;
            });
        case RESET_CART_ITEMS:
            return [];
        default:
            return state;
    }
};