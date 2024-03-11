"use client";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

//This component is used to keep track of route
//if user remain in same route then no need to increase count
// if so then increment count by one.
const TrackRoute = () => {
  const currPath = usePathname();
  useEffect(() => {
    const isFirstRender = JSON.parse(localStorage.getItem("isFirstRender"));
    if (!isFirstRender) {
      const currRoute = localStorage.getItem("currRoute");
      const routeCount = Number(localStorage.getItem("routeCount"));
      if (!routeCount && currPath === "/") {
        localStorage.setItem("isFirstRender", true);
      } else {
        localStorage.setItem("routeCount", 1);
        localStorage.setItem("isFirstRender", false);
        if (currRoute !== currPath) {
          localStorage.setItem("routeCount", Number(routeCount + 1));
          localStorage.setItem("currRoute", currPath);
        }
      }
    }
  }, [currPath]);
  return null;
};

export default TrackRoute;
