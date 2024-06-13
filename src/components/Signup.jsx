import React, { useState } from 'react'

import axios from 'axios';
import Navbar from './Navbar';

const Add = () => {

    const [data, setData] = useState({
        username: "",
        password: "",

    });

    const inputHandler = (event) => {
        setData({ ...data, [event.target.name]: event.target.value })
    };

    const readValue = () => {
        console.log(data)
        axios.post("http://localhost:8898/add", data)
            .then(response => {
                console.log(response.data)
                if (response.data.status == "success") {
                    alert("Successfully")

                } else {
                    alert("Error")

                }
                console.log(response.data)
                setData(response.data)

            })
            .catch(error => {
                console.log(error);
                alert(error.message);
            })
    }

    return (
        <div>
            <Navbar />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Name</label>
                                <input type="text" className="form-control" name='name' value={data.name} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-">
                                <label htmlFor="" className="form-label">DOB</label>
                                <input type="text" className="form-control" name='dob' value={data.admno} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-">
                                <label htmlFor="" className="form-label">Blood group</label>
                                <input type="text" className="form-control" name='rollno' value={data.rollno} onChange={inputHandler} />
                            </div>

                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Mobile</label>
                                <input type="text" className="form-control" name='mobile' value={data.name} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-">
                                <label htmlFor="" className="form-label">Address</label>
                                <input type="text" className="form-control" name='address' value={data.admno} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-">
                                <label htmlFor="" className="form-label">PIN</label>
                                <input type="text" className="form-control" name='pin' value={data.rollno} onChange={inputHandler} />
                            </div>

                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <div className="row g-3">
                                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                        <label htmlFor="" className="form-label">District</label>
                                        <input type="text" className="form-control" name='district' value={data.name} onChange={inputHandler} />
                                    </div>
                                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-">
                                        <label htmlFor="" className="form-label">Place</label>
                                        <input type="text" className="form-control" name='place' value={data.admno} onChange={inputHandler} />
                                    </div>
                                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-">
                                        <label htmlFor="" className="form-label">E-mail</label>
                                        <input type="text" className="form-control" name='email' value={data.rollno} onChange={inputHandler} />
                                    </div>

                                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                        <label htmlFor="" className="form-label">Username</label>
                                        <input type="text" className="form-control" name='username' value={data.name} onChange={inputHandler} />
                                    </div>
                                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-">
                                        <label htmlFor="" className="form-label">Password</label>
                                        <input type="text" className="form-control" name='password' value={data.admno} onChange={inputHandler} />
                                    </div>
                                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-">
                                        <label htmlFor="" className="form-label">Confirm password</label>
                                        <input type="text" className="form-control" name='confirmpass' value={data.rollno} onChange={inputHandler} />
                                    </div>


                                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                        <button className="btn btn-success" onClick={readValue}>Register</button>
                                    </div>

                                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                        <button className="btn btn-success" onClick={readValue}>Register</button>
                                    </div>

                                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                        <button className="btn btn-warning" onClick={readValue}>Back to login</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Add
