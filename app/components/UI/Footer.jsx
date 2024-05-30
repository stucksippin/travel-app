import React from 'react'

export default function Footer() {
    return (
        <div className='mt-auto'>
            <div className='flex  justify-center mt-[10%] bg-[#65B599] h-[300px]'>
                <div className='flex container justify-around text-xl'>
                    <div className='flex flex-col my-auto'>
                        <span className='font-bold text-xl mb-5'>SPWN TOURS</span>
                        <span>Book your trip in minute,get full<br /> Control for mucg longer</span>
                    </div>

                    <div className='flex mr-5 my-auto'>
                        <ul className='p-5'>
                            <li className='font-bold text-xl mb-5'>Company</li>
                            <li>About</li>
                            <li>Careers</li>
                            <li>Mobile</li>
                        </ul>
                        <ul className='p-5'>
                            <li className='font-bold text-xl mb-5'>Contact</li>
                            <li>Help</li>
                            <li>Press</li>
                            <li>Affilates</li>
                        </ul>
                        <ul className='p-5'>
                            <li className='font-bold text-xl mb-5'>More</li>
                            <li>Airlinefess</li>
                            <li>Airline</li>
                            <li>Low fare tips</li>
                        </ul>


                    </div>

                </div>

            </div>
        </div>
    )
}
