import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination } from 'swiper/modules'
import slide1 from '/home/slide1.jpg'
import slide2 from '/home/slide2.jpg'
import slide3 from '/home/slide3.jpg'
import slide4 from '/home/slide4.jpg'
import slide5 from '/home/slide5.jpg'
import SectionTitle from '../../../components/sectionTitle/SectionTitle'
const Category = () => {
    return (
        <div className=" mb-24 ">
            <SectionTitle
                heading={' ---From 11:00am to 10:00pm---'}
                subHeading={'    ORDER ONLINE'}
            ></SectionTitle>
            <Swiper
                slidesPerView={4}
                spaceBetween={20}
                centeredSlides={false}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide className=" ">
                    <img src={slide1} className="relative " alt="" />
                    <h3 className="md:text-4xl text-xl absolute bottom-0  ">
                        Salads
                    </h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide2}  alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide3}  alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide4}  alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide5}  alt="" />
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Category
