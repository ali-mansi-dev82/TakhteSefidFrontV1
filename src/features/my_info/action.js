import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { API_USER_URL } from "../../constants/api_endpoints";
import { getAccessTokenCookies } from "../../utils/accessTokenCookie";

export const update_my_info = createAsyncThunk(
  "auth/send_otp",
  async ({ fullname, mobile, email }, { rejectWithValue }) => {
    try {
      const token = await getAccessTokenCookies();
      if (token) {
        const config = {
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${token}`,
          },
        };

        const { data } = await axios.put(
          `${API_USER_URL}/update-my-info/`,
          { fullname, mobile, email },
          config
        );

        return data;
      }
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
