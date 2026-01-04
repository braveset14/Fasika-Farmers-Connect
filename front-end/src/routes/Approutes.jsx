import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";

export default function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navigate to="/login" />} ></Route>
                <Route path="/home" element={<Home />} ></Route>
            </Routes>
        </BrowserRouter>
    )
}
