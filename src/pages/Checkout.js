import React,{useEffect, useState,useContext} from "react";
import { CartContext } from "../context/CartContext";
import paypal from './paypal.png';
import {connect} from 'react-redux';
import { MDBIcon } from 'mdb-react-ui-kit';


function Checkout(props) {
 
  // const {cartItems,setCartItems} = useContext(CartContext);
  const [items,setItems] = useState(props.cartData);
  
  const [subtotalPrice,setSubTotalPrice] =useState(0);
  const [discountPrice,setDiscountPrice] = useState(0);
  const [totalPrice,setTotalPrice] = useState(0);

  const discountPercent = 10;

  const calculatePrices = (items)=>{
    setItems(items);
    let  sum = 0;
    for(const row of items){
      sum = sum + row.price; 
    }
    setSubTotalPrice(sum);
    let discountAmount = sum/100 * discountPercent;
    setDiscountPrice(discountAmount);
    let totalAmount = sum - discountAmount ;
    setTotalPrice(totalAmount);
    
  }
 useEffect(()=>{
      calculatePrices(items);
 },[])

 const removeItem = (id)=>{
  let newItems = [...items];
  newItems = newItems.filter(x => x.id != id);
  calculatePrices(newItems);
  // setCartItems(newItems);
}

return(
    <div>
        <div className="container">
          <div className="row">
            <div className="col">
              <div>
                <h6>Special Offer</h6>
                <p> Free Shipping on orders over $100</p>
              </div>
              <div>
                <h2>Shopping Cart</h2>
                <p>Store/Shopping Cart</p>
                {
                  items.map((row,index)=>{  
                   
                    return(
                      <div className="row" key={index}>
                      <div className="col-2">
                        <img src={row.image} width="50" alt="item"/>
                      </div>
                      <div className="col">
                        <p>{row.title}</p>
                        <p className="titleBlue">Qty : 1</p>
                      </div>
                      <div className="col-2"><h5>${row.price}</h5></div>
                      <div className="col-1 rem"><button className="closebtn" onClick={()=> removeItem(row.id)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                        </svg></button></div>
                      <hr></hr>
                    </div>
                    )
                  })
                }
              
                <div className="row">
                  <div className="col">
                    <h6>Subtotal</h6>
                  </div>
                  <div className="col-3">
                    <h6>${subtotalPrice}</h6>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <h6>Discount for orders over $10.00(10% off)</h6>
                  </div>
                  <div className="col-3">
                    <h6>-${discountPrice}</h6>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <h4>TOTAL</h4>
                  </div>
                  <div className="col-3">
                    <h6>${totalPrice}</h6>
                  </div>
                </div>
                <p>Have a promo coupon? <span className="titleBlue">Redeem your coupon</span></p>
                <p>Missing a product? <span className="titleBlue">Continue shopping</span></p>

              </div>

            </div>
            <div className="col">
             
              <h2 className="spaceTop">Checkout</h2>
              <p>Enter your email address. This address will be used to send you order status updates.</p>
              <input type="text" placeholder="ex:joe@gmail.com"/>
              <input type="checkbox"/>
                <label> &nbsp;I agree with <span className="titleBlue">Terms & Conditions</span></label>
                <div className="row">
                <div className="col pt-2">
                  <button className="check">Checkout</button>
                  <div><button className="paybtn"><img src={paypal} className="paybtnImg"/> Checkout</button></div>
                </div>
                <div className="col">
                  <i></i>
                  <p><MDBIcon fas icon="lock" />All data is transmitted encripted via a secure TLS connection</p>
                </div>
                </div>
                <div>
                  <h4>Next steps</h4>
                  <hr></hr>
                  <p className="txt-bold">Delivery Options</p>
                  <p>Select how you'll be receving your order</p>
                  <p className="txt-bold">Payment informations</p>
                  <p>Choose a paymant method and enter your payment details</p>
                  <p className="txt-bold">Order confirmation</p>
                  <p>Place your order and recieve a confirmation email.</p>

                </div>
            </div>
          </div>
        </div>
    </div>
  )
}

const mapStateToProps = (state) =>{
  return {
      cartData: state.cart.cartItems
  }
}
export default connect(mapStateToProps)(Checkout);
