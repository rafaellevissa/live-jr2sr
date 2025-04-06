import { TaskRepository } from '../repositories/task.repository';
import { isValidTitle } from '../validations/title.validator';

export class UpdateTaskTitleService {
  constructor(private readonly repository = new TaskRepository()) {}

  async execute({ id, title }: { id: string; title: string }) {
    if (!isValidTitle(title)) {
      throw new Error('Título inválido');
    }

    const task = await this.repository.findById(id);
    if (!task) {
      throw new Error('Tarefa não encontrada');
    }

    await this.repository.updateTitle(id, title);
    console.log(`Tarefa ${id} atualizada com novo título: ${title}`);
  }
}
