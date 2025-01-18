
import { ReactNode } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

interface Props {
    img: string,
    children: ReactNode;


}



export default function BanquetHallLayout({ img, children }: Props) {
    return (
        <>
            <div className="relative pb-[60px] h-[500px] w-auto px-3">
                <img
                    src={img}
                    alt=""
                    className="absolute h-[500px] w-full  top-0 left-0 z-[-1] object-top"
                />
                <Header type="white"></Header>
                <div className="text-center"><span className="text-white text-[30px] font-bold font-['MTD Valky Bold'] uppercase leading-[48px]">thuyền rồng<br /></span><span className="text-white text-[55px] font-bold font-['MTD Valky Bold'] uppercase leading-[76.80px]">kim long - hoàng long</span></div>

            </div>
            <div className="mt-[30px]">

                {children}
            </div>
            <Footer></Footer>
        </>
    );
}
