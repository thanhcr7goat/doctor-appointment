import React from 'react'
import DoctorCard from '../../components/Doctor/DoctorCard'
import Certificate from '../../components/Certificate/Certificate'
import { doctors } from '../../assets/data/doctors'

const Doctor = () => {
  return (
    <>
      <section className='bg-[#fff9ea]'>
        <div className='container text-center'>
          <h2 className='heading'>Tìm bác sĩ</h2>
          <div className='max-w-[600px] mt-[30px] mx-auto rounded-md flex items-center justify-between bg-white'>
            <input 
              type="search" 
              className='py-4 pl-4 pr-2 bg-transparent w-full focus:outline-none placeholder:text-textColor'
              placeholder='Tìm kiếm bác sĩ' />

            <button className='btn px-4 whitespace-nowrap mt-0 rounded-[0px] rounded-l-md rounded-r-md mr-2'>Tìm kiếm</button>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
            {doctors.map(doctor => (
              <DoctorCard key={doctor.id} doctor={doctor} />
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className='lg:w-[470px] mx-auto'>
            <h2 className='heading text-center'>Khách hàng nói gì về chúng tôi</h2>
            <p className='text__para text-center'>
              Chúng tôi luôn tự hào khi nhận được những phản hồi tích cực từ khách hàng về chất lượng dịch vụ, sự tận tâm của đội ngũ y bác sĩ và trải nghiệm chăm sóc toàn diện. Sự tin tưởng và hài lòng của khách hàng chính là động lực để chúng tôi không ngừng nâng cao chất lượng và mang đến những giá trị tốt nhất.
            </p>
          </div>

          <Certificate />
        </div>
      </section>
    </>
  )
}

export default Doctor