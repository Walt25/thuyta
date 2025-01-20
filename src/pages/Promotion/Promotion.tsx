import React from "react";
import { ConfigProvider, Table } from "antd";
import { ColumnsType } from "antd/es/table";

interface DataType {
  key: React.Key;
  gift: string;
  range15_20?: string;
  range21_26?: string;
  range27_32?: string;
  range33_42?: string;
  range43_50?: string;
  range51_65?: string;
}

const columns: ColumnsType<DataType> = [
  {
    title: "Quà tặng",
    dataIndex: "gift",
    key: "gift",
    fixed: "left",
    width: 200,
  },
  {
    title: "Số bàn đặt chính thức",
    children: [
      {
        title: "15-20",
        dataIndex: "range15_20",
        key: "range15_20",
        width: 100,
      },
      {
        title: "21-26",
        dataIndex: "range21_26",
        key: "range21_26",
        width: 100,
      },
      {
        title: "27-32",
        dataIndex: "range27_32",
        key: "range27_32",
        width: 100,
      },
      {
        title: "33-42",
        dataIndex: "range33_42",
        key: "range33_42",
        width: 100,
      },
      {
        title: "43-50",
        dataIndex: "range43_50",
        key: "range43_50",
        width: 100,
      },
      {
        title: "51-65",
        dataIndex: "range51_65",
        key: "range51_65",
        width: 100,
      },
    ],
  },
];

const dataSource: DataType[] = [
  {
    key: "1",
    gift: "Liễn hồng, bút ký tên, kệ ảnh, thúng hỷ",
  },
  {
    key: "2",
    gift: "Tháp ly, 2 chai Champagne, đá khói",
  },
  {
    key: "3",
    gift: "Khăn ăn, hoa tươi để bàn, khăn lạnh",
  },
  {
    key: "4",
    gift: "Ban nhạc hòa tấu (2 nhạc công)",
  },
  {
    key: "5",
    gift: "Thức ăn nhẹ đầu giờ Cô Dâu Chú Rể",
  },
  {
    key: "6",
    gift: "Đậu phộng đầu giờ",
  },
  {
    key: "7",
    gift: "Nước ngọt, nước suối suốt tiệc (phục vụ rót bình)",
  },
  {
    key: "8",
    gift: "MC tiếng Việt đầu giờ",
  },
  {
    key: "9",
    gift: "Thiệp cưới theo mẫu (chưa in nội dung)",
  },
  {
    key: "10",
    gift: "Pháo kim tuyến (4 viên)",
  },
  {
    key: "11",
    gift: "Bánh cưới 4 giả 1 thật",
  },
  {
    key: "12",
    gift: "Thiệp cưới theo mẫu (có in nội dung)",
  },
  {
    key: "13",
    gift: "Saxo + 2 Ca sĩ",
  },
  {
    key: "14",
    gift: "Máy chiếu Album hoặc màn hình Led",
  },
  {
    key: "15",
    gift: "Đội múa khai tiệc",
  },
  {
    key: "16",
    gift: "Máy quay trực tiếp",
  },
  {
    key: "17",
    gift: "Bàn ăn gia đình",
  },
  {
    key: "18",
    gift: "Giảm giá chương trình nghi lễ đặc biệt",
  },
  // Add more rows as needed
];

export default function Promotion() {
  return (
    <div className="container">
      <div className="w-[70%] mx-auto flex flex-col gap-2">
        <img
          className="w-full"
          src="https://s3-alpha-sig.figma.com/img/bd55/bc12/07c919d25c94024fab5080ecdbf7c2eb?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nTtvwi8xFVNnlLe~f1Rq-AEtza7qVRL43TE7Xrm5c~~VnNeOg33MxkPeNeyXh4qcarKhTPYtXV7AWtwnHij7T0Sxw20tQWFsrYgjr2W3WEBTnFRhYkd6XBd824RzCHSHigKgfe-JwN6ovAIAZgmksrWrPbuNlh-gRBxyPNp-HkLkLm4gE486XVM7DvqUZfPBuYu6BqQaQR5y~cqMSa3yF5ZoKCrHlUybPtLvEx-aLVL5uKjlY5jQ3kafRnwNPA0Xxi~rqaApXsvMfr2KrqXOPWJw5qDYVjKbO8uWV5UH7PAMdFumiKsaPHhrOjBHikzjVhVLC3eXM-xYQss35xNXHA__"
        />
        <div className="">
          <ConfigProvider
            theme={{
              components: {
                Table: {
                  borderColor: "#C2C2C2",
                  headerColor: "#c75d15",
                  headerBg: "#ffeed7",
                },
              },
            }}
          >
            <Table
              columns={columns}
              dataSource={dataSource}
              bordered
              pagination={false}
              scroll={{ x: "max-content" }}
            />
          </ConfigProvider>
        </div>
      </div>
    </div>
  );
}
