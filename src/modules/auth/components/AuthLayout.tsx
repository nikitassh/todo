import { Navigate, Outlet, useLocation } from 'react-router-dom'

export const AuthLayout = () => {
    const auth = false
    const location = useLocation()


    if (auth) {
        return <Navigate to="/dashboard/todo-list" state={{ from: location }} replace/>
    }

    return (
        <div>
            AUTHENTICATION
            <Outlet/>
        </div>
    )
}