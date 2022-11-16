import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const initialState = {
  isSidebarOpen: false,
};
const SidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    closeSidebar: (state) => {
      state.isSidebarOpen = false;
    },
    openSidebar: (state) => {
      state.isSidebarOpen = true;
    },
  },
});

export const { closeSidebar, openSidebar } = SidebarSlice.actions;
export default SidebarSlice.reducer;
