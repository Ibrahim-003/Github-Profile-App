import { useEffect, useRef, useState } from "react"
import { validateProfileName } from "../utils/utils";

export const useSearch = () => {
  const [search, setSearch] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const isFirstInput = useRef<boolean>(true);

  useEffect(() => {
    if (isFirstInput.current) {
        isFirstInput.current = search === "";
      return;
    };

    const isValid = validateProfileName(search);
    setError(isValid);
    return;
  }, [search])

  return { search, setSearch, isFirstInput, error};
}