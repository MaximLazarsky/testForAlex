import "./stylesSearch.scss";
import { IRepo } from "../../types";
import { FC, ChangeEvent } from "react";

interface SearchProps {
  repos: IRepo[];
  onChangeSearch: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Search: FC<SearchProps> = ({ repos, onChangeSearch }) => {
  return (
    <input
      className="search"
      placeholder="enter repo name"
      onChange={onChangeSearch}
    />
  );
};

export default Search;
