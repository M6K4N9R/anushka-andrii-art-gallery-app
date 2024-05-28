import Link from "next/link";
import styled from "styled-components";
import { useRouter } from "next/router";

const StyledNavBar = styled.nav`
  // margin: 20px;
  // padding: 20px;
  // border: 2px solid black;
  background-color: #d89e39;
  font-size: 25px;
  color: ${({ $isActive }) => ($isActive ? "#f6834f" : "black")};
`;

const StyledList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0;
  pardding: 20px;
`;

const styledListElement = styled.li``;

export default function Navigation() {
  const router = useRouter();
  return (
    <StyledNavBar className="styled-navbar">
      <StyledList>
        <styledListElement className="nav-lists">
          <Link href="/" $isActive={router.pathname === "/"}>
            Spotlight Page
          </Link>
        </styledListElement>
        <styledListElement className="nav-lists">
          <Link
            href="/art-pieces"
            $isActive={router.pathname === "/art-pieces"}
          >
            Art-Pieces
          </Link>
        </styledListElement>
        <styledListElement>
          <Link href="/favorites" $isActive={router.pathname === "/favorites"}>
            Favourites
          </Link>
        </styledListElement>
      </StyledList>
    </StyledNavBar>
  );
}
