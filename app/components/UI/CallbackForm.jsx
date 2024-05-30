import { useForm } from "react-hook-form";


export default function CallbackForm() {

    const { register, handleSubmit } = useForm();

    //bot

    const onSubmit = async (data) => {
        try {
            await fetch("/api/", {
                method: 'POST',
                body: JSON.stringify(data)


            });
            console.log('Сообщение отправлено')
        } catch (error) {
            console.error("Ошибка при отправке данных в телеграмме", error)
        }
    }


    return (
        <form className="flex flex-col container mx-auto w-[50%] mt-20" onSubmit={handleSubmit(onSubmit)}>
            <label>Ваше Имя</label>
            <input className="border mb-5 py-3 px-5 rounded-xl" placeholder="Enter first name" {...register("firstName", { required: true, maxLength: 20 })} />
            <label>Ваша Фамилия</label>
            <input className="border mb-5 py-3 px-5 rounded-xl" placeholder="Enter last name" {...register("lastName", { pattern: /^[A-Za-zА-Яа-я]+$/i })} />
            <label>Ваш номер телефона</label>
            <input className="border mb-5 py-3 px-5 rounded-xl" type="tel" placeholder="Mobile number" {...register("phoneNumber", { required: true, minLength: 6, maxLength: 12 })} />

            <label>Количество взрослых</label>
            <select className="border mb-5 py-3 px-5 rounded-xl" {...register("adult")}>
                <option value="1 Взрослый">1</option>
                <option value="2 Взрослый">2</option>
                <option value="3 Взрослый">3</option>
                <option value="4 Взрослый">4</option>
                <option value="5 Взрослый">5</option>
            </select>

            <label>Количество детских</label>
            <select className="border mb-5 py-3 px-5 rounded-xl" {...register("children")}>
                <option value="0 Детский">0</option>
                <option value="1 Детский">1</option>
                <option value="2 Детский">2</option>
                <option value="3 Детский">3</option>
                <option value="4 Детский">4</option>
                <option value="5 Детский">5</option>
            </select>
            <input className="border p-2 hover:bg-orange-300 rounded-xl w-[50%] self-center mt-5" type="submit" />
        </form>
    );
}