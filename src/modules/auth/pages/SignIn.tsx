import { useSignInRequest } from '../logic/requests/auth'

export const SignIn = () => {
    const sendData = {
        email: 'soshninnikita23@gmail.com',
        password: 'password'
    }

    const signIn = useSignInRequest()

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