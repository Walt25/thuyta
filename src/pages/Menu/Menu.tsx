import MenuItemSlider from "../../components/Menu/MenuItemSlider";
import SideMenu from "../../components/Menu/SideMenu";
import { getMenuSubItem } from "../../Redux/Selectors/MenuSelector";
import { useSelector } from "react-redux";

export default function Menu() {
  const selectedMenuSubItem = useSelector(getMenuSubItem);
  return (
    <div className="grid grid-cols-12 bg-inherit container gap-[60px]">
      <div className="col-span-8">
        <div className="grid grid-cols-12 gap-2">
          <div className="col-span-5">
            <img src={selectedMenuSubItem.img} alt="" />
          </div>
          <div className="col-span-7 ">
            <div className="flex flex-col gap-2">
              <div className=" text-[#3f3f41] text-4xl font-bold font-['Manrope']">
                {selectedMenuSubItem.type}
              </div>
              <div className="h-[98px] flex items-center py-1 border-b-2 border-[#ed7d31] ">
                <div className="text-[#ed7d31] text-5xl font-bold font-['MTD Valky Bold']">
                  {selectedMenuSubItem.name}
                </div>
              </div>
              <div className=" text-[#3f3f41] text-2xl font-normal font-['Manrope']">
                {selectedMenuSubItem.description}
              </div>
              <div className="h-[35px] justify-start items-start gap-3 inline-flex">
                {selectedMenuSubItem.ingredients.map((ingredient, index) => (
                  <div
                    key={index}
                    className="px-[20px] py-1 bg-[#fcbb62] rounded justify-start items-center gap-1.5 flex overflow-hidden"
                  >
                    <div className="text-white text-xl font-bold font-['Manrope']">
                      {ingredient}
                    </div>
                  </div>
                ))}
              </div>
              <div className="w-[612.95px] text-[#ed7d31] text-[35px] font-bold font-['Manrope']">
                150.000 - 300.000 VNĐ
              </div>
            </div>
          </div>
        </div>
        <div className="w-full mx-auto  ">
          <MenuItemSlider></MenuItemSlider>
        </div>
      </div>
      <div className="col-span-4 ">
        <SideMenu></SideMenu>
      </div>
    </div>
  );
}
