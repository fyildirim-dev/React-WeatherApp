import React from 'react'
import './css/bar.css'
import { useState, useEffect } from 'react';

export var text = "";

function RightBar({ weatherInfo, onButtonClick }) {
    if (!weatherInfo) {
        return true;
    }
    if (!onButtonClick) {
        return true;
    }
    const [inputValue, setInputValue] = useState('');

    const handleButtonClick = () => {
        onButtonClick(inputValue); // Butona tıklandığında input değerini ana bileşene gönder
        document.getElementById('city').value = '';
        setInputValue(''); // Input alanındaki değeri güncelle
    };

    const handleInputChange = (e) => {
        setInputValue(e.target.value); // Input alanındaki değeri güncelle
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleButtonClick();
        }
    };

    const { name, country, weather, temperature, humidity, wind_speed, visibility } = weatherInfo;
    const [imgSrc, setImgSrc] = useState("./src/icons/" + weather + ".png");

    useEffect(() => {
        setImgSrc("./src/icons/" + weather + ".png")
    });

    return (
        <div className='rightBar'>
            <img src={imgSrc} alt="" />
            <h1>{weather}</h1><hr />
            <input id='city' type="text" placeholder='Search any city' value={inputValue} onChange={handleInputChange}
                onKeyPress={handleKeyPress} />
            <button onClick={handleButtonClick}>⌕</button>
            <div className='divimsi1'>
                <h2 className='title1'>{name}, &nbsp;</h2>
                <h2 className='info1'>{country}</h2>
            </div><hr className='hirr' />
            <div className='divimsi'>
                <h2 className='title'>Temperature</h2>
                <h2 className='info'>{temperature}°c ({weather})</h2>
            </div><hr className='hirr' />
            <div className='divimsi'>
                <h2 className='title'>Humidity</h2>
                <h2 className='info'>{humidity}%</h2>
            </div><hr className='hirr' />
            <div className='divimsi'>
                <h2 className='title'>Visibility</h2>
                <h2 className='info'>{visibility} mi</h2>
            </div><hr className='hirr' />
            <div className='divimsi'>
                <h2 className='title'>Wind Speed</h2>
                <h2 className='info'>{wind_speed} Km/h</h2>
            </div>
        </div>
    )
}

export default RightBar