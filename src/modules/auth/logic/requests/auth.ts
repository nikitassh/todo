import { useTokenStore, useUserStore } from '@auth/logic/store'
import { api } from '@core/logic/api'
import { notifier } from '@core/logic/services/notifier'
import { SIGN_IN, SIGN_UP } from '@core/logic/urls'
import { AxiosError, AxiosResponse } from 'axios'
import { useMutation } from 'react-query'


type SignInProps = { email: string, password: string }
type SignUpProps = SignInProps & { firstName: string, lastName: string }

export const signIn = async (data: SignInProps) => {
    return await api.post(SIGN_IN, data)
}

export const signUp = async (data: SignUpProps) => {
    return await api.post(SIGN_UP, data)
}

export const onError = (error: AxiosError) => {
    console.log(error)
    notifier.notify('Error')
}

export const useSignInRequest = () => {
    const { setUser } = useUserStore()
    const { setToken } = useTokenStore()

    return useMutation(signIn, {
        onError,
        onSuccess: (response: AxiosResponse) => {
            setToken(response.data.token)
            setUser(response.data)
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