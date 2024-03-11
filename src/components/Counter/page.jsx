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
  speed = 100,
  textColor = "black",
  bgColor = "white",
  title = "Counter Widget",
}) => {
  const count = useAutoIncrement(initialValue, targetValue, speed);
  return (
    <div
      className={`py-3 self-stretch text-black text-2xl font-bold    rounded-md `}
    >
      +{count}
    </div>
  );
};
export default CounterWidget;
