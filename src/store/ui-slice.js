const { createSlice } = require("@reduxjs/toolkit");
const initailCartState = { counter: 1, showCart: true };

const uiSlice = createSlice({
  name: "ui",
  initialState: initailCartState,
  reducers: {
    toggle(state) {
      state.showCart = !state.showCart;
    },
  },
});
export const uiAction = uiSlice.actions;
export default uiSlice;
