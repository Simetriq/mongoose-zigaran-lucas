import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDB } from "./src/config/database.js";
import { routes } from "./src/routes/index.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(cors());

app.use("/api", routes);

app.listen(PORT, async () => {
  await connectDB();
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});

//? ================= NOTAS ADICIONALES =================

// import express from "express";//! Framework web para Node.js
// import dotenv from "dotenv"; //! Módulo para cargar variables de entorno desde archivo .env
// import cors from "cors";  //! Middleware para habilitar CORS (Cross-Origin Resource Sharing)
// import { connectDB } from "./src/config/database.js";//! Función personalizada para conectar con la base de datos
// import { routes } from "./src/routes/index.js";//! Importación de todas las rutas definidas en la aplicación

//? Estructura recomendada del proyecto:
//* - src/
//*   ├── config/       # Configuraciones (base de datos, variables de entorno)
//*   ├── models/       # Modelos de datos de Mongoose
//*   ├── controllers/  # Lógica de negocio y manejo de requests
//*   ├── routes/       # Definición de endpoints y rutas
//*   ├── middlewares/  # Middlewares personalizados
//*   └── helpers/      # Utilidades y helpers
//
//? Flujo de una solicitud:
//* 1. Cliente → Solicitud HTTP → app.use(express.json()) → Convierte JSON a objeto
//* 2. → app.use(cors()) → Maneja políticas CORS
//* 3. → app.use("/api", routes) → Dirige a las rutas correspondientes
//* 4. → Controlador específico → Procesa la solicitud
//* 5. → Modelo de Mongoose → Interactúa con la base de datos
//* 6. → Respuesta → Cliente
//
//? Variables de entorno esperadas en .env:
//* - PORT=4000
//* - MONGODB_URI=mongodb://localhost:27017/nombre_basedatos
