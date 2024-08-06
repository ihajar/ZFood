import { RequestHandler } from "express";
import Restaurant from "../models/restaurant";

export const getRestaurants: RequestHandler = async (req, res, next) => {
    try {
        const restaurants = await Restaurant.find().exec();
        res.status(200).json(restaurants);
    } catch (error) {
        next(error);
    }
}

// export const createRestaurant: RequestHandler = async(req, res, next) => {

    
//     try {
        
//     } catch (error) {
//         next(error);
//     }
// }