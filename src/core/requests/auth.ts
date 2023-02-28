import { AxiosError, AxiosResponse } from 'axios'
import { useMutation } from 'react-query'

import { baseApi } from '../axios'
import { notifier } from '../services/notifier'
import { storage } from '../services/storage'
import { SIGN_IN, SIGN_UP } from '../urls'

type SignInProps = { email: string, password: string }
type SignUpProps = SignInProps & { firstName: string, lastName: string }

export const signIn = async (data: SignInProps) => {
    return await baseApi.post(SIGN_IN, data)
}

export const signUp = async (data: SignUpProps) => {
    return await baseApi.post(SIGN_UP, data)
}

export const onError = (error: AxiosError) => {
    console.log(error)
    notifier.notify('Error')
}

export const useSignInRequest = () => {
    return useMutation(signIn, {
        onError,
        onSuccess: (response: AxiosResponse) => {
            storage.set('user', response.data)
            notifier.notify('SUCCESS SIGN IN')
        }
    })
}

export const useSignUpRequest = () => {
    return useMutation(signUp, {
        onError,
        onSuccess: (response: AxiosResponse) => {
            console.log(response)
            notifier.notify('SUCCESS SIGN UP')
        }
    })
}