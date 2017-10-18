class TinyErrors extends Error {
  private _httpCode: number;
  private _code: string;
  constructor(code: number, message: string) {
    super(message);
    Error.captureStackTrace(this, TinyErrors);
    this._httpCode = code;
  }
  get code(): string {
    return this._code;
  }
  set code(code: string) {
    this._code = code;
  }
  get httpCode(): number {
    return this._httpCode;
  }
  set httpCode(httpCode: number) {
    this._httpCode = httpCode;
  }
}

export { TinyErrors };
