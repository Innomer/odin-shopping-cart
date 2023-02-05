import bp from './images/backpack.png';
import ct from './images/tshirt.png';
import jk from './images/jacket.png';
import wr from './images/rain.png';
import './Product.css';
export default function Product(props){
    const pics=[bp,ct,jk,wr]
    const addtocart=function(){
        props.ccart([...props.cart,{id:props.id,name:props.name,price:props.price,img:pics[props.id-1]}])
    }
    return(
        <div className='product'>
            <img src={pics[props.id-1]} alt={props.name}></img>
            <p id='pname'>{props.name}</p>
            <p id='pprice'>${props.price}</p>
            <button onClick={addtocart} id='aTC'>Add To Cart</button>
        </div>
    );
}