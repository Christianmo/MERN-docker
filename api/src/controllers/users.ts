import User from "../models/User";
import Bcrypt from "bcryptjs";
import { TReqRes } from "../types/common";

export const addUser: TReqRes = (req: any, res: any, next: any) => {
  req.body.password = Bcrypt.hashSync(req.body.password, 10);

  const newUser = new User({ ...req.body });

  newUser.save((err, user) => {
    res.status(200).json({
      success: true,
      message: "User created succesfully",
      data: {
        id: user.id
      }
    });
  });
};

export const getUser: TReqRes = async (req, res, next) => {
  try {
    await User.findById(req.params.userId)
      .populate({ path: "posts"})
      .exec((err, user) => {
        console.log(user);
        res.status(200).json({
          success: true,
          message: '',
          data: user
        });
      });
  } catch (error) {}
};

export const getUsers: TReqRes = async (req, res, next) => {
  try {
    await User.find({}).exec((err, users) => {
      res.status(200).json({
        data: users
      });
    });
  } catch (error) {}
};
