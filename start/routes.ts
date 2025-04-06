/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'

router.get('/', async () => {
  return {
    hello: 'world',
  }
})


//Jr. Code
router.put('/tasks/:id/title', async (req, res) => {
  const id = req.params.id;
  const title = req.body.title;

  if (!title || title.length < 3) {
    return res.status(400).send('Título inválido');
  }

  const task = await db.tasks.findById(id);

  if (!task) {
    return res.status(404).send('Tarefa não encontrada');
  }

  task.title = title;
  await db.tasks.save(task);

  console.log(`Título atualizado: ${title}`);
  return res.send('Título atualizado com sucesso');
});


//importar rota da pasta routes
