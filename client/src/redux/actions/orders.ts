import { FETCH_ALL, SUBMIT_ORDER } from '../../constants/actionTypes';
import * as api from '../../api/index';

export const submitOrder = (orderData: any) => async (dispatch: any) => {
    try {
        await api.submitOrder(orderData);

        dispatch({ type: SUBMIT_ORDER });
    } catch (error) {
        dispatch({ type: SUBMIT_ORDER, errors: error });
        return console.log(error);
    }
}

export const getOrders = (customer: any) => async (dispatch: any) => {
    try {
        const { data } = await api.getOrders(customer);

        dispatch({ type: FETCH_ALL, data: data.reverse() });
    } catch (error) {
        dispatch({ type: FETCH_ALL, errors: error });
        return console.log(error);
    }
}