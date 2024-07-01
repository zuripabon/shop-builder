export class ProductDescription {
  private static MIN_LENGTH = 10;
  private static MAX_LENGTH = 1000;

  constructor(readonly value: string) {
    this.assertValidDescription(value);
  }

  private assertValidDescription(value: string) {
    if (
      value.length < ProductDescription.MIN_LENGTH ||
      value.length > ProductDescription.MAX_LENGTH
    ) {
      throw new Error(
        `Description must be between ${ProductDescription.MIN_LENGTH} and ${ProductDescription.MAX_LENGTH} characters`
      );
    }
  }
}
