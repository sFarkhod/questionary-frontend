import { api } from './api'

export const registerApi = api.injectEndpoints({
  endpoints: builder => ({
    registerUser: builder.mutation({
      query: body => ({
        url: `/register`,
        method: 'POST',
        body
      })
    })
  })
})

export const { useRegisterUserMutation } = registerApi