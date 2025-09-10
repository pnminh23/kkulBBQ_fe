import Image from 'next/image';
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './shadcn/tabs';

const SubMenu = () => {
    return (
        <div className="relative w-full aspect-[3/2] p-8 mt-10">
            <Image
                src="/bg/menu-bkg.jpg"
                alt="vintage_wooden"
                fill
                className="object-cover absolute inset-0"
            />
            <div className="absolute inset-0 bg-black/50 z-10"></div>
            <div className="relative z-20 text-white space-y-4 ">
                <div className="mx-auto flex items-center justify-center gap-4">
                    <div className="w-16 h-0.5 bg-white"></div>
                    <h2 className="text-2xl font-bold ">Thực đơn</h2>
                    <div className="w-16 h-0.5 bg-white"></div>
                </div>
                <div className="flex container flex-col gap-6">
                    <Tabs defaultValue="all">
                        <TabsList className="bg-transparent ">
                            <TabsTrigger value="all">Tất cả</TabsTrigger>
                            <TabsTrigger value="popular">
                                Hot và phổ biến
                            </TabsTrigger>
                            <TabsTrigger value="baked">Đồ nướng</TabsTrigger>
                            <TabsTrigger value="boiled">Lẩu</TabsTrigger>
                            <TabsTrigger value="dessert">
                                Tráng miệng
                            </TabsTrigger>
                        </TabsList>
                        <TabsContent
                            value=""
                            className="border-t-2 border-black"
                        >
                            Account
                        </TabsContent>
                        <TabsContent
                            value=""
                            className="border-t-2 border-black"
                        >
                            Password
                        </TabsContent>
                    </Tabs>
                </div>
            </div>
        </div>
    );
};

export default SubMenu;
