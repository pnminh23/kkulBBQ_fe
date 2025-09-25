import About from '@/components/about';
import Banner from '@/components/banner';
import { Motifs } from '@/components/motifs';
import SubMenu from '@/components/subMenu';
import Image from 'next/image';

export default function Home() {
    return (
        <div>
            <Banner />
            <About />
            <SubMenu />
        </div>
    );
}
