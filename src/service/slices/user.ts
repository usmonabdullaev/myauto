import { PayloadAction, createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { axiosInstance, axiosToken } from "../axios.ts";
import { UserInitT, UserT } from "../types.ts";
import { message } from "antd";
import { getFavorites } from "./data.ts";

const initialState: UserInitT = {
  showAuthModal: false,
  user: null,
  userLoading: false,
  authorized: false,
};

export const getMe = createAsyncThunk(
  "userApi/getMe",
  async (_, { rejectWithValue }) => {
    try {
      const uri = `/user/me`;
      const { data } = await axiosToken.get<{
        success: boolean;
        status: number;
        message: string;
        data: UserT;
      }>(uri);

      return data.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const login1 = createAsyncThunk(
  "userApi/login1",
  async (
    body: { body: { phone: string }; onSuccess?: () => void },
    { rejectWithValue }
  ) => {
    try {
      const uri = `/auth/login/${body.body.phone}`;
      const { data } = await axiosInstance.get<{
        success: boolean;
        status: number;
        message: string;
      }>(uri);

      if (data.success) {
        message.success(data.message);

        if (body.onSuccess) {
          body.onSuccess();
        }
      }

      return data;
    } catch (err) {
      message.error(err.response.data.message);
      return rejectWithValue(err);
    }
  }
);

export const login = createAsyncThunk(
  "userApi/login",
  async (
    body: { body: { phone: string; sms: string }; onSuccess?: () => void },
    { rejectWithValue, dispatch }
  ) => {
    try {
      const uri = `/auth/login/${body.body.phone}/${body.body.sms}`;
      const { data } = await axiosInstance.get<{
        success: boolean;
        status: number;
        message: string;
        token: string;
        data: UserT;
      }>(uri);

      if (data.success) {
        localStorage.setItem("token", data.token);
        message.success(data.message);

        console.log(body.onSuccess);

        if (body.onSuccess) {
          body.onSuccess();
        }

        dispatch(setAuthorized(true));
        dispatch(getFavorites());
      }

      return data.data;
    } catch (err) {
      message.error(err.response.data.message);
      return rejectWithValue(err);
    }
  }
);

export const checkPhone = createAsyncThunk(
  "userApi/checkPhone",
  async (
    { phone, onSuccess }: { phone: string; onSuccess: () => void },
    { rejectWithValue }
  ) => {
    try {
      const uri = `/auth/check-phone/${phone}`;
      const { data } = await axiosInstance.get<{
        success: boolean;
        status: number;
        message: string;
      }>(uri);

      onSuccess();
      message.success(data.message);

      return data;
    } catch (err) {
      message.warning(err.response.data.message);
      return rejectWithValue(err.response.data.message);
    }
  }
);

export const register = createAsyncThunk(
  "userApi/register",
  async (
    body: {
      body: {
        phone: string;
        name: string;
        created: string;
      };
      onSuccess: () => void;
    },
    { rejectWithValue, dispatch }
  ) => {
    try {
      const uri = `/auth/register`;
      const { data } = await axiosInstance.post<{
        success: boolean;
        status: number;
        message: string;
        token: string;
        data: UserT;
      }>(uri, body.body);

      if (data.success) {
        localStorage.setItem("token", data.token);
        message.success(data.message);

        if (body.onSuccess) {
          body.onSuccess();
        }

        dispatch(setAuthorized(true));
      }

      return data.data;
    } catch (err) {
      message.error(err.response.data.message);
      return rejectWithValue(err);
    }
  }
);

export const logout = createAsyncThunk(
  "userApi/logout",
  async (_, { rejectWithValue, dispatch }) => {
    try {
      localStorage.removeItem("token");
      dispatch(setAuthorized(false));
      dispatch(setUser(null));
      dispatch(getFavorites());

      return "logout";
    } catch (err) {
      message.error(err.response.data.message);
      return rejectWithValue(err);
    }
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setShowAuthModal: (state, action: PayloadAction<boolean>) => {
      state.showAuthModal = action.payload;
    },
    setAuthorized: (state, action: PayloadAction<boolean>) => {
      state.authorized = action.payload;
    },
    setUser: (state, action: PayloadAction<UserT | null>) => {
      state.user = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(login.pending, (state) => {
      state.userLoading = true;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.userLoading = false;
      state.user = action.payload;
    });
    builder.addCase(login.rejected, (state) => {
      state.userLoading = false;
    });

    builder.addCase(login1.pending, (state) => {
      state.userLoading = true;
    });
    builder.addCase(login1.fulfilled, (state) => {
      state.userLoading = false;
    });
    builder.addCase(login1.rejected, (state) => {
      state.userLoading = false;
    });

    builder.addCase(getMe.fulfilled, (state, action) => {
      state.user = action.payload;
      state.authorized = true;
    });

    builder.addCase(checkPhone.pending, (state) => {
      state.userLoading = true;
    });
    builder.addCase(checkPhone.fulfilled, (state) => {
      state.userLoading = false;
    });
    builder.addCase(checkPhone.rejected, (state) => {
      state.userLoading = false;
    });

    builder.addCase(register.pending, (state) => {
      state.userLoading = true;
    });
    builder.addCase(register.fulfilled, (state, action) => {
      state.userLoading = false;
      state.user = action.payload;
    });
    builder.addCase(register.rejected, (state) => {
      state.userLoading = false;
    });
  },
});

export const { setShowAuthModal, setAuthorized, setUser } = userSlice.actions;

export default userSlice.reducer;
