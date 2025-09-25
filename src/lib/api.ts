// lib/axios.ts
import axios from 'axios';

const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL, // ví dụ: http://localhost:5000/api
    withCredentials: true, // nếu backend dùng cookie
});

// Gắn token tự động vào header
api.interceptors.request.use((config) => {
    const token =
        typeof window !== 'undefined' ? localStorage.getItem('token') : null;
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

// Xử lý lỗi response
api.interceptors.response.use(
    (res) => res,
    (err) => {
        if (err.response?.status === 401) {
            // Token hết hạn, redirect login
            if (typeof window !== 'undefined') {
                window.location.href = '/login';
            }
        }
        return Promise.reject(err);
    }
);

export default api;
