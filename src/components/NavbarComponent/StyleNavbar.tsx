import { AiOutlineMenu } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { openSidebar } from "../../redux/SidebarSlice";
import { useDispatch } from "react-redux/es/exports";

const StyleNavbar = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <nav className="flex justify-end mr-[3rem] mt-[2rem] mb-[10rem] gap-x-16">
        <button
          className="text-[4.5rem] normal:hidden"
          type="button"
          onClick={() => dispatch(openSidebar())}
        >
          <AiOutlineMenu />
        </button>{" "}
        <NavLink
          to="/work"
          className={({ isActive }) =>
            isActive
              ? "text-xl font-medium font-sans leading-[2.9rem] text-[#FF6464] mobile:hidden"
              : "text-xl font-medium font-sans leading-[2.9rem] mobile:hidden "
          }
        >
          Work
        </NavLink>
        <NavLink
          to="/blog"
          className={({ isActive }) =>
            isActive
              ? "text-xl font-medium font-sans leading-[2.9rem] text-[#FF6464]  mobile:hidden"
              : "text-xl font-medium font-sans leading-[2.9rem]  mobile:hidden"
          }
        >
          Blog
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive
              ? "text-xl font-medium font-sans leading-[2.9rem] text-[#FF6464] mobile:hidden"
              : "text-xl font-medium font-sans leading-[2.9rem] mobile:hidden "
          }
        >
          Contact
        </NavLink>
      </nav>
    </div>
  );
};

export default StyleNavbar;
