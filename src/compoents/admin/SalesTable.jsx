import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function SalesTable() {

    let navigate = useNavigate();
    const [SaleData, setSaleData] = useState([]);
    const [rows, setRows] = useState([]);
    const [date, setDate] = useState('');
    const [customerName, setCustomerName] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [errors, setErrors] = useState({});

    // Load sale data from the API
    function loadData() {
        axios.get("https://668901650ea28ca88b86adb7.mockapi.io/sale/")
            .then((res) => {
                setSaleData(res.data);
            });
    }

    // Handle change when product is selected
    function handleChange(productId, rowindex) {
        let updatedRows = rows.map((row, i) => {
            if (i === rowindex) {
                let price = 0;
                let gst = 0;
                let subtotal = 0;

                for (let j = 0; j < SaleData.length; j++) {
                    if (SaleData[j].id === productId) {
                        price = SaleData[j].price;
                        gst = SaleData[j].gst * row.quantity;
                        subtotal = ((price * row.quantity) + (price * row.quantity) / 100 * gst);
                    }
                }

                return { ...row, price, gst, subtotal };
            }
            return row;
        });

        setRows(updatedRows);
    }

    // Add a new row
    const addRow = () => {
        let copyRows = [...rows];
        copyRows.push({ productId: '', price: 0, quantity: 1, gst: 0, subtotal: 0 });
        setRows(copyRows);
    }

    // Handle quantity change
    function quantityChange(quantity, rowindex) {
        let updatedRows = rows.map((row, index) => {
            if (index === rowindex) {
                let price = row.price;
                let gst = row.gst;
                let subtotal = ((price * quantity) + (price * quantity) / 100 * gst);
                return { ...row, subtotal, quantity };
            }
            return row;
        });
        setRows(updatedRows);
    }

    // Remove row
    function removeRow(e, id) {
        e.preventDefault();
        const updatedRows = rows.filter(row => row.productId !== id);
        setRows(updatedRows);
    }

    // Calculate totals (price, GST, and subtotal)
    const calculateTotal = () => {
        let totalPrice = 0;
        let totalGst = 0;
        let overallSubtotal = 0;

        rows.forEach(row => {
            const price = parseFloat(row.price);
            const gst = parseFloat(row.gst);
            const quantity = parseFloat(row.quantity);
            const subtotal = parseFloat(row.subtotal);

            if (!isNaN(subtotal)) {
                totalPrice += price * quantity;
                totalGst += gst;
                overallSubtotal += subtotal;
            }
        });

        return {
            totalPrice: totalPrice.toFixed(2),
            totalGst: totalGst.toFixed(2),
            overallSubtotal: overallSubtotal.toFixed(2),
        };
    };
    const validateForm = () => {
    const newErrors = {};

    // Form-level validation
    if (!date) newErrors.date = "Date is required.";
    if (!customerName) newErrors.customerName = "Customer name is required.";
    if (!mobileNumber || !/^\d{10}$/.test(mobileNumber)) {
        newErrors.mobileNumber = "Valid mobile number is required (10 digits).";
    }

    // Row-level validation
    const invalidRows = rows.map((row, index) => {
        if (!row.productId || row.quantity <= 0) {
            return { index, error: "Product and quantity are required." };
        }
        return null;
    }).filter(row => row !== null);

    if (invalidRows.length > 0) {
        newErrors.rows = invalidRows;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Return true if no errors
};



    // Handle form submission
    function handleSubmit() {
     
    // Proceed if validation passes
        const selectedProducts = rows.map(row => {
           
            return {
                productId: row.productId,
                price: row.price,
                quantity: row.quantity,
                gst: row.gst,
                subtotal: row.subtotal,
            };
        });

        // Get the totals from calculateTotal function
        const totals = calculateTotal();

        const orderData = {
            date,
            customerName,
            mobileNumber,
            totalPrice: totals.totalPrice,
            totalGst: totals.totalGst,
            overallSubtotal: totals.overallSubtotal,
            products: selectedProducts,
        };

        // Log the collected data
        console.log(orderData);

        axios.post("https://668901650ea28ca88b86adb7.mockapi.io/orders", orderData)
            .then((res) => {
                console.log(res.data);
                navigate("/admin/salesexpense")
            })
            .catch((error) => {
                console.error("Error submitting the data:", error);
            });
    };
    // Load Sale Data on component mount
    useEffect(() => {
        loadData();
    }, []);

    return (
        <div>
            <div style={{ marginTop: "58px" }}>
                <div className="container pt-4">
                    <div className="">
                        <div className="card">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-lg-4 mb-3">
                                        <label for="date" className="form-label">Date:</label>
                                        <input type="date" className="form-control" value={date} onChange={(e) => setDate(e.target.value)} />
                                    </div>
                                    <div className="col-lg-4 mb-3">
                                        <label for="customerName" className="form-label">Customer Name:</label>
                                        <input type="text" className="form-control" id="customerName" onChange={(e) => setCustomerName(e.target.value)} />
                                    </div>
                                    <div className="col-lg-4 mb-3">
                                        <label for="mobileNumber" className="form-label">Mobile Number:</label>
                                        <input type="tel" className="form-control" id="mobileNumber" onChange={(e) => setMobileNumber(e.target.value)} />
                                    </div>
                                </div>
                                <button className="btn btn-primary mb-3" onClick={addRow}>Add Row</button>
                            </div>
                        </div>
                        <div className="card mt-1">
                            <div className="card-body">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>Product</th>
                                            <th>Price</th>
                                            <th>Quantity</th>
                                            <th>GST</th>
                                            <th>Subtotal</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {rows.map((row, index) => (
                                            <tr key={index}>
                                                <td>
                                                    <select onChange={(e) => handleChange(e.target.value, index)} className="form-select">
                                                        <option value="" disabled="">Select a product</option>
                                                        {SaleData.map((sale) => (
                                                            <option key={sale.id} value={sale.id}>{sale.product}</option>
                                                        ))}
                                                    </select>
                                                </td>
                                                <td>{row.price}/-</td>
                                                <td><input type="number" className="form-control" min="1" value={row.quantity} onChange={(e) => quantityChange(e.target.value, index)} /></td>
                                                <td>{(parseFloat(row.gst) * parseFloat(row.quantity))}% </td>
                                                <td>{(parseFloat(row.price) * parseFloat(row.quantity)) + (parseFloat(row.price) * parseFloat(row.quantity) / 100 * row.gst)}</td>
                                                <td><button className="btn btn-danger" onClick={(e) => removeRow(e, row.productId)}>Remove</button></td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                                <hr />
                                <div className="mt-5">
                                    <h4>Total Price: {calculateTotal().totalPrice}</h4>
                                    <h4>Total GST: {calculateTotal().totalGst}</h4>
                                    <h4>Overall Subtotal: {calculateTotal().overallSubtotal}</h4>
                                </div>
                                <div className="col-lg-12 d-flex justify-content-end">
                                    <button onClick={handleSubmit} className="btn btn-success">
                                        Submit Data
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
