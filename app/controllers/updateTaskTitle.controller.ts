import { UpdateTaskTitleService } from '../services/updateTaskTitle.service.js'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export async function updateTaskTitleController({
  params,
  request,
  response,
}: HttpContextContract) {
  const id = params.id
  const title = request.input('title')

  if (!title || title.length < 3) {
    return response.badRequest('Título inválido')
  }

  const service = new UpdateTaskTitleService()

  try {
    await service.execute({ id: parseInt(id), title })
    return response.status(200).json({ message: 'Título atualizado com sucesso' })
  } catch (err) {
    console.log(err)
    return response.status(400).json({ error: err.message })
  }
}
