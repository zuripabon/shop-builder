export class ProductTitle {
  private static readonly MIN_LENGTH = 5;
  private static readonly MAX_LENGTH = 100;

  public constructor(readonly value: string) {
    this.assertValidTitle(value);
  }

  private assertValidTitle(value: string): void {
    if (
      value.length < ProductTitle.MIN_LENGTH ||
      value.length > ProductTitle.MAX_LENGTH
    ) {
      throw new Error('Invalid title');
    }
  }
}
