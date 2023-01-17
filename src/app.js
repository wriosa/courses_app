const express = require("express");
const db = require("./utils/database");
const initModels = require("./models/initModels");
const userRoutes = require('./routes/users.routes');
const courseRoutes = require('./routes/courses.routes');
const videoRoutes = require('./routes/videos.routes');
const categoryRoutes = require('./routes/categories.routes');
const usersCoursesRoutes = require('./routes/userCourse.routes');


const app = express();

app.use(express.json());

const PORT = 8000;

db.authenticate()
  .then(() => console.log("Autenticacion exitosa"))
  .catch((error) => console.log(error));

initModels();

db.sync({ force: false })
  .then(() => console.log("Base de datos sincronizada"))
  .catch((error) => console.log(error));

app.get("/", (req, res) => {
  res.status(200).json({ message: "Bienvenido al servidor" });
});

app.use('/api/v1', userRoutes);
app.use('/api/v1', courseRoutes);
app.use('/api/v1', videoRoutes);
app.use('/api/v1', categoryRoutes);
app.use('/api/v1', usersCoursesRoutes);
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
