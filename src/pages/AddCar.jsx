import React, { useState } from 'react'
import CarsService from '../services/CarsService';
import { useHistory } from 'react-router-dom';


const AddCar = () => {
    const [newCar, setNewCar] = useState({
        brand: "",
        model: "",
        year: "",
        max_speed: "",
        is_automatic: false,
        engine: null,
        number_of_doors: ""
    })
    let history = useHistory()
    const years = () => {
        let arr = [];
        for (let i = 1990; i <= 2018; i++) arr.push(i);
        return arr;
    };
    const engines = ["diesel", "petrol", "electric", "hybrid"];
    const brandHandler = (e) => {
        setNewCar({ ...newCar, brand: e.target.value })
    }
    const modelHandler = (e) => {
        setNewCar({ ...newCar, model: e.target.value })
    }
    const yearHandler = (e) => {
        setNewCar({ ...newCar, year: e.target.value })
    }
    const maxSpeedHandler = (e) => {
        setNewCar({ ...newCar, max_speed: e.target.value })
    }
    const isAutomaticHandler = (e) => {
        setNewCar({ ...newCar, is_automatic: e.target.value = true })
    }
    const engineHandler = (e) => {
        setNewCar({ ...newCar, engine: e.target.value })
    }
    const numberOfDoorsHandler = (e) => {
        setNewCar({ ...newCar, number_of_doors: e.target.value })
    }

    const submitHandler = async (e) => {
        e.preventDefault();
        await CarsService.add(newCar);
        history.push("/cars")
    }
    const resetHandler = () => {
       setNewCar({
        brand: "",
        model: "",
        year: "",
        max_speed: "",
        is_automatic: false,
        engine: null,
        number_of_doors: ""
       })
    }
    const previewHandler = () => {
        const transmition = (!newCar.is_automatic) ? 'manual transmision' : 'automatic transmision'
        alert(`
            Car brand: ${newCar.brand}
            Car model: ${newCar.model}
            Year of production: ${newCar.year}
            Cars maximum speed is ${newCar.max_speed} km/h
            Number of doors: ${newCar.number_of_doors}
            The car has ${transmition}
            Engine type: ${newCar.engine}
        `)
    }
    return (
        <div>
            <h1>Add Car</h1>
            <form onSubmit={submitHandler}>
                <label>Enter car brand</label>
                <input
                    type="text"
                    value={newCar.brand}
                    onChange={brandHandler}
                />
                <label>Enter car model</label>
                <input
                    type="text"
                    value={newCar.model}
                    onChange={modelHandler}
                />
                <label
                    htmlFor="">
                    Select year
                </label>
                <select
                    name='year'
                    value={newCar.year}
                    onChange={yearHandler}
                >
                    {years().map((year, index) => (
                        <option key={index} value={year}>{year}</option>
                    ))}
                </select>
                <label>Enter cars max speed</label>
                <input
                    type="number"
                    value={newCar.max_speed}
                    onChange={maxSpeedHandler}
                />
                <label
                    htmlFor="isAutomatic">
                    Select gearbox type
                </label>
                <input
                    type="checkbox"
                    id="isAutomatic"
                    value={newCar.is_automatic}
                    onChange={isAutomaticHandler}
                />
                <label>
                    <div className="engineType">
                        Choose an engine:{" "}
                        {engines.map((type) => (
                            <span key={type}>
                                {type}
                                <input
                                    type='radio'
                                    onChange={engineHandler}
                                    checked={type == newCar.engine}
                                    value={type}
                                />{" "}
                            </span>
                        ))}
                    </div>
                </label>
                <label>Enter cars door number</label>
                <input
                    type="number"
                    value={newCar.number_of_doors}
                    onChange={numberOfDoorsHandler}
                />
                <button type='submit'>Submit</button>
                <button type='button' onClick={resetHandler}>Reset</button>
                <button type='button' onClick={previewHandler}>Previev</button>
            </form>
        </div>
    )
}

export default AddCar