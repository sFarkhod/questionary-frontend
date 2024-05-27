import { api } from './api'

export const registerApi = api.injectEndpoints({
  endpoints: builder => ({
    registerUser: builder.mutation({
      query: body => ({
        url: `/register/`,
        method: 'POST',
        body
      })
    }),
    loginUser: builder.mutation({
      query: body => ({
        url: `/login/`,
        method: 'POST',
        body
      })
    })
  })
})

export const { useRegisterUserMutation, useLoginUserMutation } = registerApi