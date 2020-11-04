import React, { useState } from "react";
import Link from "next/link";
import { Navbar } from "react-bulma-components";
import { useRouter } from "next/router";
import { Route } from "../../types/types";
import { ROUTES_CONFIG } from "../../constants/routes.constants";
const Header = (): JSX.Element => {
  const [active, setActive] = useState(false);
  const router = useRouter();

  return (
    <>
      <Navbar
        color="primary"
        fixed="top"
        active={active}
        className="has-shadow"
      >
        <Navbar.Brand>
          <Link href="/">
            <Navbar.Item>GitFinder 📦</Navbar.Item>
          </Link>
          <Navbar.Burger onClick={() => setActive(!active)} />
        </Navbar.Brand>

        <Navbar.Menu>
          <Navbar.Container>
            {/* <Navbar.Item dropdown hoverable href="#">
              <Navbar.Link arrowless={true}>First</Navbar.Link>
              <Navbar.Dropdown>
                <Navbar.Item href="#">Subitem 1</Navbar.Item>
                <Navbar.Item href="#">Subitem 2</Navbar.Item>
              </Navbar.Dropdown>
            </Navbar.Item> */}
            {ROUTES_CONFIG.map((route: Route) => (
              <Link key={route.title} href={route.path}>
                <Navbar.Item
                  onClick={() => setActive(!active)}
                  active={router.pathname === route.path}
                >
                  {route.title}
                </Navbar.Item>
              </Link>
            ))}
          </Navbar.Container>
          {/* <Navbar.Container position="end">
            <Navbar.Item href="#">SignIn</Navbar.Item>
          </Navbar.Container> */}
        </Navbar.Menu>
      </Navbar>
    </>
  );
};

export default Header;
