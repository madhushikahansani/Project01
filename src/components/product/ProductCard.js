import React,{useState, useEffect, useContext} from "react";
import {Link} from "react-router-dom";
// import { CartContext } from "../../context/CartContext";
import {connect} from 'react-redux';

 function ProductCard(props) {
  const [addToCartDisable,setAddToCartDisable] = useState(false);
  // const {cartItems,setCartItems} = useContext(CartContext);
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

useEffect( () =>{
  const result = {
    ...productDetail,
    id: props.id,
    image:props.image,
    price:props.price,
    title:props.title,
    description:props.description,
    category:props.category
}
  setProductDetail(result);
},[])

  const handleBtnClick = () => {
        props.dispatch({
          type:'ADD_CART_ITEMS',
          payload: productDetail
        })
        setAddToCartDisable(true);

  }

  return (
    
      <div className="card-product">
       <Link to={`/product-view/${props.id}`}><img src={props.image} className="product-im"/></Link> 
          <div className="container-product ${props.id}">
            <div>{props.title}</div>
            <div className="pri">${props.price}</div>
            <div className="disc">{props.discount}</div>
            <div className="rate">{props.rating}</div>
            <div><button onClick={handleBtnClick} className="add-to-cart" disabled={addToCartDisable}>Add to Cart</button></div>
          </div>
      </div>
    

  )
}
const mapStateToProps = (state) =>{
  return {
      cartData: state.cart.cartItems
  }
}
export default connect(mapStateToProps)(ProductCard);