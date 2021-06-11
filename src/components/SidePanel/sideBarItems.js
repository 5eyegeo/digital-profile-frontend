import DashboardIcon from "@material-ui/icons/Dashboard";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import SchoolIcon from "@material-ui/icons/School";
import GroupAddIcon from "@material-ui/icons/GroupAdd";
import LocalLibraryIcon from "@material-ui/icons/LocalLibrary";
import MeetingRoomIcon from "@material-ui/icons/MeetingRoom";
import TextureIcon from "@material-ui/icons/Texture";
import CategoryIcon from "@material-ui/icons/Category";
import LayersIcon from "@material-ui/icons/Layers";
import AcUnitIcon from '@material-ui/icons/AcUnit';
import FormatAlignCenterIcon from '@material-ui/icons/FormatAlignCenter';
import {getKey} from "../../helpers/sessionKey";

const client = JSON.parse(getKey('client')) || [];

const sideBarItem = [
  {
    id: 1,
    title: "",
    items: [
      {
        id: "dashboard",
        icon: <DashboardIcon/>,
        name: "Dashboard",
        link: "/",
      },
    ],
  },
  {
    id: 2,
    title: "",
    items: [
      {
        id: "account_authorization",
        icon: <SupervisorAccountIcon/>,
        name: "User Management",
        subitems: [
          {
            id: "groups",
            icon: <GroupAddIcon/>,
            name: "Groups",
            link: "/groups",
          },
          {
            id: "users",
            icon: <SupervisorAccountIcon/>,
            name: "Users",
            link: "/users",
          },
        ],
      },
    ],
  },
];

