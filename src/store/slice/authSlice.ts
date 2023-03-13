import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import AuthService from '@/services/AuthServices';

// Async thunk to call login API
export const loginAsync = createAsyncThunk(
  'auth/loginAsync',
  async ({ username, password }: any, thunkAPI) => {
    try {
      const response = await AuthService.login({ email: username, password });
      
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    loading: false,
    isLoggedIn: false,
    user: null,
    error: ''
  },
  reducers: {
    login: (state, action) => {
      state.isLoggedIn = true;
      state.user = action.payload;
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.user = null;
    },
    login2: () => {
      console.log('login2');
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(loginAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(loginAsync.rejected, (state: any, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { login, logout, login2 } = authSlice.actions;
export default authSlice.reducer;