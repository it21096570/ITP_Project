import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#">Home</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">

                    <li class="nav-item">
                        <Link to="/addpriscription" className="nav-link">Explore</Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/readPrescription" className="nav-link">Admin Panel</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}