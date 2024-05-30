
import TourInfo from '@/app/components/Tour/TourInfo'
import { PrismaClient } from '@prisma/client';
import React from 'react'

async function getTourById(tours) {
    const prisma = new PrismaClient();

    try {
        const tour = await prisma.tours.findFirst({
            where: {
                id: parseInt(tours),
            },
        });
        return tour;
    }
    catch (error) {
        console.error(error);

    }
    finally {
        await prisma.$disconnect();
    }
}


export default async function TourInInfo({ params: { id } }) {
    const tour = await getTourById(id)

    return (
        <div>
            <TourInfo
                key={tour.id}
                id={tour.id}
                image={tour.image}
                name={tour.name}
                data={tour.data}
                city={tour.city}
                type={tour.type}
                price={tour.price}
                nutrition={tour.nutrition}
                guide={tour.guide} />
        </div>
    )
}
