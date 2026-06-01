import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import HoverLinks from "./HoverLinks";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
export let lenis: Lenis | null = null;

const NavbarHome = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  useEffect(() => {
    // Only initialize Lenis on the home page
    if (window.location.pathname !== "/") return;

    // Skip lenis initialization on mobile or if already initialized
    if (window.innerWidth <= 768) return;

    lenis = new Lenis({
      duration: 1.7,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1.7,
      touchMultiplier: 2,
      infinite: false,
    });

    lenis.stop();
    (window as any).lenis = lenis;

    function raf(time: number) {
      lenis?.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    const links = document.querySelectorAll(".header ul a");
    links.forEach((elem) => {
      elem.addEventListener("click", (e) => {
        const elemAnchor = e.currentTarget as HTMLAnchorElement;
        const section = elemAnchor.getAttribute("data-href");
        if (window.location.pathname === "/" && section && lenis) {
          e.preventDefault();
          const target = document.querySelector(section) as HTMLElement;
          if (target) {
            lenis.scrollTo(target, {
              offset: 0,
              duration: 1.5,
            });
          }
        }
      });
    });

    const onResize = () => {
      lenis?.resize();
    };
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
      lenis?.destroy();
      lenis = null;
      (window as any).lenis = null;
    };
  }, []);

  return (
    <div className={`header ${isHome ? (isScrolled ? "scrolled" : "") : "subpage-header"}`}>
      <a href="/" className="navbar-title font-bold text-[13px] tracking-[0.2px] min-[500px]:text-[16px] min-[1200px]:text-[18px]">
        Hieu.
      </a>
      <a
        href="mailto:lch3504@gmail.com"
        className="navbar-connect absolute hidden min-[900px]:block top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[13px] min-[1200px]:text-[16px] tracking-[0.8px] font-medium hover:underline"
      >
        <HoverLinks text="lch3504@gmail.com" />
      </a>
      <ul className="flex flex-col min-[500px]:flex-row items-end min-[500px]:items-center text-[11px] min-[500px]:text-[14px] min-[1200px]:text-[16px] m-0 p-0 list-none gap-y-[6px] gap-x-[20px] min-[1200px]:gap-x-[80px]">
        <li className="ml-0 tracking-[0.8px] text-[#ccc] min-[500px]:text-[#eae5ec] font-semibold cursor-pointer">
          <a data-href="#about" href="/#about">
            <HoverLinks text="ABOUT" />
          </a>
        </li>
        <li className="ml-0 tracking-[0.8px] text-[#ccc] min-[500px]:text-[#eae5ec] font-semibold cursor-pointer">
          <a href="/projects">
            <HoverLinks text="WORK" />
          </a>
        </li>
        <li className="ml-0 tracking-[0.8px] text-[#ccc] min-[500px]:text-[#eae5ec] font-semibold cursor-pointer">
          <a data-href="#contact" href="/#contact">
            <HoverLinks text="CONTACT" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default NavbarHome;