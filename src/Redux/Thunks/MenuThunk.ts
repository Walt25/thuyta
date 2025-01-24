/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk } from "@reduxjs/toolkit";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../FireBase/firebaseConfig";
import { MenuItem } from "../Slices/MenuSlice";

export const fetchMenu = createAsyncThunk<MenuItem[], void>(
  "menu/fetchMenu",
  async () => {
    const menuCollection = collection(db, "menu");
    const snapshot = await getDocs(menuCollection);
    console.log(1);

    // Ánh xạ dữ liệu từ Firebase sang kiểu MenuItem
    const menuData: MenuItem[] = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...(doc.data() as Omit<MenuItem, "id">),
    }));
    console.log(1);
    return menuData;
  }
);
