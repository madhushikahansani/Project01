import React, { useEffect, useState } from 'react'
import tech from './tech.jpg';

export default function ShoppingCart() {
  const cartItems = [
    {
      image: "https://commerceisdigital.com/wp-content/uploads/2019/12/checkout_zalando-1024x732.png",
      title: "Tiger of Sweeden",
      quantity: 1,
      price: '$150'
    },
    {
      image: "https://commerceisdigital.com/wp-content/uploads/2019/12/checkout_zalando-1024x732.png",
      title: " Adidas Originals",
      quantity: 2,
      price: '$80'
    }
  ]
    const [loading,setLoading] = useState(true);
    useEffect( () =>{
      setTimeout(() => {
       setLoading(false)
      },5000)
    },[])
  return ( 
    <div> 
      {/* <div>
        Your Bag (2 Items)
      </div>
      {cartItems.map((item,index) =>{
        return (
         <div key={index} > 
          <div> {item.title} </div>
         </div>
       )
      })
    } */}
    {/* {loading === true && <div>I am Loading</div>}
    {loading === false && <div>I am Loaded sucussfuly</div>} */}
    <div className='container my-3  '>
      <div className='row '>
        <div className='col-8'>
          <div className="card  py-3 px-5">
          <div className='row py-3'>
            <h2>Your Bag (2 items)</h2>
            </div>
            <div className='row'>
              <div className='col-4'>
                <img src={tech}  alt="yourItem" className="yourCartImg" />
              </div>
              
                <div className='col-6'>
                <h4>Tiger of Sweden</h4>
                <p>CRANDALL - Short coat- light ink</p>
                <p>Color : Blue</p>
                <p>Size: 40R</p>
                  <div className='row'>
                  <div className='col-4'>
                  <a href='#'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
                    <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>
                  </svg> Remove</a>
                  </div>
                  <div className='col'>
                  <a href='#'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
                  <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
                  </svg> Move to Wishlist</a>
                  </div>
                  </div>
              </div>
              <div className='col-2'>
                <div className='row'>
                <select>
                  <option selected>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
                <p className='leftItems'>(2 left)</p>
                <p className='priceshow'>$264.99 <span className='priceshow-alignLeft'>  $158.99</span></p>
                <p className='URsavings'>You save 40%</p>
              </div>
              </div>
            </div>
              
        </div>
          </div>
          <div className='col-3'>
            <div className='row'>
              <div className="card  p-3">
              <h2>Total</h2>
              <h5>Subtotal <span className='alignLeft'>$188.98</span></h5>
              <h5>Delivery <span className='alignLeft'>Free</span></h5>
              <h5>Total (VAT included) <span className='alignLeft'>$188.98</span></h5>
              <button className='checkoutBTN'>GO TO CHECKOUT</button>
              </div>
            
            </div>
            <div className='row'>
              <div className="card p-3">
              <select>
                <option selected>Add a Voucher (Optional)</option>
              </select>
              </div>
            
            </div>
          </div>
        

      </div>
    </div>
    </div>
  )
}


groceryList[0].item

const [{}] = groceryList;


company.locations[0]
const {locations:[sing]}= company

const [{item}]= groceryList