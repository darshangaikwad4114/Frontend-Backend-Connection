/**
 * Custom API Error class
 * Use for throwing operational errors with specific status codes
 */
export class ApiError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
    this.isOperational = true;
    
    Error.captureStackTrace(this, this.constructor);
  }
}

/**
 * Not found error generator
 * @param {string} resource - Name of the resource that wasn't found
 * @returns {ApiError} - 404 error
 */
export const notFound = (resource = 'Resource') => {
  return new ApiError(`${resource} not found`, 404);
};
