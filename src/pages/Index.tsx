import { MainNav } from "@/components/layout/MainNav";
import { Footer } from "@/components/layout/Footer";
import { BookingForm } from "@/components/ui/BookingForm";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";

const Index = () => {
  return (
    <div className="bg-white flex w-full flex-col overflow-hidden items-stretch pt-[46px] max-md:max-w-full">
      <header>
        <MainNav />
      </header>

      <main>
        {/* Hero Section */}
        <section>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/367db2ba8a178a6f0a20abecf8736b5cbf518d2d?placeholderIfAbsent=true"
            alt="Hero"
            className="aspect-[4.61] object-contain w-full mt-[35px] max-md:max-w-full"
          />
        </section>

        {/* Booking Section */}
        <section className="bg-[rgba(5,5,5,1)] flex w-full flex-col items-stretch mt-6 max-md:max-w-full">
          <div className="self-center z-10 flex mt-[-114px] w-full max-w-[1200px] flex-col items-stretch max-md:max-w-full">
            <div className="bg-white shadow-[0px_4px_4px_rgba(0,0,0,0.25)] self-center w-full max-w-[1117px] font-medium text-center tracking-[0.1px] leading-[1.4] px-[30px] py-[39px] rounded-[10px] max-md:max-w-full max-md:px-5">
              <div className="flex w-[694px] max-w-full items-stretch gap-5 text-lg text-[rgba(45,45,45,1)] flex-wrap">
                <div className="flex flex-col items-stretch text-[rgba(12,83,139,1)] flex-1">
                  <div className="self-center">Mastercab Drive</div>
                  <div className="bg-[rgba(12,83,139,1)] flex shrink-0 h-[3px] mt-5" />
                </div>
                <div className="flex flex-col items-stretch flex-1">
                  <div className="self-center">Booking History</div>
                  <div className="bg-[rgba(45,45,45,1)] flex shrink-0 h-[3px] mt-4" />
                </div>
                <div className="flex flex-col items-stretch whitespace-nowrap flex-1">
                  <div className="self-center">Payments</div>
                  <div className="bg-[rgba(45,45,45,1)] flex shrink-0 h-[3px] mt-4" />
                </div>
              </div>

              <BookingForm />
            </div>

            {/* Features Section */}
            <FeaturesSection />

            {/* Testimonials Section */}
            <TestimonialsSection />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
