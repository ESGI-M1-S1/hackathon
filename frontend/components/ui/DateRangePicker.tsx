import React from "react";

const RangeDatePicker = ({ startDate, endDate, onChange }) => {
  const handleStartDateChange = (e) => {
    const start = new Date(e.target.value);
    const updatedRange = {
      selection: {
        startDate: start,
        endDate,
      },
    };
    onChange(updatedRange);
  };

  const handleEndDateChange = (e) => {
    const end = new Date(e.target.value);
    const updatedRange = {
      selection: {
        startDate,
        endDate: end,
      },
    };
    onChange(updatedRange);
  };

  return (
    <div date-rangepicker className="items-center">
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
          </svg>
        </div>
        <input
          name="start"
          type="date"
          value={startDate.toISOString().split("T")[0]}
          onChange={handleStartDateChange}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-whiteCustom dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Select date start"
          style={{
            backgroundColor: "#050505",
            border: "1px solid #AD6F3D",
            color: "#F1ECE9",
          }}
        />
      </div>
      <label
        htmlFor="dateRange"
        className="block text-sm font-medium  my-2"
        style={{ color: "#F1ECE9" }}
      >
        Jusqu'à
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
          </svg>
        </div>
        <input
          name="end"
          type="date"
          value={endDate.toISOString().split("T")[0]}
          onChange={handleEndDateChange}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-whiteCustom dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Select date end"
          style={{
            backgroundColor: "#050505",
            border: "1px solid #AD6F3D",
            color: "#F1ECE9",
          }}
        />
      </div>
    </div>
  );
};

export default RangeDatePicker;
