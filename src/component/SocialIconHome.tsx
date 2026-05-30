import { useRef, useEffect } from "react";
import { FaGithub, FaLinkedinIn, FaFacebookF, FaInstagram, FaRegFilePdf } from "react-icons/fa6";
import HoverLinks from "./HoverLinks";

const SocialIconsHome = () => {
    const socialRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const social = socialRef.current;
        if (!social) return;

        const cleanupFns: (() => void)[] = [];

        social.querySelectorAll("span").forEach((item) => {
            const elem = item as HTMLElement;
            const link = elem.querySelector("a") as HTMLElement;
            if (!link) return;

            const rect = elem.getBoundingClientRect();
            let mouseX = rect.width / 2;
            let mouseY = rect.height / 2;
            let currentX = 0;
            let currentY = 0;
            let animationFrameId: number;

            const updatePosition = () => {
                currentX += (mouseX - currentX) * 0.1;
                currentY += (mouseY - currentY) * 0.1;

                link.style.setProperty("--siLeft", `${currentX}px`);
                link.style.setProperty("--siTop", `${currentY}px`);

                animationFrameId = requestAnimationFrame(updatePosition);
            };

            const onMouseMove = (e: MouseEvent) => {
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;

                if (x < 40 && x > 10 && y < 40 && y > 5) {
                    mouseX = x;
                    mouseY = y;
                } else {
                    mouseX = rect.width / 2;
                    mouseY = rect.height / 2;
                }
            };

            document.addEventListener("mousemove", onMouseMove);
            updatePosition();

            cleanupFns.push(() => {
                document.removeEventListener("mousemove", onMouseMove);
                cancelAnimationFrame(animationFrameId);
            });
        });

        return () => {
            cleanupFns.forEach((fn) => fn());
        };
    }, []);

    return (
        <div className="icons-section fixed max-w-[var(--cMaxWidth)] w-[var(--cWidth)] bottom-0 z-[99] left-1/2 -translate-x-1/2">
            <div className="social-icons absolute -left-[20px] bottom-[20px] hidden min-[900px]:flex flex-col gap-[8px] min-[900px]:gap-[20px] z-[999] p-[10px] group/social" data-cursor="icons" ref={socialRef} id="social">
                <span className="w-[50px] h-[50px] relative flex">
                    <a href="https://github.com/ltchieu" target="_blank" rel="noopener noreferrer" className="absolute left-[var(--siLeft,50%)] top-[var(--siTop,50%)] -translate-x-1/2 -translate-y-1/2 flex text-[23px] min-[900px]:text-[28px] transition-transform duration-300 ease-out group-hover/social:text-[var(--backgroundColor)] hover:!text-[#c481ff]">
                        <FaGithub />
                    </a>
                </span>
                <span className="w-[50px] h-[50px] relative flex">
                    <a href="https://www.linkedin.com/in/letruongconghieu/" target="_blank" rel="noopener noreferrer" className="absolute left-[var(--siLeft,50%)] top-[var(--siTop,50%)] -translate-x-1/2 -translate-y-1/2 flex text-[23px] min-[900px]:text-[28px] transition-transform duration-300 ease-out group-hover/social:text-[var(--backgroundColor)] hover:!text-[#c481ff]">
                        <FaLinkedinIn />
                    </a>
                </span>
                <span className="w-[50px] h-[50px] relative flex">
                    <a href="https://www.facebook.com/conghiu04" target="_blank" rel="noopener noreferrer" className="absolute left-[var(--siLeft,50%)] top-[var(--siTop,50%)] -translate-x-1/2 -translate-y-1/2 flex text-[23px] min-[900px]:text-[28px] transition-transform duration-300 ease-out group-hover/social:text-[var(--backgroundColor)] hover:!text-[#c481ff]">
                        <FaFacebookF />
                    </a>
                </span>
                <span className="w-[50px] h-[50px] relative flex">
                    <a href="https://www.instagram.com/ltc.hiu/" target="_blank" rel="noopener noreferrer" className="absolute left-[var(--siLeft,50%)] top-[var(--siTop,50%)] -translate-x-1/2 -translate-y-1/2 flex text-[23px] min-[900px]:text-[28px] transition-transform duration-300 ease-out group-hover/social:text-[var(--backgroundColor)] hover:!text-[#c481ff]">
                        <FaInstagram />
                    </a>
                </span>
            </div>
            <a className="resume-button absolute z-[99] flex gap-[5px] bottom-[40px] right-0 w-auto whitespace-nowrap tracking-[4px] text-[15px] leading-[15px] md:text-[20px] md:leading-[20px] font-semibold text-[#5e5e5e] cursor-pointer transition-all duration-500 origin-bottom-left translate-x-full md:translate-x-0 -rotate-90 md:rotate-0 hover:text-white group/resume" href="/resume">
                <HoverLinks text="RESUME" />
                <span className="text-white text-[17px] md:text-[23px] -mt-[1px] md:-mt-[1.5px] flex items-center group-hover/resume:text-white">
                    <FaRegFilePdf />
                </span>
            </a>
        </div>
    );
}
export default SocialIconsHome