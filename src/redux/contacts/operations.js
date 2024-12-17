import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-hot-toast';


export const contactsApi = axios.create({
  baseURL: 'https://connections-api.goit.global',
});


const setAuthHeader = (token) => {
  contactsApi.defaults.headers.common.Authorization = `Bearer ${token}`;
};


const getToken = (state) => state.auth.token;


export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    const token = getToken(thunkAPI.getState());
    if (!token) return thunkAPI.rejectWithValue('No token found');

    setAuthHeader(token);
    try {
      const response = await contactsApi.get('/contacts');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);


export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, thunkAPI) => {
    const token = getToken(thunkAPI.getState());
    if (!token) return thunkAPI.rejectWithValue('No token found');

    setAuthHeader(token);
    try {
      const response = await contactsApi.post('/contacts', contact);
      toast.success('Contact added successfully!');
      return response.data;
    } catch (error) {
      toast.error('Failed to add contact!');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);


export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunkAPI) => {
    const token = getToken(thunkAPI.getState());
    if (!token) return thunkAPI.rejectWithValue('No token found');

    setAuthHeader(token);
    try {
      await contactsApi.delete(`/contacts/${id}`);
      toast.success('Contact deleted successfully!');
      return id;
    } catch (error) {
      toast.error('Failed to delete contact!');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

