export class ProductPrice {
  private static readonly MIN_PRICE = 1n;
  private static readonly MAX_PRICE = 10000n;

  public constructor(readonly value: number) {
    this.assertValidPrice(value);
  }

  private assertValidPrice(value: number): void {
    if (value < ProductPrice.MIN_PRICE || value > ProductPrice.MAX_PRICE) {
      throw new Error('Invalid price');
    }
  }
}
