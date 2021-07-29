import axios from 'axios';
import { APIResponse } from '../types';

const API_URL = process.env.REACT_APP_API_URL || '';
export const API = {
  getSeriesAndMovies: () => {
    return axios.get<APIResponse>(API_URL);
  }
}