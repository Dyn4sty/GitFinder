import { RoutesConfig } from "../types/types";
export const BASE_TITLE = "GitFinder";
export const ROUTES_CONFIG: RoutesConfig = [
  {
    path: "/",
    title: "Home",
    htmltitle() {
      return `${BASE_TITLE} | ${this.title}`;
    },
  },
  {
    path: "/about",
    title: "About",
    htmltitle() {
      return `${BASE_TITLE} | ${this.title}`;
    },
  },
];

export function getTitle(routePath: string) {
  const route = ROUTES_CONFIG.find((route) => route.path === routePath);
  return route?.htmltitle();
}
