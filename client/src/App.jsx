import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import Home from "./pages/Home.jsx";
import NotificationsPage from "./pages/Notifications.jsx";
import ProfilePage from "./pages/Profile.jsx";
import BottomNavBar from "./components/BottomNavBar.jsx";

export default function App() {
  return (
    <div className="bg-customBackground min-h-screen">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/notifications" element={<NotificationsPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
        <BottomNavBar />
      </BrowserRouter>
    </div>
  );
}
