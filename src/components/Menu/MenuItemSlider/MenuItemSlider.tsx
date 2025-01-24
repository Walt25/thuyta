/* eslint-disable @typescript-eslint/no-explicit-any */

import Slider from "react-slick";
import {
  getMenuItem,
  getMenuSubItemIndex,
} from "../../../Redux/Selectors/MenuSelector";
import "./index.css";
import { useDispatch, useSelector } from "react-redux";
import {
  MenuItem,
  setSelectedMenuSubItem,
} from "../../../Redux/Slices/MenuSlice";
import classNames from "classnames";
import { useEffect, useState } from "react";

function SampleNextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} hidden-on-small`}
      style={{
        ...style,
        position: "absolute",
        right: "0",
        borderRadius: "50%",
        color: "green",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "35px",
        height: "35px",
        zIndex: 1,
      }}
      onClick={onClick}
    >
      <svg
        width="34"
        height="34"
        viewBox="0 0 34 34"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12.75 9.9165L21.25 18.6998L12.75 27.1998"
          stroke="#434146"
          stroke-width="5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
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
        left: "0",
        borderRadius: "50%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "35px",
        height: "35px",
        zIndex: 1,
      }}
      onClick={onClick}
    >
      <svg
        width="34"
        height="34"
        viewBox="0 0 34 34"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M21.25 9.9165L12.75 18.6998L21.25 27.1998"
          stroke="#434146"
          stroke-width="5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
  );
}

export default function MenuItemSlider() {
  const dispatch = useDispatch();
  const [slidesToShow, setSlidesToShow] = useState<number>(3);
  const handleOnClick = (index: number) => {
    dispatch(setSelectedMenuSubItem(index));
  };
  const selectedMenuItem = useSelector(getMenuItem);
  const selectedMenuItemIndex = useSelector(getMenuSubItemIndex);

  console.log(selectedMenuItem);

  useEffect(() => {
    if (selectedMenuItem?.numberOfItems) {
      setSlidesToShow(selectedMenuItem.numberOfItems);
    }
  }, [selectedMenuItem]);

  if (!selectedMenuItem) {
    return <div>Loading...</div>;
  }

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    adaptiveHeight: true,
  };

  return (
    <Slider className="gift-banner" {...settings}>
      {(selectedMenuItem as MenuItem).items.map((item, index) => (
        <div
          key={index}
          className={classNames(
            "bg-inherit h-[180px] rounded-lg flex flex-col cursor-pointer",
            {
              "bg-white": index === selectedMenuItemIndex,
            }
          )}
          onClick={() => handleOnClick(index)}
        >
          <div>
            <img className="w-28 h-28 mx-auto" src={item.img} alt="" />
          </div>
          <div className="w-32 text-center text-[#3f3f41] text-sm font-normal font-['MJ Satoshi']">
            {item.type + ` ` + item.name}
          </div>
        </div>
      ))}
    </Slider>
  );
}
