import { TestimonialCard } from "@/components/ui/TestimonialCard";

export function TestimonialsSection() {
  const testimonials = [
    {
      text: "I've been using this service for months, and I couldn't be happier! Always on time, friendly drivers, and comfortable rides. Highly recommend!",
      name: "Aniket Chavan",
      rating:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/3c6f13b0c6b9c36edbe36daba9a9e3c2e810c4c3?placeholderIfAbsent=true",
      accentColor: "blue" as const,
    },
    {
      text: "Fantastic experience! My driver was professional, and the car was spotless. I'll definitely be using this for all my trips around town.",
      name: "Jayesh Chitte",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/81ec9e4f53a4fcb571dc61f906b81969c2e12f90?placeholderIfAbsent=true",
      rating:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/2b0cc2ab11c5bfdd97bd54b39a1592929ed63301?placeholderIfAbsent=true",
      accentColor: "orange" as const,
      topAccent: true,
    },
    {
      text: "I've tried several cab services, but none compare to this one. Easy booking, great prices, and top-notch service every time",
      name: "Govind Salunke",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/454380b47b1508fe6bf4b07b7b4ca673f7070442?placeholderIfAbsent=true",
      rating:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/b243bbf48da3271c381e610e2b39c031981e770a?placeholderIfAbsent=true",
      accentColor: "blue" as const,
      topAccent: true,
    },
    {
      text: "The ride was so comfortable, and the driver was very friendly. Great value for money.",
      name: "Digvijay Hazare",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/0a195d6ff529eb6c07b867aa37df73b633f14fab?placeholderIfAbsent=true",
      rating:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/aaa292ae16fabb64d5e67c895ccd147ab84306e9?placeholderIfAbsent=true",
      accentColor: "orange" as const,
      topAccent: true,
    },
    {
      text: "I never have to worry about getting to my destination on time. Always a smooth ride!",
      name: "Pratik Satre",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/31574f188e8cb4cf7bb40eb381d5771a859da9f4?placeholderIfAbsent=true",
      rating:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/b62bb4df008658b005846fd65b5345156b4636b0?placeholderIfAbsent=true",
      accentColor: "blue" as const,
      topAccent: true,
    },
    {
      text: "Would definitely recommend Adidas shoes and will definitely be ordering again.",
      name: "Jane Cooper",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/159d532205f9f7523c304c391b0f32d8bbd81d76?placeholderIfAbsent=true",
      accentColor: "orange" as const,
      topAccent: true,
    },
  ];

  return (
    <>
      <h2 className="text-white text-4xl font-medium leading-[1.4] tracking-[0.1px] text-center ml-[41px] mt-[93px] max-md:ml-2.5 max-md:mt-10">
        Service Triumphs
      </h2>
      <div className="bg-white flex shrink-0 h-[3px] mt-1.5 max-md:max-w-full" />
      <div className="flex items-stretch gap-5 flex-wrap justify-between mt-[60px] max-md:mt-10">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} {...testimonial} />
        ))}
      </div>
    </>
  );
}
