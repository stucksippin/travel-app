import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function HomePage() {
    return (
        <div className="container mx-auto mt-[70px]">
            <Image
                className="absolute top-0 right-0 -z-10"
                src="/assets/girlinbag.png"
                width={900}
                height={1000}
                alt="Девушка на чемодане"
            />

            <div className="flex flex-col w-[840px] ">
                <span className="text-[#DF6951] font-bold mb-16">BEST DESTINATIONS AROUND THE WORLD</span>
                <span className="text-[120px] leading-[120px] mb-10">Travel, enjoy
                    and live a new
                    and full life</span>
                <span className="text-[%5E6282]">Built Wicket longer admire do barton vanity itself do in it.<br /> Preferred to sportsmen it engrossed listening.Park gate<br /> sell they west hard for the.</span>
            </div>

            <div className="flex justify-center w-1/3 mt-10">

                <button className="border py-3 px-5 rounded-xl  bg-[#DF6951] text-white "><Link className="pointer" href="/Tours">SEARCH TOUR</Link></button>
            </div>
        </div>
    )
}
