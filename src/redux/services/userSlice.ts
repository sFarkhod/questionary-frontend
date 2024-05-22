import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  access: string;
  refresh: string;
}

const initialState: UserState = {
  access: '',
  refresh: '',
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
  },
});

export const { setAccess, setRefresh } = userSlice.actions;

export default userSlice.reducer;