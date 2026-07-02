import { useState, useEffect } from "react";

// Set offer expiration ~3 weeks from now. Update this date as needed.
const getExpirationDate = (): Date => {
  const now = new Date();
  const expiration = new Date(now);
  expiration.setDate(expiration.getDate() + 21);
  expiration.setHours(23, 59, 59, 0);
  return expiration;
};

const EXPIRATION = getExpirationDate();

interface CountdownTimerProps {
  className?: string;
  showDate?: boolean;
}

const CountdownTimer = ({ className = "", showDate = false }: CountdownTimerProps) => {
  const [timeLeft, setTimeLeft] = useState(() => getTimeLeft());

  function getTimeLeft() {
    const diff = Math.max(0, EXPIRATION.getTime() - Date.now());
    return {
      days: Math.floor(diff / 86400000),
      hours: Math.floor((diff % 86400000) / 3600000),
      minutes: Math.floor((diff % 3600000) / 60000),
      seconds: Math.floor((diff % 60000) / 1000),
    };
  }

  useEffect(() => {
    const id = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  const pad = (n: number) => String(n).padStart(2, "0");

  const dateStr = EXPIRATION.toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
  });

  return (
    <span className={className}>
      {showDate && <span>Offer Ends {dateStr} · </span>}
      <span className="inline-flex items-center gap-1 tabular-nums font-bold">
        <span className="inline-flex flex-col items-center leading-none">
          <span>{pad(timeLeft.days)}</span>
          <span className="text-[9px] font-normal uppercase opacity-70">days</span>
        </span>
        <span>:</span>
        <span className="inline-flex flex-col items-center leading-none">
          <span>{pad(timeLeft.hours)}</span>
          <span className="text-[9px] font-normal uppercase opacity-70">hrs</span>
        </span>
        <span>:</span>
        <span className="inline-flex flex-col items-center leading-none">
          <span>{pad(timeLeft.minutes)}</span>
          <span className="text-[9px] font-normal uppercase opacity-70">min</span>
        </span>
        <span>:</span>
        <span className="inline-flex flex-col items-center leading-none">
          <span>{pad(timeLeft.seconds)}</span>
          <span className="text-[9px] font-normal uppercase opacity-70">sec</span>
        </span>
      </span>
    </span>
  );
};

export default CountdownTimer;
