import axios from 'axios';

const api = axios.create({
    baseURL: process.env.REACT_APP_API
});

export const useApi = () => ({
    validateToken: async (token: string) => {
        return {
            user: { id: 3, name: 'User', email: 'user@gmail.com' }
        };
        // Retirar return acima quando houver validação de token
        const response = await api.post('/validate', { token });
        return response.data;
    },
    signin: async (email: string, password: string) => {
        return {
            user: { id: 3, name: 'User', email: 'user@gmail.com' },
            token: '123456789'
        };
        // Retirar return acima quando houver conexão com o Backend
        const response = await api.post('/signin', { email, password });
        return response.data;
    },
    signup: async (name:string, email: string, password: string) => {
        return {
            user: { id: 3, name: 'User', email: 'user@gmail.com' },
            token: '123456789'
        };
        // Retirar return acima quando houver conexão com o Backend
        const response = await api.post('/signup', { name, email, password });
        return response.data;
    },
    logout: async () => {
        return { status: true };
        const response = await api.post('/logout');
        return response.data;
    }
});