import { ProductId } from '@/product/domain/ProductId';

export class Product {
  private constructor(
    readonly id: ProductId,
    readonly title: string,
    readonly description: string,
    readonly price: number,
    readonly imageUrl: string[]
  ) {}

  static create({
    id,
    title,
    description,
    price,
    imageUrl
  }: {
    id: ProductId;
    title: string;
    description: string;
    price: number;
    imageUrl: string[];
  }): Product {
    return new Product(id, title, description, price, imageUrl);
  }
}
