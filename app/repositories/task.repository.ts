import { db } from '../../config/database.js'; // supõe um ORM genérico

export class TaskRepository {
  async findById(id: string) {
    return db.tasks.findOne({ where: { id } });
  }

  async updateTitle(id: string, title: string) {
    return db.tasks.update({ id }, { title });
  }
}
