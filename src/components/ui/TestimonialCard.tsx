interface TestimonialCardProps {
  text: string;
  name: string;
  image?: string;
  rating?: string;
  accentColor: "blue" | "orange";
  topAccent?: boolean;
}

export function TestimonialCard({
  text,
  name,
  image,
  rating,
  accentColor,
  topAccent,
}: TestimonialCardProps) {
  const bgColor =
    accentColor === "blue" ? "rgba(12,83,139,1)" : "rgba(245,149,79,1)";

  return (
    <div className="bg-white shadow-[0px_29px_64px_rgba(69,14,21,0.16)] relative min-h-[350px]">
      {topAccent && (
        <div
          className="absolute z-0 flex min-h-1 w-14 h-1 left-0 -top-1"
          style={{ backgroundColor: bgColor }}
        />
      )}

      <div className="z-0 w-full flex-1 p-4">
        {rating && (
          <div className="flex w-full items-center justify-between">
            <img
              src={rating}
              alt="Rating"
              className="aspect-[5.1] object-contain w-[102px] shadow-[0px_34px_73px_rgba(21,21,21,0.15)] self-stretch my-auto"
            />
          </div>
        )}
        <div className="text-[rgba(45,45,45,1)] text-base font-normal leading-6 flex-1 mt-[18px]">
          {text}
        </div>
      </div>

      <div
        className="z-0 flex w-full items-center gap-1 text-base text-white font-extrabold mt-3 px-4 py-5"
        style={{ backgroundColor: bgColor }}
      >
        {image && (
          <img
            src={image}
            alt={name}
            className="aspect-[1] object-contain w-[50px] self-stretch shrink-0 my-auto rounded-[50%]"
          />
        )}
        <div className="self-stretch my-auto">{name}</div>
      </div>
    </div>
  );
}
