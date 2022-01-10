import React, {useEffect, useState} from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import QuotePage from "../../pages/QuotePage";
import HomePage from "../../pages/HomePage";
import AboutPage from "../../pages/AboutPage";
import WatchlistPage from "../../pages/WatchlistPage";
import Navbar from "../Navbar/Navbar";
import QuoteChartPage from "../../pages/QuoteChartPage";
import RegisterPage from "../../pages/auth/RegisterPage";
import LoginPage from "../../pages/auth/LoginPage";
import RequireAuth from "./RequireAuth";
import {Spin} from "antd";
import { auth } from '../../firebase/firebase'

export const Routing = () => {
    const [loading, setLoading] = useState<boolean>(true)

    useEffect(() => {
        auth.onAuthStateChanged(() => {
            setLoading(false)
        })
    }, [])

    if (loading)
        return (
            <div className="spin">
                <Spin size="large" />
            </div>
        )

    return (
            <Router>
                <Navbar/>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/quote" element={<QuotePage />} />
                    <Route path="/quote/:id" element={<QuoteChartPage />} />
                    <Route path="/watchlist/:id" element={<QuoteChartPage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/auth" element={<RegisterPage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/watchlist"
                           element={
                                <RequireAuth redirectTo="/login">
                                    <WatchlistPage />
                                </RequireAuth>
                           } />

                </Routes>
            </Router>
        )
}