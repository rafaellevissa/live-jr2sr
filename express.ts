import express from 'express';
import taskRouter from './start/routes/tasks.routes.js'; 

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(taskRouter);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
