import { Request, Response } from 'express';
import { UpdateTaskTitleService } from '../services/updateTaskTitle.service.js'

export async function updateTaskTitleController(req: Request, res: Response) {
  const { id } = req.params
  const { title } = req.body

  const service = new UpdateTaskTitleService()

  try {
    await service.execute({ id: parseInt(id), title })
    res.status(200).json({ message: 'Título atualizado com sucesso' })
  } catch (err) {
    console.log(err)
    res.status(400).json({ error: err.message })
  }
}
