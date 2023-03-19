import React, { Component } from 'react'
import './Result.css'
function Result ({weatherData}) {
        return (
        <div className='result-div'>
            {
                weatherData.name !== undefined?
                <>
                    <h1 className='city'>{weatherData.name}</h1>
                    <div className='details-div'>
                        <div>
                            <h2>Max Temp {weatherData.main.temp_max} Deg</h2>
                            <div>
                                <img srcSet={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`} alt="" />

                            </div>
                        </div>
                        <div>
                            <h2>Min Temp : {weatherData.main.temp_min} Deg</h2>
                            <div>{weatherData.weather[0].main} </div>
                        </div>
                    </div>
                </>
                :
                <h1>
                    pleace Enter City Name
                </h1>
            }
        </div> 
        )
    }

export default Result;



// if(weatherData !== undefined) {
            //     <div className="result-div">
            //     <h1 className='city'>{props.weatherData.name}</h1>
            //     <div className='details-div'>
            //         <div>
            //             <h2> Max Temp : {props.weatherData.main.temp_max}</h2>
            //             <div>Icon</div>
            //         </div>
            //         <div>
            //             <h2>Min Temp : {props.weatherData.main.temp_min}</h2>
            //             <div>Weather Type</div>
            //         </div>
            //     </div>
            // </div>
            // }

            // https://openweathermap.org/img/wn/{weatherData.weather[0].icon}@2x.png