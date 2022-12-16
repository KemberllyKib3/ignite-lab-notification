/* eslint-disable prettier/prettier */

export class Content {
  private readonly content: string;

  get value(): string {
    return this.content;
  }

  private validateContentLenght(content: string) {
    if (content.length < 5 || content.length > 240) {
      throw new Error('Content must be between 5 and 240 characters');
    }
  }

  constructor(content: string) {
    this.validateContentLenght(content);

    this.content = content;
  }
}