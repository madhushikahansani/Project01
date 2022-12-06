import React, { useState, useEffect,useContext} from "react";
import {Link, useParams} from "react-router-dom";
import ProductList from "../components/product/ProductList";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

function ProductView(props) {
    const navigate = useNavigate();
    const {id} = useParams();
    const [showBuyNowBtn,setShowBuyNowBtn] = useState(false);
    const [addToCartDisable,setAddToCartDisable] = useState(false);
    const {cartItems,setCartItems} = useContext(CartContext);
    const [productDetail,setProductDetail] = useState({
        id:"",
        image:"",
        title:"",
        price:"",
        discount:"",
        rating:"",
        description:"",
        category:""
    });
    useEffect(()=>{
        fetch(`http://localhost:5000/products/${id}`)
            .then(res=>res.json())
            .then(json=>{
                const result = {
                    ...productDetail,
                    id: json.id,
                    image:json.image,
                    price:json.price,
                    title:json.name,
                    description:json.description,
                    category:json.category
                }
                setProductDetail(result);
                //console.log(obj);
            })
        
    },[])
    const handleAddtoCartBtn =() =>{
        // console.log(productDetail);
        const newCartItems = [...cartItems,productDetail];
        setCartItems(newCartItems);
        setAddToCartDisable(true);
        setShowBuyNowBtn(true);
    }
   const handleBuyNowBtn = () =>{
        navigate('/shopping-cart');
        
   }
    return ( 
        <div>
            <section className="container single-product my-3 pt-3">
            <div className="row mt-5 mb-5">
                <div className="col-lg-5 col-md-12 col-12">
                    <img src={productDetail.image} className="img-fluid w-100 h-50 pb-1 product-view-img"alt="Product"></img>
                    
                    <div className="small-img-group">
                        <div className="small-img-col">
                            <img src={productDetail.image} className="small-img w-100 img-fluid w-50 h-100"></img>
                        </div>
                        <div className="small-img-col">
                            <img src={productDetail.image} className="small-img w-100 img-fluid w-50 h-100"></img>
                        </div>
                        <div className="small-img-col">
                            <img src={productDetail.image} className="small-img w-100 img-fluid w-50 h-100"></img>
                        </div>
                        <div className="small-img-col">
                            <img src={productDetail.image} className="small-img w-100 img-fluid w-50 h-100"></img>
                        </div>
                    </div>
                </div>
               
                <div className="col-lg-6 col-md-12 col-12">
                    <h6>Home / {productDetail.category}</h6>
                    <h3 className="py-2">{productDetail.title}</h3>
                    <h2>${productDetail.price}</h2>
                    <div className="col">
                    <select className="my-3">
                        <option>Select Size</option>
                        <option>XXL</option>
                        <option>XL</option>
                        <option>Large</option>
                        <option>Medium</option>
                        <option>Small</option>
                        <option>XS</option>
                    </select>
                    <input type="number" value="1"></input>
                    <button onClick={handleAddtoCartBtn} className="add-to-cart" disabled={addToCartDisable}>Add to Cart</button>
                    {showBuyNowBtn === true && 
                        <button onClick={handleBuyNowBtn} className="buy-now">Buy Now</button>}
                    </div>
                    <h4 className="mt-4 mb-4">Product Details</h4>
                    <span>{productDetail.description}</span>
                </div>
                <div>
                <ProductList title="Related Products" totalItems="4"/>
                </div>
            </div>
           
            </section>
       
            
        </div>
     );
}

export default ProductView;