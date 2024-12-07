import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default function Products() {

    const [data, setData] = useState({
        product: "",
        price: "",
        gst: "",
        quantity: 1

    });
    const [id, setId] = useState(undefined);
    const [newData, setNewData] = useState([]);

    function handleChange(e) {
        setData({ ...data, [e.target.id]: e.target.value })
    }

    function handleSubmit(e) {
        e.preventDefault();

        if (id === undefined) {
            axios.post("https://668901650ea28ca88b86adb7.mockapi.io/sale/", data)
                .then((res) => {
                    console.log(res.data);
                    loadData()
                    setData({
                        product: "",
                        price: "",
                        gst: "",
                        quantity: 1
                    })
                }).catch((err) => {
                    console.log(err)
                    alert("Data Not Stored")
                })
        } else {
            axios.put("https://668901650ea28ca88b86adb7.mockapi.io/sale/" + id, data)
                .then((res) => {
                    console.log(res.data);
                    loadData();
                    setData({
                        product: "",
                        price: "",
                        gst: "",
                        quantity: 1
                    })
                    setId(undefined)
                })
        }
    };
    function loadData() {
        axios.get("https://668901650ea28ca88b86adb7.mockapi.io/sale")
            .then((res) => {
                console.log(res.data);
                setNewData(res.data)
            })
    };
    function handleDelete(e, id) {
        e.preventDefault();
        // alert(id)
        axios.delete("https://668901650ea28ca88b86adb7.mockapi.io/sale/" + id)

            .then((res) => {
                console.log(res.data);
                loadData();
            })
    };
    function handleUpdate(id) {
        alert(id)
        setId(id)
        axios.get("https://668901650ea28ca88b86adb7.mockapi.io/sale/" + id)
            .then((res) => {
                console.log(res.data);
                setData({
                    product: res.data.product,
                    price: res.data.price,
                    gst: res.data.gst,

                })
            })
    }

    useEffect(() => {
        loadData()
    }, [])



    return (
        <div>
            <div style={{ marginTop: "58px" }}>
                <div class="container pt-4">
                    <div>
                        <div class="">
                            <div class="row">
                                <nav aria-label="breadcrumb">
                                    <ol class="breadcrumb"><Link to={'/admin'} class="breadcrumb-item" ><a>Home</a></Link><Link to={'/admin/products'} class="breadcrumb-item active" aria-current="page">Products</Link>
                                        <div class="mb-3 col-lg-12 d-flex justify-content-end"><button type="button"
                                            class="btn btn-primary ms-2" data-bs-toggle="modal"
                                            data-bs-target="#exampleModal">Add</button></div>
                                    </ol>
                                </nav>
                                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                                    aria-hidden="true">
                                    <div class="modal-dialog">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <h1 class="modal-title fs-5" id="exampleModalLabel">Add Product</h1><button
                                                    type="button" class="btn-close" data-bs-dismiss="modal"
                                                    aria-label="Close"></button>
                                            </div>
                                            <div class="modal-body">
                                                <div class="row">
                                                    <div class="row">
                                                        <div class="col-lg-1"></div>
                                                        <div class="mb-3 col-lg-10"><label
                                                            class="form-label">Product</label><input id="product" type="text" value={data.product} onChange={handleChange}
                                                                class="form-control" /></div>
                                                        <div class="col-lg-1"></div>
                                                    </div>
                                                    <div class="row">
                                                        <div class="col-lg-1"></div>
                                                        <div class="mb-3 col-lg-10"><label
                                                            class="form-label">Price</label><input id="price" type="number" value={data.price} onChange={handleChange}
                                                                class="form-control" /></div>
                                                        <div class="col-lg-1"></div>
                                                    </div>
                                                    <div class="row">
                                                        <div class="col-lg-1"></div>
                                                        <div class="mb-3 col-lg-10"><label for="disabledSelect"
                                                            class="form-label">GST %</label><select id="gst"
                                                                class="form-select" value={data.gst} onChange={handleChange} autocompleted >
                                                                <option>Choose option</option>
                                                                <option value="18">18%</option>
                                                                <option value="12">12%</option>
                                                            </select></div>
                                                        <div class="col-lg-1"></div>
                                                    </div>
                                                </div>
                                                <div class="modal-footer"><button type="button" class="btn btn-secondary"
                                                    data-bs-dismiss="modal">Close</button><button onClick={(e) => handleSubmit(e)} type="button"
                                                        class="btn btn-primary" data-bs-dismiss="modal">Submit</button></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="card mt-2">
                                    <div class="card-body">
                                        <table class="table table-striped">
                                            <thead>
                                                <tr>
                                                    <th scope="col">#</th>
                                                    <th scope="col">Name</th>
                                                    <th scope="col">Price</th>
                                                    <th scope="col">GST %</th>
                                                    <th scope="col">Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>

                                                {
                                                    newData.map((eachData, i) => {
                                                        return (
                                                            <tr>
                                                                <th scope="row">{i + 1}</th>
                                                                <td>{eachData.product}</td>
                                                                <td>{eachData.price}</td>
                                                                <td>{eachData.gst}</td>
                                                                {/* <td>{eachData.mobile}</td> */}
                                                                <td>
                                                                    <button onClick={() => handleUpdate(eachData.id)} className='btn btn-primary m-1' data-bs-toggle="modal"
                                                                        data-bs-target="#exampleModal"><i class="fa-solid fa-pencil"></i></button>
                                                                    <button onClick={(e) => handleDelete(e, eachData.id)} className='btn btn-danger'><i class="fa-solid fa-trash"></i></button></td>
                                                            </tr>
                                                        )
                                                    })
                                                }
                                                {/* <tr>
                                            <th scope="row">1</th>
                                            <td>Hp Laptop</td>
                                            <td>50000</td>
                                            <td>18 %</td>
                                            <td><button class="btn btn-primary me-2" data-bs-toggle="modal"
                                                    data-bs-target="#exampleModal">Edit</button><button
                                                    class="btn btn-danger">Delete</button></td>
                                        </tr>
                                        <tr>
                                            <th scope="row">2</th>
                                            <td>Pen-Drive</td>
                                            <td>4000</td>
                                            <td>18 %</td>
                                            <td><button class="btn btn-primary me-2" data-bs-toggle="modal"
                                                    data-bs-target="#exampleModal">Edit</button><button
                                                    class="btn btn-danger">Delete</button></td>
                                        </tr>
                                        <tr>
                                            <th scope="row">3</th>
                                            <td>Mouse</td>
                                            <td>450</td>
                                            <td>18 %</td>
                                            <td><button class="btn btn-primary me-2" data-bs-toggle="modal"
                                                    data-bs-target="#exampleModal">Edit</button><button
                                                    class="btn btn-danger">Delete</button></td>
                                        </tr>
                                        <tr>
                                            <th scope="row">4</th>
                                            <td>Keyboard</td>
                                            <td>499</td>
                                            <td>18 %</td>
                                            <td><button class="btn btn-primary me-2" data-bs-toggle="modal"
                                                    data-bs-target="#exampleModal">Edit</button><button
                                                    class="btn btn-danger">Delete</button></td>
                                        </tr>
                                        <tr>
                                            <th scope="row">5</th>
                                            <td>laptop</td>
                                            <td>1200</td>
                                            <td>18 %</td>
                                            <td><button class="btn btn-primary me-2" data-bs-toggle="modal"
                                                    data-bs-target="#exampleModal">Edit</button><button
                                                    class="btn btn-danger">Delete</button></td>
                                        </tr>
                                        <tr>
                                            <th scope="row">6</th>
                                            <td>Laptop Charger</td>
                                            <td>2500</td>
                                            <td>18 %</td>
                                            <td><button class="btn btn-primary me-2" data-bs-toggle="modal"
                                                    data-bs-target="#exampleModal">Edit</button><button
                                                    class="btn btn-danger">Delete</button></td>
                                        </tr>
                                        <tr>
                                            <th scope="row">7</th>
                                            <td>Speaker</td>
                                            <td>2650</td>
                                            <td>18 %</td>
                                            <td><button class="btn btn-primary me-2" data-bs-toggle="modal"
                                                    data-bs-target="#exampleModal">Edit</button><button
                                                    class="btn btn-danger">Delete</button></td>
                                        </tr> */}
                                            </tbody>
                                        </table>
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
