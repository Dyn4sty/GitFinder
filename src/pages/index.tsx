import Head from "next/head";
import { GetStaticProps } from "next";
import React, { useState, useEffect } from "react";
import Search from "../Components/Search";
import { searchRepos } from "../services/githubService";
import { Repos } from "../types/types";
import RepoList from "../Components/RepoList";
import { Container } from "react-bulma-components";

const Index = (props: { repos: Repos }) => {
  const [searchText, setSearchText] = useState("");
  const [language, setLanguage] = useState("");
  const [repos, setRepos] = useState<Repos>(props.repos);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const initial_repos = JSON.parse(window?.localStorage?.getItem("repos")!);
    if (initial_repos) {
      setRepos(initial_repos);
    }
  }, []);
  // State Function
  const handleLanguageChange = (language: string) => {
    setLanguage(language);
  };

  // State Function
  const handleSearchTextChange = (text: string) => {
    setSearchText(text);
    if (text) {
      loadRepos(text, language);
    }
  };

  // State Function
  const loadRepos = async (searchText: string, language: string) => {
    setLoading(true);
    try {
      const res = await searchRepos(searchText, language);
      setLoading(false);
      localStorage.setItem("repos", JSON.stringify(res?.data?.items));
      setRepos(res?.data?.items);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="container	is-flex">
        <img
          src="/img/study.svg"
          alt="Picture of the author"
          className="mb-5 px-3 is-justify-content-center"
          width="500px"
          height="auto"
          style={{ margin: "0 auto" }}
        />
      </div>
      <Container>
        <Search
          searchText={searchText}
          language={language}
          onSearchTextChange={handleSearchTextChange}
          onLanguageChange={handleLanguageChange}
        />
        <RepoList loading={loading} repos={repos} />
      </Container>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const searchText = "FashionOrb";
  const res = await searchRepos(searchText);
  return {
    props: {
      searchText: searchText,
      repos: res?.data?.items,
    },
  };
};

export default Index;
