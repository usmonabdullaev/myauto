import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { axiosInstance } from "../axios.ts";
import {
  DataInitType,
  FilterQueriesToUrlType,
  FilterQueriesType,
  MetaResponseType,
  ProductType,
  UserInfoType,
} from "../types.ts";
import { filterObject } from "../functions.ts";

const initialState: DataInitType = {
  data: [],
  dataLoading: false,
  premiumData: [],
  premiumDataLoading: false,
  searchCar: [],
  searchCarLoading: false,
  newData: [],
  newDataLoading: false,
  electData: [],
  electDataLoading: false,
  similar: [],
  similarLoading: false,
  filteredData: [],
  filteredDataLoading: false,
  metaData: {
    total_items: 0,
    total_pages: 0,
  },
  filterQueries: {
    page: 1,
    sortBy: "date",
    city: "",
    model: "",
    minPrice: undefined,
    maxPrice: undefined,
    credit: false,
    minYear: undefined,
    maxYear: undefined,
    mileage: undefined,
    saddened: true,
    transmission: [],
    gasEquipment: false,
    fuelType: [],
    bargain: false,
    exchange: false,
    colors: [],
  },
  singleData: null,
  singleDataLoading: false,
  userInfo: null,
  userInfoLoading: false,
  comparisonData: null,
  comparisonDataLoading: false,
};

