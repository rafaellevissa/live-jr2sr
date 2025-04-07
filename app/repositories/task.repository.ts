import Task from '#models/task'

export class TaskRepository {
  async findById(id: number) {
    return Task.find(id)
  }

  async updateTitle(id: number, title: string) {
    return Task.updateOrCreate({ id }, { title })
  }
}
