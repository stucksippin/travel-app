import { PrismaClient } from "@prisma/client"

export async function PATCH(request) {
    const body = await request.formData()
    const data = Object.fromEntries(body)
    console.log(data)

    const prisma = new PrismaClient()
    const resp = await prisma.tours.update({

        data: {
            name: data.name,
            data: data.data,
            city: data.city,
            type: data.type,
            price: parseInt(data.price),
            nutrition: !!data.nutriton,
            guide: !!data.guide,
        },
        where: {
            id: parseInt(data.id)
        }
    })

    if (resp) {
        return Response.json({
            result: "OK"
        })
    } else {
        return Response.json({
            result: "fail"
        })
    }

}