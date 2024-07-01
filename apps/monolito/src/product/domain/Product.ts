import { ProductId } from '@/product/domain/ProductId';

import { ProductTitle } from './ProductTitle';
import { ProductDescription } from './ProductDescription';
import { ProductPrice } from './ProductPrice';
import { ProductImageUrl } from './ProductImageUrl';

export type ProductPrimitives = {
  id: string;
  title: string;
  description: string;
  price: number;
  imageUrl: string[];
};

export class Product {
  private constructor(
    readonly id: ProductId,
    readonly title: ProductTitle,
    readonly description: ProductDescription,
    readonly price: ProductPrice,
    readonly imageUrl: ProductImageUrl[]
  ) {}

  toPrimitives(): ProductPrimitives {
    return {
      id: this.id.value,
      title: this.title.value,
      description: this.description.value,
      price: this.price.value,
      imageUrl: this.imageUrl.map((url) => url.value)
    };
  }

  static create({
    id,
    title,
    description,
    price,
    imageUrl
  }: ProductPrimitives): Product {
    return new Product(
      new ProductId(id),
      new ProductTitle(title),
      new ProductDescription(description),
      new ProductPrice(price),
      imageUrl.map((url) => new ProductImageUrl(url))
    );
  }
}
