import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
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
import ScrollToTop from "./components/ScrollToTop";
import Sorting from "./pages/Sorting";

const MobileWarning = () => {
  return (
    <div className="fixed inset-0 bg-blue-500 text-white flex flex-col items-center justify-center z-50 text-center px-6">
      <h1 className="text-3xl font-bold mb-4">📵 Please open this on a Laptop</h1>
      <p className="text-lg">AlgoVision is built for larger screens.</p>
    </div>
  );
};

const AppContent = () => {
  const location = useLocation();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();

    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const hiddenNavbarRoutes = [
    "/searching",
    "/searching/linearsearching",
    "/searching/binarysearching",
    "/searching/ternarysearching",
    "/sorting",
  ];

  if (isMobile) return <MobileWarning />;

  return (
    <div className="bg-primary w-full overflow-hidden">
      <ScrollToTop />
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
        <Route
          path="/searching/linearsearching"
          element={<LinearSearching />}
        />
        <Route
          path="/searching/binarysearching"
          element={<BinarySearching />}
        />
        <Route
          path="/searching/ternarysearching"
          element={<TernarySearching />}
        />
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
