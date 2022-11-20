import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import CarsService from '../services/CarsService';

const AppCars = () => {
    const [cars, setCars] = useState([]);
    const getCars = async () => {
        const carsData = await CarsService.getAll();
        setCars(carsData)
    }
    const deleteCarHandler = async (id) => {

        const deleteCar = CarsService.delete(id);
        if (deleteCar) {
            setCars([...cars.filter((car) => car.id !== id)]);
        }
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
                    <ul>
                        <li>Model: {car.model}</li>
                        <li>Year: {car.year}</li>
                        <li>Cars max speed:{car.max_speed}</li>
                        <li>{(!car.is_automatic) ? 'Manual transmision' : 'Automatic transmision'}</li>
                        <li>Cars engine: {car.engine}</li>
                        <li>The car has {car.number_of_doors} dors</li>
                    </ul>
                    <Link to={`/edit/${car.id}`}>
                        <button className="btn btn-warning">Edit</button>
                    </Link>
                    <button type='button' onClick={() => deleteCarHandler(car.id)}>Delete</button>
                </div>)
            }
        </div>
    )
}

export default AppCars