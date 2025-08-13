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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, accusantium libero. Eligendi ad laudantium expedita dolore molestiae voluptatem a officia vel totam? Placeat dolores fuga distinctio doloremque quia asperiores numquam!
            </p>

            <p className='text__para mt-[30px]'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam repellat minima qui iure quis, culpa unde obcaecati assumenda sunt mollitia ipsa, nemo porro fugit ratione doloribus reprehenderit, hic provident quas!
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