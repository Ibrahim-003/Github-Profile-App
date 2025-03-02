import { useEffect, useState } from "react"
import { githubApi } from "../services/githubApi";

interface ProfileMapped {
    id: number;
    avatar_url: string;
    login: string;
}

interface GithubUserResponse {
    id: number;
    avatar_url: string;
    login: string;
}

export const usePotencialProfile = (search: string) => {
    const [potencialProfiles, setPotencialProfiles] = useState<ProfileMapped[] | null>(null);
    const [error, setError] = useState<string | null>(null);

    const getPotencialProfile = async () => {
        try {
            const response = await githubApi.searchUsers(search, 3);
            if (!response.ok) throw new Error("Ocurrio un error inesperado.");

            const profiles = await response.json();
            setPotencialProfiles(profiles.items.map((profile: GithubUserResponse) => ({
                id: profile.id,
                avatar_url: profile.avatar_url,
                login: profile.login,
            })));
        } catch (error) {
            setError(error instanceof Error ? error.message : "Ocurrio un error inesperado.");
        }
    }

    useEffect(() => {
        if (search.length >= 3) {
            getPotencialProfile();
        } else {
            setPotencialProfiles(null);
        }
    }, [search])

    return {potencialProfiles, setPotencialProfiles, error}
}