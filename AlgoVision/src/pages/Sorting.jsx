import React from "react";
import { Link } from "react-router-dom";

const Sorting = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="bg-gray-900 text-white flex flex-col items-center justify-center p-10 w-[80%] h-[80%] rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-6">Sorting Algorithms</h1>

        <p className="text-lg mb-8 text-center max-w-2xl">
          Sorting algorithms arrange elements in a particular order (ascending or descending).
          Explore Quick Sort, Merge Sort, Bubble Sort, and Selection Sort visualizations.
        </p>

        <div className="flex flex-wrap justify-center gap-6">
          <Link to="/sorting/quicksort" className="bg-red-500 px-6 py-3 rounded-md shadow-lg hover:bg-red-600">
            Quick Sort
          </Link>
          <Link to="/sorting/mergesort" className="bg-yellow-500 px-6 py-3 rounded-md shadow-lg hover:bg-yellow-600">
            Merge Sort
          </Link>
          <Link to="/sorting/bubblesort" className="bg-blue-500 px-6 py-3 rounded-md shadow-lg hover:bg-blue-600">
            Bubble Sort
          </Link>
          <Link to="/sorting/selectionsort" className="bg-green-500 px-6 py-3 rounded-md shadow-lg hover:bg-green-600">
            Selection Sort
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sorting;
