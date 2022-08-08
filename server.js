import express from 'express';
import path from 'path';

/* возможно не нужно
const __dirname = path.resolve(); */

const PORT = 5000;

const app = express();

app.use(express.static(path.resolve(__dirname, 'static')));
app.use(express.json());

/* отдаем html
app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'static', 'index.html'));
}); */

app.post('/', (req, res) => {
  console.log(req.body);
  res.status(200).json('Сервер работает');
});

const startApp = async () => {
  try {
    //подключаем базу данных
    //await mongoose.connect('URL')
    app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));
  } catch(err) {
    console.log(err);
  }
};

startApp();



