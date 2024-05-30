'use client'
import React from 'react'
import Counter from '../UI/Counter'
import CallbackForm from '../UI/CallbackForm'


export default function TourInfo({ id, name, data, city, type, price, nutrition, guide, image, counter }) {

    return (
        <div>
            <div className='container mx-auto mt-20 select-none'>

                <div className='flex '>
                    <div className='rounded-xl'>
                        <img className='rounded-xl' src={image} alt="" />
                    </div>

                    <div className='flex flex-col mx-auto'>
                        <div className='flex flex-col items-end mb-10'>
                            <span className='mb-5 text-2xl font-bold'>{name}</span>
                            <span className='mb-5 text-2xl '>Дата: {data}</span>
                            <span className='mb-5 text-2xl '>Город: {city}</span>
                        </div>
                        <hr className='mb-10' />

                        <div className='flex flex-col'>
                            <span className='mb-5 text-2xl '>Тип путешествия: {type}</span>
                            <span className='mb-5 text-2xl '>{nutrition ? "Питание включено" : "Питание не включено"}</span>
                            <span className='mb-5 text-2xl '>{guide ? "Тур с гидом" : "Тур без гида"}</span>
                            <span className='mb-5 text-2xl '>Цена: {price}$</span>
                        </div>
                        <div className='flex flex-col justify-center items-center mt-5'>
                            <span>Количество участников</span>
                            <Counter counter={counter} />
                        </div >
                        <button className='border p-5 text-xl mt-5 bg-[#DF6951] text-white rounded-xl'> <a href="#callbackForm" onClick={(e) => { e.preventDefault(); document.getElementById('callbackForm').scrollIntoView({ behavior: 'smooth' }); }}> Оставить заявку </a> </button>

                    </div>
                </div>
            </div>
            <div id="callbackForm" className=' container border border-dashed rounded-xl  border-orange-500 mx-auto w-[900px] h-[800px] mt-[200px]'>
                <span className='flex text-center justify-center mt-[100px] text-xl'>Форма обратной связи, оставьте вашу заявку и мы с вами свяжемся!</span>
                <CallbackForm />
            </div>
        </div>
    )
}

