import { Outlet } from 'react-router'
import Footer from '../pages/Shared/Footer/Footer'
import Navbar from '../pages/Shared/Navbar/Navbar'

const MainLayout = () => {
    return (
        <div className='w-full'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    )
}

export default MainLayout
