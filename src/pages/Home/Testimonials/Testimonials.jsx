import SectionTitle from '../../../components/sectionTitle/SectionTitle'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'
import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation } from 'swiper/modules'
import { useEffect, useState } from 'react'

const Testimonials = () => {
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch('reviews.json')
            .then((res) => res.json())
            .then((data) => setReviews(data))
    }, [])
    console.log('🚀 ~ Testimonials ~ reviews:', reviews)
    return (
        <div className='mb-10 mt-10'>
            <SectionTitle
                subHeading="What Our Client Say"
                heading="Testimonials"
            />

       

            <Swiper
                navigation={true}
                modules={[Navigation]}
                className="mySwiper"
            >
                {reviews.map((review) => (
                    <SwiperSlide key={review._id}>

                             <div className="flex justify-center">
                <Rating
                    className=""
                    style={{ maxWidth: 180 }}
                    value={review.rating}
                    readOnly
                />
            </div>
                        <div className="m-24">
                            <h3 className="text-2xl text-center text-orange-300">
                                {review.name}
                            </h3>
                            <p className="text-center">{review.details}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default Testimonials
