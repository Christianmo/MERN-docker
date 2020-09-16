import { Router } from "express";
import { getPosts, addPost } from "../controllers/posts";
import ROUTES from "../constants/routes";

const api = Router();

api
  .route(ROUTES.POSTS)
  .get(getPosts)
  .post(addPost);

export default api;
