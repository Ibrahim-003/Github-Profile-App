import { useCallback, useEffect, useState } from "react"
import { githubApi } from "../services/githubApi";
import { mapUsersData } from "../utils/mappers";
import { UsersMapped } from "../types/types";

export const usePotencialProfile = (search: string) => {
    const [potencialProfiles, setPotencialProfiles] = useState<UsersMapped[] | null>(null);
    const [error, setError] = useState<string | null>(null);

    const getPotencialProfile = useCallback(async () => {
        try {
            const response = await githubApi.searchUsers(search, 3);
            if (!response.ok) throw new Error("Ocurrio un error inesperado.");

            const profiles = await response.json();
            setPotencialProfiles(mapUsersData(profiles.items));
        } catch (error) {
            setError(error instanceof Error ? error.message : "Ocurrio un error inesperado.");
        }
    }, [search])

    useEffect(() => {
        if (search.length >= 3) {
            getPotencialProfile();
        } else {
            setPotencialProfiles(null);
        }
    }, [search, getPotencialProfile])

    return {potencialProfiles, setPotencialProfiles, error}
}