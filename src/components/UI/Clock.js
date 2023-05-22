import React, { useState, useEffect } from "react";

const Clock = () => {
  const [days, setDays] = useState();
  const [hours, setHours] = useState();
  const [minutes, setMinutes] = useState();
  const [second, setSecond] = useState();

  let interval;
  const CountDown = () => {
    const destination = new Date("Jul 10, 2023").getTime();
    interval = setInterval(() => {
      const now = new Date().getTime();
      const different = destination - now;
      const days = Math.floor(different / (1000 * 60 * 60 * 24));

      const hours = Math.floor(
        (different % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );

      const minutes = Math.floor((different % (1000 * 60 * 60)) / (1000 * 60));

      const second = Math.floor((different % (1000 * 60)) / 1000);
      if (destination < 0) {
        clearInterval(interval.current);
      } else {
        setDays(days);
        setHours(hours);
        setMinutes(minutes);
        setSecond(second);
      }
    });
  };

  useEffect(() => {
    CountDown();
  });

  return (
    <div className="clock__wrapper d-flex align-item-center gap-3">
      <div className="clock__data d-flex align-item-center gap-3 mb-2">
        <div>
          <h1 className="text-white">{days}</h1>
          <h5 className="text-white">Days</h5>
        </div>
        <span className="text-white fs-1">:</span>
      </div>
      <div className="clock__data d-flex align-item-center gap-3">
        <div>
          <h1 className="text-white">{hours}</h1>
          <h5 className="text-white">Hours</h5>
        </div>
        <span className="text-white fs-1">:</span>
      </div>

      <div className="clock__data d-flex align-item-center gap-3">
        <div>
          <h1 className="text-white">{minutes}</h1>
          <h5 className="text-white">Minutes</h5>
        </div>
        <span className="text-white fs-1">:</span>
      </div>
      <div className="clock__data d-flex align-item-center gap-3">
        <div>
          <h1 className="text-white ">{second}</h1>
          <h5 className="text-white ">Second</h5>
        </div>
      </div>
    </div>
  );
};

export default Clock;
