import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import QuotePage from "../../pages/QuotePage";
import HomePage from "../../pages/HomePage";
import AboutPage from "../../pages/AboutPage";
import ChartPage from "../../pages/ChartPage";
import Navbar from "../Navbar";

export const Routing = () => {
    return (
            <Router>
                <Navbar/>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/quote" element={<QuotePage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/chart" element={<ChartPage />} />
                </Routes>
            </Router>
        )
}