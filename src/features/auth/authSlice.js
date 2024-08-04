import { createSlice } from "@reduxjs/toolkit";
import { removeAccessTokenCookies } from "../../utils/accessTokenCookie";

const initialState = {
  isAuthed: false,
  loading: true,
  userInfo: {}, // for user object
  userToken: null, // for storing the JWT
  error: null,
  isError: false,
  isSuccess: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    log_in: (state, action) => {
      state.userInfo = action.payload.userInfo;
      state.userToken = action.payload.userToken;
      state.isAuthed = true;
      state.isSuccess = true;
      state.loading = false;
    },
    failed_request: (state) => {
      state.isAuthed = false;
      state.isError = true;
      state.isSuccess = false;
      state.loading = false;
    },
    log_out: (state) => {
      state.userInfo = {};
      state.userToken = null;
      state.isAuthed = false;
      state.isSuccess = false;
      state.loading = false;
      removeAccessTokenCookies();
    },
  },
});
export const { log_in, log_out, failed_request } = authSlice.actions;
export default authSlice.reducer;
