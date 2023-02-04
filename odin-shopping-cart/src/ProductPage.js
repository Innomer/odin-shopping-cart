import BottomBar from "./BottomBar";
import NavBar from "./NavBar";
import Product from "./Product";

function ProductPage(){
    var productList=[{name:"Backpack",price:19.99},{name:"Men's Casual TShirt",price:50.99},{name:"Men's Cotton Jacket",price:59.99},{name:"Women's Rain Jacket (Long)",price:39.99}];
    return(
        <div>
            <NavBar/>
            <div>
                <div>
                    {productList.map(product=>{
                        return(
                            <Product name={product.name} price={product.price} />
                        )
                    })}
                </div>
            </div>
            <BottomBar/>
        </div>
    );
}

export default ProductPage;