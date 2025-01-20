export interface GenericResponse<T> {
  message: string;
  data: T;
  code: number;
}
