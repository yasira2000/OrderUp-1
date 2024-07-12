import React from "react";
import Header from "../components/Header";
import BottomNavBar from "../components/BottomNavBar";
import NavBarButton from "../components/NavbarButton";
import { FiHome } from "react-icons/fi";
import { PiCallBellLight } from "react-icons/pi";
import { PiNoteLight } from "react-icons/pi";

export default function Notifications() {
  return (
    <div>
      <Header />
      <div>Notifications</div>{" "}
      <BottomNavBar>
        <NavBarButton to="/" icon={FiHome} position="left" />
        <NavBarButton to="/alerts" icon={PiCallBellLight} position="middle" />
        <NavBarButton to="/notes" icon={PiNoteLight} position="right" />
      </BottomNavBar>
    </div>
  );
}
