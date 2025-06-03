import { createBrowserRouter } from 'react-router'
import MainLayout from '../layout/mainLayout'
import Home from '../pages/Home/Home'

let router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
        ],
    },
])
export default router
