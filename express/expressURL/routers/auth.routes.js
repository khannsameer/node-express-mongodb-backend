import { Router } from "express";
import * as authContollers from "../controllers/auth.contoller.js";

const router = Router();

//someone hit this route the call the controller too display what the content
router.get("/register", authContollers.getRegisterPage);
router.get("/login", authContollers.getLoginPage);

export const authRoutes = router;
