import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Navbar from "./components/Nav-Bar/NavBar";
import Footer from "./components/Footer-map/Footer";
import SideBar from "./components/Side-Bar/SideBar";
import Content from "./components/content/Content";
import CreateRecipePage from "./Pages/CreateRecipePage";

import "./App.css";
import HomePage from "./Pages/HomePage";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <div className="main-section">
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route
                path="/create-recipe"
                element={<CreateRecipePage />}
              ></Route>
            </Routes>
          </main>
        </div>
        <div className="footer">
          <Footer />
        </div>
      </Router>
    </>
  );
}
export default App;
