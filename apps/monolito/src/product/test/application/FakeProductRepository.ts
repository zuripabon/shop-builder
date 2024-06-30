import { Product, ProductPrimitives } from '@/product/domain/Product';
import { ProductRepository } from '@/product/domain/ProductRepository';

export class FakeProductRepository implements ProductRepository {
  private mockSave = jest.fn();
  private products: ProductPrimitives[] = [];

  async save(product: Product): Promise<void> {
    this.products.push(product.toPrimitives());
    this.mockSave(product);
  }

  assertSaveHasBeenCalledWith(product: Product) {
    expect(this.mockSave).toHaveBeenCalledWith(product);
  }

  assertSaveHasNotBeenCalled() {
    expect(this.mockSave).not.toHaveBeenCalled();
  }

  assertCount(count: number) {
    expect(this.products.length).toEqual(count);
  }

  reset() {
    this.mockSave.mockReset();
    this.products = [];
  }
}
