import express from "express";
import { index, about } from "../controllers/mainController.js";

const mainRoutes = express.Router()

mainRoutes.get('/', index)
mainRoutes.get('/about', about)

export { mainRoutes }