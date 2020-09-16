import  { Request, Response } from 'express';

export type TReqRes = (
  req: Request,
  res: Response,
  next: any,
) => any;