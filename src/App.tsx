import responseProfiles from "./mocks/githubDataApi.json";
import ContentComponent from "./components/ContentComponent";
import HeroComponent from "./components/HeroComponent";

const App = () => {
  const searchProfile = (name: string) => {
    console.log(name);
  };

  const profileMaped = {
    avatarUrl: responseProfiles[2].avatar_url,
    login: responseProfiles[2].login,
    reposUrl: responseProfiles[2].repos_url,
    bio: responseProfiles[2].bio,
    followers: responseProfiles[2].followers,
    following: responseProfiles[2].following,
    location: responseProfiles[2].location,
    repoUrl: responseProfiles[2].html_url,
  };

  return (
    <main className='relative bg-steel-blue min-h-screen pb-8'>
      <HeroComponent />
      <ContentComponent
        searchProfile={searchProfile}
        profileMaped={profileMaped}
      />
    </main>
  );
};

export default App;
