import { Helmet, HelmetProvider } from 'react-helmet-async'
import Cover from '../Shared/Cover/Cover'
import MenuIcon from '/menu/banner3.jpg'
import PopularMenu from '../Home/PopularMenu/PopularMenu'

const Menu = () => {
    return (
        <div>
            <Helmet>
                <title>hello world</title>
            </Helmet>
            <Cover title="OUR MENU" img={MenuIcon} />
            <PopularMenu />
            <Cover title="OUR MENU" img={MenuIcon} />
            <PopularMenu />
            <Cover title="OUR MENU" img={MenuIcon} />
            <PopularMenu />
            <Cover title="OUR MENU" img={MenuIcon} />
        </div>
    )
}

export default Menu
