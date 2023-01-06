import { useState } from "react";
import { VscMenu } from "react-icons/vsc";
import Logo from "../../assets/logo.svg";
import Sidebar from "./Sidebar";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const closeNav = () => {
    setIsNavOpen(() => {
      return false;
    });
  };

  return (
    <nav className="flex items-center justify-between p-4 relative">
      <div className="w-[60px]">
        <img src={Logo} alt="/" className="w-full h-full" />
      </div>

      <button className="md:hidden" onClick={() => setIsNavOpen(true)}>
        <VscMenu size={25} />
      </button>

      <Sidebar closeNav={closeNav} navState={isNavOpen} />
    </nav>
  );
};

export default Navbar;
