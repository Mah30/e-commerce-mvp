import express from "express";
import cors from "cors";
import helmet from "helmet";
import { errorMiddleware } from "./middlewares/error.middleware.js";

const app = express();

const clientUrl = process.env.CLIENT_URL || "http://localhost:5173";

app.use(helmet());

app.use(
  cors({
    origin: clientUrl,
    credentials: true,
  })
);

// Este middleware permite que a API leia JSON enviado no body das requests com limite pequeno.
app.use(express.json({ limit: "10kb" }));

app.get("/api/v1/health", (request, response) => {
  response.status(200).json({
    status: "ok",
    service: "e-commerce-kaffee-api",
    version: "v1",
  });
});

// Este fallback ajuda o QA a identificar quando uma rota ainda nao existe.
app.use((request, response) => {
  response.status(404).json({
    error: "Route not found",
  });
});

app.use(errorMiddleware);

export default app;
