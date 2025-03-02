export const calculateDaysFromNow = (dateString: string): number => {
  const date = new Date(dateString);
  const now = new Date();

  const timeDifference = now.getTime() - date.getTime();
  const daysDifference = Math.floor(timeDifference / (1000 * 3600 * 24));

  return daysDifference;
};

export const validateProfileName = (name: string) => {
  // Lista de nombres reservados de GitHub
  const reservedNames = ['admin', 'root', 'support', 'help', 'github', 'enterprise'];
  
  // Validar espacios en blanco
  if (name.trim() !== name) {
    return "El nombre no debe contener espacios al inicio o final";
  }

  if (name.length === 0) {
    return "El nombre de perfil no puede estar vacío";
  }
  if (name.length < 3) {
      return "El nombre de perfil debe tener al menos 3 caracteres";
  }
  if (name.length > 39) {
      return "El nombre de perfil no puede exceder los 39 caracteres";
  }

  const validName = /^[a-zA-Z0-9]([a-zA-Z0-9_-]{0,37}[a-zA-Z0-9])?$/;
  if (!validName.test(name)) {
    return "El nombre debe comenzar y terminar con letra o número, y solo puede contener letras, números, guiones y guiones bajos";
  }

  if (reservedNames.includes(name.toLowerCase())) {
    return "Este nombre está reservado y no puede ser utilizado";
  }

  if (/[^\x20-\x7E]/.test(name)) {
    return "El nombre solo puede contener caracteres ASCII estándar";
  }

  return null;
}