import CharacterModel from "../component/Character";
import NavbarHome from "../component/Navbar";
import { LoadingProvider } from "../context/LoadingProvider";
import SocialIconsHome from "../component/SocialIconHome";

const HomeContent = () => {
  return (
    <div className="container-main w-full mx-auto relative">
      <NavbarHome />
      <SocialIconsHome />
      <div className="landing-section relative mx-auto w-full max-w-[100vw] h-auto min-h-screen box-border flex flex-col px-[15px] pb-[40px] min-[769px]:max-w-[var(--cMaxWidth)] min-[769px]:h-[var(--vh)] min-[769px]:min-h-0 min-[769px]:block min-[769px]:p-0" id="landingDiv">
        <div className="landing-container relative mx-auto w-full max-w-[100vw] h-auto min-h-screen box-border flex flex-col px-[15px] pb-[40px] min-[769px]:w-[var(--cWidth)] min-[769px]:max-w-[var(--cMaxWidth)] min-[769px]:h-full min-[769px]:min-h-0 min-[769px]:block min-[769px]:p-0">
          <div className="landing-intro relative pt-[40px] mb-[20px] z-10 text-center w-full order-1 h-auto min-[769px]:absolute min-[769px]:top-[5%] min-[769px]:left-0 min-[769px]:text-center min-[769px]:w-full min-[769px]:order-none min-[769px]:pt-0 min-[769px]:mb-0 min-[1025px]:top-[40%] min-[1025px]:left-auto min-[1025px]:right-[66%] min-[1200px]:right-[70%] min-[1025px]:-translate-y-1/2 min-[1025px]:text-left min-[1025px]:w-auto min-[1025px]:translate-x-0">
            <h2 className="m-0 text-[var(--accentColor)] font-light tracking-[2px] block w-auto text-[22px] min-[500px]:text-[18px] min-[769px]:text-[25px] min-[1600px]:text-[35px] text-center min-[1025px]:text-left">Hello! I'm</h2>
            <h1 className="m-0 tracking-[2px] font-medium font-['Geist',sans-serif] text-[28px] leading-[28px] min-[500px]:text-[30px] min-[500px]:leading-[30px] min-[769px]:text-[40px] min-[769px]:leading-[35px] min-[1600px]:text-[60px] min-[1600px]:leading-[55px]">
              LE TRUONG
              <br className="block mb-[5px]" />
              <span> CONG HIEU</span>
            </h1>
          </div>
          <div className="landing-info relative mt-[20px] z-10 bg-transparent pb-[50px] flex flex-col items-center gap-[10px] h-auto w-full order-3 text-center min-[769px]:absolute min-[769px]:bottom-[40px] min-[769px]:right-1/2 min-[769px]:translate-x-1/2 min-[769px]:top-auto min-[769px]:left-auto min-[769px]:w-full min-[769px]:order-none min-[1025px]:bottom-auto min-[1025px]:top-[51%] min-[1025px]:left-[66%] min-[1200px]:left-[70%] min-[1025px]:right-auto min-[1025px]:translate-x-0 min-[1025px]:-translate-y-1/2 min-[1025px]:mt-0 min-[1025px]:pb-0 min-[1025px]:block min-[1025px]:w-auto min-[1025px]:text-left">
            <h3 className="m-0 text-[var(--accentColor)] font-light tracking-[2px] hidden min-[769px]:block min-[769px]:text-[25px] min-[1600px]:text-[35px] min-[1025px]:text-left">An</h3>
            <h2 className="landing-info-h2 m-0 text-[#c481ff] font-semibold font-['Geist',sans-serif] relative block w-auto text-[20px] leading-[1.5] text-center min-[769px]:w-[150%] min-[769px]:ml-[-5px] min-[769px]:text-[36px] min-[769px]:leading-none min-[769px]:h-auto min-[769px]:after:content-[''] min-[769px]:after:absolute min-[769px]:after:w-full min-[769px]:after:h-[120%] min-[769px]:after:z-[3] min-[769px]:after:bg-gradient-to-t min-[769px]:after:from-[var(--backgroundColor)] min-[769px]:after:from-40% min-[769px]:after:to-transparent min-[769px]:after:to-110% min-[769px]:after:top-0 min-[769px]:after:left-0 min-[1025px]:text-[55px] min-[1600px]:text-[75px] min-[1025px]:text-left">
              <div className="landing-h2-1 block w-auto m-0 text-[24px] font-bold text-[var(--accentColor)] leading-[1.5] text-center min-[769px]:text-[36px] min-[769px]:font-semibold min-[769px]:text-[#c481ff] min-[769px]:text-left min-[769px]:leading-none min-[1025px]:text-[45px] min-[1200px]:text-[45px] min-[1600px]:text-[65px]">Software Developer</div>
              <div className="landing-h2-2 block w-auto m-0 text-[20px] leading-[1.5] text-center absolute top-0 left-0 right-0 min-[769px]:right-auto min-[769px]:left-auto min-[769px]:text-left min-[769px]:leading-none min-[769px]:whitespace-nowrap min-[1025px]:text-[45px] min-[1200px]:text-[45px] min-[1600px]:text-[65px] opacity-0">C#/.NET Developer</div>
            </h2>
            <h2 className="m-0 font-semibold font-['Geist',sans-serif] relative flex flex-wrap uppercase tracking-[2px] text-center justify-center min-[769px]:justify-start min-[769px]:ml-[20px] min-[769px]:-mt-[20px] block w-auto text-[20px] leading-[1.5] min-[769px]:text-[28px] min-[769px]:leading-[40px] min-[769px]:whitespace-nowrap min-[769px]:text-left min-[1025px]:text-[45px] min-[1025px]:leading-[42px] min-[1600px]:text-[65px] min-[1600px]:leading-[62px]">
              <div className="landing-h2-info block w-auto m-0 text-[18px] text-[rgba(255,255,255,0.9)] leading-[1.5] text-center min-[769px]:text-[28px] min-[769px]:text-left min-[769px]:leading-none min-[769px]:whitespace-nowrap min-[1025px]:text-[45px] min-[1600px]:text-[65px]">Back-End Developer</div>
              <div className="landing-h2-info-1 block w-auto m-0 text-[20px] leading-[1.5] text-center absolute top-0 left-0 right-0 min-[769px]:right-auto min-[769px]:left-auto min-[769px]:text-left min-[769px]:leading-none min-[769px]:whitespace-nowrap min-[1025px]:text-[45px] min-[1600px]:text-[65px] opacity-0">Java Developer</div>
            </h2>
          </div>
          {/* Mobile photo - shows only on mobile when 3D character is hidden */}
          <div className="mobile-photo block relative w-full max-w-[380px] mx-auto z-1 order-2 min-[769px]:hidden pointer-events-none [mask-image:linear-gradient(to_bottom,black_85%,transparent_100%)]">
            <img src="/images/mypicnbg.png" alt="Lê Trương Công Hiếu" className="w-full h-auto object-contain drop-shadow-[0_0_40px_rgba(194,164,255,0.4)]" />
          </div>
        </div>
      </div>
      <CharacterModel />
      <div className="landing-circle1 fixed top-0 left-0 z-15 w-[300px] h-[300px] bg-[#fb8dff] shadow-[inset_-50px_40px_50px_rgba(84,0,255,0.6)] blur-[60px] rounded-full animate-[loadingCircle_5s_linear_infinite]"></div>
      <div className="landing-circle2 hidden md:block fixed top-1/2 right-0 translate-x-[calc(100%-2px)] -translate-y-1/2 z-9 w-[300px] h-[300px] bg-[#fb8dff] shadow-[inset_-50px_40px_50px_rgba(84,0,255,0.6)] blur-[50px] rounded-full animate-[loadingCircle2_5s_linear_infinite]"></div>
      <div className="nav-fade fixed top-0 w-full h-[130px] bg-gradient-to-t from-[var(--backgroundColor)] from-70% to-transparent pointer-events-none z-12 opacity-0 left-0"></div>
    </div>
  );
};

const Home = () => {
  return (
    <LoadingProvider>
      <HomeContent />
    </LoadingProvider>
  );
};

export default Home;
