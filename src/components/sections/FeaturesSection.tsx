export function FeaturesSection() {
  return (
    <div className="self-center w-full max-w-[1079px] mt-20 max-md:max-w-full max-md:mt-10">
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
        <div className="w-[81%] max-md:w-full max-md:ml-0">
          <div className="z-10 flex mr-[-132px] w-full flex-col max-md:max-w-full max-md:mt-10">
            <div className="flex items-stretch max-md:pr-5">
              <div className="flex w-[70px] shrink-0 h-[70px] rounded-[50%] border-white border-solid border-[3px]" />
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/5b98c7cc35a3a99c44bdedc96f20406c9f59b5d7?placeholderIfAbsent=true"
                alt="Feature line"
                className="aspect-[28.57] object-contain w-full z-10 mr-[-463px] mt-5 max-md:max-w-full"
              />
              <div className="flex w-[70px] shrink-0 h-[70px] rounded-[50%] border-white border-solid border-[3px]" />
            </div>
            <div className="flex w-[684px] max-w-full items-stretch gap-[40px_100px] text-center flex-wrap mt-5">
              <div className="flex flex-col items-stretch flex-1">
                <h3 className="rotate-[-3.7837566196560757e-13rad] text-[rgba(246,246,246,1)] text-lg font-bold self-center">
                  Unmatched Pricing
                </h3>
                <p className="rotate-[-3.7837566196560757e-13rad] text-[rgba(204,204,204,1)] text-base font-normal leading-6 mt-5">
                  Enjoy a flat rate for up to 40 km (one way), providing cost
                  affordability.
                </p>
              </div>
              <div className="flex flex-col items-stretch flex-1">
                <h3 className="rotate-[-3.7837566196560757e-13rad] text-[rgba(246,246,246,1)] text-lg font-bold self-center">
                  Premium Fleet
                </h3>
                <p className="rotate-[-3.7837566196560757e-13rad] text-[rgba(204,204,204,1)] text-base font-normal leading-6 mt-5">
                  Mercedes-Benz E-Class and Toyota Innova Hycross.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[19%] ml-5 max-md:w-full max-md:ml-0">
          <div className="flex grow flex-col items-center text-center max-md:mt-10">
            <div className="flex w-[70px] shrink-0 h-[70px] rounded-[50%] border-white border-solid border-[3px]" />
            <h3 className="rotate-[-3.7837566196560757e-13rad] text-[rgba(246,246,246,1)] text-lg font-bold mt-5">
              24x7 Help Desk
            </h3>
            <p className="rotate-[-3.7837566196560757e-13rad] text-[rgba(204,204,204,1)] text-base font-normal leading-6 self-stretch mt-5">
              Dedicated 24x7 Help Desk and Relationship Team
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
