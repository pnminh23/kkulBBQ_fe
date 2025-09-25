// services/AuthService.ts

import api from '@/lib/api';

export const AuthService = {
    login: async (username: string, password: string) => {
        const res = await api.post('/auth/login', { username, password });
        const token = res.data.data.access_token;
        localStorage.setItem('token', token);
        return res.data;
    },

    logout: () => {
        localStorage.removeItem('token');
    },
};
