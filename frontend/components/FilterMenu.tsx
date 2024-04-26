import React, { useState } from "react";
import DateRangePicker from "@/components/ui/DateRangePicker";

const FilterMenu = ({ onFilterChange }) => {
  const [filters, setFilters] = useState({
    locations: [],
    participants: "",
    dateRange: {
      startDate: new Date(),
      endDate: new Date(),
    },
    tags: [],
    duration: "",
  });

  const durationOptions = [
    { label: "1h à 2h", value: "1h-2h" },
    { label: "2h à 3h", value: "2h-3h" },
    { label: "3h+", value: "3h+" },
  ];

  const tagList = [
    "Vin blanc",
    "Rosé",
    "Charcuterie",
    "Fromage",
    "Vin rouge",
    "Dégustation",
  ];
  const locations = ["Sciences U", "Idrac"];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const updatedFilters = {
      ...filters,
      [name]: value,
    };

    setFilters(updatedFilters);
    onFilterChange(updatedFilters);
  };

  const handleDateRangeChange = (ranges) => {
    const updatedFilters = {
      ...filters,
      dateRange: {
        startDate: ranges.selection.startDate,
        endDate: ranges.selection.endDate,
      },
    };

    setFilters(updatedFilters);
    onFilterChange(updatedFilters);
  };

  const handleTagClick = (selectedTag) => {
    const updatedFilters = {
      ...filters,
      tags: [...filters.tags, selectedTag],
    };

    setFilters(updatedFilters);
    onFilterChange(updatedFilters);
  };

  const handleLocationChange = (e) => {
    const { value } = e.target;
    const updatedFilters = {
      ...filters,
      location: value,
    };

    setFilters(updatedFilters);
    onFilterChange(updatedFilters);
  };

  const handleLocationClick = (selectedLocation) => {
    const updatedFilters = {
      ...filters,
      locations: [...filters.locations, selectedLocation],
      location: "",
    };

    setFilters(updatedFilters);
    onFilterChange(updatedFilters);
  };

  const handleTagRemove = (tagToRemove) => {
    const updatedFilters = {
      ...filters,
      tags: filters.tags.filter((tag) => tag !== tagToRemove),
    };

    setFilters(updatedFilters);
    onFilterChange(updatedFilters);
  };

  const handleLocationRemove = (locationToRemove) => {
    const updatedFilters = {
      ...filters,
      locations: filters.locations.filter(
        (location) => location !== locationToRemove,
      ),
    };

    setFilters(updatedFilters);
    onFilterChange(updatedFilters);
  };

  const handleDurationChange = (e) => {
    const { value } = e.target;
    const updatedFilters = {
      ...filters,
      duration: value,
    };

    setFilters(updatedFilters);
    onFilterChange(updatedFilters);
  };

  const filteredTags = tagList.filter(
    (tag) =>
      !filters.tags.includes(tag) &&
      tag.toLowerCase().includes(filters.tag ? filters.tag.toLowerCase() : ""),
  );
  const filteredLocations = locations.filter(
    (location) =>
      !filters.locations.includes(location) &&
      location
        .toLowerCase()
        .includes(filters.location ? filters.location.toLowerCase() : ""),
  );

  return (
    <div
      className="sticky left-0 top-0 h-screen w-[22rem] p-4 shadow-lg z-20 overflow-y-auto"
      style={{ backgroundColor: "#050505" }}
    >
      <h3 className="mb-4 text-center font-extrabold">Filtres</h3>

      <div className="mb-4">
        <label
          htmlFor="location"
          className="block text-sm font-medium"
          style={{ color: "#F1ECE9" }}
        >
          Localisations :
        </label>
        <div className="relative">
          <input
            id="location"
            name="location"
            value={filters.location}
            onChange={handleLocationChange}
            className="mt-1 p-2 w-full border rounded-md"
            placeholder="@"
            style={{
              backgroundColor: "#050505",
              border: "1px solid #AD6F3D",
              color: "#F1ECE9",
            }}
          />
          {filters.location && (
            <ul className="absolute top-full left-0 right-0 z-10 bg-whiteCustom border rounded-md shadow-md">
              {filteredLocations.map((location, index) => (
                <li
                  key={index}
                  className="cursor-pointer p-2 hover:bg-gray-100"
                  onClick={() => handleLocationClick(location)}
                >
                  {location}
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="flex flex-wrap mt-2">
          {filters.locations.map((location, index) => (
            <div
              key={index}
              className=" text-whiteCustom p-2 rounded-md m-1 flex items-center"
              style={{ backgroundColor: "#AD6F3D" }}
            >
              <span className="mr-2">{location}</span>
              <button
                type="button"
                onClick={() => handleLocationRemove(location)}
                className="text-whiteCustom"
              >
                &#10005;
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-4">
        <label
          htmlFor="participants"
          className="block text-sm font-medium"
          style={{ color: "#F1ECE9" }}
        >
          Places disponibles :
        </label>
        <input
          id="participants"
          name="participants"
          value={filters.participants}
          onChange={handleInputChange}
          className="mt-1 p-2 w-full border rounded-md"
          type="number"
          style={{
            backgroundColor: "#050505",
            border: "1px solid #AD6F3D",
            color: "#F1ECE9",
          }}
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="dateRange"
          className="block text-sm font-medium my-2"
          style={{ color: "#F1ECE9" }}
        >
          À partir de
        </label>
        <DateRangePicker
          startDate={filters.dateRange.startDate}
          endDate={filters.dateRange.endDate}
          onChange={handleDateRangeChange}
          className="mt-1 p-2 w-full border rounded-md"
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="tag"
          className="block text-sm font-medium"
          style={{ color: "#F1ECE9" }}
        >
          Tag :
        </label>
        <div className="relative">
          <input
            id="tag"
            name="tag"
            value={filters.tag}
            onChange={handleInputChange}
            className="mt-1 p-2 w-full border rounded-md"
            placeholder="@"
            style={{
              backgroundColor: "#050505",
              border: "1px solid #AD6F3D",
              color: "#F1ECE9",
            }}
          />
          {filters.tag && (
            <ul className="absolute top-full left-0 right-0 z-10 bg-whiteCustom border rounded-md shadow-md">
              {filteredTags.map((tag, index) => (
                <li
                  key={index}
                  className="cursor-pointer p-2 hover:bg-gray-100"
                  onClick={() => handleTagClick(tag)}
                >
                  {tag}
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="flex flex-wrap mt-2">
          {filters.tags.map((tag, index) => (
            <div
              key={index}
              className=" text-whiteCustom p-2 rounded-md m-1 flex items-center"
              style={{ backgroundColor: "#AD6F3D" }}
            >
              <span className="mr-2">{tag}</span>
              <button
                type="button"
                onClick={() => handleTagRemove(tag)}
                className="text-whiteCustom"
              >
                &#10005;
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterMenu;
