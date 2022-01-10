import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import QuotePage from "../../pages/QuotePage";
import HomePage from "../../pages/HomePage";
import AboutPage from "../../pages/AboutPage";
import ChartPage from "../../pages/ChartPage";
import Navbar from "../Navbar/Navbar";
import QuoteChartPage from "../../pages/QuoteChartPage";
import RegisterPage from "../../pages/auth/RegisterPage";
import LoginPage from "../../pages/auth/LoginPage";
import RequireAuth from "./RequireAuth";

export const Routing = () => {
    return (
            <Router>
                <Navbar/>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/quote" element={<QuotePage />} />
                    <Route path="/quote/:id" element={<QuoteChartPage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/auth" element={<RegisterPage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/watchlist"
                           element={
                                <RequireAuth redirectTo="/login">
                                    <ChartPage />
                                </RequireAuth>
                           } />

                </Routes>
            </Router>
        )
}