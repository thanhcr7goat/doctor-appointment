import React from 'react'

import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import patientAvatar from '../../assets/images/patient-avatar.png'
import { HiStar } from 'react-icons/hi'

const Certificate = () => {
  return (
    <div className='mt-[30px] lg:mt-[55px]'>
      <Swiper modules={[Pagination]} spaceBetween={30} slidesPerView={1} pagination={{clickable:true}} breakpoints={{
        640: {
          slidesPerView: 1,
          spaceBetween: 0
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 30
        }
      }}>
        <SwiperSlide>
          <div className='py-[30px] px-5 rounded-3xl'>
            <div className='flex items-center gap-[13px]'>
              <img src={patientAvatar} alt="" />
              <div>
                <h4 className='text-[18px] leading-[30px] font-semibold text-headingColor'>
                  Võ Xuân Thành
                </h4>

                <div className='flex items-center gap-[2px]'>
                  <HiStar className='w-[18px] h-5 text-yellowColor' />
                  <HiStar className='w-[18px] h-5 text-yellowColor' />
                  <HiStar className='w-[18px] h-5 text-yellowColor' />
                  <HiStar className='w-[18px] h-5 text-yellowColor' />
                  <HiStar className='w-[18px] h-5 text-yellowColor' />
                </div>
              </div>
            </div>

            <p className='text-[16px] leading-7 mt-4 text-textColor font-[400]'>
              Bác sĩ rất tận tâm, giải thích rõ ràng và luôn lắng nghe. Tôi cảm thấy yên tâm và tin tưởng tuyệt đối
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className='py-[30px] px-5 rounded-3xl'>
            <div className='flex items-center gap-[13px]'>
              <img src={patientAvatar} alt="" />
              <div>
                <h4 className='text-[18px] leading-[30px] font-semibold text-headingColor'>
                  Lê Văn A
                </h4>

                <div className='flex items-center gap-[2px]'>
                  <HiStar className='w-[18px] h-5 text-yellowColor' />
                  <HiStar className='w-[18px] h-5 text-yellowColor' />
                  <HiStar className='w-[18px] h-5 text-yellowColor' />
                  <HiStar className='w-[18px] h-5 text-yellowColor' />
                  <HiStar className='w-[18px] h-5 text-yellowColor' />
                </div>
              </div>
            </div>

            <p className='text-[16px] leading-7 mt-4 text-textColor font-[400]'>
              Quy trình đặt lịch nhanh chóng, dịch vụ chuyên nghiệp. Tôi hài lòng từ khâu tiếp nhận đến khi điều trị
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className='py-[30px] px-5 rounded-3xl'>
            <div className='flex items-center gap-[13px]'>
              <img src={patientAvatar} alt="" />
              <div>
                <h4 className='text-[18px] leading-[30px] font-semibold text-headingColor'>
                  Nguyễn Văn B
                </h4>

                <div className='flex items-center gap-[2px]'>
                  <HiStar className='w-[18px] h-5 text-yellowColor' />
                  <HiStar className='w-[18px] h-5 text-yellowColor' />
                  <HiStar className='w-[18px] h-5 text-yellowColor' />
                  <HiStar className='w-[18px] h-5 text-yellowColor' />
                  <HiStar className='w-[18px] h-5 text-yellowColor' />
                </div>
              </div>
            </div>

            <p className='text-[16px] leading-7 mt-4 text-textColor font-[400]'>
              Hệ thống đặt lịch trực tuyến rất tiện lợi, giúp tôi tiết kiệm thời gian và chủ động chọn giờ khám
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Certificate