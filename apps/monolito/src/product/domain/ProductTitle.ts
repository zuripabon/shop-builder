export class ProductTitle {
  private static MIN_LENGTH = 8;
  private static MAX_LENGTH = 100;

  constructor(readonly value: string) {
    this.assertValidTitle(value);
  }

  private assertValidTitle(value: string) {
    if (
      value.length < ProductTitle.MIN_LENGTH ||
      value.length > ProductTitle.MAX_LENGTH
    ) {
      throw new Error('Title must be between 8 and 100 characters');
    }
  }
}
