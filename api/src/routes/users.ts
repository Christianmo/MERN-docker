import { Router } from "express";
import { addUser, getUsers, getUser } from "../controllers/users";
import ROUTES from "../constants/routes";

const api = Router();

api.route(`${ROUTES.USERS}/:userId`).get(getUser);

api
  .route(ROUTES.USERS)
  .get(getUsers)
  .post(addUser);

export default api;
