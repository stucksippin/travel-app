'use client'

import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"


import { useState } from "react"


import Link from "next/link"


import DeleteTourButton from "./DeleteTourButton"
import AddTourForm from "./AddTourForm"




export default function AdminPanel({ tours }) {

    const [Tours, setTours] = useState(tours)

    return (
        <>
            <div className="container">

                <div className="flex justify-end">
                    <Dialog>
                        <DialogTrigger asChild className="mb-10">
                            <Button>Добавить тур</Button>
                        </DialogTrigger>
                        <DialogContent>
                            <DialogHeader>
                                <DialogTitle className="text-center mb-5">Добавить тур</DialogTitle>

                                <AddTourForm id={tours.id} setTours={setTours} />

                            </DialogHeader>
                        </DialogContent>
                    </Dialog>
                </div>

                <Table>

                    <TableHeader>

                        <TableRow >
                            <TableHead>ID</TableHead>
                            <TableHead>Тур</TableHead>
                            <TableHead>Дата</TableHead>
                            <TableHead>Город</TableHead>
                            <TableHead>Тип</TableHead>
                            <TableHead>Цена</TableHead>
                            <TableHead>Питание</TableHead>
                            <TableHead>Гид</TableHead>
                        </TableRow>

                    </TableHeader>


                    <TableBody>

                        {
                            Tours.map((tour) => (
                                <TableRow key={tour.id}>
                                    <TableCell>{tour.id}</TableCell>
                                    <TableCell>{tour.name}</TableCell>
                                    <TableCell>{tour.data}</TableCell>
                                    <TableCell>{tour.city}</TableCell>
                                    <TableCell>{tour.type}</TableCell>
                                    <TableCell>{tour.price}</TableCell>
                                    <TableCell>{tour.nutrition ? 'Есть' : 'Отсутствует'}</TableCell>
                                    <TableCell>{tour.guide ? "Есть" : 'Отсутствует'}</TableCell>
                                    <TableCell className="flex justify-between">

                                        <DeleteTourButton id={tour.id} />
                                        <div className="flex ml-5 items-center justify-center">
                                            <Link href={`/Admin/${tour.id}`} className="py-1 items-center border">Изменить комнату</Link>
                                        </div>
                                    </TableCell>
                                </TableRow>
                            ))
                        }


                    </TableBody>

                </Table>
            </div>
        </>
    )
}