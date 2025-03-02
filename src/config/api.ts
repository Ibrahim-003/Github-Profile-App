const TOKEN: string = import.meta.env.VITE_GITHUB_TOKEN;

export const API_CONFIG = {
    BASE_URL: "https://api.github.com",
    TOKEN: TOKEN,
    HEADERS: {
        Authorization: `Bearer ${TOKEN}`
    }
}