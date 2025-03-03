export const calculateDaysFromNow = (dateString: string): number => {
  const date = new Date(dateString);
  const now = new Date();

  const timeDifference = now.getTime() - date.getTime();
  const daysDifference = Math.floor(timeDifference / (1000 * 3600 * 24));

  return daysDifference;
};

export const validateProfileName = (name: string) => {
  const reservedNames = ['admin', 'root', 'support', 'help', 'github', 'enterprise'];
  const validName = /^[a-zA-Z0-9]([a-zA-Z0-9_-]{0,37}[a-zA-Z0-9])?$/;
  
  if (name.trim() !== name) {
    return "No debe contener espacios al inicio o final";
  }

  if (name.length === 0) {
    return "No puede estar vacío";
  }
  if (name.length < 3) {
      return "Debe tener al menos 3 caracteres";
  }
  if (name.length > 39) {
      return "No puede exceder los 39 caracteres";
  }

  if (!validName.test(name)) {
    return "No puede terminar con caracteres especiales";
  }

  if (reservedNames.includes(name.toLowerCase())) {
    return "Este nombre está reservado y no puede ser utilizado";
  }

  if (/[^\x20-\x7E]/.test(name)) {
    return "Solo puede contener caracteres ASCII estándar";
  }

  return null;
}