export const getData = createAsyncThunk(
  "dataApi/getData",
  async (_, { rejectWithValue }) => {
    try {
      const uri = `/data`;
      const { data } = await axiosInstance.get<ProductType[]>(uri);
      return data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const getPremiumData = createAsyncThunk(
  "dataApi/getPremiumData",
  async (_, { rejectWithValue }) => {
    try {
      const uri = `/car/home/premium`;
      const { data } = await axiosInstance.get<ProductType[]>(uri);
      return data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const getSearchCar = createAsyncThunk(
  "dataApi/getSearchCar",
  async (_, { rejectWithValue }) => {
    try {
      const uri = `/car/home/search?city=Душанбе`;
      const { data } = await axiosInstance.get<ProductType[]>(uri);
      return data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const getNewCars = createAsyncThunk(
  "dataApi/getNewCars",
  async (_, { rejectWithValue }) => {
    try {
      const uri = `car/home/new`;
      const { data } = await axiosInstance.get<ProductType[]>(uri);
      return data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const getElectCars = createAsyncThunk(
  "dataApi/getElectCars",
  async (_, { rejectWithValue }) => {
    try {
      const uri = `car/home/elect`;
      const { data } = await axiosInstance.get<ProductType[]>(uri);
      return data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const getSimilar = createAsyncThunk(
  "dataApi/getSimilar",
  async (query: { limit: number; price: number }, { rejectWithValue }) => {
    try {
      const uri = `/car/similar?limit=${query.limit}&price=${query.price}`;
      const { data } = await axiosInstance.get<ProductType[]>(uri);
      return data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const getFilteredData = createAsyncThunk(
  "dataApi/getFilteredData",
  async (filter: FilterQueriesToUrlType, { rejectWithValue, dispatch }) => {
    const filtered = filterObject(filter);
    try {
      const uri = `/car/filter`;
      const { data } = await axiosInstance.post<{
        data: ProductType[];
        meta: MetaResponseType;
      }>(uri, filtered);

      if (data.meta) {
        dispatch(setMetaQuery(data.meta));
      }

      return data.data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const getSingleData = createAsyncThunk(
  "dataApi/getSingleData",
  async (id: string, { rejectWithValue }) => {
    try {
      const uri = `/car/${id}`;
      const { data } = await axiosInstance.get<ProductType>(uri);
      return data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const getComparisonData = createAsyncThunk(
  "dataApi/getComparisonData",
  async (_, { rejectWithValue }) => {
    try {
      const uri = "/test";
      const { data } = await axiosInstance.get<ProductType[]>(uri);
      return data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const getUserInfo = createAsyncThunk(
  "dataApi/getUserInfo",
  async (id: string, { rejectWithValue }) => {
    try {
      const uri = `car/user/${id}`;
      const { data } = await axiosInstance.get<UserInfoType>(uri);
      return data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setMetaQuery: (state, action: PayloadAction<MetaResponseType>) => {
      state.metaData = action.payload;
    },
    setFilterQueries: (state, action: PayloadAction<FilterQueriesType>) => {
      state.filterQueries = { ...state.filterQueries, ...action.payload };
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

    builder.addCase(getPremiumData.pending, (state) => {
      state.premiumDataLoading = true;
    });
    builder.addCase(getPremiumData.fulfilled, (state, action) => {
      state.premiumDataLoading = false;
      state.premiumData = action.payload;
    });
    builder.addCase(getPremiumData.rejected, (state) => {
      state.premiumDataLoading = false;
    });

    builder.addCase(getSearchCar.pending, (state) => {
      state.searchCarLoading = true;
    });
    builder.addCase(getSearchCar.fulfilled, (state, action) => {
      state.searchCarLoading = false;
      state.searchCar = action.payload;
    });
    builder.addCase(getSearchCar.rejected, (state) => {
      state.searchCarLoading = false;
    });

    builder.addCase(getNewCars.pending, (state) => {
      state.newDataLoading = true;
    });
    builder.addCase(getNewCars.fulfilled, (state, action) => {
      state.newDataLoading = false;
      state.newData = action.payload;
    });
    builder.addCase(getNewCars.rejected, (state) => {
      state.newDataLoading = false;
    });

    builder.addCase(getElectCars.pending, (state) => {
      state.electDataLoading = true;
    });
    builder.addCase(getElectCars.fulfilled, (state, action) => {
      state.electData = action.payload;
      state.electDataLoading = false;
    });
    builder.addCase(getElectCars.rejected, (state) => {
      state.electDataLoading = false;
    });

    builder.addCase(getSimilar.pending, (state) => {
      state.similarLoading = true;
    });
    builder.addCase(getSimilar.fulfilled, (state, action) => {
      state.similar = action.payload;
      state.similarLoading = false;
    });
    builder.addCase(getSimilar.rejected, (state) => {
      state.similarLoading = false;
    });

    builder.addCase(getFilteredData.pending, (state) => {
      state.filteredDataLoading = true;
    });
    builder.addCase(getFilteredData.fulfilled, (state, action) => {
      state.filteredDataLoading = false;
      state.filteredData = action.payload;
    });
    builder.addCase(getFilteredData.rejected, (state) => {
      state.filteredDataLoading = false;
    });

    builder.addCase(getSingleData.pending, (state) => {
      state.singleDataLoading = true;
    });
    builder.addCase(getSingleData.fulfilled, (state, action) => {
      state.singleDataLoading = false;
      state.singleData = action.payload;
    });
    builder.addCase(getSingleData.rejected, (state) => {
      state.singleDataLoading = false;
    });

    builder.addCase(getUserInfo.pending, (state) => {
      state.userInfoLoading = true;
    });
    builder.addCase(getUserInfo.fulfilled, (state, action) => {
      state.userInfoLoading = false;
      state.userInfo = action.payload;
    });
    builder.addCase(getUserInfo.rejected, (state) => {
      state.userInfoLoading = false;
    });

    builder.addCase(getComparisonData.pending, (state) => {
      state.comparisonDataLoading = true;
    });
    builder.addCase(getComparisonData.fulfilled, (state, action) => {
      state.comparisonDataLoading = false;
      state.comparisonData = action.payload;
    });
    builder.addCase(getComparisonData.rejected, (state) => {
      state.comparisonDataLoading = false;
    });
  },
});

export const { setMetaQuery, setFilterQueries } = dataSlice.actions;

export default dataSlice.reducer;
