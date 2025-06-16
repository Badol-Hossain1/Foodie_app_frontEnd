import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination } from 'swiper/modules'
import slide1 from '/home/slide1.jpg'
import slide2 from '/home/slide2.jpg'
import slide3 from '/home/slide3.jpg'
import slide4 from '/home/slide4.jpg'
import slide5 from '/home/slide5.jpg'
const Category = () => {
    return (
        <div className=" mb-24 ">
            <span
                className="text-center mb-4 w-full block text-yellow-300
                "
            >
                ---From 11:00am to 10:00pm---
            </span>
            <div className="flex mb-10 justify-center">
                <h1 className="md:text-4xl text-xl inline p-6 border-t-2 border-b-2 text-center ">
                    ORDER ONLINE
                </h1>
            </div>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide className=" ">
                    <img src={slide1} className="relative  w-full" alt="" />
                    <h3 className="md:text-4xl text-xl left-1/2 transform -translate-x-1/2 absolute bottom-0  ">
                        Salads
                    </h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide2} className=" w-full" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide3} className=" w-full" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide4} className=" w-full" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide5} className=" w-full" alt="" />
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Category
