import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { message } from "antd";

import { axiosInstance, axiosToken } from "../axios.ts";
import {
  DataInitType,
  FavoriteT,
  FilterQueriesToUrlType,
  FilterQueriesType,
  MetaResponseType,
  ModelT,
  ProductType,
  SingleDataT,
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
    credit: undefined,
    minYear: undefined,
    maxYear: undefined,
    mileage: undefined,
    saddened: true,
    transmission: [],
    gasEquipment: false,
    fuelType: [],
    bargain: undefined,
    exchange: undefined,
    colors: [],
  },
  singleData: null,
  singleDataLoading: false,
  userInfo: null,
  userInfoLoading: false,
  comparisonData: null,
  comparisonDataLoading: false,
  showrooms: [],
  showroomsLoading: false,
  favorites: [],
  gridType: "grid",
  models: [],
};

export const getFavorites = createAsyncThunk(
  "dataApi/getFavorites",
  async (_, { rejectWithValue }) => {
    try {
      const uri = `/user/favorites`;
      const { data } = await axiosToken.get<{
        data: FavoriteT[];
        status: number;
        success: boolean;
        message: string;
      }>(uri);
      return data.data;
    } catch (err) {
      return rejectWithValue(err.response.data.message);
    }
  }
);

export const addFavorite = createAsyncThunk(
  "dataApi/addFavorite",
  async (id: number, { rejectWithValue, dispatch }) => {
    try {
      const uri = `/user/favorites/${id}`;
      const { data } = await axiosToken.post<{
        data: FavoriteT[];
        status: number;
        success: boolean;
        message: string;
      }>(uri);

      dispatch(getFavorites());
      message.success(data.message);

      return data.data;
    } catch (err) {
      if (err.response.status === 403) {
        message.warning("Вы не авторизованы!");
      }

      return rejectWithValue(err);
    }
  }
);

export const deleteFavorite = createAsyncThunk(
  "dataApi/deleteFavorite",
  async (id: number, { rejectWithValue, dispatch }) => {
    try {
      const uri = `/user/favorites/${id}`;
      const { data } = await axiosToken.delete<{
        data: FavoriteT[];
        status: number;
        success: boolean;
        message: string;
      }>(uri);

      dispatch(getFavorites());
      message.success(data.message);

      return data;
    } catch (err) {
      if (err.response.status === 401) {
        message.warning("Вы не авторизованы!");
      }

      return rejectWithValue(err);
    }
  }
);

export const getPremiumData = createAsyncThunk(
  "dataApi/getPremiumData",
  async (_, { rejectWithValue }) => {
    try {
      const uri = `/cars/filter/premium`;
      const { data } = await axiosInstance.get<{
        data: ProductType[];
        message: string;
        status: number;
        success: boolean;
      }>(uri);

      return data.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const getSearchCar = createAsyncThunk(
  "dataApi/getSearchCar",
  async (_, { rejectWithValue }) => {
    try {
      const uri = `/cars/searched?city=Душанбе`;
      const { data } = await axiosInstance.get<ProductType[]>(uri);
      return data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const getNewCars = createAsyncThunk(
  "dataApi/getNewCars",
  async (_, { rejectWithValue }) => {
    try {
      const uri = `cars/new`;
      const { data } = await axiosInstance.get<ProductType[]>(uri);
      return data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const getElectCars = createAsyncThunk(
  "dataApi/getElectCars",
  async (_, { rejectWithValue }) => {
    try {
      const uri = `cars/electronics`;
      const { data } = await axiosInstance.get<ProductType[]>(uri);
      return data;
    } catch (err) {
      return rejectWithValue(err);
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
      return rejectWithValue(err);
    }
  }
);

export const getFilteredData = createAsyncThunk(
  "dataApi/getFilteredData",
  async (filter: FilterQueriesToUrlType, { rejectWithValue, dispatch }) => {
    const filtered = filterObject(filter);
    try {
      const uri = `/cars/filter`;
      const { data } = await axiosInstance.post<{
        data: ProductType[];
        meta: MetaResponseType;
      }>(uri, filtered);

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
  "dataApi/getSingleData",
  async (id: string, { rejectWithValue }) => {
    try {
      const uri = `/cars/car/${id}`;
      const { data } = await axiosInstance.get<{
        data: SingleDataT;
        success: boolean;
        status: number;
        message: string;
      }>(uri);

      return data.data;
    } catch (err) {
      return rejectWithValue(err);
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
      return rejectWithValue(err);
    }
  }
);

export const getUserInfo = createAsyncThunk(
  "dataApi/getUserInfo",
  async (id: string, { rejectWithValue }) => {
    try {
      const uri = `/cars/user/${id}`;
      const { data } = await axiosInstance.get<{
        data: UserInfoType;
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

export const getShowrooms = createAsyncThunk(
  "dataApi/getShowrooms",
  async (_, { rejectWithValue }) => {
    try {
      const uri = `/showrooms`;
      const { data } = await axiosInstance.get(uri);
      return data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const getModels = createAsyncThunk(
  "dataApi/getModals",
  async (_, { rejectWithValue }) => {
    try {
      const uri = `/cars/models`;
      const { data } = await axiosInstance.get<{
        data: ModelT[];
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
    setGridType: (state, action: PayloadAction<"grid" | "line">) => {
      state.gridType = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(getFavorites.fulfilled, (state, action) => {
      state.favorites = action.payload;
    });
    builder.addCase(getFavorites.rejected, (state) => {
      state.favorites = [];
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

    builder.addCase(getShowrooms.pending, (state) => {
      state.showroomsLoading = true;
    });
    builder.addCase(getShowrooms.fulfilled, (state, action) => {
      state.showroomsLoading = false;
      state.showrooms = action.payload;
    });
    builder.addCase(getShowrooms.rejected, (state) => {
      state.showroomsLoading = false;
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

    builder.addCase(getModels.fulfilled, (state, action) => {
      state.models = action.payload;
    });
  },
});

export const { setMetaQuery, setFilterQueries, setGridType } =
  dataSlice.actions;

export default dataSlice.reducer;
