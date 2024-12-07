import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function SaleExpense() {
    const [orders, setOrders] = useState([]);
    const [totalOverallSubtotal, setTotalOverallSubtotal] = useState(0);

    function loadData() {
        axios.get('https://668901650ea28ca88b86adb7.mockapi.io/orders')
            .then(res => {
                console.log(res.data);
                setOrders(res.data)
            })
    };

    useEffect(() => {
        loadData()
    }, []);

    function handleDelete(id) {
        axios.delete("https://668901650ea28ca88b86adb7.mockapi.io/orders/" + id)
            .then((res) => {
                console.log(res.data);
                loadData()
            })
    };

    return (

        <div>
            <div style={{ marginTop: "58px" }}>
                <div class="container pt-4">
                    <div class="container mt-2">
                        <h2>Sale Expense Table</h2>
                        <div class="card">
                            <div class="card-body">
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th>Date</th>
                                            <th>Customer Name</th>
                                            <th>Mobile No</th>
                                            <th>Total Price</th>
                                            <th>Total GST</th>
                                            <th>Overall Subtotal</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            orders.map((eachData) => {
                                                return (
                                                    <tr>
                                                        <td>2024-05-15</td>
                                                        <td>{eachData.customerName}</td>
                                                        <td>{eachData.mobileNumber}</td>
                                                        <td>{eachData.totalPrice}</td>
                                                        <td>{eachData.totalGst}</td>
                                                        <td>{eachData.overallSubtotal}</td>
                                                        <td>
                                                            <button onClick={() => handleDelete(eachData.id)} class="btn btn-danger ml-2">Delete</button></td>
                                                    </tr>
                                                )
                                            })
                                        }

                                    </tbody>
                                </table>
                                <div class="mt-3"><strong>
                                    <h5></h5>
                                </strong></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
