import React, { useEffect } from 'react'




const YourComponent = () => {
    const dataArray = ['Data1', 'Data2', 'Data3'];

    useEffect(() => {
        dataArray.forEach((data) => {
            sendMessageToTelegram(data);
        });
    }, []);

    return <div>Your component content...</div>;
};

export default YourComponent;
