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

// Async thunk for fetching teacher info
export const getTeacherInfo = createAsyncThunk(
  'auth/getTeacherInfo',
  async (teacherId, { rejectWithValue, fulfillWithValue }) => {
    try {
      const { data } = await api.get(`/teacher-info/${teacherId}`);
      return fulfillWithValue(data);
    } catch (error) {
      const errorMsg = error.response?.data?.message || 'Failed to fetch teacher info';
      return rejectWithValue(errorMsg);
    }
  }
);

// Initial state
const initialState = {
  successMessage: '',
  errorMessage: '',
  loading: false,
  userInfo: null, // Changed to null to indicate absence of userInfo initially
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
        state.successMessage = payload.message || 'Login successful';
        state.token = payload.token;
        state.userInfo = payload.userInfo || null;
      })
      .addCase(teacherLogin.rejected, (state, { payload }) => {
        state.loading = false;
        state.errorMessage = payload || 'Failed to login';
      })
      .addCase(getTeacherInfo.pending, (state) => {
        state.loading = true;
      })
      .addCase(getTeacherInfo.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.userInfo = payload; // Assuming payload is the teacher info object
        state.successMessage = 'Teacher info fetched successfully';
      })
      .addCase(getTeacherInfo.rejected, (state, { payload }) => {
        state.loading = false;
        state.errorMessage = payload || 'Failed to fetch teacher info';
      });
  }
});

export const { clearMessages, logout } = authSlice.actions;
export default authSlice.reducer;
