/* eslint-disable @typescript-eslint/no-explicit-any */

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./index.css";
import { ScrollLeft, ScrollRight } from "../../Icons/Icons";
import NavigateButton from "../../NavigateButton";

const images: string[] = [
  "https://i.imgur.com/yAyDguC.png",
  "https://i.imgur.com/xYoRPJb.png",
  "https://i.imgur.com/cLmHdC9.png",
];

function Banner({ image }: { image: string }) {
  return (
    <div className="w-full md:h-full h-screen relative">
      <img src={image} alt="" className="w-full h-full object-cover" />
      <div className="absolute w-[72%] top-[15%] left-[50%] translate-x-[-50%]">
        <div className="flex items-center justify-center mb-[20px] md:mb-[50px]">
          <img src="https://i.imgur.com/7IruA5M.png" alt="" />
        </div>
        <div className="text-center mx-auto">
          <div>
            <span className="text-white text-lg md:text-3xl font-semibold font-['MTD Valky Bold'] uppercase leading-normal ">
              Chào mừng đến với
              <br />
            </span>
            <span className="text-white text-lg md:text-[40px] font-semibold font-['MTD Valky Bold'] uppercase leading-normal ">
              nhà hàng Thủy Tạ Đầm Sen
            </span>
          </div>
          <div className="text-center text-white text-sm md:text-lg font-normal font-['Manrope']">
            Nhà hàng Thủy Tạ Đầm Sen nằm trên hồ của công viên văn hóa Đầm Sen,
            với 6 sảnh tiệc. Có thể đáp ứng nhu cầu lượng khách lớn từ 100 đến
            700 khách/sảnh. Đặc biệt, nhà hàng Thủy Tạ còn có vị trí tổ chức
            tiệc ngoài trời tại Quảng trường La Mã (CVVH Đầm Sen), đáp ứng lượng
            khách lên đến 2000. Đây là vị trí lý tưởng để các quý công ty tổ
            chức đại tiệc cuối năm, hoặc sự kiện, tiệc cưới, sinh nhật...
          </div>
          <NavigateButton to="/" className="px-[50px] py-6 mt-[100px]">
            <div className="text-center text-primary-500 text-lg font-bold font-['Manrope']">
              Tìm hiểu ngay
            </div>
          </NavigateButton>
        </div>
      </div>
    </div>
  );
}

function SampleNextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} hidden-on-small`}
      style={{
        ...style,
        position: "absolute",
        right: "50px",
        borderRadius: "50%",
        color: "green",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "60px",
        height: "60px",
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        zIndex: 1,
      }}
      onClick={onClick}
    >
      <ScrollRight></ScrollRight>
    </div>
  );
}

function SamplePrevArrow(props: any) {
  const { className, onClick } = props;
  return (
    <div
      className={`${className} hidden-on-small`}
      style={{
        position: "absolute",
        left: "50px",
        borderRadius: "50%",
        color: "green",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "60px",
        height: "60px",
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        zIndex: 1,
      }}
      onClick={onClick}
    >
      <ScrollLeft></ScrollLeft>
    </div>
  );
}

export default function HomeBanner() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow></SampleNextArrow>,
    prevArrow: <SamplePrevArrow></SamplePrevArrow>,
  };
  return (
    <Slider className="home-banner" {...settings}>
      {images.map((image, index) => (
        <div key={index}>
          <Banner image={image}></Banner>
        </div>
      ))}
    </Slider>
  );
}
