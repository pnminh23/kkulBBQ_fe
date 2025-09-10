'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BsFacebook, BsInstagram, BsTiktok } from 'react-icons/bs';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { Bars3Icon } from '@heroicons/react/24/outline';
import {
    Sheet,
    SheetContent,
    SheetTitle,
    SheetTrigger,
} from '@/components/shadcn/sheet';

const menuItemLink = [
    { label: 'Trang chủ', href: '/' },
    { label: 'Thực đơn', href: '/menu' },
    { label: 'Đặt bàn', href: '/reservation' },
    { label: 'Chi nhánh', href: '/branches' },
    { label: 'Tuyển dụng', href: '/hiring' },
];

const Header = () => {
    const pathname = usePathname();
    const [isShowMenuMobi, setIsShowMenuMobi] = useState<boolean>(false);
    const [isOpen, setIsOpen] = useState(false);
    const toggleMobiMenu = () => {
        setIsShowMenuMobi(!isShowMenuMobi);
    };

    return (
        <div className="fixed w-full z-50 bg-black py-0 md:py-2">
            <div className="container flex justify-between items-center">
                <Image src="/logo.png" alt="logo" width={50} height={50} />
                {/* desktop */}
                <nav className="hidden md:flex gap-6 ">
                    {menuItemLink.map((item) => {
                        const isActive = pathname === item.href;
                        return (
                            <Link
                                key={item.label}
                                href={item.href}
                                className={`relative flex gap-6 px-1 ${isActive && 'text-primary font-semibold'} transition-all duration-300`}
                            >
                                {item.label}
                                {isActive && (
                                    <motion.div
                                        layoutId="activeIndicator"
                                        className="absolute left-0 -bottom-2 w-full h-[2px] bg-primary dark:bg-neutral-100 rounded-lg z-20"
                                        transition={{
                                            type: 'spring',
                                            stiffness: 300,
                                            damping: 30,
                                        }}
                                    />
                                )}
                            </Link>
                        );
                    })}
                </nav>
                <div className="hidden md:flex gap-4">
                    <Link
                        href="#"
                        className="p-1 rounded-full hover:bg-white hover:text-blue-500 transition-all duration-300"
                    >
                        <BsFacebook />
                    </Link>
                    <Link
                        href="#"
                        className="p-1 rounded-full hover:bg-white hover:text-black transition-all duration-300"
                    >
                        <BsTiktok />
                    </Link>
                    <Link
                        href="#"
                        className="p-1 rounded-full hover:bg-white hover:text-pink-500 transition-all duration-300"
                    >
                        <BsInstagram />
                    </Link>
                </div>
                {/* mobie */}
                <div className="flex md:hidden">
                    <Sheet open={isOpen} onOpenChange={setIsOpen}>
                        <SheetTrigger asChild>
                            <Bars3Icon className="w-10 h-10" />
                        </SheetTrigger>
                        <SheetContent className="py-8 outline-none focus:outline-none">
                            <SheetTitle className="sr-only">
                                Menu Navigation
                            </SheetTitle>
                            {menuItemLink.map((item) => {
                                const isActive = pathname === item.href;
                                return (
                                    <Link
                                        key={item.label}
                                        href={item.href}
                                        className={`relative flex gap-6 px-1 ${
                                            isActive &&
                                            'text-primary font-semibold'
                                        } transition-all duration-300`}
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {item.label}
                                        {isActive && (
                                            <motion.div
                                                layoutId="activeIndicator"
                                                className="absolute left-0 -bottom-2 w-full h-[2px] bg-primary dark:bg-neutral-100 rounded-lg z-20"
                                                transition={{
                                                    type: 'spring',
                                                    stiffness: 300,
                                                    damping: 30,
                                                }}
                                            />
                                        )}
                                    </Link>
                                );
                            })}
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </div>
    );
};

export default Header;
