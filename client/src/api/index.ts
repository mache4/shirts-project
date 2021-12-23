import axios from "axios";

const API = axios.create({ baseURL: 'http://localhost:5000' });

API.interceptors.request.use((req: any) => {
    if (localStorage.getItem('profile')) {
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile') || '{}').token}`;
    }

    return req;
});

export const submitOrder = (orderData: any) => API.post("/orders");
export const getOrders = (email: any) => API.get(`/orders/${email}`);
export const signIn = (formData: any) => API.post('/user/signin', formData);
export const signUp = (formData: any) => API.post('/user/signup', formData);