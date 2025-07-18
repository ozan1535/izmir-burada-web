/* "use client";
import { useEffect, useState } from "react";

// Helper function to create a valid Date object for the prayer time
function getPrayerDate(prayerTime: string): Date {
  // const currentDate = new Date();
  // const [hours, minutes] = prayerTime.split(":").map(Number); // Split and convert time to numbers
  // currentDate.setHours(hours, minutes, 0, 0); // Set hours and minutes to the prayer time
  // return currentDate;
  const normalizedTime = prayerTime.replace(".", ":");
  const [hours, minutes] = normalizedTime.split(":").map(Number);
  const currentDate = new Date();
  currentDate.setHours(hours, minutes || 0, 0, 0);
  return currentDate;
}

// Helper function to format numbers with leading zero
function formatWithLeadingZero(number: number) {
  console.log(number < 10 ? `0${number}` : number, "formatWithLeadingZero");
  return number < 10 ? `0${number}` : number;
}

const Countdown = ({ targetTime }: { targetTime: string }) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(targetTime));

  // Update the countdown every second
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetTime));
    }, 1000);

    // Clear the interval on component unmount
    return () => clearInterval(intervalId);
  }, [targetTime]);

  function calculateTimeLeft(targetTime: string) {
    const currentTime = new Date();
    const targetDate = getPrayerDate(targetTime); // Get a valid Date object

    const timeDiff = targetDate.getTime() - currentTime.getTime();

    console.log(
      currentTime,
      timeDiff,
      targetDate.getTime(),
      currentTime.getTime(),
      targetTime,
      "hehehehe"
    );
    if (timeDiff <= 0) {
      return { hours: 0, minutes: 0, seconds: 0 };
    }

    const hours = Math.floor(timeDiff / (1000 * 60 * 60));
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

    return { hours, minutes, seconds };
  }

  return (
    <div className="text-center">
      <p className="text-lg font-semibold">Ezana Kalan Süre</p>
      <p className="text-2xl font-black">
        {formatWithLeadingZero(timeLeft.hours)}
        {":"}
        {formatWithLeadingZero(timeLeft.minutes)}
        {":"}
        {formatWithLeadingZero(timeLeft.seconds)}
      </p>
    </div>
  );
};

export default Countdown;
 */

"use client";

import { useEffect, useState } from "react";
import { DateTime } from "luxon";

const Countdown = ({ targetTime }: { targetTime: string }) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(targetTime));

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetTime));
    }, 1000);

    return () => clearInterval(interval);
  }, [targetTime]);

  function calculateTimeLeft(prayerTime: string) {
    const [h, m] = prayerTime.replace(".", ":").split(":").map(Number);

    const now = DateTime.now().setZone("Europe/Istanbul");
    const target = now.set({ hour: h, minute: m, second: 0, millisecond: 0 });

    const diff = target.diff(now, ["hours", "minutes", "seconds"]);

    if (diff.as("milliseconds") <= 0) {
      return { hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      hours: diff.hours,
      minutes: diff.minutes,
      seconds: Math.floor(diff.seconds),
    };
  }

  const format = (num: number) => String(Math.floor(num)).padStart(2, "0");

  return (
    <div className="text-center">
      <p className="text-lg font-semibold">Ezana Kalan Süre</p>
      <p className="text-2xl font-black">
        {format(timeLeft.hours)}:{format(timeLeft.minutes)}:
        {format(timeLeft.seconds)}
      </p>
    </div>
  );
};

export default Countdown;
