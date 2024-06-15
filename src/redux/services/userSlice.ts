import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  access: string;
  refresh: string;
  is_Admin: boolean;
}

const initialState: UserState = {
  access: '',
  refresh: '',
  is_Admin: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAccess: (state, action: PayloadAction<string>) => {
      state.access = action.payload;
    },
    setRefresh: (state, action: PayloadAction<string>) => {
      state.refresh = action.payload;
    },
    setIsAdmin: (state, action: PayloadAction<boolean>) => {
      state.is_Admin = action.payload;
    },
  },
});

export const { setAccess, setRefresh, setIsAdmin } = userSlice.actions;

export default userSlice.reducer;