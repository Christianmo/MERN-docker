import { TReqRes } from '../types/common';

const auth: TReqRes = ({ headers }, res, next) => {
  if (!headers.authorization) return;
  const token = headers.authorization.split(' ')[1];  
}