import { API_CONFIG } from "../config/api"

export const githubApi = {
    searchUsers: async(query: string, perPage: number = 3) => {
        const response = await fetch(`${API_CONFIG.BASE_URL}/search/users?q=${query}&per_page=${perPage}`,{
            headers:API_CONFIG.HEADERS
        });

        return response;
    },

    getUser: async (userName: string) => {
        const response = await fetch(`${API_CONFIG.BASE_URL}/users/${userName}`,{
            headers:API_CONFIG.HEADERS
        });

        return response;    
    },

    getRepos: async (reposUrl: string) => {
        const response = await fetch(`${reposUrl}?per_page=4`,{
            headers:API_CONFIG.HEADERS
        });

        return response;
    },
}