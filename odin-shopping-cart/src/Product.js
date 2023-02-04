import bp from './images/backpack.png';
import ct from './images/tshirt.png';
import jk from './images/jacket.png';
import wr from './images/rain.png';

export default function Product(props){
    const pics=[bp,ct,jk,wr]
    const addtocart=function(){
        props.ccart([...props.cart,{id:props.id,name:props.name,price:props.price,img:pics[props.id-1]}])
    }
    return(
        <div>
            <img src={pics[props.id-1]} alt={props.name}></img>
            <p>{props.name}</p>
            <p>{props.price}</p>
            <button onClick={addtocart}>Add To Cart</button>
        </div>
    );
}