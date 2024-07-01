import { ProductPrimitives } from '../domain/Product';

export class CreateProductQuery {
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
