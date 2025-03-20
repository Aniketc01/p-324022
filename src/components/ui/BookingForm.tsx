import { useState } from "react";
import { Button } from "@/components/ui/button";

export function BookingForm() {
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedRide, setSelectedRide] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle booking submission
    console.log({ selectedCity, selectedRide, selectedDate, selectedTime });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-stretch gap-5 text-base text-[#2d2d2d] flex-wrap justify-between mt-6"
    >
      <div>
        <div className="border flex items-stretch gap-5 justify-between px-[26px] py-4 rounded-[10px] border-[rgba(45,45,45,0.5)] border-solid max-md:px-5">
          <select
            value={selectedCity}
            onChange={(e) => setSelectedCity(e.target.value)}
            className="bg-transparent outline-none"
          >
            <option value="">Select City</option>
            <option value="mumbai">Mumbai</option>
            <option value="pune">Pune</option>
            <option value="delhi">Delhi</option>
          </select>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/3e982a680c743cedcb087a1410796253bad33d49?placeholderIfAbsent=true"
            alt="Dropdown"
            className="aspect-[1] object-contain w-4 shrink-0"
          />
        </div>
      </div>

      <div>
        <div className="border flex items-stretch gap-5 justify-between px-[23px] py-4 rounded-[10px] border-[rgba(45,45,45,0.5)] border-solid max-md:px-5">
          <select
            value={selectedRide}
            onChange={(e) => setSelectedRide(e.target.value)}
            className="bg-transparent outline-none"
          >
            <option value="">Choose Ride</option>
            <option value="sedan">Sedan</option>
            <option value="suv">SUV</option>
            <option value="luxury">Luxury</option>
          </select>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/3e982a680c743cedcb087a1410796253bad33d49?placeholderIfAbsent=true"
            alt="Dropdown"
            className="aspect-[1] object-contain w-4 shrink-0"
          />
        </div>
      </div>

      <div className="border flex items-stretch gap-[23px] px-[25px] py-3.5 rounded-[10px] border-[rgba(45,45,45,0.5)] border-solid max-md:px-5">
        <input
          type="date"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
          className="bg-transparent outline-none"
          placeholder="Select Date"
        />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/37266f47b73c82d5d594c1c20a0a4f7d7dc1d8a8?placeholderIfAbsent=true"
          alt="Calendar"
          className="aspect-[1] object-contain w-5 shrink-0"
        />
      </div>

      <div className="border flex items-stretch gap-[22px] px-[25px] py-3.5 rounded-[10px] border-[rgba(45,45,45,0.5)] border-solid max-md:px-5">
        <input
          type="time"
          value={selectedTime}
          onChange={(e) => setSelectedTime(e.target.value)}
          className="bg-transparent outline-none"
          placeholder="Select Time"
        />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/0010911019a7193f853193db2e65b6d7cc9972fe?placeholderIfAbsent=true"
          alt="Clock"
          className="aspect-[1] object-contain w-5 shrink-0"
        />
      </div>

      <Button
        type="submit"
        className="bg-[rgba(12,83,139,1)] text-white font-semibold px-[41px] py-[17px] rounded-[10px] max-md:px-5"
      >
        Book Now -&gt;
      </Button>
    </form>
  );
}
