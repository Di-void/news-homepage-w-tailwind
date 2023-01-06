import { GrClose } from "react-icons/gr";
import { navLinks } from "../../lib/navlinks";

const Sidebar = ({ navState, closeNav }) => {
  return (
    <aside
      className={`absolute left-0 top-0 h-screen w-full md:hidden ${
        navState ? "" : "invisible pointer-events-none"
      }`}
    >
      {/* OVERLAY */}
      <div className="bg-black bg-opacity-50 w-full h-full relative">
        {/* LINKS */}
        <div className=" bg-white h-full w-[65%] absolute right-0 max-w-sm px-5 py-4">
          <div className="flex justify-end">
            <button className="hover:cursor-pointer" onClick={closeNav}>
              <GrClose size={30} />
            </button>
          </div>

          <div className="mt-16">
            <ul className="flex flex-col gap-y-4">
              {navLinks.map((link) => {
                return (
                  <li
                    key={link.id}
                    className="font-normal text-xl capitalize text-black hover:cursor-pointer hover:text-soft-orange transition-colors duraton-75"
                  >
                    {link.name}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        {/* END LINKS */}
      </div>
      {/* END OVERLAY */}
    </aside>
  );
};

export default Sidebar;
