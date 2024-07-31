// Assuming you have a way to determine if the button should be considered "active"
// For demonstration, let's add an `isActive` prop to NavBarButton_Button

const NavBarButton_Button = ({ onClick, icon: Icon, position, isActive }) => {
  const roundingClass = {
    left: "rounded-tl-3xl",
    right: "rounded-tr-3xl",
    middle: "",
  }[position];

  return (
    <button
      onClick={onClick}
      className={`p-2 flex-1 flex flex-col items-center justify-center text-xs ${roundingClass} ${
        isActive
          ? "text-customButtonSelectedText bg-customButtonSelected"
          : "text-black bg-white"
      }`}
      style={{
        width: "96px",
        height: isActive ? "69px" : "65px", // Adjust height based on isActive
        transition: "height 0.2s ease-in-out",
        boxShadow:
          "0 -4px 9px -1px rgba(0, 0, 0, 0.1), 0 -2px 10px -1px rgba(0, 0, 0, 0.06)",
      }}
    >
      <Icon className="size-10" style={{ strokeWidth: 1 }} />
    </button>
  );
};

export default NavBarButton_Button;
