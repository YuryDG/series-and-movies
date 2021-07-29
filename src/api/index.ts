import axios from 'axios';
import { APIResponse } from '../types';

const API_URL = process.env.API_URL || '';

export const API = {
  getSeriesAndMovies: () => {
    return axios.get<APIResponse>(API_URL);
  }
}