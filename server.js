const express = require('express');
const path = require('path');
const app = express();

// Обслуживание статических файлов из папки build
app.use(express.static(path.join(__dirname, 'build')));

// Обработка всех маршрутов (для SPA)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Запуск сервера
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});