import axios, { AxiosInstance } from 'axios';
import { env } from '@/config/env';

export interface ApiClient {
  get<T>(url: string, params?: object): Promise<T>;
  post<T>(url: string, body?: object): Promise<T>;
  put<T>(url: string, body?: object): Promise<T>;
  delete<T>(url: string): Promise<T>;
}

class AxiosApiClient implements ApiClient {
  private instance: AxiosInstance;

  constructor() {
    this.instance = axios.create({ baseURL: env.EXPO_PUBLIC_API_URL });
    // attach interceptors here for auth token + refresh
  }

  get<T>(url: string, params?: object) {
    return this.instance.get<T>(url, { params }).then((r) => r.data);
  }
  post<T>(url: string, body?: object) {
    return this.instance.post<T>(url, body).then((r) => r.data);
  }
  put<T>(url: string, body?: object) {
    return this.instance.put<T>(url, body).then((r) => r.data);
  }
  delete<T>(url: string) {
    return this.instance.delete<T>(url).then((r) => r.data);
  }
}

export const apiClient: ApiClient = new AxiosApiClient();
