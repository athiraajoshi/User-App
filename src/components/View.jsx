import React, { useEffect, useState } from 'react'

import axios from 'axios'
import Navbar from './Navbar'

const View = () => {
  const [data, changeData] =useState(
    [

     

    ]
  )
  const fetchData = () => {
    axios.get("http://localhost:8098/view")
        .then(response => {
            console.log(response.data)
            changeData(response.data)
        })
        .catch(error => {
            console.error(error)
            alert(error.message)
        }).finally()
}

useEffect(() => {
    fetchData()
}, [])
  return (
    <div>
      <Navbar/>
      <div className="container">
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

            <div className="row g-3">
            <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">Name</th>
                                    
                                    <th scope="col">Roll no</th>
                                    <th scope="col">Admno</th>
                                    <th scope="col">College</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data.map(
                                        (value, index) => {
                                            return <tr>
                                                <td>{value.name}</td>
                                                <td>{value.rollno}</td>
                                                <td>{value.admno}</td>
                                                <td>{value.college}</td>
                                               
                                            </tr>
                                        }
                                    )
                                }

                            </tbody>
                        </table>


            </div>
          </div>
        </div>
      </div>
    </div>


  )
}

export default View
