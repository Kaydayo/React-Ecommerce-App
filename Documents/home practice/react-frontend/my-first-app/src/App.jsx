import React, { Component } from "react";
import Navbar from "./NavBar";
import Dashboard from "./Dashboard";
import { Routes, Link } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Login from "./Login";

export default class App extends Component {
    render() {
        return <React.Fragment>
            <Navbar />
            <Dashboard />
        </React.Fragment>
    }
}