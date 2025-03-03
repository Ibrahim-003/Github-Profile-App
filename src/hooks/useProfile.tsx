import { useState, useEffect, useCallback, useRef } from "react";
import { ProfileMapped } from "../types/types";
import { githubApi } from "../services/githubApi";
import { handleApiError } from "../utils/errorHandling";
import { mapProfileData } from "../utils/mappers";

export const useProfile = (userName: string) => {
  const [profileData, setProfileData] = useState<ProfileMapped | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const previousSearch = useRef(userName);

  const getProfile = useCallback(async () => {
    if (!userName) return;
    if (previousSearch.current === userName) return;

    setLoading(true);
    setError(null);
    setProfileData(null);
    previousSearch.current = userName;

    try {
      const response = await githubApi.getUser(userName);

      if (!response.ok) throw new Error(handleApiError(response));

      const profile = await response.json();

      setProfileData(mapProfileData(profile));
    } catch (error) {
      setError(error instanceof Error ? error.message : "Error desconocido");
    } finally {
      setLoading(false);
    }
  }, [userName]);

  useEffect(() => {
    if (!userName) return;

    getProfile();
  }, [userName, getProfile]);

  return { profileData, loading, error };
};
