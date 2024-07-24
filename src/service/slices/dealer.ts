import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { axiosInstance } from "../axios.ts";
import {
  MetaResponseType,
  ProductType,
  DealerInitT,
  SingleDataT,
} from "../types.ts";

const initialState: DealerInitT = {
  data: [],
  dataLoading: false,
  metaData: { total_items: 0, total_pages: 0 },
  gridType: "grid",
  filter: {
    sortBy: "date",
    page: 1,
    limit: 12,
  },
  singleData: null,
};

export const getData = createAsyncThunk(
  "dealerApi/getData",
  async (
    body: { limit: number; page: number; sortBy: "date" | "price" },
    { rejectWithValue, dispatch }
  ) => {
    try {
      const uri = `/cars/filter`;
      const { data } = await axiosInstance.post<{
        data: ProductType[];
        meta: { total_items: number; total_pages: number };
        success: boolean;
        status: number;
        message: string;
      }>(uri, body);

      if (data.meta) {
        dispatch(setMetaQuery(data.meta));
      }

      return data.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const getSingleData = createAsyncThunk(
  "dealerApi/getSingleData",
  async (id: string, { rejectWithValue }) => {
    try {
      const uri = `/cars/${id}`;
      const { data } = await axiosInstance.get<{
        data: SingleDataT;
        status: number;
        success: boolean;
        message: string;
      }>(uri);

      return data.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const dealerSlice = createSlice({
  name: "dealer",
  initialState,
  reducers: {
    setMetaQuery: (state, action: PayloadAction<MetaResponseType>) => {
      state.metaData = action.payload;
    },
    setGridType: (state, action: PayloadAction<"grid" | "line">) => {
      state.gridType = action.payload;
    },
    setFilter: (
      state,
      action: PayloadAction<{
        sortBy: "date" | "price";
        page: number;
        limit: number;
      }>
    ) => {
      state.filter = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(getData.pending, (state) => {
      state.dataLoading = true;
    });
    builder.addCase(getData.fulfilled, (state, action) => {
      state.dataLoading = false;
      state.data = action.payload;
    });
    builder.addCase(getData.rejected, (state) => {
      state.dataLoading = false;
    });

    builder.addCase(getSingleData.pending, (state) => {
      state.dataLoading = true;
    });
    builder.addCase(getSingleData.fulfilled, (state, action) => {
      state.singleData = action.payload;
    });
    builder.addCase(getSingleData.rejected, (state) => {
      state.dataLoading = false;
    });
  },
});

export const { setMetaQuery, setGridType, setFilter } = dealerSlice.actions;

export default dealerSlice.reducer;
