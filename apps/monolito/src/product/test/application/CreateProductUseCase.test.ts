import { CreateProductUseCase } from '@/product/application/CreateProductUseCase';

import { CreateProductQueryBuilder } from './CreateProductQueryBuilder';
import { FakeProductRepository } from './FakeProductRepository';

describe('CreateProductUseCase', () => {
  it('should create a new product', async () => {
    const fakeProductRepository = new FakeProductRepository();
    const createProductUseCase = new CreateProductUseCase(
      fakeProductRepository
    );

    const createProductQuery = CreateProductQueryBuilder.withValidProduct();
    await createProductUseCase.execute(createProductQuery.build());

    fakeProductRepository.assertSaveHasBeenCalledWith(
      createProductQuery.product
    );
    fakeProductRepository.assertCount(1);
  });

  it('should not create an invalid product', async () => {
    const fakeProductRepository = new FakeProductRepository();
    const createProductUseCase = new CreateProductUseCase(
      fakeProductRepository
    );

    try {
      const createProductQuery = CreateProductQueryBuilder.withInValidProduct();
      await createProductUseCase.execute(createProductQuery.build());
    } catch (error) {
      expect(error).toBeDefined();
    } finally {
      fakeProductRepository.assertSaveHasNotBeenCalled();
      fakeProductRepository.assertCount(0);
    }
  });
});
