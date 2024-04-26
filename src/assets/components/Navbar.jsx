import { useState } from "react";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [cartToggle, setCartToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const handleCartToggle = () => {
    setCartToggle(!cartToggle);
  };

  return (
    <nav className="max-w-6xl mx-auto p-5 relative">
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
              onClick={handleCartToggle}
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
        <div className="bg-white z-10 w-2/3 inset-0 fixed p-5 sm:hidden">
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

      {cartToggle ? (
        <div className="absolute w-[95%] h-60 bg-white z-20 left-0 right-0 top-24 -bottom-12 rounded-lg mx-auto p-2 sm:w-96 sm:left-auto sm:bg-lightGrayishBlue sm:right-4 sm:h-52 ">
          <span className="px-4 my-8 font-semibold">Cart</span>
          <div className="border my-4"></div>

          <div className="flex items-center ">
            <div className="px-4">
              <img
                className="h-16 rounded-lg sm:h-12"
                src="public/images/image-product-1-thumbnail.jpg"
                alt=""
              />
            </div>
            <div>
              <p className="text-xl sm:text-lg">
                Fall Limitless Edition Sneakers
              </p>
              <p>
                $125 x 3 <span className="font-bold pl-5">$375.00</span>
              </p>
            </div>
            <div className="px-4">
              <img src="public/images/icon-delete.svg" alt="" />
            </div>
          </div>
          <div className="p-4 mt-2 sm:p-2">
            <button className="bg-orange w-full py-4 rounded-2xl">
              Checkout
            </button>
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
