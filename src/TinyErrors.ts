class TinyErrors extends Error {
  private _httpCode: number;
  private _code: string;
  constructor(httpCode: number, code: string, message: string) {
    super(message);
    Error.captureStackTrace(this, TinyErrors);
    this._httpCode = httpCode;
    this._code = code;
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
  toJSON() {
    return {
      code: this._code,
      message: this.message
    };
  }
}

export { TinyErrors };
