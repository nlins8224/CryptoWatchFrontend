import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import QuotePage from "../../pages/QuotePage";
import HomePage from "../../pages/HomePage";
import AboutPage from "../../pages/AboutPage";
import ChartPage from "../../pages/ChartPage";
import Navbar from "../Navbar";
import {ChartReceiver} from "../Charts/ChartReceiver";

export const Routing = () => {
    return (
            <Router>
                <Navbar/>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/quote" element={<QuotePage />} />
                    <Route path="/quote/:id" element={<ChartReceiver />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/chartView" element={<ChartPage />} />
                </Routes>
            </Router>
        )
}