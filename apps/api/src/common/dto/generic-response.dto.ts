export class GenericResponse<T> {
  constructor(data: Partial<GenericResponse<T>>) {
    Object.assign(this, data);
  }

  data?: T;
  message: string;
  code: number;
  error?: string;
}
