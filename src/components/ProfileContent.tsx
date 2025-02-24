import RepositoryList from "./RepositoryList";

interface ProfileContentProps {
  login: string;
  bio: string | null;
  reposUrl: string;
  repoUrl: string;
}

const ProfileContent: React.FC<ProfileContentProps> = ({ login, bio, reposUrl, repoUrl }) => {
  return (
    <section>
      <div className='w-full max-w-[440px] xl:max-w-[540px] mb-8 '>
        <h1 className='text-[32px] mb-2'>{login}</h1>
        {bio && <p className='text-cloud-gray'>{bio}</p>}
      </div>
      <RepositoryList reposUrl={reposUrl} repoUrl={repoUrl} />
    </section>
  );
};

export default ProfileContent;
