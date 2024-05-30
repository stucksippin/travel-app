'use client'


import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import React from 'react'





export default function AddTourForm({ id, name, data, city, type, price, nutrition, guide }) {

    async function handleSubmit(e) {
        e.preventDefault()

        const formData = new FormData(e.target)

        const resp = await fetch('/api/admin/create', {
            method: 'PUT',
            body: formData
        })

        const result = await resp.json()

    }

    return (
        <div>
            <form onSubmit={handleSubmit} className="container flex flex-col gap-y-5 bg-white p-10">
                <input type="text" name='id' value={id} hidden />
                <Input name="name" required type="text" placeholder="Название  тура" defaultValue={name} />
                <Input name="data" required type="text" placeholder="Дата тура" defaultValue={data} />
                <Input name="city" required type="text" placeholder="Город" defaultValue={city} />
                <Input name="type" required type="text" placeholder="Тип" defaultValue={type} />
                <Input name="price" required type="text" placeholder="Цена" defaultValue={price} />
                <label>Питание</label>
                <Input name="nutrition" type="checkbox" placeholder="Питание" />
                <label>Гид</label>
                <Input name="guide" type="checkbox" placeholder="Гид" />
                <div className="text-center">

                    <Button>Добавить комнату</Button>


                </div>
            </form>
        </div>
    )
}

