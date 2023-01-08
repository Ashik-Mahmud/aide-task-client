import { createSlice } from "@reduxjs/toolkit";

const initialState: any = {
  carts: [],
  count: 0,
};
const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const isHas = state?.carts?.find(
        (cart: any) => cart?._id === action?.payload?._id
      );
      if (isHas) {
        const remaining = state?.carts.filter(
          (cart: any) => cart?._id !== action?.payload?._id
        );
        isHas.quantity = isHas?.quantity + 1;
        state.carts = [...remaining, isHas];
        state.count = state.count + 1;
      } else {
        state.carts = [
          ...state.carts,
          { ...action.payload, quantity: 1, order: state?.carts?.length + 1 },
        ];
        state.count = state.count + 1;
      }
    },
  },
});

export const { addToCart } = productSlice.actions;
export default productSlice.reducer;
