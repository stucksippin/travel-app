'use client'


import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export default function UpdateTour({ id, name, data, city, type, price, nutrition, guide }) {

    async function handleSubmit(e) {
        e.preventDefault()

        const formData = new FormData(e.target)

        const resp = await fetch('/api/admin/update', {
            method: 'PATCH',
            body: formData
        })

        const result = await resp.json()

    }

    return (
        <div>
            <form onSubmit={handleSubmit} className="container flex flex-col gap-y-5">
                <input type="text" name='id' value={id} hidden />
                <Input name="name" required type="text" placeholder="Название  тура" defaultValue={name} />
                <Input name="data" required type="text" placeholder="Дата тура" defaultValue={data} />
                <Input name="city" required type="text" placeholder="Город" defaultValue={city} />
                <Input name="type" required type="text" placeholder="Тип" defaultValue={type} />
                <Input name="price" required type="text" placeholder="Цена" defaultValue={price} />
                <label>Питание</label>
                <Input name="nutrition" defaultChecked={!!nutrition ? 'checked' : ''} type="checkbox" placeholder="Питание" />
                <label>Гид</label>
                <Input name="guide" defaultChecked={!!guide ? 'checked' : ''} type="checkbox" placeholder="Гид" />
                <div className="text-center">
                    <Button>Обновить комнату</Button>
                </div>
            </form>
        </div>
    )
}

