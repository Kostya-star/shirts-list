import axios from 'axios';
import { useEffect, useState } from 'react';
import { baseRequest } from '../api/baseRequest';
import { Product } from '../components/Product/Product';
import '../scss/all.scss';
import { IProduct } from '../types';

export const ProductList = () => {
  const [products, setProducts] = useState<IProduct[]>([]);

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
