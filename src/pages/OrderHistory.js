import React, { useEffect, useState } from 'react';

function OrderHistory() {
  const [orders, setOrders] = useState([]);
  useEffect(()=>{
    fetch('http://localhost:5000/orders')
    .then(res=>res.json()) //extract json data
    .then(result=>{
      setOrders(result);
      })
  },[]);

  const removeItem = (id)=>{
    let newItems = [...orders];
    newItems = newItems.filter(x => x.id != id);
    setOrders(newItems);
  }


  return (
    <div>
      <h2>Order History</h2>
      <div>
        {orders.map( (order,index)=>{
          return (
            <div>
              <div className="row " key={index}>
              <div className="col-2 mt-4"><h5>#213{order.id}</h5></div>
                      <div className="col-2 mt-4">
                        <img src={order.image} width="50" alt="item"/>
                      </div>
                      <div className="col mt-4">
                        <p>{order.title}</p>
                        <p className="titleBlue">Qty : 1</p>
                      </div>
                      <div className="col-2 mt-4"><h5>${order.price}</h5></div>
                      <div className="col-2 mt-4"><h5>Delivered</h5></div>
                      <div className="col-1 mt-4 rem"><button className="closebtn" onClick={()=> removeItem(order.id)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                        </svg></button></div>
                      <hr></hr>
                    </div>
            </div>
          )
        })}
      </div>
      {orders.length === 0 && <div>No records found</div>}
    </div>
  )
}

export default OrderHistory;











// import React, { useEffect, useState } from 'react';

// function OrderHistory() {
//   const [orders, setOrders] = useState([]);
//   useEffect(()=>{
//     fetch('http://localhost:5000/orders')
//     .then(res=>res.json()) //extract json data
//     .then(result=>{
//       setOrders(result);
//       })
//   },[]);
//   return (
//     <div>
//       <h2>Order History</h2>
//       <div>
//         {orders.map( (order,index)=>{
//           return (
//             <div>
//               <div>{order.title}</div>
//               <div>{order.price}</div>
//             </div>
//           )
//         })}
//       </div>
//       {orders.length === 0 && <div>No records found</div>}
//     </div>
//   )
// }

// export default OrderHistory;