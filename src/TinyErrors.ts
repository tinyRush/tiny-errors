class TinyError extends Error {
  private _code: number;
  constructor(code: number, message: string) {
    super(message);
    Error.captureStackTrace(this, TinyError);
    this._code = code;
  }
  public static parse(error): TinyError {
    if (error instanceof TinyError) {
      return error;
    }
    if (error.name === 'ValidationError') {
      let message = error.message
        .substr(error.message.lastIndexOf(':') + 1)
        .trim();
      return new TinyError(400, message);
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

export { TinyError };
