export type SearchProfileFunction = (name: string) => void;

export interface UsersMapped {
  id: number;
  avatarUrl: string;
  login: string;
}

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


export interface SearchBarProps {
  onSearchProfile: SearchProfileFunction;
}

export interface RepositoryCardProps {
    repoData: RepoMapped;
    onClick: () => void;
}
