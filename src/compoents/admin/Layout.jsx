// import React, { useEffect, useState } from 'react';
// import { Navigate, useNavigate } from 'react-router-dom';

import { Link, Outlet, useNavigate } from "react-router-dom";

export default function Layout() {

    const navigate = useNavigate();

    function logoutUser() {
        localStorage.clear();
        navigate("/")
    }
    return (
        <div>
            <div class="container-fluid">
                <div class="row">
                    
                    <div class="col-lg-2">
                        <header>
                            <nav id="sidebarMenu" class="collapse d-lg-block sidebar collapse bg-white">
                                <div class="position-sticky">
                                    <div class="list-group list-group-flush mx-3 mt-4">
                                        <Link to={'/admin'} class="list-group-item list-group-item-action py-2 ripple" aria-current="true"><br></br>
                                    
                                    
                                      <i  class="fas fa-tachometer-alt fa-fw me-3"></i> 
                                      <span>Main Dashboard</span></Link><Link to={'/admin/products'}
                                            class="list-group-item list-group-item-action py-2 ripple">
                                                
                                                <i class="fa-solid fa-cart-shopping me-3"></i><span>Products</span></Link><Link to={'/admin/salestable'}
                                                    class="list-group-item list-group-item-action py-2 ripple"
                                                    ><i class="fa-solid fa-bag-shopping me-3"></i><span>Sales
                                                        Table</span></Link><Link to={'/admin/salesexpense'}
                                                            class="list-group-item list-group-item-action py-2 ripple"
                                                           ><i class="fa-solid fa-wallet me-3"></i><span>Sales
                                                                Expense Data</span></Link><a
                                                                    class="list-group-item list-group-item-action py-2 ripple"
                                                                    onClick={(e) => logoutUser(e)}><i
                                                                        class="fa-solid fa-right-from-bracket me-3"></i><span>Logout</span></a>
                                    </div>
                                </div>
                            </nav>
                            <nav id="main-navbar" class="navbar navbar-expand-lg navbar-light bg-white fixed-top">
                                <div class="container-fluid"><button class="navbar-toggler" type="button"
                                    data-mdb-toggle="collapse" data-mdb-target="#sidebarMenu"
                                    aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation"><i
                                        class="fas fa-bars"></i></button><a class="navbar-brand" href="#"><img
                                            src="https://mdbcdn.b-cdn.net/img/logo/mdb-transaprent-noshadows.webp"
                                            height="25" alt="MDB Logo" loading="lazy" /></a>
                                    <ul class="navbar-nav ms-auto d-flex flex-row">
                                        <li class="nav-item dropdown"><a
                                            class="nav-link me-3 me-lg-0 dropdown-toggle hidden-arrow" href="#"
                                            id="navbarDropdownMenuLink" role="button" data-mdb-toggle="dropdown"
                                            aria-expanded="false"><i class="fas fa-bell"></i><span
                                                class="badge rounded-pill badge-notification bg-danger">1</span></a>
                                            <ul class="dropdown-menu dropdown-menu-end"
                                                aria-labelledby="navbarDropdownMenuLink">
                                                <li><a class="dropdown-item" href="#">Some news</a></li>
                                                <li><a class="dropdown-item" href="#">Another news</a></li>
                                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                                            </ul>
                                        </li>
                                        <li class="nav-item"><a class="nav-link me-3 me-lg-0" href="#"><i
                                            class="fas fa-fill-drip"></i></a></li>
                                        <li class="nav-item me-3 me-lg-0"><a class="nav-link" href="#"><i
                                            class="fab fa-github"></i></a></li>
                                        <li class="nav-item dropdown"><a
                                            class="nav-link me-3 me-lg-0 dropdown-toggle hidden-arrow" href="#"
                                            id="navbarDropdown" role="button" data-mdb-toggle="dropdown"
                                            aria-expanded="false"><i class="flag-united-kingdom flag m-0"></i></a>
                                            <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                                                <li><a class="dropdown-item" href="#"><i
                                                    class="flag-united-kingdom flag"></i>English<i
                                                        class="fa fa-check text-success ms-2"></i></a></li>
                                                <li>
                                                    <hr class="dropdown-divider" />
                                                </li>
                                                <li><a class="dropdown-item" href="#"><i
                                                    class="flag-poland flag"></i>Polski</a></li>
                                                <li><a class="dropdown-item" href="#"><i class="flag-china flag"></i>中文</a>
                                                </li>
                                                <li><a class="dropdown-item" href="#"><i class="flag-japan flag"></i>日本語</a>
                                                </li>
                                                <li><a class="dropdown-item" href="#"><i
                                                    class="flag-germany flag"></i>Deutsch</a></li>
                                                <li><a class="dropdown-item" href="#"><i
                                                    class="flag-france flag"></i>Français</a></li>
                                                <li><a class="dropdown-item" href="#"><i
                                                    class="flag-spain flag"></i>Español</a></li>
                                                <li><a class="dropdown-item" href="#"><i
                                                    class="flag-russia flag"></i>Русский</a></li>
                                                <li><a class="dropdown-item" href="#"><i
                                                    class="flag-portugal flag"></i>Português</a></li>
                                            </ul>
                                        </li>
                                        <li class="nav-item dropdown"><a
                                            class="nav-link dropdown-toggle hidden-arrow d-flex align-items-center"
                                            href="#" id="navbarDropdownMenuLink" role="button"
                                            data-mdb-toggle="dropdown" aria-expanded="false"></a>
                                            <ul class="dropdown-menu dropdown-menu-end"
                                                aria-labelledby="navbarDropdownMenuLink">
                                                <li><a class="dropdown-item" href="#">My profile</a></li>
                                                <li><a class="dropdown-item" href="#">Settings</a></li>
                                                <li><button><a class="dropdown-item" href="/">Logout</a></button></li>
                                            </ul>
                                        </li>
                                        <li class="nav-item dropdown me-5"><a class="nav-link dropdown-toggle" href="#"
                                            id="navbarDropdown" role="button" data-bs-toggle="dropdown"
                                            aria-expanded="false"><img
                                                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img (31).webp"
                                                class="rounded-circle" height="22" alt="Avatar" loading="lazy" /></a>
                                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown"><button
                                                class="btn btn-light">
                                                <li><a class="dropdown-item" onClick={(e) => logoutUser(e)}>Logout</a></li>
                                            </button></ul>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                        </header>
                    </div>
                    <div class="col-lg-10" style={{backgroundColor:"eceff7"}}>
                        <Outlet />
                    </div>
                </div>
            </div>




        </div>


    )
}
