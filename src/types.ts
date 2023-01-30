export interface IProductColor {
  id: number;
  name: string;
  images: string[];
  price: number;
  description: string;
  sizes: number[]
}

export interface IProduct {
  id: number;
  name: string;
  colors: IProductColor[];
}
