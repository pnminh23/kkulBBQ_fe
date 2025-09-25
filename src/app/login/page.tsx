'use client';

import { Button } from '@/components/shadcn/button';
import { AuthService } from '@/services/auth.service';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const Loginpage = () => {
    const [isFocusedUsername, setIsFocusedUsername] = useState(false);
    const [isFocusedPassword, setIsFocusedPassword] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);
        setLoading(true);
        try {
            const res = await AuthService.login(username, password);
            console.log('Đăng nhập thành công:', res);
            // 👉 ở đây bạn có thể redirect về trang dashboard
            router.push('/admin');
        } catch (err: any) {
            console.error(err);
            setError(err.response?.data?.message || 'Đăng nhập thất bại');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex justify-center items-center relative">
            <Image
                src="/bg/bg_login.jpg"
                alt="bg-login"
                fill
                className="opacity-50 z-0"
            />
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-lg p-8 flex flex-col gap-6 items-center">
                <div className="flex flex-col items-center gap-4 z-10   ">
                    <Image
                        src="/logo.png"
                        alt="logo"
                        width={100}
                        height={100}
                    />
                    <h1 className="capitalize text-xl text-">
                        Quản lý hệ thống Kkul-BBQ
                    </h1>
                </div>
                <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                    <div className="relative flex flex-col w-64">
                        {/* Label động */}
                        <motion.label
                            initial={{ y: 16, opacity: 0.5 }}
                            animate={
                                isFocusedUsername || username
                                    ? { y: 0, opacity: 1, scale: 0.9 }
                                    : { y: 16, opacity: 0.5, scale: 1 }
                            }
                            transition={{
                                type: 'spring',
                                stiffness: 300,
                                damping: 20,
                            }}
                            className="absolute left-2 text-description pointer-events-none"
                        >
                            Username
                        </motion.label>

                        {/* Input */}
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            onFocus={() => setIsFocusedUsername(true)}
                            onBlur={() => setIsFocusedUsername(false)}
                            className={`px-2 pt-5 pb-4 rounded-md bg-transparent border ${
                                isFocusedUsername
                                    ? 'bg-white outline-none border-foreground text-black'
                                    : 'border-description text-white'
                            } transition-colors duration-200`}
                        />
                    </div>

                    <div className="relative flex flex-col w-64">
                        {/* Label động */}
                        <motion.label
                            initial={{ y: 16, opacity: 0.5 }}
                            animate={
                                isFocusedPassword || password
                                    ? { y: 0, opacity: 1, scale: 0.9 }
                                    : { y: 16, opacity: 0.5, scale: 1 }
                            }
                            transition={{
                                type: 'spring',
                                stiffness: 300,
                                damping: 20,
                            }}
                            className="absolute left-2 text-description pointer-events-none"
                        >
                            Password
                        </motion.label>

                        {/* Input */}
                        <input
                            type="text"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            onFocus={() => setIsFocusedPassword(true)}
                            onBlur={() => setIsFocusedPassword(false)}
                            className={`px-2 pt-5 pb-4 rounded-md bg-transparent border ${
                                isFocusedPassword
                                    ? 'bg-white outline-none border-foreground text-black'
                                    : 'border-description text-white'
                            } transition-colors duration-200`}
                        />
                    </div>

                    {error && <p className="text-red-400 text-sm">{error}</p>}

                    <Button type="submit" disabled={loading}>
                        {loading ? 'Đang đăng nhập...' : 'Đăng nhập'}
                    </Button>
                </form>
                <div className="w-fit flex flex-col items-center">
                    <p>Bạn chưa có tài khoản?</p>
                    <Link href="#" className="underline hover:text-foreground">
                        Liên hệ quản trị viên
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Loginpage;
