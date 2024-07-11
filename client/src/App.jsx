import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import Home from "./pages/Home.jsx";
import NotificationsPage from "./pages/Notifications.jsx";
import ProfilePage from "./pages/Profile.jsx";
import BottomNavBar from "./components/BottomNavBar.jsx";

import { FiHome } from "react-icons/fi";
import { PiCallBellLight } from "react-icons/pi";
import { PiNoteLight } from "react-icons/pi";
import NavBarButton from "./components/NavbarButton.jsx";
import Login from "./pages/Login.jsx";
import LoginOTP from "./pages/LoginOTP.jsx";

export default function App() {
  return (
    <div className="bg-customBackground min-h-screen">
      {/* <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/notifications" element={<NotificationsPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
        <BottomNavBar>
          <NavBarButton to="/" icon={FiHome} position="left" />
          <NavBarButton to="/alerts" icon={PiCallBellLight} position="middle" />
          <NavBarButton to="/notes" icon={PiNoteLight} position="right" />
        </BottomNavBar>
      </BrowserRouter> */}
      <LoginOTP />
    </div>
  );
}
