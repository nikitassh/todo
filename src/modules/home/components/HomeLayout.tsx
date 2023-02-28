import { Outlet } from 'react-router-dom'

import { CustomLink } from '../../core/components/CustomLink'


export const HomeLayout = () => {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <CustomLink to="/">Home</CustomLink>
                    </li>
                    <li>
                        <CustomLink to="/dashboard/todo-list">Todo list</CustomLink>
                    </li>
                </ul>
            </nav>

            <hr/>

            <Outlet/>
        </div>
    )
}