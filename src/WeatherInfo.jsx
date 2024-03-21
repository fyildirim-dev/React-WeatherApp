import React from 'react'
import './css/info.css'

function WeatherInfo({ timeInfo, tempe, country }) {
    if (!timeInfo) {
        return true;
    }
    if (!tempe) {
        return true;
    }
    if (!country) {
        return true;
    }
    const { datetime } = timeInfo;
    const dateTimeObject = new Date(datetime);

    // 2. Date nesnesinden saat, tarih ve gün bilgilerini alarak istediğimiz formatta kaydetme
    const time = dateTimeObject.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });

    var gun = dateTimeObject.getDate();
    var ay = dateTimeObject.getMonth() + 1; // Ay bilgisinde 0-11 aralığında değerler döner, bu yüzden 1 ekliyoruz
    var yil = dateTimeObject.getFullYear();
    var aylar = ['Oca', 'Şub', 'Mar', 'Nis', 'May', 'Haz', 'Tem', 'Ağu', 'Eyl', 'Eki', 'Kas', 'Ara'];
    var date = gun + ' ' + aylar[ay] + ' ' + yil;

    let day = dateTimeObject.toLocaleDateString('en-US', { weekday: 'long' });
    switch (day) {
        case "Monday":
            day = "Pazartesi";
            break;
        case "Tuesday":
            day = "Salı";
            break;
        case "Wednesday":
            day = "Çarşamba";
            break;
        case "Thursday":
            day = "Perşembe";
            break;
        case "Friday":
            day = "Cuma";
            break;
        case "Saturday":
            day = "Cumartesi";
            break;
        case "Sunday":
            day = "Pazar";
            break;
    }
    return (
        <div className='leftInfo'>
            <h1 className='text' style={{ marginBottom: 0 }}>Connaught Place</h1>
            <h1 className='text' style={{ marginTop: 0, fontSize: '40px' }}>{country}</h1>
            <div className="selam" style={{ display: 'flex' }}>
                <h2 className='time' style={{ fontSize: '35px', margin: 0 }}>{time}</h2>
                <div style={{ fontSize: '35px', display: 'flex', marginTop: '50px', marginLeft: '0px' }}>
                    <p className='date'>{day}, &nbsp;&nbsp;</p>
                    <p className='date' style={{ width: '230px' }}>{date}</p>
                </div>
                <h1 className='tempe' style={{ marginLeft: '440px', fontSize: '120px' }}>{tempe}°c</h1>
            </div>
        </div>
    )
}

export default WeatherInfo