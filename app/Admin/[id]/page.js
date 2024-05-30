
import UpdateTour from '@/app/components/Admin/UpdateTour'
import getToursById from '@/app/libs/getToursById'

export default async function UpdatePage({ params: { id } }) {
    const tour = await getToursById(id)
    return (
        <div>
            <UpdateTour key={tour.id} id={tour.id} name={tour.name} data={tour.data} city={tour.city} type={tour.city} price={tour.price} nutrition={tour.price} guide={tour.guide} />
        </div>
    )
}
