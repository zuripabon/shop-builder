import { Product, ProductPrimitives } from '../domain/Product';
import { ProductRepository } from '../domain/ProductRepository';

import { CreateProductQuery } from './CreateProductQuery';

import { UseCase } from './UseCase';

export class CreateProductUseCase implements UseCase<ProductPrimitives> {
  // @todo inject repository
  constructor(private productRepository: ProductRepository) {}

  async execute(query: CreateProductQuery): Promise<void> {
    const product = Product.create(query.data);
    this.productRepository.save(product);
  }
}
