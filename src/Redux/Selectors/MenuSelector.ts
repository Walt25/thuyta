import { MenuItem, MenuSubItem } from "../Slices/MenuSlice";
import { RootState } from "../store";

export const selectProductsInCart = (state: RootState) => state.menu.menu;
export const getMenu = (state: RootState) => state.menu.menu;
export const getMenuItem: (state: RootState) => MenuItem = (
  state: RootState
) => {
  const { menu, selectedItemIndex } = state.menu;
  return menu[selectedItemIndex];
};
export const getMenuSubItem: (state: RootState) => MenuSubItem = (
  state: RootState
) => {
  const { menu, selectedItemIndex, selectedSubItemIndex } = state.menu;
  return menu[selectedItemIndex].items[selectedSubItemIndex];
};
export const getMenuItemIndex = (state: RootState) => {
  const { selectedItemIndex } = state.menu;
  return selectedItemIndex;
};
export const getMenuSubItemIndex = (state: RootState) => {
  const { selectedSubItemIndex } = state.menu;
  return selectedSubItemIndex;
};

export const getCartLoading = (state: RootState) => state.menu.loading;
