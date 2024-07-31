import React, { useState } from "react";
import BottomNavBar from "../components/BottomNavBar";
import NavBarButton from "../components/NavbarButton";
import { FiHome } from "react-icons/fi";
import TextSubmitrPopUp from "./OtherPopUps/TextSubmitrPopUp";
import { PiNoteLight } from "react-icons/pi";
import NavBarButton_Button from "./NavBarButton_Button";
import { PiCallBellLight } from "react-icons/pi";

export default function CustomerNavBar() {
  const [isPopUpVisible, setIsPopUpVisible] = useState(false);
  const handleMsgSubmit = (msg) => {
    console.log("alert Mshg Submitted", msg);
    setTimeout(() => {
      setIsPopUpVisible(false), 300;
    });
  };

  const enablePopup = () => {
    setIsPopUpVisible(true);
  };

  return (
    <div>
      <TextSubmitrPopUp
        isVisible={isPopUpVisible}
        filterDisplayName="Notify Waiter"
        headerText={"Add a note to your waiter"}
        placeholderText="Enter your message here"
        submitButtonText="Send"
        cancleButtonText="Cancle"
        onSubmit={handleMsgSubmit}
        onCancle={() => setIsPopUpVisible(false)}
      />
      <div className="fixed bottom-0 w-full">
        <BottomNavBar>
          <NavBarButton to="/" icon={FiHome} position="left" />
          <NavBarButton_Button
            onClick={enablePopup}
            icon={PiCallBellLight}
            position="middle"
          />
          <NavBarButton to="/orders" icon={PiNoteLight} position="right" />
        </BottomNavBar>
      </div>
    </div>
  );
}
