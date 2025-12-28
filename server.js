const express = require('express');
const app = express();
const path = require('path');
const routes = require('./src/routes/index');

app.use('/', routes);
app.use(express.static(path.join(__dirname, 'src/public')));

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'src/views'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});