import Search from "../../assets/images/search.svg?react";
import { SearchBarProps } from "../../types/types";
import { useSearch } from '../../hooks/useSearch';
import UserCard from "./UserCard";
import { usePotencialProfile } from '../../hooks/usePotencialProfile';

const SearchBar: React.FC<SearchBarProps> = ({onSearchProfile}) => {
  const {search, setSearch, isFirstInput, error} = useSearch();
  const {potencialProfiles, setPotencialProfiles, error: errorPotencial} = usePotencialProfile(search);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!error) {
      onSearchProfile(search);
    }
    isFirstInput.current = true;
    setSearch('')
    setPotencialProfiles(null);
    return;
  }

  const handleClick = (login: string) => {
    onSearchProfile(login);
    isFirstInput.current = true;
    setSearch('');
  }

  return (
    <section className="grid place-items-center gap-4 pt-6 px-4 sm:px-8">
      <form onSubmit={handleSubmit} className="w-full">
        <div className='relative w-full max-w-[484px] mx-auto flex items-center gap-3 bg-steel-blue rounded-md p-4 border-2 border-transparent focus-within:border-blue-500 transition-colors duration-200 ease-in-out'>
          <button type='submit' className='cursor-pointer'>
            <Search />
          </button>
          <input
            type='text'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder='Search GitHub username...'
            required
            className='min-w-[120px] w-full outline-none border-none'
          />
          {error && (
            <p className='absolute right-0 -bottom-7 text-xs text-red-500 sm:text-sm'>
              {error}
            </p>
          )}
        </div>
      </form>
      {!errorPotencial && potencialProfiles && potencialProfiles?.length > 0 && (
        <section className="w-full flex flex-col gap-2">
          {potencialProfiles.map((profile) => (
            <UserCard key={profile.id} login={profile.login} avatarUrl={profile.avatar_url} onClick={handleClick} />
          ))}
        </section>
      )}
    </section>
  );
};

export default SearchBar;
