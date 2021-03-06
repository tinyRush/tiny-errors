declare class TinyErrors extends Error {
  private _httpCode;
  private _code;
  constructor(httpCode: number, code: string, message: string);
  code: string;
  httpCode: number;
  toJSON(): {
    code: string;
    message: string;
  };
}
export { TinyErrors };
