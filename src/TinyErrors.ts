class TinyErrors extends Error {
  private _code: number;
  constructor(code: number, message: string) {
    super(message);
    Error.captureStackTrace(this, TinyErrors);
    this._code = code;
  }
  public static parse(error): TinyErrors {
    if (error instanceof TinyErrors) {
      return error;
    }
    if (error.name === 'ValidationError') {
      let message = error.message
        .substr(error.message.lastIndexOf(':') + 1)
        .trim();
      return new TinyErrors(400, message);
    }
    return error;
  }
  get code(): number {
    return this._code;
  }
  set code(code: number) {
    this._code = code;
  }
}

export { TinyErrors };
