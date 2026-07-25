import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react';
import { apiClient } from '@/api/client';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fakeBaseQuery(),
  endpoints: (builder) => ({
    login: builder.mutation<
      { token: string },
      { email: string; password: string }
    >({
      queryFn: async ({ email, password }) => {
        try {
          const data = await apiClient.post<{ token: string }>('/auth/login', {
            email,
            password,
          });
          return { data };
        } catch (err) {
          return { error: err };
        }
      },
    }),
  }),
});

export const { useLoginMutation } = authApi;
