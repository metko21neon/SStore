export class Product {
  constructor(
    public id?: number,
    public name?: string,
    public category?: string,
    public description?: string,
    public price?: number) { }
}

export interface IProduct {
  id?: number;
  name: string;
  category: string;
  description: string;
  price: number;
}
