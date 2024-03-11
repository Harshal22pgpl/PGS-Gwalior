import React from "react";
import NewsParentForm from "@/components/News/NewsParentForm";
import {
  getSchoolDetails,
  getSchools,
} from "@/lib/services/schools/schoolservices";
import { loadProfile } from "@/lib/services/user/userServices";
import injectToken from "@/app/actions";
import { getAllNews } from "@/lib/services/news";

export default async function page() {
  const isFailed = await injectToken();
  const profie = await loadProfile();
  const clientProps = {};
  clientProps.isFailed = isFailed;
  let school = await getSchoolDetails();
  let schoolUuid = school.uuid
  if (!isFailed) {
    let schools = [];
    if (profie?.userType === "ADMIN") {
      schoolUuid = "";
      schools = await getSchools();
      clientProps.schools = schools.map(({ uuid, city }) => ({
        value: uuid,
        label: city,
      }));
    }
    clientProps.newsList = await getAllNews(schoolUuid);
    clientProps.isFailed = false;
    clientProps.profie = profie;
    clientProps.schoolUuid = schoolUuid;
  }

  return (
    <div>
      <NewsParentForm clientProps={clientProps} />
    </div>
  );
}
