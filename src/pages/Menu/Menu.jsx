import { Helmet, HelmetProvider } from 'react-helmet-async'
import Cover from '../Shared/Cover/Cover'
import MenuIcon from '/menu/banner3.jpg'
import Dessert from '/menu/dessert-bg.jpeg'
import Menus from '/menu/menu-bg.png'
import Pizza from '/menu/pizza-bg.jpg'
import Salad from '/menu/salad-bg.jpg'
import Soup from '/menu/soup-bg.jpg'

import useMenu from '../../hooks/useMenu'
import SectionTitle from '../../components/sectionTitle/SectionTitle'
import MenuCategory from '../menuCategory/MenuCategory'

const Menu = () => {
    const [menu] = useMenu()
    const desserts = menu.filter((item) => item.category === 'dessert')
    const pizzas = menu.filter((item) => item.category === 'pizza')
    const salads = menu.filter((item) => item.category === 'salad')
    const soups = menu.filter((item) => item.category === 'soup')
    const offereds = menu.filter((item) => item.category === 'offered')
    return (
        <div>
            <Helmet>
                <title>hello world</title>
            </Helmet>
            <Cover title="OUR MENU" img={MenuIcon} />

            <SectionTitle subHeading='Don"t Miss' heading='Today"s offer' />

            <MenuCategory title="Foods" img={MenuIcon} items={offereds} />

            <MenuCategory title="Dessert" img={Dessert} items={desserts} />

            <MenuCategory title="Salad" img={Salad} items={salads} />
            <MenuCategory title="Pizza " img={Pizza} items={pizzas} />
            <MenuCategory title="Soup" img={Soup} items={soups} />
        </div>
    )
}

export default Menu
