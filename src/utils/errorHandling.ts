export const handleApiError = (response: Response): string => {
  if (response.status === 404) return "Usuario no encontrado";
  if (response.status === 403) return "Límite de peticiones alcanzadas, intente más tarde";
  return "Ocurrió un error inesperado.";
}