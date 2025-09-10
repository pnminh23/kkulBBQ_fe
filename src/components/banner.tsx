'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import { Button } from './shadcn/button';
import { Popover, PopoverContent, PopoverTrigger } from './shadcn/popover';
import { Check, ChevronsUpDown } from 'lucide-react';
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from './shadcn/command';
import { cn } from '@/lib/utils';
import { BsClockFill, BsFillTelephoneFill } from 'react-icons/bs';
import { RiMapPin4Fill } from 'react-icons/ri';
import { motion } from 'framer-motion';

const branches = [
    {
        id: 1,
        name: 'Kkul Bùi Thị Xuân',
        status: 'Đang mở cửa',
        numberTables: 20,
        availableTables: 20,
        address: '5 P. Bùi Thị Xuân, Nguyễn Du, Hai Bà Trưng, Hà Nội, Việt Nam',
        phone: '0972561891',
    },
    {
        id: 2,
        name: 'Kkul Nam Ngư',
        status: 'Đang mở cửa',
        numberTables: 20,
        availableTables: 20,
        address: '59 P. Nam Ngư, Cửa Nam, Hoàn Kiếm, Hà Nội, Việt Nam',
        phone: '0972561891',
    },
    {
        id: 3,
        name: 'Kkul Trung Yên',
        status: 'Đang mở cửa',
        numberTables: 20,
        availableTables: 20,
        address: '23 Trung Yên 8, Trung Hoà, Cầu Giấy, Hà Nội, Việt Nam',
        phone: '0972561891',
    },
    {
        id: 4,
        name: 'Kkul Vinhomes Ocean Park',
        status: 'Đang mở cửa',
        numberTables: 20,
        availableTables: 20,
        address: '226 Hải Âu 3, Kiêu Kỵ, Gia Lâm, Hà Nội, Việt Nam',
        phone: '0972561891',
    },
];

const Banner = () => {
    const [openCombobox, setOpenCombobox] = useState<boolean>(false);
    const [branchSelected, setBranchSelected] = useState<(typeof branches)[0]>(
        branches[0]
    );

    return (
        <div className="relative w-full h-screen">
            <Image src="/bg/wood_black.png" alt="bg" fill />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 container h-full flex flex-col md:flex-row pt-[60px] md:pt-0 md:items-center md:justify-center z-40">
                <motion.div
                    initial={{ x: -60, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                    className="md:w-1/2 w-full flex flex-col items-center gap-8"
                >
                    <div className="flex flex-col md:items-center items-start  gap-2 w-full">
                        <h1 className="font-diablo md:text-8xl pl-2 md:pl-0 text-5xl text-textPrimary">
                            Kkul BBQ
                        </h1>
                        <p className="font-diablo md:text-5xl pl-2 md:pl-0 text-2xl text-textPrimary">
                            the best bbq restaurants
                        </p>
                    </div>
                    <motion.div
                        initial={{ x: 60, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1, ease: 'easeInOut' }}
                        className="flex-1 flex md:hidden"
                    >
                        <Image
                            src="/image/combo.png"
                            alt="combo"
                            width={300}
                            height={176}
                        />
                    </motion.div>
                    <Button>Đặt bàn ngay</Button>
                    <div className="flex md:flex-row flex-col md:items-start justify-center items-center gap-6">
                        <div className=" flex flex-col gap-4">
                            <Popover
                                open={openCombobox}
                                onOpenChange={setOpenCombobox}
                            >
                                <PopoverTrigger asChild>
                                    <Button
                                        variant="outline"
                                        size="lg"
                                        role="combobox"
                                        aria-expanded={openCombobox}
                                        className="w-[300px] justify-between hover:bg-white"
                                    >
                                        {branchSelected
                                            ? branches.find(
                                                  (branch) =>
                                                      branch.id ===
                                                      branchSelected.id
                                              )?.name
                                            : 'Select branch...'}
                                        <ChevronsUpDown className="opacity-50" />
                                    </Button>
                                </PopoverTrigger>
                                <PopoverContent className="w-[300px] p-0">
                                    <Command>
                                        <CommandInput
                                            placeholder="Search branch..."
                                            className="h-9 text-description"
                                        />
                                        <CommandList>
                                            <CommandEmpty>
                                                No branch found.
                                            </CommandEmpty>
                                            <CommandGroup>
                                                {branches.map((branch) => (
                                                    <CommandItem
                                                        key={branch.id}
                                                        value={branch.id.toString()}
                                                        onSelect={(
                                                            currentValue
                                                        ) => {
                                                            const selectedBranch =
                                                                branches.find(
                                                                    (b) =>
                                                                        b.id.toString() ===
                                                                        currentValue
                                                                );
                                                            if (
                                                                selectedBranch
                                                            ) {
                                                                setBranchSelected(
                                                                    selectedBranch
                                                                );
                                                            }
                                                            setOpenCombobox(
                                                                false
                                                            );
                                                        }}
                                                    >
                                                        {branch.name}
                                                        <Check
                                                            className={cn(
                                                                'ml-auto',
                                                                branchSelected.id ===
                                                                    branch.id
                                                                    ? 'opacity-100'
                                                                    : 'opacity-0'
                                                            )}
                                                        />
                                                    </CommandItem>
                                                ))}
                                            </CommandGroup>
                                        </CommandList>
                                    </Command>
                                </PopoverContent>
                            </Popover>
                            <div className="w-full flex gap-4">
                                <div className="flex-1 p-1 rounded-lg border-[1px] border-white flex flex-col items-center justify-center ">
                                    <p>Tổng số bàn</p>
                                    <p>{branchSelected.numberTables}</p>
                                </div>
                                <div className="flex-1 p-1 rounded-lg border flex flex-col items-center justify-center ">
                                    <p>Số bàn trống</p>
                                    <p>{branchSelected.availableTables}</p>
                                </div>
                            </div>
                        </div>
                        <div className="md:border-l-[1px] md:pl-4 space-y-4 max-w-[350px]">
                            <div className="flex gap-4 max-h-12 items-center">
                                <RiMapPin4Fill className="w-5 h-5 " />

                                <p className="flex-1">
                                    {branchSelected.address}
                                </p>
                            </div>
                            <div className="flex gap-4 items-center">
                                <BsClockFill className="w-4 h-4" />

                                <p className="font-semibold">
                                    {branchSelected.status}{' '}
                                </p>
                            </div>
                            <div className="flex gap-4 items-center">
                                <BsFillTelephoneFill className="w-4 h-4" />
                                {branchSelected.phone}
                            </div>
                        </div>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ x: 60, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1, ease: 'easeInOut' }}
                    className="flex-1 hidden md:flex"
                >
                    <Image
                        src="/image/combo.png"
                        alt="combo"
                        width={750}
                        height={439}
                    />
                </motion.div>
            </div>
        </div>
    );
};

export default Banner;
