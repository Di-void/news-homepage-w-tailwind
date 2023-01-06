import { useState } from "react";
import { useClickOutSide } from "../../hooks/useClickOutSide";
import { VscMenu } from "react-icons/vsc";
import Logo from "../../assets/logo.svg";
import { navLinks } from "../../lib/navlinks";
import Sidebar from "./Sidebar";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const closeNav = () => {
    setIsNavOpen(() => {
      return false;
    });
  };

  let domNode = useClickOutSide(closeNav);

  return (
    <nav className="flex items-center justify-between p-4">
      <div className="w-[60px] hover:cursor-pointer">
        <img src={Logo} alt="/" className="w-full h-full" />
      </div>

      {/* LINKS */}
      <ul className="hidden md:flex justify-between gap-x-5">
        {navLinks.map((link) => {
          return (
            <li
              className="capitalize hover:cursor-pointer text-dark-grayish-blue hover:text-soft-orange transition-colors duraton-75"
              key={link.id}
            >
              {link.name}
            </li>
          );
        })}
      </ul>
      {/* END LINKS */}

      <button className="md:hidden" onClick={() => setIsNavOpen(true)}>
        <VscMenu size={25} />
      </button>

      <Sidebar closeNav={closeNav} navState={isNavOpen} domNode={domNode} />
    </nav>
  );
};

export default Navbar;
