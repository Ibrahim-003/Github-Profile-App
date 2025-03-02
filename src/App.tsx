import ContentComponent from "./components/layout/ContentComponent";
import HeroComponent from "./components/layout/HeroComponent";

const App = () => {
  return (
    <main className='relative bg-steel-blue min-h-screen pb-8'>
      <HeroComponent />
      <ContentComponent />
    </main>
  );
};

export default App;
