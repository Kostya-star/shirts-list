import { useEffect, useState } from 'react';
import axios from 'axios';
import { baseRequest } from '../api/baseRequest';
import { Product } from '../components/Product/Product';
import { IProduct } from '../types';
import '../scss/all.scss';
import t_shirt from 'assets/t_shirt.jpg'
import underShirt from 'assets/undershirt.jpg'



export const ProductList = () => {
  const [products, setProducts] = useState<IProduct[]>([]);

  // const _products = [
  //   {
  //     item: products[0],
  //     img: t_shirt
  //   },
  //   {
  //     item: products[1],
  //     img: underShirt
  //   }
  // ]
  

  useEffect(() => {
    void axios.get(`${baseRequest}`).then((resp) => setProducts(resp.data));
  }, []);

  return (
    <div className="container">
      <div className="products">
        {products?.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};
