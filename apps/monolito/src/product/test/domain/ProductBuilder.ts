import { Product } from '@/product/domain/Product';

import { Builder } from './Builder';

export class ProductBuilder implements Builder<Product> {
  private productId: string = '';
  private title: string = '';
  private description: string = '';
  private price: number = 0;
  private imageUrl: string[] = [];

  withId(id: string) {
    this.productId = id;
    return this;
  }

  withTitle(title: string) {
    this.title = title;
    return this;
  }

  withDescription(description: string) {
    this.description = description;
    return this;
  }

  withPrice(price: number) {
    this.price = price;
    return this;
  }

  withImageUrl(imageUrl: string[]) {
    this.imageUrl = imageUrl;
    return this;
  }

  build(): Product {
    return Product.create({
      id: this.productId,
      title: this.title,
      description: this.description,
      price: this.price,
      imageUrl: this.imageUrl
    });
  }

  static withValidProduct(): ProductBuilder {
    return new ProductBuilder()
      .withId('d243zsvvqdZd0mTd') // @todo use nanoid
      .withTitle('Galletas')
      .withDescription('Galletas Ricas de la abuela con pepitas de chocolate')
      .withPrice(100)
      .withImageUrl(['https://via.placeholder.com/150']);
  }
}
