import Link from 'next/link'
import { getServerSession } from "next-auth";
import Logout from './Logout';


export default async function Header() {
    const session = await getServerSession()
    return (
        <div className='container mx-auto '>

            <nav className=''>
                <ul className='flex justify-around mt-10 border rounded-xl p-3 bg-[#DF6951] text-white '>

                    <Link className='hover:bg-[#cdffee]  hover:text-black rounded-md font-semibold text-[16px] cursor-pointer px-5 py-2' href="http://localhost:3000/">SPWN TOURS</Link>
                    <Link className='hover:bg-[#cdffee] hover:text-black rounded-md font-semibold text-[16px] cursor-pointer px-5 py-2' href="/Tours">ТУРЫ</Link>
                    <Link className='hover:bg-[#cdffee] hover:text-black rounded-md font-semibold text-[16px] cursor-pointer px-5 py-2' href="/Contact">КОНТАКТЫ</Link>

                    {
                        !session && <Link className='bg-[#adc8ed] rounded-xl font-semibold text-[16px] cursor-pointer px-5 py-2' href="/Login">ВОЙТИ</Link>
                    }
                    {
                        !!session && <Logout />
                    }



                </ul>
            </nav>
        </div>
    )
}
