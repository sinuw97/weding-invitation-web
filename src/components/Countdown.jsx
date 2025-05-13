import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const slideUp = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: "easeOut" },
  viewport: { once: false, amount: 0.3 },
};

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
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <div className="countdown__container">
      {timeArray.map((item, index) => (
        <motion.div className="countdown-box" key={index} {...slideUp}>
          <motion.div
            className="countdown__number"
            key={index}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <h4>{item.value}</h4>
          </motion.div>
          <div className="countdown__text">
            <h4>{item.label}</h4>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Countdown;
