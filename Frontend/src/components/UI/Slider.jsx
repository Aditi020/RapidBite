import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import '../../styles/Slider.css';

export default function TestimonialSlider() {
    return (
        <>
            <Swiper
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}

                autoplay={{
                    delay: 2000
                }}

                modules={[Pagination, Autoplay]}
                className="mySwiper">
                <SwiperSlide className='testimonial_slider_card'>

                    <div className='customer_feedback'>
                        <p >
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
                            atque, quam minus totam maiores laborum! Impedit consectetur illum
                            aliquid odit. Odit dolore ipsum quod debitis nostrum necessitatibus
                            quis dolorem quas!
                        </p>
                        </div>
                    <div className='customer_detail'>

                        <div className='customer_profile_picture'>
                            <img src="https://images.pexels.com/photos/1561020/pexels-photo-1561020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                        </div>

                        <div className='customer_profile_picture'> <span className='customer_name'></span>Evil Wikie</div>

                    </div>

                </SwiperSlide>

                <SwiperSlide className='testimonial_slider_card'>

                    <div className='customer_feedback'>
                        <p >
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
                            atque, quam minus totam maiores laborum! Impedit consectetur illum
                            aliquid odit. Odit dolore ipsum quod debitis nostrum necessitatibus
                            quis dolorem quas!
                        </p>
                    </div>

                    <div className='customer_detail'>

                        <div className='customer_profile_picture'>
                            <img src="https://images.pexels.com/photos/1561020/pexels-photo-1561020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                        </div>

                        <div className='customer_profile_picture'> <span className='customer_name'></span>Deepansh Srivastav</div>

                    </div>

                </SwiperSlide>

                <SwiperSlide className='testimonial_slider_card'>

                    <div className='customer_feedback'>
                        <p >
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
                            atque, quam minus totam maiores laborum! Impedit consectetur illum
                            aliquid odit. Odit dolore ipsum quod debitis nostrum necessitatibus
                            quis dolorem quas!
                        </p>
                    </div>

                    <div className='customer_detail'>

                        <div className='customer_profile_picture'>
                            <img src="https://images.pexels.com/photos/1561020/pexels-photo-1561020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                        </div>

                        <div className='customer_profile_picture'> <span className='customer_name'></span>Evil Wikie</div>

                    </div>

                </SwiperSlide>

                <SwiperSlide className='testimonial_slider_card'>

                    <div className='customer_feedback'>
                        <p >
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
                            atque, quam minus totam maiores laborum! Impedit consectetur illum
                            aliquid odit. Odit dolore ipsum quod debitis nostrum necessitatibus
                            quis dolorem quas!
                        </p>
                    </div>

                    <div className='customer_detail'>

                        <div className='customer_profile_picture'>
                            <img src="https://images.pexels.com/photos/1561020/pexels-photo-1561020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                        </div>

                        <div className='customer_profile_picture'> <span className='customer_name'></span>Deepansh Srivastav</div>

                    </div>

                </SwiperSlide>



            </Swiper>
        </>
    );
}
