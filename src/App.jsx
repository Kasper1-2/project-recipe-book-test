// App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Nav-Bar/NavBar";
import Footer from "./components/Footer-map/Footer";
import SideBar from "./components/Side-Bar/SideBar";
import AllRecipesPage from "./pages/AllRecipesPage";
import AboutPage from "./pages/AboutPage";
import ErrorPage from "./pages/ErrorPage";
import RecipeDetailsPage from "./pages/RecipeDetailsPage";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <div className="main-section">
        <SideBar />
        <Routes>
          <Route path="/" element={<AllRecipesPage />} />
          <Route path="/About" element={<AboutPage />} />
          <Route path="*" element={<ErrorPage />} />
          {/* No need to pass `data` prop to RecipeDetailsPage */}
          <Route path="/recipe/:id" element={<RecipeDetailsPage />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
