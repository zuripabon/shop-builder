import { Product } from '../domain/Product';
import { ProductId } from '../domain/ProductId';
import { ProductRepository } from '../domain/ProductRepository';

import { UseCase } from './UseCase';

export class CreateProductUseCase implements UseCase {
  // @todo inject repository
  constructor(private productRepository: ProductRepository) {}

  async execute(): Promise<void> {
    const product = Product.create({
      id: new ProductId('d243zsvvqdZd0mTd'),
      title: 'Product title',
      description: 'Product description',
      price: 100,
      imageUrl: ['image1', 'image2']
    });

    this.productRepository.save(product);
  }
}
