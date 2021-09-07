import { FC } from "react";
import { IRepo } from "../../types";
import "./stylesReposListItem.scss";

interface ReposListItemProps {
  repo: IRepo;
}

const ReposListItem: FC<ReposListItemProps> = ({ repo }) => {
  return (
    <div className="reposListItem">
      <div className="avatar">
        <img src={repo.owner.avatar_url} alt="avatar" />
      </div>
      <div className="userName">{repo.owner.login}</div>
      <div className="repoName">{repo.name}</div>
      <a className="repoUrl" href={repo.html_url}>
        {repo.html_url}
      </a>
      <div className="description">{repo.description}</div>
    </div>
  );
};
export default ReposListItem;
