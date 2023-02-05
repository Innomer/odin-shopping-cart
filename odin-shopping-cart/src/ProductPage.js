import BottomBar from "./BottomBar";
import NavBar from "./NavBar";
import Product from "./Product";
import './ProductPage.css';

function ProductPage(props){
    var productList=[{id:1,name:"Backpack",price:19.99},{id:2,name:"Men's Casual TShirt",price:50.99},{id:3,name:"Men's Cotton Jacket",price:59.99},{id:4,name:"Women's Rain Jacket (Long)",price:39.99}];
    return(
        <div>
            <NavBar/>
            <div id="productPage">
                <div id="productGrid">
                    {productList.map(product=>{
                        return(
                            <Product id={product.id} name={product.name} price={product.price} cart={props.cart} ccart={props.ccart}/>
                        )
                    })}
                </div>
            </div>
            <BottomBar/>
        </div>
    );
}

export default ProductPage;