client.service ? client.service.map((value, index) => {
  switch (value.service) {
    case "edseed-academic":
      sideBarItem.push({
        id: 3,
        title: "",
        items: [
          {
            id: "academics",
            icon: <SchoolIcon/>,
            name: "Academics",
            subitems: [
              {
                id: "academic_group",
                icon: <MeetingRoomIcon/>,
                name: "Academic Group",
                link: "/academic-group",
              },
              {
                id: "parents",
                icon: <SupervisorAccountIcon/>,
                name: "Parents",
                link: "/parents",
              },
              {
                id: "students",
                icon: <SupervisorAccountIcon/>,
                name: "Students",
                link: "/students",
              },
              {
                id: "staff_management",
                icon: <SupervisorAccountIcon/>,
                name: "Staff",
                subitems: [
                  {
                    id: "staff_category",
                    icon: <MeetingRoomIcon/>,
                    name: "Category",
                    link: "/staff-category",
                  },
                  {
                    id: "staffs",
                    icon: <MeetingRoomIcon/>,
                    name: "All Staff",
                    link: "/staffs",
                  },
                ],
              },
              {
                id: "stake_holders",
                icon: <SupervisorAccountIcon/>,
                name: "Stake Holder",
                link: "/stake-holders",
              },
              {
                id: "academic_subject",
                icon: <LocalLibraryIcon/>,
                name: "Subjects",
                subitems: [
                  {
                    id: "subject_category",
                    icon: <MeetingRoomIcon/>,
                    name: "Category",
                    link: "/subject-category",
                  },
                  {
                    id: "subject",
                    icon: <MeetingRoomIcon/>,
                    name: "All Subject",
                    link: "/academic-subject",
                  },
                ],
              },
              {
                id: "routine",
                icon: <LocalLibraryIcon/>,
                name: "Routine",
                subitems: [
                  {
                    id: "routine_category",
                    icon: <MeetingRoomIcon/>,
                    name: "Category",
                    link: "/routine-category",
                  },
                  {
                    id: "routines",
                    icon: <MeetingRoomIcon/>,
                    name: "All Routine",
                    link: "/routine",
                  },
                ],
              },
            ],
          },
        ],
      },)
      break;
    case "edseed-attendance":
      sideBarItem.push({
        id: 4,
        title: "",
        items: [
          {
            id: "attendance",
            icon: <SchoolIcon/>,
            name: "Attendance",
            subitems: [
              {
                id: "all_attendance",
                icon: <GroupAddIcon/>,
                name: "All Attendance",
                link: "/attendance",
              },
              {
                id: "attendance_status",
                icon: <GroupAddIcon/>,
                name: "Attendance Status",
                link: "/attendance-status",
              },
              {
                id: "attendance_category",
                icon: <GroupAddIcon/>,
                name: "Attendance Category",
                link: "/attendance-category",
              },
              {
                id: "leave-category",
                icon: <GroupAddIcon/>,
                name: "Leave Category",
                link: "/leave-category",
              },
              {
                id: "leave-status",
                icon: <GroupAddIcon/>,
                name: "Leave Status",
                link: "/leave-status",
              },
            ],
          },
        ],
      },)
      break;
    case "edseed-hostel":
      sideBarItem.push({
        id: 5,
        title: "",
        items: [
          {
            id: "hostels",
            icon: <SchoolIcon/>,
            name: "Hostels",
            subitems: [
              {
                id: "groups",
                icon: <GroupAddIcon/>,
                name: "Groups",
                link: "/groups",
              },
              {
                id: "users",
                icon: <SupervisorAccountIcon/>,
                name: "Users",
                subitems: [
                  {
                    id: "articles-form",
                    icon: "add_circle",
                    name: "Articles Form",
                    link: "/article/form/new",
                  },
                ],
              },
            ],
          },
        ],
      },)
      break;
    case "edseed-exam-results":
      sideBarItem.push({
        id: 6,
        title: "",
        items: [
          {
            id: "exam_result",
            icon: <SchoolIcon/>,
            name: "Exam & Result",
            subitems: [
              {
                id: "groups",
                icon: <GroupAddIcon/>,
                name: "Groups",
                link: "/groups",
              },
              {
                id: "users",
                icon: <SupervisorAccountIcon/>,
                name: "Users",
                subitems: [
                  {
                    id: "articles-form",
                    icon: "add_circle",
                    name: "Articles Form",
                    link: "/article/form/new",
                  },
                ],
              },
            ],
          },
        ],
      },)
      break
    case "edseed-library":
      sideBarItem.push({
        id: 7,
        title: "",
        items: [
          {
            id: "library",
            icon: <SchoolIcon/>,
            name: "Library",
            subitems: [
              {
                id: "groups",
                icon: <GroupAddIcon/>,
                name: "Groups",
                link: "/groups",
              },
              {
                id: "users",
                icon: <SupervisorAccountIcon/>,
                name: "Users",
                subitems: [
                  {
                    id: "articles-form",
                    icon: "add_circle",
                    name: "Articles Form",
                    link: "/article/form/new",
                  },
                ],
              },
            ],
          },
        ],
      },)
      break;
    case "edseed-form-builder":
      sideBarItem.push({
        id: 8,
        title: "",
        items: [
          {
            id: "dynamic_form",
            icon: <FormatAlignCenterIcon/>,
            name: "Form Builder",
            link: "/dynamic-form",
          },
        ],
      },)
      break;
    case "edseed-document":
      sideBarItem.push({
        id: 9,
        title: "",
        items: [
          {
            id: "documents",
            icon: <SchoolIcon/>,
            name: "Documents",
            link: "/documents",
          },
        ],
      },)
      break;
    case "edseed-contact":
      sideBarItem.push({
        id: 10,
        title: "",
        items: [
          {
            id: "contacts",
            icon: <SchoolIcon/>,
            name: "Contacts",
            subitems: [
              {
                id: "all-contacts",
                icon: <CategoryIcon/>,
                name: "All Contacts",
                link: "/contacts",
              },
              {
                id: "address-type",
                icon: <LayersIcon/>,
                name: "Address Category",
                link: "/address-category",
              },
              {
                id: "phone-category",
                icon: <CategoryIcon/>,
                name: "Phone Category",
                link: "/phone-category",
              },
              {
                id: "email-category",
                icon: <LayersIcon/>,
                name: "Email Category",
                link: "/email-category",
              },
            ],
          },
        ],
      },)
      break
    case "edseed-gallery":
      sideBarItem.push({
        id: 11,
        title: "",
        items: [
          {
            id: "gallery",
            icon: <SchoolIcon/>,
            name: "Gallery",
            link: "/gallery",
          },
        ],
      },)
      break;
    case "edseed-id-card":
      sideBarItem.push({
        id: 12,
        title: "",
        items: [
          {
            id: "id-card",
            icon: <TextureIcon/>,
            name: "ID Card",
            subitems: [
              {
                id: "layout-category",
                icon: <CategoryIcon/>,
                name: "Layout Category",
                link: "/layout-category",
              },
              {
                id: "layouts",
                icon: <LayersIcon/>,
                name: "Layouts",
                link: "/layouts",
              },
              {
                id: "template-category",
                icon: <CategoryIcon/>,
                name: "ID Card Category",
                link: "/template-category",
              },
              {
                id: "templates",
                icon: <LayersIcon/>,
                name: "ID Cards",
                link: "/templates",
              },
            ],
          },
        ],
      },)
      break;
    case "edseed-session":
      sideBarItem.push({
        id: 13,
        title: "",
        items: [
          {
            id: "sessions",
            icon: <AcUnitIcon/>,
            name: "Sessions",
            link: "/sessions",
          },
        ],
      },)
      break;
    default:
      console.log("execute default switch condition")
  }
}) : null


sideBarItem.push(
  {
    id: 99,
    title: "",
    items: [
      {
        id: "settings",
        icon: <AcUnitIcon/>,
        name: "Settings",
        subitems: [
          {
            id: "basic-settings",
            icon: <CategoryIcon/>,
            name: "Basic Settings",
            link: "/settings",
          },
          {
            id: "email-server",
            icon: <LayersIcon/>,
            name: "Email Server",
            link: "/email-server",
          }
        ],
      },
    ],
  },
)

export default sideBarItem;
