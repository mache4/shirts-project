import axios from "axios";

const API = axios.create({ baseURL: 'https://shirts-project.herokuapp.com' });

API.interceptors.request.use((req: any) => {
    if (localStorage.getItem('profile'))
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile') || '{}').token}`;
    return req;
});

export const submitOrder = (orderData: any) => API.post("/orders", orderData);
export const getOrders = (customer: any) => API.get(`/orders/${customer}`);
export const signIn = (formData: any) => API.post('/user/signin', formData);
export const signUp = (formData: any) => API.post('/user/signup', formData);