import express from 'express';
import { updateTaskTitleController } from '../../app/controllers/updateTaskTitle.controller.js'

const router = express.Router();

router.put('/tasks/:id/title', updateTaskTitleController);

export default router;
