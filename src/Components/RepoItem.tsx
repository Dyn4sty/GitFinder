import Link from "next/link";
import React from "react";
import { Repo } from "../types/types";

interface RepoItemProps {
  repo: Repo;
}

const RepoItem = ({ repo }: RepoItemProps) => {
  const cutDescription = (description: string) => {
    if (description?.length > 100) {
      return description.slice(0, 100) + "...";
    }

    return description;
  };
  function capitalizeFirstLetter(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is-4by3">
          <img
            src={
              repo.owner.avatar_url ||
              "https://bulma.io/images/placeholders/1280x960.png"
            }
            alt="Placeholder image"
          />
        </figure>
      </div>
      <div className="card-content">
        <div className="media">
          <div className="media-left">
            <figure className="image is-48x48">
              <img
                src={
                  repo.owner.avatar_url ||
                  "https://bulma.io/images/placeholders/96x96.png"
                }
                loading="lazy"
                alt="Placeholder image"
              />
            </figure>
          </div>
          <div className="media-content is-center">
            <a
              className="title is-4 has-text-dark"
              target="_blank"
              href={repo.html_url}
            >
              {repo.name}
            </a>
            <br />
            <a className="subtitle is-6 has-text-primary">
              {capitalizeFirstLetter(repo.owner.login)}
            </a>
          </div>
        </div>

        <div className="content">
          {cutDescription(repo.description)} <br />
          <a href="#">#{repo.language} </a>
          <br />
          <time dateTime={repo.updated_at}>
            {new Date(repo.updated_at).toUTCString()}
          </time>
        </div>
      </div>
    </div>
  );
};

export default RepoItem;
