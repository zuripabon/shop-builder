import { writeFileSync } from 'fs';
import { join } from 'path';

import { ProductRepository } from '@/product/domain/ProductRepository';
import { Product } from '@/product/domain/Product';

export class FileProductRepository implements ProductRepository {
  private static FILENAME = 'products.json';

  private products: Product[] = [];

  async save(product: Product): Promise<void> {
    this.products.push(product);
    await writeFileSync(
      join(__dirname, FileProductRepository.FILENAME),
      JSON.stringify(this.products, null, 4)
    );
  }
}
