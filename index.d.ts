declare class AppError extends Error {
  code: number;
  constructor(code: number, message: string);
  static parse(error: any): AppError;
}
export { AppError };
