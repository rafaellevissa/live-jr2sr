import dbConfig from '../../config/database.js'
import mysql from 'mysql2/promise'

const connectionConfig = dbConfig.connections[dbConfig.connection].connection as any

export const db = mysql.createPool({
  host: connectionConfig?.host,
  port: connectionConfig?.port,
  user: connectionConfig?.user,
  password: connectionConfig?.password,
  database: connectionConfig?.database,
})

export class TaskRepository {
  async findById(id: number) {
    const [rows] = await db.query('SELECT * FROM tasks WHERE id = ?', [id])
    return (rows as any[])[0] || null
  }

  async updateTitle(id: number, title: string) {
    const [result] = await db.execute('UPDATE tasks SET title = ? WHERE id = ?', [title, id])

    if ((result as any).affectedRows > 0) {
      return this.findById(id)
    }

    return null
  }
}
