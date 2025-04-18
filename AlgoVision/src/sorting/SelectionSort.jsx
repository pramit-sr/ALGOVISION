import React, { useState } from "react";
import "./SelectionSort.css";

const SelectionSort = () => {
  const [array, setArray] = useState([]);
  const [isSorting, setIsSorting] = useState(false);
  const [minIndex, setMinIndex] = useState(null);
  const [activeIndices, setActiveIndices] = useState([]);
  const [isSorted, setIsSorted] = useState(false);

  const handleArrayChange = (e) => {
    const inputArray = e.target.value.split(",").map(Number);
    setArray(inputArray);
    resetSort();
  };

  const resetSort = () => {
    setIsSorting(false);
    setMinIndex(null);
    setActiveIndices([]);
    setIsSorted(false);
  };

  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const selectionSort = async (arr) => {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
      let minIdx = i;
      setMinIndex(minIdx);
      setActiveIndices([i]);
      await sleep(600);

      for (let j = i + 1; j < n; j++) {
        setActiveIndices([i, j]);
        await sleep(600);

        if (arr[j] < arr[minIdx]) {
          minIdx = j;
          setMinIndex(minIdx);
        }
      }

      if (minIdx !== i) {
        [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
        setArray([...arr]);
        await sleep(600);
      }
    }
  };

  const startSelectionSort = async () => {
    if (!array.length) return;
    setIsSorting(true);
    setIsSorted(false);
    let arrCopy = [...array];
    await selectionSort(arrCopy);
    setArray([...arrCopy]);
    setActiveIndices([]);
    setMinIndex(null);
    setIsSorting(false);
    setIsSorted(true);
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="bg-gray-900 text-white flex flex-col items-center justify-center p-6 w-[80%] h-[80%] rounded-lg shadow-lg">
        <h1 className="text-xl font-bold mb-4">Selection Sort</h1>

        {/* Inputs */}
        <div className="flex flex-col items-center space-y-3">
          <input
            type="text"
            placeholder="Enter numbers (e.g. 5,3,8,4)"
            className="p-2 border border-gray-300 rounded w-[135%] text-black"
            onChange={handleArrayChange}
          />
          <button
            onClick={startSelectionSort}
            disabled={isSorting}
            className={`py-2 px-4 rounded text-white transition ${
              isSorting
                ? "bg-gray-500 cursor-not-allowed"
                : "bg-red-500 hover:bg-red-600"
            }`}
          >
            {isSorting ? "Sorting..." : "Start Selection Sort"}
          </button>
        </div>

        {/* Array Visualization */}
        <div className="flex flex-wrap justify-center mt-6 space-x-2">
          {array.map((num, index) => (
            <div
              key={index}
              className={`array-item ${
                isSorted
                  ? "bg-green-500 text-white"
                  : index === minIndex
                  ? "bg-yellow-500 text-white"
                  : activeIndices.includes(index)
                  ? "bg-blue-500 text-white"
                  : "bg-white text-black"
              }`}
            >
              {num}
            </div>
          ))}
        </div>

        {/* Info Message */}
        <div className="mt-4 text-sm">
          {isSorting && (
            <p className="text-red-300">Sorting in progress using Selection Sort...</p>
          )}
          {isSorted && !isSorting && (
            <p className="text-green-400 font-semibold">✅ Sorting successful!</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SelectionSort;
