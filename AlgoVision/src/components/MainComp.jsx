import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for internal navigation

// InfoCard Component
const InfoCard = ({ title, description, algorithms, link }) => {
  return (
    <div className="w-1/4 border border-gray-300 rounded-lg p-5 m-5 bg-black shadow-md transition-transform duration-200 transform hover:scale-105">
      <h2 className="text-white font-semibold mb-2">{title}</h2>
      <p className="text-white mb-4">{description}</p>
      <ul className="list-none p-0 mb-4">
        {algorithms.map((algo, index) => (
          <li key={index} className="text-white">
            {index + 1}. {algo}
          </li>
        ))}
      </ul>
      {/* Use Link instead of <a href> for internal navigation */}
      <Link
        to={link} // Internal link (navigates within React app)
        className="inline-block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Explore
      </Link>
    </div>
  );
};

// Main App Component
const App = () => {
  const sortingAlgorithms = ['Quick Sort', 'Merge Sort', 'Bubble Sort', 'Selection Sort'];
  const searchingAlgorithms = ['Binary Search', 'Linear Search', 'Ternary Search'];
  const pathfindingAlgorithms = [
    "Dijkstra's Algorithm",
    'A* Search Algorithm',
    'Breadth-First Search (BFS)',
    'Depth-First Search (DFS)',
    'Bellman-Ford Algorithm',
  ];

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-row justify-center flex-wrap mb-4">
        <InfoCard
          title="Searching Algorithms"
          description="Searching algorithms are techniques for finding specific data within a structure, such as an array or list."
          algorithms={searchingAlgorithms}
          link="/searching" // Internal link
        />
        <InfoCard
          title="Sorting Algorithms"
          description="Sorting algorithms are methods for rearranging a list of items in a specific order, typically ascending or descending."
          algorithms={sortingAlgorithms}
          link="/sorting" // Internal link
        />
      </div>
    </div>
  );
};

export default App;
