"use server";

import Loader from "@/components/Loader/Loader";

async function Loading() {
  // call this function at top when you call any service in serverside
  return <Loader />;
}
export default Loading;
