import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import CarsService from '../services/CarsService';

const AppCars = () => {
    const [cars, setCar] = useState([]);
    const getCars = async () => {
        const carsData = await CarsService.getAll();
        setCar(carsData)
    }
    useEffect(() => {
        getCars()
    }, [])
    return (
        <div>
            <h1>Cars</h1>
            {
                cars.map((car) => <div key={car.id}>
                    <h1>{car.brand}</h1>
                    <Link to={`/edit/${car.id}`}>
                        <button className="btn btn-warning">Edit</button>
                    </Link>
                </div>)
            }
        </div>
    )
}

export default AppCars