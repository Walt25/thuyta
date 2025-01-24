import { DownOutlined } from "@ant-design/icons";
import { Dropdown, MenuProps, Space } from "antd";
import classNames from "classnames";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import path from "../../constants/path";

interface Props {
  type: "white" | "black";
}

const items: MenuProps["items"] = [
  {
    key: "1",
    label: (
      <a target="_blank" rel="noopener noreferrer" href={`/${path.thuyenRong}`}>
        Thuyền rồng Hoàng Long - Kim Long
      </a>
    ),
  },
  {
    key: "2",
    label: (
      <a target="_blank" rel="noopener noreferrer" href={`/${path.nganSen}`}>
        Sảnh Ngân Sen
      </a>
    ),
  },
  {
    key: "3",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={`/${path.hoangKimSen}`}
      >
        Sảnh Hoàng Sen - Kim Sen
      </a>
    ),
  },
  {
    key: "4",
    label: (
      <a target="_blank" rel="noopener noreferrer" href={`/${path.thanhSen}`}>
        Sảnh Thanh Sen
      </a>
    ),
  },
];

export default function Header({ type }: Props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const pathname = location.pathname;
  console.log(pathname);
  const handleShowMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  return (
    <nav className="border-gray-200 text-white mb-10 bg-inherit px-10 py-10">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        <Link to={"/"} className="flex h-full justify-center items-center">
          <div className="flex items-center justify-center mr-2 ">
            <img
              className="w-full h-full"
              src="https://i.imgur.com/7IruA5M.png"
              alt=""
            />
          </div>
          <div className={type === "white" ? "text-white" : "text-[#434146]"}>
            <span className=" text-2xl font-bold font-['MTD Valky Bold'] leading-[28.80px]">
              Nhà hàng
            </span>
            <br></br>
            <span className="text-4xl font-bold font-['MTD Valky Bold'] uppercase">
              Thủy Tạ Đầm Sen
            </span>
          </div>
        </Link>
        <div className="flex md:order-2">
          <div className="relative mr-3 md:mr-0 hidden md:block">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg
                className="w-5 h-5 text-gray-500"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <input
              type="text"
              id="email-adress-icon"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2"
              placeholder="Search..."
            />
          </div>
          <button
            data-collapse-toggle="mobile-menu-3"
            onClick={handleShowMenu}
            type="button"
            className="md:hidden text-gray-400 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-lg inline-flex items-center justify-center"
            aria-controls="mobile-menu-3"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
            <svg
              className="hidden w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } md:flex justify-between items-center w-full md:w-auto md:order-1`}
          id="mobile-menu-3"
        >
          <ul
            className={classNames(
              "flex-col md:flex-row flex md:space-x-8 mt-4 md:mt-0 md:text-sm md:font-medium",
              {
                "text-white": type === "white",
                "text-gray-900": type === "black",
              }
            )}
          >
            <li>
              <a
                href="/menu"
                // className={
                //   (pathname === "/menu" ? "bg-blue-700" : "") +
                //   "md:bg-transparent  block pl-3 pr-4 py-2  md:p-0 rounded"
                // }
                className={classNames(
                  "hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:bg-transparent md:hover:text-blue-700 md:p-0",
                  {
                    "bg-blue-500 text-[#C75D15]": pathname === "/menu",
                  }
                )}
                aria-current="page"
              >
                Thực đơn
              </a>
            </li>
            <li>
              <Dropdown menu={{ items }}>
                <a
                  className={classNames(
                    "hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:bg-transparent md:hover:text-blue-700 md:p-0",
                    {
                      "bg-blue-500 text-[#C75D15]": pathname.includes("sanh"),
                    }
                  )}
                  onClick={(e) => e.preventDefault()}
                >
                  <Space>
                    Sảnh tiệc
                    <DownOutlined />
                  </Space>
                </a>
              </Dropdown>
            </li>
            <li>
              <a
                href="/hoi-nghi"
                className={classNames(
                  "hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:bg-transparent md:hover:text-blue-700 md:p-0",
                  {
                    "bg-blue-500 text-[#C75D15]": pathname === "/hoi-nghi",
                  }
                )}
              >
                Phòng hội nghị
              </a>
            </li>
            <li>
              <a
                href="/khuyen-mai"
                className={classNames(
                  "hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:bg-transparent md:hover:text-blue-700 md:p-0",
                  {
                    "bg-blue-500 text-[#C75D15]": pathname === "/khuyen-mai",
                  }
                )}
              >
                Khuyến mãi tiệc cưới
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
