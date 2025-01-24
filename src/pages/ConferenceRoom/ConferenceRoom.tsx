import React from "react";
import { ConfigProvider, Table } from "antd";
import type { ColumnsType } from "antd/es/table";

// Interface định nghĩa kiểu dữ liệu
interface RoomData {
  id: React.Key;
  name: string;
  size: string;
  theaterCapacity: string;
  roundTableCapacity: number;
  halfDayPrice: string;
  fullDayPrice: string;
  remarks?: string;
}

// Cấu hình cột cho bảng
const roomColumns: ColumnsType<RoomData> = [
  {
    title: "Tên phòng",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Diện tích (m²)",
    dataIndex: "size",
    key: "size",
  },
  {
    title: "Sức chứa kiểu rạp hát",
    dataIndex: "theaterCapacity",
    key: "theaterCapacity",
    width: 150,
  },
  {
    title: "Kiểu bàn tròn (10 khách/bàn)",
    dataIndex: "roundTableCapacity",
    key: "roundTableCapacity",
    width: 150,
  },
  {
    title: "Công suất phòng",
    children: [
      {
        title: "Giá thuê nửa ngày (VNĐ)",
        dataIndex: "halfDayPrice",
        key: "halfDayPrice",
        render: (value, record) => {
          if (record.halfDayPrice === "-" && record.fullDayPrice === "-") {
            return {
              children: (
                <span className="font-semibold text-black">
                  Chỉ phục vụ set menu
                </span>
              ),
              props: { colSpan: 3 }, // Gộp cột "Nửa ngày", "Nguyên ngày" và "Ghi chú"
            };
          }
          return value ? `${value} VND` : "-";
        },
      },
      {
        title: "Giá thuê nguyên ngày (VNĐ)",
        dataIndex: "fullDayPrice",
        key: "fullDayPrice",
        render: (value, record) => {
          if (record.halfDayPrice === "-" && record.fullDayPrice === "-") {
            return { props: { colSpan: 0 } }; // Ẩn cột nếu đã gộp
          }
          return value ? `${value} VND` : "-";
        },
      },
    ],
  },

  {
    title: "Ghi chú",
    dataIndex: "remarks",
    key: "remarks",
    width: 200,
    render: (text, record, index) => {
      if (index === 0) {
        return {
          children: (
            <div className="font-bold">
              Đặt menu tiệc giảm 50% giá thuê phòng (với số lượng khách tiệc
              tương đương khách hội nghị)
            </div>
          ),
          props: { colSpan: 1, rowSpan: 5 },
        };
      }
      return { props: { colSpan: 0 } };
    },
  },
];

const promotionColumns = [
  {
    title: "Khuyến mãi", // Tiêu đề chính
    children: [
      { title: "Màn hình LED", key: "1", render: () => <div></div> },
      { title: "Bàn lễ tân", key: "2", render: () => <div></div> },
      { title: "Bục phát biểu", key: "3", render: () => <div></div> },
      {
        title: "Âm thanh, 2 micro",
        key: "4",
        render: () => <div></div>,
      },
    ],
  },
];

// Dữ liệu bảng
const roomData: RoomData[] = [
  {
    id: "1",
    name: "Hoàng Kim Sen",
    size: "1.035",
    theaterCapacity: "1.000 khách",
    roundTableCapacity: 85,
    halfDayPrice: "40.000.000",
    fullDayPrice: "70.000.000",
    remarks: "Đặt menu tiệc giảm 50% giá thuê",
  },
  {
    id: "2",
    name: "Hoàng Sen",
    size: "667",
    theaterCapacity: "500 khách",
    roundTableCapacity: 50,
    halfDayPrice: "25.000.000",
    fullDayPrice: "45.000.000",
  },
  {
    id: "3",
    name: "Kim Sen",
    size: "368",
    theaterCapacity: "250 khách",
    roundTableCapacity: 28,
    halfDayPrice: "15.000.000",
    fullDayPrice: "30.000.000",
  },
  {
    id: "4",
    name: "Thanh Sen",
    size: "860",
    theaterCapacity: "750 khách",
    roundTableCapacity: 62,
    halfDayPrice: "30.000.000",
    fullDayPrice: "60.000.000",
  },
  {
    id: "5",
    name: "Ngân Sen",
    size: "402",
    theaterCapacity: "500 khách",
    roundTableCapacity: 37,
    halfDayPrice: "20.000.000",
    fullDayPrice: "40.000.000",
  },
  {
    id: "6",
    name: "Thuyền Kim Long",
    size: "162",
    theaterCapacity: "-",
    roundTableCapacity: 14,
    halfDayPrice: "-",
    fullDayPrice: "-",
    remarks: "Chỉ phục vụ set menu",
  },
  {
    id: "7",
    name: "Thuyền Hoàng Long",
    size: "179",
    theaterCapacity: "-",
    roundTableCapacity: 16,
    halfDayPrice: "-",
    fullDayPrice: "-",
    remarks: "Chỉ phục vụ set menu",
  },
];

// Component chính
const ConferenceRoom: React.FC = () => {
  return (
    <div className="p-4 mb-[30px]">
      <div className="text-[#ed7d31] text-[32px] font-bold font-['Manrope'] ">
        Giá cho thuê phòng hội nghị
      </div>
      <div className="text-[#666666] text-xl font-normal font-['Manrope'] mb-[30px]">
        (Đã bao gồm 10% thuế VAT)
      </div>
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
          columns={roomColumns}
          dataSource={roomData}
          bordered
          pagination={false}
          scroll={{ x: "max-content" }}
        />
      </ConfigProvider>
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
          columns={promotionColumns}
          dataSource={[]}
          bordered
          pagination={false}
          scroll={{ x: "max-content" }}
        />
      </ConfigProvider>
    </div>
  );
};

export default ConferenceRoom;
