import { Product } from '@/product/domain/Product';
import { CreateProductQuery } from '@/product/application/CreateProductQuery';

import { ProductBuilder } from '../domain/ProductBuilder';
import { Builder } from '../domain/Builder';

export class CreateProductQueryBuilder implements Builder<CreateProductQuery> {
  public product: Product = ProductBuilder.withValidProduct().build();

  withProduct(product: Product) {
    this.product = product;
    return this;
  }

  build(): CreateProductQuery {
    const productPrimitives = this.product.toPrimitives();
    return new CreateProductQuery(
      productPrimitives.id,
      productPrimitives.title,
      productPrimitives.description,
      productPrimitives.price,
      productPrimitives.imageUrl
    );
  }

  static withValidProduct(): CreateProductQueryBuilder {
    return new CreateProductQueryBuilder();
  }

  static withInValidProduct(): CreateProductQueryBuilder {
    const invalidProduct = ProductBuilder.withValidProduct().withId('').build();
    return new CreateProductQueryBuilder().withProduct(invalidProduct);
  }
}
