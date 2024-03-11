import React, { useState, useEffect } from "react";

// Reusable Hook for Auto-Incrementing Counter
const useAutoIncrement = (initialValue, targetValue, speed) => {
  const [count, setCount] = useState(initialValue);

  useEffect(() => {
    const incrementInterval = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount < targetValue) {
          return prevCount + 1;
        } else {
          clearInterval(incrementInterval);
          return prevCount;
        }
      });
    }, speed);

    return () => {
      clearInterval(incrementInterval);
    };
  }, [targetValue, speed]);

  return count;
};

// Reusable Counter Widget Component
const CounterWidget = ({
  initialValue = 0,
  targetValue = 10,
  speed = 50,
  textColor = "black",
  bgColor = "white",
  title = "Counter Widget",
}) => {
  const count = useAutoIncrement(initialValue, targetValue, speed);

  return (
    <div
      className={`p-4 border border-gray-300 rounded-md text-center text-lg ${bgColor} ${textColor}`}
    >
      <h2>{title}</h2>
      <p>Count: {count}</p>
    </div>
  );
};

export default CounterWidget;
