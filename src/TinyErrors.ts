class AppError extends Error {
  private _code: number;
  constructor(code: number, message: string) {
    super(message);
    Error.captureStackTrace(this, AppError);
    this._code = code;
  }
  public static parse(error): AppError {
		if (error instanceof AppError) {
			return error;
		}
    if (error.name === 'ValidationError') {
			let message = error.message.substr(error.message.lastIndexOf(':') + 1).trim();
      return new AppError(400, message);
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

export { AppError }
