export interface DataAndError<T> {
  data: T | null;
  error: Error | null;
}

interface ErrorWithMessage {
  message: string;
}

export const ErrorUtils = {
  // Helper for checking if an error has a message property
  isErrorWithMessage: (error: unknown): error is ErrorWithMessage => {
    return (
      typeof error === "object" &&
      error !== null &&
      "message" in error &&
      typeof (error as Record<string, unknown>).message === "string"
    );
  },

  // Helper for converting an error to an ErrorWithMessage
  toErrorWithMessage: (maybeError: unknown): ErrorWithMessage => {
    if (ErrorUtils.isErrorWithMessage(maybeError)) return maybeError;

    try {
      return new Error(JSON.stringify(maybeError));
    } catch {
      // fallback in case there's an error stringifying the maybeError
      // like with circular references for example.
      return new Error(String(maybeError));
    }
  },

  // Helper for getting the message from an error
  getErrorMessage: (error: unknown) =>
    ErrorUtils.toErrorWithMessage(error).message,

  // Helper for catching errors and normalising them
  catchError: async <T>(
    callback: (...args: any) => Promise<T> | T
  ): Promise<DataAndError<T>> => {
    try {
      const data = await callback();
      return { data, error: null };
    } catch (err) {
      const errorMsg = ErrorUtils.getErrorMessage(err);
      console.error(errorMsg);
      // We can also log error messages to an error reporting service here
      return { data: null, error: new Error(errorMsg) };
    }
  },

  // Default value for data and error
  noDataOrError: { data: null, error: null },
};
