export class ProductId {
  public constructor(readonly value: string) {
    this.assertIsUuid(value);
  }

  private assertIsUuid(value: string): void {
    if (!this.isUuid(value)) {
      throw new Error('Invalid UUID');
    }
  }

  private isUuid(value: string): boolean {
    return /[\w_-]{16}/.test(value);
  }
}
