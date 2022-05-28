import React, { useState, useEffect } from 'react'

import axios from 'axios'

function Apicall() {

    const [API_Data, setAPI_Data] = useState([])

    useEffect(() => {
        call_data()
    }, [])

    function call_data() {
        axios.get(`https://fakestoreapi.com/products`)
            .then(res => {
                let data = res.data;
                setAPI_Data(data)
            })
    }

    return (
        <div className="api_Warper">
            <table>
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Rating</th>
                    </tr>
                </thead>
                <tbody>
                    {API_Data.length > 0 ?
                        API_Data.map((items) => {
                            return (
                                <tr>
                                    <td><img src={items.image} /></td>
                                    <td>{items.title}</td>
                                    <td>{items.description}</td>
                                    <td>${items.price}</td>
                                    <td>{items.rating.rate}/5</td>
                                </tr>
                            )
                        })
                        :
                        <div className="Loading">
                            <div className="loader"></div>
                            Loading
                        </div>

                    }
                </tbody>
            </table>
        </div>
    )
}

export default Apicall