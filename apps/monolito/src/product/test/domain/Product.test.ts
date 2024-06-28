// import { Product } from '@/product/domain/Product';

import { ProductBuilder } from './ProductBuilder';

describe('Product Aggregate', () => {
  // it('should create a valid product', async () => {
  //   const product = Product.create({
  //     id: 'd243zsvvqdZd0mTd',
  //     title: 'Galletas',
  //     description: 'Galletas Ricas de la abuela',
  //     price: 100,
  //     imageUrl: ['https://via.placeholder.com/150']
  //   }).toPrimitives();

  //   expect(product.id).toBe('d243zsvvqdZd0mTd');
  //   expect(product.title).toBe('Galletas');
  //   expect(product.description).toBe('Galletas Ricas de la abuela');
  //   expect(product.price).toBe(100);
  //   expect(product.imageUrl).toStrictEqual(['https://via.placeholder.com/150']);
  // });

  it('should create a valid product', async () => {
    expect(() => ProductBuilder.withValidProduct().build()).not.toThrow();
  });

  it('should not create a product with invalid id', async () => {
    expect(() =>
      ProductBuilder.withValidProduct().withId('123').build()
    ).toThrow('Invalid UUID');
  });

  it('should not create a product with invalid title', async () => {
    expect(() =>
      ProductBuilder.withValidProduct().withTitle('1').build()
    ).toThrow('Invalid title');
  });

  it('should not create a product with invalid description', async () => {
    expect(() =>
      ProductBuilder.withValidProduct().withDescription('').build()
    ).toThrow('Invalid description');
  });

  it('should not create a product with invalid price', async () => {
    expect(() =>
      ProductBuilder.withValidProduct().withPrice(-1).build()
    ).toThrow('Invalid price');
  });

  it('should not create a product with invalid url', async () => {
    expect(() =>
      ProductBuilder.withValidProduct().withImageUrl(['a']).build()
    ).toThrow('Invalid url');
  });
});
