import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { links } from "../../data/links";

import { useDispatch, useSelector } from "react-redux/es/exports";
import { closeSidebar } from "../../redux/SidebarSlice";

const SidebarMobile = () => {
  const { isSidebarOpen } = useSelector((state: any) => state.sidebar);
  const dispatch = useDispatch();
  return (
    <div>
      <aside
        className={`${
          isSidebarOpen
            ? "fixed top-0 left-0 w-[100%] h-[100%] z-hidden bg-white translate-y-full translate-y-0 z-show"
            : "fixed top-0 left-0 w-[100%] h-[100%] z-hidden bg-white translate-y-full"
        }`}
      >
        <div className="flex justify-end">
          <button
            className="text-[4rem] bg-transparent mr-8 mt-8"
            type="button"
            onClick={() => dispatch(closeSidebar())}
          >
            <FaTimes />
          </button>
        </div>
        <ul className="flex justify-center flex-col items-center">
          {links.map(({ id, text, url }) => {
            return (
              <li key={id}>
                <Link
                  className="text-[4rem] text-center hover:bg-[hsl(210, 36%, 96%)]"
                  to={url}
                  onClick={() => dispatch(closeSidebar())}
                >
                  {text}
                </Link>
              </li>
            );
          })}
        </ul>
      </aside>
    </div>
  );
};

export default SidebarMobile;
