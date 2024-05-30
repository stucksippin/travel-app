'use client'
import React, { useEffect, useState } from 'react'
import CardTour from '../Tour/CardTour'
import getTours from '../../libs/getTours';






export default function Category({ Tours }) {




    const categories = ["культурный", "исторический", "городской", "пляжный"];

    const [activeIndex, setActiveIndex] = useState(0)
    const onClickActive = (index) => { setActiveIndex(index) }

    const [tours, setTours] = useState(Tours)


    return (
        <div>
            <div className='flex justify-center p-5 mt-10'>
                <ul className='flex'>
                    <li onClick={() => onClickActive(0)} className={`${activeIndex === 0 ? "active" : ''} text-[16px] cursor-pointer select-none border p-3 rounded-xl mr-5`}>Все</li>
                    <li onClick={() => onClickActive(1)} className={`${activeIndex === 1 ? "active" : ''} text-[16px] cursor-pointer select-none border p-3 rounded-xl mr-5`}>Культурные</li>
                    <li onClick={() => onClickActive(2)} className={`${activeIndex === 2 ? "active" : ''} text-[16px] cursor-pointer select-none border p-3 rounded-xl mr-5`}>Исторические</li>
                    <li onClick={() => onClickActive(3)} className={`${activeIndex === 3 ? "active" : ''} text-[16px] cursor-pointer select-none border p-3 rounded-xl mr-5`}>Городские</li>
                    <li onClick={() => onClickActive(4)} className={`${activeIndex === 4 ? "active" : ''} text-[16px] cursor-pointer select-none border p-3 rounded-xl mr-5`}>Пляжные</li>
                </ul>
            </div>

            <div className='container mx-auto items-center justify-center flex flex-wrap gap-y-20 gap-x-10'>
                {tours
                    .filter((tour) => {
                        if (activeIndex === 0) {
                            return true;
                        } else {
                            return tour.type.toLowerCase() === categories[activeIndex - 1].toLowerCase();
                        }
                    })
                    .map((tour) => (
                        <CardTour
                            key={tour.id}
                            id={tour.id}
                            image={tour.image}
                            name={tour.name}
                            data={tour.data}
                            city={tour.city}
                            type={tour.type}
                            price={tour.price}
                            nutrition={tour.nutrition}
                            guide={tour.guide}
                        />
                    ))}

            </div>
        </div>
    )
}
