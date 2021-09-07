import { useEffect, useState } from "react";
import { httpGetData } from "./httpRequests";
import ReposList from "./components/ReposList/ReposList";
import { IRepo } from "./types";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import "./stylesMain.scss";

function App() {
  const [reposList, setReposList] = useState<IRepo[]>([]);

  const fetchReposList = async () => {
    try {
      const data = await httpGetData();
      setReposList(data);
      return data;
    } catch (e) {
      return console.log({ e });
    }
  };

  useEffect(() => {
    fetchReposList();
  }, []);

  return (
    <div className="App">
      {!!reposList.length ? (
        <ReposList repos={reposList} />
      ) : (
        <Loader type="ThreeDots" color="#E5E5E5" height={80} width={80} />
      )}
    </div>
  );
}

export default App;
