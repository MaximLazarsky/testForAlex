import { FC, ChangeEvent, useEffect } from "react";
import { useState } from "react";
import { IRepo } from "../../types";
import ReposListItem from "../ReposListItem/ReposListItem";
import "./stylesReposList.scss";
import Pagination from "../Pagination/Pagination";
import Search from "../Search/Search";

interface RepoListProps {
  repos: IRepo[];
}

const ReposList: FC<RepoListProps> = ({ repos }) => {
  const [reposPerPage, setReposPerPage] = useState<number>(10);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [searchString, setSearchString] = useState<string>("");
  const lastReposIndex = currentPage * reposPerPage;
  const firstReposIndex = lastReposIndex - reposPerPage;
  const [currentRepos, setCurrentRepos] = useState(
    repos.slice(firstReposIndex, lastReposIndex)
  );
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
  const onChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchString(event.target.value);
  };

  const search = (searchString: string) => {
    const currentRepos = repos.filter((repo) =>
      repo.name.includes(searchString)
    );
    setCurrentRepos(currentRepos);
  };

  useEffect(() => search(searchString), [searchString]);

  return (
    <>
      <Search repos={repos} onChangeSearch={onChangeSearch} />
      <ul className="reposList">
        {currentRepos.map((repo) => (
          <li key={repo.id}>
            <ReposListItem repo={repo} />
          </li>
        ))}
      </ul>
      {!searchString && (
        <Pagination
          perPage={reposPerPage}
          totalItems={repos.length}
          paginate={paginate}
        />
      )}
    </>
  );
};

export default ReposList;
