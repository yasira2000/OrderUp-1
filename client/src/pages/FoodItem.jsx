import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import main_course from "../../assets/Images/main-course.png";
import FoodItemStat from "../components/FoodItemStat";
import { MainButton } from "../components/MainButton";
import foodImage3 from "../../assets/Images/food03.jpg";
import TextInput from "../components/InputComps/TextInput";
import ButtonSelectionTickGrp from "../components/InputComps/ButtonSelectionTickGrp";
import ButtonSelectionDotGrp from "../components/InputComps/ButtonSelectionDotGrp";

// Initialize mock adapter and mock any dynamic ID request
const mock = new MockAdapter(axios);
mock.onGet(/\/api\/food-items\/\d+/).reply(200, {
  food_item_id: 123,
  image_loc: foodImage3,
  food_item_name: "sdccdc",
  price: 939,
  description: "loren ipsummmspkd d kksksk jdhfjfk fhn ",
  ingredients: ["dcsd", "sdcc", "sdcsd"],
  rating: 2,
  time: "00:08:00",
  other_details: {
    type: "burger",
    dietry: ["Vegan", "Vegetarian"],
    cuisine: "Chinese",
    spiciness: "🌶️🌶️🌶️",
    culinary: "Fried",
  },
  addons: [
    {
      addon_id: 1,
      type: "multi_select",
      sub_topic: "Extra items",
      name: "add extra cheese",
      price: 93,
    },
    {
      addon_id: 2,
      type: "multi_select",
      sub_topic: "Extra items",
      name: "add extra sausage",
      price: 9,
    },
    {
      addon_id: 3,
      type: "single_select",
      sub_topic: "serve",
      name: "Split the burger",
      price: 3,
    },
    {
      addon_id: 4,
      type: "single_select",
      sub_topic: "serve",
      name: "serve hot",
      price: 3,
    },
    {
      addon_id: 5,
      type: "count_select",
      sub_topic: "number of",
      name: "number of ham slices",
      price: 9,
    },
    {
      addon_id: 6,
      type: "count_select",
      sub_topic: "number of",
      name: "number of hairs",
      price: 7,
    },
    {
      addon_id: 7,
      type: "single_select",
      sub_topic: "serve 2",
      name: "Split the burger",
      price: 3,
    },
    {
      addon_id: 8,
      type: "single_select",
      sub_topic: "serve 2",
      name: "serve hot",
      price: 3,
    },
  ],
});

