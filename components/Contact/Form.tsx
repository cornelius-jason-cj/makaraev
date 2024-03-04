'use client'
import React from 'react'
import Button from '../Button';

function Form() {
  const [message, setMessage] = React.useState('')
  
  interface FormData {
    sender_company_name: string | '';
    sender_name: string | '';
    sender_email: string | '';
    sender_phone: string | '';
    message: string | '';
  }

  const [form, setForm] = React.useState<FormData>({
    sender_company_name: '',
    sender_name: '',
    sender_email: '',
    sender_phone: '',
    message: ''
  })

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  }

  React.useEffect(() => {
    const messageForm = `Halo saya dari
Company Name : ${form?.sender_company_name}
Email: ${form?.sender_email}
Nama: ${form?.sender_name}
Mobile Number: ${form?.sender_phone}
Message: ${form?.message}`
    const endcodeMessage = encodeURI(messageForm);
    setMessage(endcodeMessage)

  }, [form])

  return (

    <div className='mx-4 md:mx-0'>
      <h3 className='text-center md:text-lg text-white font-semibold mb-2'>CONTACT US</h3>
      <input
        placeholder={'Company Name'}
        type='text'
        className='w-full px-4 py-2 mt-1 mb-4 text-base font-light text-black placeholder-F2F2F2
        rounded-md bg-white border-[0.5px] border-[#F2F2F2]/50 focus:outline-none focus:border-[#216A97]'
        required
        name='sender_company_name'
        value={form.sender_company_name}
        onChange={handleInputChange}
      />
      <input
        placeholder={'Email'}
        type='text'
        className='w-full px-4 py-2 mt-1 mb-4 text-base font-light text-black placeholder-F2F2F2
        rounded-md bg-white border-[0.5px] border-[#F2F2F2]/50 focus:outline-none focus:border-[#216A97]'
        required
        name='sender_email'
        value={form.sender_email}
        onChange={handleInputChange}
      />
      <input
        placeholder={'Your Name'}
        type='text'
        className='w-full px-4 py-2 mt-1 mb-4 text-base font-light text-black placeholder-F2F2F2
        rounded-md bg-white border-[0.5px] border-[#F2F2F2]/50 focus:outline-none focus:border-[#216A97]'
        required
        name='sender_name'
        value={form.sender_name}
        onChange={handleInputChange}
      />
      <input
        placeholder={'Mobile No.'}
        type='text'
        className='w-full px-4 py-2 mt-1 mb-4 text-base font-light text-black placeholder-F2F2F2
        rounded-md bg-white border-[0.5px] border-[#F2F2F2]/50 focus:outline-none focus:border-[#216A97]'
        required
        name='sender_phone'
        value={form.sender_phone}
        onChange={handleInputChange}
      />
      <textarea
        rows={3}
        placeholder={'Message'}
        className='w-full px-4 py-2 mt-1 mb-4 text-base font-light text-black placeholder-F2F2F2
        rounded-md bg-white border-[0.5px] border-[#F2F2F2]/50 focus:outline-none focus:border-[#216A97]'
        required
        name='message'
        value={form.message}
        onChange={handleInputChange}
      />
      <Button
        type={'submit'}
        title={'Send Message'}
        variant={'btn_blue'}
        full={true}
        formText={message}
      />
    </div>
  )
}

export default Form