import React, {useState,useEffect} from 'react';
import ProductCard from '../product/ProductCard';


function ProductList(props) {
    const [productList,setProductList] = useState([]);
    useEffect(()=>{
      fetch('https://fakestoreapi.com/products')
          .then(res=>res.json()) //extract json data
          .then(result=>{
            //   setProductList(result);
            //   console.log(result);
            const filteredResult = [];
                for(let i=0; i<result.length; i++){
                    if(i<props.totalItems){
                        filteredResult.push(result[i])
                    }
                }
                setProductList(filteredResult); 
            })
    },[])
  return (
    <div>
        <h2>{props.title}</h2>
         <div className='row'>
         {
        productList.map((item,index) =>{
            return(
                <ProductCard key={index}
                            id={item.id}
                            image={item.image} 
                            title={item.title} 
                            price={item.price}  
                            discount={item.discount}
                            rating={item.rating.rate}
                />
            )
        })
    }
    </div>
    </div>

  )
}
export default ProductList;