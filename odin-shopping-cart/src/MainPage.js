import { useNavigate } from "react-router-dom";
import BottomBar from "./BottomBar";
import NavBar from "./NavBar";

function MainPage()
{
    const navigate=useNavigate();

    function handleClick(){
        navigate('/products');
    }
    return(
        <div>
            <NavBar/>
            <div>
                <p>Looking for Houses to buy?</p>
                <button onClick={handleClick}>Shop Right Now</button>
            </div>
            <BottomBar/>
        </div>
    );
}

export default MainPage;