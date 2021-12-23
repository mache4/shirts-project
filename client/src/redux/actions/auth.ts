import { AUTH } from '../../constants/actionTypes';
import * as api from '../../api/index';

export const signin = (formData: any, router: any) => async (dispatch: any) => {
    try {
        const { data } = await api.signIn(formData);

        dispatch({ type: AUTH, data });
    } catch (error: any) {
        return dispatch({ type: AUTH, error: error.response.data.message });
    }
    router('/');
}

export const signup = (formData: any, router: any) => async (dispatch: any) => {
    try {
        const { data } = await api.signUp(formData);

        dispatch({ type: AUTH, data });
    } catch (error: any) {
        return dispatch({ type: AUTH, error: error.response.data.message });
    }
    router('/');
}