import { useState } from "react";
import { useProfile } from "../../hooks/useProfile";
import ProfileComponent from "../profile/ProfileComponent";
import SearchBar from "../search/SearchBar";

const ContentComponent: React.FC = () => {
  const [userName, setUserName] = useState<string>("");
  const { profileData, loading, error } = useProfile(userName);

  const searchProfile = (name: string) => {
    setUserName(name);
  };

  return (
    <section className='relative flex flex-col md:gap-[70px] md:pt-10 sm:px-8 px-4'>
      <SearchBar onSearchProfile={searchProfile} />
      {loading && <p>Loading...</p>}
      {error && (
        <section className='relative w-full mx-auto lg:max-w-[904px] xl:max-w-[1040px] grid place-items-center'>
          <p>{error}</p>
        </section>
      )}
      {profileData && <ProfileComponent profileMaped={profileData} />}
    </section>
  );
};

export default ContentComponent;
