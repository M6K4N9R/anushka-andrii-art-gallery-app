import Link from "next/link";
import styled from "styled-components";
import { useRouter } from "next/router";

const StyledNavBar = styled.nav`
  position: sticky;
  top: 0;
  // padding: 20px;
  // border: 2px solid black;
  background-color: #d89e39;
  font-size: 25px;
  color: "black";
  z-index: 10;
`;

const StyledList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0;
  pardding: 20px;
`;

const StyledListElement = styled.li``;

export default function Navigation() {
  const router = useRouter();
  return (
    <StyledNavBar>
      <StyledList>
        <StyledListElement className="nav-lists">
          <Link href="/">Spotlight Page</Link>
        </StyledListElement>
        <StyledListElement className="nav-lists">
          <Link href="/art-pieces">Art-Pieces</Link>
        </StyledListElement>
        <StyledListElement>
          <Link href="/favorites">Favourites</Link>
        </StyledListElement>
      </StyledList>
    </StyledNavBar>
  );
}
