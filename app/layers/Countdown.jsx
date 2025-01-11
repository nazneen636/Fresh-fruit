import { useState, useEffect } from "react";

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Set the target date and time
    const targetDate = new Date("2025-01-15T00:00:00").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex space-x-4  items-center">
      {Object.entries(timeLeft).map(([label, value]) => (
        <div
          key={label}
          className="bg-white shadow-md rounded-lg p-4 text-center w-[72px] md:w-20"
        >
          <p className="text-2xl md:text-3xl font-medium text-center">
            {String(value).padStart(2, "0")}
          </p>
          <p className="text-sm text-gray-600 text-center">
            {label.charAt(0).toUpperCase() + label.slice(1)}
          </p>
        </div>
      ))}
    </div>
  );
}
