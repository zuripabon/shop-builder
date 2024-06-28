import { ProductPrimitives } from '../domain/Product';

import { UseCaseQuery } from './UseCase';

export class CreateProductQuery implements UseCaseQuery<ProductPrimitives> {
  constructor(
    readonly id: string,
    readonly title: string,
    readonly description: string,
    readonly price: number,
    readonly imageUrl: string[]
  ) {}

  get data(): ProductPrimitives {
    return {
      id: this.id,
      title: this.title,
      description: this.description,
      price: this.price,
      imageUrl: this.imageUrl
    };
  }
}
