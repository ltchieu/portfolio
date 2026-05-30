import HoverLinks from "./HoverLinks";

const NavbarHome = () => {
  return (
    <div className="header fixed top-[30px] left-1/2 -translate-x-1/2 flex justify-between items-center w-[var(--cWidth)] max-w-[var(--cMaxWidth)] py-[20px] -mb-[80px] box-border z-[9999]">
      <a href="/" className="navbar-title font-bold text-[13px] tracking-[0.2px] min-[500px]:text-[16px] min-[1200px]:text-[18px]">
        Hieu.
      </a>
      <a
        href="mailto:conghieu04@gmail.com"
        className="navbar-connect absolute hidden min-[900px]:block top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[13px] min-[1200px]:text-[16px] tracking-[0.8px] font-medium hover:underline"
      >
        <HoverLinks text="conghieu04@gmail.com" />
      </a>
      <ul className="flex flex-col min-[500px]:flex-row items-end min-[500px]:items-center text-[11px] min-[500px]:text-[14px] min-[1200px]:text-[16px] m-0 p-0 list-none gap-y-[6px] gap-x-[20px] min-[1200px]:gap-x-[80px]">
        <li className="ml-0 tracking-[0.8px] text-[#ccc] min-[500px]:text-[#eae5ec] font-semibold cursor-pointer">
          <a href="/about">
            <HoverLinks text="ABOUT" />
          </a>
        </li>
        <li className="ml-0 tracking-[0.8px] text-[#ccc] min-[500px]:text-[#eae5ec] font-semibold cursor-pointer">
          <a href="/projects">
            <HoverLinks text="WORK" />
          </a>
        </li>
        <li className="ml-0 tracking-[0.8px] text-[#ccc] min-[500px]:text-[#eae5ec] font-semibold cursor-pointer">
          <a href="/resume">
            <HoverLinks text="CONTACT" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default NavbarHome;