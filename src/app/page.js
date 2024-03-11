import { getSchoolDetails } from "@/lib/services/schools/schoolservices";
import dynamic from "next/dynamic";
import injectToken from "./actions";
const Home = dynamic(() => import("@/components/Home/Home"));
export default async function page() {
  await injectToken();
  let school = {};
  try {
    school = await getSchoolDetails();
  } catch (error) {}
  return (
    <>
      <Home school={school} />
    </>
  );
}
