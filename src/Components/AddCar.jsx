import React from 'react'
import NavBar from './NavBar'
import { useState } from 'react'
import axios from 'axios'

const AddCar = () => {

    const [input, changeInput] = useState(
        {
            registration_number: "",
            brand: "",
            model: "",
            vehicle_type: "",
            fuel_type: "",
            transmission: "",
            seating_capacity: "",
            rent_per_day: "",
            city: "",
            availability_status: ""
        }
    )

    const inputHandler = (event) => {
        changeInput({ ...input, [event.target.name]: event.target.value })
    }

    const readValue = () => {
        console.log(input)
        axios.post('https://host-demo-app.onrender.com/api/add-car', input).then(
            (response) => {
                console.log(response.data)
                alert("Car added successfully")
            }
        ).catch(
            (error) => {
                console.log(error)
                alert("Error adding car")
            }
        )
    }

    return (
        <div>
            <NavBar />
            <h2 className="text-center p-5">Add Car</h2>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-4">
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Registration Number</label>
                                <input type="text" className="form-control" name="registration_number" value={input.registration_number} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Brand</label>
                                <input type="text" className="form-control" name="brand" value={input.brand} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Model</label>
                                <input type="text" className="form-control" name="model" value={input.model} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Vehicle Type</label>
                                <select className="form-select" name="vehicle_type" value={input.vehicle_type} onChange={inputHandler}>
                                    <option value="">Select Vehicle Type</option>
                                    <option value="Hatchback">Hatchback</option>
                                    <option value="Sedan">Sedan</option>
                                    <option value="SUV">SUV</option>
                                    <option value="MUV">MUV</option>
                                    <option value="Luxury">Luxury</option>
                                </select>
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Fuel Type</label>
                                <select className="form-select" name="fuel_type" value={input.fuel_type} onChange={inputHandler}>
                                    <option value="">Select Fuel Type</option>
                                    <option value="Petrol">Petrol</option>
                                    <option value="Diesel">Diesel</option>
                                    <option value="Electric">Electric</option>
                                    <option value="Hybrid">Hybrid</option>
                                </select>
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Transmission</label>
                                <select className="form-select" name="transmission" value={input.transmission} onChange={inputHandler}>
                                    <option value="">Select Transmission</option>
                                    <option value="Manual">Manual</option>
                                    <option value="Automatic">Automatic</option>
                                </select>
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Seating Capacity</label>
                                <input type="number" className="form-control" name="seating_capacity" value={input.seating_capacity} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Rent Per Day</label>
                                <input type="number" className="form-control" name="rent_per_day" value={input.rent_per_day} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">City</label>
                                <input type="text" className="form-control" name="city" value={input.city} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Availability Status</label>
                                <select className="form-select" name="availability_status" value={input.availability_status} onChange={inputHandler}>
                                    <option value="Available">Available</option>
                                    <option value="Booked">Booked</option>
                                    <option value="Maintenance">Under Maintenance</option>
                                </select>
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <button className="btn btn-dark" onClick={readValue}>Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    )
}

export default AddCar