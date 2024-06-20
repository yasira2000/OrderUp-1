import { useState, useEffect } from "react";

const FilterPopUpMenue = ({
  filterDisplayName,
  filterName,
  isVisible,
  items,
  selectedItem,
  onReset,
  onSubmit,
}) => {
  const [currentSelectedItem, setcurrentSelectedItem] = useState(selectedItem);

  useEffect(() => {
    if (isVisible) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    // Cleanup function to ensure overflow is reset when component unmounts
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isVisible]); // Dependency on isVisible to re-apply effect when visibility changes

  const onItemSelect = (item) => {
    setcurrentSelectedItem(item);
  };
  return (
    <>
      {isVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-end  z-50">
          <div className="bg-white p-4 rounded-t-3xl shadow-lg max-w w-full pb-20">
            <div className="flex flex-col space-y-2">
              {items.map((item) => (
                <label key={item} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    className="form-checkbox"
                    checked={selectedItem === item}
                    onChange={() => onItemSelect(item)}
                  />
                  <span>{item}</span>
                </label>
              ))}
            </div>
            <div className="flex justify-between mt-4">
              <button
                className="bg-gray-200 text-gray-800 rounded px-4 py-2 hover:bg-gray-300"
                onClick={() => onReset}
              >
                Reset
              </button>
              <button
                className="bg-blue-500 text-white rounded px-4 py-2 hover:bg-blue-600"
                onClick={() => onSubmit(filterName, currentSelectedItem)}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FilterPopUpMenue;
