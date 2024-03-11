"use client";
import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";

const currentYear = new Date().getFullYear();

const AdmissionCAT = ({ onClick }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div
      className={`${
        styles.admissionOpen
      } cursor-pointer absolute z-[2] bg-sky-400 ${
        isVisible ? styles.visible : ""
      }`}
      onClick={onClick}
    >
      Admission Open {currentYear}
    </div>
  );
};

export default AdmissionCAT;
