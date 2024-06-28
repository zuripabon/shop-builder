import { ProductRepository } from '@/product/domain/ProductRepository';
import { Product } from '@/product/domain/Product';

export class InMemoryProductRepository implements ProductRepository {
  private products: Product[] = [];

  async save(product: Product): Promise<void> {
    this.products.push(product);
  }
}
