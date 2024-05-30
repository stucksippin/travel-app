'use client'
import React from 'react'
import CallbackForm from '../components/UI/CallbackForm'

export default function page() {

    return (
        <div id="callbackForm" className=' container border border-dashed rounded-xl  border-orange-500 mx-auto w-[900px] h-[800px] mt-[50px]'>
            <span className='flex text-center justify-center mt-[100px] text-xl'>Форма обратной связи, оставьте вашу заявку и мы с вами свяжемся!</span>
            <CallbackForm />
        </div>
    )
}
