import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './NavBar.css';

export default function NavBar() {

    const [cur, setCur] = useState("");
    const navigate = useNavigate();
    function handleClick(event) {
        var name = event.target.getAttribute("name").toLowerCase()
        setCur(name);
        navigate(`/${name}`);
    }

    return (
        <nav>
            <div><p>CHEAP THRIFTS</p></div>
            <div id="buttons">
            <p onClick={handleClick} name="odin-shopping-cart">Home</p>
            <p onClick={handleClick} name="odin-shopping-cart/products">Products</p>
            <p onClick={handleClick} name="odin-shopping-cart/contact">Contact</p>
            <p onClick={handleClick} name="odin-shopping-cart/cart">Cart</p>
            </div>
        </nav>
    );
}