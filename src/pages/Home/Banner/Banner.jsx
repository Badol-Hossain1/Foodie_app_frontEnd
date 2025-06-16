import 'react-responsive-carousel/lib/styles/carousel.min.css'

import { Carousel } from 'react-responsive-carousel'
import logo1 from '/home/01.jpg'
import logo2 from '/home/02.jpg'
import logo3 from '/home/03.png'
import logo4 from '/home/04.jpg'
import logo5 from '/home/05.png'
import logo6 from '/home/06.png'

const Banner = () => {
    return (
        <div className="w-full">
            <Carousel>
                <div>
                    <img src={logo1} alt="1" />
                </div>
                <div>
                    <img src={logo2} alt="2" />
                </div>
                <div>
                    <img src={logo3} alt="3" />
                </div>
                <div>
                    <img src={logo4} alt="4" />
                </div>
                <div>
                    <img src={logo5} alt="5" />
                </div>
                <div>
                    <img src={logo6} alt="6" />
                </div>
            </Carousel>
        </div>
    )
}

export default Banner
