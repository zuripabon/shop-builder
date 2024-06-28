export class ProductImageUrl {
  public constructor(readonly value: string) {
    this.assertValidUrl(value);
  }

  private assertValidUrl(value: string): void {
    if (!this.isValidUrl(value)) {
      throw new Error('Invalid url');
    }
  }

  private isValidUrl(value: string): boolean {
    const urlPattern = new RegExp(
      '^(https?:\\/\\/)?' + // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|' + // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
        '(\\#[-a-z\\d_]*)?$',
      'i' // fragment locator
    );
    return !!urlPattern.test(value);
  }
}
