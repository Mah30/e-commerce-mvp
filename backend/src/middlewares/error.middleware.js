export function errorMiddleware(error, request, response, next) {
  const statusCode = error.statusCode || 500;

  // Este log ajuda durante o desenvolvimento sem expor detalhes internos para o cliente.
  console.error(error);

  response.status(statusCode).json({
    error: statusCode === 500 ? "Internal server error" : error.message,
  });
}
