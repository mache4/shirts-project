import { SUBMIT_ORDER, FETCH_ALL } from "../../constants/actionTypes";

export default function ordersReducer(state = { ordersData: [] }, action: any) {
    switch (action.type) {
        case SUBMIT_ORDER:
            return state;
        case FETCH_ALL:
            return { ordersData: action.data };
        default:
            return state;
    }
};