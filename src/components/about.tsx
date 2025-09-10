import Image from 'next/image';
import React from 'react';
import { Motifs } from './motifs';
const aboutImage = [
    '/aboutImage/1.jpg',
    '/aboutImage/2.jpg',
    '/aboutImage/3.jpg',
];

const About = () => {
    return (
        <div className="container mt-10 space-y-4">
            <div className="mx-auto flex items-center justify-center gap-4">
                <div className="w-16 h-0.5 bg-white"></div>
                <h2 className="text-2xl font-bold ">Về chúng tôi</h2>
                <div className="w-16 h-0.5 bg-white"></div>
            </div>
            <p className="mx-auto text-center max-w-5xl">
                Nhà hàng Kkul mang đến trải nghiệm ẩm thực độc đáo, kết hợp
                hương vị truyền thống và hiện đại. Với không gian ấm cúng và
                dịch vụ tận tâm, chúng tôi cam kết làm hài lòng mọi thực
                khách.Nhà hàng Kkul mang đến trải nghiệm ẩm thực độc đáo, kết
                hợp hương vị truyền thống và hiện đại. Với không gian ấm cúng và
                dịch vụ tận tâm, chúng tôi cam kết làm hài lòng mọi thực khách.
            </p>
            <div className="md:max-w-6xl w-fit mx-auto flex flex-col md:gap-0 gap-4 md:flex-row justify-between rounded-3xl bg-primary md:h-[274px] p-3">
                <div className="relative rounded-[12px] border-8 border-foreground w-[310px] h-[250px]">
                    <Image src={aboutImage[0]} alt="image" fill />
                    <div className="absolute -top-[8px] -right-[8px] w-[60px] h-[80px] rounded-bl-[12px] rounded-tr-[12px] bg-foreground flex items-center justify-center">
                        <Image
                            src="/aboutImage/logoHasText.png"
                            alt="logo"
                            width={60}
                            height={60}
                        />
                    </div>
                </div>

                <Motifs
                    width={100}
                    height={250}
                    fill="#F8EBD8"
                    className="md:block hidden"
                />
                <div className="relative rounded-[12px] border-8 border-foreground w-[310px] h-[250px]">
                    <Image src={aboutImage[1]} alt="image" fill />
                    <div className="absolute -top-[8px] -right-[8px] w-[60px] h-[80px] rounded-bl-[12px] rounded-tr-[12px] bg-foreground flex items-center justify-center">
                        <Image
                            src="/aboutImage/logoHasText.png"
                            alt="logo"
                            width={60}
                            height={60}
                        />
                    </div>
                </div>

                <Motifs
                    width={100}
                    height={250}
                    fill="#F8EBD8"
                    className="md:block hidden"
                />
                <div className="relative rounded-[12px] border-8 border-foreground w-[310px] h-[250px]">
                    <Image src={aboutImage[2]} alt="image" fill />
                    <div className="absolute -top-[8px] -right-[8px] w-[60px] h-[80px] rounded-bl-[12px] rounded-tr-[12px] bg-foreground flex items-center justify-center">
                        <Image
                            src="/aboutImage/logoHasText.png"
                            alt="logo"
                            width={60}
                            height={60}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
