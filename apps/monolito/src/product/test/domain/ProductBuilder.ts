import { Product } from '@/product/domain/Product';

import { Builder } from './Builder';

export class ProductBuilder implements Builder<Product> {
  private productId: string = '';
  private productTitle: string = '';
  private productDescription: string = '';
  private productPrice: number = 0;
  private productImageUrl: string[] = [];

  withId(id: string): ProductBuilder {
    this.productId = id;
    return this;
  }

  withTitle(title: string): ProductBuilder {
    this.productTitle = title;
    return this;
  }

  withDescription(description: string): ProductBuilder {
    this.productDescription = description;
    return this;
  }

  withPrice(price: number): ProductBuilder {
    this.productPrice = price;
    return this;
  }

  withImageUrl(imageUrl: string[]): ProductBuilder {
    this.productImageUrl = imageUrl;
    return this;
  }

  build(): Product {
    return Product.create({
      id: this.productId,
      title: this.productTitle,
      description: this.productDescription,
      price: this.productPrice,
      imageUrl: this.productImageUrl
    });
  }

  static withValidProduct(): ProductBuilder {
    return new ProductBuilder()
      .withId('d243zsvvqdZd0mTd')
      .withTitle('Product Valid Title')
      .withDescription('This is a valid description')
      .withPrice(100)
      .withImageUrl(['https://example.com/image.jpg']);
  }
}
