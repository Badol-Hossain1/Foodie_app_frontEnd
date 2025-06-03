import { useState } from 'react'
import { Link } from 'react-router'
import logo from '/logo.png'
import menu from '/menu.svg'
import close from '/close.svg'

const Navbar = () => {
    const [open, setOpen] = useState(false)
    console.log('🚀 ~ Navbar ~ open:', open)

    const navItems = [
        {
            id: 1,
            name: 'Home',
            path: '/',
        },
        {
            id: 2,
            name: 'CONTACT US',
            path: '/contact',
        },
        {
            id: 3,
            name: 'DASHBOARD',
            path: '/dashboard',
        },
        {
            id: 4,
            name: 'Our Menu',
            path: '/menu',
        },
        {
            id: 5,
            name: 'Our Shop',
            path: '/shop',
        },
    ]

    return (
        <div className="md:opacity-60 opacity-90 bg-black text-white w-full z-10 fixed">
            <nav className="grid   grid-cols-3  items-center  px-4 py-2">
                <div className="col-span-1">
                    <img className="w-10" src={logo} alt="" srcset="" />
                </div>

                <ul
                    className={`${
                        open
                            ? 'absolute flex w-full items-center top-20 gap-4 left-0 pt-6 pb-6 transition-all duration-300 ease-in-out bg-white text-black flex-col md:hidden'
                            : 'hidden col-span-2  md:flex md:gap-4 uppercase items-center justify-end'
                    }`}
                >
                    {navItems.map((item) => {
                        return <Link to={item.path}>{item.name}</Link>
                    })}
                </ul>

                <div className=" flex col-span-2 justify-end">
                    <img
                        onClick={() => setOpen(!open)}
                        className="bg-white items-end  md:hidden  w-6 block"
                        src={open ? close : menu}
                        alt=""
                    />
                </div>
            </nav>
        </div>
    )
}

export default Navbar
