
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PostState {
  loading: boolean;
  error: string | null;
  data: any; 
}

const initialState: PostState = {
  loading: false,
  error: null,
  data: null,
};

const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    startLoading: (state) => {
      state.loading = true;
      state.error = null;
    },
    postDataSuccess: (state, action: PayloadAction<any>) => {
      state.loading = false;
      state.data = action.payload;
    },
    postDataFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { startLoading, postDataSuccess, postDataFailure } = postSlice.actions;

export default postSlice.reducer;
