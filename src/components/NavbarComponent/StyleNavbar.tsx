import { AiOutlineMenu } from "react-icons/ai";
import { NavLink } from "react-router-dom";

const StyleNavbar = () => {
  return (
    <div>
      <nav className="flex justify-end mr-[9rem] mt-[2rem] mb-[10rem] gap-x-16">
        <button
          type="button"

          // onClick={() => dispatch(openSidebar())}
        >
          {/* <AiOutlineMenu /> */}
        </button>{" "}
        <NavLink
          to="/work"
          className={({ isActive }) =>
            isActive
              ? "text-xl font-medium font-sans leading-[2.9rem] text-[#FF6464]"
              : "text-xl font-medium font-sans leading-[2.9rem] "
          }
        >
          Work
        </NavLink>
        <NavLink
          to="/blog"
          className={({ isActive }) =>
            isActive
              ? "text-xl font-medium font-sans leading-[2.9rem] text-[#FF6464]"
              : "text-xl font-medium font-sans leading-[2.9rem] "
          }
        >
          Blog
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive
              ? "text-xl font-medium font-sans leading-[2.9rem] text-[#FF6464]"
              : "text-xl font-medium font-sans leading-[2.9rem] "
          }
        >
          Contact
        </NavLink>
      </nav>
    </div>
  );
};

export default StyleNavbar;
