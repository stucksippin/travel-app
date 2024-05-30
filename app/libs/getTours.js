import { PrismaClient } from "@prisma/client";

export default async function getTours() {
    const prisma = new PrismaClient()
    const tours = await prisma.tours.findMany();
    return tours
}