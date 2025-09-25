import Header from '@/components/layout/user/header';
import { ReactNode } from 'react';

export default function AdminLayout({ children }: { children: ReactNode }) {
    return (
        <div className=" min-h-screen">
            <Header />
            {children}
        </div>
    );
}
