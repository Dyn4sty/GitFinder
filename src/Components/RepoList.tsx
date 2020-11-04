import React from "react";
import { Repo, Repos } from "../types/types";
import RepoItem from "./RepoItem";

interface Props {
  loading: boolean;
  repos: Repos;
}

const RepoList = ({ repos, loading }: Props) => {
  if (loading) {
    return (
      <img
        style={{
          margin: "0 auto",
          maxWidth: "50%",
          width: "auto",
          display: "flex",
        }}
        src="/img/loader.svg"
      />
    );
  }
  if (!repos || repos.length === 0) {
    return (
      <span className=" is-flex is-justify-content-center">
        No repositories found.
      </span>
    );
  }
  return (
    <div className="container">
      <div className="columns is-multiline d-flex is-justify-content-center">
        {repos.map((repo: Repo) => (
          <div key={repo.id} className="column is-3 mx-3">
            <RepoItem key={repo.id} repo={repo} />
          </div>
        ))}
      </div>
    </div>
  );
};
export default RepoList;
