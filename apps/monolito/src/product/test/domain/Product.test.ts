import { ProductBuilder } from './ProductBuilder';

describe('Product Aggregate', () => {
  it('should create a valid product', () => {
    expect(() => ProductBuilder.withValidProduct().build()).not.toThrow();
  });

  it('should not create a product with invalid id', () => {
    expect(() => ProductBuilder.withValidProduct().withId('').build()).toThrow(
      'Invalid UUID'
    );
  });

  it('should not create a product with invalid title', () => {
    expect(() =>
      ProductBuilder.withValidProduct().withTitle('').build()
    ).toThrow('Title must be between 8 and 100 characters');
  });
});