const FoodItem = () => {
  const [foodData, setFoodData] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [addonVals, setAddonVals] = useState({});
  const [note, setNote] = useState("");

  const location = useLocation();

  // Function to get query parameters
  const getQueryParam = (param) => {
    const searchParams = new URLSearchParams(location.search);
    return searchParams.get(param);
  };

  useEffect(() => {
    const food_item_id = getQueryParam("food_item_id");
    if (food_item_id) {
      axios
        .get(`/api/food-items/${food_item_id}`)
        .then((response) => {
          setFoodData(response.data);

          // Initialize addonVals state based on fetched data
          const initialAddonVals = response.data.addons.reduce((acc, addon) => {
            if (!acc[addon.sub_topic]) {
              acc[addon.sub_topic] = {};
            }
            acc[addon.sub_topic][addon.name] = 0; // initially set all addon values to 0 (not selected)
            return acc;
          }, {});
          setAddonVals(initialAddonVals);
        })
        .catch((error) => {
          console.error("There was an error fetching the food data!", error);
        });
    }
  }, [location.search]);

  if (!foodData) {
    return <div>Loading...</div>;
  }

  // Render dynamic properties of other_details
  const renderOtherDetails = () => {
    return Object.entries(foodData.other_details).map(([key, value]) => {
      if (Array.isArray(value)) {
        value = value.join(", ");
      }
      return (
        <FoodItemStat
          key={key}
          title={capitalizeFirstLetter(key)}
          value={value}
        />
      );
    });
  };

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  // Function to handle addon selection
  const handleAddonChange = (sub_topic, addonName) => {
    setAddonVals((prevVals) => ({
      ...prevVals,
      [sub_topic]: {
        ...prevVals[sub_topic],
        [addonName]: prevVals[sub_topic][addonName] === 1 ? 0 : 1,
      },
    }));
  };

  // Group addons by sub_topic and type
  const groupAddonsBySubTopicAndType = (addons) => {
    return addons.reduce((groups, addon) => {
      const { sub_topic, type } = addon;
      if (!groups[sub_topic]) {
        groups[sub_topic] = {};
      }
      if (!groups[sub_topic][type]) {
        groups[sub_topic][type] = [];
      }
      groups[sub_topic][type].push(addon);
      return groups;
    }, {});
  };

  const groupedAddons = groupAddonsBySubTopicAndType(foodData.addons);

  const noteUpdate = (note) => {
    setNote(note.target.value);
  };

  // Render grouped addons
  const renderGroupedAddons = () => {
    return Object.entries(groupedAddons).map(([sub_topic, types]) => (
      <div key={sub_topic}>
        <h2 className="font-inter text-2xl text-black text-opacity-70">
          {sub_topic}
        </h2>
        {Object.entries(types).map(([type, addons]) => (
          <div key={type}>
            <h3 className="font-inter text-xl text-black text-opacity-60">
              {type}
            </h3>
            {type === "multi_select" && (
              <ButtonSelectionTickGrp
                items={addons.map((addon) => addon.name)}
                onItemSelect={(selectedItems) => {
                  // set the addon value to 1 for the selected item and 0 for the rest
                  addons.forEach((addon) => {
                    onAddonSelect(
                      sub_topic,
                      type,
                      addon.name,
                      selectedItems.includes(addon.name) ? 1 : 0
                    );
                  });
                }}
                // create a list of selected items by checking the addonVals value of each addon under this sub_topic
                currentSelectedItem={addons
                  .filter((addon) => addonVals[sub_topic][addon.name] === 1)
                  .map((addon) => addon.name)}
              />
            )}
            {type === "single_select" && (
              <ButtonSelectionDotGrp
                items={addons.map((addon) => addon.name)}
                onItemSelect={(selectedItem) => {
                  // set the addon value to 1 for the selected item and 0 for the rest
                  addons.forEach((addon) => {
                    onAddonSelect(
                      sub_topic,
                      type,
                      addon.name,
                      addon.name === selectedItem ? 1 : 0
                    );
                  });
                }}
                currentSelectedItem={
                  addons.find((addon) => addonVals[sub_topic][addon.name] === 1)
                    ?.name
                }
              />
            )}
            {type === "count_select" && (
              <ButtonSelectionDotGrp
                items={addons.map((addon) => addon.name)}
                onItemSelect={(selectedItem) => {
                  // set the addon value to 1 for the selected item and 0 for the rest
                  addons.forEach((addon) => {
                    onAddonSelect(
                      sub_topic,
                      type,
                      addon.name,
                      addon.name === selectedItem ? 1 : 0
                    );
                  });
                }}
                currentSelectedItem={
                  addons.find((addon) => addonVals[sub_topic][addon.name] === 1)
                    ?.name
                }
              />
            )}
          </div>
        ))}
      </div>
    ));
  };

  return (
    <div className="flex flex-col w-full min-h-screen pb-8">
      <div className="flex w-full">
        <img
          src={foodData.image_loc || main_course}
          alt={foodData.food_item_name}
          className="w-full"
        />
      </div>
      <div className="flex flex-col bg-white pr-6 pl-6 pt-6 w-full">
        <h1 className="text-result-heading font-inter">
          {foodData.food_item_name}
        </h1>
        <p className="text-darkGray text-icon-sub-heading text-opacity-60 font-inter">
          {foodData.price} Rs
        </p>
        <p className="text-small-icon-sub-heading mt-3">
          {foodData.description}
        </p>
        <FoodItemStat
          title="Ingredients"
          value={foodData.ingredients.join(", ")}
        />
        <div className={`extra-details ${isOpen ? "open" : ""}`}>
          {renderOtherDetails()}
        </div>
        <div className="flex w-full pb-4 mt-2 justify-center">
          <img
            onClick={() => setIsOpen(!isOpen)}
            className="mt-4 cursor-pointer"
            src={`../../assets/Icons/${isOpen ? "up-arrow" : "down-arrow"}.svg`}
            alt={isOpen ? "Up Arrow" : "Down Arrow"}
          />
        </div>
      </div>
      {/* Selection part
      <div className="flex flex-col w-full mt-2 pr-6 pl-6 pt-6 bg-white">
        {Object.keys(groupedAddons).map((sub_topic) => (
          <div key={sub_topic} className="flex flex-col w-full mb-4">
            <h1 className="text-result-heading ">{sub_topic}</h1>
            {Object.keys(groupedAddons[sub_topic]).map((type) => (
              <div key={type} className="flex flex-col w-full mb-2">
                <h2 className="text-icon-sub-heading">{type}</h2>
                {groupedAddons[sub_topic][type].map((addon, index) => (
                  <div
                    key={index}
                    className="flex flex-row pt-2 pb-2 w-full justify-between"
                  >
                    <div className="flex flex-col">
                      <p className="text-icon-sub-heading ">{addon.name}</p>
                      <p className="text-small-icon-sub-heading text-darkGray">
                        + {addon.price} Rs
                      </p>
                    </div>
                    {addon.type === "multi_select" && (
                      <input
                        className="justify-self-end w-5 accent-customButtonSelected focus:accent-white"
                        type="checkbox"
                        checked={addonVals[sub_topic][addon.name] === 1}
                        onChange={() =>
                          handleAddonChange(sub_topic, addon.name)
                        }
                      />
                    )}
                    {addon.type === "single_select" && (
                      <input
                        className="justify-self-end w-5"
                        type="radio"
                        checked={addonVals[sub_topic][addon.name] === 1}
                        onChange={() =>
                          handleAddonChange(sub_topic, addon.name)
                        }
                      />
                    )}
                    {addon.type === "count_select" && (
                      <input
                        className="justify-self-end w-5"
                        type="number"
                        min="0"
                        value={addonVals[sub_topic][addon.name] || 0}
                        onChange={(e) =>
                          setAddonVals((prevVals) => ({
                            ...prevVals,
                            [sub_topic]: {
                              ...prevVals[sub_topic],
                              [addon.name]: parseInt(e.target.value, 10),
                            },
                          }))
                        }
                      />
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
        ))}
      </div> */}
      {renderGroupedAddons()}
      {/* Note section */}
      <div className="flex flex-col w-full mt-4 pl-6 pr-6 pb-6">
        <h2>Add a note</h2>
        <div className="flex-1 overflow-auto">
          <TextInput
            value={note}
            onChange={noteUpdate}
            placeholder="Write if there is any specific instruction"
            className="m-4"
            inputClassName="text-icon-sub-heading"
            border={true}
            rows={6}
          />
        </div>

        <div className="flex flex-row w-full pt-4 pb-4 justify-between">
          <p>Total Price</p>
          <p>{foodData.price} Rs</p>
        </div>
        <MainButton text="Add to My Orders" onClick={() => {}} />
      </div>
    </div>
  );
};

export default FoodItem;
