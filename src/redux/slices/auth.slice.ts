import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axiosInstance from '../../utils/fetcher';
import {
  IConfirmSignup,
  ILogin,
  IRegister,
  IResponseLogin,
} from '../../utils/interfaces/authorization.interface';
import { apiEndpoints } from '../../utils/endpoints/apiEndpoints';

interface AuthState {
  isAuthenticated: boolean;
  user: any | null;
  error: string | null;
}

const initialState: AuthState = {
  isAuthenticated: localStorage.getItem('token') ? true : false,
  user: null,
  error: null,
};

export const login = createAsyncThunk(
  apiEndpoints.login,
  async (data: ILogin, thunkAPI) => {
    try {
      const response = await axiosInstance.post<IResponseLogin>(
        apiEndpoints.login,
        data
      );

      localStorage.setItem('token', response.data.token);
      localStorage.setItem('refreshToken', response.data.refreshToken);
      return response.data;
    } catch (error: any) {
      console.log('-----> ~ error:', error);
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const signup = createAsyncThunk(
  apiEndpoints.register,
  async (data: IRegister, thunkAPI) => {
    try {
      const response = await axiosInstance.post(apiEndpoints.register, data);
      return response.data;
    } catch (error: any) {
      console.log('-----> ~ error:', error);
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const confirmSignup = createAsyncThunk(
  apiEndpoints.confirmSignup,
  async (data: IConfirmSignup, thunkAPI) => {
    try {
      const response = await axiosInstance.post(
        apiEndpoints.confirmSignup,
        data
      );

      localStorage.setItem('token', response.data.token);
      localStorage.setItem('refreshToken', response.data.refreshToken);
      return response.data;
    } catch (error: any) {
      console.log('-----> ~ error:', error);
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      localStorage.clear();
      state.isAuthenticated = false;
      state.user = null;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.fulfilled, (state, action: PayloadAction<any>) => {
        state.isAuthenticated = true;
        state.user = action.payload;
        state.error = null;
      })
      .addCase(login.rejected, (state, action: PayloadAction<any>) => {
        state.isAuthenticated = false;
        state.user = null;
        state.error = action.payload;
      })
      .addCase(signup.fulfilled, (state, action: PayloadAction<any>) => {
        state.error = null;
      })
      .addCase(signup.rejected, (state, action: PayloadAction<any>) => {
        state.user = null;
        state.error = action.payload;
      })
      .addCase(confirmSignup.fulfilled, (state) => {
        state.isAuthenticated = true;
        state.error = null;
      })
      .addCase(confirmSignup.rejected, (state, action: PayloadAction<any>) => {
        state.user = null;
        state.error = action.payload;
      });
  },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;
