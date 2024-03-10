import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from '../API/axios';


export const fetchCardsThunk = createAsyncThunk(
  'data/getAll',
  async (_, thunkApi) => {
    try {
      const { data } = await instance.get('/data');
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);


