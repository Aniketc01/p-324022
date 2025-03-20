import { useState } from "react";
import { Link } from "react-router-dom";

export function Footer() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log("Subscribe email:", email);
  };

  return (
    <footer className="relative min-h-[464px] w-full mt-[129px] max-md:max-w-full max-md:mt-10">
      <div className="bg-white z-0 flex min-h-[464px] w-full max-md:max-w-full" />
      <div className="absolute z-0 flex w-[1195px] max-w-full flex-col items-center left-[125px] right-[120px] bottom-[37px]">
        <div className="w-full max-md:max-w-full">
          <div className="flex w-full justify-center flex-wrap max-md:max-w-full">
            <div className="flex min-w-60 flex-col flex-1 shrink basis-[0%] pr-[67px]">
              <div className="flex items-center gap-6">
                <Link to="/" className="self-stretch w-[154px] my-auto">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/a7e79ca4c57b230c8810fc1f4e2c7fa7050d47d4?placeholderIfAbsent=true"
                    alt="MasterCab Logo"
                    className="aspect-[3.95] object-contain w-full"
                  />
                </Link>
              </div>
              <div className="z-10 flex items-stretch gap-2.5 text-sm text-[rgba(45,45,45,1)] font-normal mt-8">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/be30d26704857ebee6260c24cce40e958dac4b95?placeholderIfAbsent=true"
                  alt="Contact"
                  className="aspect-[1] object-contain w-4 shrink-0"
                />
                <p>
                  +919503675533xyz@gmail.com
                  <br />
                  Wherever you go, MasterCab gets you there hassle-free!
                </p>
              </div>
            </div>

            <nav className="font-normal w-28">
              <h3 className="text-[rgba(12,83,139,1)] text-lg">Useful Links</h3>
              <div className="w-full text-base text-[rgba(45,45,45,1)] mt-6">
                <Link to="/contact" className="block">
                  Contact Us
                </Link>
                <Link to="/about" className="block mt-3">
                  About
                </Link>
                <Link to="/services" className="block mt-3">
                  Services
                </Link>
              </div>
            </nav>

            <div className="min-w-60 w-[264px]">
              <h3 className="text-[rgba(12,83,139,1)] text-lg font-normal">
                Any Questions?
              </h3>
              <p className="text-[rgba(45,45,45,1)] text-sm font-normal mt-6">
                You can contact us directly via
              </p>
              <form onSubmit={handleSubmit} className="w-full mt-6">
                <div className="relative w-full">
                  <div className="bg-[rgba(45,45,45,1)] z-0 flex min-h-10 w-full border-l-[5px] border-[rgba(245,149,79,1)]" />
                  <div className="absolute z-0 flex w-full max-w-[248px] items-center gap-[40px_100px] left-4 right-0 bottom-0">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Your Email Here"
                      className="text-white text-sm font-semibold self-stretch flex-1 shrink basis-[0%] my-auto bg-transparent outline-none"
                    />
                    <button
                      type="submit"
                      className="self-stretch flex items-center gap-2.5 justify-center w-10 my-auto"
                    >
                      <img
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/4f8f1726afaff001ac6d9e8045329608ffc6bea7?placeholderIfAbsent=true"
                        alt="Submit"
                        className="aspect-[1] object-contain w-10 self-stretch my-auto"
                      />
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>

          <div className="flex w-full items-center gap-[40px_83px] justify-center flex-wrap mt-[60px] max-md:max-w-full max-md:mt-10">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/02fb96c22a2d03d452432c69eb8a83b777a4b842?placeholderIfAbsent=true"
              alt="Decoration"
              className="object-contain w-full self-stretch min-w-60 flex-1 shrink basis-4 my-auto"
            />
            <div className="self-stretch flex items-stretch gap-4 w-[239px] my-auto pl-4">
              <div className="flex gap-2.5">
                <div className="border flex min-h-10 w-10 rounded-[50%] border-[rgba(45,45,45,1)] border-solid" />
              </div>
              <div className="flex gap-2.5">
                <div className="border flex min-h-10 w-10 rounded-[50%] border-[rgba(45,45,45,1)] border-solid" />
              </div>
              <div className="flex gap-2.5">
                <div className="border flex min-h-10 w-10 rounded-[50%] border-[rgba(45,45,45,1)] border-solid" />
              </div>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/ec4a21262088f8293490d0ec5e1fef8920fcb7ad?placeholderIfAbsent=true"
                alt="Social Media"
                className="aspect-[1.7] object-contain w-[68px] z-10 shrink-0 max-md:mr-[-13px]"
              />
            </div>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/f831aed78bd7a2547816c03a019f9bbf4e457985?placeholderIfAbsent=true"
              alt="Decoration"
              className="object-contain w-full self-stretch min-w-60 flex-1 shrink basis-4 my-auto"
            />
          </div>
        </div>

        <div className="flex w-full items-center justify-center text-sm text-[rgba(45,45,45,1)] font-light flex-wrap mt-[60px] max-md:max-w-full max-md:mt-10">
          <div className="text-center self-stretch grow shrink w-[272px] my-auto">
            © 2025 Mastercab. All Rights Reserved.
          </div>
          <div className="self-stretch flex min-w-60 gap-[40px_60px] grow shrink w-[252px] my-auto">
            <Link to="/privacy" className="text-center w-[101px]">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-right flex-1 shrink basis-[0%]">
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
