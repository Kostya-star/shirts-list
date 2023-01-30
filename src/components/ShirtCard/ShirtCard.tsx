import { FC, useState, MouseEvent } from 'react';
import { IProductColor } from 'types';
import s from './ShirtCard.module.scss';

interface IShirtCardProps {
  shirt: IProductColor;
}

interface ISize {
  id: number;
  label: string;
  number: number;
}

const sizes = [
  { id: 1, label: 'XS', number: 44 },
  { id: 2, label: 'S', number: 46 },
  { id: 3, label: 'M', number: 48 },
  { id: 4, label: 'L', number: 50 },
  { id: 5, label: 'XL', number: 52 },
];

export const ShirtCard: FC<IShirtCardProps> = ({ shirt }) => {
  const [selectedSize, setSelectedSize] = useState<number | null>(null);

  // const onSelectSize = (index: number) => {
  //   console.log(index);
  // };
  return (
    <div className={s.shirt}>
      <p>
        {shirt.images.map((img) => (
          <img key={img} src={`/${img}`} alt="" />
        ))}
      </p>
      <span>{shirt.name}</span>
      <p>{shirt.description}</p>
      <span>Price: {shirt.price} руб</span>
      <ul>
        {sizes.map((size, index) => (
          <li
            className={[
              shirt.sizes.includes(size.id) ? `${s.opened}` : `${s.closed}`,
              // selectedSize === index && `${s.active}`
            ].join('')}
            key={index}
            onClick={() => setSelectedSize(index)}
          >
            {sizes[index].label}
          </li>
        ))}
      </ul>
    </div>
  );
};
