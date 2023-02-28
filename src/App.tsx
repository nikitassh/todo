import 'react-toastify/dist/ReactToastify.css'

import { QueryClient, QueryClientProvider } from 'react-query'
import { Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

import { HomeLayout } from './components/layouts/HomeLayout'
import { ProtectedLayout } from './components/layouts/ProtectedLayout'
import { AuthLayout } from './modules/auth/components/AuthLayout'
import { SignIn } from './pages/auth/SignIn'
import { SignUp } from './pages/auth/SignUp'
import { TodoList } from './pages/dashboard/TodoList'
import { Home } from './pages/Home'
import { NoMatch } from './pages/NoMatch'

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
