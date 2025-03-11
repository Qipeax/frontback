const express = require("express");
const path = require("path");
const fs = require("fs"); // Импорт модуля fs
const app = express();
const bodyParser = require("body-parser");

// Обслуживание статических файлов из папки build
app.use(express.static(path.join(__dirname, "test-app", "build")));

// Обработка всех маршрутов (для SPA)
app.get("*", (req, res) => {
  // Проверяем, существует ли запрашиваемый файл
  const filePath = path.join(__dirname, "test-app", "build", req.path);
  if (fs.existsSync(filePath)) {
    // Если файл существует, отправляем его
    res.sendFile(filePath);
  } else {
    // Если файл не существует, отправляем страницу 404
    res
      .status(404)
      .sendFile(path.join(__dirname, "test-app", "public", "404.html"));
  }
});

// Запуск сервера
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
