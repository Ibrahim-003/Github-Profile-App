import { useEffect, useState, useCallback } from "react";
import { RepoMapped } from "../types/types";
import { githubApi } from "../services/githubApi";
import { handleApiError } from "../utils/errorHandling";
import { mapRepoData } from "../utils/mappers";

export const useRepos = (reposUrl: string) => {
  const [reposData, setReposData] = useState<RepoMapped[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const getRepos = useCallback(async () => {
    if (!reposUrl) return;

    setLoading(true);
    setError(null);
    setReposData([]);
    
    try {
      const response = await githubApi.getRepos(reposUrl);
      if (!response.ok) throw new Error(handleApiError(response));
      const repos = await response.json();
      setReposData(mapRepoData(repos));
    } catch (error) {
      setError(error instanceof Error ? error.message : "Error desconocido");
    } finally {
      setLoading(false);
    }
  }, [reposUrl]);

  useEffect(() => {
    if (!reposUrl) return;

    getRepos();
  }, [reposUrl, getRepos]);

  return { reposData, loading, error };
};
