export async function POST(request) {
    const data = await request.json()
    const TOKEN = "6330394492:AAGxx4iEDLpWo3D22h-BEx9ZWilMLkoe72M"
    const CHAT_ID = "1094206968"
    const text = `
    
Имя: ${data.firstName} %0A
Фамилия: ${data.lastName} %0A
Номер: ${data.phoneNumber} %0A
Взрослых: ${data.adult} %0A
Детей: ${data.children} %0A


    `
    await fetch(`https://api.telegram.org/bot${TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${text}`)
    return Response.json({
        result: 'OK'
    })
}