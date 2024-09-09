import { Router } from "express";
import { getUsers, createUser } from "../controllers/apiController";

const router = Router();

// Define routes for users
router.get("/users", getUsers);
router.post("/users", createUser);

export default router;
