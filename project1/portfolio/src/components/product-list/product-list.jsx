import "./product-list.css";
import Product from "../product/product";

const ProductList = () => {
    return(
        <div className="pl">
           <div className="pl-texts">
               <h1 className="pl-title">Construct and Build</h1>
               <p className="pl-desc">
               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
               Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
               Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
               Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
               </p>
           </div>
           <div className="pl-list">
               <Product/>
               <Product/>
               <Product/>
               <Product/>
               <Product/>
           </div>
        </div>
    )
}

export default ProductList;