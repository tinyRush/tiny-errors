declare class TinyErrors extends Error {
  code: number;
  constructor(code: number, message: string);
  static parse(error: any): TinyErrors;
}
export { TinyErrors };
