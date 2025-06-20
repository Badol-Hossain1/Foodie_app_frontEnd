import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { RouterProvider } from 'react-router'
import router from './routes/routers.jsx'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <div className="max-w-screen mx-auto">
            <RouterProvider router={router} />
        </div>
    </StrictMode>
)
