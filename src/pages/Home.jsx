import React from 'react'

import heroImg01 from '../assets/images/hero-img01.png'
import heroImg02 from '../assets/images/hero-img02.png'
import heroImg03 from '../assets/images/hero-img03.png'

import icon01 from '../assets/images/icon01.png'
import icon02 from '../assets/images/icon02.png'
import icon03 from '../assets/images/icon03.png'

import featureImg from '../assets/images/feature-img.png'

import faqImg from '../assets/images/faq-img.png'

import { Link } from 'react-router-dom'
import { BsArrowRight } from "react-icons/bs"
import About from '../components/About/About'
import ServiceList from '../components/Service/ServiceList'
import DoctorList from '../components/Doctor/DoctorList'
import FaqList from '../components/Faq/FaqList'
import Certificate from '../components/Certificate/Certificate'

const Home = () => {
  return (
    <>
    {/* Section */}
      <section className='hero__section pt-[60px] 2xl:h-[800px]'>
        <div className="container">
          <div className='flex items-center justify-between flex-col lg:flex-row gap-[90px]'>
            {/* Content */}
            <div>
              <div className='lg:w-[570px]'>
                <h1 className='text-[36px] leading-[46px] text-headingColor font-[800] md:text[60px] md:leading-[70px]'>
                  Chúng tôi luôn giúp mọi người sống khoẻ và tốt hơn
                </h1>

                <p className='text__para'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio repellendus quidem eveniet maxime omnis assumenda ipsa asperiores vitae, ipsam repellat consectetur molestias necessitatibus et, cupiditate deserunt. Placeat atque perspiciatis quas.
                </p>

                <button className='btn'>Đặt lịch khám</button>
              </div>

              {/* Counter */}
              <div className='mt-[30px] lg:mt[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]'>
                <div>
                  <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor'>
                    10+
                  </h2>
                  <span className='w-[100px] h-2 bg-yellowColor rounded-full block mt-[-14px]'></span>
                  <p className='text__para'>Năm kinh nghiệm</p>
                </div>

                <div>
                  <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor'>
                    5+
                  </h2>
                  <span className='w-[100px] h-2 bg-purpleColor rounded-full block mt-[-14px]'></span>
                  <p className='text__para'>Cơ sở toàn quốc</p>
                </div>

                <div>
                  <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor'>
                    100%
                  </h2>
                  <span className='w-[100px] h-2 bg-irisBlueColor rounded-full block mt-[-14px]'></span>
                  <p className='text__para'>Sự hài lòng của khách hàng</p>
                </div>
              </div>
              {/* End Counter */}
            </div>
            {/* End Content */}
            <div className='flex gap-[30px] justify-end'>
              <div>
                <img src={heroImg01} alt="Hero-01" className='w-full' />
              </div>
              <div className='mt-[30px]'>
                <img src={heroImg02} alt="Hero-02" className='w-full mb-[30px]' />
                <img src={heroImg03} alt="Hero-03" className='w-full' />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Section */}

      <section>
        <div className='container'>
          <div className='lg:w-[470px] mx-auto'>
            <h2 className='heading text-center'>Cung cấp những dịch vụ tốt nhất</h2>
            <p className='text__para text-center'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non eaque molestiae doloremque eius pariatur reiciendis quas excepturi provident quisquam omnis similique inventore delectus at dolore earum hic, nostrum corrupti voluptate!
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]'>
            <div className='py-[30px] px-5'>
              <div className='flex items-center justify-center'>
                <img src={icon01} alt="Icon-01" />
              </div>

              <div className='mt-[30px]'>
                <h2 className='text-[26px] leading-9 text-headingColor font-[700] text-center'>
                  Tìm bác sĩ
                </h2>

                <p className='text-[16px] leading-7 text-textColor font-[400] mt-4 text-center'>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum, accusamus debitis. Mollitia deleniti, officiis ipsum harum cum impedit tenetur perferendis nam natus minus porro debitis inventore repellat dignissimos quam nulla!
                </p>

                <Link to='/doctor' className='w-[44px] h-[44px] rounded-full border-2 border-solid border-[#aeb0b5] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none' >
                  <BsArrowRight className='group-hover:text-white w-6 h-5' />
                </Link>
              </div>
            </div>

            <div className='py-[30px] px-5'>
              <div className='flex items-center justify-center'>
                <img src={icon02} alt="Icon-02" />
              </div>

              <div className='mt-[30px]'>
                <h2 className='text-[26px] leading-9 text-headingColor font-[700] text-center'>
                  Tìm địa điểm
                </h2>

                <p className='text-[16px] leading-7 text-textColor font-[400] mt-4 text-center'>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum, accusamus debitis. Mollitia deleniti, officiis ipsum harum cum impedit tenetur perferendis nam natus minus porro debitis inventore repellat dignissimos quam nulla!
                </p>

                <Link to='/doctor' className='w-[44px] h-[44px] rounded-full border-2 border-solid border-[#aeb0b5] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none' >
                  <BsArrowRight className='group-hover:text-white w-6 h-5' />
                </Link>
              </div>
            </div>

            <div className='py-[30px] px-5'>
              <div className='flex items-center justify-center'>
                <img src={icon03} alt="Icon-03" />
              </div>

              <div className='mt-[30px]'>
                <h2 className='text-[26px] leading-9 text-headingColor font-[700] text-center'>
                  Đặt lịch khám
                </h2>

                <p className='text-[16px] leading-7 text-textColor font-[400] mt-4 text-center'>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum, accusamus debitis. Mollitia deleniti, officiis ipsum harum cum impedit tenetur perferendis nam natus minus porro debitis inventore repellat dignissimos quam nulla!
                </p>

                <Link to='/doctor' className='w-[44px] h-[44px] rounded-full border-2 border-solid border-[#aeb0b5] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none' >
                  <BsArrowRight className='group-hover:text-white w-6 h-5' />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <About />
      {/* End About */}

      {/* Services section */}
      <section>
        <div className='container'>
          <div className='xl:w-[470px] mx-auto'>
            <h2 className='heading text-center'>
              Các dịch vụ y tế của chúng tôi
            </h2>
            <p className='text__para text-center'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde dolores rem in iure tempore facilis ex delectus adipisci officia soluta similique harum quia nesciunt velit non totam animi, sunt laboriosam?
            </p>
          </div>
          
          <ServiceList />
        </div>
      </section>
      {/* End Services section */}

      {/* Feature section */}
      <section>
        <div className="container">
          <div className='flex items-center justify-between flex-col lg:flex-row'>
            {/* Feature content */}
            <div className='xl:w-[670px]'>
              <h2 className='heading'>
                Hỗ trợ y tế nhanh chóng - mọi lúc, mọi nơi
              </h2>

              <ul className='pl-4'>
                <li className='text__para'>
                  1. Đặt lịch hẹn khám trực tuyến chỉ với vài bước đơn giản
                </li>
                <li className='text__para'>
                  2. Tìm kiếm và lựa chọn bác sĩ phù hợp dựa trên chuyên khoa và đánh giá
                </li>
                <li className='text__para'>
                  3. Xem danh sách bác sĩ đang nhận bệnh nhân mới và chọn khung giờ khám qua hệ thống đặt lịch online
                </li>
              </ul>
              <Link to='/'>
                <button className='btn'>Tìm hiểu thêm</button>
              </Link>
            </div>
            {/* End Feature content */}

            {/* Feature img */}
            <div className='relative z-10 xl:w-[770px] flex justify-end mt-[50px] lg:mt-0'>
              <img src={featureImg} alt="Feature image" className='w-3/4' />
            </div>
            {/* End Feature img */}
          </div>
        </div>
      </section>
      {/* End Feature section */}
      {/* Our great doctors */}
      <section>
        <div className='container'>
          <div className='lg:w-[470px] mx-auto'>
            <h2 className='heading text-center'>Những bác sĩ tốt nhất của chúng tôi</h2>
            <p className='text__para text-center'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non eaque molestiae doloremque eius pariatur reiciendis quas excepturi provident quisquam omnis similique inventore delectus at dolore earum hic, nostrum corrupti voluptate!
            </p>
          </div>

          <DoctorList />
        </div>
      </section>
      {/* End Our great doctors */}

      {/* FAQ section */}
      <section>
        <div className="container">
          <div className='flex justify-between gap-[50px] lg:gap-0'>
            <div className='w-1/2 hidden md:block'>
              <img src={faqImg} alt="" />
            </div>

            <div className='w-full md:w-1/2'>
              <h2 className='heading'>
                Các câu hỏi thường gặp
              </h2>

              <FaqList />
            </div>
          </div>
        </div>
      </section>
      {/* End FAQ section */}

      {/* Certificate section */}
      <section>
        <div className="container">
          <div className='lg:w-[470px] mx-auto'>
            <h2 className='heading text-center'>Khách hàng nói gì về chúng tôi</h2>
            <p className='text__para text-center'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non eaque molestiae doloremque eius pariatur reiciendis quas excepturi provident quisquam omnis similique inventore delectus at dolore earum hic, nostrum corrupti voluptate!
            </p>
          </div>

          <Certificate />
        </div>
      </section>
      {/* End Certificate section */}
    </>
  )
}

export default Home