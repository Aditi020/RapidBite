import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import '../../styles/Testimonial.css';

export default function Testimonial() {
    return (
        <>
            <Swiper
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 3000 // Adjusted delay to 3 seconds
                }}
                modules={[Pagination, Autoplay]}
                className="mySwiper"
            >
                <SwiperSlide className='testimonial_slider_card'>
                    <div className='customer_feedback'>
                        <p>
                            &quot; RapidBite is a game-changer! The delivery was super fast, and the food was piping hot. Highly recommended! &quot;
                        </p>
                    </div>
                    <div className='customer_detail'>
                        <div className='customer_profile_picture'>
                            <img src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Customer Image" 
                                />
                        </div>
                        <div className='customer_name'>Samantha Green</div>
                    </div>
                </SwiperSlide>

                <SwiperSlide className='testimonial_slider_card'>
                    <div className='customer_feedback'>
                        <p>
                            &quot; I love how easy it is to order with RapidBite. The variety of choices is fantastic, and the quality never disappoints! &quot;
                        </p>
                    </div>
                    <div className='customer_detail'>
                        <div className='customer_profile_picture'>
                            <img src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Customer Image" />
                        </div>
                        <div className='customer_name'>Michael Lee</div>
                    </div>
                </SwiperSlide>

                <SwiperSlide className='testimonial_slider_card'>
                    <div className='customer_feedback'>
                        <p>
                            &quot; Excellent service and delicious meals! RapidBite never fails to deliver on time. It’s my go-to choice for food delivery. &quot;
                        </p>
                    </div>
                    <div className='customer_detail'>
                        <div className='customer_profile_picture'>
                            <img src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Customer Image" />
                        </div>
                        <div className='customer_name'>Daniel Johnson</div>
                    </div>
                </SwiperSlide>

                <SwiperSlide className='testimonial_slider_card'>
                    <div className='customer_feedback'>
                        <p>
                            &quot; What an amazing experience! The app is user-friendly, and the food arrived quicker than expected. Definitely using RapidBite again! &quot;
                        </p>
                    </div>
                    <div className='customer_detail'>
                        <div className='customer_profile_picture'>
                            <img src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Customer Image" />
                        </div>
                        <div className='customer_name'>Emily White</div>
                    </div>
                </SwiperSlide>

                <SwiperSlide className='testimonial_slider_card'>
                    <div className='customer_feedback'>
                        <p>
                            &quot; RapidBite made my life so much easier. No more waiting in lines. The food tastes amazing, and it’s super convenient! &quot;
                        </p>
                    </div>
                    <div className='customer_detail'>
                        <div className='customer_profile_picture'>
                            <img src="https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Customer Image"  
                            />
                        </div>
                        <div className='customer_name'>Olivia Brown</div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
}
