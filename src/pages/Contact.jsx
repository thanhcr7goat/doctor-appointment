import React from 'react'

const Contact = () => {
  return (
    <section>
      <div className='px-4 mx-auto max-w-screen-md'>
        <h2 className='heading text-center'>
          Liên hệ với chúng tôi
        </h2>
        <p className='mb-8 lg:mb-16 font-light text-center text__para'>
          Chúng tôi luôn sẵn sàng lắng nghe và hỗ trợ bạn. Nếu bạn có bất kỳ câu hỏi nào về dịch vụ, cần tư vấn hoặc góp ý để cải thiện trải nghiệm, vui lòng liên hệ với chúng tôi qua biểu mẫu bên dưới hoặc các kênh thông tin được cung cấp. Đội ngũ của chúng tôi sẽ phản hồi trong thời gian sớm nhất.
        </p>

        <form action="#" className='space-y-8'>
          <div>
            <label htmlFor="email" className='form__label'>
              Email
            </label>

            <input 
              type="email"
              id='email'
              placeholder='example@gmail.com'
              className='form__input mt-1' />
          </div>

          <div>
            <label htmlFor="title" className='form__label'>
              Tiêu đề
            </label>

            <input 
              type="text"
              id='title'
              placeholder='Viết tiêu đề...'
              className='form__input mt-1' />
          </div>

          <div className='sm:col-span-2'>
            <label htmlFor="message" className='form__label'>
              Nội dung
            </label>

            <textarea
              rows='5'
              type="text"
              id='message'
              placeholder='Viết nội dung...'
              className='form__input mt-1' />
          </div>

          <button className='btn rounded px-4 py-3 sm:w-fit'>Gửi</button>
        </form>
      </div>
    </section>
  )
}

export default Contact