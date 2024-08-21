import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import api from '../../api/Api';

// Async thunk for teacher login
export const teacherLogin = createAsyncThunk(
  'auth/teacherLogin',
  async (info, { rejectWithValue, fulfillWithValue }) => {
    try {
      const { data } = await api.post('/teacher-login', info, { withCredentials: true });
      localStorage.setItem('accessToken', data.token);
      return fulfillWithValue(data);
    } catch (error) {
      const errorMsg = error.response?.data?.message || 'An error occurred';
      return rejectWithValue(errorMsg);
    }
  }
);

// Initial state
const initialState = {
  successMessage: '',
  errorMessage: '',
  loading: false,
  userInfo: null,
  token: localStorage.getItem('accessToken') || null,
};

// Auth slice
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    clearMessages: (state) => {
      state.errorMessage = '';
      state.successMessage = '';
    },
    logout: (state) => {
      state.token = null;
      state.userInfo = null;
      localStorage.removeItem('accessToken');
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(teacherLogin.pending, (state) => {
        state.loading = true;
      })
      .addCase(teacherLogin.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.successMessage = payload.message;
        state.token = payload.token;
        state.userInfo = payload.userInfo; // assuming the response includes userInfo
      })
      .addCase(teacherLogin.rejected, (state, { payload }) => {
        state.loading = false;
        state.errorMessage = payload || 'Failed to login';
      });
  }
});

export const { clearMessages, logout } = authSlice.actions;
export default authSlice.reducer;
