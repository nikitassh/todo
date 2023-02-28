import 'react-toastify/dist/ReactToastify.css'

import { AuthLayout } from '@auth/components/AuthLayout'
import { SignIn } from '@auth/pages/SignIn'
import { SignUp } from '@auth/pages/SignUp'
import { NoMatch } from '@core/pages/NoMatch'
import { HomeLayout } from '@home/components/HomeLayout'
import { Home } from '@home/pages/Home'
import { ProtectedLayout } from '@todo/ProtectedLayout'
import { TodoList } from '@todo/TodoList'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'


const queryClient = new QueryClient()

export const App = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <Routes>
                <Route element={<HomeLayout/>}>
                    <Route index element={<Home/>}/>


                    <Route path="*" element={<NoMatch/>}/>
                </Route>

                {/* Authentication */}
                <Route path="/auth" element={<AuthLayout/>}>
                    <Route index path="sign-in" element={<SignIn/>}/>
                    <Route path="sign-up" element={<SignUp/>}/>
                </Route>

                {/* Requires authentication */}
                <Route path="/dashboard" element={<ProtectedLayout/>}>
                    <Route index path="todo-list" element={<TodoList/>}/>
                </Route>
            </Routes>

            <ToastContainer/>
        </QueryClientProvider>
    )
}
