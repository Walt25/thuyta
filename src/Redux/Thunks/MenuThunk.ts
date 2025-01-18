// import { createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";
// import { Product } from "../slices/cartSlice";

// export const fetchProductsInCart = createAsyncThunk<
//   Product[],
//   void,
//   { rejectValue: string }
// >("cart/fetchProductsInCart", async (_, thunkAPI) => {
//   try {
//     const response = await axios.get("/api/cart/products");
//     return response.data as Product[]; // Đảm bảo kiểu dữ liệu trả về
//   } catch (error: any) {
//     return thunkAPI.rejectWithValue(
//       error.response?.data || "An error occurred"
//     );
//   }
// });
