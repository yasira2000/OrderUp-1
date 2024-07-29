const SecondaryNavBarButton = ({
  btnName,
  onClick,
  icon: Icon,
  position,
  isActive,
}) => {
  const roundingClass = {
    left: "rounded-l-3xl",
    right: "rounded-r-3xl",
    middle: "",
  }[position];

  const onButtonClick = () => {
    onClick(btnName);
  };

  return (
    <button
      onClick={onButtonClick}
      className={`p-2 flex-1 flex flex-col items-center justify-center text-xs shadow-md  ${roundingClass} ${
        isActive
          ? "text-customButtonSelectedText bg-customButtonSelected"
          : "text-black bg-white"
      }`}
      style={{
        width: "96px",
        height: isActive ? "69px" : "65px", // Adjust height based on isActive
        transition: "height 0.2s ease-in-out",
      }}
    >
      <Icon className="size-10" style={{ strokeWidth: 1 }} />
    </button>
  );
};

export default SecondaryNavBarButton;
