declare class TinyErrors extends Error {
  private _httpCode;
  private _code;
  constructor(code: number, message: string);
  code: string;
  httpCode: number;
}
export { TinyErrors };
