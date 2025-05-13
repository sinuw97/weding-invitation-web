import React, { useState, useEffect } from 'react';

const Countdown = ({ targetData }) => {
  const [timeLeft, setTimeLeft] = useState(null);

  useEffect(() => {
    const calculate = () => {
      const diff = +new Date(targetData) - +new Date();
      let time = {};

      if (diff > 0) {
        time = {
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((diff / 1000 / 60) % 60),
          seconds: Math.floor((diff / 1000) % 60),
        };
      } else {
        time = { days: 0, hours: 0, minutes: 0, seconds: 0 };
      }

      return time;
    };

    setTimeLeft(calculate());

    const timer = setInterval(() => {
      setTimeLeft(calculate());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetData]);

  if (!timeLeft) return null;

  const timeArray = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds },
  ];

  return (
    <div className="countdown__container">
      {timeArray.map((item, index) => (
        <div className="countdown-box" key={index}>
          <div className="countdown__number">
            <h4>{item.value}</h4>
          </div>
          <div className="countdown__text">
            <h4>{item.label}</h4>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Countdown;
