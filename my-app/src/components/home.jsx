import React, { Component } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Navbar";
import "./CSS/home.css";

class Home extends Component {
  render() {
    return (
      <>
        <Navbar />
        <div
          id="carouselExampleDark"
          class="carousel slide"
          data-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active" data-bs-interval="3000">
              <img
                class="d-block w-100"
                src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
                alt="First slide"
              />
              <div class="carousel-caption d-none d-md-block">
                <Link to="/Adminlogin" className="btn btn-primary btn-lg">
                  SIGN IN
                </Link>
                <h5>ADMIN PORTAL</h5>
              </div>
            </div>
            <div class="carousel-item" data-bs-interval="2000">
              <img
                class="d-block w-100"
                src="https://images.pexels.com/photos/733856/pexels-photo-733856.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt="Second slide"
              />
              <div class="carousel-caption d-none d-md-block">
                <Link to="/Studentlogin" className="btn btn-primary btn-lg">
                  SIGN IN
                </Link>
                <h5>STUDENT PORTAL</h5>
              </div>
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </>
    );
  }
}

export default Home;
