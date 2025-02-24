import { ProfileComponentProps } from "./types";
import ProfileContent from "./ProfileContent";
import ProfileHeader from "./ProfileHeader";
import ProfileImage from "./ProfileImage";

const ProfileComponent: React.FC<ProfileComponentProps> = ({
  profileMaped,
}) => {
  const { avatarUrl, login, reposUrl, bio, followers, following, location, repoUrl } =
    profileMaped;

  return (
    <section className='relative w-full mx-auto lg:max-w-[904px] xl:max-w-[1040px]'>
      <ProfileImage avatarUrl={avatarUrl} login={login} />
      <ProfileHeader
        followers={followers}
        following={following}
        location={location}
      />
      <ProfileContent
        login={login}
        bio={bio}
        reposUrl={reposUrl}
        repoUrl={repoUrl}
      />
    </section>
  );
};

export default ProfileComponent;
