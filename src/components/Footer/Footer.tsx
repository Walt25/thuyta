import { FC } from "react";
import { Call, Location } from "../Icons/Icons";

const Footer: FC = () => {
  return (
    <div
      style={{
        backgroundImage:
          "url('https://firebasestorage.googleapis.com/v0/b/adept-now-409715.appspot.com/o/restaurants%2Fgold-cutlery-set-black-background%201.png?alt=media&token=cfb245e7-8976-45f1-968f-07fb5ce3b5a5')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
      className="h-auto lg:h-[344px]"
    >
      <div className="relative flex flex-col items-center justify-center py-4 lg:flex-row">
        <div className="mt-2 flex w-full flex-wrap gap-2 px-4 lg:mr-[10%] lg:w-auto lg:flex-nowrap lg:gap-24 lg:px-0 2xl:mr-[10%]">
          {/* Brand Logo */}
          <div className="flex w-full justify-center lg:w-auto lg:justify-start">
            <img
              src="https://i0.wp.com/thuytadamsen.vn/wp-content/uploads/2019/05/logo-thuy-ta-dam-sen-100.png?fit=100%2C97"
              alt="Brand Logo"
              className="mx-auto lg:mx-0 lg:h-[120px] lg:w-[120px]"
            />
          </div>

          {/* Contact Info */}
          <div className="mt-4 w-full lg:mt-0 lg:w-1/3">
            <h2 className="font-['Custom-Bold'] text-[32px] font-bold leading-[38.40px] text-white">
              Contact Us
            </h2>
            <div className="mt-8 flex items-start gap-1">
              <Location />
              <p className="font-['Manrope'] text-lg font-normal text-white">
                03 Hoa Binh, Ward 3, District 11, Ho Chi Minh City
                <br />
                (Gate 2, Dam Sen Cultural Park)
              </p>
            </div>
            <div className="flex items-start gap-1">
              <Call />
              <p className="font-['Manrope'] text-lg font-normal text-white">
                028 3961 2082 – 028 3858 6763
              </p>
            </div>
          </div>

          {/* Affiliates */}
          <div className="mt-4 inline-flex w-full flex-col items-start justify-start gap-3 lg:mt-0 lg:w-1/3">
            <div>
              <h2 className="font-['Custom-Bold'] text-[32px] font-bold leading-[38.40px] text-white">
                Our Affiliates
              </h2>
              <h2 className="font-['Custom-Bold'] text-[32px] font-bold leading-[38.40px] text-white">
                Phuthotourist
              </h2>
            </div>
            <ul className="flex flex-col items-start justify-start gap-0.5">
              <li className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-white" />
                <span className="font-['Manrope'] text-lg font-normal leading-[27px] text-white">
                  Phu Tho Tourism Services JSC
                </span>
              </li>
              <li className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-white" />
                <span className="font-['Manrope'] text-lg font-normal leading-[27px] text-white">
                  Vam Sat Ecotourism Site
                </span>
              </li>
              <li className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-white" />
                <span className="font-['Manrope'] text-lg font-normal leading-[27px] text-white">
                  Ngoc Lan Hotel
                </span>
              </li>
              <li className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-white" />
                <span className="font-['Manrope'] text-lg font-normal leading-[27px] text-white">
                  Phu Tho Hotel
                </span>
              </li>
              <li className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-white" />
                <span className="font-['Manrope'] text-lg font-normal leading-[27px] text-white">
                  Dam Sen Tourism Center
                </span>
              </li>
            </ul>
          </div>

          {/* Footer Note */}
          <div className="bottom-6 left-[18%] px-4 pt-5 text-left lg:hidden">
            <p className="font-['Manrope'] text-sm font-normal text-white">
              Copyright © Phu Tho Tourism Services JSC (Phuthotourist)
            </p>
          </div>
        </div>
        <div className="bottom-5 left-[9%] hidden px-4 pt-5 text-left lg:absolute lg:block 2xl:left-[16%]">
          <p className="font-['Manrope'] text-sm font-normal text-white">
            Copyright © Phu Tho Tourism Services JSC (Phuthotourist)
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
