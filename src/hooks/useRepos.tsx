import { useEffect, useState } from "react";
import { RepoMapped } from "../components/types";

interface GithubRepo {
  id: number;
  name: string;
  description: string | null;
  license: { spdx_id: string } | null;
  forks: number;
  stargazers_count: number;
  created_at: string;
  html_url: string;
}

const MY_TOKEN =
  "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";

export const useRepos = (reposUrl: string) => {
  const [reposData, setReposData] = useState<RepoMapped[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getRepos = async () => {
      setLoading(true);
      try {
        const response = await fetch(`${reposUrl}?per_page=4`, {
          headers: {
            Authorization: `Bearer ${MY_TOKEN}`,
          },
        });
        if (!response.ok) throw new Error("The request failed!");
        const repos: GithubRepo[] = await response.json();
        const mappedRepos: RepoMapped[] = repos.map((repo) => ({
          id: repo.id,
          name: repo.name,
          description: repo.description,
          license: repo.license?.spdx_id,
          forks: repo.forks,
          stars: repo["stargazers_count"],
          updateDate: repo["created_at"],
          gitUrl: repo.html_url,
        }));
        setReposData(mappedRepos);
      } catch (error) {
        if (error instanceof Error) {
          console.error(error.message);
          setError(error.message);
        }
      } finally {
        setLoading(false);
      }
    };
    getRepos();
  }, [reposUrl]);

  return { reposData, loading, error };
};
