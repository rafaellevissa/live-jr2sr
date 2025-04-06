import express from 'express';
import { updateTaskTitleController } from '../controllers/updateTaskTitle.controller';

const router = express.Router();

router.put('/tasks/:id/title', updateTaskTitleController);

export default router;
