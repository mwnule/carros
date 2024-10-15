import express from "express";
import connectDB from "./config/dbConfig.js";
import workshopRoutes from "./routes/workshopRoutes.js";
import vehicicleRoutes from "./routes/vehicleRoutes.js";
import maintenanceRoutes from "./routes/maintenanceRoutes.js";

connectDB();

const app = express();
const PORT = 3000;

app.use(express.json());

app.use("/api/workshop", workshopRoutes);
app.use("/api/vehicicle", vehicicleRoutes);
app.use("/api/maintenance", maintenanceRoutes);

app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
