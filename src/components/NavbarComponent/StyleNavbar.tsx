import { AiOutlineMenu } from "react-icons/ai";
import { NavLink } from "react-router-dom";

const StyleNavbar = () => {
  return (
    <div>
      <nav>
        <button
          type="button"

          // onClick={() => dispatch(openSidebar())}
        >
          <AiOutlineMenu />
        </button>{" "}
        <NavLink
          to="/work"
          // className={({ isActive }) => (isActive ? "link active" : "link")}
        >
          Work
        </NavLink>
        <NavLink
          to="/blog"
          // className={({ isActive }) => (isActive ? "link active" : "link")}
        >
          Blog
        </NavLink>
        <NavLink
          to="/contact"
          // className={({ isActive }) => (isActive ? "link active" : "link")}
        >
          Contact
        </NavLink>
      </nav>
    </div>
  );
};

export default StyleNavbar;
