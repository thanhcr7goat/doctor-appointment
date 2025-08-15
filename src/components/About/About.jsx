import React from 'react'

import aboutImg from '../../assets/images/about.png'
import aboutCardImg from '../../assets/images/about-card.png'

import { Link } from 'react-router-dom'

const About = () => {
  return (
    <section>
      <div className='container'>
        <div className='flex justify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row'>
          {/* About img */}
          <div className='relative w-3/4 lg:w-1/2 xl:w-[770px] z-10 order-1 lg:order-1'>
            <img src={aboutImg} alt="About image" />
          </div>
          {/* End About img */}

          {/* About content */}
          <div className='w-full lg:w-1/2 xl:w-[670px] order-2 lg:order-2'>
            <h2 className='heading'>Tự hào là một trong số những bác sĩ xuất sắc nhất</h2>
            <p className='text__para'>
              Với nhiều năm kinh nghiệm và trình độ chuyên môn vững vàng, chúng tôi luôn tận tâm mang đến dịch vụ chăm sóc sức khỏe tốt nhất cho từng bệnh nhân. Chất lượng điều trị, thái độ phục vụ và sự tận tụy của đội ngũ bác sĩ chính là niềm tự hào lớn nhất của chúng tôi.
            </p>

            <p className='text__para mt-[30px]'>
              Chúng tôi cam kết không ngừng học hỏi, nâng cao kỹ năng và áp dụng công nghệ y tế tiên tiến để mang lại hiệu quả khám chữa bệnh tối ưu. Sự hài lòng, tin tưởng và sức khỏe của bệnh nhân luôn là mục tiêu hàng đầu mà chúng tôi hướng tới mỗi ngày.
            </p>

            <Link to='/'>
              <button className='btn'>Tìm hiểu thêm</button>
            </Link>
          </div>
          {/* End About content */}
        </div>
      </div>
    </section>
  )
}

export default About