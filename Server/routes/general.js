import express from 'express';
import {getDeshboardStats, getUser} from '../controllers/general.js';

const router=express.Router();

router.get("/user/:id",getUser)
router.get("/dashboard",getDeshboardStats)

export default router;