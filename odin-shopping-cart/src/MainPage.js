import { useNavigate } from "react-router-dom";
import BottomBar from "./BottomBar";
import NavBar from "./NavBar";
import './MainPage.css';

function MainPage(props)
{
    const navigate=useNavigate();

    function handleClick(){
        navigate('/products');
    }
    return(
        <div className="container">
            <NavBar/>
            <div className="main">
                <p>Looking for <b>Things</b> to buy?</p>
                <button onClick={handleClick}>Shop Right Now</button>
            </div>
            <BottomBar/>
        </div>
    );
}

export default MainPage;