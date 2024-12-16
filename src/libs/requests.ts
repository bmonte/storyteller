import type { AxiosRequestConfig } from 'axios';

import { api } from './api';

export async function getRequest<T>(URL: string, config?: AxiosRequestConfig) {
  return api.get<T>(`/${URL}`, config).then((response) => response.data);
}
export async function postRequest<T, K = unknown>(
  URL: string,
  payload: K,
  config?: AxiosRequestConfig,
) {
  return api
    .post<T>(`/${URL}`, payload, config)
    .then((response) => response.data);
}

export async function putRequest<T, K = unknown>(
  URL: string,
  payload: K,
  config?: AxiosRequestConfig,
) {
  return api
    .put<T>(`/${URL}`, payload, config)
    .then((response) => response.data);
}

export async function patchRequest<T, K = unknown>(
  URL: string,
  payload: K,
  config?: AxiosRequestConfig,
) {
  return api
    .patch<T>(`/${URL}`, payload, config)
    .then((response) => response.data);
}

export async function deleteRequest<T>(
  URL: string,
  config?: AxiosRequestConfig,
) {
  return api.delete<T>(`/${URL}`, config).then((response) => response.data);
}
