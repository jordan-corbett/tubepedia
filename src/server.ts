import express from 'express';
import mainRouter from './routes/mainRoute';
import path from 'path';

const app = express();

app.use('/', mainRouter);
app.use(express.static(path.join(__dirname, '../src/public')));

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, '../src/views'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});