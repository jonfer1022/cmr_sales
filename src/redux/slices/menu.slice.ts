import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IMenuState {
  sideMenu: string;
}

const initialState: IMenuState = {
  sideMenu: 'sales',
};

const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    setMenu: (state, action: PayloadAction<string>) => {
      state.sideMenu = action.payload;
    },
  },
});

export default menuSlice.reducer;
export const { setMenu } = menuSlice.actions;
