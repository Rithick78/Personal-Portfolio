'use client'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import React, { useState } from 'react'
import Swal from 'sweetalert2'
import { Loader2 } from 'lucide-react'

function Contact() {
  const[loading,setLoading]=useState(false);

  const handleSubmit = async (e) => {
    setLoading(true)
    e.preventDefault();
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: "9cea041a-bd0b-40ee-8f48-1745654c491a",
        name: e.target.name.value,
        email: e.target.email.value,
        message: e.target.message.value,
      }),
    });
    const result = await response.json();
    if (result.success) {
      Swal.fire({
        title: "Success!",
        text: "Your Message Sent Successfully!",
        icon: "success"
      });
      console.log(result);
      setLoading(false)
    }
  }

  return (
    <div className='py-40'>
      <div className=' flex justify-center'>
        <form onSubmit={handleSubmit} className='bg-[gray]/20 sm:px-10 px-5 py-10 sm:py-15 space-y-5 rounded-xl xl:w-[40%] sm:w-[70%] w-[95%]'>
          <h1 className='sm:text-2xl text-xl font-bold text-gray-500 text-center'>Get in Touch</h1>
          <div>
            <label className='font-semibold sm:text-sm text-[11px]'>Full Name </label>
            <Input required name='name' placeholder='Enter Your Full Name' className="sm:text-sm text-xs text-gray-400 px-5 py-3 border-none bg-[white]/10" />
          </div>
          <div>
            <label className='font-semibold sm:text-sm text-[11px]'>Email</label>
            <Input required name='email' placeholder='Your Email' className="sm:text-sm text-xs text-gray-400 px-5 py-3 border-none bg-[white]/10" />
          </div>
          <div>
            <label className='font-semibold sm:text-sm text-[11px]'>Your Message</label>
            <Textarea required name='message' placeholder='Enter Your Message' className="sm:text-sm text-xs border-none bg-[white]/10" />
          </div>
          <div className='flex justify-end'>
            <button type='submit' disabled={loading} className='bg-blue-500 sm:px-5 sm:py-2 px-3 py-1.5 rounded-3xl hover:bg-blue-600 sm:font-bold font-semibold sm:text-md text-sm'>{loading ? <Loader2 className='animate-spin'/> : "Submit" }</button>
          </div>
        </form>
      </div>
    </div>

  )
}

export default Contact