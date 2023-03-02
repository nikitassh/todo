import { useSignInRequest } from '@auth/logic/requests/auth'
import { useUserStore } from '@auth/logic/store'

export const SignIn = () => {
    const sendData = {
        email: 'soshninnikita23@gmail.com',
        password: 'password'
    }

    const signIn = useSignInRequest()
    const test = useUserStore()
    console.log(test)

    const onSubmit = () => {
        signIn.mutate(sendData)
    }

    return (
        <div>
            <div onClick={onSubmit}>SignIn</div>
            <div></div>
        </div>

    )
}