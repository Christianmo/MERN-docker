import jwt from "jsonwebtoken";
import bcryptjs from "bcryptjs";
import User from "../models/User";
import { unauthorized } from "../utils/httpErrors";
import { TReqRes } from "../types/common";

export const signIn: TReqRes = (req: any | undefined, res, next) => {
  const KEYWORD: any = process.env.API_TOKEN_KEYWORD;

  User.findOne({ email: req.body.email }, (err, user: any) => {
    const isValid = bcryptjs.compareSync(req.body.password, user.password);

    if (isValid) {
      req.session.userId = user.id;

      const token: any = jwt.sign(req.body, KEYWORD, {
        expiresIn: "1h"
      });

      res.status(200).json({
        data: {
          token
        }
      });
    } else {
      return res
        .status(unauthorized().httpStatusCode)
        .json({ success: false, message: unauthorized().message, data: null });
    }
  });
};
