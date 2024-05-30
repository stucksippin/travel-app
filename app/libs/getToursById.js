export default async function getToursById(id) {
    const response = await fetch(`http://localhost:1000/tours/${id}`)
    return response.json()
}