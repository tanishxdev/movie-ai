// Standard API response wrapper
export class ApiResponse<T> {
  constructor(
    public readonly success: boolean,

    public readonly message: string,

    public readonly data?: T
  ) {}
}