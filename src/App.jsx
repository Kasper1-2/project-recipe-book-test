import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Navbar from "./components/Nav-Bar/NavBar";
import Footer from "./components/Footer-map/Footer";
import Content from "./components/content/Content";
import CreateRecipePage from "./Pages/CreateRecipePage";

import "./App.css";

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <div className="main-section">
      <Content /> 
         <main>
          <Routes>
            <Route path="/create-recipe" element={<CreateRecipePage/>}></Route>
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
