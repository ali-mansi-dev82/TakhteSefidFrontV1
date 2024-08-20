import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { API_COURSE_URL } from "../../constants/api_endpoints";
import { getAccessTokenCookies } from "../../utils/accessTokenCookie";

export const create_course = createAsyncThunk(
  "course/create",
  async (bodyData, { rejectWithValue }) => {
    try {
      const token = await getAccessTokenCookies();
      if (token) {
        const config = {
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${token}`,
          },
        };

        const { data } = await axios.post(
          `${API_COURSE_URL}/create/`,
          bodyData,
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
