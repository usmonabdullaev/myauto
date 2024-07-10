import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { axiosInstance } from "../axios.ts";
import { MetaResponseType, ProductType, DealerInitT } from "../types.ts";

const initialState: DealerInitT = {
  data: [],
  dataLoading: false,
  metaData: { total_items: 0, total_pages: 0 },
  gridType: "grid",
  filter: {
    sortBy: "date",
    page: 1,
  },
};

export const getData = createAsyncThunk(
  "dataApi/getData",
  async (_, { rejectWithValue, dispatch }) => {
    try {
      const uri = `/car/filter`;
      const { data } = await axiosInstance.get<{
        data: ProductType[];
        meta: { total_items: number; total_pages: number };
      }>(uri);

      if (data.meta) {
        dispatch(setMetaQuery(data.meta));
      }

      return data.data;
    } catch (err) {
      return rejectWithValue(err.message);
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
      action: PayloadAction<{ sortBy: "date" | "price"; page: number }>
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
  },
});

export const { setMetaQuery, setGridType, setFilter } = dealerSlice.actions;

export default dealerSlice.reducer;
