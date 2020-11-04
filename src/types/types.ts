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
  };
};

export type RoutesConfig = Route[];
export type Route = {
  path: string;
  title: string;
};
