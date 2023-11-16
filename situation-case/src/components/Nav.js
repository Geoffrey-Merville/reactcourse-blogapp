import CustomLink from "./RouterLinks/CustomLink";
import { useContext } from "react";
import DataContext from "../context/DataContext";

const Nav = () => {
  const { search, setSearch } = useContext(DataContext);
  return (
    <nav className="Nav">
      <form className="searchForm" onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="search">Search Posts</label>
        <input
          type="text"
          id="search"
          placeholder="Search Posts"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>
      <ul>
        <CustomLink value="/" />
        <CustomLink value="post" />
        <CustomLink value="about" />
      </ul>
    </nav>
  );
};

export default Nav;
