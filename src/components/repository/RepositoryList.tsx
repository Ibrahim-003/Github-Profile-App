import { useRepos } from "../../hooks/useRepos";
import ProfileFooter from "../profile/ProfileFooter";
import RepositoryCard from "./RepositoryCard";

interface RepositoryList {
  reposUrl: string;
  repoUrl: string;
}

const RepositoryList: React.FC<RepositoryList> = ({ reposUrl, repoUrl }) => {
  const { reposData, loading, error } = useRepos(reposUrl);

  const handleClick = (gitUrl: string) => {
    window.open(gitUrl, "_blank");
  };

  if (loading) {
    return (
        <p>Loading...</p>
    )
  }

  return (
    <>
      <section>
        {error && <p>{error}</p>}
        {reposData && reposData.length > 0 ? (
          <>
            <section className={`w-full mx-auto ${
          reposData.length > 0 ? "grid sm:grid-cols-2 justify-center gap-5" : ""
        }`}>
              {reposData?.map((repo) => (
                <RepositoryCard
                  key={repo.id}
                  repoData={repo}
                  onClick={() => handleClick(repo.gitUrl)}
                />
              ))}
            </section>
            <ProfileFooter repoUrl={repoUrl} />
          </>
        ) : (
          <p className='text-center'>The user don't have any repository yet!</p>
        )}
      </section>
    </>
  );
};

export default RepositoryList;
