import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axiosInstance from '../../utils/fetcher';
import { apiEndpoints } from '../../utils/endpoints/apiEndpoints';
import { ISales } from '../../utils/interfaces/sales.interface';

interface ISalesState {
  sales: any[];
  purchasedProducts: any[];
  saleDetails: ISales;
  page: number;
  error: string | null;
}

const initialState: ISalesState = {
  sales: [],
  purchasedProducts: [],
  saleDetails: {
    id: 0,
    reference: '',
    amount: 0,
    totalPrice: 0,
    status: '',
    category: '',
    size: '',
    createdAt: new Date().toLocaleDateString('en-CA'),
    updatedAt: new Date().toLocaleDateString('en-CA'),
    user: {
      name: '',
    },
  },
  page: 1,
  error: null,
};

export const getSales = createAsyncThunk('getSales', async (_, thunkAPI) => {
  try {
    const response = await axiosInstance.get(apiEndpoints.getSales);
    return response.data;
  } catch (error: any) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

export const getSaleDetails = createAsyncThunk(
  'getSaleDetails',
  async (id: string, thunkAPI) => {
    try {
      const includeProductsPurchased = true;
      const response = await axiosInstance.get(
        apiEndpoints.editSales(id, includeProductsPurchased)
      );
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const salesSlice = createSlice({
  name: 'sales',
  initialState,
  reducers: {
    setIncrementPage: (state) => {
      state.page += 1;
    },
    setDecrementPage: (state) => {
      state.page -= 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getSales.fulfilled, (state, action: PayloadAction<any>) => {
        state.sales = action.payload;
      })
      .addCase(getSales.rejected, (state, action: PayloadAction<any>) => {
        state.error = action.payload;
      })
      .addCase(
        getSaleDetails.fulfilled,
        (state, action: PayloadAction<any>) => {
          state.purchasedProducts = action.payload.purchasedProducts;
          state.saleDetails = action.payload.saleDetails;
        }
      )
      .addCase(getSaleDetails.rejected, (state, action: PayloadAction<any>) => {
        state.error = action.payload;
      });
  },
});

export default salesSlice.reducer;
export const { setDecrementPage, setIncrementPage } = salesSlice.actions;
