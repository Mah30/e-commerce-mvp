import "dotenv/config";
import app from "./app.js";

const PORT = process.env.PORT || 3000;










app.listen(PORT, () => {
  // Esta mensagem confirma no terminal que o servidor Express iniciou.
  console.log(`API server is running on port http://localhost:${PORT}`);
});
  