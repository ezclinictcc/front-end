import { ValidationError } from "yup";

interface Errors {
  [key: string]: string;
}

/**
 * @description validate form errors.
 * @param err err object.
 * @returns error validations.
 */
export default function getValidationErros(err: ValidationError) {
  const validationErros: Errors = {};
  err.inner.forEach((error: any) => {
    validationErros[error.path] = error.message;
  });

  return validationErros;
}
