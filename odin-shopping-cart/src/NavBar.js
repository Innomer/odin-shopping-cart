import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function NavBar(){

    const[cur,setCur]=useState("");
    const navigate=useNavigate();
    function handleClick(event){
        // console.log(event.target.name);  
        var name=event.target.name.toLowerCase()
        setCur(name);
        navigate(`/${name}`);
    }

    return(
        <nav>
            <div><p>NO WAY HOME</p></div>
            <div>
                <button onClick={handleClick} name="">Home</button>
                <button onClick={handleClick} name="products">Products</button>
                <button onClick={handleClick} name="contact">Contact</button>
                <button>Cart</button>
            </div>
        </nav>
    );
}