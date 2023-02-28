import { Navigate, Outlet, useLocation } from 'react-router-dom'


export const ProtectedLayout = () => {
    const auth = false
    const location = useLocation()

    if (!auth) {
        return <Navigate to="/auth/sign-in" state={{ from: location }} replace/>

    }

    return (
        <div>
            APP BAR HERE
            <Outlet/>
        </div>
    )
}