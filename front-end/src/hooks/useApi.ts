import axios from 'axios';

const api = axios.create({
    baseURL: process.env.REACT_APP_API
});

export const useApi = () => ({
    validateToken: async (token: string) => {
        return {
            user: { id: 3, name: 'UserPattern', email: 'userpattern@gmail.com' }
        };
        // Retirar return acima quando houver validação de token
        const response = await api.post('/validate', { token });
        return response.data;
    },
    signin: async (email: string, password: string) => {
        // Retirar return acima quando houver conexão com o Backend
        const response = await api.post('/login', { email, password });

        if (String(response.data.msg) !== 'Usuário não registrado!') {
            return {
                user: { id: 3, name: 'User', email: email },
                token: '123456789'
            };
        } else {
           return response.data;
        }

    },
    signup: async (name:string, email: string, password: string) => {
        const response = await api.post('/register', { email, password });

        if (String(response.data.msg) === 'Usuário cadastrado com sucesso') {
            return {
                user: { id: 3, name: name , email: email },
                token: '123456789'
            };
        } else {
           return response.data;
        }

    },
    logout: async () => {
        return { status: true };
    }
});