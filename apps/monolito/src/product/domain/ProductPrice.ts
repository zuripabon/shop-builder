export class ProductPrice {
  private static MIN_PRICE = 1n;

  constructor(readonly value: number) {
    this.assertValidPrice(value);
  }

  private assertValidPrice(value: number) {
    if (value < ProductPrice.MIN_PRICE) {
      throw new Error('Price should be positive');
    }
  }
}
