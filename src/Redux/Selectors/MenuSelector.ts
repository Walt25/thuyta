import { MenuItem, MenuSubItem } from "../Slices/MenuSlice";
import { RootState } from "../store";

export const selectProductsInCart = (state: RootState) => state.menu.menu;

export const getMenu = (state: RootState) => state.menu.menu;

// Trả về một phần tử MenuItem hoặc null nếu không tồn tại
export const getMenuItem: (state: RootState) => MenuItem | null = (
  state: RootState
) => {
  const { menu, selectedItemIndex } = state.menu;
  return menu[selectedItemIndex] || null; // Kiểm tra nếu không tồn tại, trả về null
};

// Trả về một phần tử MenuSubItem hoặc null nếu không tồn tại
export const getMenuSubItem: (state: RootState) => MenuSubItem | null = (
  state: RootState
) => {
  const { menu, selectedItemIndex, selectedSubItemIndex } = state.menu;
  const selectedItem = menu[selectedItemIndex]; // Kiểm tra phần tử menu
  return selectedItem?.items[selectedSubItemIndex] || null; // Dùng optional chaining
};

// Trả về chỉ mục của phần tử đang chọn
export const getMenuItemIndex = (state: RootState) => {
  const { selectedItemIndex } = state.menu;
  return selectedItemIndex;
};

// Trả về chỉ mục của phần tử con đang chọn
export const getMenuSubItemIndex = (state: RootState) => {
  const { selectedSubItemIndex } = state.menu;
  return selectedSubItemIndex;
};

// Trạng thái loading
export const getMenuLoading = (state: RootState) => state.menu.loading;
