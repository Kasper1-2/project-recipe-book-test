import "./SideBarItem.css"; 
import { Link } from "react-router-dom";

function SideBarItem(props) {
    return (
        <div className="sidebar-menu-item active">
            <span>{props.name}</span>
        </div>
    )
}


export default SideBarItem;