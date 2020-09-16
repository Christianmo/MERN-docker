export const unauthorized = () => {
  const err: any = new Error('Unauthorized');
  err.httpStatusCode = 401;
  return err;
}