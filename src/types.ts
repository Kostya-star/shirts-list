export interface IProductColor {
  id: number;
  name: string;
  images: string[];
  price: number;
  decription: string;
  sizes: number[]
}

export interface IProduct {
  id: number;
  name: string;
  colors: IProductColor[];
}
