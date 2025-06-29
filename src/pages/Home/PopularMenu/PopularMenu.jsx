import { useEffect, useState } from 'react'
import SectionTitle from '../../../components/sectionTitle/SectionTitle'
import MenuItem from '../../Shared/MenuItem/MenuItem'

const PopularMenu = () => {
    const [data, setData] = useState([])
    console.log('🚀 ~ PopularMenu ~ data:', data)
    useEffect(() => {
        fetch('menu.json')
            .then((res) => res.json())
            .then((data) => {
                const filterData = data.filter(
                    (item) => item.category === 'popular'
                )

                setData(filterData)
            })
    }, [])
    return (
        <section className='mb-12'>
            <SectionTitle
                heading="From Our Meu"
                subHeading="Popular Items"
            ></SectionTitle>

            <div className='grid md:grid-cols-2 gap-4'>
                {data.map((item) => (
                    <MenuItem key={item._id} item={item}></MenuItem>
                ))}
            </div>
        </section>
    )
}

export default PopularMenu
