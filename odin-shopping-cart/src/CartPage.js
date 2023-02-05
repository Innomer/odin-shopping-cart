import BottomBar from "./BottomBar";
import NavBar from "./NavBar";
import bp from './images/backpack.png';
import ct from './images/tshirt.png';
import jk from './images/jacket.png';
import wr from './images/rain.png';
import './CartPage.css';

export default function CartPage(props) {
    const pics = [bp, ct, jk, wr]
    var id;
    const delfromcart=function(event){
        props.ccart(props.cart.filter((item)=>item.id!==parseInt(event.target.name)))
    }
    return (
        <div>
            <NavBar />
            <div className="cartContainer">
                <div className="cart">
                    {props.cart.map((product) => {
                        return (
                            <div className="cartProduct">
                                <img src={pics[product.id - 1]} alt={product.name}></img>
                                <p id='cpname'>{product.name}</p>
                                <p id='cpprice'>${product.price}</p>
                                <button id="cartButton"onClick={delfromcart} name={product.id}>Remove</button>
                            </div>
                        );
                    })}
                </div>
            </div>
            <BottomBar />
        </div>
    );
}