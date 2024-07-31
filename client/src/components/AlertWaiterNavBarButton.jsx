import NavBarButton_Button from "./NavBarButton_Button";
import { PiCallBellLight } from "react-icons/pi";

export default function AlertWaiterNavBarButton(enablePopup) {
  return (
    <div>
      <NavBarButton_Button
        onClick={enablePopup}
        icon={PiCallBellLight}
        position="middle"
      />
    </div>
  );
}
