import axios from 'axios';
import { Constantes } from '../utils/Constants';

const api = axios.create({
  baseURL: Constantes.URL.BASE_URL,
});

export default api;
