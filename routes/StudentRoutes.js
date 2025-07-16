import express from 'express';
import { registerStudent } from '../controllers/studentController.js';

const StudentRouter = express.Router();

StudentRouter.post('/register', registerStudent);

export default StudentRouter;
