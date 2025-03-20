import { Link } from "react-router-dom";

export function MainNav() {
  return (
    <nav className="self-center flex w-full max-w-[1193px] items-stretch gap-5 text-base font-medium justify-between max-md:max-w-full">
      <Link to="/">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/a7e79ca4c57b230c8810fc1f4e2c7fa7050d47d4?placeholderIfAbsent=true"
          alt="MasterCab Logo"
          className="aspect-[3.95] object-contain w-[154px] shrink-0 max-w-full"
        />
      </Link>

      <div className="flex min-h-[31px] items-center text-[rgba(45,45,45,1)] my-auto max-md:max-w-full">
        <div className="self-stretch min-w-60 w-[478px] my-auto max-md:max-w-full">
          <div className="flex gap-[40px_60px] justify-center max-md:max-w-full">
            <Link
              to="/"
              className="text-[rgba(12,83,139,1)] font-bold whitespace-nowrap w-[57px] rounded-[0px_0px_0px_0px]"
            >
              Home
            </Link>
            <Link to="/about" className="w-[58px]">
              About
            </Link>
            <Link to="/contact" className="w-[90px]">
              Contact us
            </Link>
            <div className="flex items-stretch gap-3.5 whitespace-nowrap w-[93px]">
              <Link to="/services">Services</Link>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/34b3845a12023919d381da267ba1b9ff6227c1f5?placeholderIfAbsent=true"
                alt="Dropdown"
                className="aspect-[2] object-contain w-3.5 shrink-0 my-auto"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-stretch gap-[27px] text-white text-center tracking-[0.1px] leading-[1.4] mt-1">
        <button className="bg-[rgba(245,149,79,1)] flex items-stretch gap-[26px] px-5 py-[9px] rounded-[5px]">
          <span className="basis-auto my-auto">Aniket Chavan</span>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/3e982a680c743cedcb087a1410796253bad33d49?placeholderIfAbsent=true"
            alt="Profile"
            className="aspect-[1] object-contain w-4 shrink-0"
          />
        </button>
        <button>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/843503b52fa814fc3ff9312032b4c322b22026f9?placeholderIfAbsent=true"
            alt="Notifications"
            className="aspect-[0.9] object-contain w-[18px] shrink-0 my-auto"
          />
        </button>
      </div>
    </nav>
  );
}
