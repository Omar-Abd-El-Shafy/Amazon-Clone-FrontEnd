


// import axios from 'axios';
// import React, { useState, useReducer } from 'react';
// import { useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import axiosInstance from '../network/axiosInstansce';
// // import data from '../data';

// function Home() {
//   const [products, setproduct] = useState([]);
//    useEffect(() => {
//   axiosInstance
//     .get('/products')
//     .then( ( res ) =>
//     {
      
//       setproduct(res.data);
//       console.log(54646)
//     })
//     .catch((err) => {
//       console.log(err);
//     });
   
      
  
//   },[])
  
//   return (
//     <>
//       <h1>Feather Products</h1>
//       <div className="products">
//         {products.map((product) => (
//           <div className="product" key={product.id}>
//             <Link to={`/product/${product.id}`}>
//               <img src={product.image} alt={product.title} />
//             </Link>
//             <div className="product-info">
//               <Link to={`/product/${product.id}`}>
//                 <p>{product.title}</p>
//               </Link>
//               <p>
//                 <strong>${product.price}</strong>
//               </p>
//               <p>Rating{product.rating.rate}</p>
//               <p>in stock {product.rating.count}</p>
//               <button> Add to cart </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </>
//   );
// }

// export default Home;
