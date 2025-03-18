import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import MainComp from "./components/MainComp";
import Page from "./components/Page";
import Searching from "./pages/Searching";
import LinearSearching from "./searching/LinearSearch";
import BinarySearching from "./searching/BinarySearch";
import TernarySearching from "./searching/TernarySearch";
import ScrollToTop from "./components/ScrollToTop"; // Import the ScrollToTop component
import Sorting from "./pages/Sorting";
const AppContent = () => {
  const location = useLocation();

  const hiddenNavbarRoutes = [
    "/searching",
    "/searching/linearsearching",
    "/searching/binarysearching",
    "/searching/ternarysearching",
    "/sorting"
  ];

  return (
    <div className="bg-primary w-full overflow-hidden">
      <ScrollToTop /> {/* Ensures scrolling to top on route change */}
      {!hiddenNavbarRoutes.includes(location.pathname) && <Navbar />}
      
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Hero />
              <Stats />
              <Page />
              <MainComp />
            </div>
          }
        />
        <Route path="/searching" element={<Searching />} />
        <Route path="/searching/linearsearching" element={<LinearSearching />} />
        <Route path="/searching/binarysearching" element={<BinarySearching />} />
        <Route path="/searching/ternarysearching" element={<TernarySearching />} />
        <Route path="/sorting" element={<Sorting />} />
      </Routes>

      <Footer />
    </div>
  );
};

const App = () => (
  <Router>
    <AppContent />
  </Router>
);

export default App;
