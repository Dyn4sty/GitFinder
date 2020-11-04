export type Repos = Repo[];
export type Repo = {
  name: string;
  id: string;
  description: string;
  html_url: string;
  language: string;
  updated_at: string;
  owner: {
    avatar_url?: string;
    login: string;
    html_url: string;
  };
};

export type RoutesConfig = Route[];
export type Route = {
  path: string;
  htmltitle: () => string;
  title: string;
};

export type Options = { value?: string; label?: string }[];
