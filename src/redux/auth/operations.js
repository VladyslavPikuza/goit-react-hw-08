import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';


export const authApi = axios.create({
  baseURL: 'https://connections-api.goit.global',
});


const setAuthHeader = token => {
  authApi.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  delete authApi.defaults.headers.common.Authorization;
};


export const register = createAsyncThunk('auth/register', async (credentials, thunkAPI) => {
  try {
    const { data } = await authApi.post('/users/signup', credentials);
    setAuthHeader(data.token);
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});


export const login = createAsyncThunk('auth/login', async (credentials, thunkAPI) => {
  try {
    const { data } = await authApi.post('/users/login', credentials);
    setAuthHeader(data.token);
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});


export const logout = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await authApi.post('/users/logout');
    clearAuthHeader();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});


export const refreshUser = createAsyncThunk('auth/refresh', async (_, thunkAPI) => {
  const state = thunkAPI.getState();
  const token = state.auth.token;

  if (!token) return thunkAPI.rejectWithValue('No token found');
  try {
    setAuthHeader(token);
    const { data } = await authApi.get('/users/current');
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});