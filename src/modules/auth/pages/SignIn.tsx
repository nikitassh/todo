import { useSignInRequest } from '../../core/requests/auth'

export const SignIn = () => {
    const sendData = {
        email: 'soshninnikita23@gmail.com',
        password: 'password1'
    }

    const signIn = useSignInRequest()

    const onSubmit = () => {
        signIn.mutate(sendData)
    }

    return (
        <div onClick={onSubmit}>SignIn</div>
    )
}