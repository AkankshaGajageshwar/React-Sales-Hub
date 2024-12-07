import React from 'react'

export default function Dashboard() {
    return (
        <div>
            {/* <div class="col-lg-10"> */}
                <div style={{ marginTop: "58px" }} >
                    <div class="container pt-4">
                        <div>
                            <div class="card">
                                <div class="card-body">
                                    <div class="row">
                                        <div class="card m-4" style={{ width: "18rem" }}>
                                            <div class="card-body">
                                                <h5 class="card-title">Products <span>| Today</span></h5>
                                                <div class="d-flex align-items-center">
                                                    <div
                                                        class="card-icon rounded-circle d-flex align-items-center justify-content-center">
                                                        <i class="fa-solid fja-cart-shopping fa-2xl"
                                                            style={{ color: "rgb(49, 99, 185)" }}></i>
                                                    </div>
                                                    <div class="ps-3">
                                                        <h3 style={{ color: "rgb(0, 102, 204)" }}>7</h3><span
                                                            class="text-success small pt-1 fw-bold">12%</span> <span
                                                                class="text-muted small pt-2 ps-1">increase</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="card m-4" style={{ width: "18rem" }}>
                                            <div class="card-body">
                                                <h5 class="card-title">Sales <span>| Today</span></h5>
                                                <div class="d-flex align-items-center">
                                                    <div
                                                        class="card-icon rounded-circle d-flex align-items-center justify-content-center">
                                                        <i class="fa-solid fa-cart-shopping fa-2xl"
                                                            style={{ color: "rgb(49, 99, 185)" }}></i>
                                                    </div>
                                                    <div class="ps-3">
                                                        <h3 style={{ color: "rgb(0, 102, 204)" }}>3</h3><span
                                                            class="text-success small pt-1 fw-bold">12%</span> <span
                                                                class="text-muted small pt-2 ps-1">increase</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="card m-4" style={{ width: "18rem" }}>
                                            <div class="card-body">
                                                <h5 class="card-title">Sales <span>| Today</span></h5>
                                                <div class="d-flex align-items-center">
                                                    <div
                                                        class="card-icon rounded-circle d-flex align-items-center justify-content-center">
                                                        <i class="fa-solid fa-cart-shopping fa-2xl"
                                                            style={{ color: "rgb(49, 99, 185)" }}></i>
                                                    </div>
                                                    <div class="ps-3">
                                                        <h3 style={{ color: "rgb(0, 102, 204)" }}>7</h3><span
                                                            class="text-success small pt-1 fw-bold">12%</span> <span
                                                                class="text-muted small pt-2 ps-1">increase</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="card mt-1">
                                <div class="card-body">
                                    <h1>Chart</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        // </div>
    )
}
