export class ProductImageUrl {
  constructor(readonly value: string) {
    this.assertValidUrl(value);
  }

  private assertValidUrl(value: string) {
    if (!this.isValidUrl(value)) {
      throw new Error('Not a valid Url');
    }
  }

  private isValidUrl(value: string) {
    new URL(value);
    return true;
  }
}
