import { createAsyncThunk } from "@reduxjs/toolkit";
import { AXIOS_INSTANCE } from "../../constant/axios-config";
import { API_COLLECTION } from "../../constant/api-collection";

// REQUEST LOGIN
export const REQUEST_STATE = createAsyncThunk(
  "request/State",
  async (_, { rejectWithValue }) => {
    try {
      const response = await AXIOS_INSTANCE.get(API_COLLECTION.V1.AH);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
