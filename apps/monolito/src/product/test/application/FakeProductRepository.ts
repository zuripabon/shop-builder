import { Product, ProductPrimitives } from '@/product/domain/Product';
import { ProductRepository } from '@/product/domain/ProductRepository';

export class FakeProductRepository implements ProductRepository {
  private products: ProductPrimitives[] = [];
  private mockSave = jest.fn();

  async save(product: Product): Promise<void> {
    this.products.push(product.toPrimitives());
    this.mockSave(product);
  }

  assertSaveHasBeenCalledWith(product: Product): void {
    expect(this.mockSave).toHaveBeenCalledWith(product);
  }

  assertCount(count: number): void {
    expect(this.products.length).toBe(count);
  }

  assertSaveHasNotBeenCalled(): void {
    expect(this.mockSave).not.toHaveBeenCalled();
  }
}
