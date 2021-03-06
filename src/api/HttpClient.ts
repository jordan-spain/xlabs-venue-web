import Axios, { AxiosResponse } from 'axios';

export default class HttpClient {
  constructor() {
    Axios.defaults.baseURL = 'https://localhost:5000/';
  }

  public async get<T>(endpoint: string): Promise<T> {
    const res: AxiosResponse = await Axios.get<T>(endpoint);
    return res.data;
  }
}
