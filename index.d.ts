declare class TinyError extends Error {
  code: number;
  constructor(code: number, message: string);
  static parse(error: any): TinyError;
}
export { TinyError };
