import React, { useState } from "react";
import "./TernarySearch.css"; // Import for additional styling

const TernarySearch = () => {
  const [array, setArray] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [low, setLow] = useState(null);
  const [high, setHigh] = useState(null);
  const [mid1, setMid1] = useState(null);
  const [mid2, setMid2] = useState(null);
  const [foundIndex, setFoundIndex] = useState(null);
  const [isSearching, setIsSearching] = useState(false);
  const [iterations, setIterations] = useState([]);

  const handleArrayChange = (e) => {
    let inputArray = e.target.value.split(",").map(Number);
    inputArray = inputArray.sort((a, b) => a - b); // Sorting for Ternary Search
    setArray(inputArray);
    resetSearch();
  };

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };

  const resetSearch = () => {
    setLow(null);
    setHigh(null);
    setMid1(null);
    setMid2(null);
    setFoundIndex(null);
    setIterations([]);
  };

  const ternarySearch = async () => {
    if (!array.length || searchValue === "") return;

    setIsSearching(true); // Set searching state first
    resetSearch(); // Reset only other states, not isSearching

    let target = parseInt(searchValue);
    let lowIndex = 0;
    let highIndex = array.length - 1;

    while (lowIndex <= highIndex) {
      let mid1Index = lowIndex + Math.floor((highIndex - lowIndex) / 3);
      let mid2Index = highIndex - Math.floor((highIndex - lowIndex) / 3);

      setLow(lowIndex);
      setHigh(highIndex);
      setMid1(mid1Index);
      setMid2(mid2Index);
      setIterations((prev) => [...prev, mid1Index, mid2Index]);

      await new Promise((resolve) => setTimeout(resolve, 700)); // Delay for visualization

      if (array[mid1Index] === target) {
        setFoundIndex(mid1Index);
        setIsSearching(false);
        return;
      } else if (array[mid2Index] === target) {
        setFoundIndex(mid2Index);
        setIsSearching(false);
        return;
      }

      if (target < array[mid1Index]) {
        highIndex = mid1Index - 1;
      } else if (target > array[mid2Index]) {
        lowIndex = mid2Index + 1;
      } else {
        lowIndex = mid1Index + 1;
        highIndex = mid2Index - 1;
      }
    }

    setFoundIndex(null); // Ensure foundIndex is null if not found
    setIsSearching(false);
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="bg-gray-900 text-white flex flex-col items-center justify-center p-6 w-[80%] h-[80%] rounded-lg shadow-lg">
        <h1 className="text-xl font-bold mb-4">Ternary Search</h1>

        {/* Input Fields */}
        <div className="flex flex-col items-center space-y-3">
          <input
            type="text"
            placeholder="Enter sorted numbers (e.g. 1,2,3,4,5)"
            className="p-2 border border-gray-300 rounded w-[135%] text-black"
            onChange={handleArrayChange}
          />
          <input
            type="number"
            placeholder="Search Number"
            className="p-2 border border-gray-300 rounded w-34 text-black"
            onChange={handleSearchChange}
          />
          <button
            onClick={ternarySearch}
            disabled={isSearching}
            className={`py-2 px-4 rounded text-white transition ${
              isSearching ? "bg-gray-500 cursor-not-allowed" : "bg-green-500 hover:bg-green-600"
            }`}
          >
            {isSearching ? "Searching..." : "Start Search"}
          </button>
        </div>

        {/* Array Visualization */}
        <div className="flex flex-wrap justify-center mt-6 space-x-2">
          {array.map((num, index) => (
            <div
              key={index}
              className={`array-item ${
                foundIndex === index
                  ? "bg-green-500 text-white"
                  : mid1 === index || mid2 === index
                  ? "bg-blue-500 text-white"
                  : iterations.includes(index)
                  ? "bg-red-500 text-white"
                  : "bg-white text-black"
              }`}
            >
              {num}
            </div>
          ))}
        </div>

        {/* Iteration Info */}
        <div className="mt-4 text-sm">
          {isSearching ? (
            <p className="text-blue-300">Searching...</p>
          ) : foundIndex !== null ? (
            <p className="text-green-400">Element found at index {foundIndex}</p>
          ) : iterations.length > 0 ? (
            <p className="text-red-400">Element not found</p>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default TernarySearch;
