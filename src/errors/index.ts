export class BadRequest extends Error {
  public status: number;

  constructor(message: string) {
    super(message);
    this.status = 400;
  }
}

export class NotFound extends Error {
  public status: number;

  constructor(message: string) {
    super(message);
    this.status = 404;
  }
}

export class Unauthorized extends Error {
  public status: number;

  constructor(message: string) {
    super(message);
    this.status = 401;
  }
}

export class Forbidden extends Error {
  public status: number;

  constructor(message: string) {
    super(message);
    this.status = 403;
  }
}

export class InternalServerError extends Error {
  public status: number;

  constructor(message: string) {
    super(message);
    this.status = 500;
  }
}
