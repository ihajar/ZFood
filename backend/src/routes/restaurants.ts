import express from "express";
import * as RestaurantsController from "../controllers/restaurants";

const router = express.Router();

router.get("/", RestaurantsController.getRestaurants);


export default router;
