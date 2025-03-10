import React from "react";
import { Link } from "react-router-dom";

const Searching = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="bg-gray-900 text-white flex flex-col items-center justify-center p-10 w-[80%] h-[80%] rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-6">Searching Algorithms</h1>

        <p className="text-lg mb-8 text-center max-w-2xl">
          Searching algorithms are used to find elements in a given dataset. Here, we explore three types: 
          Linear Search, Binary Search, and Ternary Search.
        </p>

        <div className="flex flex-wrap justify-center gap-6">
          <Link to="/searching/linearsearching" className="bg-blue-500 px-6 py-3 rounded-md shadow-lg hover:bg-blue-600">
            Linear Search
          </Link>
          <Link to="/searching/binarysearching" className="bg-green-500 px-6 py-3 rounded-md shadow-lg hover:bg-green-600">
            Binary Search
          </Link>
          <Link to="/searching/ternarysearching" className="bg-purple-500 px-6 py-3 rounded-md shadow-lg hover:bg-purple-600">
            Ternary Search
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Searching;
