import React, { useState } from 'react'
import avatar from '../../assets/images/avatar-icon.png'
import { AiFillStar } from 'react-icons/ai'
import FeedbackForm from './FeedbackForm'

const Feedback = () => {
  const [showFeedbackForm, setShowFeedbackForm]= useState(false)

  return (
    <div>
      <div className='mb-[50px]'>
        <h4 className='text-[20px] leading-[30px] font-bold text-headingColor mb-[30px]'>
          Tất cả nhận xét (272)
        </h4>

        <div className='flex justify-between gap-10 mb-[30px]'>
          <div className='flex gap-3'>
            <figure className='w-10 h-10 rounded-full'>
              <img src={avatar} alt="" className='w-full' />
            </figure>

            <div>
              <h5 className='text-[16px] leading-6 text-primaryColor font-bold'>
                Nguyễn Văn B
              </h5>
              <p className='text-[14px] leading-5 mt-2 text-textColor'>
                16-08-2025
              </p>
              <p className='text__para mt-2 font-medium text-[15px]'>
                Bác sĩ làm việc rất tận tâm và chuyên nghiệp. Quy trình thăm khám diễn ra nhanh gọn, giải thích rõ ràng nên mình cảm thấy rất yên tâm trong quá trình điều trị.
              </p>
            </div>
          </div>

          <div className='flex gap-1'>
            <AiFillStar color='#0067ff'/>
            <AiFillStar color='#0067ff'/>
            <AiFillStar color='#0067ff'/>
            <AiFillStar color='#0067ff'/>
            <AiFillStar color='#0067ff'/>
          </div>
        </div>
      </div>

      {!showFeedbackForm && (
        <div className='text-center'>
          <button className='btn' onClick={() => setShowFeedbackForm(true)}>
            Viết nhận xét
          </button>
        </div>
      )}

      {showFeedbackForm && <FeedbackForm />}
    </div>
  )
}

export default Feedback