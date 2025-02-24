import { useState, useEffect } from "react";
import { ProfileMapped } from "../components/types";

const MY_TOKEN =
  "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";

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

export const useProfile = (userName: string) => {
  const [profileData, setProfileData] = useState<ProfileMapped>();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!userName) return;

    const getProfile = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(
          `https://api.github.com/users/${userName}`,
          {
            headers: {
              Authorization: `Bearer ${MY_TOKEN}`,
            },
          }
        );
        if (!response.ok) throw new Error("The request failed!");
        const profile: GithubProfile = await response.json();
        const mappedProfile: ProfileMapped = {
          avatarUrl: profile.avatar_url,
          login: profile.login,
          reposUrl: profile.repos_url,
          bio: profile.bio,
          followers: profile.followers,
          following: profile.following,
          location: profile.location,
          repoUrl: profile.html_url,
        };

        setProfileData(mappedProfile);
      } catch (error) {
        if (error instanceof Error) {
          console.error(error.message);
          setError(error.message);
        }
      } finally {
        setLoading(false);
      }
    };
    getProfile();
  }, [userName]);

  return { profileData, loading, error };
};
