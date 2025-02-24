import {useState} from 'react';
import Search from "../assets/search.svg?react";
import { SearchBarProps } from './types';

const SearchBar: React.FC<SearchBarProps> = ({onSearchProfile}) => {
  const [movieName, setMovieName] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSearchProfile(movieName);
    setMovieName('')
  }

  return (
    <section>
      <form onSubmit={handleSubmit} className='p-6'>
        <div className='w-full max-w-[484px] mx-auto flex items-center gap-3 bg-steel-blue rounded-md p-4 border-2 border-transparent focus-within:border-blue-500 transition-colors duration-200 ease-in-out'>
          <button type='submit' className='cursor-pointer'>
            <Search />
          </button>
          <input
            type='text'
            placeholder='type here'
            value={movieName}
            onChange={(e) => setMovieName(e.target.value)}
            required
            className='min-w-[120px] w-full outline-none border-none'
          />
        </div>
      </form>
    </section>
  );
};

export default SearchBar;
