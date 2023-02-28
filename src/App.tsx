import 'react-toastify/dist/ReactToastify.css'

import { QueryClient, QueryClientProvider } from 'react-query'
import { Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

import { AuthLayout } from './modules/auth/components/AuthLayout'
import { SignIn } from './modules/auth/pages/SignIn'
import { SignUp } from './modules/auth/pages/SignUp'
import { NoMatch } from './modules/core/pages/NoMatch'
import { HomeLayout } from './modules/home/components/HomeLayout'
import { Home } from './modules/home/pages/Home'
import { ProtectedLayout } from './modules/todo/ProtectedLayout'
import { TodoList } from './modules/todo/TodoList'

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
