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
        if (isHas?.quantity < isHas?.countInStock) {
          isHas.quantity = isHas?.quantity + 1;
          state.carts = [...remaining, isHas];
          state.count = state.count + 1;
        } else {
          alert(`Stock out`);
        }
      } else {
        state.carts = [
          ...state.carts,
          { ...action.payload, quantity: 1, order: state?.carts?.length + 1 },
        ];
        state.count = state.count + 1;
      }
    },
    removeToCart: (state, action) => {
      const isHas = state?.carts?.find(
        (cart: any) => cart?._id === action?.payload
      );
      if (isHas) {
        const remaining = state?.carts.filter(
          (cart: any) => cart?._id !== action?.payload
        );
        isHas.quantity = isHas.quantity - 1;
        state.count = state.count - 1;
        state.carts = [...remaining, isHas];
        if (isHas.quantity === 0) {
          state.carts = remaining;
        }
      }
    },
  },
});

export const { addToCart, removeToCart } = productSlice.actions;
export default productSlice.reducer;
