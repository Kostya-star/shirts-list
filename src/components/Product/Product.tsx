import { FC } from 'react';
import { IProduct } from '../../types';
import s from './Product.module.scss';
import img from '../../assets/images/1/black_back.png'

interface IProductProps {
  product: IProduct;
}

export const Product: FC<IProductProps> = ({ product }) => {
  console.log(product);

  return (
    <div className={s.product}>
      {product.name}
      {product.colors.map((item) => {
        console.log(item.images);
        
        return (
          <div key={item.id}>
            <img src={item.images} alt="" />
          </div>
        );
      })}
    </div>
  );
};
