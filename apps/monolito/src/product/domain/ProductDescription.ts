export class ProductDescription {
  private static readonly MIN_LENGTH = 50;
  private static readonly MAX_LENGTH = 1000;

  public constructor(readonly value: string) {
    this.assertValidDescription(value);
  }

  private assertValidDescription(value: string): void {
    if (
      value.length < ProductDescription.MIN_LENGTH ||
      value.length > ProductDescription.MAX_LENGTH
    ) {
      throw new Error('Invalid description');
    }
  }
}
