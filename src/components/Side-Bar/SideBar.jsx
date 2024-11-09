import { Link } from "react-router-dom";
import "./SideBar.css"; 
import SideBarItem from "./SideBarItem";

function SideBar() {
    return (
        <div className="sidebar-container">
            <div className="item-container">
            <SideBarItem name="Recipes"/>
            <Link to="/create-recipe">Create Recipe</Link>
            <SideBarItem name="About Us"/>
            </div>
        </div>
    )
}

export default SideBar;