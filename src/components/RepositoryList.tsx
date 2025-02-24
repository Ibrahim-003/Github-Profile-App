import { useRepos } from "../hooks/useRepos";
import ProfileFooter from "./ProfileFooter";
import RepositoryCard from "./RepositotyCard";

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
      <section
        className={`w-full mx-auto ${
          reposData.length > 0 ? "grid sm:grid-cols-2 justify-center gap-5" : ""
        }`}
      >
        {error && <p>{error}</p>}
        {reposData && reposData.length > 0 ? (
          reposData?.map((repo) => (
            <RepositoryCard
              key={repo.id}
              repoData={repo}
              onClick={() => handleClick(repo.gitUrl)}
            />
          ))
        ) : (
          <p className='text-center'>The user don't have any repository yet!</p>
        )}
      </section>
      {reposData.length > 0 && <ProfileFooter repoUrl={repoUrl} />}
    </>
  );
};

export default RepositoryList;
