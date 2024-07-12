import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import NotificationsPage from "./pages/Notifications.jsx";
import ProfilePage from "./pages/Profile.jsx";
import Login from "./pages/Login.jsx";
import LoginOTP from "./pages/LoginOTP.jsx";

export default function App() {
  return (
    <div className="bg-customBackground min-h-screen">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/login/otp" element={<LoginOTP />} />
          <Route path="/notifications" element={<NotificationsPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
