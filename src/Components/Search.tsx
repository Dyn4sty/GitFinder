import React from "react";
import { Options } from "../types/types";
import LANGUAGES from "../constants/languages.constant";
import { Form } from "react-bulma-components";

interface SearchProps {
  language: string;
  searchText?: string;
  onSearchTextChange: (text: string) => void;
  onLanguageChange: (language: string) => void;
}

export const Search = ({
  language,
  searchText,
  onSearchTextChange,
  onLanguageChange,
}: SearchProps) => {
  const langauges: Options = [{ value: "", label: "All" }, ...LANGUAGES];
  return (
    <div className="is-flex is-flex-wrap-wrap is-justify-content-center mb-5">
      <Form.Control className="px-5">
        <Form.Label>Name</Form.Label>
        <Form.Input
          value={searchText}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => onSearchTextChange(e.target.value)}
          placeholder="Search Repo"
          className="is-primary mb-3"
        />
      </Form.Control>
      <Form.Control>
        <Form.Label>Language</Form.Label>
        <Form.Select
          value={language}
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
            onLanguageChange(e.target.value)
          }
          className="is-primary"
        >
          {langauges?.map((option) => (
            <option key={option.label} value={option.value}>
              {option.label}
            </option>
          ))}
        </Form.Select>
      </Form.Control>
    </div>
  );
};

export default Search;
