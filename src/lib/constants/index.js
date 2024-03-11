import moment from "moment";


export const BASE_URL = 'https://pgpl-backend-services.vercel.app/api/v1';



export const CREDINITAIL = {
  email: "",
  password: "",
};
export const ERR_MSG_PREFIX = "The following fields are blank:";
export const ALERT_TIMEOUT = 3000;
export const NEWSINITAIL = {
  title: "",
  content: "",
  thumbNail: "",
  publishedDate: moment().format("YYYY-MM-DD HH:mm:ss"),
  reDirectedLink: "",
  organizationUuid: ""
};


export const NOTICES ={
  "title": "Mid term  test",
  "file": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
  "description": "MST - 1",
  "endDate": moment().format("YYYY-MM-DD HH:mm:ss")
}

export const CONTACT_INITIAL = {
  firstName: "",
  lastName: "",
  phone: "",
  email: "",
  message: "",
};

export const USER_INITIAL = {
  email: "",
  phone: "",
  password: "",
  firstName: "",
  lastName: "",
  isActive: false,
  type: "",
  isVerified: true,
  address: "",
  state: "",
  city: "",
  pinCode: "",
  profilePicture: "",
  isSuspicious: false,
  roles: [],
};
export const SELECT_TYPE = "Select user type";
export const userTypes = [
  "ADMIN",
  "FACULTY",
  "PRINCIPLE",
  "STUDENT",
  "FRONT_DESK",
  "DEVELOPER",
];

export const EVENTS_INITIAL = {
  title: "",
  description: "",
  thumbNail: "",
  location: "",
  startDate: "2024-01-22T10:00:00Z",
  category: "",
  endDate: "2024-01-22T18:00:00Z",
  OrganizationUuid: "89e7bf84-7422-42f4-b5e4-acc76b582dd6",
  type: "",
  registrationRequired: false,
  capacity: 0,
  registeredParticipants: 0,
};

export const SCHOOL_INITIALS = {
  name: "",
  address: "",
  city: "",
  pinCode: "",
  phone: "",
  whatsappNo: "",
  establishedDate: "",
  state: "",
  category: "",
  timing: "",
  feeStructure: "",
  image: "",
  principalUuid: "11adb2ba-4b00-4774-8a3a-9cf16d20e44d",
  createdBy: "0f7b051d-5470-442e-b066-243950f1881c",
  updatedBy: "0f7b051d-5470-442e-b066-243950f1881c",
};

export const ADMIN ='ADMIN'