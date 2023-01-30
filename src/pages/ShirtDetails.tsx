import axios from 'axios';
import { ShirtCard } from 'components/ShirtCard/ShirtCard';
import qs from 'qs';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { baseRequest } from './../api/baseRequest';
import { IProductColor } from './../types';

export const ShirtDetails = () => {
  const [selectedShirt, setSelectedShirt] = useState<IProductColor[]>([]);
  const location = useLocation();

  useEffect(() => {
    const { idProduct, idShirt } = qs.parse(location.search.substring(1));

    void axios.get(`${baseRequest}?id=${idProduct}`).then(({ data }) => {
      const shirt = data[0].colors.filter(
        (item: IProductColor) => item.id === Number(idShirt),
      );
      setSelectedShirt(shirt);
    });
  }, []);

  return (
    <div className='details'>
      {selectedShirt?.map((shirt) => (
        <ShirtCard key={shirt.id} shirt={shirt}/>
      ))}
    </div>
  );
};
