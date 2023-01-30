import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { IProduct } from '../../types';
import s from './Product.module.scss';

interface IProductProps {
  product: IProduct;
}

export const Product: FC<IProductProps> = ({ product }) => {
  const navigate = useNavigate();
  return (
    <div className={s.product}>
      <h1>{product.name}</h1>
      {product.colors.map((item) => {
        return (
          <div key={item.id} className={s.product__img}>
            <img
              onClick={() => navigate(`/shirt-details?idProduct=${product.id}&idShirt=${item.id}`)}
              src={`/${item.images[0]}`}
              alt="t-shirt"
            />
          </div>
        );
      })}
    </div>
  );
};
