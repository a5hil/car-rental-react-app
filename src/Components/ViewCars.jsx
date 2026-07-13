import React from 'react'
import NavBar from './NavBar'
import axios from 'axios'
import { useState, useEffect } from 'react'

const ViewCars = () => {

    const [data, changeData] = useState([])

    const fetchData = () => {
        axios.get('https://host-demo-app.onrender.com/api/cars').then(
            (response) => {
                changeData(response.data)
            }
        ).catch(
            (error) => {
                console.log(error)
                alert("Error fetching data")
            }
        )
    }

    useEffect(
        () => {
            fetchData()
        },[]
    )

    return (
        <div>
            <NavBar />
            <h2 className="text-center p-5">Car Details</h2>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">Reg. Number</th>
                        <th scope="col">Brand</th>
                        <th scope="col">Model</th>
                        <th scope="col">Vehicle Type</th>
                        <th scope="col">Fuel Type</th>
                        <th scope="col">Transmission</th>
                        <th scope="col">Seating Capacity</th>
                        <th scope="col">Rent Per Day</th>
                        <th scope="col">City</th>
                        <th scope="col">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(
                        (value, index) => {
                            return (
                                <tr key={index}>
                                    <th scope="row">{value.registration_number}</th>
                                    <td>{value.brand}</td>
                                    <td>{value.model}</td>
                                    <td>{value.vehicle_type}</td>
                                    <td>{value.fuel_type}</td>
                                    <td>{value.transmission}</td>
                                    <td>{value.seating_capacity}</td>
                                    <td>{value.rent_per_day}</td>
                                    <td>{value.city}</td>
                                    <td>{value.availability_status}</td>
                                </tr>
                            )
                        }
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default ViewCars