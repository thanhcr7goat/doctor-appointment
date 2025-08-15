import React from 'react'

const DoctorAbout = () => {
  return (
    <div>
      <div>
        <h3 className='text-[20px] leading-[30px] text-headingColor font-semibold flex items-center gap-2'>
          Thông tin về
          <span className='text-irisBlueColor font-bold text-[24px] leading-9'>
            Lê Văn B
          </span>
        </h3>
        <p className='text__para'>
          Bác sĩ Lê Văn B là chuyên gia đầu ngành trong lĩnh vực thần kinh, với hơn 12 năm kinh nghiệm trong khám và điều trị các bệnh lý liên quan đến hệ thần kinh trung ương. Bác sĩ được đánh giá cao nhờ kiến thức chuyên môn vững vàng, tác phong tận tâm cũng như khả năng giao tiếp thân thiện với bệnh nhân.
        </p>
      </div>

      <div className='mt-12'>
        <h3 className='text-[20px] leading-[30px] text-headingColor font-semibold'>
          Học vấn
        </h3>

        <ul className='pt-4 md:p-5'>
          <li className='flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]'>
            <div>
              <span className='text-[15px] leading-6 font-semibold'>
                2010 - 2016
              </span>
              <p className='text-[16px] leading-6 font-medium text-textColor'>
                Tốt nghiệp Bác sĩ Đa khoa - Đại học Y Dược Huế
              </p>
            </div>

            <p className='text-[14px] leading-5 font-medium text-textColor'></p>
          </li>
          <li className='flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]'>
            <div>
              <span className='text-[15px] leading-6 font-semibold'>
                2017 - 2019
              </span>
              <p className='text-[16px] leading-6 font-medium text-textColor'>
                Hoàn thành chương trình Chuyên khoa I - Thần kinh học tại Đại học Y Hà Nội
              </p>
            </div>

            <p className='text-[14px] leading-5 font-medium text-textColor'></p>
          </li>
        </ul>
        <h3 className='text-[20px] leading-[30px] text-headingColor font-semibold'>
          Kinh nghiệm
        </h3>

        <ul className='pt-4 md:p-5'>
          <li className='flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]'>
            <div>
              <span className='text-[15px] leading-6 font-semibold'>
                2019 - 2021
              </span>
              <p className='text-[16px] leading-6 font-medium text-textColor'>
                Bác sĩ điều trị tại Khoa Thần kinh - Bệnh viện Trung Ương Huế
              </p>
            </div>

            <p className='text-[14px] leading-5 font-medium text-textColor'></p>
          </li>
          <li className='flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]'>
            <div>
              <span className='text-[15px] leading-6 font-semibold'>
                2021 - nay
              </span>
              <p className='text-[16px] leading-6 font-medium text-textColor'>
                Bác sĩ chuyên khoa Thần kinh tại Bệnh viện Đa khoa Quốc tế Vinmec
              </p>
            </div>

            <p className='text-[14px] leading-5 font-medium text-textColor'></p>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default DoctorAbout