import { appleImg, bagImg, searchImg } from "../utils";

const Navbar = () => {
  return (
    <header className="w-full py-5 sm:px-10 px-5 flex justify-between items-center">
      <nav className="flex w-full screen-max-width">
        <img src={appleImg} height={18} />

        <div className="flex flex-1 justify-center max-sm:hidden ">
          {["Phones,", "Macbooks", "Tablets"].map((nav, i) => (
            <div
              key={i}
              className="px-5 text-sm cursor-pointer text-gray hover:text-white transition-all"
            >
              {nav}
            </div>
          ))}
        </div>

        <div className="flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1">
          <img src={searchImg} alt="search" height={18} width={18} />

          <img src={bagImg} alt="search" height={18} width={18} />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
