/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Task from '#models/task'

router.get('/', async () => {
  return {
    hello: 'world',
  }
})

//Jr. Code
router.put('/tasks/:id/title', async ({ params, request, response }: HttpContextContract) => {
  const id = params.id
  const title = request.input('title')

  if (!title || title.length < 3) {
    return response.badRequest('Título inválido')
  }

  const task = await Task.find(id)

  if (!task) {
    return response.notFound('Tarefa não encontrada')
  }

  task.title = title
  await task.save()

  console.log(`Título atualizado: ${title}`)
  return response.send('Título atualizado com sucesso')
})

//importar rota da pasta routes
