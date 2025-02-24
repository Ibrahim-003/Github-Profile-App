export type SearchProfileFunction = (name: string) => void;

export interface ProfileMapped {
  avatarUrl: string;
  login: string;
  reposUrl: string;
  bio: string | null;
  followers: number;
  following: number;
  location: string | null;
  repoUrl: string;
}

export interface RepoMapped {
    id: number;
    name: string;
    description: string | null;
    license: string | undefined;
    forks: number;
    stars: number;
    updateDate: string;
    gitUrl: string;
}

export interface ContentComponentProps {
  searchProfile: SearchProfileFunction;
  profileMaped: ProfileMapped;
}

export interface ProfileComponentProps {
  profileMaped: ProfileMapped;
}

// export type ProfileComponentProps = { profileMaped: ProfileMapped } | UserNotFound;

// export interface UserNotFound {
//     message: string,
//     documentation_url: string,
//     status: string,
// }

export interface SearchBarProps {
  onSearchProfile: SearchProfileFunction;
}

export interface RepositoryCardProps {
    repoData: RepoMapped;
    onClick: () => void;
}
