import React, { useState, useEffect } from 'react'
import CarsService from '../services/CarsService';

const AppCars = () => {
    const [cars, setCar] = useState([]);
    const getCars = async () => {
        const carsData = await CarsService.getAll();
        console.log(carsData);
        setCar(carsData)
    }
    useEffect(() => {
        getCars()
    }, [])
    return (
        <div>
            <h1>Cars</h1>
            {
                cars.map((car) => <li>{car.brand}</li>)
            }
        </div>
    )
}

export default AppCars