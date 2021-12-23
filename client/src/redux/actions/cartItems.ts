import { ADD_CART_ITEM, DELETE_CART_ITEM, RESET_CART_ITEMS } from '../../constants/actionTypes';

export const addCartItem = (item: any) => async (dispatch: any) => {
    try {
        dispatch({ type: ADD_CART_ITEM, data: item });
    } catch (error) {
        dispatch({ errors: error });
        return console.log(error);
    }
}

// export const signup = (formData: any, router: any) => async (dispatch: any) => {
//     try {
//         const { data } = await api.signUp(formData);

//         dispatch({ type: AUTH, data });
//     } catch (error) {
//         dispatch({ type: AUTH, errors: error });
//         return console.log(error);
//     }
//     router('/');
// }