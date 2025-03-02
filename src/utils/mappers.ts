import { ProfileMapped, RepoMapped } from "../types/types";

interface GithubProfile {
  avatar_url: string;
  login: string;
  repos_url: string;
  bio: string | null;
  followers: number;
  following: number;
  location: string | null;
  html_url: string;
}

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

/**
 * Transforms GitHub API profile data to application format
 * @param profile Raw profile data from GitHub API
 * @returns Mapped profile data for application use
 */
export const mapProfileData = (profile: GithubProfile): ProfileMapped => ({
  avatarUrl: profile.avatar_url,
  login: profile.login,
  reposUrl: profile.repos_url,
  bio: profile.bio,
  followers: profile.followers,
  following: profile.following,
  location: profile.location,
  repoUrl: profile.html_url,
});

/**
 * Transforms GitHub API repository data to application format
 * @param repos Array of raw repository data from GitHub API
 * @returns Array of mapped repository data for application use
 */
export const mapRepoData = (repos: GithubRepo[]): RepoMapped[] => repos.map((repo) => ({
  id: repo.id,
  name: repo.name,
  description: repo.description,
  license: repo.license?.spdx_id,
  forks: repo.forks,
  stars: repo.stargazers_count,
  updateDate: repo.created_at,
  gitUrl: repo.html_url,
}));
