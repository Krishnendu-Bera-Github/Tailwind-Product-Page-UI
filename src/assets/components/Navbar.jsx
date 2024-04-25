import { useState } from "react";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <nav className="max-w-6xl mx-auto p-5 ">
      <div className="flex justify-between items-center  ">
        <div className="flex gap-5 items-center">
          <div className="cursor-pointer sm:hidden" onClick={handleToggle}>
            <img src="/public/images/icon-menu.svg" alt="" />
          </div>
          <div className="cursor-pointer">
            <img src="/public/images/logo.svg" alt="" />
          </div>

          <div className="hidden md:flex gap-6 ml-12 font-semibold ">
            <p className="relative cursor-pointer group">
              Collections
              <span className="menu-hover"></span>
            </p>
            <p className="relative cursor-pointer group">
              Men <span className="menu-hover"></span>
            </p>
            <p className="relative cursor-pointer group">
              Women <span className="menu-hover"></span>
            </p>
            <p className="relative cursor-pointer group">
              About <span className="menu-hover"></span>
            </p>
            <p className="relative cursor-pointer group">
              Contact <span className="menu-hover"></span>
            </p>
          </div>
        </div>
        <div className="flex items-center gap-5">
          <div>
            <img
              className="cursor-pointer sm:w-6"
              src="/public/images/icon-cart.svg"
              alt=""
            />
          </div>
          <div>
            <img
              className="w-7 cursor-pointer hover:border border-orange rounded-full sm:w-10"
              src="/public/images/image-avatar.png"
              alt=""
            />
          </div>
        </div>
      </div>
      {toggle ? (
        <div className="bg-white w-2/3 inset-0 fixed p-5 sm:hidden">
          <img
            className="mb-10 cursor-pointer"
            src="public/images/icon-close.svg"
            alt=""
            onClick={handleToggle}
          />
          <div className="flex flex-col gap-5 text-lg font-semibold">
            <p>Collections</p>
            <p>Men</p>
            <p>Women</p>
            <p>About</p>
            <p>Contact</p>
          </div>
        </div>
      ) : (
        ""
      )}

      <div className="md:border mt-4"></div>
    </nav>
  );
};

export default Navbar;
