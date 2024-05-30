import { PrismaClient } from "@prisma/client";
import Category from "../components/UI/Category"

async function getTours() {
    const prisma = new PrismaClient()
    const tours = await prisma.tours.findMany();
    return tours
}

export default async function Tours() {

    const tours = await getTours()

    return (
        <div>
            <Category Tours={tours} />
        </div>
    )
}
