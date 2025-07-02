import { createBrowserRouter } from 'react-router'
import MainLayout from '../layout/mainLayout'
import Home from '../pages/Home/Home'
import Menu from '../pages/Menu/Menu'

let router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
              {
                path: '/menu',
                element: <Menu />,
            },
        ],
    },
])
export default router
