import injectToken from "@/app/actions";
import Dashboard from "@/components/Dashboard/AdminDashboard";
import { getAllAdmissions } from "@/lib/services/admission";
import { getAllNews } from "@/lib/services/news";
import { getUsers, loadProfile } from "@/lib/services/user/userServices";
import { getEvent } from "@/lib/services/events/eventSevices";

import { getAllNotice } from "@/lib/services/notices/index";

import { getSchoolDetails } from "@/lib/services/schools/schoolservices";


async function AdminDashboard(props) {
  const isFailed = await injectToken();
  const profie = await loadProfile();
  const clientProps = {};
  clientProps.isFailed = isFailed;
  let school = await getSchoolDetails();
  let schoolUuid = school.uuid
  if (!isFailed) {
    if (profie?.userType === "ADMIN") {
      schoolUuid = "";
      clientProps.admissions = await getAllAdmissions();
    }
    clientProps.users = await getUsers({ limit: 5, page: 1 });

    clientProps.admissions = await getAllAdmissions();
    clientProps.news = await getAllNews();
    clientProps.notice = await getAllNotice();
    clientProps.events = await getEvent({limit:5,page:1});

    clientProps.news = await getAllNews(schoolUuid);
    
    clientProps.events = await getEvent({ schoolUuid, limit: 5, page: 1 });

    clientProps.isFailed = false;
    clientProps.profie = profie;
  }

  return (
    <>
      <Dashboard clientProps={clientProps} />
    </>
  );
}

export default AdminDashboard;
