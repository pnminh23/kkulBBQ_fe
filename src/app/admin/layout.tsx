import { ReactNode } from 'react';

export default function AdminLayout({ children }: { children: ReactNode }) {
    return (
        <div className="flex min-h-screen">
            <main className="flex-1 p-6 bg-adminBackground">{children}</main>
        </div>
    );
}
